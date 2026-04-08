const defaultRichText = (label: string) => ({
  type: "root",
  children: [
    {
      type: "p",
      children: [{ type: "text", text: label }],
    },
  ],
});

export const DoDontTemplate = {
  name: "doDont",
  label: "Do / Don't",
  ui: {
    defaultItem: {
      doBody: defaultRichText("Describe the recommended approach."),
      dontBody: defaultRichText("Describe what to avoid."),
    },
  },
  fields: [
    {
      name: "doBody",
      label: "Do",
      type: "rich-text",
    },
    {
      name: "dontBody",
      label: "Don't",
      type: "rich-text",
    },
  ],
};

export default DoDontTemplate;
