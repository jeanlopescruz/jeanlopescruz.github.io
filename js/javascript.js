$("#versa4").click(function(){
    var v1 = $('#versa4').html(),
        v2 = $('#vice4').html();
    $('#versa4').html(v2);
    $('#vice4').html(v1);
    $('#versa4').prop("id", "TEMP");
    $('#vice4').prop("id", "versa4");
    $('#TEMP').prop("id", "vice4");
});

$("#vice4").click(function(){
    var v1 = $('#versa4').html(),
        v2 = $('#vice4').html();
    $('#versa4').html(v2);
    $('#vice4').html(v1);
    $('#versa4').prop("id", "TEMP");
    $('#vice4').prop("id", "versa4");
    $('#TEMP').prop("id", "vice4");
});

$("#versa5").click(function(){
    var v1 = $('#versa5').html(),
        v2 = $('#vice5').html();
    $('#versa5').html(v2);
    $('#vice5').html(v1);
    $('#versa5').prop("id", "TEMP");
    $('#vice5').prop("id", "versa5");
    $('#TEMP').prop("id", "vice5");
});

$("#vice5").click(function(){
    var v1 = $('#versa5').html(),
        v2 = $('#vice5').html();
    $('#versa5').html(v2);
    $('#vice5').html(v1);
    $('#versa5').prop("id", "TEMP");
    $('#vice5').prop("id", "versa5");
    $('#TEMP').prop("id", "vice5");
});

function scrollto (target) {
	$(target).scroll();
}
