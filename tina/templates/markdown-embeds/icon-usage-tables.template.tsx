export const IconUsageTablesTemplate = {
  name: "iconUsageTables",
  label: "Icon usage tables",
  ui: {
    defaultItem: {
      variant: "functions",
    },
  },
  fields: [
    {
      type: "string",
      name: "variant",
      label: "Which table",
      options: ["functions", "states", "visualizations"],
      required: true,
    },
  ],
};

export default IconUsageTablesTemplate;
