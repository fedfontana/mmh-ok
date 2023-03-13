import { error, type RequestHandler } from "@sveltejs/kit";
import { checkIsLoggedIn } from "../../../../utils";
import { saveWordToDB } from "../../utils";

export const POST: RequestHandler = async ({ params, cookies }) => {
    if (!checkIsLoggedIn(cookies)) {
		throw error(401)
	}
    
    if(!params.count || parseInt(params.count) < 0) {
        throw error(400);
    }

    if(await saveWordToDB("mmh-ok", parseInt(params.count))) {
        return new Response();
    } else {
        throw error(500, "Could not save to the db");
    }
}