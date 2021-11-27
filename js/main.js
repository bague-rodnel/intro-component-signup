const form = document.querySelector(".intro form");

form.onsubmit = function (e) {
  e.preventDefault();
  e.stopPropagation();

  this.classList.add("was-validated");

  if (form.checkValidity()) {
    setTimeout(() => {
      this.submit();
    }, 1000);
  }
};
