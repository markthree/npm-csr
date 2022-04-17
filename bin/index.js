#!/usr/bin/env node

const { setNpmRegistry } = require('../dist/index')

const yargs = require('yargs')

yargs
	.scriptName('npm-csr')
	.usage('$0 [命令]')
	.command('origin', '切换为 npm 源', async () => {
		const result = await setNpmRegistry('origin')
		if (result) {
			return console.log('切换 npm 源成功')
		}
		throw new Error('切换 npm 源失败')
	})
	.command('taobao', '切换为淘宝源', async () => {
		const result = await setNpmRegistry('taobao')
		if (result) {
			return console.log('切换淘宝源成功')
		}
		throw new Error('切换淘宝源失败')
	})
	.alias('h', 'help')
	.alias('v', 'version')
	.help().argv
