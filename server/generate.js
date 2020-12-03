const faker = require('faker'); // eslint-disable-line

const db = { products: []};

for (let id = 1; id <= 300; id++)
	db.products.push({
		id,
		name: faker.commerce.productName(),
		description: faker.lorem.sentences(),
		price: faker.commerce.price(),
		imageUrl: 'https://source.unsplash.com/1600x900/?product',
		quantity: faker.random.number()
	});


console.log(JSON.stringify(db));
