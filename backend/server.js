
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
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

//API endpoints


// app.get('/', (req, res) => res.status(200).send('Hello'));

passport.use(new LocalStrategy({ passReqToCallback: true },
  async (req, email, password, done) => {
    try {
      const userQuery = 'SELECT * FROM users WHERE email = $1';
      const { rows } = await pool.query(userQuery, [email]);
      const user = rows[0];

      if (!user) {
        return done(null, false, req.flash('loginMessage', 'No user found.'));
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
      }

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const userQuery = 'SELECT * FROM users WHERE id = $1';
    const { rows } = await pool.query(userQuery, [id]);
    const user = rows[0];
    done(null, user);
  } catch (error) {
    done(error);
  }
});

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



app.post('/register', async(req, res) => {
  try{
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const email = req.body.email;
    const address = req.body.address;
    const query = 'INSERT INTO users (email, password, address) VALUES ($1, $2, $3)';
    const values = [email, hashedPassword, address];
    pool.query(query, values);
    console.log(email, passport, address);
    res.status(200).json({ message: 'Registration successful.' });
    // res.redirect('/login');
  }
  catch(error){
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'An error occurred during registration.' });
  }
})


app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  try {
    const query = 'SELECT * FROM users WHERE email = $1';
    const { rows } = await pool.query(query, [email]);

    console.log(rows);

    if (rows.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const user = rows[0];

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // You can generate and send a JWT token here if needed

    // res.status(200).json({ message: 'Login successful' });
    console.log('success');
    res.redirect('/');
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


// app.post('/login', (req, res, next) => {
//   passport.authenticate('local', (err, user, info) => {
//     if (err) {
//       return next(err);
//     }
//     if (!user) {
//       return res.status(401).json({ message: req.flash('loginMessage') });
//     }
//     req.logIn(user, (loginErr) => {
//       if (loginErr) {
//         return next(loginErr);
//       }
//       return res.status(200).json({ message: 'Login successful' });
//     });
//   })(req, res, next);
// });



app.post('/trendythreads/User', (req, res) => {

})

//Listener

app.listen(port, () => console.log(`listeing on localhost: ${port}`));