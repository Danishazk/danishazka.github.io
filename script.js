let nilai = prompt("masukkan nilai : ",0);
let hasil = "";

switch(true){
    case nilai >= 91 && nilai <= 100:
        hasil = "A"
        break;
        
            case nilai >= 81 && nilai <=90:
                hasil = "B"
                break;

                case nilai >= 71 && nilai <=80:
                hasil = "C"
                break;

                case nilai >= 61 && nilai <= 70:
                hasil = "D"
                break;

                case nilai < 60:
                hasil = "Maaf anda mendapatkan nilai F"
                break;
                default:
                    document.write("Nilai yg anda masukan tidak terdeteksi");
                   
}
document.write(hasil);