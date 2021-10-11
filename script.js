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
