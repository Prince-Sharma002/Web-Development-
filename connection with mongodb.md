# connection with mongodb with replit

```
// database connection
import express from 'express';
import bodyParser from 'body-parser';
import { createServer } from 'http';
import { MongoClient } from 'mongodb';
import cookieParser from 'cookie-parser';

const app = express();
const http = createServer(app);
const port = process.env.PORT || 5000;

const mongo_username = process.env.MONGO_USERNAME;
const mongo_password = process.env.MONGO_PASSWORD;
const mongo_uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster.ynomqgq.mongodb.net/crmdb?retryWrites=true&w=majority`;

const client = new MongoClient(mongo_uri, { useNewUrlParser: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use( cookieParser());

app.get('/', (req, res) => {
  res.cookie("token" , 1 , { httpOnly:true , expires: new     Date( Date.now() + 60*1000 ) });
  res.sendFile('/index.html', { root: '.' });
  
});


app.get('/create', (req, res) => {
  console.log( req.cookies );
  res.sendFile('/create.html', { root: '.' });
});

// Handle MongoDB connection once during server startup
client.connect().then(() => {
  console.log('Connected to MongoDB');
  const customers = client.db('crmdb').collection('customers');

  // post data from create file with form action post in async way
  app.post('/create', async (req, res) => {
    try {
      // mongodb only take data in json formate
      const customer = {
        name: req.body.name,
        address: req.body.address,
        telephone: req.body.telephone,
        note: req.body.note,
      };
      const result = await customers.insertOne(customer);
      console.log('1 customer inserted');
      res.send('Customer created');
    } catch (error) {
      console.error('Error creating customer:', error);
      res.status(500).send('Error creating customer');
    }
  });

  // Start the server after the MongoDB connection is established
  http.listen(port, () => {
    console.log('Listening on port', port);
  });
});

```
