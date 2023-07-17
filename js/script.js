
function calc() {
    // set the elements
    var form_container = document.getElementById('form_container');
    var result_container = document.getElementById('result_container');
    var jenis_kelamin = document.getElementsByName('jenis_kelamin');
    var berat_badan = document.getElementById('berat_badan');
    var usia = document.getElementById('usia');
    var tinggi_badan = document.getElementById('tinggi_badan');
    var skor_bmi = document.getElementById('skor_bmi');
    var result = document.getElementById('result');
    var result_description = document.getElementById('result_description');
    var kekurangan = document.getElementById('kekurangan');
    var ideal = document.getElementById('ideal');
    var kelebihan = document.getElementById('kelebihan');
    var obesitas = document.getElementById('obesitas');
    var jenis_kelamin_value;
    for(var i = 0; i < jenis_kelamin.length; i++){
        if(jenis_kelamin[i].checked){
            jenis_kelamin_value = jenis_kelamin[i].value;
        }
    }
    var error_alert = document.getElementById('error_alert');


    // validation
    if(jenis_kelamin_value == '' || jenis_kelamin_value == null){
        error_alert.classList.remove("d-none");
        error_alert.innerHTML = "Jenis Kelamin Wajib Di isi"
    } else if(berat_badan.value == '' || berat_badan.value == null){
        error_alert.classList.remove("d-none");
        error_alert.innerHTML = "Berat Badan Wajib Di isi"
    } else if(usia.value == '' || usia.value == null){
        error_alert.classList.remove("d-none");
        error_alert.innerHTML = "Usia Wajib Di isi"
    } else if(tinggi_badan.value == '' || tinggi_badan.value == null) {
        error_alert.classList.remove("d-none");
        error_alert.innerHTML = "Tinggi Badan Wajib Di isi"
    } else {
        error_alert.classList.add("d-none");
        // hide form
        form_container.classList.add("d-none");
        result_container.classList.remove("d-none");
        // calc BMI
        var bmi = (berat_badan.value / (tinggi_badan.value*tinggi_badan.value)) * 10000;
        bmi = bmi.toFixed(1);
        // classify bmi skor to bmi table
        var result_val;
        var result_description_val;
        if(bmi < 18.5){
            result_val = "Berat Badan Kurang";
            result_description_val = "Anda kekurangan berat badan";
            hideDescription();
            kekurangan.classList.remove('d-none')
        } else if(bmi >= 18.5 && bmi <= 24.9 ) {
            result_val = "Normal";
            result_description_val = "Anda memiliki berat badan ideal.";
            hideDescription();
            ideal.classList.remove('d-none')
        } else if(bmi >= 25 && bmi <= 29.9 ) {
            result_val = "Berat Badan Lebih";
            result_description_val = "Anda memiliki berat badan berlebih";
            hideDescription();
            kelebihan.classList.remove('d-none')
        } else if(bmi >= 30 ) {
            result_val = "Obesitas";
            result_description_val = "Anda berada dalam kategori obesitas";
            hideDescription();
            obesitas.classList.remove('d-none')
        }
        result.innerHTML  = result_val;
        result_description.innerHTML  = result_description_val;
        skor_bmi.innerHTML = bmi;
        console.log(result);
    }
    
}

function hideDescription()
{
    var kekurangan = document.getElementById('kekurangan');
    var ideal = document.getElementById('ideal');
    var kelebihan = document.getElementById('kelebihan');
    var obesitas = document.getElementById('obesitas');

    kekurangan.classList.add('d-none');
    ideal.classList.add('d-none');
    kelebihan.classList.add('d-none');
    obesitas.classList.add('d-none');
}

function back() {
    var form_bmi = document.getElementById('form_bmi');
    form_bmi.reset();

    form_container.classList.remove("d-none");
    result_container.classList.add("d-none");
}