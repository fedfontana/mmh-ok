import { checkIsLoggedIn } from "$src/utils";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ cookies }) => {
    return {
        isLoggedIn: checkIsLoggedIn(cookies),
    }
};