import { checkIsLoggedIn } from "../utils";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ cookies }) => {
    return {
        isLoggedIn: checkIsLoggedIn(cookies),
    }
};