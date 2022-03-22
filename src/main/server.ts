import express, { Application, Request, Response } from 'express';
import myService from './services/myService';
import GetNameMiddleware from './middleware/getName.middleware';
import routes from './routes/index';


export default function createServer(){
  
  const server: Application = express()
  const port = 3000
  
  server.get('/', GetNameMiddleware.getName);

  server.use(routes);
  
  server.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  })

  return server;
}



