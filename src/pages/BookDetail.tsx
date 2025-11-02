import Navigation from "@/components/Navigation";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star } from "lucide-react";

const BookDetail = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6 py-16 max-w-3xl">
        <Link
          to="/books"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8 animate-fade-in"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all books
        </Link>

        <article className="space-y-6 animate-fade-in">
          <header className="space-y-4">
            <div className="flex items-center gap-3">
              <h1 className="text-4xl font-bold tracking-tight">Clean Code</h1>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < 5 ? "fill-accent text-accent" : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-xl text-muted-foreground">by Robert C. Martin</p>
            <div className="flex items-center gap-4 text-sm">
              <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                Completed
              </span>
            </div>
          </header>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <h2>My Notes</h2>
            <p>
              Essential reading for any software developer. This book teaches the fundamentals of
              writing maintainable code that other developers can easily understand and work with.
            </p>

            <h2>Key Takeaways</h2>
            <ul>
              <li>Meaningful names make code self-documenting</li>
              <li>Functions should do one thing and do it well</li>
              <li>Comments should explain why, not what</li>
              <li>Code formatting and consistency matter</li>
              <li>Error handling should be clean and intentional</li>
            </ul>

            <h2>Favorite Quotes</h2>
            <blockquote>
              <p>
                "Clean code is simple and direct. Clean code reads like well-written prose."
              </p>
            </blockquote>

            <h2>Who Should Read This</h2>
            <p>
              This book is perfect for developers who want to improve their coding skills and write
              more maintainable software. Whether you're a beginner or an experienced developer,
              you'll find valuable insights.
            </p>

            <h2>Final Thoughts</h2>
            <p>
              One of the most influential books in software development. The principles taught here
              are timeless and applicable regardless of the programming language you use.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
};

export default BookDetail;
