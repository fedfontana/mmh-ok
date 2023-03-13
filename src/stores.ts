import { writable } from "svelte/store";

export const isLoggedIn = writable(false);
export const DEFAULT_JWT_DURATION = `${14 * 24 * 60 * 60}`;