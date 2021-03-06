import express, { application, Application, Request, Response } from 'express';
import GetNameMiddleware from './middleware/getName.middleware';
import routes from './routes/routes';
import Database from './config/db';
import * as http from 'http';


export default class App {

  private app: Application;
  private httpServer: http.Server;

  constructor(){
    this.init();
  }

  private init(){
    this.app = express();

    this.initializeDatabase();
    this.initializeRedis()
    this.initializeRoutes()
  }

  public listen(): void {
    this.app.listen(3000, () => {
      console.log(`App listening on the port 3000`);
    });
  }

  public close(): void {
    this.httpServer.close();
  }

  public getServer(): Application {
    return this.app;
  }

  private initializeRoutes(): void {
    this.app.use(routes);
  }

  private initializeDatabase(){
 
  }

  private initializeRedis() {
    
  }
  
}




