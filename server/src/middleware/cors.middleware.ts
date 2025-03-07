import { CorsOptions } from 'cors'
// import { config } from '../utils';

const corsOptions: CorsOptions = {
    origin: ['react-app-lb-1338507120.us-east-1.elb.amazonaws.com'], // allowed origin lists
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], //allowed Http methods
    allowedHeaders: ['Content-Type', 'Authorization'], //allowed headers
    credentials: true, //allow credentials(cookies, authorization headers, etc.)
    optionsSuccessStatus: 200, //Status for successful OPTIONS requests
}

export default corsOptions
