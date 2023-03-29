#!/usr/bin/env node

import { green, red } from "kolorist";
import { getCurrentNpmRegistry, setNpmRegistry } from "./index";

import task from "tasuku";
import yargs from "yargs";

yargs
  .scriptName("npm-csr")
  .usage("$0 [命令]")
  .command("*", "获取当前源", (ctx) => {
    // @ts-ignore
    if (ctx.argv.help) {
      return;
    }

    task("获取源中", async ({ setTitle }) => {
      try {
        const registry = await getCurrentNpmRegistry();
        setTitle("当前源为 " + green(registry));
      } catch (error: any) {
        setTitle(`获取源失败, ${red(error.message)}`);
      }
    });
  })
  .command("npm", "切换为 npm 源", async () => {
    const coloredNpm = green("npm");
    task(`切换 ${coloredNpm} 源中`, async ({ setTitle, setError }) => {
      try {
        await setNpmRegistry("npm");
        setTitle(`切换 ${coloredNpm} 源成功`);
      } catch (error: any) {
        setError(`切换 ${coloredNpm} 源失败, ${red(error.message)}`);
      }
    });
  })
  .command("cnpm", "切换为 cnpm 源", async () => {
    const coloredCnpm = green("cnpm");
    task(`切换 ${coloredCnpm} 源中`, async ({ setTitle, setError }) => {
      try {
        await setNpmRegistry("cnpm");
        setTitle(`切换 ${coloredCnpm} 源成功`);
      } catch (error: any) {
        setError(`切换 ${coloredCnpm} 失败, ${red(error.message)}`);
      }
    });
  })
  .alias("h", "help")
  .alias("v", "version")
  .help().argv;
