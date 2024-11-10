MongoDB Queries for the following questions:

1. Find all the information about each products

Ans : db.product.find();

2. Find the product price which are between 400 to 800

Ans : db.product.find({'product_price':{$gt:400, $lt:800}});

3. Find the product price which are not between 400 to 600

Ans : db.product.find({$not : {$gt:400, $lt:800}});

4. List the four product which are greater than 500 in price 

Ans : db.product.find({'product_price' : {$gte:500}}).limit(4);

5. Find the product name and product material of each products

Ans : db.product.find({}, {'product_name':1, 'product_material':1});

6. Find the product with a row id of 10

Ans : db.product.findOne({'id' : '10'});

7. Find only the product name and product material

Ans : db.product.find({}, {'_id' : 0, 'product_name' : 1, 'product_material' : 1});

8. Find all products which contain the value of soft in product material 

Ans : db.product.find({'product_material' : 'Soft'}); / db.product.find({'product_material' : {$eq : 'Soft'}});   

9. Find products which contain product color indigo  and product price 492.00

Ans : db.product.find({'product_color' : 'indigo', 'product_price' : 492.00});;

10. Delete the products which product price value are 28

Ans : db.product.deleteMany({'product_price' : 28});