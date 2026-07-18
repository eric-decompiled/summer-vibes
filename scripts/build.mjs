import { cp, mkdir, rm } from "node:fs/promises";

const outputDirectory = new URL("../dist/", import.meta.url);
const sourceFile = new URL("../index.html", import.meta.url);
const domainFile = new URL("../CNAME", import.meta.url);

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });
await cp(sourceFile, new URL("index.html", outputDirectory));
await cp(domainFile, new URL("CNAME", outputDirectory));

console.log("Built site in dist/");
