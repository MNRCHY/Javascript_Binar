
// function hitungDataPenjualan (dataPenjualan){
    
    // }
    const dataPenjualan = [
        {
            namaProduct : 'Nike Ardilles',
            Harga : 650000,
            tipeSepatu : 'Sepatu Gelang',
            totalJual : 15
        },
        {
            namaProduct : 'Adidas YeeHa',
            Harga : 800000,
            tipeSepatu : 'Sepatu Kuda',
            totalJual : 5
        },
        {
            namaProduct : 'Nongki Komaladi',
            Harga : 300000,
            tipeSepatu : 'Sendal Refleksi',
            totalJual : 20
        },
        {
            namaProduct : 'Batuk',
            Harga : 250000,
            tipeSepatu : 'Bakiak Wudhu',
            totalJual : 15
        },
    
    ]
    
  const barangTerjual = dataPenjualan.reduce((accumulator, object) => {
    return accumulator + object.totalJual;
  }, 0);

  console.log("Total barang terjual : " + barangTerjual);

