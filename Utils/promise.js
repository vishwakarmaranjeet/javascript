const cart = [
  {
    id: 1,
    item: "iPhone",
    price: 80000,
  },
  {
    id: 2,
    item: "laptop",
    price: 50000,
  },
  {
    id: 3,
    item: "tablet",
    price: 20000,
  },
];

let walletBalance = 500000;

createOrder(cart)
  .then(function (orderID) {
    return orderID;
  })
  .then(function (orderID) {
    console.log({ orderID: orderID });
    return proceedToPayment(orderID);
  })
  .then(function (orderHistory) {
    console.log(orderHistory);
    return showOrderSummary(orderHistory);
  })
  .then(function (orderHistory) {
    console.log(orderHistory);
    return updateWallet(orderHistory);
  })
  .then(function (orderHistory) {
    return shipmentDetails(orderHistory.status);
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error.message);
  });

function createOrder(cart) {
  return new Promise(function (resolve, reject) {
    if (!validateCard(cart)) {
      reject(new Error("Cart is not valid, we are unable to proceed your orders"));
    }
    let orderID = 98790;
    if (orderID) {
      resolve(orderID);
    }
  });
}

function proceedToPayment(orderID) {
  return new Promise(function (resolve, reject) {
    if (orderID) {
      resolve({ paymentStatus: 1, message: "Payment successfully completed" });
    } else {
      reject(new Error("Payment failed"));
    }
  });
}

function showOrderSummary(orderStatus) {
  return new Promise(function (resolve, reject) {
    if (orderStatus.paymentStatus === 1) {
      resolve({ status: "success", orders: cart });
    } else {
      reject(new Error("Soemthing went wrong. try again later"));
    }
  });
}

function getTotalOrderTotal (orders) {
  const totalOrderAmount = orders.reduce((accumulator, value) => {
    return accumulator + value.price;
  }, 0);
  return totalOrderAmount;
}

function shipmentDetails (status){
  return new Promise(function (resolve, reject) {
    if (status === "success"){
      resolve({ status: "success", message: "We will deliver your orders soon"});
    }
    else {
      reject({ status: "failed", message: "We are unable to delivered your orders" });
    }
  })
}
function updateWallet(orderHistory) {
  return new Promise(function (resolve, reject) {
    if (orderHistory.status === "success") {
      let orderAmount = getTotalOrderTotal(orderHistory.orders || 0);
      walletBalance = walletBalance - orderAmount;
      resolve({ balance: walletBalance, message: "Wallet updated", status: "success" });
    } else {
      reject(new Error("Wallet balance not updated"));
    }
  });
}

function validateCard() {
  return true;
}
