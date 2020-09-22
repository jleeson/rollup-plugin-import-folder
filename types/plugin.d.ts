import { Plugin, ResolveIdHook } from "rollup";

declare interface Options {
    include?: string[];
    exclude?: string[];
}

export default function(options?: Options): Plugin & {
    resolveId: ResolveIdHook;
}