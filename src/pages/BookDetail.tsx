import Navigation from "@/components/Navigation";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star } from "lucide-react";
import { books } from "@/data/books";

const BookDetail = () => {
  const { id } = useParams();
  const book = books.find((b) => b.id.toString() === id);

  if (!book) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container mx-auto px-6 py-16 max-w-3xl">
          <p>Book not found.</p>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6 py-16 max-w-3xl">
        <Link
          to="/books"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all books
        </Link>

        <article className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <img
              src={book.image}
              alt={book.title}
              className="w-32 h-48 object-cover rounded-md shadow"
            />

            <div className="flex items-center gap-3">
              <h1 className="text-4xl font-bold tracking-tight">{book.title}</h1>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < book.rating ? "fill-accent text-accent" : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>
            </div>

            <p className="text-xl text-muted-foreground">by {book.author}</p>

            <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
              {book.status}
            </span>
          </div>

          {/* Notes */}
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <h2>My Notes</h2>
            <p>{book.notes}</p>
          </div>
        </article>
      </main>
    </div>
  );
};

export default BookDetail;
