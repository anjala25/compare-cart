// Configuration
const CONFIG = {
    STORES: [
        { 
            id: 'amazon', 
            name: 'Amazon', 
            color: '#FF9900', 
            icon: 'fab fa-amazon',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
        },
        { 
            id: 'flipkart', 
            name: 'Flipkart', 
            color: '#047BD5', 
            icon: 'fas fa-shopping-bag',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Flipkart_logo.svg'
        },
        { 
            id: 'meesho', 
            name: 'Meesho', 
            color: '#F43397', 
            icon: 'fas fa-tshirt',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Meesho_Logo.svg'
        },
        { 
            id: 'ajio', 
            name: 'Ajio', 
            color: '#000000', 
            icon: 'fas fa-gem',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Ajio_logo.svg'
        },
        { 
            id: 'myntra', 
            name: 'Myntra', 
            color: '#FF3F6C', 
            icon: 'fas fa-star',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Myntra_logo.svg'
        },
        { 
            id: 'tatacliq', 
            name: 'Tata CLiQ', 
            color: '#00A9E0', 
            icon: 'fas fa-shopping-cart',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Tata_Cliq_logo.svg'
        },
        { 
            id: 'snapdeal', 
            name: 'Snapdeal', 
            color: '#FF6F61', 
            icon: 'fas fa-tag',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Snapdeal_logo.svg'
        },
        { 
            id: 'nykaa', 
            name: 'Nykaa', 
            color: '#FF3385', 
            icon: 'fas fa-spa',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Nykaa_Logo.svg'
        }
    ],
    
    CATEGORIES: {
        electronics: { 
            icon: 'fas fa-mobile-alt', 
            color: '#2563eb',
            name: 'Electronics'
        },
        fashion: { 
            icon: 'fas fa-tshirt', 
            color: '#ec4899',
            name: 'Fashion'
        },
        home: { 
            icon: 'fas fa-home', 
            color: '#10b981',
            name: 'Home & Kitchen'
        },
        beauty: { 
            icon: 'fas fa-spa', 
            color: '#8b5cf6',
            name: 'Beauty'
        },
        sports: { 
            icon: 'fas fa-dumbbell', 
            color: '#f59e0b',
            name: 'Sports'
        },
        books: { 
            icon: 'fas fa-book', 
            color: '#06b6d4',
            name: 'Books'
        },
        toys: { 
            icon: 'fas fa-gamepad', 
            color: '#ef4444',
            name: 'Toys & Games'
        },
        grocery: { 
            icon: 'fas fa-shopping-basket', 
            color: '#84cc16',
            name: 'Grocery'
        }
    },
    
    // Product filters
    PRICE_RANGES: [
        { label: 'Under ₹1,000', min: 0, max: 1000 },
        { label: '₹1,000 - ₹5,000', min: 1000, max: 5000 },
        { label: '₹5,000 - ₹10,000', min: 5000, max: 10000 },
        { label: '₹10,000 - ₹20,000', min: 10000, max: 20000 },
        { label: 'Above ₹20,000', min: 20000, max: 999999 }
    ],
    
    // Sort options
    SORT_OPTIONS: {
        price_low: { name: 'Price: Low to High', key: 'price', order: 'asc' },
        price_high: { name: 'Price: High to Low', key: 'price', order: 'desc' },
        rating: { name: 'Highest Rating', key: 'rating', order: 'desc' },
        reviews: { name: 'Most Reviews', key: 'reviews', order: 'desc' },
        quality: { name: 'Best Quality', key: 'quality', order: 'desc' },
        delivery: { name: 'Fastest Delivery', key: 'deliveryDays', order: 'asc' }
    }
};

// State Management
let state = {
    currentSearch: '',
    selectedStores: ['all'],
    selectedCategory: null,
    selectedPriceRange: null,
    searchResults: [],
    sortBy: 'price_low',
    theme: 'dark',
    wishlist: JSON.parse(localStorage.getItem('wishlist')) || [],
    priceAlerts: JSON.parse(localStorage.getItem('priceAlerts')) || [],
    comparison: JSON.parse(localStorage.getItem('comparison')) || [],
    searchHistory: JSON.parse(localStorage.getItem('searchHistory')) || []
};

// DOM Elements
const elements = {
    searchInput: document.getElementById('searchInput'),
    searchButton: document.getElementById('searchButton'),
    resultsContainer: document.getElementById('resultsContainer'),
    loadingScreen: document.getElementById('loadingScreen'),
    loadingMessage: document.getElementById('loadingMessage'),
    progressBar: document.getElementById('progressBar'),
    storeButtons: document.querySelectorAll('.store-btn'),
    categoryTags: document.querySelectorAll('.category-tag'),
    sortButtons: document.querySelectorAll('.sort-btn'),
    exampleButtons: document.querySelectorAll('.example-btn'),
    themeToggle: document.getElementById('themeToggle'),
    trendsButton: document.getElementById('trendsButton'),
    dealsButton: document.getElementById('dealsButton'),
    voiceBtn: document.querySelector('.voice-btn'),
    cameraBtn: document.querySelector('.camera-btn'),
    filterBtn: document.querySelector('.filter-btn')
};

// Initialize Application
function init() {
    console.log('🚀 PriceWise - Smart Price Comparison Initialized');
    
    // Set initial theme
    setTheme(state.theme);
    
    // Setup event listeners
    setupEventListeners();
    
    // Setup hover effects
    setupHoverEffects();
    
    // Setup particles
    setupParticles();
    
    // Update store filters UI
    updateStoreFilters();
    
    // Load recent searches
    loadRecentSearches();
    
    // Check for saved theme
    checkSavedTheme();
    
    // Initialize stats counters
    initStatsCounters();
}

// Event Listeners Setup
function setupEventListeners() {
    // Search functionality
    elements.searchButton.addEventListener('click', handleSearch);
    elements.searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            playClickSound();
            handleSearch();
        }
    });
    
    // Voice search
    if (elements.voiceBtn) {
        elements.voiceBtn.addEventListener('click', handleVoiceSearch);
    }
    
    // Camera search
    if (elements.cameraBtn) {
        elements.cameraBtn.addEventListener('click', handleCameraSearch);
    }
    
    // Store filters
    elements.storeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const store = btn.dataset.store;
            toggleStoreFilter(store);
            playClickSound();
        });
    });
    
    // Category tags
    elements.categoryTags.forEach(tag => {
        tag.addEventListener('click', () => {
            const category = tag.dataset.category;
            selectCategory(category);
            playClickSound();
        });
    });
    
    // Sort buttons
    elements.sortButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const sort = btn.dataset.sort;
            sortResults(sort);
            playClickSound();
        });
    });
    
    // Example search buttons
    elements.exampleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const search = btn.dataset.search;
            elements.searchInput.value = search;
            handleSearch();
            playClickSound();
        });
    });
    
    // Theme toggle
    if (elements.themeToggle) {
        elements.themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Trends button
    if (elements.trendsButton) {
        elements.trendsButton.addEventListener('click', showPriceTrends);
    }
    
    // Deals button
    if (elements.dealsButton) {
        elements.dealsButton.addEventListener('click', showTodayDeals);
    }
    
    // Filter button
    if (elements.filterBtn) {
        elements.filterBtn.addEventListener('click', showFiltersModal);
    }
    
    // Search input focus
    elements.searchInput.addEventListener('focus', () => {
        elements.searchInput.parentElement.classList.add('focused');
        showSearchSuggestions();
    });
    
    elements.searchInput.addEventListener('blur', () => {
        elements.searchInput.parentElement.classList.remove('focused');
        hideSearchSuggestions();
    });
    
    // Window resize
    window.addEventListener('resize', handleResize);
    
    // Price bubble clicks
    document.querySelectorAll('.price-bubble').forEach(bubble => {
        bubble.addEventListener('click', () => {
            const price = bubble.querySelector('.price-value').textContent;
            elements.searchInput.value = `Under ₹${price}`;
            handleSearch();
        });
    });
}

// Enhanced Hover Effects
function setupHoverEffects() {
    // Add ripple effect to all buttons
    const buttons = document.querySelectorAll('button:not(.no-ripple)');
    
    buttons.forEach(button => {
        button.addEventListener('click', createRipple);
        
        button.addEventListener('mouseenter', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            button.style.setProperty('--mouse-x', `${x}px`);
            button.style.setProperty('--mouse-y', `${y}px`);
            
            // Add glow effect
            button.classList.add('glow');
        });
        
        button.addEventListener('mouseleave', () => {
            button.classList.remove('glow');
        });
    });
    
    // Card hover effects
    const cards = document.querySelectorAll('.product-card, .stat-card, .feature-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
            card.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.3)';
            card.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = 'none';
            card.style.zIndex = '1';
        });
    });
}

