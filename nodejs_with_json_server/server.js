const express = require('express');
const jsonServer = require('json-server');
const _ = require('lodash');

function insert(_db, collection, data) {
  const table = _db.get(collection);
  data.id = Object.keys(table).length; 
  table.push(data).write();
}
 
const app = express(); 
const router = jsonServer.router('./db.json')
const db = router.db; // Assign the lowdb instance
app.get('/hello',(req, res)=>{
  insert(db, 'todo', { "title": "fff" } )
  console.log('added new data');
  res.jsonp({msg:'inserted'});
})
const middlewares = jsonServer.defaults()

app.use(middlewares)
app.use(router)
app.listen(3000, () => {
  console.log('JSON Server is running. 3000')
})