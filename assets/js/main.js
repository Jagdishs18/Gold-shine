

// assets/js/main.js

// ========== SPLASH SCREEN ==========
window.addEventListener("load", function() {
    setTimeout(function() {
        const splash = document.getElementById("splashScreen");
        if (splash) {
            splash.classList.add("fade-out");
            setTimeout(function() {
                splash.style.display = "none";
                const mainContent = document.getElementById("mainContent");
                if (mainContent) {
                    mainContent.classList.add("visible");
                }
                // Initialize AOS
                if (typeof AOS !== 'undefined') {
                    AOS.init({ duration: 800, once: true });
                }
            }, 1000);
        } else {
            const mainContent = document.getElementById("mainContent");
            if (mainContent) mainContent.classList.add("visible");
        }
    }, 1800);
});

// ========== MOBILE MENU TOGGLE ==========
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
    
    if (hamburger && navLinks) {
        hamburger.addEventListener("click", function() {
            navLinks.classList.toggle("show");
        });
    }
    
    // Close mobile menu when clicking a link
    const links = document.querySelectorAll(".nav-links a");
    links.forEach(link => {
        link.addEventListener("click", function() {
            if (navLinks && window.innerWidth <= 992) {
                navLinks.classList.remove("show");
            }
        });
    });
    
    // Set active nav link based on current page
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navItems = document.querySelectorAll(".nav-links a");
    navItems.forEach(link => {
        const href = link.getAttribute("href");
        if (href === currentPage) {
            link.classList.add("active");
        } else if (currentPage === "index.html" && href === "index.html") {
            link.classList.add("active");
        }
    });
});

// ========== CONTACT FORM HANDLER ==========
function initContactForm() {
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const name = document.getElementById("contactName")?.value;
            const phone = document.getElementById("contactPhone")?.value;
            const message = document.getElementById("contactMessage")?.value;
            const feedback = document.getElementById("formFeedback");
            
            if (name && phone && message) {
                feedback.innerHTML = '<span style="color: var(--gold);">✓ Thank you! Our team will contact you shortly.</span>';
                contactForm.reset();
                setTimeout(() => { feedback.innerHTML = ""; }, 5000);
            } else {
                feedback.innerHTML = '<span style="color: #ff6b6b;">Please fill all fields</span>';
            }
        });
    }
}

// ========== GOOGLE MAPS PLACEHOLDER ==========
function initMapPlaceholder() {
    const mapContainer = document.getElementById("google-map-container");
    if (mapContainer) {
        mapContainer.innerHTML = `
            <div style="background: #1a1a1a; height: 100%; display: flex; align-items: center; justify-content: center; flex-direction: column; border-radius: 12px;">
                <i class="fas fa-map-marker-alt" style="font-size: 48px; color: var(--gold); margin-bottom: 15px;"></i>
                <p style="color: #aaa;">Google Maps Integration</p>
                <p style="color: #666; font-size: 12px;">Add your API key to enable</p>
                <p style="color: #888; font-size: 11px; margin-top: 10px;">No.210/4, samad complex, 80 Feet Rd, HBR Layout, Bengaluru</p>
            </div>
        `;
    }
}

// ========== PRODUCT FILTER (for products.html) ==========
function initProductFilters() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener("click", function() {
                filterBtns.forEach(b => b.classList.remove("active"));
                this.classList.add("active");
                const filter = this.getAttribute("data-filter");
                filterProducts(filter);
            });
        });
    }
}

