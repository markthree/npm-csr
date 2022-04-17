import { promisify } from 'util'
import { exec } from 'child_process'

const registrys = {
	npm: 'https://registry.npmjs.org',
	taobao: 'https://registry.npm.taobao.org'
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
	await execPromisify(`npm config set registry ${registry}`)
}
