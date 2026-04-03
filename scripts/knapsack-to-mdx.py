#!/usr/bin/env python3
"""Convert Knapsack-exported .md to Tina MDX (images → imagePlaceholder, strip footers, fix links)."""
from __future__ import annotations

import re
import sys
from pathlib import Path


def strip_footer(text: str) -> str:
    markers = (
        "To pick up a draggable item",
        "[Powered by Knapsack]",
        "*   [Workspace Repo]",
    )
    cut = len(text)
    for m in markers:
        i = text.find(m)
        if i != -1:
            cut = min(cut, i)
    text = text[:cut].rstrip()
    return text.rstrip()


def image_to_placeholder(m: re.Match[str]) -> str:
    alt = m.group(1).strip() or "image"
    safe = alt.replace("--", "_").replace(" ", "_")
    return f'<imagePlaceholder imageId="{safe}" />'


def fix_links(text: str) -> str:
    text = text.replace(
        "/site/covalent/latest/pages/voice-and-tone",
        "/docs/content/voice-and-tone",
    )
    text = text.replace(
        "/site/covalent/nhYvdlKSIj/pages/voice-and-tone",
        "/docs/content/voice-and-tone",
    )
    text = text.replace("/site/covalent/latest/pages/", "/docs/content/")
    text = text.replace(
        "/site/covalent/OnqLe3iEF/pages/color", "/docs/foundations/color"
    )
    return text


def normalize_headings(text: str) -> str:
    text = re.sub(r"\n# \s*\n", "\n\n", text)
    text = re.sub(r"\n## \s*\n", "\n\n", text)
    return text


def strip_leading_h1(text: str) -> str:
    """Remove first '# Covalent / …' or '# Prefix / …' line (title is in frontmatter)."""
    lines = text.split("\n")
    if not lines:
        return text
    if re.match(r"^#\s+", lines[0]):
        return "\n".join(lines[1:]).lstrip()
    return text


def main() -> None:
    path = Path(sys.argv[1])
    title = sys.argv[2]
    raw = path.read_text(encoding="utf-8")

    body = strip_leading_h1(raw)
    body = strip_footer(body)
    body = re.sub(r"!\[([^\]]*)\]\([^)]+\)", image_to_placeholder, body)
    body = fix_links(body)
    body = normalize_headings(body)

    now = "2026-04-03T12:00:00.000Z"
    fm = f"""---
title: {title}
last_edited: '{now}'
auto_generated: false
---

"""
    sys.stdout.write(fm + body.strip() + "\n")


if __name__ == "__main__":
    main()
