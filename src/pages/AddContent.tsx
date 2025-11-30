import { useState } from "react";
import Navigation from "@/components/Navigation";
import { useContent, Book, BlogPost } from "@/hooks/useContent";
import { useNavigate } from "react-router-dom";

const AddContent = () => {
    const { addBook, addBlog } = useContent();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<"book" | "blog">("book");

    // Book Form State
    const [bookForm, setBookForm] = useState<Omit<Book, "id">>({
        title: "",
        author: "",
        rating: 0,
        status: "Not completed",
        notes: "",
        image: "",
    });

    // Blog Form State
    const [blogForm, setBlogForm] = useState<BlogPost>({
        title: "",
        date: new Date().toISOString().split("T")[0],
        description: "",
        readTime: "",
        content: "",
    });

    const handleBookSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addBook(bookForm);
        alert("Book added successfully!");
        navigate("/books");
    };

    const handleBlogSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addBlog(blogForm);
        alert("Blog post added successfully!");
        navigate("/blogs");
    };

    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <main className="container mx-auto px-6 py-16 max-w-3xl">
                <div className="mb-12 animate-fade-in">
                    <h1 className="mb-4 text-4xl font-bold tracking-tight">Add Content</h1>
                    <p className="text-lg text-muted-foreground">
                        Add new books or blog posts to your site.
                    </p>
                </div>

                <div className="flex gap-4 mb-8">
                    <button
                        onClick={() => setActiveTab("book")}
                        className={`px-4 py-2 rounded-md transition-colors ${activeTab === "book"
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                            }`}
                    >
                        Add Book
                    </button>
                    <button
                        onClick={() => setActiveTab("blog")}
                        className={`px-4 py-2 rounded-md transition-colors ${activeTab === "blog"
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                            }`}
                    >
                        Add Blog Post
                    </button>
                </div>

                <div className="bg-card border rounded-lg p-6 shadow-sm">
                    {activeTab === "book" ? (
                        <form onSubmit={handleBookSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Title</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full p-2 rounded-md border bg-background"
                                    value={bookForm.title}
                                    onChange={(e) => setBookForm({ ...bookForm, title: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Author</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full p-2 rounded-md border bg-background"
                                    value={bookForm.author}
                                    onChange={(e) => setBookForm({ ...bookForm, author: e.target.value })}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Rating (0-5)</label>
                                    <input
                                        type="number"
                                        min="0"
                                        max="5"
                                        required
                                        className="w-full p-2 rounded-md border bg-background"
                                        value={bookForm.rating}
                                        onChange={(e) => setBookForm({ ...bookForm, rating: Number(e.target.value) })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Status</label>
                                    <select
                                        className="w-full p-2 rounded-md border bg-background"
                                        value={bookForm.status}
                                        onChange={(e) => setBookForm({ ...bookForm, status: e.target.value })}
                                    >
                                        <option value="Not completed">Not completed</option>
                                        <option value="Completed">Completed</option>
                                        <option value="Reading">Reading</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Image URL</label>
                                <input
                                    type="text"
                                    placeholder="https://example.com/image.jpg"
                                    className="w-full p-2 rounded-md border bg-background"
                                    value={bookForm.image}
                                    onChange={(e) => setBookForm({ ...bookForm, image: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Notes</label>
                                <textarea
                                    className="w-full p-2 rounded-md border bg-background h-24"
                                    value={bookForm.notes}
                                    onChange={(e) => setBookForm({ ...bookForm, notes: e.target.value })}
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:bg-primary/90 transition-colors"
                            >
                                Save Book
                            </button>
                        </form>
                    ) : (
                        <form onSubmit={handleBlogSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Title</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full p-2 rounded-md border bg-background"
                                    value={blogForm.title}
                                    onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Date</label>
                                    <input
                                        type="date"
                                        required
                                        className="w-full p-2 rounded-md border bg-background"
                                        value={blogForm.date}
                                        onChange={(e) => setBlogForm({ ...blogForm, date: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Read Time</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. 5 min read"
                                        required
                                        className="w-full p-2 rounded-md border bg-background"
                                        value={blogForm.readTime}
                                        onChange={(e) => setBlogForm({ ...blogForm, readTime: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Description</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full p-2 rounded-md border bg-background"
                                    value={blogForm.description}
                                    onChange={(e) => setBlogForm({ ...blogForm, description: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Content</label>
                                <textarea
                                    required
                                    className="w-full p-2 rounded-md border bg-background h-48"
                                    placeholder="Write your blog post here..."
                                    value={blogForm.content as string}
                                    onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })}
                                />
                                <p className="text-xs text-muted-foreground mt-1">
                                    Simple text or HTML is supported.
                                </p>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:bg-primary/90 transition-colors"
                            >
                                Save Blog Post
                            </button>
                        </form>
                    )}
                </div>
            </main>
        </div>
    );
};

export default AddContent;