// Ripple Effect
function createRipple(e) {
    const button = e.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${e.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add('ripple');
    
    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
        ripple.remove();
    }
    
    button.appendChild(circle);
    
    setTimeout(() => {
        circle.remove();
    }, 600);
}

// Particles Background
function setupParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random properties
        const size = Math.random() * 4 + 1;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 10;
        const color = getRandomColor();
        
        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${posX}%;
            top: ${posY}%;
            background: ${color};
            animation-delay: ${delay}s;
            animation-duration: ${duration}s;
        `;
        
        container.appendChild(particle);
    }
}

function getRandomColor() {
    const colors = [
        'rgba(37, 99, 235, 0.6)',
        'rgba(6, 182, 212, 0.6)',
        'rgba(16, 185, 129, 0.6)',
        'rgba(245, 158, 11, 0.6)',
        'rgba(236, 72, 153, 0.6)'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Search Handler
async function handleSearch() {
    const query = elements.searchInput.value.trim();
    
    if (!query) {
        showNotification('Please enter a product name to search', 'warning');
        return;
    }
    
    // Save to search history
    addToSearchHistory(query);
    
    // Update state
    state.currentSearch = query;
    
    // Show loading screen
    showLoadingScreen();
    
    try {
        // Simulate search process with progress updates
        await simulateSearchProcess(query);
        
        // Fetch search results
        const results = await fetchSearchResults(query);
        state.searchResults = results;
        
        // Apply current sort
        applySort();
        
        // Display results
        displayResults();
        
        // Show success notification
        showNotification(`Found ${results.length} products for "${query}"`, 'success');
        
        // Update URL for sharing
        updateBrowserUrl(query);
        
    } catch (error) {
        console.error('Search error:', error);
        showNotification('Search failed. Please try again.', 'error');
        showFallbackResults();
    } finally {
        hideLoadingScreen();
    }
}

// Simulate Search Process
async function simulateSearchProcess(query) {
    const steps = [
        `Searching for "${query}"...`,
        'Checking prices on Amazon...',
        'Comparing prices on Flipkart...',
        'Scanning deals on Meesho...',
        'Analyzing quality ratings...',
        'Calculating best value scores...',
        'Fetching delivery information...',
        'Generating recommendations...',
        'Finalizing results...'
    ];
    
    let progress = 0;
    const progressStep = 100 / steps.length;
    
    for (let i = 0; i < steps.length; i++) {
        updateLoadingMessage(steps[i]);
        progress += progressStep;
        updateProgressBar(progress);
        
        // Add random delay for realism
        await delay(200 + Math.random() * 300);
    }
    
    // Final progress
    updateProgressBar(100);
    await delay(300);
}

// Fetch Search Results (Mock API)
async function fetchSearchResults(query) {
    // Simulate API delay
    await delay(800);
    
    // Import product database
    const products = await loadProductDatabase();
    
    // Filter products based on search query
    const filtered = products.filter(product => {
        const searchTerms = query.toLowerCase().split(' ');
        const productText = (product.name + ' ' + product.description + ' ' + product.brand + ' ' + product.category).toLowerCase();
        
        return searchTerms.every(term => productText.includes(term));
    });
    
    // Apply store filters
    let filteredByStore = filtered;
    if (!state.selectedStores.includes('all')) {
        filteredByStore = filtered.filter(product => 
            product.stores.some(store => state.selectedStores.includes(store.store))
        );
    }
    
    // Apply category filter
    let filteredByCategory = filteredByStore;
    if (state.selectedCategory) {
        filteredByCategory = filteredByStore.filter(
            product => product.category === state.selectedCategory
        );
    }
    
    // Apply price range filter
    let finalResults = filteredByCategory;
    if (state.selectedPriceRange) {
        const range = CONFIG.PRICE_RANGES.find(r => r.label === state.selectedPriceRange);
        if (range) {
            finalResults = filteredByCategory.filter(product => {
                const minPrice = Math.min(...product.stores.map(s => s.price));
                return minPrice >= range.min && minPrice <= range.max;
            });
        }
    }
    
    // Calculate additional metrics for each product
    return finalResults.map(product => {
        const stores = product.stores;
        const bestPrice = Math.min(...stores.map(s => s.price));
        const bestStore = stores.find(s => s.price === bestPrice);
        const maxPrice = Math.max(...stores.map(s => s.price));
        
        // Calculate savings percentage
        const savingsPercentage = maxPrice > 0 ? ((maxPrice - bestPrice) / maxPrice * 100).toFixed(1) : 0;
        
        // Calculate value score (price + quality + rating)
        const avgRating = stores.reduce((sum, s) => sum + s.rating, 0) / stores.length;
        const avgQuality = stores.reduce((sum, s) => sum + s.quality, 0) / stores.length;
        const normalizedPrice = 1 - (bestPrice / (bestPrice + 10000)); // Normalize price impact
        
        const valueScore = (
            normalizedPrice * 0.4 + 
            (avgRating / 5) * 0.3 + 
            (avgQuality / 10) * 0.3
        ) * 10;
        
        // Calculate delivery score
        const deliveryScore = stores.reduce((score, store) => {
            const days = parseInt(store.delivery) || 7;
            return score + (1 / days);
        }, 0) / stores.length * 10;
        
        return {
            ...product,
            stores,
            bestPrice,
            bestStore,
            maxPrice,
            savingsPercentage,
            valueScore: valueScore.toFixed(1),
            deliveryScore: deliveryScore.toFixed(1),
            overallScore: ((valueScore * 0.6) + (deliveryScore * 0.4)).toFixed(1)
        };
    });
}

// Load Product Database
async function loadProductDatabase() {
    // In a real application, this would be an API call
    // For now, we'll use a mock database
    
    return [
        // Electronics
        {
            id: 1,
            name: "iPhone 15 Pro",
            category: "electronics",
            brand: "Apple",
            description: "Latest iPhone with A17 Pro chip and titanium design",
            stores: [
                {
                    store: "amazon",
                    price: 134999,
                    originalPrice: 149999,
                    rating: 4.8,
                    reviews: 2450,
                    delivery: "1-2 days",
                    quality: 9.2,
                    warranty: "1 year",
                    returnPolicy: "10 days",
                    shipping: "Free",
                    url: "#"
                },
                {
                    store: "flipkart",
                    price: 132999,
                    originalPrice: 149999,
                    rating: 4.7,
                    reviews: 1890,
                    delivery: "2-3 days",
                    quality: 9.0,
                    warranty: "1 year",
                    returnPolicy: "7 days",
                    shipping: "Free",
                    url: "#"
                },
                {
                    store: "tatacliq",
                    price: 135999,
                    originalPrice: 149999,
                    rating: 4.6,
                    reviews: 890,
                    delivery: "3-4 days",
                    quality: 9.1,
                    warranty: "1 year",
                    returnPolicy: "14 days",
                    shipping: "₹99",
                    url: "#"
                }
            ],
            specifications: {
                "Display": "6.1\" Super Retina XDR",
                "Processor": "A17 Pro",
                "Storage": "256GB",
                "Camera": "48MP Main + 12MP Ultra Wide",
                "Battery": "3274 mAh"
            },
            image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=400&q=80"
        },
        
        {
            id: 2,
            name: "Samsung Galaxy S23 Ultra",
            category: "electronics",
            brand: "Samsung",
            description: "Premium Android smartphone with S Pen",
            stores: [
                {
                    store: "amazon",
                    price: 124999,
                    originalPrice: 139999,
                    rating: 4.7,
                    reviews: 1890,
                    delivery: "1-2 days",
                    quality: 9.0,
                    warranty: "1 year",
                    returnPolicy: "10 days",
                    shipping: "Free",
                    url: "#"
                },
                {
                    store: "flipkart",
                    price: 119999,
                    originalPrice: 139999,
                    rating: 4.8,
                    reviews: 2345,
                    delivery: "2-3 days",
                    quality: 8.9,
                    warranty: "1 year",
                    returnPolicy: "7 days",
                    shipping: "Free",
                    url: "#"
                }
            ],
            image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=400&q=80"
        },
        
        // Fashion
        {
            id: 3,
            name: "Nike Air Max 270",
            category: "fashion",
            brand: "Nike",
            description: "Men's running shoes with Air Max cushioning",
            stores: [
                {
                    store: "amazon",
                    price: 12999,
                    originalPrice: 14999,
                    rating: 4.5,
                    reviews: 1250,
                    delivery: "3-4 days",
                    quality: 8.5,
                    warranty: "No",
                    returnPolicy: "30 days",
                    shipping: "Free",
                    url: "#"
                },
                {
                    store: "myntra",
                    price: 11999,
                    originalPrice: 14999,
                    rating: 4.7,
                    reviews: 3420,
                    delivery: "2-3 days",
                    quality: 8.8,
                    warranty: "No",
                    returnPolicy: "30 days",
                    shipping: "Free",
                    url: "#"
                }
            ],
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80"
        },
        
        {
            id: 4,
            name: "Levi's 501 Original Jeans",
            category: "fashion",
            brand: "Levi's",
            description: "Classic straight fit jeans",
            stores: [
                {
                    store: "myntra",
                    price: 3999,
                    originalPrice: 4999,
                    rating: 4.6,
                    reviews: 2890,
                    delivery: "2-3 days",
                    quality: 8.7,
                    warranty: "No",
                    returnPolicy: "30 days",
                    shipping: "Free",
                    url: "#"
                },
                {
                    store: "ajio",
                    price: 3799,
                    originalPrice: 4999,
                    rating: 4.5,
                    reviews: 1560,
                    delivery: "3-4 days",
                    quality: 8.6,
                    warranty: "No",
                    returnPolicy: "15 days",
                    shipping: "Free",
                    url: "#"
                }
            ],
            image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=400&q=80"
        },
        
        // Home Appliances
        {
            id: 5,
            name: "Samsung 55\" 4K Smart TV",
            category: "electronics",
            brand: "Samsung",
            description: "Crystal 4K UHD Smart TV with Streaming",
            stores: [
                {
                    store: "amazon",
                    price: 54999,
                    originalPrice: 69999,
                    rating: 4.6,
                    reviews: 1890,
                    delivery: "1-2 days",
                    quality: 8.9,
                    warranty: "2 years",
                    returnPolicy: "10 days",
                    shipping: "Free",
                    url: "#"
                },
                {
                    store: "flipkart",
                    price: 52999,
                    originalPrice: 69999,
                    rating: 4.7,
                    reviews: 2450,
                    delivery: "2-3 days",
                    quality: 8.8,
                    warranty: "2 years",
                    returnPolicy: "7 days",
                    shipping: "Free",
                    url: "#"
                }
            ],
            image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=400&q=80"
        },
        
        {
            id: 6,
            name: "Philips Air Fryer XXL",
            category: "home",
            brand: "Philips",
            description: "Healthy cooking with up to 90% less fat",
            stores: [
                {
                    store: "amazon",
                    price: 12999,
                    originalPrice: 16999,
                    rating: 4.5,
                    reviews: 3450,
                    delivery: "1-2 days",
                    quality: 8.7,
                    warranty: "2 years",
                    returnPolicy: "10 days",
                    shipping: "Free",
                    url: "#"
                },
                {
                    store: "flipkart",
                    price: 12499,
                    originalPrice: 16999,
                    rating: 4.6,
                    reviews: 2890,
                    delivery: "2-3 days",
                    quality: 8.6,
                    warranty: "2 years",
                    returnPolicy: "7 days",
                    shipping: "Free",
                    url: "#"
                }
            ],
            image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=400&q=80"
        }
    ];
}

// Enhanced Display Functions
function displayResults() {
    if (!state.searchResults || state.searchResults.length === 0) {
        showNoResults();
        return;
    }
    
    // Clear previous results
    elements.resultsContainer.innerHTML = '';
    
    // Calculate best values
    const bestDeals = calculateBestDeals();
    
    // Create summary section
    const summaryHTML = createResultsSummary();
    elements.resultsContainer.innerHTML += summaryHTML;
    
    // Create category boxes
    elements.resultsContainer.innerHTML += createCategoryBoxes(bestDeals);
    
    // Create individual product cards
    elements.resultsContainer.innerHTML += `
        <div class="all-products-section">
            <div class="section-header">
                <h3><i class="fas fa-boxes"></i> All Matching Products (${state.searchResults.length})</h3>
                <div class="view-toggle">
                    <button class="view-btn active" data-view="grid">
                        <i class="fas fa-th"></i>
                    </button>
                    <button class="view-btn" data-view="list">
                        <i class="fas fa-list"></i>
                    </button>
                </div>
            </div>
            <div class="products-grid" id="productsGrid">
                ${state.searchResults.map(product => createProductCard(product)).join('')}
            </div>
        </div>
    `;
    
    // Add event listeners
    setTimeout(() => {
        addProductCardListeners();
        setupViewToggle();
        addCategoryBoxListeners();
    }, 100);
}

// Calculate Best Deals for Each Category
function calculateBestDeals() {
    const bestDeals = {
        price: null,
        quality: null,
        value: null,
        delivery: null
    };
    
    let bestPriceScore = Infinity;
    let bestQualityScore = 0;
    let bestValueScore = 0;
    let bestDeliveryScore = Infinity;
    
    state.searchResults.forEach(product => {
        const productScore = calculateProductScores(product);
        
        // Best Price
        if (productScore.priceScore < bestPriceScore) {
            bestPriceScore = productScore.priceScore;
            bestDeals.price = { product, score: productScore };
        }
        
        // Best Quality
        if (productScore.qualityScore > bestQualityScore) {
            bestQualityScore = productScore.qualityScore;
            bestDeals.quality = { product, score: productScore };
        }
        
        // Best Value
        if (productScore.valueScore > bestValueScore) {
            bestValueScore = productScore.valueScore;
            bestDeals.value = { product, score: productScore };
        }
        
        // Fastest Delivery
        if (productScore.deliveryScore < bestDeliveryScore) {
            bestDeliveryScore = productScore.deliveryScore;
            bestDeals.delivery = { product, score: productScore };
        }
    });
    
    return bestDeals;
}

// Calculate Product Scores
function calculateProductScores(product) {
    const bestStore = product.bestStore || PRODUCTS_DB.getBestDeal(product);
    const priceStats = PRODUCTS_DB.getPriceStats(product);
    const quality = PRODUCTS_DB.getQualityAnalysis(product);
    const delivery = PRODUCTS_DB.getDeliveryAnalysis(product);
    
    // Normalize scores (0-100)
    const priceScore = bestStore.price; // Lower is better
    const qualityScore = quality.avgQuality * 10; // 0-100
    const deliveryScore = delivery.fastest; // Lower is better
    const ratingScore = bestStore.rating * 20; // 0-100
    
    // Calculate value score (combination of all factors)
    const valueScore = (
        (100 - (priceScore / 10000) * 40) + // Price weight: 40%
        (qualityScore * 0.3) +              // Quality weight: 30%
        (ratingScore * 0.2) +               // Rating weight: 20%
        ((10 - deliveryScore) * 10 * 0.1)   // Delivery weight: 10%
    );
    
    return {
        priceScore,
        qualityScore,
        deliveryScore,
        ratingScore,
        valueScore: valueScore.toFixed(1)
    };
}

// Create Results Summary
function createResultsSummary() {
    const totalProducts = state.searchResults.length;
    const stores = [...new Set(state.searchResults.flatMap(p => p.stores.map(s => s.store)))];
    const categories = [...new Set(state.searchResults.map(p => p.category))];
    
    const totalSavings = state.searchResults.reduce((sum, product) => {
        const priceStats = PRODUCTS_DB.getPriceStats(product);
        return sum + priceStats.savings;
    }, 0);
    
    return `
        <div class="results-summary-section">
            <div class="summary-header">
                <h2><i class="fas fa-chart-bar"></i> Comparison Results for "${state.currentSearch}"</h2>
                <div class="summary-actions">
                    <button class="btn-share" onclick="shareResults()">
                        <i class="fas fa-share-alt"></i> Share
                    </button>
                    <button class="btn-export" onclick="exportResults()">
                        <i class="fas fa-download"></i> Export
                    </button>
                </div>
            </div>
            
            <div class="summary-stats">
                <div class="stat-card summary-stat">
                    <div class="stat-icon">
                        <i class="fas fa-box"></i>
                    </div>
                    <div class="stat-info">
                        <h3>${totalProducts}</h3>
                        <p>Products Found</p>
                    </div>
                </div>
                
                <div class="stat-card summary-stat">
                    <div class="stat-icon">
                        <i class="fas fa-store"></i>
                    </div>
                    <div class="stat-info">
                        <h3>${stores.length}</h3>
                        <p>Stores Compared</p>
                    </div>
                </div>
                
                <div class="stat-card summary-stat">
                    <div class="stat-icon">
                        <i class="fas fa-rupee-sign"></i>
                    </div>
                    <div class="stat-info">
                        <h3>₹${totalSavings.toLocaleString()}</h3>
                        <p>Total Savings</p>
                    </div>
                </div>
                
                <div class="stat-card summary-stat">
                    <div class="stat-icon">
                        <i class="fas fa-tags"></i>
                    </div>
                    <div class="stat-info">
                        <h3>${categories.length}</h3>
                        <p>Categories</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Create Category Boxes
