$(document).ready(function() {
    maxInputDob()
    autoFormatDob()
});

function autoFormatDob(){
    $("#add2").keyup(function(e){
        if (e.keyCode != 8){
            if ($(this).val().length == 2){
                $(this).val($(this).val() + "/");
            } else if ($(this).val().length == 5){
                $(this).val($(this).val() + "/");
            }
        } else {
            var temp = $(this).val();

            if ($(this).val().length == 5){
                $(this).val(temp.substring(0,4));
            } else if ($(this).val().length == 2){
                $(this).val(temp.substring(0,1));
            }
        }
    });
}

function maxInputDob(){
    var maxLen = 10;

    $('#add2').keypress(function(event){
        var Length = $("#add2").val().length;
        var AmountLeft = maxLen - Length;
        if(Length >= maxLen){
            if (event.which != 8) {
                return false;
            }
        }
    });
}

function validate(){
    let email = $('#email').val();
    let fullname = $('#fullname').val();
    let add1 = $('#add1').val();
    let add2 = $('#add2').val();
    let city = $('#city').val();
    let sstate = $('#sstate').val();
    let zipp = $('#zipp').val();
    let phonee = $('#phonee').val();

    if (email === ''){
        return false;
    }
    if (fullname === ''){
        return false;
    }
    if (add1 === ''){
        return false;
    }
    if (add2 === ''){
        alert('test')
        return false;
    }
    if (city === ''){
        return false;
    }
    if (sstate === ''){
        return false;
    }
    if (zipp === ''){
        return false;
    }
    if (phonee === ''){
        return false;
    }
    return true;
}