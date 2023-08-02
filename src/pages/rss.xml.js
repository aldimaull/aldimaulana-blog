import rss from "@astrojs/rss";
import sanitizeHtml from "sanitize-html";
import { formatBlogPosts } from "../js/utils.js";

export function get(context) {
 const postImportResult = import.meta.glob("./blog/**/*.md", { eager: true });
 const posts = formatBlogPosts(Object.values(postImportResult));
 return rss({
  stylesheet: "/rss/styles.xsl",
  title: "Aldi Maulana | Blog",
  description: "A humble Astronaut’s guide to the stars",
  site: context.site,
  items: posts.map((post) => ({
   link: post.url,
   title: post.frontmatter.title,
   content: sanitizeHtml(post.compiledContent()),
   pubDate: post.frontmatter.date,
   description: post.frontmatter.description,
   customData: `
     <author>${post.frontmatter.author}</author>
    `,
  })),
 });
}