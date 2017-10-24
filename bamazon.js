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
    message: "What is the item ID of the game you would like to buy?",
    validate: function(value) {
      if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 11) {
        return true;
        console.log("That's a great game!");
      } else {
        return false;
        console.log("Oops! We don't have that game");
      }
    }
  }, {
    name: "quantity",
    type: "input",
    message: "How many of that game would you like?"
  }
  ])  
  .then(function(answer) {
    console.log("i'm here", answer)
    connection.query("SELECT * from products", function(err, res) {
      console.log("chello")
      if (err) throw err;
      for (var i = 0; i < res.length; i++) {
        //console.log(answer.item, res[i].itemID, res[i].stockQuantity, typeof(res[i].itemID), typeof(answer.item))
        if (res[i].itemID === parseInt(answer.item)) {
          if (res[i].stockQuantity <= parseInt(answer.quantity)) {
            console.log("Insufficient Quantity");
              } else {              
                var newStockQuantity = res[i].stockQuantity - answer.quantity;
                var totalPrice = res[i].price * answer.quantity;
                console.log(newStockQuantity, totalPrice)
                console.log("The total damage: $" + totalPrice)




            //decrement answer.quantity from res[i].stockQuantity
            //tell user cost of order
            //res[i].price * answer.quantity = totalPrice
          }
          
        }
      }

    })
  })
}
//     var chosenGame;
//     for (var i=0; i< res.length; i++) {
//       if (res[i].itemID === answer.item) {
//         chosenGame === res[i];
//       }
//     }
//   })
//   }//      

// //     })
// //   {
// //     name: "amount",
// //     type: "text",
// //     message: "How many units of " + item.input + " would you like to buy?",
// //     }
// //     ])