function createCategoryBoxes(bestDeals) {
    return `
        <div class="category-boxes-section">
            <h3><i class="fas fa-award"></i> Top Recommendations</h3>
            <p class="section-subtitle">Handpicked based on different criteria to help you choose</p>
            
            <div class="category-boxes-grid">
                ${createCategoryBox('price', bestDeals.price, 'fas fa-tag', '#ef4444', 'Best Price')}
                ${createCategoryBox('quality', bestDeals.quality, 'fas fa-gem', '#3b82f6', 'Best Quality')}
                ${createCategoryBox('value', bestDeals.value, 'fas fa-balance-scale', '#10b981', 'Best Value')}
                ${createCategoryBox('delivery', bestDeals.delivery, 'fas fa-shipping-fast', '#f59e0b', 'Fastest Delivery')}
            </div>
        </div>
    `;
}

// Create Individual Category Box
function createCategoryBox(type, deal, icon, color, title) {
    if (!deal) return '';
    
    const { product, score } = deal;
    const bestStore = product.bestStore || PRODUCTS_DB.getBestDeal(product);
    const storeInfo = CONFIG.STORES.find(s => s.id === bestStore.store);
    const storeLogo = getStoreLogo(bestStore.store);
    
    let description = '';
    let highlights = '';
    
    switch(type) {
        case 'price':
            description = `Lowest price guaranteed across all stores`;
            highlights = `
                <div class="highlight-item">
                    <i class="fas fa-check-circle"></i>
                    <span>Saves ₹${PRODUCTS_DB.getPriceStats(product).savings.toLocaleString()}</span>
                </div>
                <div class="highlight-item">
                    <i class="fas fa-percentage"></i>
                    <span>${Math.round((PRODUCTS_DB.getPriceStats(product).savings / PRODUCTS_DB.getPriceStats(product).max) * 100)}% cheaper than others</span>
                </div>
            `;
            break;
            
        case 'quality':
            description = `Top-rated quality with excellent reviews`;
            highlights = `
                <div class="highlight-item">
                    <i class="fas fa-star"></i>
                    <span>${score.qualityScore}/100 Quality Score</span>
                </div>
                <div class="highlight-item">
                    <i class="fas fa-thumbs-up"></i>
                    <span>${bestStore.rating}/5 Rating (${bestStore.reviews.toLocaleString()} reviews)</span>
                </div>
            `;
            break;
            
        case 'value':
            description = `Perfect balance of price and quality`;
            highlights = `
                <div class="highlight-item">
                    <i class="fas fa-chart-line"></i>
                    <span>${score.valueScore}/100 Value Score</span>
                </div>
                <div class="highlight-item">
                    <i class="fas fa-bolt"></i>
                    <span>Best price-to-quality ratio</span>
                </div>
            `;
            break;
            
        case 'delivery':
            description = `Get it delivered the fastest`;
            highlights = `
                <div class="highlight-item">
                    <i class="fas fa-shipping-fast"></i>
                    <span>Delivery in ${bestStore.delivery}</span>
                </div>
                <div class="highlight-item">
                    <i class="fas fa-clock"></i>
                    <span>${score.deliveryScore} days average</span>
                </div>
            `;
            break;
    }
    
    return `
        <div class="category-box" data-type="${type}" data-product-id="${product.id}">
            <div class="box-header" style="border-color: ${color};">
                <div class="box-icon" style="background: ${color};">
                    <i class="${icon}"></i>
                </div>
                <div class="box-title">
                    <h4>${title}</h4>
                    <p class="box-description">${description}</p>
                </div>
            </div>
            
            <div class="box-content">
                <div class="product-preview">
                    <div class="preview-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="preview-info">
                        <h5>${product.name}</h5>
                        <div class="product-brand">
                            <i class="fas fa-tag"></i>
                            ${product.brand}
                        </div>
                    </div>
                </div>
                
                <div class="store-highlight">
                    <div class="store-badge" style="background: ${storeInfo.color};">
                        <div class="store-logo-small">
                            ${storeLogo}
                        </div>
                        <span class="store-name">${storeInfo.name}</span>
                    </div>
                    <div class="store-price">
                        <span class="price">₹${bestStore.price.toLocaleString()}</span>
                        ${bestStore.originalPrice ? `
                            <span class="original-price">₹${bestStore.originalPrice.toLocaleString()}</span>
                        ` : ''}
                    </div>
                </div>
                
                <div class="box-highlights">
                    ${highlights}
                </div>
            </div>
            
            <div class="box-actions">
                <button class="btn-view-details" onclick="viewProductDetails(${product.id})">
                    <i class="fas fa-eye"></i> View Details
                </button>
                <button class="btn-buy-now" onclick="buyNow('${bestStore.store}', ${product.id})" 
                        style="background: ${color};">
                    <i class="fas fa-shopping-cart"></i> Buy Now
                </button>
            </div>
            
            <div class="box-footer">
                <div class="store-tags">
                    <span class="store-tag">
                        <i class="${storeInfo.icon}"></i>
                        Available on ${storeInfo.name}
                    </span>
                    ${product.stores.slice(0, 2).map(store => {
                        const sInfo = CONFIG.STORES.find(s => s.id === store.store);
                        return store.store !== bestStore.store ? `
                            <span class="store-tag alt">
                                <i class="${sInfo.icon}"></i>
                                Also on ${sInfo.name}
                            </span>
                        ` : '';
                    }).join('')}
                </div>
            </div>
        </div>
    `;
}

