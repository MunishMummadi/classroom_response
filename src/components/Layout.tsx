// src/components/Layout.tsx
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import useAuth from '../hooks/useAuth';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { user, logout } = useAuth();
    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.push('/');
    };

    return (
        <div className="layout">
            {/* Conditionally Render Login Prompt or Main Layout */}
            {!user ? (
                <div className="login-prompt">
                    <h1>Welcome to Classroom Response</h1>
                    <p>Please log in to access your courses and dashboard.</p>
                    <Link href="/login">
                        <b>Log in</b>
                    </Link>
                </div>
            ) : (
                <>
                    {/* Main Layout with Header, Sidebar, and Footer */}
                    <header className="header">
                        <div className="logo">
                            <Link href="/">
                                <motion.a
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="logo-text"
                                >
                                    Classroom Response
                                </motion.a>
                            </Link>
                        </div>
                        <nav className="nav">
                            <Link href="/">
                                <a className="nav-link">Home</a>
                            </Link>
                            <Link href="/courses">
                                <a className="nav-link">My Courses</a>
                            </Link>
                            <button className="logout-button" onClick={handleLogout}>
                                Logout
                            </button>
                        </nav>
                    </header>

                    <aside className="sidebar">
                        <ul>
                            <li><Link href="/"><a>Dashboard</a></Link></li>
                            <li><Link href="/profile"><a>Profile</a></Link></li>
                            <li><Link href="/settings"><a>Settings</a></Link></li>
                        </ul>
                    </aside>

                    <main className="content">{children}</main>

                    <footer className="footer">
                        <p>© 2024 Classroom Response System</p>
                        <div className="social-icons">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </div>
                    </footer>
                </>
            )}

            {/* Styling */}
            <style jsx>{`
                .layout {
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                    background-color: #f3f4f6;
                }

                /* Header Styling */
                .header {
                    background-color: #1f2937;
                    color: #fff;
                    padding: 1rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }
                .logo-text {
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: #fff;
                    text-decoration: none;
                }
                .nav-link {
                    margin-right: 1.5rem;
                    color: #fff;
                    text-decoration: none;
                    transition: color 0.3s;
                }
                .nav-link:hover {
                    color: #60a5fa;
                }
                .logout-button {
                    background: none;
                    border: none;
                    color: #fff;
                    cursor: pointer;
                    font-size: 1rem;
                    transition: color 0.3s;
                }
                .logout-button:hover {
                    color: #f87171;
                }

                /* Sidebar Styling */
                .sidebar {
                    background-color: #e5e7eb;
                    width: 200px;
                    padding: 1rem;
                    border-right: 1px solid #d1d5db;
                    position: fixed;
                    top: 64px;
                    bottom: 0;
                }
                .sidebar ul {
                    list-style-type: none;
                    padding: 0;
                }
                .sidebar li a {
                    display: block;
                    padding: 0.75rem;
                    color: #374151;
                    text-decoration: none;
                    transition: background-color 0.3s;
                }
                .sidebar li a:hover {
                    background-color: #9ca3af;
                    color: white;
                }

                /* Login Prompt Styling */
                .login-prompt {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    text-align: center;
                    padding: 2rem;
                }
                .login-prompt h1 {
                    font-size: 2rem;
                    margin-bottom: 1rem;
                }
                .login-prompt p {
                    font-size: 1.1rem;
                    margin-bottom: 2rem;
                }
                .login-button {
                    background-color: #0070f3;
                    color: white;
                    padding: 0.75rem 1.5rem;
                    font-size: 1rem;
                    font-weight: 600;
                    border: none;
                    border-radius: 6px;
                    cursor: pointer;
                    text-decoration: none;
                }
                .login-button:hover {
                    background-color: #005bb5;
                }

                /* Main Content Styling */
                .content {
                    flex-grow: 1;
                    margin-left: 200px;
                    padding: 2rem;
                    background: linear-gradient(to bottom right, #f3f4f6, #e5e7eb);
                }

                /* Footer Styling */
                .footer {
                    background-color: #1f2937;
                    color: #fff;
                    text-align: center;
                    padding: 1rem 0;
                }
                .social-icons a {
                    margin: 0 0.5rem;
                    color: #60a5fa;
                    text-decoration: none;
                }
                .social-icons a:hover {
                    color: #3b82f6;
                }

                /* Responsive Design */
                @media (max-width: 768px) {
                    .sidebar {
                        display: none;
                    }
                    .content {
                        margin-left: 0;
                    }
                }
            `}</style>
        </div>
    );
};

export default Layout;