/** Needs at least one non-hidden field so Tina’s GraphQL filter type is not empty (see DocsBodyIconsUsageGuideFilter). */
export const IconsUsageGuideTemplate = {
  name: "iconsUsageGuide",
  label: "Icons usage (tables)",
  ui: {
    defaultItem: {
      variant: "default",
    },
  },
  fields: [
    {
      type: "string",
      name: "variant",
      label: "Layout",
      options: ["default"],
      required: true,
    },
  ],
};

export default IconsUsageGuideTemplate;
