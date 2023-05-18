import { fail, pass } from "./lib/message.ts";

const command = new Deno.Command(Deno.execPath(), {
  args: ["test", "--allow-read", "--fail-fast", "--allow-run"],
});

const output = await command.output();

console.log({
  output,
  stderr: new TextDecoder().decode(output.stderr),
  stdout: new TextDecoder().decode(output.stdout),
});

console.log("\n\nstderr\n\n");
console.log(new TextDecoder().decode(output.stderr));
console.log("\n\nstdout\n\n");
console.log(new TextDecoder().decode(output.stdout));

if (output.success) {
  pass(`all tests passed`);
} else {
  fail(`one or more tests failed:`);
  console.error(new TextDecoder().decode(output.stderr));
}

Deno.exit(output.code);