// Get Store Logo (using icons for now, can replace with images)
function getStoreLogo(storeId) {
    const store = CONFIG.STORES.find(s => s.id === storeId);
    return `<i class="${store.icon}"></i>`;
}

// Enhanced Product Card
function createProductCard(product) {
    const bestStore = product.bestStore || PRODUCTS_DB.getBestDeal(product);
    const storeInfo = CONFIG.STORES.find(s => s.id === bestStore.store);
    const categoryInfo = CONFIG.CATEGORIES[product.category];
    const priceStats = PRODUCTS_DB.getPriceStats(product);
    const quality = PRODUCTS_DB.getQualityAnalysis(product);
    
    // Calculate savings percentage
    const savingsPercentage = priceStats.max > 0 ? 
        Math.round(((priceStats.max - priceStats.min) / priceStats.max) * 100) : 0;
    
    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-card-header">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    <div class="product-badges">
                        <span class="badge category-badge" style="background: ${categoryInfo.color};">
                            <i class="${categoryInfo.icon}"></i>
                            ${categoryInfo.name}
                        </span>
                        ${savingsPercentage > 20 ? `
                            <span class="badge discount-badge">
                                <i class="fas fa-fire"></i>
                                Save ${savingsPercentage}%
                            </span>
                        ` : ''}
                        <span class="badge quality-badge">
                            <i class="fas fa-star"></i>
                            ${quality.avgQuality.toFixed(1)}/10
                        </span>
                    </div>
                </div>
                
                <div class="product-wishlist">
                    <button class="wishlist-btn ${state.wishlist.includes(product.id) ? 'active' : ''}" 
                            onclick="toggleWishlist(${product.id})">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
            
            <div class="product-card-body">
                <h3 class="product-title">${product.name}</h3>
                
                <div class="product-meta">
                    <span class="brand">
                        <i class="fas fa-tag"></i>
                        ${product.brand}
                    </span>
                    <span class="reviews">
                        <i class="fas fa-comment"></i>
                        ${bestStore.reviews.toLocaleString()} reviews
                    </span>
                </div>
                
                <p class="product-description">${product.description.substring(0, 100)}...</p>
                
                <!-- Store Comparison -->
                <div class="store-comparison-mini">
                    <div class="best-store">
                        <div class="store-header">
                            <div class="store-logo" style="background: ${storeInfo.color};">
                                <i class="${storeInfo.icon}"></i>
                            </div>
                            <div class="store-info">
                                <span class="store-name">${storeInfo.name}</span>
                                <span class="store-rating">
                                    <i class="fas fa-star"></i> ${bestStore.rating}
                                </span>
                            </div>
                        </div>
                        <div class="store-price">
                            <span class="current-price">₹${bestStore.price.toLocaleString()}</span>
                            ${bestStore.originalPrice ? `
                                <span class="original-price">₹${bestStore.originalPrice.toLocaleString()}</span>
                            ` : ''}
                        </div>
                    </div>
                    
                    ${product.stores.length > 1 ? `
                        <div class="other-stores-mini">
                            <div class="other-stores-label">
                                <i class="fas fa-store"></i>
                                Also available on:
                            </div>
                            <div class="store-tags-mini">
                                ${product.stores
                                    .filter(store => store.store !== bestStore.store)
                                    .slice(0, 2)
                                    .map(store => {
                                        const sInfo = CONFIG.STORES.find(s => s.id === store.store);
                                        const priceDiff = store.price - bestStore.price;
                                        return `
                                            <span class="store-tag-mini ${priceDiff > 0 ? 'higher' : 'lower'}">
                                                <i class="${sInfo.icon}"></i>
                                                ${sInfo.name}
                                                <span class="price-diff">
                                                    ${priceDiff > 0 ? '+' : ''}₹${Math.abs(priceDiff).toLocaleString()}
                                                </span>
                                            </span>
                                        `;
                                    }).join('')}
                            </div>
                        </div>
                    ` : ''}
                </div>
            </div>
            
            <div class="product-card-footer">
                <div class="product-actions">
                    <button class="btn-compare" onclick="addToComparison(${product.id})">
                        <i class="fas fa-balance-scale"></i>
                        Compare
                    </button>
                    <button class="btn-view" onclick="viewProductDetails(${product.id})">
                        <i class="fas fa-eye"></i>
                        View
                    </button>
                    <button class="btn-buy" onclick="buyNow('${bestStore.store}', ${product.id})">
                        <i class="fas fa-shopping-cart"></i>
                        Buy
                    </button>
                </div>
                
                <div class="product-specs">
                    <span class="spec">
                        <i class="fas fa-shipping-fast"></i>
                        ${bestStore.delivery}
                    </span>
                    <span class="spec">
                        <i class="fas fa-shield-alt"></i>
                        ${bestStore.warranty || 'No warranty'}
                    </span>
                </div>
            </div>
        </div>
    `;
}

// Add Category Box Listeners
function addCategoryBoxListeners() {
    const categoryBoxes = document.querySelectorAll('.category-box');
    
    categoryBoxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.style.transform = 'translateY(-10px) scale(1.02)';
            box.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
        });
        
        box.addEventListener('mouseleave', () => {
            box.style.transform = 'translateY(0) scale(1)';
            box.style.boxShadow = 'var(--shadow-sm)';
        });
        
        // Click to view product details
        box.addEventListener('click', (e) => {
            if (!e.target.closest('button')) {
                const productId = box.dataset.productId;
                viewProductDetails(productId);
            }
        });
    });
}

// Setup View Toggle
function setupViewToggle() {
    const viewButtons = document.querySelectorAll('.view-btn');
    const productsGrid = document.getElementById('productsGrid');
    
    viewButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const view = btn.dataset.view;
            
            // Update active button
            viewButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Update grid/view
            if (view === 'grid') {
                productsGrid.classList.remove('list-view');
                productsGrid.classList.add('grid-view');
            } else {
                productsGrid.classList.remove('grid-view');
                productsGrid.classList.add('list-view');
            }
        });
    });
}

// Export Results
function exportResults() {
    const exportData = {
        searchQuery: state.currentSearch,
        timestamp: new Date().toISOString(),
        totalProducts: state.searchResults.length,
        products: state.searchResults.map(product => ({
            name: product.name,
            brand: product.brand,
            category: product.category,
            bestPrice: product.bestPrice,
            bestStore: product.bestStore?.store,
            qualityScore: product.quality?.avgQuality,
            stores: product.stores.map(store => ({
                store: CONFIG.STORES.find(s => s.id === store.store)?.name,
                price: store.price,
                rating: store.rating,
                delivery: store.delivery
            }))
        }))
    };
    
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `pricewise-${state.currentSearch}-${Date.now()}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    showNotification('Results exported successfully!', 'success');
}

