import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

const books = [
  {
    id: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    rating: 5,
    status: "Completed",
    notes: "Essential reading for any software developer. Teaches the fundamentals of writing maintainable code.",
  },
  {
    id: 2,
    title: "The Pragmatic Programmer",
    author: "David Thomas & Andrew Hunt",
    rating: 5,
    status: "Completed",
    notes: "Timeless wisdom on software craftsmanship and professional development.",
  },
  {
    id: 3,
    title: "Design Patterns",
    author: "Gang of Four",
    rating: 4,
    status: "Reading",
    notes: "The classic text on software design patterns. Dense but invaluable.",
  },
  {
    id: 4,
    title: "Refactoring",
    author: "Martin Fowler",
    rating: 5,
    status: "Completed",
    notes: "Comprehensive guide to improving code structure without changing behavior.",
  },
  {
    id: 5,
    title: "Atomic Habits",
    author: "James Clear",
    rating: 5,
    status: "Completed",
    notes: "Life-changing insights on building good habits and breaking bad ones.",
  },
  {
    id: 6,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    rating: 4,
    status: "Reading",
    notes: "Fascinating exploration of the two systems that drive the way we think.",
  },
];

const Books = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6 py-16 max-w-3xl">
        <div className="mb-12 animate-fade-in">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">Books</h1>
          <p className="text-lg text-muted-foreground">
            My reading list and recommendations
          </p>
        </div>
        <div className="space-y-8">
          {books.map((book, index) => (
            <Link
              key={book.id}
              to={`/books/${book.id}`}
              className="block group animate-fade-in"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <article className="space-y-2">
                <div className="flex items-baseline gap-3">
                  <h2 className="text-2xl font-semibold group-hover:text-accent transition-colors">
                    {book.title}
                  </h2>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < book.rating
                            ? "fill-accent text-accent"
                            : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground">{book.author}</p>
                <p className="text-sm text-muted-foreground">{book.notes}</p>
              </article>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Books;
