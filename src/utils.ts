import { env } from '$env/dynamic/private';
import type { Cookies } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';
import { DEFAULT_JWT_DURATION } from './stores';

export function checkIsLoggedIn(cookies: Cookies) {
    const token = cookies.get('mmh_ok_auth_token');
    if(!token) return false;

    try {
        const data = jwt.verify(token, env.JWT_SECRET, { maxAge: DEFAULT_JWT_DURATION });

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (data as any)?.data?.authenticated !== undefined && (data as any).data.authenticated === true;
    } catch(err) {
        return false;
    }
}