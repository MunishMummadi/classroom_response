import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import useAuth from '../hooks/useAuth';

const LoginPage: React.FC = () => {
    const { login } = useAuth();
    const router = useRouter();

    const handleLogin = () => {
        login();
        router.push('/');
    };

    return (
        <div className="login-container">
            <div className="background-image" />

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 200 }}
                className="login-card"
            >
                <motion.h1
                    initial={{ y: -50 }}
                    animate={{ y: 0 }}
                    transition={{ type: 'spring', stiffness: 120 }}
                    className="login-logo"
                >
                    Classroom Response System
                </motion.h1>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="login-button"
                    onClick={handleLogin}
                >
                    Login with Canvas
                </motion.button>
            </motion.div>

            {/* Optional Floating Icon Animation */}
            <motion.div
                className="floating-element"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />

            <style jsx>{`
                .login-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    position: relative;
                    overflow: hidden;
                }
                .background-image {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-image: url('/background.jpg'); /* Replace with your image */
                    background-size: cover;
                    background-position: center;
                    z-index: -1;
                    opacity: 0.75;
                }
                .login-card {
                    background: rgba(255, 255, 255, 0.85);
                    padding: 2rem;
                    border-radius: 8px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    max-width: 400px;
                    width: 100%;
                    position: relative;
                    z-index: 1;
                }
                .login-logo {
                    font-size: 1.8rem;
                    font-weight: bold;
                    color: #333;
                    margin-bottom: 2rem;
                }
                .login-button {
                    background-color: #0070f3;
                    color: white;
                    border: none;
                    padding: 0.75rem 1.5rem;
                    font-size: 1rem;
                    font-weight: 600;
                    border-radius: 6px;
                    cursor: pointer;
                    outline: none;
                    transition: background-color 0.3s;
                }
                .login-button:hover {
                    background-color: #005bb5;
                }
                .floating-element {
                    position: absolute;
                    top: 10%;
                    left: 5%;
                    width: 100px;
                    height: 100px;
                    background: url('/icon.png') no-repeat center / contain; /* Replace with your icon */
                    opacity: 0.8;
                }
                .login-button {
                    transiton: background-color 0.3s, transform 0.2s;
                }

                .login-button:hover {
                    transform: translateY(-2px);
                    background-color: #005bb5;
                }
            `}</style>
        </div>
    );
};

export default LoginPage;