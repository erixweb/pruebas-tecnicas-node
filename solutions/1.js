import net from "node:net"

export const ping = (ip, callback) => {
	const startTime = process.hrtime()

	const client = net.connect({ port: 80, host: ip }, () => {
		client.end()
		callback(null, { time: process.hrtime(startTime), ip })
	})

	client.on("error", (err) => {
		client.end()
		callback(err, { time: process.hrtime(startTime), ip })
	})
}