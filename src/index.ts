import { execa } from "execa";

export const registrys = {
  npm: "https://registry.npmjs.org/",
  cnpm: "https://registry.npmmirror.com/",
};

type RegistryKey = keyof typeof registrys;

/**
 * 设置 npm 源
 * @param type 类型
 * @returns
 */
export const setNpmRegistry = async (
  type: keyof typeof registrys,
) => {
  const registry = registrys[type] || registrys.npm;
  const { stderr } = await execa(
    `npm`,
    [`config`, "set", "registry", registry],
  );
  if (stderr) {
    throw new Error(`npm-csr.error: ${stderr}`);
  }
};

/**
 * 获取当前源
 * @returns { Promise<'npm' | 'cnpm' | undefined> }  源类型
 */
export const getCurrentNpmRegistry = async () => {
  const { stderr, stdout } = await execa(
    `npm`,
    ["config", "get", "registry"],
  );
  if (stderr) {
    throw new Error(`npm-csr.error: ${stderr}`);
  }

  const keys = Object.keys(registrys);

  const value = stdout.trim();

  return keys.find(
    (k) => registrys[k as RegistryKey] === value,
  ) as RegistryKey;
};
