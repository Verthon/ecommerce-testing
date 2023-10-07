import type { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.HYPERGRAPH_CONTENT_API,
  documents: "app/api/graphql/*.graphql",
  generates: {
    "generated/": {
      preset: "client",
      plugins: [],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
  config: {
    defaultScalarType: "unknown",
    skipTypename: true,
    useTypeImport: true,
    enumsAsTypes: true,
  },
};

export default config;
