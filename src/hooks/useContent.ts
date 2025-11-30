import { useState, useEffect } from 'react';
import { getLocalData, setLocalData } from '@/lib/storage';
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
    const [books, setBooks] = useState<Book[]>([]);
    const [blogs, setBlogs] = useState<BlogPosts>({});

    // Load data on mount
    useEffect(() => {
        const storedBooks = getLocalData<Book[]>('local_books', []);
        // Merge initial books with stored books. 
        // We'll just append stored books to the list for now, or use them if we want to allow editing (but requirement is just adding).
        // To avoid duplicates if we re-save initial data, we might want to separate them.
        // But for simplicity, let's treat 'local_books' as *additional* books.

        // Actually, a better approach for "adding" is to have a list of user-added items.
        // Let's keep it simple: local_books contains ONLY user added books.
        // We combine them when returning.

        setBooks([...initialBooks, ...storedBooks]);

        const storedBlogs = getLocalData<BlogPosts>('local_blogs', {});
        setBlogs({ ...initialBlogs, ...storedBlogs });
    }, []);

    const addBook = (newBook: Omit<Book, 'id'>) => {
        const storedBooks = getLocalData<Book[]>('local_books', []);
        // Generate a new ID. simpler to just use timestamp or max id + 1
        // Existing IDs are 1-6.
        const maxId = Math.max(...initialBooks.map(b => b.id), ...storedBooks.map(b => b.id), 0);
        const bookWithId = { ...newBook, id: maxId + 1 };

        const updatedStoredBooks = [...storedBooks, bookWithId];
        setLocalData('local_books', updatedStoredBooks);

        // Update state
        setBooks([...initialBooks, ...updatedStoredBooks]);
    };

    const addBlog = (newBlog: BlogPost) => {
        const storedBlogs = getLocalData<BlogPosts>('local_blogs', {});
        // Generate a new ID. Existing keys are "1".
        // Let's use a timestamp or increment.
        const existingIds = [...Object.keys(initialBlogs), ...Object.keys(storedBlogs)].map(Number);
        const maxId = Math.max(...existingIds, 0);
        const newId = (maxId + 1).toString();

        const updatedStoredBlogs = { ...storedBlogs, [newId]: newBlog };
        setLocalData('local_blogs', updatedStoredBlogs);

        // Update state
        setBlogs({ ...initialBlogs, ...updatedStoredBlogs });
    };

    return {
        books,
        blogs,
        addBook,
        addBlog,
    };
};
