import app from './app'
import config from './config'
import logger from './logger'

const log = logger('standalone.js')

const { hostname, port } = config

app.listen(port, () => log.info(`Example app listening on port http://${hostname}:${port}`))