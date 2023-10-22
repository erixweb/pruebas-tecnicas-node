// @ts-check
import { readFile } from "node:fs/promises"

const envPath = async (path) => {
    const contents = readFile(`${path}.env`)

    return new Promise(async (resolve) => {
        resolve(`${await contents}`)
    })
}
const processEnvFile = async (contents) => {
    const splitLines = contents.split("\n")
    const keyValues = []
    for (const line of splitLines) {
        const [key, ...value] = line.split("=")

        process.env[key] = value.join()
    }

    return splitLines
}

envPath("solutions/")
    .then(data => {
        processEnvFile(data)
        console.log(process.env.token)
    })