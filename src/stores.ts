import { writable } from "svelte/store";
import { storable } from "./storable";

export const isLoggedIn = writable(false);
export const theme = storable("theme", "light");
export const DEFAULT_JWT_DURATION = `${14 * 24 * 60 * 60}`;