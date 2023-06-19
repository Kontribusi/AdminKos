// Ambil elemen-elemen yang diperlukan
const buyButtons = document.querySelectorAll('.buy-btn');
const cartItems = document.querySelector('.cart-items');
const totalPrice = document.getElementById('total-price');
const totalHari = document.getElementById('total-hari');
const checkoutBtn = document.getElementById('checkout-btn');

let cartTotal = 0;
let hariCount = 0;

// Tambahkan event listener ke setiap tombol 'Booking'
buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    const product = button.parentNode;
    const productName = product.querySelector('h3').textContent;
    const productPrice = parseInt(product.querySelector('.buy-btn').dataset.price);
    addItemToCart(productName, productPrice);
    updateTotal();
  });
});

// Tambahkan item ke keranjang
function addItemToCart(name, price) {
  const li = document.createElement('li');
  li.textContent = `${name} - Rp${price}`;
  cartItems.appendChild(li);
  cartTotal += price;
  hariCount++;
}

// Update total biaya dan jumlah hari
function updateTotal() {
  totalPrice.textContent = `Rp${cartTotal}`;
  totalHari.textContent = hariCount;
}

// Checkout
function checkout() {
  alert(`Total biaya: Rp${cartTotal}\nJumlah hari: ${hariCount}`);
  // Lakukan proses checkout yang sesuai di sini
  // Misalnya, mengirim data ke server atau melanjutkan ke halaman pembayaran
  // Setelah checkout, bisa di-reset keranjangnya dengan memanggil fungsi resetCart()
}

// Reset keranjang
function resetCart() {
  cartItems.innerHTML = '';
  cartTotal = 0;
  hariCount = 0;
  updateTotal();
}

// Menggunakan event listener untuk tombol 'Checkout'
checkoutBtn.addEventListener('click', checkout);
