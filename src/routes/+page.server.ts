import { error } from "@sveltejs/kit";
import { prisma } from "../db";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    // try {
    //     const counters = await prisma.entry.groupBy({ by: ["word"], _count: { word: true }});
    //     console.log(counters);
    // } catch(e) {
    //     console.error("Error fetching data: ", e);
    //     throw error(500, "Could not fetch data");
    // }

}