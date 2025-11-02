import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React and TypeScript",
    description: "A comprehensive guide to building modern web applications with React and TypeScript. Learn the fundamentals and best practices.",
    date: "2024-03-15",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "The Art of Clean Code",
    description: "Exploring principles and techniques for writing maintainable, readable code that stands the test of time.",
    date: "2024-03-10",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Building Scalable Web Applications",
    description: "Architectural patterns and strategies for creating applications that grow with your needs.",
    date: "2024-03-05",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "Modern CSS Techniques",
    description: "Discover the latest CSS features and how to use them effectively in your projects.",
    date: "2024-02-28",
    readTime: "6 min read",
  },
  {
    id: 5,
    title: "Understanding Async JavaScript",
    description: "Dive deep into promises, async/await, and asynchronous programming patterns.",
    date: "2024-02-20",
    readTime: "8 min read",
  },
];

const Blogs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6 py-16">
        <div className="mb-12 animate-fade-in">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">Blog</h1>
          <p className="text-lg text-muted-foreground">
            Thoughts on technology, design, and development
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((post, index) => (
            <Card
              key={post.id}
              className="group cursor-pointer transition-all hover:shadow-lg"
              style={{
                animation: `slide-up 0.6s ease-out forwards`,
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
              }}
            >
              <CardHeader>
                <CardTitle className="group-hover:text-accent transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Blogs;
