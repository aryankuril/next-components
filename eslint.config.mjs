import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // You can override specific rules here
  {
    files: ["**/*.ts", "**/*.tsx"], // Apply this override to TypeScript files
    rules: {
      "@next/next/no-img-element": "off",
    },
  },
];

export default eslintConfig;
