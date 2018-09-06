

$('#load-cars').on('click', function () {

    $.getJSON('https://s3.amazonaws.com/makeitreal/cars.json').done(function (cars) {

        cars.forEach(function (car) {
            $('.cars').append('<div class="row car"> </div>');
            $('.cars').append('<div class="col-sm-5 col-md-4"> <img src="' + car.imageUrl + '"></div>');
            $('.cars').append('<div class="col-sm-7 col-md-8"> </div>');
            $('.cars').append('<h3>' + car.name + '</h3>');
            $('.cars').append('<div class="row specs" </div>');



        });

        var num2 = "1";
        var num = "4";

        for (var i = 1; i <= num; i++) {
            $('.specs').append('<div class="col-xs-3 text-center"> <div/>');
        }

        for (var i = 1; i <= num2; i++) {
            $('.col-xs-3').append('<div class="spec-value"> <div/>');
        }

        for (var i = 1; i <= num2; i++) {
            $('.col-xs-3').append('<div class="spec-label"> <div/>');
        }





        $('button').hide();



    });

});
