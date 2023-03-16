import { error } from "@sveltejs/kit";
import { WORDS } from "$src/config";
import { prisma } from "$src/db";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    try {
        const results = await Promise.all(WORDS.map(async word => {
            const count = await prisma.entry.findFirst({
                where: {
                    word: {
                        equals: word
                    }
                },
                orderBy: {
                    dateTime: "desc",
                }
            });

            return [word, count?.count ?? 0]
        }));

        return Object.fromEntries(results);
    } catch (e) {
        console.error("Error fetching data: ", e);
        throw error(500, "Could not fetch data");
    }
}