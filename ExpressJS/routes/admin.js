const path = require('path');

const adminController = require('../controllers/admin');
const isAuth = require('../middleware/is-auth');

const express = require('express');
const { body } = require('express-validator/check');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', isAuth, adminController.getAddProduct);

// /admin/products => GET
router.get('/products', isAuth, adminController.getProducts);

// /admin/add-product => POST
router.post(
  '/add-product',
  [
    body(
      'title',
      'The title must be alpha numeric only with 3 or more characters'
    )
      .isString()
      .isLength({ min: 3 })
      .trim(),
    body('imgUrl', 'You entered a wrong url format').isURL(),
    body('price', 'The price must only be numbers').isFloat(),
    body('description', 'The description must have at least 5 characters')
      .isLength({ min: 5, max: 400 })
      .trim(),
  ],
  isAuth,
  adminController.postAddProduct
);

router.get('/edit-product/:productId', isAuth, adminController.getEditProduct);

router.post(
  '/edit-product',
  [
    body(
      'title',
      'The title must be alpha numeric only with 3 or more characters'
    )
      .isString()
      .isLength({ min: 3 })
      .trim(),
    body('imgUrl', 'You entered a wrong url format').isURL(),
    body('price', 'The price must only be numbers').isFloat(),
    body('description', 'The description must have at least 5 characters')
      .isLength({ min: 5, max: 400 })
      .trim(),
  ],
  isAuth,
  adminController.postEditProduct
);

router.post('/delete-product', isAuth, adminController.postDeleteProduct);

module.exports = router;
