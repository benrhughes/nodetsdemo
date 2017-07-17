import * as express from "express";

export default class Server {
  private app: express.Application;
  private data: {[index:string ]: string}

  constructor() {
    this.app = express();
    this.registerRoutes();
    this.data = { 'Fred': 'Hello Fred'};
  }

  public start(){
    this.app.listen(8080);
  }

  private registerRoutes() {
    this.app.get('/user', (req, res) =>{
      return res.json(Object.keys(this.data));
    });

    this.app.get('/user/:name', (req, res) => {
      var name = req.params['name'];
      if(this.data[name])
        return res.json(this.data[name]);
      else
        return res.sendStatus(404);
    })

    this.app.post('/user/:name', (req, res) => {
      var name = req.params['name'];
      this.data[name] = 'Hello ' + name;
      res.setHeader('location', '/user/'+ name);
      return res.sendStatus(201);
    });
  }
}