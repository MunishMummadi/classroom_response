// src/components/Layout.tsx
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
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

    const handleLogin = () => {
        router.push('/login');
    };

    return (
        <div className="layout">
            {/* Spline 3D Background Scene */}
            <div className="spline-background">
                <Spline scene="https://prod.spline.design/ULn-HvgorBtw2d7z/scene.splinecode" />
            </div>

            {!user ? (
                <div className="login-prompt">
                    <h1 className="title">Welcome to Classroom Response</h1>
                    <p className="subtitle">Please log in to access your courses and dashboard.</p>
                    <button onClick={handleLogin} className="login-button">Login</button>
                </div>
            ) : (
                <>
                    <header className="header">
                        <div className="logo">
                            <Link href="/">
                                <motion.span
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="logo-text"
                                >
                                    Classroom Response
                                </motion.span>
                            </Link>
                        </div>
                        <nav className="nav">
                            <Link href="/" className="nav-link">Home</Link>
                            <Link href="/courses" className="nav-link">My Courses</Link>
                            <button className="logout-button" onClick={handleLogout}>
                                Logout
                            </button>
                        </nav>
                    </header>

                    <aside className="sidebar">
                        <ul>
                            <li><Link href="/">Dashboard</Link></li>
                            <li><Link href="/profile">Profile</Link></li>
                            <li><Link href="/settings">Settings</Link></li>
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
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                    color: #f3f4f6;
                }

                /* Spline Background Styling */
                .spline-background {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: -1;
                    overflow: hidden;
                }

                /* Header Styling */
                .header {
                    background-color: rgba(31, 41, 55, 0.85);
                    color: #fff;
                    padding: 1rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: sticky;
                    top: 0;
                    z-index: 1;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }
                .logo-text {
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: #FFD700;
                    background: linear-gradient(to right, #FF7E5F, #FEB47B);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .nav-link {
                    margin-right: 1.5rem;
                    color: #F0F8FF;
                    text-decoration: none;
                    transition: color 0.3s;
                }
                .nav-link:hover {
                    color: #FF7E5F;
                }
                .logout-button {
                    background: none;
                    border: none;
                    color: #F0F8FF;
                    cursor: pointer;
                    font-size: 1rem;
                    transition: color 0.3s;
                }
                .logout-button:hover {
                    color: #FF7E5F;
                }

                /* Sidebar Styling */
                .sidebar {
                    background-color: rgba(229, 231, 235, 0.9);
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
                    color: #4B0082;
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
                    height: 90vh;
                    text-align: center;
                    padding: 2rem;
                    color: #FFFFFF;
                    z-index: 1;
                }
                .title {
                    font-size: 2.8rem;
                    font-weight: bold;
                    background: linear-gradient(to right, #7F00FF, #E100FF);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    margin-bottom: 1rem;
                    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
                }
                .subtitle {
                    font-size: 1.2rem;
                    color: #D3D3E3; /* Light lavender for subtitle text */
                    margin-bottom: 2rem;
                    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
                }
                .login-button {
                    background: linear-gradient(135deg, #FF5E62, #FF9966);
                    color: #fff;
                    padding: 0.9rem 2rem;
                    font-size: 1.1rem;
                    font-weight: 700;
                    border: none;
                    border-radius: 12px;
                    box-shadow: 0 4px 12px rgba(255, 94, 98, 0.4);
                    cursor: pointer;
                    transition: transform 0.2s, box-shadow 0.2s;
                }
                .login-button:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 6px 15px rgba(255, 94, 98, 0.6);
                    background: linear-gradient(135deg, #FF9966, #FF5E62);
                }

                /* Main Content Styling */
                .content {
                    flex-grow: 1;
                    margin-left: 200px;
                    padding: 2rem;
                    background: rgba(243, 244, 246, 0.85);
                    z-index: 1;
                }

                /* Footer Styling */
                .footer {
                    background-color: rgba(31, 41, 55, 0.85);
                    color: #fff;
                    text-align: center;
                    padding: 1rem 0;
                    font-size: 0.9rem;
                    position: fixed;
                    bottom: 0;
                    width: 100%;
                    z-index: 1;
                }
                .social-icons a {
                    margin: 0 0.5rem;
                    color: #FFD700;
                    text-decoration: none;
                }
                .social-icons a:hover {
                    color: #FF7E5F;
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