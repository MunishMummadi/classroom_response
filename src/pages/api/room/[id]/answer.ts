// src/pages/api/room/[id]/answer.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { Answer } from '../../../models';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { content, user_id } = req.body;
        const newAnswer = await Answer.create({ content, user_id, room_id: req.query.id });
        res.status(201).json(newAnswer);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}