import { writable } from "svelte/store";
import { storable } from "./storable";

export const isLoggedIn = writable(false);
export const theme = storable("theme", "light");