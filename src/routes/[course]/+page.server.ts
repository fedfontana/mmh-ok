import { error } from "@sveltejs/kit";
import { CONFIG } from "$src/config";
import { prisma } from "$src/db";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
    try {
        const results = await Promise.all(CONFIG[params.course.toUpperCase()]!.words.map(async word => {
            const count = await prisma.entry.findFirst({
                where: {
                    AND: [
                        {
                            course: {
                                equals: params.course.toUpperCase(),
                            }
                        },
                        {
                            word: {
                                equals: word
                            }
                        }
                    ]
                },
                orderBy: {
                    dateTime: "desc",
                }
            });

            return [word, count?.count ?? 0]
        }));

        return {
            wordCounts: Object.fromEntries(results) as Record<string, number>
        };
    } catch (e) {
        console.error("Error fetching data: ", e);
        throw error(500, "Could not fetch data");
    }
}