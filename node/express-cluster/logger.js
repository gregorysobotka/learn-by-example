import debug from 'debug'
import config from './config'

class logger {
    
    constructor(nameSpace) {
        const { debugPrefix } = config 
        const debugNamespace = `${debugPrefix}:${nameSpace}:`
        this.debugger = debug(debugNamespace)
    }

    info(message) {
        this.debugger(message)
    }

}

export default (namespace) => new logger(namespace)