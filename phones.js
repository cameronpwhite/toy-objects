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
    name: "Pixel",
    maker: "Google",
    operatingSystem: "Android",
    price: 750,
    weight: 1.3
}

// phones.push(pixel)

const addPhoneToInventory = (phoneObject) => {
    const lastIndex = phones.length - 1;
    const currentLastPhone = phones[lastIndex];
    const maxId = currentLastPhone.id;
    const idForNewPhone = maxId + 1;

    phoneObject.id = idForNewPhone;
    phones.push(phoneObject);
}

addPhoneToInventory(pixel);

for (const phone of phones) {
    console.log(`The ${phone.maker} ${phone.name} costs ${phone.price} dollars. It weighs ${phone.weight} grams`);
}

console.log(phones);
// Defining a phone to find
// const phoneToFind = 1;


// for (const phone of phones) {
//     //Only one phone will cause the condition below to eval as true.
//     if (phone.id === phoneToFind) {
//         phone.weight += 0.4
//         console.log(`The ${phone.maker} ${phone.name} costs $${phone.price}.`);
//     }
// }
