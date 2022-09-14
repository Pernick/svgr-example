import fs from "fs-extra";
import path from "path";

(async () => {
  try {
    const iconNames: string[] = [];
    fs.readdirSync(path.join(__dirname, "icons/")).forEach((folder) => {
      iconNames.push(folder);
    });
    const content = [
      "/**",
      " * This is generated file. Any changes will be discarded. Check package.json scripts for more information.",
      " */",
      ...iconNames.map(
        (iconName) =>
          `export { default as ${iconName}Icon } from './${iconName}';`
      ),
    ].join("\n");
    fs.writeFileSync(path.join(__dirname, "icons/index.tsx"), `${content}\n`);
  } catch (error) {
    console.error("Generating icons index file failed:"); // eslint-disable-line no-console
    console.error(error.toString()); // eslint-disable-line no-console
    throw error;
  }
})();
