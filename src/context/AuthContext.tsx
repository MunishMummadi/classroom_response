// src/context/AuthContext.tsx
import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface AuthContextType {
    user: any;
    login: () => void;
    logout: () => void;
}

// Define and export AuthContext
export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    const login = () => {
        router.push('/api/auth?action=login');
    };

    const logout = () => {
        setUser(null);
        document.cookie = 'token=; Max-Age=0; path=/;';
    };

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('/api/user');
                setUser(response.data);
            } catch (error) {
                setUser(null);
            }
        };
        fetchUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};