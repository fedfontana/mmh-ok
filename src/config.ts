export const JWT_DURATION = `${14 * 24 * 60 * 60 * 1000}`;


// Course names must be uppercase only
export type Config = {
    readonly [course: string]: {
        title: string,
        words: readonly string[]
    }
}

export const TITLE = "mk";

export const CONFIG: Config = {
    FSTT: {
        title: "mmh...ok?",
        words: ["mmh", "ok", "mmh ok"],
    },
    ITPM: {
        title: "THE counter",
        words: ["money", "use the brain", "mmh"]
    }
} as const;