
import pool from "./db.js";
import cors from 'cors';
// const bodyParser = require('body-parser');
// import body-parser from bodyParser
import bodyParser from "body-parser";
import bcrypt from 'bcrypt';
import express from 'express';
import passport from "passport";
import { Strategy as LocalStrategy } from 'passport-local';
import session from 'express-session';
import flash from 'connect-flash';





//App config
// const initializePassport = require('./passport-config.js');
// initializePassport(passport, email => {
  
  // })
  const app = express();
  const port = process.env.PORT || 8001;
  app.use(cors());
  
  app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());
//Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

//API endpoints


// app.get('/', (req, res) => res.status(200).send('Hello'));

// passport.use(new LocalStrategy({ passReqToCallback: true },
//   async (req, email, password, done) => {
//     try {
//       const userQuery = 'SELECT * FROM users WHERE email = $1';
//       const { rows } = await pool.query(userQuery, [email]);
//       const user = rows[0];

//       if (!user) {
//         return done(null, false, req.flash('loginMessage', 'No user found.'));
//       }

//       const passwordMatch = await bcrypt.compare(password, user.password);

//       if (!passwordMatch) {
//         return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
//       }

//       return done(null, user);
//     } catch (error) {
//       return done(error);
//     }
//   }
// ));

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser(async (id, done) => {
//   try {
//     const userQuery = 'SELECT * FROM users WHERE id = $1';
//     const { rows } = await pool.query(userQuery, [id]);
//     const user = rows[0];
//     done(null, user);
//   } catch (error) {
//     done(error);
//   }
// });

app.get('/', async(req, res) => {
  try{
    const query = `
    SELECT * FROM products INNER JOIN featured ON products.product_id = featured.product_id
    `;
    const {rows} = await pool.query(query);
    res.json(rows);

  }

  catch(error){
    console.log('error fetching featured products', error);
    res.status(500).send('Internal Server Error');
  }
})

// API Endpoint to Fetch Men's Products
app.get('/men', async (req, res) => {
  try {
    const query = `
        SELECT * FROM products
        WHERE category_id IN (
          SELECT category_id FROM categories WHERE category_name = 'Men'
        );
      `;

    const { rows } = await pool.query(query);
    // console.log(rows);
    res.json(rows);
  } catch (error) {
    console.error('Error fetching men\'s products:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/women', async (req, res) => {
  try {
    const query = `
        SELECT * FROM products
        WHERE category_id IN (
          SELECT category_id FROM categories WHERE category_name = 'Women'
        );
      `;

    const { rows } = await pool.query(query);
    // console.log(rows);
    res.json(rows);
  } catch (error) {
    console.error('Error fetching men\'s products:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/kids', async (req, res) => {
  try {
    const query = `
        SELECT * FROM products
        WHERE category_id IN (
          SELECT category_id FROM categories WHERE category_name = 'Kids'
        );
      `;

    const { rows } = await pool.query(query);
    // console.log(rows);
    res.json(rows);
  } catch (error) {
    console.error('Error fetching men\'s products:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/men/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const query = `SELECT products.product_id, products.product_name, products.product_description, products.image_url, products.price
                    FROM products
                    INNER JOIN sub_category ON (products.sub_category_id = sub_category.sub_category_id)
                    INNER JOIN categories ON (categories.category_id = products.category_id)
                    WHERE sub_category.sub_category_name = $1 AND categories.category_name = 'Men';`;
    const { rows } = await pool.query(query, [id]);
    res.json(rows);
  }
  catch (error) {
    console.error('Error fetching men products:', error);
    res.status(500).send('Internal Server Error');
  }
})

app.get('/women/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const query = `SELECT products.product_id, products.product_name, products.product_description, products.image_url, products.price
                    FROM products
                    INNER JOIN sub_category ON (products.sub_category_id = sub_category.sub_category_id)
                    INNER JOIN categories ON (categories.category_id = products.category_id)
                    WHERE sub_category.sub_category_name = $1 AND categories.category_name = 'Women';`;
    const { rows } = await pool.query(query, [id]);
    res.json(rows);
  }
  catch (error) {
    console.error('Error fetching women products:', error);
    res.status(500).send('Internal Server Error');
  }
})

app.get('/kids/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const query = `SELECT products.product_id, products.product_name, products.product_description, products.image_url, products.price
                    FROM products
                    INNER JOIN sub_category ON (products.sub_category_id = sub_category.sub_category_id)
                    INNER JOIN categories ON (categories.category_id = products.category_id)
                    WHERE sub_category.sub_category_name = $1 AND categories.category_name = 'Kids';`;
    const { rows } = await pool.query(query, [id]);
    res.json(rows);
  }
  catch (error) {
    console.error('Error fetching kids products:', error);
    res.status(500).send('Internal Server Error');
  }
})






app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  try{
    const query = 'SELECT * FROM users WHERE email = $1';
    const {rows} = await pool.query(query, [email]); 
    if(rows.length == 0){
      return(res.status(401).json({message: 'Invalid Credentials'}))
    }

    const possibleUser = rows[0];
    
    const passwordCheck = await bcrypt.compare(possibleUser.password, password);

    if(!passwordCheck){
      return res.status(401).json({message: 'Invalid Credentials'});

    }

    return res.status(200).json({message: 'Login Successful'});
  }
  catch(error){
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error' });
  }


});


app.post('/register', async (req, res) => {
  try {
    const { email, password, address } = req.body;

    const existingUser = await pool.query('SELECT * FROM users where email = $1', [email]);

    if (existingUser.rows.length > 0) {
      return res.status(400).json({ error: "Your account already exists. Please login" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user to the database
    const result = await pool.query(
      'INSERT INTO users (email, password, address) VALUES ($1, $2, $3) RETURNING *',
      [email, hashedPassword, address]
    );

    res.json({ user: result.rows[0] });
  } catch (error) {
    console.error('Error processing registration:', error);

    if (error.constraint === 'users_email_key') {
      // Handle unique constraint violation separately
      return res.status(400).json({ error: "Email is already registered. Please use a different email" });
    }

    res.status(500).json({ error: "Internal server error" });
  }
});


app.post('/trendythreads/User', (req, res) => {

})

//Listener

app.listen(port, () => console.log(`listeing on localhost: ${port}`));