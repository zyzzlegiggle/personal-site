import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, Twitter, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import profileImage from "@/assets/profile.jpg";

const featuredBlogs = [
  {
    id: 1,
    title: "Getting Started with React and TypeScript",
    description: "A comprehensive guide to building modern web applications with React and TypeScript.",
    date: "2024-03-15",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "The Art of Clean Code",
    description: "Exploring principles and techniques for writing maintainable, readable code.",
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
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6">
        {/* Hero Section */}
        <section className="flex min-h-[80vh] flex-col items-center justify-center py-16">
          <div className="text-center">
            <div className="mb-8 animate-scale-in">
              <img
                src={profileImage}
                alt="Profile"
                className="mx-auto h-32 w-32 rounded-full object-cover ring-4 ring-accent/20"
              />
            </div>
            <h1 className="mb-4 animate-fade-in text-5xl font-bold tracking-tight">
              John Doe
            </h1>
            <p
              className="mb-8 text-xl text-muted-foreground"
              style={{ animation: "fade-in 0.6s ease-out 0.2s forwards", opacity: 0 }}
            >
              Software Developer & Writer
            </p>
            <div
              className="mb-8 flex items-center justify-center gap-4"
              style={{ animation: "fade-in 0.6s ease-out 0.4s forwards", opacity: 0 }}
            >
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:hello@example.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <div
              className="mx-auto max-w-2xl"
              style={{ animation: "fade-in 0.6s ease-out 0.6s forwards", opacity: 0 }}
            >
              <p className="text-muted-foreground">
                I'm passionate about building beautiful, functional web applications and sharing
                knowledge through writing. Explore my latest blog posts and book recommendations.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Blogs Section */}
        <section className="py-16">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">Latest Posts</h2>
            <Button variant="outline" asChild>
              <Link to="/blogs">View All</Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredBlogs.map((post, index) => (
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
        </section>
      </main>
    </div>
  );
};

export default Index;
