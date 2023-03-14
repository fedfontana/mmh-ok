import { get, writable } from 'svelte/store'

export function storable(key: string, initial_data: string) {
    const store = writable(initial_data);
    const { subscribe, set } = store;
    const isBrowser = typeof window !== 'undefined';

    if (isBrowser) {
        const item = localStorage.getItem(key);
        if(item) {
            set(item);
        }
    }

    return {
        subscribe,
        set: (n: string) => {
            if(isBrowser) {
                localStorage.setItem(key, n);
            }
            set(n);
        },
        update: (cb: (input: string) => string) => {
            const updatedStore = cb(get(store));
            if(isBrowser) {
                localStorage.setItem(key, updatedStore);
            }
            set(updatedStore);
        }
    };
}