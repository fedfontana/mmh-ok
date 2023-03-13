import { prisma } from "../../db";

/**
    Returns whether the action succeeded
*/
export async function saveWordToDB(word: string) {
    try {
        await prisma.entry.create({
            data: {
                word,
            }
        })
        console.log(`Saved ${word} to the db`);
        return true;
    } catch(e) {
        console.error(`Error saving ${word} to the db`)
        return false;
    }
}