alert("GAME TEBAK ANGKA \n Pilih Angka 1-10 \n Kamu punya 3 kesempatan");

const angkaBenar = Math.floor(Math.random () * 10) + 1;

for (let nyawa = 3; nyawa >= 1; nyawa--) {
    const tebakanUser = prompt("Masukkan tebakan angka");

    if (tebakanUser == angkaBenar) {
        alert(`Tebakan anda benar \n Angka yang benar adalah ${angkaBenar}`);
        break;
    }else if (tebakanUser > angkaBenar) {
         // validasi check input lebih besar
       alert(`tebakan anda terlalu tinggi \n anda masih punya ${nyawa - 1} kesempatan`);
    }else if (tebakanUser < angkaBenar) {
        // validasi check input lebih kecil
       alert(`tebakan anda terlalu rendah \n anda masih punya ${nyawa - 1} kesempatan`);

    }



if (nyawa == 1) {
    alert(`anda gagal \n angka yang benar adalah ${angkaBenar}`);
}

}