var listmakanan =[];
var makananInput = document.getElementById("makanan");
var randomButton = document.getElementById("random");
var refreshButton = document.getElementById("refresh");

var hasil = document.getElementById("result");
var tambahButton = document.getElementById("tambah");
var hasilakhir = document.getElementById("hasil_akhir");
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
        url("https://media1.giphy.com/media/3o7aCZDlmQZLe4Q4V2/giphy.gif?cid=ecf05e47qeyg4zr5y038ygjby3l96rkrrfxj6ylyis13x513&rid=giphy.gif&ct=g")
        right top
        no-repeat
    `
      }).then((result) => {
        if (result.isConfirmed) {
            
          Swal.fire("Selamat hari ini kamu makan "+randommakanan, '', 'success')
            .then(function(isConfirm)
            {
                if(isConfirm){
                    location.reload();
                }
            })

        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })

}
function refresh() {
    window.location.reload()
}
