import http from 'http'
import express from 'express'
import config from './config'
import logger from './logger'
import cluster from 'cluster'
import uuid4 from 'uuid/v4'
import { createReadStream } from 'fs'

const log = logger('app.js')
const { port } = config
const app = express()

app.use((req, res, next) => {

    // define request context
    req.context = {
        message: 'Hello, World!',
        requestId: uuid4(),
        workerId: (cluster.isWorker) ? `worker-${cluster.worker.id}` : 'master',
        timeStart: Date.now(),
        timeEnd: null
    }

    log.info(`app.get:${req.context.workerId}:request[${req.context.requestId}]`)

    next()

})

app.get('/', (req, res) => { 

    // before handling response, update end time
    req.context.timeEnd = Date.now()

    // add request context to response headers
    res.set(req.context)

    // send response with application/json content-type
    res.json(req.context)

})

app.get('/image', (req, res) => {

    const imagePath = '../../content/images/1.jpeg'

    // add request context to response headers
    res.set(req.context)

    res.append('content-type', 'image/jpeg')

    /*
        Do not copy this route as  as a solution for serving images in a production application.
        It contains multiple (serious) issues with serving images this way that could easily cause your app to crash. 
        This code is for demonstrational purposes only. 
    */

    createReadStream(imagePath).pipe(res.set('timeEnd', Date.now()))

})

export default app