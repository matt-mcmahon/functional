const reducer = (value, fun) => fun(value)
const compose = (...functions) => value => functions.reduceRight(reducer, value)
compose.signature = 'compose :: [(y -> z), ..., (b -> c), (a -> b)] -> (a -> z)'

export default { compose }
