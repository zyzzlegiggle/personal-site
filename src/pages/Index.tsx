import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, Twitter, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import profileImage from "@/assets/profile.jpg";
import { blogPosts } from "@/data/blogs";

const featuredBlogs = Object.entries(blogPosts)
  .map(([id, post]) => ({ id, ...post }))
  .slice(0, 3);
  
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
              Josse Alexander Halim
            </h1>
            <p
              className="mb-8 text-xl text-muted-foreground"
              style={{ animation: "fade-in 0.6s ease-out 0.2s forwards", opacity: 0 }}
            >
              Hi I'm Josse
            </p>
            <div
              className="mb-8 flex items-center justify-center gap-4"
              style={{ animation: "fade-in 0.6s ease-out 0.4s forwards", opacity: 0 }}
            >
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/zyzzlegiggle" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/josse-alexander-halim-919470288/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://x.com/zyzzlegiggle" target="_blank" rel="noopener noreferrer">
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
                Making something
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
              <Link to={`/blogs/${post.id}`} className="block">
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
              </Link>

            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
