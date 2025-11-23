document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-order]").forEach((b) => {
    b.addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("modal").classList.add("open");
    });
  });
  var close = document.getElementById("modal-close");
  var modal = document.getElementById("modal");
  if (close)
    close.addEventListener("click", function () {
      modal.classList.remove("open");
    });
  if (modal)
    modal.addEventListener("click", function (e) {
      if (e.target === modal) modal.classList.remove("open");
    });
  var form = document.getElementById("order-form");
  if (form)
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Спасибо! Ваш заказ принят.");
      form.reset();
      modal.classList.remove("open");
    });
});
