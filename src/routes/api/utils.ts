import { prisma } from "../../db";

/**
    Returns whether the action succeeded
*/
export async function saveWordToDB(word: string, newCount: number) {
    try {
        await prisma.entry.create({
            data: {
                word,
                count: newCount,
            }
        })
        console.log(`Saved ${word} to the db`);
        return true;
    } catch(e) {
        console.error(`Error saving ${word} to the db`)
        return false;
    }
}