// No Results Display
function showNoResults() {
    elements.resultsContainer.innerHTML = `
        <div class="no-results-section">
            <div class="no-results-content">
                <div class="no-results-icon">
                    <i class="fas fa-search-dollar"></i>
                </div>
                <h2>No products found for "${state.currentSearch}"</h2>
                <p class="no-results-message">
                    We couldn't find any products matching your search. Try these suggestions:
                </p>
                
                <div class="search-suggestions-box">
                    <h4><i class="fas fa-lightbulb"></i> Search Tips:</h4>
                    <ul>
                        <li>Check your spelling</li>
                        <li>Use more general keywords</li>
                        <li>Try different search terms</li>
                        <li>Browse by category</li>
                    </ul>
                </div>
                
                <div class="popular-searches">
                    <h4><i class="fas fa-fire"></i> Popular Searches:</h4>
                    <div class="popular-tags">
                        <button class="popular-tag" onclick="elements.searchInput.value='iPhone'; handleSearch()">
                            <i class="fas fa-mobile-alt"></i> iPhone
                        </button>
                        <button class="popular-tag" onclick="elements.searchInput.value='Shoes'; handleSearch()">
                            <i class="fas fa-shoe-prints"></i> Shoes
                        </button>
                        <button class="popular-tag" onclick="elements.searchInput.value='Laptop'; handleSearch()">
                            <i class="fas fa-laptop"></i> Laptop
                        </button>
                        <button class="popular-tag" onclick="elements.searchInput.value='Watch'; handleSearch()">
                            <i class="fas fa-clock"></i> Watch
                        </button>
                        <button class="popular-tag" onclick="elements.searchInput.value='Headphones'; handleSearch()">
                            <i class="fas fa-headphones"></i> Headphones
                        </button>
                    </div>
                </div>
                
                <div class="no-results-actions">
                    <button class="btn-clear-filters" onclick="clearFilters()">
                        <i class="fas fa-filter"></i>
                        Clear All Filters
                    </button>
                    <button class="btn-contact-support" onclick="showSupportModal()">
                        <i class="fas fa-question-circle"></i>
                        Need Help?
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Create Product Card HTML
function createProductCard(product) {
    const bestDeal = product.stores.reduce((best, current) => 
        current.price < best.price ? current : best
    );
    
    const storeInfo = CONFIG.STORES.find(s => s.id === bestDeal.store);
    const categoryInfo = CONFIG.CATEGORIES[product.category];
    
    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-header">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    <div class="product-badges">
                        <span class="badge best-price">
                            <i class="fas fa-tag"></i> Best Price
                        </span>
                        <span class="badge quality-score">
                            <i class="fas fa-star"></i> ${product.overallScore}/10
                        </span>
                        ${product.savingsPercentage > 20 ? `
                            <span class="badge savings-badge">
                                <i class="fas fa-piggy-bank"></i> Save ${product.savingsPercentage}%
                            </span>
                        ` : ''}
                    </div>
                </div>
                
                <div class="product-actions">
                    <button class="action-btn wishlist-btn" onclick="toggleWishlist(${product.id})" 
                            title="${state.wishlist.includes(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}">
                        <i class="fas ${state.wishlist.includes(product.id) ? 'fa-heart' : 'fa-heart-o'}"></i>
                    </button>
                    <button class="action-btn compare-btn" onclick="addToComparison(${product.id})" 
                            title="Add to Comparison">
                        <i class="fas fa-balance-scale"></i>
                    </button>
                    <button class="action-btn share-btn" onclick="shareProduct(${product.id})" 
                            title="Share Product">
                        <i class="fas fa-share-alt"></i>
                    </button>
                </div>
            </div>
            
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-meta">
                    <span class="category" style="color: ${categoryInfo.color};">
                        <i class="${categoryInfo.icon}"></i>
                        ${categoryInfo.name}
                    </span>
                    <span class="brand">
                        <i class="fas fa-tag"></i>
                        ${product.brand}
                    </span>
                </div>
                
                <p class="product-description">${product.description}</p>
                
                <!-- Best Deal Section -->
                <div class="best-deal-card">
                    <div class="deal-header">
                        <div class="store-info">
                            <div class="store-logo" style="background: ${storeInfo.color};">
                                <i class="${storeInfo.icon}"></i>
                            </div>
                            <div class="store-details">
                                <h4>Best Price on ${storeInfo.name}</h4>
                                <div class="store-rating">
                                    <i class="fas fa-star"></i>
                                    <span>${bestDeal.rating}/5 • ${bestDeal.reviews.toLocaleString()} reviews</span>
                                </div>
                            </div>
                        </div>
                        <div class="deal-price">
                            <div class="current-price">₹${bestDeal.price.toLocaleString()}</div>
                            ${bestDeal.originalPrice > bestDeal.price ? `
                                <div class="original-price">₹${bestDeal.originalPrice.toLocaleString()}</div>
                            ` : ''}
                        </div>
                    </div>
                    
                    <div class="deal-details">
                        <div class="detail-item">
                            <i class="fas fa-shipping-fast"></i>
                            <span>${bestDeal.delivery}</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-shield-alt"></i>
                            <span>${bestDeal.warranty}</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-undo"></i>
                            <span>${bestDeal.returnPolicy} return</span>
                        </div>
                    </div>
                    
                    <div class="deal-actions">
                        <button class="btn-view-deal" onclick="viewProduct('${bestDeal.store}', ${product.id})">
                            <i class="fas fa-external-link-alt"></i>
                            View Deal
                        </button>
                        <button class="btn-buy-now" onclick="buyNow('${bestDeal.store}', ${product.id})">
                            <i class="fas fa-shopping-cart"></i>
                            Buy Now
                        </button>
                        <button class="btn-set-alert" onclick="setPriceAlert(${product.id})">
                            <i class="fas fa-bell"></i>
                            Price Alert
                        </button>
                    </div>
                </div>
                
                <!-- Other Stores Comparison -->
                ${product.stores.length > 1 ? `
                    <div class="other-stores">
                        <h4><i class="fas fa-store"></i> Also Available On</h4>
                        <div class="store-comparison">
                            ${product.stores
                                .filter(store => store.store !== bestDeal.store)
                                .map(store => {
                                    const otherStore = CONFIG.STORES.find(s => s.id === store.store);
                                    const priceDiff = store.price - bestDeal.price;
                                    const diffPercent = ((priceDiff / bestDeal.price) * 100).toFixed(1);
                                    
                                    return `
                                        <div class="store-item">
                                            <div class="store-name">
                                                <i class="${otherStore.icon}" style="color: ${otherStore.color};"></i>
                                                <span>${otherStore.name}</span>
                                            </div>
                                            <div class="store-price">₹${store.price.toLocaleString()}</div>
                                            <div class="price-difference ${priceDiff > 0 ? 'higher' : 'lower'}">
                                                ${priceDiff > 0 ? '+' : ''}₹${Math.abs(priceDiff).toLocaleString()}
                                                <span>(${priceDiff > 0 ? '+' : ''}${diffPercent}%)</span>
                                            </div>
                                            <button class="btn-view-store" onclick="viewProduct('${store.store}', ${product.id})">
                                                View
                                            </button>
                                        </div>
                                    `;
                                }).join('')
                            }
                        </div>
                    </div>
                ` : ''}
                
                <!-- Quality Analysis -->
                <div class="quality-analysis">
                    <h4><i class="fas fa-chart-line"></i> Quality Analysis</h4>
                    <div class="quality-metrics">
                        ${product.stores.map(store => {
                            const storeConfig = CONFIG.STORES.find(s => s.id === store.store);
                            return `
                                <div class="quality-metric">
                                    <div class="metric-header">
                                        <span class="store-name" style="color: ${storeConfig.color};">
                                            <i class="${storeConfig.icon}"></i>
                                            ${storeConfig.name}
                                        </span>
                                        <span class="quality-score">${store.quality}/10</span>
                                    </div>
                                    <div class="quality-bar">
                                        <div class="quality-fill" style="width: ${store.quality * 10}%; background: ${storeConfig.color};"></div>
                                    </div>
                                    <div class="metric-details">
                                        <span><i class="fas fa-star"></i> ${store.rating}/5</span>
                                        <span><i class="fas fa-comment"></i> ${store.reviews.toLocaleString()}</span>
                                        <span><i class="fas fa-truck"></i> ${store.delivery}</span>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Add Event Listeners to Product Cards
function addProductCardListeners() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        // Hover effects
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
            card.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.3)';
            card.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            card.style.zIndex = '1';
        });
        
        // Click to view details
        card.addEventListener('click', (e) => {
            if (!e.target.closest('button')) {
                const productId = card.dataset.productId;
                viewProductDetails(productId);
            }
        });
    });
}

