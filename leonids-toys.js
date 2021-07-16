const toys = [
    {
        id: 1,
        name: "Lincoln Logs",
        inventor: "John Lloyd Wright",
        color: "brown",
        price: 15.99
    },
    {
        id: 2,
        name: "Legos",
        inventor: "Ole Kirk Christiansen",
        color: "varies",
        price: 60.99
    },
    {
        id: 3,
        name: "Mega Bloks",
        inventor: "Victor Bertrand",
        color: "varies",
        price: 30.99
    }
]

const jenga = {
    id: 4,
    name: "Jenga",
    inventor: "Leslie Scott",
    color: "tan",
    price: 19.99
}

const buckyballs = {
    id: 5,
    name: "Buckyballs",
    inventor: "Craig Zucker",
    color: "silver",
    price: 10.99
}

toys.push(jenga, buckyballs);

for (const toy of toys) {
    console.log(`The price of ${toy.name} is $${toy.price}.`);
}

// const lincolnLogs = {
//     id: 1,
//     name: "Lincoln Logs",
//     inventor: "John Lloyd Wright",
//     color: "brown",
//     price: 15.99
// }

// const legoBricks = {
//     id: 2,
//     name: "Legos",
//     inventor: "Ole Kirk Christiansen",
//     color: "varies",
//     price: 60.99
// }

// const megaBloks = {
//     id: 3,
//     name: "Mega Bloks",
//     inventor: "Victor Bertrand",
//     color: "varies",
//     price: 30.99
// }