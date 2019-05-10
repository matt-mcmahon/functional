export default function isRequired(message = 'argument is required') {
  throw new TypeError(message)
}
