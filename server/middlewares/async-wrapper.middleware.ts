import {Request, Response} from "express";

export const asyncWrapper = (func: any) => {
    return async (req: Request, res: Response) => {
        try {
            const result = await func(req, res)
            return res.status(200).json(result)
        } catch (e: any) {
            res.status(500).json(e.message)
        }
    }
}