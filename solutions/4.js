// @ts-check
import { readFile } from "node:fs/promises"

export async function leerArchivos() {
    const handleRead = (err, data) => {
        if (err) return err
        
        return data
    }
    console.time("read")
	const archivo1 = readFile("solutions/arxius/archivo1.txt", "utf8")
	const archivo2 = readFile("solutions/arxius/archivo2.txt", "utf8")
	const archivo3 = readFile("solutions/arxius/archivo3.txt", "utf8")
    console.timeEnd("read")
	return new Promise(async (resolve) => {
        resolve({  
            "firstFile": await archivo1,
            "secondFile": await archivo2,
            "thirdFile": await archivo3 
        })
    })
}

leerArchivos()
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.error(err)
    })