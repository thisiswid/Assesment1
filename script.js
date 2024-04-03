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
}