// Store Filter Management
function toggleStoreFilter(store) {
    const button = document.querySelector(`.store-btn[data-store="${store}"]`);
    
    if (store === 'all') {
        // If clicking "All", select only all
        elements.storeButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        state.selectedStores = ['all'];
    } else {
        // Remove "all" from selected stores
        const allBtn = document.querySelector('.store-btn[data-store="all"]');
        allBtn.classList.remove('active');
        state.selectedStores = state.selectedStores.filter(s => s !== 'all');
        
        // Toggle current store
        if (state.selectedStores.includes(store)) {
            state.selectedStores = state.selectedStores.filter(s => s !== store);
            button.classList.remove('active');
        } else {
            state.selectedStores.push(store);
            button.classList.add('active');
        }
        
        // If no stores selected, select "all"
        if (state.selectedStores.length === 0) {
            allBtn.classList.add('active');
            state.selectedStores = ['all'];
        }
    }
    
    // Update UI
    updateStoreFilters();
    
    // If we have search results, refresh them
    if (state.searchResults.length > 0) {
        handleSearch();
    }
}

function updateStoreFilters() {
    elements.storeButtons.forEach(button => {
        const store = button.dataset.store;
        const isActive = state.selectedStores.includes(store);
        const storeConfig = CONFIG.STORES.find(s => s.id === store);
        
        if (isActive) {
            button.classList.add('active');
            button.style.borderColor = storeConfig?.color || '#2563eb';
            button.style.background = `rgba(${hexToRgb(storeConfig?.color || '#2563eb')}, 0.1)`;
        } else {
            button.classList.remove('active');
            button.style.borderColor = 'var(--glass-border)';
            button.style.background = 'var(--glass-bg)';
        }
    });
}

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? 
        `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` 
        : '37, 99, 235';
}

// Category Selection
function selectCategory(category) {
    state.selectedCategory = category;
    
    // Update UI
    elements.categoryTags.forEach(tag => {
        const tagCategory = tag.dataset.category;
        const isActive = tagCategory === category;
        const categoryConfig = CONFIG.CATEGORIES[tagCategory];
        
        tag.classList.toggle('active', isActive);
        
        if (isActive) {
            tag.style.borderColor = categoryConfig.color;
            tag.style.color = categoryConfig.color;
            tag.style.background = `rgba(${hexToRgb(categoryConfig.color)}, 0.1)`;
        } else {
            tag.style.borderColor = 'var(--glass-border)';
            tag.style.color = 'var(--gray-light)';
            tag.style.background = 'var(--glass-bg)';
        }
    });
    
    // If we have search results, refresh them
    if (state.searchResults.length > 0) {
        handleSearch();
    }
}

// Sort Results
function sortResults(sortKey) {
    state.sortBy = sortKey;
    
    // Update UI
    elements.sortButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.sort === sortKey);
    });
    
    applySort();
    displayResults();
}

function applySort() {
    const sortOption = CONFIG.SORT_OPTIONS[state.sortBy];
    
    state.searchResults.sort((a, b) => {
        let valueA, valueB;
        
        switch(sortOption.key) {
            case 'price':
                valueA = a.bestPrice;
                valueB = b.bestPrice;
                break;
            case 'rating':
                valueA = a.stores.reduce((max, store) => Math.max(max, store.rating), 0);
                valueB = b.stores.reduce((max, store) => Math.max(max, store.rating), 0);
                break;
            case 'reviews':
                valueA = a.stores.reduce((max, store) => Math.max(max, store.reviews), 0);
                valueB = b.stores.reduce((max, store) => Math.max(max, store.reviews), 0);
                break;
            case 'quality':
                valueA = a.overallScore;
                valueB = b.overallScore;
                break;
            case 'deliveryDays':
                valueA = Math.min(...a.stores.map(s => parseInt(s.delivery) || 7));
                valueB = Math.min(...b.stores.map(s => parseInt(s.delivery) || 7));
                break;
            default:
                valueA = a.valueScore;
                valueB = b.valueScore;
        }
        
        return sortOption.order === 'asc' ? valueA - valueB : valueB - valueA;
    });
}

// Loading Screen Functions
function showLoadingScreen() {
    elements.loadingScreen.style.display = 'flex';
    elements.loadingScreen.style.opacity = '0';
    
    setTimeout(() => {
        elements.loadingScreen.style.opacity = '1';
        elements.loadingScreen.style.transition = 'opacity 0.3s ease';
    }, 10);
    
    // Start progress animation
    startLoadingAnimation();
}

function hideLoadingScreen() {
    elements.loadingScreen.style.opacity = '0';
    
    setTimeout(() => {
        elements.loadingScreen.style.display = 'none';
    }, 300);
}

function updateLoadingMessage(message) {
    if (elements.loadingMessage) {
        elements.loadingMessage.textContent = message;
    }
}

function updateProgressBar(percentage) {
    if (elements.progressBar) {
        elements.progressBar.style.width = `${percentage}%`;
    }
}

function startLoadingAnimation() {
    // Animate progress dots
    const dots = document.querySelectorAll('.progress-dots .dot');
    let activeIndex = 0;
    
    const interval = setInterval(() => {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[activeIndex].classList.add('active');
        activeIndex = (activeIndex + 1) % dots.length;
    }, 300);
    
    // Store interval for cleanup
    state.loadingInterval = interval;
}

// Theme Management
function setTheme(theme) {
    state.theme = theme;
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('pricewise_theme', theme);
    
    // Update toggle button icon
    const icon = elements.themeToggle?.querySelector('i');
    if (icon) {
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
    
    // Update CSS variables
    updateThemeColors(theme);
}

function toggleTheme() {
    const newTheme = state.theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    showNotification(`Switched to ${newTheme} theme`, 'info');
}

function updateThemeColors(theme) {
    const root = document.documentElement;
    
    if (theme === 'light') {
        root.style.setProperty('--dark', '#f8fafc');
        root.style.setProperty('--dark-light', '#e2e8f0');
        root.style.setProperty('--light', '#0f172a');
        root.style.setProperty('--gray-light', '#475569');
        root.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.8)');
        root.style.setProperty('--glass-border', 'rgba(0, 0, 0, 0.1)');
    } else {
        root.style.setProperty('--dark', '#0f172a');
        root.style.setProperty('--dark-light', '#1e293b');
        root.style.setProperty('--light', '#f8fafc');
        root.style.setProperty('--gray-light', '#cbd5e1');
        root.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.05)');
        root.style.setProperty('--glass-border', 'rgba(255, 255, 255, 0.1)');
    }
}

