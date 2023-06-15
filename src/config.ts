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
        words: ["vabho", "ehh", "ehh vabho", "france", "greece", "california", "money", "use your brain", "bah!", "no no no", "italian", "it's a nightmare", "ahi ahi ahi"],
    },
    IOT: {
        title: "HAHAH!",
        words: ["hahah!"],
    },
    BILLY: {
        title: "BILLY",
        words: ["fede", "marti"]
    },
    CASI: {
        title: "Casi risolti",
        words: [
            "ali",
            "pede",
            "ferra",
            "rebecca",
            "mraco",
            "scarro",
            "marti",
            "fede",
            "lax",
            "simo",
            "milo",
            "jojo",
            "samu",
            "chiara",
            "bobby",
            "mirco",
            "F",
            "lollo spritzy",
        ]
    }
} as const;
