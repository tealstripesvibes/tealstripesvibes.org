interface ImportMetaEnv {
  readonly VITE_CHAT_URL: string;
  readonly VITE_BACKEND_URL: string;
  readonly VITE_GRAPHQL_URL: string;
  readonly VITE_PROJECT_NAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
