import http from 'http'
import express from 'express'
import config from './config'
import logger from './logger'
import cluster from 'cluster'
import uuid4 from 'uuid/v4'

const log = logger('app.js')
const { port } = config
const app = express()

app.use((req, res, next) => {

    // define request context
    req.context = {
        message: 'Hello, World!',
        requestId: uuid4(),
        workerId: null,
        timeStart: Date.now(),
        timeEnd: null
    }

    next()

})

app.get('/', (req, res) => { 
    
    // if the process handling the request is a worker, assign the workerId to the request context
    if (cluster.isWorker) {
        req.context.workerId = cluster.worker.id
        log.info(`app.get:worker[${req.context.workerId}]:request[${req.context.requestId}]`)
    }

    // before handling response, update end time
    req.context.timeEnd = Date.now()

    // assign the request context to the response body (for example)
    const responseObject = req.context

    // send response with application/json content-type
    res.json(responseObject)

})

export default app