import { error, redirect, type Actions, type ServerLoad } from "@sveltejs/kit";
import jwt from 'jsonwebtoken';
import { env } from "$env/dynamic/private";
import { checkIsLoggedIn } from "../../utils";
import { JWT_DURATION } from "../../constants";

export const load: ServerLoad = async ({ cookies }) => {
	if (checkIsLoggedIn(cookies)) {
		throw redirect(307, '/')
	}
}
export const actions: Actions = {
	default: async ({ request, cookies }) => {

		const rFormData = await request.formData();
		const formData = Object.fromEntries(rFormData);

		try {
			if (formData?.username !== env.USERNAME || formData?.password !== env.PASSWORD) {
				throw error(401, "Wrong username or password");
			}

			const token = jwt.sign(
				{ data: { authenticated: true } },
				env.JWT_SECRET,
				{ expiresIn: JWT_DURATION }
			);

			if (env.NODE_ENV === "production") {
				cookies.set('mmh_ok_auth_token', token, {
					secure: true,
					maxAge: parseInt(JWT_DURATION),
					sameSite: 'strict',
					path: '/',
					// httpOnly: true,
				})
			} else {
				cookies.set('mmh_ok_auth_token', token, {
					secure: true,
					maxAge: parseInt(JWT_DURATION),
					path: '/',
					// httpOnly: true,
				})
			}

			return {};
		} catch (err) {
			throw error(400, "An unkown error occurred while logging you in");
		}
	},
};