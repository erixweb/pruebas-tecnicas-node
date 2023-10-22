// @ts-check
import { readFile, writeFile } from "fs"
export function procesarArchivo(callback) {
	const handleWrite = (error) => {
        if (error) {
            callback(error, null)
        }
    }
    /**
     * 
     * @param { any } error 
     * @param { string } data 
     */
    const handleRead = (error, data) => {
        if (error) {
            callback(error, null)
        }

        const processedText = data?.toUpperCase()
        writeFile("output.txt", processedText, handleWrite)
        callback(null, processedText)
    }
    readFile("input.txt", "utf-8", handleRead)
}

procesarArchivo((err, result) => {
	if (err) console.error(err)

	console.log(result)
})
