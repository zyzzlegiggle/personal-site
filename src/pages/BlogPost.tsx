import Navigation from "@/components/Navigation";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();

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
            <h1 className="text-4xl font-bold tracking-tight">
              Getting Started with React and TypeScript
            </h1>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span>March 15, 2024</span>
              <span>•</span>
              <span>5 min read</span>
            </div>
          </header>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground">
              A comprehensive guide to building modern web applications with React and TypeScript.
              Learn the fundamentals and best practices.
            </p>

            <h2>Introduction</h2>
            <p>
              React and TypeScript are a powerful combination for building modern web applications.
              In this guide, we'll explore the fundamentals and best practices for getting started.
            </p>

            <h2>Why TypeScript?</h2>
            <p>
              TypeScript adds static typing to JavaScript, which helps catch errors early and
              improves code quality. It's especially useful in larger projects where maintainability
              is crucial.
            </p>

            <h2>Getting Started</h2>
            <p>
              To get started with React and TypeScript, you can use Vite or Create React App with
              the TypeScript template. Both provide a solid foundation for your project.
            </p>

            <h2>Best Practices</h2>
            <ul>
              <li>Use proper TypeScript types for all your components and functions</li>
              <li>Leverage React hooks for state management</li>
              <li>Keep components small and focused</li>
              <li>Write meaningful commit messages</li>
            </ul>

            <h2>Conclusion</h2>
            <p>
              React and TypeScript together provide a robust development experience. Start small,
              learn the fundamentals, and gradually build more complex applications.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
};

export default BlogPost;
