/* imports */
import { createFilter } from "@rollup/pluginutils";
import path from "path";
import fs from "fs";

/**
 * Get the file extension of a filepath.
 * @param {string} filepath
 * @return {string}
 */
function getFileExt(filepath) {
    try {
        if (fs.statSync(filepath + ".js").isFile()) return ".js"
        else if (fs.statSync(filepath + ".ts").isFile()) return ".ts";
        else return false;
    } catch {
        return false;
    }
}

export default (options = {}) => {

    const include = ["**/*.js", "**/*.ts"].concat(options.include || []);
    const filter = createFilter(include, options.exclude || [])

    return {
        name: "import-folder",

        resolveId(importee, importer) {
            if(path.extname(importee) != "") return;

            const splitImportee = importee.split("/");
            const directory = splitImportee.pop();

            const potentialMatch = "<dir>/<dir>".replace(/<dir>/g, directory);

            if(filter(potentialMatch)) return;
            
            const updatedImportee = [
                ...splitImportee,
                ...potentialMatch.split("/")
            ].join("/");

            const fullPath = path.resolve(path.dirname(importer || "."), updatedImportee);

            const fileExt = getFileExt(fullPath);
            if(fileExt) return fullPath + fileExt;

            return null;
        }
    }
}