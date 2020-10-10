export const readdir = async (path: string, paths: string[] = []) => {
  for await (const dirEntry of Deno.readDir(path)) {
    if (dirEntry.isFile) {
      paths.push(dirEntry.name);
    } else if (dirEntry.isDirectory) {
      readdir(dirEntry.name, paths);
    }
  }
  return paths;
};
