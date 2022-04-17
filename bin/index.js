#!/usr/bin/env node

const { setNpmRegistry } = require('../dist/index')

const yargs = require('yargs')

yargs
	.scriptName('npm-csr')
	.usage('$0 [命令]')
	.command('npm', '切换为 npm 源', async () => {
		try {
			await setNpmRegistry('taobao')
			return console.log('切换 npm 源成功')
		} catch (error) {
			throw new Error(`切换 npm 源失败: ${error.message}`)
		}
	})
	.command('taobao', '切换为淘宝源', async () => {
		try {
			await setNpmRegistry('taobao')
			return console.log('切换淘宝源成功')
		} catch (error) {
			throw new Error(`切换淘宝源失败: ${error.message}`)
		}
	})
	.alias('h', 'help')
	.alias('v', 'version')
	.help().argv