function filterProducts(category) {
    const products = document.querySelectorAll(".product-card");
    if (products.length === 0) return;
    
    products.forEach(product => {
        if (category === "all" || product.getAttribute("data-category") === category) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

window.productDatabase = [
    // ========== GOLD COLLECTION (8 products) ==========
    { id: 1, name: "18K Gold Necklace", price: "₹1,45,000", category: "Gold", image: "assets/images/products/gold-necklace.jpg", desc: "Elegant 18K gold necklace with intricate design. Perfect for weddings and special occasions. Weight: 12g" },
    { id: 2, name: "Gold Earrings", price: "₹98,000", category: "Gold", image: "assets/images/products/gold-earrings.jpg", desc: "Stylish gold jhumkas with contemporary design. Weight: 6g" },
    { id: 3, name: "Gold Bangle Set", price: "₹1,85,000", category: "Gold", image: "assets/images/products/gold-bangles.jpg", desc: "Traditional gold bangles with intricate carving. Set of 4 bangles. Weight: 20g" },
    { id: 4, name: "Gold Temple Necklace", price: "₹1,98,000", category: "Gold", image: "assets/images/products/temple-necklace.jpg", desc: "Traditional South Indian temple necklace with intricate deity motifs. 22K pure gold. Weight: 45g" },
    { id: 5, name: "Emerald Gold Ring", price: "₹1,25,000", category: "Gold", image: "assets/images/products/emerald-ring.jpg", desc: "Stunning emerald stone set in 18K gold with diamond accents. Weight: 8g" },
    { id: 6, name: "Gold Mangalsutra", price: "₹1,68,000", category: "Gold", image: "assets/images/products/gold-mangalsutra.jpg", desc: "Traditional gold mangalsutra with black beads. Weight: 15g" },
    { id: 7, name: "Gold Nose Pin", price: "₹95,000", category: "Gold", image: "assets/images/products/gold-nose-pin.jpg", desc: "Delicate gold nose pin with cubic zirconia. Weight: 1.5g" },
    { id: 8, name: "Gold Toe Rings", price: "₹90,000", category: "Gold", image: "assets/images/products/gold-toe-rings.jpg", desc: "Set of 2 gold toe rings with floral design. Weight: 2g each" },

    // ========== SILVER COLLECTION (8 products) ==========
    { id: 9, name: "Silver Bracelet", price: "₹1,10,000", category: "Silver", image: "assets/images/products/silver-bracelet.jpg", desc: "Sterling silver bracelet with antique finish. Lightweight and elegant. Weight: 15g" },
    { id: 10, name: "Silver Anklets", price: "₹95,000", category: "Silver", image: "assets/images/products/silver-anklets.jpg", desc: "Beautiful silver anklets with bell detailing. Weight: 25g" },
    { id: 11, name: "Silver Necklace", price: "₹1,35,000", category: "Silver", image: "assets/images/products/silver-necklace.jpg", desc: "Modern silver necklace with pendant. Perfect for daily wear. Weight: 18g" },
    { id: 12, name: "Silver Earrings", price: "₹92,000", category: "Silver", image: "assets/images/products/silver-earrings.jpg", desc: "Stylish silver drop earrings. Lightweight and trendy. Weight: 5g" },
    { id: 13, name: "Silver Ring", price: "₹90,000", category: "Silver", image: "assets/images/products/silver-ring.jpg", desc: "Adjustable silver ring with gemstone. Weight: 3g" },
    { id: 14, name: "Silver Pendant", price: "₹1,05,000", category: "Silver", image: "assets/images/products/silver-pendant.jpg", desc: "Lord Ganesha silver pendant on chain. Weight: 8g" },
    { id: 15, name: "Silver Cufflinks", price: "₹1,20,000", category: "Silver", image: "assets/images/products/silver-cufflinks.jpg", desc: "Classic silver cufflinks for men. Weight: 10g" },
    { id: 16, name: "Silver Bangles", price: "₹1,40,000", category: "Silver", image: "assets/images/products/silver-bangles.jpg", desc: "Set of 2 silver bangles with traditional design. Weight: 20g" },

    // ========== DIAMOND COLLECTION (8 products) ==========
    { id: 17, name: "Diamond Solitaire Ring", price: "₹1,95,000", category: "Diamond", image: "assets/images/products/diamond-ring.jpg", desc: "Certified VS clarity diamond set in platinum. 0.5 carat center stone" },
    { id: 18, name: "Diamond Pendant", price: "₹1,75,000", category: "Diamond", image: "assets/images/products/diamond-pendant.jpg", desc: "Solitaire diamond pendant on 18K gold chain. 0.3 carat diamond" },
    { id: 19, name: "Platinum Diamond Band", price: "₹1,98,000", category: "Diamond", image: "assets/images/products/platinum-band.jpg", desc: "Platinum diamond band with 0.8 carat total weight. Perfect wedding band" },
    { id: 20, name: "Diamond Earrings", price: "₹1,85,000", category: "Diamond", image: "assets/images/products/diamond-earrings.jpg", desc: "Beautiful diamond stud earrings. Total weight: 0.6 carat" },
    { id: 21, name: "Diamond Nose Pin", price: "₹1,20,000", category: "Diamond", image: "assets/images/products/diamond-nose-pin.jpg", desc: "Single diamond nose pin on gold base. Diamond: 0.1 carat" },
    { id: 22, name: "Diamond Bracelet", price: "₹1,90,000", category: "Diamond", image: "assets/images/products/diamond-bracelet.jpg", desc: "Tennis diamond bracelet. Total diamond weight: 1.2 carat" },
    { id: 23, name: "Diamond Necklace", price: "₹2,00,000", category: "Diamond", image: "assets/images/products/diamond-necklace.jpg", desc: "Luxury diamond necklace with 3 carat total diamond weight" },
    { id: 24, name: "Diamond Mangalsutra", price: "₹1,88,000", category: "Diamond", image: "assets/images/products/diamond-mangalsutra.jpg", desc: "Modern diamond mangalsutra with 0.8 carat diamonds" },

    // ========== BRIDAL COLLECTION (8 products) ==========
    { id: 25, name: "Bridal Choker Set", price: "₹1,92,000", category: "Bridal", image: "assets/images/products/bridal-choker.jpg", desc: "Traditional bridal choker set with uncut diamonds and gold. Includes matching earrings" },
    { id: 26, name: "Bridal Matha Patti", price: "₹1,50,000", category: "Bridal", image: "assets/images/products/matha-patti.jpg", desc: "Traditional bridal matha patti (headpiece) with kundan work and pearls" },
    { id: 27, name: "Bridal Necklace Set", price: "₹2,00,000", category: "Bridal", image: "assets/images/products/bridal-necklace-set.jpg", desc: "Complete bridal necklace set with earrings and maang tikka" },
    { id: 28, name: "Bridal Bangles", price: "₹1,65,000", category: "Bridal", image: "assets/images/products/bridal-bangles.jpg", desc: "Traditional bridal bangles set of 12 with gold and kundan work" },
    { id: 29, name: "Bridal Waist Belt", price: "₹1,55,000", category: "Bridal", image: "assets/images/products/bridal-waist-belt.jpg", desc: "Traditional kamarbandh for bridal outfit. Gold plated with pearls" },
    { id: 30, name: "Bridal Nose Ring", price: "₹1,18,000", category: "Bridal", image: "assets/images/products/bridal-nose-ring.jpg", desc: "Traditional nath (nose ring) for brides. Gold with pearl drops" },
    { id: 31, name: "Bridal Armlet", price: "₹1,30,000", category: "Bridal", image: "assets/images/products/bridal-armlet.jpg", desc: "Traditional bajuband (armlet) for bridal look. Gold plated" },
    { id: 32, name: "Bridal Toe Rings", price: "₹95,000", category: "Bridal", image: "assets/images/products/bridal-toe-rings.jpg", desc: "Set of 4 bridal toe rings with meenakari work" },

    // ========== PLATINUM COLLECTION (8 products) ==========
    { id: 33, name: "Platinum Wedding Band", price: "₹1,80,000", category: "Platinum", image: "assets/images/products/platinum-wedding-band.jpg", desc: "Classic platinum wedding band. Hypoallergenic and durable. Weight: 6g" },
    { id: 34, name: "Platinum Diamond Ring", price: "₹1,98,000", category: "Platinum", image: "assets/images/products/platinum-diamond-ring.jpg", desc: "Platinum ring with 0.7 carat diamond. Elegant and timeless" },
    { id: 35, name: "Platinum Chain", price: "₹1,60,000", category: "Platinum", image: "assets/images/products/platinum-chain.jpg", desc: "Pure platinum chain for men. Weight: 10g. Length: 20 inches" },
    { id: 36, name: "Platinum Earrings", price: "₹1,85,000", category: "Platinum", image: "assets/images/products/platinum-earrings.jpg", desc: "Platinum stud earrings with small diamonds. Weight: 3g" },
    { id: 37, name: "Platinum Pendant", price: "₹1,45,000", category: "Platinum", image: "assets/images/products/platinum-pendant.jpg", desc: "Simple platinum pendant on platinum chain" },
    { id: 38, name: "Platinum Cufflinks", price: "₹1,25,000", category: "Platinum", image: "assets/images/products/platinum-cufflinks.jpg", desc: "Luxury platinum cufflinks for formal occasions" },
    { id: 39, name: "Platinum Bracelet", price: "₹1,70,000", category: "Platinum", image: "assets/images/products/platinum-bracelet.jpg", desc: "Elegant platinum bracelet for women. Weight: 8g" },
    { id: 40, name: "Platinum Nose Pin", price: "₹1,15,000", category: "Platinum", image: "assets/images/products/platinum-nose-pin.jpg", desc: "Hypoallergenic platinum nose pin. Perfect for sensitive skin" },

    // ========== ANTIQUE COLLECTION (8 products) ==========
    { id: 41, name: "Antique Kundan Set", price: "₹1,95,000", category: "Antique", image: "assets/images/products/antique-kundan.jpg", desc: "Traditional Kundan necklace set with vintage finish. Royal look" },
    { id: 42, name: "Victorian Gold Locket", price: "₹1,10,000", category: "Antique", image: "assets/images/products/victorian-locket.jpg", desc: "Victorian-style gold locket with intricate engravings" },
    { id: 43, name: "Antique Jhumkas", price: "₹1,28,000", category: "Antique", image: "assets/images/products/antique-jhumkas.jpg", desc: "Traditional antique finish jhumkas with temple design" },
    { id: 44, name: "Antique Pendant", price: "₹1,05,000", category: "Antique", image: "assets/images/products/antique-pendant.jpg", desc: "Vintage-style pendant with oxidized finish" },
    { id: 45, name: "Antique Bangles", price: "₹1,50,000", category: "Antique", image: "assets/images/products/antique-bangles.jpg", desc: "Set of 2 antique finish bangles with meenakari work" },
    { id: 46, name: "Antique Necklace", price: "₹1,88,000", category: "Antique", image: "assets/images/products/antique-necklace.jpg", desc: "Long antique necklace with traditional coins" },
    { id: 47, name: "Antique Ring", price: "₹1,12,000", category: "Antique", image: "assets/images/products/antique-ring.jpg", desc: "Vintage-style ring with red stone" },
    { id: 48, name: "Antique Earrings", price: "₹1,08,000", category: "Antique", image: "assets/images/products/antique-earrings.jpg", desc: "Traditional antique earrings with pearl drops" },

    // ========== KIDS COLLECTION (8 products) ==========
    { id: 49, name: "Kids Gold Pendant", price: "₹92,000", category: "Kids", image: "assets/images/products/kids-pendant.jpg", desc: "Cute elephant-shaped gold pendant for children. Lightweight and safe. Weight: 2g" },
    { id: 50, name: "Kids Silver Anklet", price: "₹90,000", category: "Kids", image: "assets/images/products/kids-anklet.jpg", desc: "Tiny silver anklet with bell charms. Perfect for babies and toddlers" },
    { id: 51, name: "Kids Gold Earrings", price: "₹95,000", category: "Kids", image: "assets/images/products/kids-earrings.jpg", desc: "Small gold stud earrings for kids. Screw back for safety" },
    { id: 52, name: "Kids Silver Bracelet", price: "₹90,000", category: "Kids", image: "assets/images/products/kids-bracelet.jpg", desc: "Adjustable silver bracelet for children with name engraving option" },
    { id: 53, name: "Kids Gold Ring", price: "₹93,000", category: "Kids", image: "assets/images/products/kids-ring.jpg", desc: "Tiny gold ring with flower design. Adjustable size" },
    { id: 54, name: "Kids Silver Pendant", price: "₹90,000", category: "Kids", image: "assets/images/products/kids-pendant-silver.jpg", desc: "Cute star-shaped silver pendant for kids" },
    { id: 55, name: "Kids Gold Chain", price: "₹98,000", category: "Kids", image: "assets/images/products/kids-chain.jpg", desc: "Lightweight gold chain for children. Weight: 1.5g" },
    { id: 56, name: "Kids Nose Pin", price: "₹90,000", category: "Kids", image: "assets/images/products/kids-nose-pin.jpg", desc: "Small gold nose pin for traditional occasions" },

    // ========== MEN'S COLLECTION (8 products) ==========
    { id: 57, name: "Men's Gold Ring", price: "₹1,15,000", category: "Mens", image: "assets/images/products/mens-ring.png", desc: "Bold men's gold ring with matte finish. 8g 22K gold" },
    { id: 58, name: "Men's Silver Chain", price: "₹98,000", category: "Mens", image: "assets/images/products/mens-chain.png", desc: "Heavy silver chain for men. Length: 22 inches, weight: 25g" },
    { id: 59, name: "Men's Gold Kada", price: "₹1,60,000", category: "Mens", image: "assets/images/products/mens-kada.png", desc: "Traditional gold kada for men. Weight: 15g" },
    { id: 60, name: "Men's Silver Ring", price: "₹92,000", category: "Mens", image: "assets/images/products/mens-silver-ring.png", desc: "Stylish silver ring for men with black onyx stone" },
    { id: 61, name: "Men's Gold Chain", price: "₹1,80,000", category: "Mens", image: "assets/images/products/mens-gold-chain.png", desc: "Heavy gold chain for men. Weight: 20g. Length: 22 inches" },
    { id: 62, name: "Men's Silver Bracelet", price: "₹90,000", category: "Mens", image: "assets/images/products/mens-silver-bracelet.png", desc: "Leather and silver bracelet for men" },
    { id: 63, name: "Men's Platinum Ring", price: "₹1,45,000", category: "Mens", image: "assets/images/products/mens-platinum-ring.png", desc: "Elegant platinum ring for men with diamond accent" },
    { id: 64, name: "Men's Cufflinks", price: "₹1,00,000", category: "Mens", image: "assets/images/products/mens-cufflinks.png", desc: "Classic silver cufflinks for formal occasions" }
];

// ========== RENDER PRODUCTS (for products.html) ==========
function renderProducts(products) {
    const container = document.getElementById("products-grid-container");
    if (!container) return;
    
    container.innerHTML = products.map(p => `
        <div class="product-card" data-category="${p.category}" onclick="window.location.href='product-detail.html?id=${p.id}'">
            <img class="product-img" src="${p.image}" alt="${p.name}" onerror="this.src='https://placehold.co/600x800/2a2a2a/B48F4C?text=${encodeURIComponent(p.name)}'">
            <div class="product-info">
                <div class="product-title">${p.name}</div>
                <div class="product-price">${p.price}</div>
            </div>
        </div>
    `).join('');
}

// ========== RENDER FEATURED (for index.html) ==========
function renderFeaturedProducts() {
    const container = document.getElementById("featured-products");
    if (!container) return;
    
    const featured = window.productDatabase.slice(0, 4);
    container.innerHTML = featured.map(p => `
        <div class="product-card" onclick="window.location.href='product-detail.html?id=${p.id}'">
            <img class="product-img" src="${p.image}" alt="${p.name}" onerror="this.src='https://placehold.co/600x800/2a2a2a/B48F4C?text=${encodeURIComponent(p.name)}'">
            <div class="product-info">
                <div class="product-title">${p.name}</div>
                <div class="product-price">${p.price}</div>
            </div>
        </div>
    `).join('');
}

// ========== PRODUCT DETAIL HANDLER ==========
function loadProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const container = document.getElementById("product-detail-container");
    
    if (container && productId) {
        const product = window.productDatabase.find(p => p.id == productId);
        if (product) {
            container.innerHTML = `
                <div class="product-detail-wrapper">
                    <a href="products.html" class="back-link"><i class="fas fa-arrow-left"></i> Back to Products</a>
                    <div class="product-detail-grid">
                        <div class="detail-img">
                            <img src="${product.image}" alt="${product.name}" onerror="this.src='https://placehold.co/600x800/2a2a2a/B48F4C?text=${encodeURIComponent(product.name)}'">
                        </div>
                        <div class="detail-info">
                            <h1>${product.name}</h1>
                            <div class="detail-price">${product.price}</div>
                            <div class="detail-category"><span>${product.category}</span></div>
                            <p style="margin: 20px 0; line-height: 1.8;">${product.desc}</p>
                            <a href="https://wa.me/918147128889?text=I'm%20interested%20in%20${encodeURIComponent(product.name)}" class="btn-gold" target="_blank">
                                <i class="fab fa-whatsapp"></i> Enquire Now
                            </a>
                        </div>
                    </div>
                </div>
            `;
        } else {
            container.innerHTML = '<div class="container" style="text-align:center; padding:80px;"><h2>Product not found</h2><a href="products.html" class="btn-gold">View All Products</a></div>';
        }
    }
}

// ========== INITIALIZE ALL ==========
document.addEventListener("DOMContentLoaded", function() {
    initContactForm();
    initMapPlaceholder();
    initProductFilters();
    renderFeaturedProducts();
    loadProductDetail();
    
    // For products.html - render all products if container exists
    if (document.getElementById("products-grid-container") && !document.getElementById("featured-products")) {
        renderProducts(window.productDatabase);
    }
});