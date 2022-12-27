
import type { CodegenConfig } from '@graphql-codegen/cli';
import { loadEnvConfig } from '@next/env'

loadEnvConfig(process.cwd())

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.HYPERGRAPH_CONTENT_API,
  documents: "graphql/*.graphql",
  generates: {
    "generated/": {
      preset: "client",
      plugins: []
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
