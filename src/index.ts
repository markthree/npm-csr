import { promisify } from 'util'
import { exec } from 'child_process'

export const registrys = {
	npm: 'https://registry.npmjs.org/',
	taobao: 'https://registry.npmmirror.com/'
}

type RegistryKey = keyof typeof registrys

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

/**
 * 获取当前源
 * @returns { Promise<'npm' | 'taobao' | undefined> }  源类型
 */
export const getCurrentNpmRegistry = async () => {
	const execPromisify = promisify(exec)
	const { stderr, stdout } = await execPromisify(
		`npm config get registry`
	)
	if (stderr) {
		throw new Error(`npm-csr.error: ${stderr}`)
	}

	const keys = Object.keys(registrys)

	const value = stdout.trim()

	return keys.find(
		k => registrys[k as RegistryKey] === value
	) as RegistryKey
}
