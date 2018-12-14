const bind = method => object => (...args) => method.apply(object, args)
bind.signature = 'bind :: f => a => f'

export { bind, bind as default }
