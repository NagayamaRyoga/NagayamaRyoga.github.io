import { fileMap } from '~/static/posts/summary.json';

export async function getSummary() {
  return Object.values(fileMap)
    .map(x => {
      const id = x.base.replace(/\.json$/, '');

      return {
        title: x.title,
        publishedAt: new Date(x.publishedAt),
        tags: x.tags,
        preview: x.preview,
        id,
        uri: `/posts/${id}`,
      };
    })
    .sort((a, b) => b.publishedAt - a.publishedAt);
}
