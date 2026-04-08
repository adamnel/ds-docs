import { defineConfig } from "tinacms";
import { schema } from "./schema";

export const config = defineConfig({
  schema,
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "",
    },
    accept: ["image/*", "video/*", "application/json", ".json"],
  },
  build: {
    publicFolder: "public",
    outputFolder: "admin",
    basePath: process.env.TINA_BASE_PATH || "",
  },
});

export default config;
