let cart = 0;

function addToCart() {
    cart++;
    document.getElementById("cart").innerText = "Giỏ hàng: " + cart;
}
function dongThongBao() {
  document.getElementById("popupThongBao").style.display = "none";
}

