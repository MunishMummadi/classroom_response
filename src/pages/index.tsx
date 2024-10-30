// src/pages/index.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAuth from '../hooks/useAuth';  // Ensure correct import path
import { useRouter } from 'next/router';

const HomePage: React.FC = () => {
    const { user, login, logout } = useAuth();
    const [rooms, setRooms] = useState([]);
    const router = useRouter();

    useEffect(() => {
        if (user) {
            fetchRooms();
        }
    }, [user]);

    const fetchRooms = async () => {
        try {
            const response = await axios.get('/api/room');
            setRooms(response.data);
        } catch (error) {
            console.error('Error fetching rooms:', error);
        }
    };

    const enterRoom = (roomId: string) => {
        router.push(`/room/${roomId}`);
    };

    return (
        <div>
            <h1>Classroom Response System</h1>
            {!user ? (
                <button onClick={login}>Login with Canvas</button>
            ) : (
                <div>
                    <button onClick={logout}>Logout</button>
                    <h2>Available Rooms</h2>
                    <ul>
                        {rooms.map((room) => (
                            <li key={room.id}>
                                <button onClick={() => enterRoom(room.id)}>
                                    Enter Room {room.course_id}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default HomePage;