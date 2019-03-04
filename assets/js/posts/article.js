export async function getArticle(id) {
  const article = require(`~/static/posts/${id}.json`);

  return {
    title: article.title,
    publishedAt: new Date(article.publishedAt),
    tags: article.tags,
    preview: article.preview,
    bodyHtml: article.bodyHtml,
    id,
    uri: `/posts/${id}`,
  };
}
