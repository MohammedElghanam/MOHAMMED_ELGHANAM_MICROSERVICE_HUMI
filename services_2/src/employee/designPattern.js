class MyExpress {
    constructor() {
      this.middlewares = [];
    }
  
    use(middleware) {
      this.middlewares.push(middleware);
    }
  
    handleRequest(req, res) {
      const executeMiddleware = (index) => {
        if (index < this.middlewares.length) {
          const middleware = this.middlewares[index];
          middleware(req, res, () => executeMiddleware(index + 1));
        }
      };
      executeMiddleware(0); 
    }
  }
  

const app = new MyExpress();

app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
  next(); 
});


app.use((req, res, next) => {
  res.end('Hello World!');
});

const req = { method: 'GET', url: '/' };
const res = {
  end: (message) => {
    console.log(message); 
  }
};

app.handleRequest(req, res);
