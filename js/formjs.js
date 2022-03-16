(function ($) {
    "use strict";
    $("#callMeForm").on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            lformError();
            lsubmitMSG(false, "Please fill all fields!");
        } else {
            // everything looks good!
            event.preventDefault();
            lsubmitForm();
        }
    });
    function lsubmitForm() {
        // initiate variables with form content
        var name = $("#name").val();
        var phone = $("#phone").val();
        var email = $("#email").val();
        var address = $("#address").val();
        var message = $("#message").val();
        $.ajax({
            type: "POST",
            url: "../php/callmeform-process.php",
            data: "name=" + name + "&phone=" + phone + "&email=" + email + "&address=" + address + "&message=" + message,
            success: function (text) {
                if (text == "success") {
                    lformSuccess();
                } else {
                    lformError();
                    lsubmitMSG(false, text);
                }
            }
        });
    }

    function lformSuccess() {
        $("#callMeForm")[0].reset();
        lsubmitMSG(true, "Мы вам скоро перезвоним!");
        $("input").removeClass('notEmpty'); // resets the field label after submission
    }

    function lformError() {
        $("#callMeForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass();
        });
    }

    function lsubmitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h3 text-center tada animated";
        } else {
            var msgClasses = "h3 text-center";
        }
        $("#lmsgSubmit").removeClass().addClass(msgClasses).text(msg);
    }

})(jQuery);