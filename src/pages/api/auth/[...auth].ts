// src/pages/api/auth/[...auth].ts
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import jwt from 'jsonwebtoken';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { query } = req;

    if (query.action === 'login') {
        const redirectUrl = `${process.env.CANVAS_BASE_URL}/login/oauth2/auth?client_id=${process.env.CANVAS_CLIENT_ID}&response_type=code&redirect_uri=${process.env.CANVAS_REDIRECT_URI}`;
        res.redirect(redirectUrl);
    } else if (query.action === 'callback' && query.code) {
        try {
            const { data } = await axios.post(`${process.env.CANVAS_BASE_URL}/login/oauth2/token`, {
                client_id: process.env.CANVAS_CLIENT_ID,
                client_secret: process.env.CANVAS_CLIENT_SECRET,
                code: query.code,
            });
            const token = jwt.sign({ accessToken: data.access_token }, process.env.JWT_SECRET);
            res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/;`);
            res.redirect('/');
        } catch (error) {
            res.status(500).json({ error: 'Authentication failed' });
        }
    }
}