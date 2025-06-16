import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "halfmer的博客",
  description: "halfmer的博客",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
