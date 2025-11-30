import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { books as initialBooks } from '@/data/books';
import { blogPosts as initialBlogs } from '@/data/blogs';

// Define types based on existing data
export interface Book {
    id: number;
    title: string;
    author: string;
    rating: number;
    status: string;
    notes: string;
    image: string;
}

export interface BlogPost {
    title: string;
    date: string;
    description: string;
    readTime: string;
    content: React.ReactNode | string; // Allow string for stored content
}

export interface BlogPosts {
    [key: string]: BlogPost;
}

export const useContent = () => {
    const [books, setBooks] = useState<Book[]>(initialBooks);
    const [blogs, setBlogs] = useState<BlogPosts>(initialBlogs);
    const [loading, setLoading] = useState(true);

    // Load data on mount
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            // Fetch Books
            const { data: booksData, error: booksError } = await supabase
                .from('books')
                .select('*');

            if (booksError) {
                console.error('Error fetching books:', booksError);
            } else if (booksData) {
                // Merge with initial books. 
                // Note: Supabase IDs might conflict with initial IDs (1-6).
                // For now, we'll just append them. Ideally we'd migrate initial data to DB.
                setBooks([...initialBooks, ...booksData]);
            }

            // Fetch Blogs
            const { data: blogsData, error: blogsError } = await supabase
                .from('blogs')
                .select('*');

            if (blogsError) {
                console.error('Error fetching blogs:', blogsError);
            } else if (blogsData) {
                const newBlogs: BlogPosts = {};
                blogsData.forEach((blog: any) => {
                    newBlogs[blog.id] = {
                        title: blog.title,
                        date: blog.date,
                        description: blog.description,
                        readTime: blog.read_time,
                        content: blog.content
                    };
                });
                setBlogs({ ...initialBlogs, ...newBlogs });
            }

            setLoading(false);
        };

        fetchData();
    }, []);

    const addBook = async (newBook: Omit<Book, 'id'>) => {
        const { data, error } = await supabase
            .from('books')
            .insert([newBook])
            .select();

        if (error) {
            console.error('Error adding book:', error);
            alert('Error adding book');
        } else if (data) {
            setBooks(prev => [...prev, data[0]]);
        }
    };

    const addBlog = async (newBlog: BlogPost) => {
        // Map to DB columns
        const dbBlog = {
            title: newBlog.title,
            date: newBlog.date,
            description: newBlog.description,
            read_time: newBlog.readTime,
            content: newBlog.content
        };

        const { data, error } = await supabase
            .from('blogs')
            .insert([dbBlog])
            .select();

        if (error) {
            console.error('Error adding blog:', error);
            alert('Error adding blog');
        } else if (data) {
            const createdBlog = data[0];
            setBlogs(prev => ({
                ...prev,
                [createdBlog.id]: {
                    title: createdBlog.title,
                    date: createdBlog.date,
                    description: createdBlog.description,
                    readTime: createdBlog.read_time,
                    content: createdBlog.content
                }
            }));
        }
    };

    return {
        books,
        blogs,
        addBook,
        addBlog,
        loading
    };
};
