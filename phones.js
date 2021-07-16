// Existing phone catalog
const phones = [
    {
        id: 1,
        name: "iPhone",
        maker: "Apple, Inc.",
        operatingSystem: "iOS",
        price: 900,
        weight: 1.2
    },
    {
        id: 2,
        name: "Galaxy",
        maker: "Samsung",
        operatingSystem: "Android",
        price: 600,
        weight: 1.4
    }
]

// Define a new phone
const pixel = {
    id: 3,
    name: "Pixel",
    maker: "Google",
    operatingSystem: "Android",
    price: 750,
    weight: 1.3
}

phones.push(pixel)


// Defining a phone to find
const phoneToFind = 1;


for (const phone of phones) {
    //Only one phone will cause the condition below to eval as true.
    if (phone.id === phoneToFind) {
        phone.price += (phone.price * 0.05);
        console.log(phone.price);
    }
}