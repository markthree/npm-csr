import { promisify } from 'util'
import { exec } from 'child_process'

const registrys = {
	origin: 'https://registry.npmjs.org',
	taobao: 'https://registry.npm.taobao.org'
}

export const setNpmRegistry = async (
	type: keyof typeof registrys
) => {
	const execPromisify = promisify(exec)
	const registry = registrys[type] || registrys.origin
	try {
		await execPromisify(
			`npm config set registry ${registry}`
		)
		return true
	} catch (error: any) {
		console.log(error.message)
		return false
	}
}
