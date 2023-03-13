import { error } from "@sveltejs/kit";
import { prisma } from "../db";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    try {
        const counters = await prisma.entry.groupBy({ by: ["word"], _count: { word: true } });
        console.log(counters);
        return {
            mmh: counters.find(entry => entry.word == "mmh")?._count.word ?? 0,
            ok: counters.find(entry => entry.word == "ok")?._count.word ?? 0,
            "mmh-ok": counters.find(entry => entry.word == "mmh-ok")?._count.word ?? 0,
        }
    } catch (e) {
        console.error("Error fetching data: ", e);
        throw error(500, "Could not fetch data");
    }
}