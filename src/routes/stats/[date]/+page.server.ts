import { error } from "@sveltejs/kit";
import { prisma } from "../../../db";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
    try {
        const date = new Date(params.date);
        const day_after =  new Date(date.getTime() + 86400000); // + 1 day in ms
        
        const day_entries = await prisma.entry.findMany({
            where: {
                AND: [
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
            day_entries: {
                mmh: day_entries.filter(e => e.word === "mmh").map(e => {
                    return {
                        word: e.word,
                        dateTime: e.dateTime,
                        count: e.count,
                    }
                }),
                ok: day_entries.filter(e => e.word === "ok").map(e => {
                    return {
                        word: e.word,
                        dateTime: e.dateTime,
                        count: e.count,
                    }
                }),
                mmh_ok: day_entries.filter(e => e.word === "mmh-ok").map(e => {
                    return {
                        word: e.word,
                        dateTime: e.dateTime,
                        count: e.count,
                    }
                }),
            },
        }
    } catch (e) {
        console.error("Error fetching data for day: ", params.date, " cause of error: ", e);
        throw error(500, "Could not fetch data for day: " + params.date);
    }
}