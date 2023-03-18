import { CONFIG } from "$src/config";
import { error } from "@sveltejs/kit";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async ({ params }) => {
    if (CONFIG[params.course.toUpperCase()] === undefined) {
        throw error(400, "Unknown course");
    }
    return {
        config: CONFIG[params.course.toUpperCase()]!,
        course: params.course.toUpperCase(),
    }
};