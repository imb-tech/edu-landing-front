import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// FlatCompat yaratamiz
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// ESLint configuration
const eslintConfig = [
  // Next.js default rules
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // qo‘shimcha rules, agar kerak bo‘lsa
  {
    rules: {
      "react/no-unescaped-entities": "off", // siz oldingi errorni skipp qilmoqchi bo‘lsangiz
    },
  },
];

export default eslintConfig;
