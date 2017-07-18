import {Request, Response, NextFunction} from 'express'

export function headerFilter(req: Request, res: Response, next: NextFunction ){
    if(req.header('customHeader'))
        return next();
        
    res.statusCode = 400;
    res.json({msg: "customHeader missing"});
}