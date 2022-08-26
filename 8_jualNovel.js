const dataPenjualanNovel =[
    {
        idProduk: 'book2021',
        Judul: 'Pulang - Pergi',
        penulis: 'Tere Liye',
        hargaBeli: 100000,
        hargaJual: 150000,
        terjual: 35,
        sisaStok: 15
    },
    {
        idProduk: 'book2022',
        Judul: 'Selamat Tinggal',
        penulis: 'Tere Liye',
        hargaBeli: 100000,
        hargaJual: 150000,
        terjual: 40,
        sisaStok: 10
    },
    {
        idProduk: 'book2023',
        Judul: 'Laskar Pelangi',
        penulis: 'Andrea Hirata',
        hargaBeli: 100000,
        hargaJual: 150000,
        terjual: 45,
        sisaStok: 5
    },
]

const modal = dataPenjualanNovel.reduce((accumulator, object) => {
    return accumulator + object.hargaBeli;
  }, 0);

const untung = dataPenjualanNovel.reduce((accumulator, object) => {
    return accumulator + object.hargaJual;
  }, 0);

const totalJual = dataPenjualanNovel.reduce((accumulator, object) => {
    return accumulator + object.terjual;
  }, 0);

const totalSisa = dataPenjualanNovel.reduce((accumulator, object) => {
    return accumulator + object.sisaStok;
  }, 0);



const totalStok = totalJual + totalSisa
const totalModal = modal * totalStok
const totalUntung = untung * totalJual
const totalUang = totalModal + totalUntung
const persenUntung = totalUntung/totalUang*100


console.log("Total keuntungan : Rp " + totalUntung);
console.log("Total modal : Rp " + totalModal);
console.log('Persentase Keuntungan : ' + Math.round(persenUntung)+'%');