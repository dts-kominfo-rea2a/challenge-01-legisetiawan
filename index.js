// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
// MONICA
let colorMonica = new Set();
colorMonica.add('Yellow');
colorMonica.add('Pink');
colorMonica.add('White');
colorMonica.add('Purple');
let restaurantMonica = new Set()
restaurantMonica.add('Bento');
restaurantMonica.add("Sushi");
restaurantMonica.add('Pancake');
restaurantMonica.add('Eggy');
restaurantMonica.add('Tempura');
restaurantMonica.add('Bento');
restaurantMonica.add('Eggy');
restaurantMonica.add('Padang');
restaurantMonica.add( 'Tteok');
restaurantMonica.add('Sushi');
restaurantMonica.add('Sushi');

const firstUser = {
    'name':'Monica',
    'gender':'Female',
    'age':17,
    'email':'monica@dingdong.com',
    'favoriteColor':[...colorMonica],
    'isHavePet':'Yes',
    'education':[{
                        'name':'SD 01',
                        'city':'Jakarta',
                        'graduate':2016
                    },{
                        'name':'SMP 02',
                        'city':'Jakarta',
                        'graduate':2019
                    },{
                        'name':'SMA 03',
                        'city':'Tangerang'
                    },
                ],
    
    favoriteRestaurant:[...restaurantMonica]
    
};

// WENDY
let colorWendy = new Set();
colorWendy.add('Blue');
colorWendy.add('Black');
colorWendy.add('Grey');
let restaurantWendy = new Set()
restaurantWendy.add('Tempura');
restaurantWendy.add('Bento');
restaurantWendy.add('Sushi');
restaurantWendy.add('Pancake');
restaurantWendy.add('Padang');
restaurantWendy.add( 'Katsu');
restaurantWendy.add('Geprek');
restaurantWendy.add( 'Pancake');
restaurantWendy.add('Eggy');

const secondUser = {
    'name':'Wendy',
    'gender':'Male',
    'age':23,
    'email':'wendy@dingdong.com',
    'favoriteColor':[...colorWendy],
    'isHavePet':'No',
    'education':[{
                        'name':'SD 02',
                        'city':'Jakarta',
                        'graduate':2010
                    },{
                        'name':'SMP 03',
                        'city':'Bogor',
                        'graduate':2013
                    },{
                        'name':'SMA 01',
                        'city':'Surabaya',
                        'graduate':2016
                    },{
                        'name':'Universitas Maju',
                        'city':'Tangerang'
                    },
                ],

    favoriteRestaurant:[...restaurantWendy]
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser,secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};