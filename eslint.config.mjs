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
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // Nécessaire pour les APIs externes
      "@typescript-eslint/no-unused-vars": "warn", // Warning au lieu d'erreur
      "react/no-unescaped-entities": "error", // Garder cette règle active
    }
  }
];

export default eslintConfig;
