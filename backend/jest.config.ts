import type {Config} from "@jest/types"

const config: Config.InitialOptions = {
    testEnvironment: "node",
    verbose: true,
    transform: {},
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    moduleFileExtensions: [
        "mjs",
        "js",
    ],
}
export default config;