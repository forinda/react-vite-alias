# rect-vite-alias
An implementation of vite alias on your react application to avoid long imports and have aliased imports

At first I thought this was hard but vite simplifies everything

Just add everything to your `tsconfig.json`
```tsx
{
  "compilerOptions": {
    "paths": {
      "@pages/*": ["src/pages/*"],
      "@components/*": ["src/components/*"],
      "@router": ["src/router"]
    },
    ...
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

Afterwards have a replication of the same for `rollup` to know in this format in your `vite.config.ts`
```tsx
import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
    "@pages": path.resolve(__dirname, "src/pages"),
    "@components": path.resolve(__dirname, "src/components"),
    "@router": path.resolve(__dirname, "src/router"),
    }}
});
```

Just by this now you've simplified your code to this kind of imports
```tsx
import Header from "@components/Header";
import About from "@pages/About";
import Contact from "@pages/Contact";
import Home from "@pages/Home";
```
Instead of 
```
import Header from "./../components/Header";
import About from "./../pages//About";
import Contact from "./../pages//Contact";
import Home from "./../pages//Home";
```

This is the easiest implementation I have ever seen :rocket:
