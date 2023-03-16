export const JWT_DURATION = `${14 * 24 * 60 * 60 * 1000}`;


export type Config = {
    readonly [course: string]: {
        title: string,
        words: readonly string[]
    }
}

export const CONFIG: Config = {
    "FSTT": {
        title: "mmh...ok?",
        words: ["mmh", "ok", "mmh ok"],
    },
    "ITMP": {
        title: "THE counter",
        words: []
    }
} as const;