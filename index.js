// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
    'name':'Monica',
    'gender':'Female',
    'age':17,
    'email':'monica@dingdong.com',
    'favoriteColor':['Yellow','Pink','White','Purple'],
    'isHavePet':'Yes',
    'education':{
        'name':'SD 01',
        'city':'Jakarta',
        'graduate':2016
    },
    favoriteRestaurant:['Bento','Sushi']

};
const secondUser = {};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};