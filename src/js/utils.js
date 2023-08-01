export function slugify(text) {
 return text
  .toString()
  .toLowerCase()
  .replace(/\s+/g, "-")
  .replace(/[^\w-]+/g, "")
  .replace(/--+/g, "-")
  .replace(/^-+/, "")
  .replace(/-+$/, "");
}

export function formatDate(date) {
 return new Date(date).toLocaleDateString("id-ID", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
 });
}

export function formatBlogPosts(
 posts,
 {
  filterOutDrafts = true,
  filterOutFuturePosts = true,
  sortByDate = true,
  limit = undefined,
 } = {}
) {
 const filteredPosts = posts.reduce((acc, post) => {
  const { date, draft } = post.frontmatter;
  // Filter out drafts
  if (filterOutDrafts && draft) return acc;

  // Filter out future posts
  if (filterOutFuturePosts && new Date(date) > new Date()) return acc;

  // Add post to list
  acc.push(post);

  return acc;
 }, []);

 if (sortByDate) {
  filteredPosts.sort(
   (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  );
 } else {
  filteredPosts.sort(() => Math.random() - 0.5);
 }

 // Limit number of posts

 if (typeof limit === "number") {
  return filteredPosts.slice(0, limit);
 }

 return filteredPosts;
}
