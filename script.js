var listmakanan =[];
var makanan_sborut = ["peyet kuah","burjo BB","Sara","bu bambang","bu nur","nasi padang maskam","pak joko","mie ayam jakarta","OTI","PWD","nasi uduk meeting","antonibah","cak dul", "cak eco"];


var makananInput = document.getElementById("makanan");
var randomButton = document.getElementById("random");
var refreshButton = document.getElementById("refresh");
var refreshButton2 = document.getElementById("refresh2");

var hasil = document.getElementById("result");
var tambahButton = document.getElementById("tambah");
var hasilakhir = document.getElementById("hasil_akhir");
var sobrutButton = document.getElementById("sobrut");
var oranglainButton = document.getElementById("orang_lain");
var temanButton = document.getElementById("temanku");
var elementField = document.getElementById("random_people");
var pilihanButton = document.getElementById("pilihan_tombol");
var randomSobrutButton = document.getElementById("random_sobrut");
var counter = document.getElementById("counter");



var i =3;


    sobrutButton.onclick = function(){
        randomSobrutButton.style.display = "block";
        pilihanButton.style.display = 'none';

    }

    oranglainButton.onclick = function(){
        pilihanButton.style.display = 'none'
        elementField.style.display ='block';
    }
    temanButton.onclick = function(){
        pilihanButton.style.display = 'none'
        elementField.style.display ='block';
    }
      

function store()
{   
    var listmakananvalue =listmakanan.push(makananInput.value);
    if(makananInput.value =="")
    {
        alert("Masukkin dulu dong");
    }
    else{
        if (listmakananvalue >15)
        {
            alert("kamu udah masukin makanan lebih dari " +listmakanan.length + " tolong jangan banyak banyak :)")
            tambahButton.disabled = "true";
        }
        show();
    }
   
}

function hapus() {
    makananInput.value= "";
}

function show(){
    hasil.innerHTML = "";
    if (makananInput != "")
    {
        hasil.innerHTML += "list kamu: " + "<br> <li> " + listmakanan.join(", ") + "</li> <br>";
        var total = listmakanan.length
        if(total >= 4)
        {
            randomButton.style.display = "block";
            refreshButton.style.display = "block";

        }
    }
   
    // console.log(listmakanan)
   
}

function random() {
    var randommakanan = listmakanan[Math.floor(Math.random()* listmakanan.length)];
    console.log(randommakanan)
    // hasilakhir.innerHTML= randommakanan;
    Swal.fire({
        title: 'Yakin tempat makannya itu aja?',
        showCancelButton: true,
        confirmButtonText: 'Iya yakin',
        cancelButtonText: 'Hmmm',
        background: '#000',
        backdrop: `
        rgba(0,0,123,0.4)
        url("https://sweetalert2.github.io/#iconsimages/nyan-cat.gifimages/nyan-cat.gif")
        left top
        no-repeat
      `
      }).then((result) => {
        if (result.isConfirmed) {
            
          Swal.fire("Selamat hari ini kamu makan "+randommakanan, '', 'success')
            .then(function(isConfirm)
            {
                if(isConfirm){
                    if (i >0)
                    {
                        counter.innerHTML =`Kesempatan kamu tinggal  ${i--}`
                    }
                    else if(i<=0 ){
                        counter.innerHTML = `Kesempatan kamu sudah habis, udah makan di <b> ${randommakanan}</b> aja`;
                        elementField.style.display = "none";
                        refreshButton2.style.display = "block";
                    }
                }
            })

        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })

}

function random_sobrut() {
    var randommakanan = makanan_sborut[Math.floor(Math.random()* makanan_sborut.length)];
    // hasilakhir.innerHTML= randommakanan;
  
    Swal.fire({
        title: 'Yakin tempat makannya itu aja?',
        showCancelButton: true,
        confirmButtonText: 'Iya yakin',
        cancelButtonText: 'Hmmm',
        background: '#000',
        backdrop: `
        rgba(0,0,123,0.4)
        url("https://sweetalert2.github.io/#iconsimages/nyan-cat.gifimages/nyan-cat.gif")
        left top
        no-repeat
      `
      }).then((result) => {
       
        if (result.isConfirmed) {
            
          Swal.fire("Selamat hari ini kamu makan di "+randommakanan, '', 'success')
            .then(function(isConfirm)
            {
                if(isConfirm){
                    if (i >0)
                    {
                        counter.innerHTML =`Kesempatan kamu tinggal  ${i--}`
                    }
                    else if(i<=0 ){
                        counter.innerHTML = `Kesempatan kamu sudah habis, udah makan di <b> ${randommakanan}</b> aja`;
                        randomSobrutButton.style.display = "none";
                        refreshButton2.style.display = "block";
                    }
                }
                
            })

        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      }
      
      )

}
function refresh() {
    window.location.reload()
}


