import { error } from "@sveltejs/kit";
import { CONFIG } from "$src/config";
import { prisma } from "$src/db";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
    if (!(params.course.toUpperCase() in CONFIG)) {
        throw error(400, "Unknown course");
    }
    try {
        const date = new Date(params.date);
        const day_after = new Date(date.getTime() + 86400000); // + 1 day in ms

        const day_entries = await prisma.entry.findMany({
            where: {
                AND: [
                    {
                        course: {
                            equals: params.course.toUpperCase(),
                        }
                    },
                    {
                        dateTime: {
                            gte: date,
                        }
                    },
                    {
                        dateTime: {
                            lt: day_after,
                        }
                    }
                ]
            },
            orderBy: {
                dateTime: "asc",
            }
        });

        return {
            day_entries: Object.fromEntries(CONFIG[params.course.toUpperCase()]!.words.map(word => {
                return [word, day_entries.filter(e => e.word === word).map(e => {
                    return {
                        word: e.word,
                        dateTime: e.dateTime,
                        count: e.count,
                    }
                })]
            })),
        }
    } catch (e) {
        console.error("Error fetching data for day: ", params.date, " cause of error: ", e);
        throw error(500, "Could not fetch data for day: " + params.date);
    }
}