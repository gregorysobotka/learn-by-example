import app from './app'
import cluster from 'cluster'
import { cpus } from 'os'
import logger from './logger'
import config from './config'

const log = logger('clustered.js')
const { hostname, port } = config
const cpuCount = cpus().length

if (cluster.isMaster) {

    log.info(`Starting in cluster mode...`)
    log.info(`CPU Count: ${cpuCount}`)
    log.info(`App listening at: http://${hostname}:${port}`)
    
    for (let i = 0; i < cpuCount; i++) {
        cluster.fork()
    }

} else {

    let startMessage = `worker[${cluster.worker.id}] started...`
    app.listen(port, () => log.info(startMessage))

}