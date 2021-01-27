# rollup-plugin-import-folder

A Rollup plugin to resolve modules using the folder name

![Actions](https://github.com/jleeson/rollup-plugin-import-folder/workflows/build/badge.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jleeson/rollup-plugin-import-folder/blob/master/LICENSE)
[![Donate](https://img.shields.io/badge/patreon-donate-green.svg)](https://www.patreon.com/outwalkstudios)

---

## Usage

```js
import folder from "rollup-plugin-import-folder";

export default {
    input: "index.js",
    output: { file: "dist/index.js", format: "esm" },
    plugins: [ folder() ]
};
```

this will take imports of folder names such as
```js
import "./hello-world";
```

and resolve them to
```js
import "./hello-world/hello-world.js";
```

---

## Options

### include

Type: `array` or `string`
Default: `[]`

A single file, or array of files to include when minifying.

### exclude

Type: `array` or `string`
Default: `[]`

A single file, or array of files to exclude when minifying.

---

## Why

With Component based frameworks, its useful to have a component per folder. However this can complicate relative imports by duplicating the folder name twice. One solution is to create an index.js file in the folder that exports the component. While this works fine, it adds another file to maintain and with many components, the amount of index.js files can get confusing. This plugin solves this problem by adjusting imports to resolve the file with the same name as the folder.

---

## Reporting Issues

If you are having trouble getting something to work with this plugin or run into any problems, you can create a new [Issue](https://github.com/jleeson/rollup-plugin-import-folder/issues).

If this plugin does not fit your needs or is missing a feature you would like to see, let us know! We would greatly appreciate your feedback on it.

---

## License

rollup-plugin-import-folder is licensed under the terms of the [**MIT**](https://github.com/jleeson/rollup-plugin-import-folder/blob/master/LICENSE) license.
