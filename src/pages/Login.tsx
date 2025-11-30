import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            alert(error.message);
        } else {
            navigate('/add-content');
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <main className="container mx-auto px-6 py-16 max-w-md">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold">Login</h1>
                    <p className="text-muted-foreground">Sign in to add content</p>
                </div>
                <form onSubmit={handleLogin} className="space-y-4 bg-card p-6 rounded-lg border shadow-sm">
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            required
                            className="w-full p-2 rounded-md border bg-background"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <input
                            type="password"
                            required
                            className="w-full p-2 rounded-md border bg-background"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
                    >
                        {loading ? 'Loading...' : 'Sign In'}
                    </button>
                </form>
            </main>
        </div>
    );
};

export default Login;
