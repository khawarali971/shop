var Product = require('../models/product')
var mongoose = require('mongoose')
mongoose.connect('localhost:27017/shop')
var products = [new Product
    ({
        imagePath: '/images/gothic.png',
        title: 'Gothic',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam vitae, tempore voluptatem laborum illum facilis ratione dolore asperiores, nisi perferendis. Aliquid repellendus dolorum sunt dolores, qui optio, voluptatum accusantium recusandae.',
        price: 12
    }),
       new Product({
        imagePath: '/images/cod4.jpg',
        title: 'Call of duty 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam vitae, tempore voluptatem laborum illum facilis ratione dolore asperiores, nisi perferendis. Aliquid repellendus dolorum sunt dolores, qui optio, voluptatum accusantium recusandae.',
        price: 25
    }),
            new Product({
        imagePath: '/images/warcraft.jpg',
        title: 'Warcraft',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam vitae, tempore voluptatem laborum illum facilis ratione dolore asperiores, nisi perferendis. Aliquid repellendus dolorum sunt dolores, qui optio, voluptatum accusantium recusandae.',
        price: 15
    }),
                new Product({
        imagePath: '/images/fifa.jpg',
        title: 'fifa',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam vitae, tempore voluptatem laborum illum facilis ratione dolore asperiores, nisi perferendis. Aliquid repellendus dolorum sunt dolores, qui optio, voluptatum accusantium recusandae.',
        price: 18
    }),
                    new Product({
        imagePath: '/images/icc.jpg',
        title: 'Cricket 15',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam vitae, tempore voluptatem laborum illum facilis ratione dolore asperiores, nisi perferendis. Aliquid repellendus dolorum sunt dolores, qui optio, voluptatum accusantium recusandae.',
        price: 12
    }),
                        new Product({
        imagePath: '/images/lol.jpeg',
        title: 'Legue of Legends',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam vitae, tempore voluptatem laborum illum facilis ratione dolore asperiores, nisi perferendis. Aliquid repellendus dolorum sunt dolores, qui optio, voluptatum accusantium recusandae.',
        price: 25
    })

                            ];
var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        done++;
        if (done === products.length) {
            exit()
        }
    })
}

function exit() {
    mongoose.disconnect()
}
