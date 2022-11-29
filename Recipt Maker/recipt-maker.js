const dishData = [
    {
        name: "Idli",
        price: 30,
    },
    {
        name: "Samosa",
        price: 20,
    },
    {
        name: "Aloo Paratha",
        price: 30,
    },
    {
        name: "Veg Pizza",
        price: 60,
    },
];

const gst = 1.05; // 5% GST

function getPrices(taxBoolean) {
    for (let item of dishData) {
        let finalPrice;
        if (taxBoolean == true) {
            finalPrice = item.price * gst;
        } else if (taxBoolean == false) {
            finalPrice = item.price;
        } else {
            console.log("You need to pass a boolean to the getPrices call!");
            return;
        }
        console.log(`Dish: ${item.name}, Price: ${finalPrice}`);
    }
}

function getDiscount(taxBoolean, guests) {
    getPrices(taxBoolean);
    if (guests > 0 && guests < 30) {
        let discount = 0;
        if (guests < 5) {
            discount = 5;
        } else if (guests >= 5) {
            discount = 10;
        }
        console.log(`Discount is: ${discount}`);
    } else {
        console.log("The second argument must be a number between 0 and 30");
    }
}

getDiscount(true, 2);
getDiscount(false, 10);
