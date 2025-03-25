/// <reference types="vite/client" />

declare module '*.css' {
  const css: { [key: string]: string };
  export default css;
}

interface ImportMeta {
  readonly env: {
    readonly VITE_VAPI_PUBLIC_KEY: string;
    readonly VITE_VAPI_ASSISTANT_ID: string;
    readonly [key: string]: string;
  };
}
