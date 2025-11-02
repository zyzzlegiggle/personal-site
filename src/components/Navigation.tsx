import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Blogs", path: "/blogs" },
    { name: "Books", path: "/books" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold tracking-tight">
            Portfolio
          </Link>
          <div className="flex gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-accent",
                  location.pathname === link.path
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-[17px] left-0 right-0 h-[2px] bg-accent" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
