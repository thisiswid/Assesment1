let buku = [
    {"nama": "sherlock", "jumlah": 2},
    {"nama": "lupin", "jumlah": 2},
    {"nama": "aladin", "jumlah": 2},
];

function checkStock() {
    let inputJumlah = parseInt(document.getElementById('jumlah').value);
    let selectedBuku = document.getElementById('buku').value;

    if (isNaN(inputJumlah) || inputJumlah <= 0) {
        alert("Masukkan jumlah buku yang valid!");
        return;
    }

    let bukuDitemukan = false;
    for (let i = 0; i < buku.length; i++) {
        if (buku[i].nama === selectedBuku) {
            bukuDitemukan = true;
            if (inputJumlah > buku[i].jumlah) {
                alert("Jumlah buku tidak tersedia.");
            } else {
                alert("Silahkan ambil buku Anda.");
            }
            break;
        }
    }
}
