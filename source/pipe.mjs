const reducer = (value, fun) => fun(value)
const pipe = (...functions) => value => functions.reduce(reducer, value)
pipe.signature = 'pipe :: [(a -> b), (b -> c), ..., (y -> z)] -> (a -> z)'

export default { pipe }
