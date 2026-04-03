#!/usr/bin/env python3
"""Merge Usage + Style + Web components + Accessibility Knapsack exports into one MDX page."""
from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
INCOMING = ROOT / "incoming"

# Curated by hand — do not overwrite
SKIP_NAMES = {
    "Button",
    "Action-ribbon",
    "Checkbox",
    "Chip-set",
    "Code-snippet",
    "Dialog",
}


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
    return text[:cut].rstrip()


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
    text = text.replace(
        "/site/covalent/latest/pattern/",
        "https://teradata.github.io/covalent/docs/components/?path=/docs/",
    )
    return text


def strip_leading_h1(text: str) -> str:
    lines = text.split("\n")
    if not lines:
        return text
    if re.match(r"^#\s+", lines[0]):
        return "\n".join(lines[1:]).lstrip()
    return text


def process_body(raw: str) -> str:
    body = strip_leading_h1(raw)
    body = strip_footer(body)
    body = re.sub(r"!\[([^\]]*)\]\([^)]+\)", image_to_placeholder, body)
    body = fix_links(body)
    body = re.sub(r"\n# \s*\n", "\n\n", body)
    body = re.sub(r"\n## \s*\n", "\n\n", body)
    return body.strip()


def find_web_paths(name: str) -> list[str]:
    """Return existing Web component markdown paths (handles Web- vs Web-components casing)."""
    candidates = [
        f"Web-components-{name}-Covalent-Knapsack.md",
        f"Web-Components-{name}-Covalent-Knapsack.md",
    ]
    # Slider has an additional range doc
    if name == "Slider":
        candidates.extend(
            [
                "Web-components-Range-Slider-Covalent-Knapsack.md",
            ]
        )
    out: list[str] = []
    for c in candidates:
        if (INCOMING / c).is_file() and c not in out:
            out.append(c)
    return out


def name_to_title(name: str) -> str:
    """Radio-icon -> Radio icon (simple title case per segment)."""
    parts = name.split("-")
    fixed: list[str] = []
    for i, p in enumerate(parts):
        if p.lower() == "icon" and i > 0:
            fixed.append("icon")
        else:
            fixed.append(p.capitalize())
    return " ".join(fixed)


def name_to_kebab_file(name: str) -> str:
    return name.lower().replace(" ", "-")


def merge_one(name: str) -> tuple[str, str]:
    """Return (filename_stem, mdx_content)."""
    sections: list[tuple[str, str]] = []

    usage = INCOMING / f"Usage-{name}-Covalent-Knapsack.md"
    if usage.is_file():
        sections.append(("Usage", process_body(usage.read_text(encoding="utf-8"))))

    style = INCOMING / f"Style-{name}-Covalent-Knapsack.md"
    if style.is_file():
        sections.append(("Style", process_body(style.read_text(encoding="utf-8"))))

    web_paths = find_web_paths(name)
    web_parts: list[str] = []
    for wp in web_paths:
        chunk = process_body((INCOMING / wp).read_text(encoding="utf-8"))
        if len(web_paths) > 1:
            label = wp.replace("-Covalent-Knapsack.md", "").replace("Web-components-", "").replace(
                "Web-Components-", ""
            )
            web_parts.append(f"### {label.replace('-', ' ')}\n\n{chunk}")
        else:
            web_parts.append(chunk)
    if web_parts:
        sections.append(("Web components", "\n\n".join(web_parts)))

    acc = INCOMING / f"Accessibility-{name}-Covalent-Knapsack.md"
    if acc.is_file():
        sections.append(("Accessibility", process_body(acc.read_text(encoding="utf-8"))))

    if not sections:
        raise FileNotFoundError(f"No incoming files for {name}")

    body_parts: list[str] = []
    for heading, content in sections:
        if content:
            body_parts.append(f"## {heading}\n\n{content}")

    title = name_to_title(name)
    kebab = name_to_kebab_file(name)
    now = "2026-04-03T12:00:00.000Z"
    mdx = f"""---
title: {title}
last_edited: '{now}'
auto_generated: false
---

{chr(10).join(body_parts)}
"""
    return kebab, mdx


def discover_usage_names() -> list[str]:
    names: list[str] = []
    for p in sorted(INCOMING.glob("Usage-*-Covalent-Knapsack.md")):
        stem = p.name.removeprefix("Usage-").removesuffix("-Covalent-Knapsack.md")
        names.append(stem)
    return names


def main() -> None:
    if len(sys.argv) > 1:
        names = sys.argv[1:]
    else:
        names = [n for n in discover_usage_names() if n not in SKIP_NAMES]

    out_dir = ROOT / "content/docs/components"
    out_dir.mkdir(parents=True, exist_ok=True)

    for name in names:
        if name in SKIP_NAMES:
            continue
        try:
            kebab, mdx = merge_one(name)
        except FileNotFoundError as e:
            print("skip", name, e, file=sys.stderr)
            continue
        target = out_dir / f"{kebab}.mdx"
        target.write_text(mdx, encoding="utf-8")
        print(target.relative_to(ROOT))


if __name__ == "__main__":
    main()
