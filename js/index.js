var slideIndex = 1;
showsDivs(slideIndex);

var namaKamu = prompt("Masukan nama kamu");
            document.getElementById("namaKamu").innerText = namaKamu;

function plusDivs(n) {
    showsDivs((slideIndex += n));
}

function showsDivs(n) {
    var i;
    var imageList = document.getElementsByClassName('img-slideshow');
    if (n > imageList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imageList.length;

    for(i=0; 1 < imageList.length; i++) {
        imageList[i].style.display = 'none';
    }

    imageList[slideIndex - 1].style.display = 'block';
}

setInterval(() =>{
    plusDivs(1)
}, 1000);


function validateForm() {
    var name = document.forms['message-form']['full-name'].value;
    var date = document.forms['message-form']['birth-date'].value;
    var gender = document.forms['message-form']['gender'].value;
    var messages = document.forms['message-form']['messages'].value;

    if(name =='' || date == '' || gender=='' || messages=='') {
        alert('Input tidak boleh kosong, harap isi kembali');
        return false;
    }

    document.getElementById('sender-full-name').innerText = name;
    document.getElementById('sender-birth-date').innerText = date;
    document.getElementById('sender-gender').innerText = gender;
    document.getElementById('sender-messages').innerText = messages;
    return false;
}