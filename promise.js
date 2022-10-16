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

let walletBalance = 200000;

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
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error.message);
  });

function createOrder(cart) {
  return new Promise(function (resolve, reject) {
    if (!validateCard(cart)) {
      reject(new Error("Cart is not valid"));
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
      reject(new Error("Soemthing went wrong"));
    }
  });
}

function updateWallet(orderHistory) {
  return new Promise(function (resolve, reject) {
    if (orderHistory.status === "success") {
      let orderAmount = 150000;
      walletBalance = walletBalance - orderAmount;
      resolve({ balance: walletBalance, message: "Wallet updated" });
    } else {
      reject(new Error("Wallet balance not updated"));
    }
  });
}

function validateCard() {
  return true;
}
