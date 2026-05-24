/* ============================================================
   LUXE E-COMMERCE — script.js
   ============================================================ */

'use strict';

// ============================================================
// PRODUCT DATA
// ============================================================
const allProducts = [
  // FASHION
  { id: 1,  name: 'Premium Leather Jacket', category: 'fashion',     price: 4999,  original: 7999,  rating: 4.8, reviews: 234, badge: 'sale',    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80', desc: 'Genuine leather jacket with a modern slim fit. Durable, stylish, and perfect for all seasons.' },
  { id: 2,  name: 'Classic Denim Shirt',    category: 'fashion',     price: 1299,  original: 1799,  rating: 4.6, reviews: 187, badge: 'sale',    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&q=80', desc: 'Timeless denim shirt crafted from 100% cotton. Perfect for casual and semi-formal occasions.' },
  { id: 3,  name: 'Floral Summer Dress',    category: 'fashion',     price: 1899,  original: null,  rating: 4.7, reviews: 412, badge: 'new',     image: 'https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=500&q=80', desc: 'Light and breezy floral dress for warm days. Available in multiple colour patterns.' },
  { id: 4,  name: 'Slim Fit Chinos',        category: 'fashion',     price: 1599,  original: 2199,  rating: 4.5, reviews: 301, badge: 'sale',    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&q=80', desc: 'Modern slim-fit chinos for the contemporary wardrobe. Wrinkle-resistant fabric.' },

  // ELECTRONICS
  { id: 5,  name: 'Wireless Noise-Cancelling Headphones', category: 'electronics', price: 4499, original: 8999, rating: 4.9, reviews: 872, badge: 'deal', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80', desc: '40-hour battery life, premium ANC, studio-quality sound. The ultimate listening experience.' },
  { id: 6,  name: 'Smart Watch Pro X',      category: 'electronics', price: 6999,  original: 9999,  rating: 4.8, reviews: 543, badge: 'sale',    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80', desc: 'Health monitoring, GPS, always-on display and 7-day battery life in a sleek titanium build.' },
  { id: 7,  name: 'Portable Bluetooth Speaker', category: 'electronics', price: 2299, original: 3499, rating: 4.6, reviews: 298, badge: 'sale', image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80', desc: '360° surround sound, IPX7 waterproof, 24-hour playtime. Your adventure companion.' },
  { id: 8,  name: 'True Wireless Earbuds',  category: 'electronics', price: 1899,  original: 2999,  rating: 4.7, reviews: 621, badge: 'new',     image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80', desc: 'Crystal-clear audio, 5.1 Bluetooth, ANC, 30-hour total battery. Perfect everyday earbuds.' },

  // BEAUTY
  { id: 9,  name: 'Luxury Skincare Set',    category: 'beauty',      price: 2499,  original: 3999,  rating: 4.9, reviews: 189, badge: 'sale',    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&q=80', desc: 'A complete 5-step skincare routine with serum, moisturiser, eye cream, toner and cleanser.' },
  { id: 10, name: 'Perfume Elixir Gold',    category: 'beauty',      price: 3299,  original: null,  rating: 4.8, reviews: 267, badge: 'new',     image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&q=80', desc: 'An opulent fragrance with notes of oud, saffron, and amber. Long-lasting and captivating.' },
  { id: 11, name: 'Matte Lipstick Collection', category: 'beauty',   price: 899,   original: 1299,  rating: 4.6, reviews: 344, badge: 'sale',    image: 'https://images.unsplash.com/photo-1586495777744-4e6232bf2176?w=500&q=80', desc: 'Rich pigmentation, long-wearing matte formula. Set of 6 curated shades for every occasion.' },

  // HOME
  { id: 12, name: 'Minimalist Table Lamp',  category: 'home',        price: 1799,  original: 2599,  rating: 4.7, reviews: 156, badge: 'sale',    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80', desc: 'Scandi-inspired table lamp with warm LED lighting. Adds ambience to any room instantly.' },
  { id: 13, name: 'Handwoven Throw Blanket', category: 'home',       price: 1499,  original: null,  rating: 4.8, reviews: 223, badge: 'new',     image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80', desc: 'Soft merino-wool blend throw blanket. Perfect for cosy evenings on the couch.' },
  { id: 14, name: 'Ceramic Vase Set',       category: 'home',        price: 1199,  original: 1699,  rating: 4.5, reviews: 98,  badge: 'sale',    image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=500&q=80', desc: 'Set of 3 hand-painted ceramic vases. A timeless centrepiece for any living space.' },

  // SPORTS
  { id: 15, name: 'Pro Running Shoes',      category: 'sports',      price: 3999,  original: 5999,  rating: 4.9, reviews: 512, badge: 'sale',    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80', desc: 'Engineered mesh upper, responsive foam midsole, and carbon-fibre plate for peak performance.' },
  { id: 16, name: 'Yoga Mat Premium',       category: 'sports',      price: 1299,  original: 1799,  rating: 4.7, reviews: 287, badge: 'new',     image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=500&q=80', desc: '6mm anti-slip eco-friendly yoga mat. Extra-wide, includes carrying strap and alignment lines.' },
];

// ============================================================
// STATE
// ============================================================
let cart       = JSON.parse(localStorage.getItem('luxe_cart') || '[]');
let wishlist   = JSON.parse(localStorage.getItem('luxe_wishlist') || '[]');
let currentFilter = 'all';
let displayedCount = 8;
let modalQty   = 1;
let currentModalProduct = null;

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartUI();
  initSlider();
  initCountdown();
  initFilterBtns();
  initSortSelect();
  initCartDrawer();
  initModal();
  initNavScroll();
  initBackToTop();
  initHamburger();
  initNewsletter();
  initLoadMore();
  initSearch();
});

// ============================================================
// PRODUCT RENDERING
// ============================================================
function getFilteredSorted() {
  let list = currentFilter === 'all'
    ? [...allProducts]
    : allProducts.filter(p => p.category === currentFilter);

  const sort = document.getElementById('sortSelect').value;
  if (sort === 'price-asc')   list.sort((a,b) => a.price - b.price);
  if (sort === 'price-desc')  list.sort((a,b) => b.price - a.price);
  if (sort === 'rating')      list.sort((a,b) => b.rating - a.rating);
  if (sort === 'newest')      list.sort((a,b) => b.id - a.id);
  return list;
}

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const list = getFilteredSorted();
  const visible = list.slice(0, displayedCount);

  grid.innerHTML = '';
  if (visible.length === 0) {
    grid.innerHTML = '<p style="color:var(--mid);grid-column:1/-1;text-align:center;padding:40px 0;">No products found.</p>';
    return;
  }

  visible.forEach((p, i) => {
    grid.insertAdjacentHTML('beforeend', productCardHTML(p, i));
  });

  const loadBtn = document.getElementById('loadMoreBtn');
  loadBtn.style.display = displayedCount >= list.length ? 'none' : 'inline-flex';
}

function productCardHTML(p, index) {
  const discount = p.original ? Math.round((1 - p.price/p.original)*100) : 0;
  const inWishlist = wishlist.includes(p.id);
  const badgeHTML = p.badge
    ? `<span class="product-badge ${p.badge === 'new' ? 'new' : ''}">${p.badge === 'deal' ? '🔥 DEAL' : p.badge === 'new' ? 'NEW' : `${discount}% OFF`}</span>`
    : '';

  return `
    <div class="product-card" style="animation-delay:${index * .05}s">
      <div class="product-img-wrap">
        <img src="${p.image}" alt="${p.name}" loading="lazy"/>
        ${badgeHTML}
        <div class="product-actions">
          <button class="action-btn ${inWishlist ? 'wishlisted' : ''}" onclick="toggleWishlist(${p.id}, this)" title="Wishlist">
            <i class="${inWishlist ? 'fas' : 'far'} fa-heart"></i>
          </button>
          <button class="action-btn" onclick="openModal(${p.id})" title="Quick View">
            <i class="fas fa-eye"></i>
          </button>
          <button class="action-btn" onclick="shareProduct(${p.id})" title="Share">
            <i class="fas fa-share-alt"></i>
          </button>
        </div>
      </div>
      <div class="product-info">
        <span class="product-category">${p.category}</span>
        <h3 class="product-name">${p.name}</h3>
        <div class="product-rating">
          <span class="stars">${'★'.repeat(Math.floor(p.rating))}${p.rating % 1 >= .5 ? '½' : ''}</span>
          <span class="rating-count">(${p.reviews.toLocaleString()})</span>
        </div>
        <div class="product-price">
          <span class="price-current">₹${p.price.toLocaleString()}</span>
          ${p.original ? `<span class="price-original">₹${p.original.toLocaleString()}</span>` : ''}
          ${discount ? `<span class="price-discount">${discount}% off</span>` : ''}
        </div>
      </div>
      <button class="btn-add-cart" onclick="addToCart(${p.id})">
        <i class="fas fa-shopping-bag"></i> Add to Bag
      </button>
    </div>`;
}

// ============================================================
// CART
// ============================================================
function addToCart(id, qty = 1) {
  const product = allProducts.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id, qty });
  }
  saveCart();
  updateCartUI();
  renderCartItems();
  openCartDrawer();
  showToast(`✅ "${product.name}" added to bag!`);
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function saveCart() {
  localStorage.setItem('luxe_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const total = cart.reduce((s, c) => s + c.qty, 0);
  document.getElementById('cartCount').textContent = total;
  document.getElementById('cartItemCount').textContent = `${total} item${total !== 1 ? 's' : ''}`;
  document.getElementById('wishlistCount').textContent = wishlist.length;
}

function renderCartItems() {
  const container = document.getElementById('cartItems');
  const footer    = document.getElementById('cartFooter');

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart">
        <i class="fas fa-shopping-bag"></i>
        <p>Your bag is empty</p>
        <span>Add items to get started</span>
      </div>`;
    footer.style.display = 'none';
    return;
  }

  footer.style.display = 'flex';
  let html = '';
  let subtotal = 0;

  cart.forEach(item => {
    const p = allProducts.find(x => x.id === item.id);
    if (!p) return;
    const lineTotal = p.price * item.qty;
    subtotal += lineTotal;
    html += `
      <div class="cart-item">
        <img src="${p.image}" alt="${p.name}"/>
        <div class="cart-item-info">
          <h4>${p.name}</h4>
          <p>${p.category}</p>
          <div class="cart-item-actions">
            <button class="qty-btn" onclick="changeQty(${p.id}, -1)">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty(${p.id}, 1)">+</button>
            <button class="remove-btn" onclick="removeFromCart(${p.id})"><i class="fas fa-trash"></i></button>
          </div>
        </div>
        <span class="cart-item-price">₹${lineTotal.toLocaleString()}</span>
      </div>`;
  });

  container.innerHTML = html;
  document.getElementById('cartSubtotal').textContent = `₹${subtotal.toLocaleString()}`;
  document.getElementById('cartTotal').textContent = `₹${subtotal.toLocaleString()}`;
}

function openCartDrawer() {
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
  renderCartItems();
}

function closeCartDrawer() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

function initCartDrawer() {
  document.getElementById('cartToggle').addEventListener('click', () => {
    document.getElementById('cartDrawer').classList.contains('open')
      ? closeCartDrawer() : openCartDrawer();
  });
  document.getElementById('closeCart').addEventListener('click', closeCartDrawer);
  document.getElementById('cartOverlay').addEventListener('click', closeCartDrawer);
  document.getElementById('continueShopping').addEventListener('click', closeCartDrawer);
}

// ============================================================
// WISHLIST
// ============================================================
function toggleWishlist(id, btn) {
  const idx = wishlist.indexOf(id);
  const product = allProducts.find(p => p.id === id);
  if (idx === -1) {
    wishlist.push(id);
    btn.classList.add('wishlisted');
    btn.innerHTML = '<i class="fas fa-heart"></i>';
    showToast(`❤️ Added to wishlist!`);
  } else {
    wishlist.splice(idx, 1);
    btn.classList.remove('wishlisted');
    btn.innerHTML = '<i class="far fa-heart"></i>';
    showToast(`Removed from wishlist`);
  }
  localStorage.setItem('luxe_wishlist', JSON.stringify(wishlist));
  updateCartUI();
}

// ============================================================
// MODAL
// ============================================================
function openModal(id) {
  const p = allProducts.find(x => x.id === id);
  if (!p) return;
  currentModalProduct = p;
  modalQty = 1;
  const discount = p.original ? Math.round((1 - p.price/p.original)*100) : 0;

  document.getElementById('modalContent').innerHTML = `
    <div class="modal-img">
      <img src="${p.image}" alt="${p.name}"/>
    </div>
    <div class="modal-details">
      <span class="modal-category">${p.category}</span>
      <h2 class="modal-name">${p.name}</h2>
      <div class="product-rating">
        <span class="stars">${'★'.repeat(Math.floor(p.rating))}</span>
        <span class="rating-count">(${p.reviews} reviews)</span>
      </div>
      <div class="modal-price product-price">
        <span class="price-current">₹${p.price.toLocaleString()}</span>
        ${p.original ? `<span class="price-original">₹${p.original.toLocaleString()}</span>` : ''}
        ${discount ? `<span class="price-discount">${discount}% off</span>` : ''}
      </div>
      <p class="modal-desc">${p.desc}</p>
      <div class="modal-qty">
        <label>Quantity:</label>
        <div class="qty-control">
          <button onclick="changeModalQty(-1)">−</button>
          <span id="modalQtyDisplay">1</span>
          <button onclick="changeModalQty(1)">+</button>
        </div>
      </div>
      <div class="modal-actions">
        <button class="btn-primary" onclick="addToCartFromModal()">
          <i class="fas fa-shopping-bag"></i> Add to Bag — ₹${p.price.toLocaleString()}
        </button>
      </div>
    </div>`;

  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function changeModalQty(delta) {
  modalQty = Math.max(1, modalQty + delta);
  document.getElementById('modalQtyDisplay').textContent = modalQty;
}

function addToCartFromModal() {
  if (currentModalProduct) {
    addToCart(currentModalProduct.id, modalQty);
    closeModal();
  }
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

function initModal() {
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modalOverlay')) closeModal();
  });
}

// ============================================================
// FILTER & SORT
// ============================================================
function initFilterBtns() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      displayedCount = 8;
      renderProducts();
    });
  });
}

function filterByCategory(cat) {
  currentFilter = cat;
  displayedCount = 8;
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === cat);
  });
  renderProducts();
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

function initSortSelect() {
  document.getElementById('sortSelect').addEventListener('change', renderProducts);
}

function initLoadMore() {
  document.getElementById('loadMoreBtn').addEventListener('click', () => {
    displayedCount += 4;
    renderProducts();
  });
}

// ============================================================
// SEARCH
// ============================================================
function initSearch() {
  const input = document.getElementById('searchInput');
  const btn   = document.querySelector('.search-btn');

  const doSearch = () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { currentFilter = 'all'; renderProducts(); return; }
    const results = allProducts.filter(p =>
      p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
    );
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';
    if (results.length === 0) {
      grid.innerHTML = `<p style="color:var(--mid);grid-column:1/-1;text-align:center;padding:40px 0;">No results for "<strong>${q}</strong>". Try another keyword.</p>`;
      return;
    }
    results.forEach((p, i) => grid.insertAdjacentHTML('beforeend', productCardHTML(p, i)));
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  };

  btn.addEventListener('click', doSearch);
  input.addEventListener('keydown', e => e.key === 'Enter' && doSearch());
}

// ============================================================
// HERO SLIDER
// ============================================================
function initSlider() {
  const slides = document.querySelectorAll('.slide');
  const dotsContainer = document.getElementById('sliderDots');
  let current = 0, timer;

  slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  function goTo(n) {
    slides[current].classList.remove('active');
    dotsContainer.children[current].classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    dotsContainer.children[current].classList.add('active');
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startTimer() { timer = setInterval(next, 5000); }
  function resetTimer()  { clearInterval(timer); startTimer(); }

  document.getElementById('sliderNext').addEventListener('click', () => { next(); resetTimer(); });
  document.getElementById('sliderPrev').addEventListener('click', () => { prev(); resetTimer(); });

  startTimer();
}

// ============================================================
// COUNTDOWN TIMER
// ============================================================
function initCountdown() {
  const target = new Date();
  target.setHours(target.getHours() + 8);

  function update() {
    const now  = new Date();
    const diff = Math.max(0, target - now);
    const h    = Math.floor(diff / 3600000);
    const m    = Math.floor((diff % 3600000) / 60000);
    const s    = Math.floor((diff % 60000) / 1000);
    document.getElementById('hours').textContent   = String(h).padStart(2, '0');
    document.getElementById('minutes').textContent = String(m).padStart(2, '0');
    document.getElementById('seconds').textContent = String(s).padStart(2, '0');
  }
  update();
  setInterval(update, 1000);
}

// ============================================================
// DEAL OF THE DAY — ADD TO CART
// ============================================================
function addDealToCart() {
  addToCart(5); // headphones
}

// ============================================================
// NAVBAR SCROLL EFFECT
// ============================================================
function initNavScroll() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });
}

// ============================================================
// BACK TO TOP
// ============================================================
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ============================================================
// HAMBURGER
// ============================================================
function initHamburger() {
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
  });
}

// ============================================================
// NEWSLETTER
// ============================================================
function initNewsletter() {
  document.getElementById('newsletterForm').addEventListener('submit', e => {
    e.preventDefault();
    showToast('🎉 You\'re subscribed! Welcome to LUXE.');
    e.target.reset();
  });
}

// ============================================================
// SHARE
// ============================================================
function shareProduct(id) {
  const p = allProducts.find(x => x.id === id);
  if (!p) return;
  if (navigator.share) {
    navigator.share({ title: p.name, text: `Check out ${p.name} on LUXE!`, url: window.location.href });
  } else {
    navigator.clipboard.writeText(window.location.href)
      .then(() => showToast('🔗 Link copied to clipboard!'));
  }
}

// ============================================================
// TOAST
// ============================================================
let toastTimer;
function showToast(msg, type = '') {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.className = 'toast show' + (type ? ' ' + type : '');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
}
