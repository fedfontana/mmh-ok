import { error, type RequestHandler } from "@sveltejs/kit";
import { saveWordToDB } from "../../api/utils";

export const POST: RequestHandler = async () => {
    if(await saveWordToDB("mmh-ok")) {
        return new Response();
    } else {
        throw error(500, "Could not save to the db");
    }
}