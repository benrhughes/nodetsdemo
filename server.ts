import * as express from "express";

export default class Server {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.registerRoutes();
  }

  public start(){
    this.app.listen(8080);
  }

  private registerRoutes() {
    this.app.get('/:name', (req, res) => {
      res.json({'msg': 'Hello ' + req.params['name']});
    })
  }
}