function checkSavedTheme() {
    const savedTheme = localStorage.getItem('pricewise_theme');
    if (savedTheme) {
        setTheme(savedTheme);
    }
}

// Search History Management
function addToSearchHistory(query) {
    // Remove if already exists
    const index = state.searchHistory.indexOf(query);
    if (index > -1) {
        state.searchHistory.splice(index, 1);
    }
    
    // Add to beginning
    state.searchHistory.unshift(query);
    
    // Keep only last 10 searches
    if (state.searchHistory.length > 10) {
        state.searchHistory.pop();
    }
    
    // Save to localStorage
    localStorage.setItem('searchHistory', JSON.stringify(state.searchHistory));
}

function loadRecentSearches() {
    // Could be used to show recent searches dropdown
}

function showSearchSuggestions() {
    if (state.searchHistory.length === 0) return;
    
    const suggestions = document.createElement('div');
    suggestions.className = 'search-suggestions';
    suggestions.innerHTML = `
        <div class="suggestions-header">
            <i class="fas fa-history"></i>
            Recent Searches
        </div>
        ${state.searchHistory.slice(0, 5).map(term => `
            <div class="suggestion-item" onclick="selectSuggestion('${term}')">
                <i class="fas fa-search"></i>
                <span>${term}</span>
            </div>
        `).join('')}
    `;
    
    const searchBox = elements.searchInput.parentElement;
    searchBox.appendChild(suggestions);
}

function hideSearchSuggestions() {
    const suggestions = document.querySelector('.search-suggestions');
    if (suggestions) {
        setTimeout(() => {
            suggestions.remove();
        }, 200);
    }
}

function selectSuggestion(term) {
    elements.searchInput.value = term;
    handleSearch();
}

// Product Actions
function toggleWishlist(productId) {
    const index = state.wishlist.indexOf(productId);
    
    if (index > -1) {
        state.wishlist.splice(index, 1);
        showNotification('Removed from wishlist', 'info');
    } else {
        state.wishlist.push(productId);
        showNotification('Added to wishlist', 'success');
    }
    
    localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
    displayResults(); // Refresh to update heart icon
}

function addToComparison(productId) {
    if (state.comparison.length >= 4) {
        showNotification('Maximum 4 products can be compared', 'warning');
        return;
    }
    
    if (!state.comparison.includes(productId)) {
        state.comparison.push(productId);
        localStorage.setItem('comparison', JSON.stringify(state.comparison));
        showNotification('Added to comparison', 'success');
    } else {
        showNotification('Already in comparison', 'info');
    }
}

function setPriceAlert(productId) {
    const product = state.searchResults.find(p => p.id === productId);
    if (!product) return;
    
    // Show price alert modal
    showPriceAlertModal(product);
}

function viewProduct(storeId, productId) {
    const product = state.searchResults.find(p => p.id === productId);
    const store = product?.stores.find(s => s.store === storeId);
    
    if (product && store) {
        showNotification(`Opening ${CONFIG.STORES.find(s => s.id === storeId).name}...`, 'info');
        
        // In real app, this would redirect to the product page
        setTimeout(() => {
            window.open(store.url || '#', '_blank');
        }, 500);
    }
}

function buyNow(storeId, productId) {
    const product = state.searchResults.find(p => p.id === productId);
    const store = product?.stores.find(s => s.store === storeId);
    
    if (product && store) {
        showNotification(`Redirecting to checkout on ${CONFIG.STORES.find(s => s.id === storeId).name}...`, 'success');
        
        // In real app, this would redirect to checkout
        setTimeout(() => {
            window.open(store.url || '#', '_blank');
        }, 500);
    }
}

function viewProductDetails(productId) {
    const product = state.searchResults.find(p => p.id === productId);
    if (!product) return;
    
    // Show product details modal
    showProductModal(product);
}

// Modal Functions
function showProductModal(product) {
    // Create modal HTML
    const modalHTML = `
        <div class="modal-overlay">
            <div class="modal-container">
                <div class="modal-header">
                    <h3>${product.name}</h3>
                    <button class="modal-close" onclick="closeModal()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-content">
                    <!-- Detailed product view -->
                </div>
            </div>
        </div>
    `;
    
    // Add modal to page
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function showPriceAlertModal(product) {
    const modalHTML = `
        <div class="modal-overlay">
            <div class="modal-container">
                <div class="modal-header">
                    <h3><i class="fas fa-bell"></i> Set Price Alert</h3>
                    <button class="modal-close" onclick="closeModal()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-content">
                    <div class="price-alert-form">
                        <div class="current-price-info">
                            <span>Current Best Price:</span>
                            <span class="price">₹${product.bestPrice.toLocaleString()}</span>
                        </div>
                        
                        <div class="alert-options">
                            <label>
                                <input type="radio" name="alertType" value="percentage" checked>
                                When price drops by
                                <input type="number" min="1" max="50" value="10" class="percentage-input">%
                            </label>
                            <label>
                                <input type="radio" name="alertType" value="amount">
                                When price drops below
                                <input type="number" value="${product.bestPrice - 1000}" class="amount-input">
                            </label>
                        </div>
                        
                        <div class="email-input">
                            <input type="email" placeholder="Your email address" value="">
                        </div>
                        
                        <button class="btn-set-alert" onclick="confirmPriceAlert(${product.id})">
                            <i class="fas fa-bell"></i>
                            Set Price Alert
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function closeModal() {
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
        modal.remove();
    }
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    // Create new notification
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    const icons = {
        info: 'fas fa-info-circle',
        success: 'fas fa-check-circle',
        warning: 'fas fa-exclamation-triangle',
        error: 'fas fa-times-circle'
    };
    
    notification.innerHTML = `
        <div class="notification-icon">
            <i class="${icons[type]}"></i>
        </div>
        <div class="notification-content">
            ${message}
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Voice Search
function handleVoiceSearch() {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
        showNotification('Voice search not supported in your browser', 'warning');
        return;
    }
    
    showNotification('Listening... Speak now', 'info');
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.lang = 'en-IN';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        elements.searchInput.value = transcript;
        showNotification(`Searching for: "${transcript}"`, 'success');
        handleSearch();
    };
    
    recognition.onerror = (event) => {
        showNotification('Voice recognition error: ' + event.error, 'error');
    };
    
    recognition.start();
}

// Camera/Image Search
function handleCameraSearch() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.capture = 'environment';
    
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
            showNotification('Analyzing image...', 'info');
            
            // In real app, upload to image recognition API
            setTimeout(() => {
                // Mock image recognition result
                const recognizedProducts = [
                    'iPhone 15 Pro',
                    'Nike Air Max 270',
                    'Samsung TV'
                ];
                
                const randomProduct = recognizedProducts[Math.floor(Math.random() * recognizedProducts.length)];
                elements.searchInput.value = randomProduct;
                showNotification(`Found: ${randomProduct}`, 'success');
                handleSearch();
            }, 2000);
        }
    };
    
    input.click();
}

// Stats Counters Animation
function initStatsCounters() {
    const stats = document.querySelectorAll('.stat-number[data-count]');
    
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const suffix = stat.textContent.replace(/\d+/g, '');
        let current = 0;
        const increment = target / 100;
        const duration = 2000;
        const step = duration / 100;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current) + (suffix || '');
        }, step);
    });
}

// Share Results
function shareResults() {
    if (navigator.share) {
        navigator.share({
            title: `Price comparison for: ${state.currentSearch}`,
            text: `Check out these price comparisons I found on PriceWise!`,
            url: window.location.href
        });
    } else {
        // Fallback: Copy to clipboard
        navigator.clipboard.writeText(window.location.href)
            .then(() => showNotification('Link copied to clipboard!', 'success'))
            .catch(() => showNotification('Failed to copy link', 'error'));
    }
}

function shareProduct(productId) {
    const product = state.searchResults.find(p => p.id === productId);
    if (!product) return;
    
    const text = `Check out ${product.name} on PriceWise! Best price: ₹${product.bestPrice.toLocaleString()}`;
    
    if (navigator.share) {
        navigator.share({
            title: product.name,
            text: text,
            url: window.location.origin + '?product=' + productId
        });
    } else {
        navigator.clipboard.writeText(text)
            .then(() => showNotification('Product details copied!', 'success'))
            .catch(() => showNotification('Failed to copy', 'error'));
    }
}

