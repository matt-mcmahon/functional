export default signature => obj => {
  Object.defineProperty(obj, "signature", {
    value: signature,
  })
}
