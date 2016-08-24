$(document).ready(function() {
    console.log('running jQuery');
    var id = 0;

    $('form').submit(function() {
        console.log('submit form');

        console.log($(this));

        if($('#firstname').val() !== '' &&
           $('#lastname').val()  !== '' &&
           $('#email').val()     !== '' &&
           $('#contact').val()   !== '') {
            console.log('yes');
            $('tbody').append('<tr id=' + id + '>' + '</tr>');

            $(this).children().children('input').each(function() {
                $('tbody').children('#' + id).append('<td>' + $(this).val() + '</td>');
            });

            $(this).find("input[type=text], textarea").val("");
            $(this).find("input[type=email], textarea").val("");

            id++;

            return false;
        } else {
            return false;
        }

        // $('tbody').append('<tr id=' + id + '>' + '</tr>');
        //
        // $(this).children().children('input').each(function() {
        //     $('tbody').children('#' + id).append('<td>' + $(this).val() + '</td>');
        // });
        //
        // $(this).find("input[type=text], textarea").val("");
        // $(this).find("input[type=email], textarea").val("");
        //
        // id++;
        //
        // return false;
    })

});
