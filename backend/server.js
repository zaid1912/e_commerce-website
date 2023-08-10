
import pool from "./db.js";
import cors from 'cors';

import express from 'express';

//App config

const app = express();
const port = process.env.PORT || 8001;

//Middlewares

app.use(cors());
app.use(express.json());

//API endpoints


app.get('/', (req, res) => res.status(200).send('Hello'));


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

app.post('/trendythreads/User', (req, res) => {

})

//Listener

app.listen(port, () => console.log(`listeing on localhost: ${port}`));