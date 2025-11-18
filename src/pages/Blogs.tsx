import Navigation from "@/components/Navigation";
import { blogPosts } from "@/data/blogs";
import { Link } from "react-router-dom";


const Blogs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6 py-16 max-w-3xl">
        <div className="mb-12 animate-fade-in">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">Blog</h1>
          <p className="text-lg text-muted-foreground">
            Thoughts on technology, design, and engineering
          </p>
        </div>
        <div className="space-y-8">
          {Object.entries(blogPosts).map(([id, post], index) => (
            <Link
              key={id}
              to={`/blogs/${id}`}
              className="block group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <article className="space-y-2">
                <h2 className="text-2xl font-semibold group-hover:text-accent transition-colors">
                  {post.title}
                </h2>

                {post.description && (
                  <p className="text-muted-foreground">{post.description}</p>
                )}

                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </article>
            </Link>
          ))}

        </div>
      </main>
    </div>
  );
};

export default Blogs;
