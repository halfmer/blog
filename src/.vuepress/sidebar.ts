import { sidebar } from "vuepress-theme-hope";


export default sidebar({
  "/": [
    "",
    {
      text: "一些杂物",
      icon: "microchip",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文章",
      icon: "book",
      prefix: "knowledge/",
      link: "knowledge/",
      children: "structure",
    },
    {
      text: "一些闲谈",
      icon: "comment",
      prefix: "chat/",
      link: "chat/",
      children: "structure",
    },
  ],
});
