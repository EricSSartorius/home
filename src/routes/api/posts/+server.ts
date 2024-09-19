import { json } from '@sveltejs/kit';

export type Post = {
	title: string;
	description: string;
	slug: string;
	date: string;
	published?: boolean;
};

async function getPosts() {
	const posts: Post[] = [];

	const paths = import.meta.glob('/src/posts/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			const post = {
				...metadata,
				slug: `/posts/${slug}`
			} as Post;
			posts.push(post);
		}
	}

	return posts.filter(({ published }) => published).sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function GET() {
	const posts = await getPosts();
	return json(posts);
}
