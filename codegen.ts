import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:4000/graphql",
  documents: ["src/**/*.graphql"],
  generates: {
    "./src/@generated/": {
      preset: "client",
      plugins: ["typescript", "typescript-operations"],
      presetConfig: {
        gqlTagName: "appGql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
