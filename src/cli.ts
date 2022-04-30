import {
	setNpmRegistry,
	getCurrentNpmRegistry
} from './index'

import ora from 'ora'
import yargs from 'yargs'

const spinner = ora()

yargs
	.scriptName('npm-csr')
	.usage('$0 [命令]')
	.command('*', '获取当前源', ctx => {
		// @ts-ignore
		if (ctx.argv.help) {
			return
		}
		spinner.start('npm-csr: 获取当前 npm 源中')
		getCurrentNpmRegistry()
			.then(v => {
				spinner.succeed('npm-csr: 当前源为 ' + v)
			})
			.catch(e => {
				throw new Error(
					`npm-csr: 获取当然 npm 源失败, ${e.message}`
				)
			})
			.finally(() => {
				spinner.stop()
			})
	})
	.command('npm', '切换为 npm 源', async () => {
		try {
			spinner.start('切换 npm 源中\n')
			await setNpmRegistry('npm')
			return spinner.succeed('切换 npm 源成功')
		} catch (error: any) {
			throw new Error(
				`npm-csr: 切换 npm 源失败, ${error.message}`
			)
		} finally {
			spinner.stop()
		}
	})
	.command('taobao', '切换为淘宝源', async () => {
		try {
			spinner.start('切换淘宝源中\n')
			await setNpmRegistry('taobao')
			return spinner.succeed('切换淘宝源成功')
		} catch (error: any) {
			throw new Error(
				`npm-csr: 切换淘宝源失败, ${error.message}`
			)
		} finally {
			spinner.stop()
		}
	})
	.alias('h', 'help')
	.alias('v', 'version')
	.help().argv
