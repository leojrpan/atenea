// contador de estadisticas

$('.numero-estadistica').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});


function passwordVisibility() {
    var x = document.getElementById("floatingPassword");
    if (x.type === "password") {
      x.type = "text";
      document.getElementById("ojo-abierto").style.display = "none"
      document.getElementById("ojo-cerrado").style.display = "inline"
    } else {
      x.type = "password";
      document.getElementById("ojo-abierto").style.display = "inline"
      document.getElementById("ojo-cerrado").style.display = "none"
    }
  }