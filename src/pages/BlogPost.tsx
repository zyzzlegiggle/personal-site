import Navigation from "@/components/Navigation";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blogs";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts[id];

  console.log(post)

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container mx-auto px-6 py-16 max-w-3xl">
          <p className="text-muted-foreground">Post not found.</p>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-6 py-16 max-w-3xl">
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8 animate-fade-in"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all posts
        </Link>

        <article className="space-y-6 animate-fade-in">
          <header className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            {post.content}
          </div>
        </article>
      </main>
    </div>
  );
};

export default BlogPost;
