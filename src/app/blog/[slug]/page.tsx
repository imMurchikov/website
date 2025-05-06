import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Markdown from "@/components/markdown";

interface PostPageProps {
    params: {
        slug: string;
    };
}

export async function generateMetadata(
    props: PostPageProps,
): Promise<Metadata> {
    const { slug } = await Promise.resolve(props.params);
    const post = await getPostBySlug(slug);

    if (!post) {
        return {
            title: "post not found",
        };
    }

    return {
        title: `${post.title} | murchikov`,
        description: post.excerpt || "Blog Murchikov",
    };
}

export async function generateStaticParams() {
    const posts = await getAllPosts();

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function PostPage(props: PostPageProps) {
    // Получаем slug через ожидание объекта params
    const { slug } = await Promise.resolve(props.params);
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-start pt-12 px-4 sm:px-6 pb-12 md:pb-0"
            style={{
                background:
                    "black",
            }}
        >
            <div className="w-full max-w-[800px] p-4 sm:p-6 md:p-8 rounded-md bg-white/50 shadow-[0_0_26px_0_rgba(0,0,0,0.3)]">
                <div className="flex items-center mb-4">
                    <Link
                        href="/blog"
                        className="flex items-center text-black hover:opacity-90 active:opacity-80 transition-all duration-200"
                    >
                        <ArrowLeft size={20} className="mr-2" />
                        <span className="font-bold font-mono">blog</span>
                    </Link>
                </div>

                <article className="mb-4">
                    <h1 className="font-mono font-bold text-xl sm:text-2xl text-black mb-2">
                        {post.title}
                    </h1>
                    <p className="font-mono text-sm text-black/70 mb-4">{post.date}</p>
                    <div className="prose prose-sm max-w-none font-mono text-black bg-white/60 p-6 sm:p-8 rounded-lg border border-[#B8C1D3]">
                        <Markdown content={post.content} />
                    </div>
                </article>
            </div>
        </div>
    );
}