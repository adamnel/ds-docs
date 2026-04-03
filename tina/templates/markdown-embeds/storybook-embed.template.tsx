export const StorybookEmbedTemplate = {
  name: "storybookEmbed",
  label: "Storybook Embed",
  ui: {
    defaultItem: {
      storyId: "components-button--raised",
      height: 300,
      embedMode: "story",
    },
  },
  fields: [
    {
      type: "string",
      name: "storyId",
      label: "Story ID",
      required: true,
      description:
        "From Storybook: canvas stories use ids like components-button--raised. Docs pages usually use *--docs (e.g. components-button--docs) when Embed type is Docs page.",
    },
    {
      type: "string",
      name: "embedMode",
      label: "Embed type",
      description:
        "Canvas: single story preview (viewMode=story). Docs page: MDX docs with preview and props (viewMode=docs); use a docs story id.",
      options: ["story", "docs"],
      defaultValue: "story",
    },
    {
      type: "number",
      name: "height",
      label: "Height (px)",
      description:
        "Iframe height. Use a larger value for Docs page embeds if content is clipped.",
      defaultValue: 300,
    },
  ],
};

export default StorybookEmbedTemplate;
