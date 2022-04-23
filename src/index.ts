import { promisify } from 'util'
import { exec } from 'child_process'

const registrys = {
	npm: 'https://registry.npmjs.org',
	taobao: 'https://registry.npmmirror.com'
}

/**
 * 设置 npm 源
 * @param type 类型
 * @returns
 */
export const setNpmRegistry = async (
	type: keyof typeof registrys
) => {
	const execPromisify = promisify(exec)
	const registry = registrys[type] || registrys.npm
	const { stderr } = await execPromisify(
		`npm config set registry ${registry}`
	)
	if (stderr) {
		throw new Error(`npm-csr.error: ${stderr}`)
	}
}
