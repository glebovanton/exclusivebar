$(document).ready(function () {
    $("#order").submit(function (e) {
        e.preventDefault();
        let name = $("#order-name").val(),
        tel = $("#order-tel").val(),
        format = $("#order-format").val(),
        place = $("#order-place").val(),
        date = $("#order-date").val(),
        people = $("#order-people").val(),
        services = $("#order-services").val(),
        message = $("#order-message").val(),
        dataString = 'name=' + name + '&tel=' + tel + '&format=' + format + '&place=' + place + '&date=' + date + '&people=' + people + '&services=' + services + '&message=' + message;

/*        function isValidEmail(emailAddress) {
            var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
            return pattern.test(emailAddress);
        };
        if (isValidEmail(email) && (tel.length > 1) && (name.length > 1)) {
            $.ajax({
                type: "POST", url: "sendmail.php", data: dataString, success: function () {
                    $('.success').fadeIn(1000);
                    $('.error').fadeOut(500);
                    document.getElementById('contact').reset()
                }
            });
        }*/
        if ((tel.length > 1) && (name.length > 1)) {
            $.ajax({
                type: "POST", url: "sendOrder.php", data: dataString, success: function () {
                    $('.success').fadeIn(1000);
                    $('.error').fadeOut(500);
                    document.getElementById('order').reset();
                }
            });
        }
        else {
            $('.error').fadeIn(1000);
            $('.success').fadeOut(500);
        }
        return false;
    });
});