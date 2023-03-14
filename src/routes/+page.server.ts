import { error } from "@sveltejs/kit";
import { prisma } from "../db";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    try {
        const mmh = await prisma.entry.findFirst({
            where: {
                word: {
                    equals: "mmh"
                }
            },
            orderBy: {
                dateTime: "desc",
            }
        });
        const ok = await prisma.entry.findFirst({
            where: {
                word: {
                    equals: "ok"
                }
            },
            orderBy: {
                dateTime: "desc",
            }
        });

        const mmh_ok = await prisma.entry.findFirst({
            where: {
                word: {
                    equals: "mmh-ok"
                }
            },
            orderBy: {
                dateTime: "desc",
            }
        });

        return {
            mmh: mmh?.count ?? 0,
            ok: ok?.count ?? 0,
            "mmh-ok": mmh_ok?.count ?? 0,
        }
    } catch (e) {
        console.error("Error fetching data: ", e);
        throw error(500, "Could not fetch data");
    }
}