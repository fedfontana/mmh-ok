import { error, type RequestHandler } from "@sveltejs/kit";
import { checkIsLoggedIn } from "$src/utils";
import { prisma } from "$src/db";
import { CONFIG } from "$src/config";

export const POST: RequestHandler = async ({ cookies, request }) => {
    if (!checkIsLoggedIn(cookies)) {
        throw error(401)
    }

    let body;

    try {
        const req = await request.json();
        if (!req) {
            console.error("Need to pass a body");
            throw error(400, "Need to pass a body");
        }
        body = req;
    } catch (e) {
        console.error("Could not parse body");
        throw error(400, "Could not parse body")
    }


    if (!body.course) {
        console.error("Must pass a course");
        throw error(400, "Must pass a word");
    }

    if (!(body.course.toUpperCase() in CONFIG)) {
        console.error("Must pass a valid course");
        throw error(400, "Unknown course");
    }

    if (!body.word) {
        console.error("Must pass a word");
        throw error(400, "Must pass a word");
    }

    if (!CONFIG[body.course.toUpperCase()]!.words.includes(body.word)) {
        console.error("Unknown word");
        throw error(400, "Unknown word");
    }

    if (!body?.count || parseInt(body.count) < 0) {
        console.error("Must pass a count");
        throw error(400, "Must pass a count");
    }


    if (await saveWordToDB(body.word, body.course.toUpperCase(), parseInt(body.count))) {
        return new Response();
    } else {
        console.error("Could not save to the db");
        throw error(500, "Could not save to the db");
    }
}


/**
    Returns whether the action succeeded
*/
async function saveWordToDB(word: string, course: string, newCount: number) {
    try {
        await prisma.entry.create({
            data: {
                word,
                course,
                count: newCount,
            }
        })
        console.log(`Saved ${word} to the db`);
        return true;
    } catch (e) {
        console.error(`Error saving ${word} to the db`)
        return false;
    }
}