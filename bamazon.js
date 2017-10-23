var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon" 
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadID + "\n");
  
  printProducts()
});

function printProducts() {
  //new cli-table
  var productsTable = new Table({
    head: ['ItemID', 'Product', 'Department', 'Price', 'Available Quantity']
  });
  //get all rows from the Products table
  connection.query('SELECT * FROM products', function(err, res){
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      productsTable.push([res[i].itemID, res[i].productName, res[i].departmentName, res[i].price, res[i].stockQuantity]);
    }
    console.log(productsTable.toString());
    userOrder(res)
})
}

function userOrder() {

  inquirer.prompt([
  {
    name: "item",
    type: "input",
    message: "What is the item ID of the game you would like to buy?"
  }
    ])
    .then(function(answer) {
      var chosenGame;
      for (var i=0; i< res.length; i++) {
        if (res[i].itemID === answer.item) {
          chosenGame === res[i];
        }
      }
  })
  }//      

//     })
//   {
//     name: "amount",
//     type: "text",
//     message: "How many units of " + item.input + " would you like to buy?",
//     }
//     ])

    
  


  