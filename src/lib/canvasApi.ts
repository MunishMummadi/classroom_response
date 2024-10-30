// src/lib/canvasApi.ts
import axios from 'axios';

export const getCanvasCourses = async (token: string) => {
    try {
        const response = await axios.get(`${process.env.CANVAS_BASE_URL}/api/v1/courses`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching Canvas courses:', error);
        throw error;
    }
};