This is a full stack E-commerce web app.The oringinal idea comes from [Lama Dev](https://www.youtube.com/watch?v=BCkWFblNLKU&t=78s) and I have made some changes to the original project.

## Features
- :green_circle: Redux for cart state management. Users can add or remove items from the cart and see items even in different pages.
- :green_circle: Using [Strapi](https://strapi.io/) as a headless CMS to manage products and orders. It's convenient to add, delete or update products and orders for admin.
- :green_circle: Using MySQL as database. The database is hosted on localhost.
- :green_circle: Using [Stripe](https://market.strapi.io/plugins/strapi-stripe) as payment method. Users can pay for their orders with it.

## Getting Started
1. Substitute your own credentials in `api/.env` and `client/.env`
2. Run `npm install` in both api and client folder
3. Run `npm run develop` in api folder
4. Run `npm start` in client folder

## Notes
- static-web is the static version of website, which is not connected to database.
- you need to run api first and then client.
- you need to create your own database and tables.
- you need to create your own admin account in Strapi.
# E-Commerce
