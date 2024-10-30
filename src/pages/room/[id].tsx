// src/pages/room/[id].tsx
import { useState, useEffect } from 'react';
import AnswerList from '../../components/AnswerList';
import axios from 'axios';
import io from 'socket.io-client';

const socket = io();

const RoomPage = ({ roomId }) => {
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        socket.on('answer-updated', (newAnswer) => {
            setAnswers((prevAnswers) => [...prevAnswers, newAnswer]);
        });
    }, []);

    const submitAnswer = async (content) => {
        await axios.post(`/api/room/${roomId}/answer`, { content });
        socket.emit('new-answer', content);
    };

    return (
        <div>
            <h1>Room {roomId}</h1>
            <AnswerList answers={answers} />
            <input type="text" onBlur={(e) => submitAnswer(e.target.value)} />
        </div>
    );
};

export default RoomPage;