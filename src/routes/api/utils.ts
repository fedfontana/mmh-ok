import { prisma } from "../../db";

/**
    Returns whether the action succeeded
*/
export async function saveWordToDB(word: string) {
    try {
        console.log(`Saving ${word} to the db`);
        prisma.entry.create({
            data: {
                word,
            }
        })
        return true;
    } catch(e) {
        return false;
    }
}