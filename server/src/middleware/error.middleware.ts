import { NextFunction, Request, Response } from 'express'
import { HttpError } from '../interface/index.js'
import { Logger } from '../utils/index.js'

export const errorHandler = (
    err: HttpError,
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const status = err.status || 500
    const message = err.message || 'Internal Server Error'

    //Log the error
    Logger.error(`${status} - ${message}`)
    console.error(`Error: ${status} - ${message}`)

    //Send error response
    res.status(status).json({
        success: false,
        status,
        message,
    })
}
