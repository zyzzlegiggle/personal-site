import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { books } from "@/data/books";

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
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <article className="space-y-2 flex gap-4">
              <img
                src={book.image}
                alt={book.title}
                className="h-20 w-16 object-cover rounded-md shadow-sm"
              />

              <div className="flex-1">
                <div className="flex items-baseline gap-3">
                  <h2 className="text-2xl font-semibold group-hover:text-accent transition-colors">
                    {book.title}
                  </h2>

                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < book.rating ? "fill-accent text-accent" : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground">{book.author}</p>

                {/* Status */}
                <span className="inline-block px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground text-xs">
                  {book.status}
                </span>

                <p className="text-sm text-muted-foreground">{book.notes}</p>
              </div>
            </article>

          </Link>

          ))}
        </div>
      </main>
    </div>
  );
};

export default Books;
