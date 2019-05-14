import { inspect as nodeInspect } from 'util'

const opts = {
  showHidden: false,
  depth: Infinity,
  colors: false,
  breakLength: Infinity
}

const inspect = (strings, ...values) => {
  const inspectedValues = values.map(value => nodeInspect(value, opts))
  const full = []
  for (let i = 0; i < strings.length; i++) {
    if (strings[i]) {
      full.push(strings[i])
    }
    if (inspectedValues[i]) {
      full.push(inspectedValues[i])
    }
  }
  return full.join('')
}

export { inspect, inspect as default }
