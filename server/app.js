const express = require('express');
const app = express();

const customerRouter = require('./routes/customerRouter');
const orderRouter = require('./routes/orderRouter');

app.use(express.json({ extended: false }));
app.use('/customers', customerRouter);
app.use('/customers', orderRouter);

app.listen(3000, () => {
  console.log('Sunucu 3000 portunda çalışıyor.');
});


module.exports = app;