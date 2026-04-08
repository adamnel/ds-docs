export const ImagePlaceholderTemplate = {
  name: "imagePlaceholder",
  label: "Image placeholder",
  ui: {
    defaultItem: {
      imageId: "image-id",
    },
  },
  fields: [
    {
      type: "string",
      name: "imageId",
      label: "Image ID",
      required: true,
    },
  ],
};

export default ImagePlaceholderTemplate;
