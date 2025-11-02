import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Star } from "lucide-react";

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
      <main className="container mx-auto px-6 py-16">
        <div className="mb-12 animate-fade-in">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">Books</h1>
          <p className="text-lg text-muted-foreground">
            My reading list and recommendations
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {books.map((book, index) => (
            <Card
              key={book.id}
              className="group transition-all hover:shadow-lg"
              style={{
                animation: `slide-up 0.6s ease-out forwards`,
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
              }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="mb-1">{book.title}</CardTitle>
                    <CardDescription>{book.author}</CardDescription>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < book.rating
                            ? "fill-accent text-accent"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{book.status}</span>
                </div>
                <p className="text-sm text-muted-foreground">{book.notes}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Books;
