const command = new Deno.Command(Deno.execPath(), {
  args: ["test", "--allow-read", "--fail-fast"],
});

const output = await command.output();

console.error(new TextDecoder().decode(output.stderr));

// console.log({ output, errors: new TextDecoder().decode(output.stderr) });