// Price Trends
function showPriceTrends() {
    if (state.currentSearch) {
        // Show price history chart for current search
        showPriceChartModal();
    } else {
        showNotification('Search for a product first to see price trends', 'info');
    }
}

// Today's Deals
function showTodayDeals() {
    elements.searchInput.value = 'Today Deals';
    handleSearch();
}

// Filters Modal
function showFiltersModal() {
    const modalHTML = `
        <div class="modal-overlay">
            <div class="modal-container wide">
                <div class="modal-header">
                    <h3><i class="fas fa-sliders-h"></i> Filters</h3>
                    <button class="modal-close" onclick="closeModal()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-content">
                    <div class="filter-section">
                        <h4>Price Range</h4>
                        <div class="price-ranges">
                            ${CONFIG.PRICE_RANGES.map(range => `
                                <label class="price-range-option">
                                    <input type="radio" name="priceRange" 
                                           value="${range.label}"
                                           ${state.selectedPriceRange === range.label ? 'checked' : ''}
                                           onchange="selectPriceRange('${range.label}')">
                                    <span>${range.label}</span>
                                </label>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="filter-section">
                        <h4>Stores</h4>
                        <div class="store-filters-grid">
                            ${CONFIG.STORES.map(store => `
                                <label class="store-filter-option">
                                    <input type="checkbox" 
                                           value="${store.id}"
                                           ${state.selectedStores.includes(store.id) || state.selectedStores.includes('all') ? 'checked' : ''}
                                           onchange="toggleStoreFilter('${store.id}')">
                                    <div class="store-icon" style="background: ${store.color};">
                                        <i class="${store.icon}"></i>
                                    </div>
                                    <span>${store.name}</span>
                                </label>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="filter-actions">
                        <button class="btn-clear-filters" onclick="clearFilters()">
                            <i class="fas fa-times"></i>
                            Clear All
                        </button>
                        <button class="btn-apply-filters" onclick="applyFilters()">
                            <i class="fas fa-check"></i>
                            Apply Filters
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function selectPriceRange(rangeLabel) {
    state.selectedPriceRange = rangeLabel;
}

function clearFilters() {
    state.selectedPriceRange = null;
    state.selectedStores = ['all'];
    state.selectedCategory = null;
    
    // Update UI
    updateStoreFilters();
    closeModal();
    
    // Refresh results if we have any
    if (state.searchResults.length > 0) {
        handleSearch();
    }
}

function applyFilters() {
    closeModal();
    
    // Refresh results
    if (state.searchResults.length > 0) {
        handleSearch();
    }
}

// No Results Display
function showNoResults() {
    elements.resultsContainer.innerHTML = `
        <div class="no-results">
            <div class="no-results-icon">
                <i class="fas fa-search-dollar"></i>
            </div>
            <h3>No products found for "${state.currentSearch}"</h3>
            <p>Try these suggestions:</p>
            <div class="suggestions">
                <button class="suggestion-btn" onclick="elements.searchInput.value='iPhone'; handleSearch()">
                    <i class="fas fa-mobile-alt"></i> Search "iPhone"
                </button>
                <button class="suggestion-btn" onclick="elements.searchInput.value='Shoes'; handleSearch()">
                    <i class="fas fa-shoe-prints"></i> Search "Shoes"
                </button>
                <button class="suggestion-btn" onclick="elements.searchInput.value='TV'; handleSearch()">
                    <i class="fas fa-tv"></i> Search "TV"
                </button>
            </div>
            <button class="btn-clear-filters" onclick="clearFilters()">
                <i class="fas fa-filter"></i>
                Clear Filters
            </button>
        </div>
    `;
}

// Fallback Results
function showFallbackResults() {
    elements.resultsContainer.innerHTML = `
        <div class="fallback-results">
            <div class="fallback-icon">
                <i class="fas fa-wifi-slash"></i>
            </div>
            <h3>Offline Mode</h3>
            <p>Showing sample results. Connect to the internet for real-time prices.</p>
            
            <div class="sample-results">
                <!-- Sample product cards would go here -->
            </div>
        </div>
    `;
}

// Utility Functions
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function playClickSound() {
    // Simple click sound simulation
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
}

function updateBrowserUrl(query) {
    const url = new URL(window.location);
    url.searchParams.set('q', encodeURIComponent(query));
    window.history.pushState({}, '', url);
}

function handleResize() {
    // Handle responsive adjustments
    if (window.innerWidth < 768) {
        // Mobile adjustments
        document.querySelectorAll('.product-card').forEach(card => {
            card.style.margin = '10px';
        });
    }
}

// Global functions for HTML onclick handlers
window.toggleWishlist = toggleWishlist;
window.addToComparison = addToComparison;
window.setPriceAlert = setPriceAlert;
window.viewProduct = viewProduct;
window.buyNow = buyNow;
window.shareProduct = shareProduct;
window.viewProductDetails = viewProductDetails;
window.closeModal = closeModal;
window.confirmPriceAlert = function(productId) {
    showNotification('Price alert set successfully!', 'success');
    closeModal();
};
window.selectSuggestion = selectSuggestion;
window.clearFilters = clearFilters;
window.applyFilters = applyFilters;
window.compareAllProducts = function() {
    showNotification('Comparing selected products...', 'info');
    // Implementation for comparing all products
};
window.shareResults = shareResults;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Handle browser back/forward
window.addEventListener('popstate', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');
    if (query) {
        elements.searchInput.value = decodeURIComponent(query);
        handleSearch();
    }
});

// Add CSS for notifications and modals
const style = document.createElement('style');
style.textContent = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--glass-bg);
        backdrop-filter: blur(20px);
        border: 1px solid var(--glass-border);
        border-radius: 12px;
        padding: 15px 20px;
        display: flex;
        align-items: center;
        gap: 15px;
        z-index: 9999;
        animation: slideIn 0.3s ease;
        max-width: 400px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }
    
    .notification.info {
        border-left: 4px solid var(--primary);
    }
    
    .notification.success {
        border-left: 4px solid var(--success);
    }
    
    .notification.warning {
        border-left: 4px solid var(--warning);
    }
    
    .notification.error {
        border-left: 4px solid var(--danger);
    }
    
    .notification-icon {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
    }
    
    .notification-content {
        flex: 1;
        color: var(--light);
        font-size: 0.9rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: var(--gray);
        cursor: pointer;
        padding: 5px;
        border-radius: 6px;
        transition: all 0.3s ease;
    }
    
    .notification-close:hover {
        background: rgba(255, 255, 255, 0.1);
        color: var(--light);
    }
    
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(10px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    }
    
    .modal-container {
        background: var(--dark);
        border: 1px solid var(--glass-border);
        border-radius: 20px;
        max-width: 500px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        animation: slideUp 0.3s ease;
    }
    
    .modal-container.wide {
        max-width: 800px;
    }
    
    .modal-header {
        padding: 20px;
        border-bottom: 1px solid var(--glass-border);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .modal-header h3 {
        margin: 0;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .modal-close {
        background: none;
        border: none;
        color: var(--gray);
        cursor: pointer;
        padding: 8px;
        border-radius: 8px;
        transition: all 0.3s ease;
    }
    
    .modal-close:hover {
        background: rgba(255, 255, 255, 0.1);
        color: var(--light);
    }
    
    .modal-content {
        padding: 20px;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes slideUp {
        from {
            transform: translateY(50px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .glow {
        box-shadow: 0 0 20px rgba(37, 99, 235, 0.5);
    }
    
    .search-suggestions {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--dark);
        border: 1px solid var(--glass-border);
        border-radius: 12px;
        margin-top: 5px;
        overflow: hidden;
        z-index: 1000;
        animation: fadeIn 0.2s ease;
    }
    
    .suggestions-header {
        padding: 10px 15px;
        color: var(--gray);
        font-size: 0.9rem;
        display: flex;
        align-items: center;
        gap: 10px;
        border-bottom: 1px solid var(--glass-border);
    }
    
    .suggestion-item {
        padding: 12px 15px;
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .suggestion-item:hover {
        background: rgba(255, 255, 255, 0.05);
    }
    
    .no-results, .fallback-results {
        text-align: center;
        padding: 60px 20px;
    }
    
    .no-results-icon, .fallback-icon {
        width: 120px;
        height: 120px;
        background: var(--gradient-primary);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
        color: white;
        margin: 0 auto 30px;
    }
    
    .suggestions {
        display: flex;
        gap: 10px;
        justify-content: center;
        margin: 30px 0;
        flex-wrap: wrap;
    }
    
    .suggestion-btn {
        padding: 10px 20px;
        background: var(--glass-bg);
        border: 1px solid var(--glass-border);
        border-radius: 8px;
        color: var(--gray-light);
        display: flex;
        align-items: center;
        gap: 8px;
        transition: all 0.3s ease;
    }
    
    .suggestion-btn:hover {
        background: var(--primary);
        color: white;
    }
`;
document.head.appendChild(style);