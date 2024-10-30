// src/pages/api/room/[id].ts
import { NextApiRequest, NextApiResponse } from 'next';
import { Room, Answer } from '../../../models';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { course_id, created_by } = req.body;
        const newRoom = await Room.create({ course_id, created_by });
        res.status(201).json(newRoom);
    } else if (req.method === 'GET') {
        const room = await Room.findByPk(req.query.id, { include: [Answer] });
        res.status(200).json(room);
    }
}