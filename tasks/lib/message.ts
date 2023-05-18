export function pass(message: string, ...formatting: string[]) {
  console.info(`[%cpass%c] ${message}`, "color: green", "", ...formatting);
}

export function fail(message: string, ...formatting: string[]) {
  console.info(`[%cfail%c] ${message}`, "color: red", "", ...formatting);
}
