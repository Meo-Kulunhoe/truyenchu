
jQuery(document).ready(function ($) {
  $(document).ready(function () {
    $('.btn-c-open').click(function (event) {
      event.preventDefault();
      var $feedback = $(this).closest('li').find('.feedback');
      $feedback.addClass('active');
    });

    $('.btn-c-close').click(function (event) {
      event.preventDefault();
      var $feedback = $(this).closest('.feedback');
      $feedback.removeClass('active');
    });
  });

  // modal 
  // Get the modal
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("myBtn");
  var span = document.getElementsByClassName("close")[0];

  btn.onclick = function () {
    modal.style.display = "block";
  }

  span.onclick = function () {
    modal.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
});

