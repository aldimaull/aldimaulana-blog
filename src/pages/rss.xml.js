import rss from "@astrojs/rss";
import sanitizeHtml from "sanitize-html";
import { formatBlogPosts } from "../js/utils.js";

export function get(context) {
 const postImportResult = import.meta.glob("./blog/**/*.{md,mdx}", {
  eager: true,
 });
 const posts = formatBlogPosts(Object.values(postImportResult));
 return rss({
  stylesheet: "/rss/styles.xsl",
  title: "Aldi Maulana's Lair",
  description: "Exploring ideas on my vibrant blog!",
  site: context.site,
  items: posts.map((post) => {
   let content;
   if (post.url.endsWith(".mdx")) {
    content = sanitizeHtml(post.compiledContent());
   } else if (post.url.endsWith(".md")) {
    content = sanitizeHtml(post.export());
   } else {
    content = "";
   }
   return {
    link: post.url,
    title: post.frontmatter.title,
    content,
    pubDate: post.frontmatter.date,
    description: post.frontmatter.description,
    customData: `<author>${post.frontmatter.author}</author>`,
   };
  }),
 });
}
