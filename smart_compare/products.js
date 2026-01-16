// Complete Product Database for Price Comparison
const PRODUCTS_DB = {
    // Mock database - In production, this would be from an API
    products: [
        // Electronics Category
        {
            id: 1001,
            name: "iPhone 15 Pro Max",
            category: "electronics",
            brand: "Apple",
            description: "Latest iPhone with A17 Pro chip, titanium design, and 48MP camera",
            tags: ["smartphone", "apple", "premium", "5g"],
            specifications: {
                "Display": "6.7\" Super Retina XDR",
                "Processor": "A17 Pro",
                "Storage": "256GB",
                "Camera": "48MP Main + 12MP Ultra Wide + 12MP Telephoto",
                "Battery": "4441 mAh",
                "OS": "iOS 17"
            },
            stores: [
                {
                    store: "amazon",
                    price: 159999,
                    originalPrice: 179999,
                    rating: 4.8,
                    reviews: 2450,
                    delivery: "Tomorrow",
                    deliveryDays: 1,
                    quality: 9.5,
                    warranty: "1 year Apple warranty",
                    returnPolicy: "10 days return",
                    shipping: "Free delivery",
                    url: "#",
                    seller: "Appario Retail",
                    stock: "In stock",
                    features: ["Official Apple warranty", "Free delivery", "EMI available"]
                },
                {
                    store: "flipkart",
                    price: 154999,
                    originalPrice: 179999,
                    rating: 4.7,
                    reviews: 1890,
                    delivery: "2 days",
                    deliveryDays: 2,
                    quality: 9.3,
                    warranty: "1 year Apple warranty",
                    returnPolicy: "7 days return",
                    shipping: "Free delivery",
                    url: "#",
                    seller: "SuperComNet",
                    stock: "In stock",
                    features: ["No cost EMI", "Exchange offer", "Bank offers"]
                },
                {
                    store: "tatacliq",
                    price: 162999,
                    originalPrice: 179999,
                    rating: 4.6,
                    reviews: 890,
                    delivery: "3-4 days",
                    deliveryDays: 4,
                    quality: 9.4,
                    warranty: "1 year Apple warranty",
                    returnPolicy: "14 days return",
                    shipping: "₹99 shipping",
                    url: "#",
                    seller: "Tata CLiQ Luxury",
                    stock: "In stock",
                    features: ["Assured delivery", "Luxury packaging", "Gift wrap available"]
                }
            ],
            image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=400&q=80",
            images: [
                "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1695048133054-6e9a0ff3e4b1?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1694897733217-82c8d8c7b6c8?auto=format&fit=crop&w=400&q=80"
            ],
            lastUpdated: "2024-01-15"
        },
        
        {
            id: 1002,
            name: "Samsung Galaxy S23 Ultra",
            category: "electronics",
            brand: "Samsung",
            description: "Premium Android smartphone with S Pen, 200MP camera, and Snapdragon 8 Gen 2",
            tags: ["android", "samsung", "flagship", "spen"],
            specifications: {
                "Display": "6.8\" Dynamic AMOLED 2X",
                "Processor": "Snapdragon 8 Gen 2",
                "Storage": "256GB",
                "Camera": "200MP Main + 12MP Ultra Wide + 10MP Telephoto",
                "Battery": "5000 mAh",
                "OS": "Android 13"
            },
            stores: [
                {
                    store: "amazon",
                    price: 124999,
                    originalPrice: 139999,
                    rating: 4.7,
                    reviews: 1890,
                    delivery: "Tomorrow",
                    deliveryDays: 1,
                    quality: 9.2,
                    warranty: "2 years Samsung warranty",
                    returnPolicy: "10 days return",
                    shipping: "Free delivery",
                    url: "#",
                    seller: "Cloudtail India",
                    stock: "In stock",
                    features: ["Official warranty", "Free delivery", "EMI available"]
                },
                {
                    store: "flipkart",
                    price: 119999,
                    originalPrice: 139999,
                    rating: 4.8,
                    reviews: 2345,
                    delivery: "2 days",
                    deliveryDays: 2,
                    quality: 9.1,
                    warranty: "2 years Samsung warranty",
                    returnPolicy: "7 days return",
                    shipping: "Free delivery",
                    url: "#",
                    seller: "RetailNet",
                    stock: "In stock",
                    features: ["No cost EMI", "Exchange offer", "Bank offers"]
                }
            ],
            image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=400&q=80",
            images: [
                "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1610945266159-f23a6c8f67b5?auto=format&fit=crop&w=400&q=80"
            ],
            lastUpdated: "2024-01-14"
        },
        
        {
            id: 1003,
            name: "OnePlus 11 5G",
            category: "electronics",
            brand: "OnePlus",
            description: "Flagship killer with Hasselblad camera and 100W fast charging",
            tags: ["android", "oneplus", "fast-charging", "hasselblad"],
            specifications: {
                "Display": "6.7\" Fluid AMOLED",
                "Processor": "Snapdragon 8 Gen 2",
                "Storage": "256GB",
                "Camera": "50MP Main + 48MP Ultra Wide + 32MP Telephoto",
                "Battery": "5000 mAh",
                "Charging": "100W SuperVOOC"
            },
            stores: [
                {
                    store: "amazon",
                    price: 61999,
                    originalPrice: 69999,
                    rating: 4.6,
                    reviews: 3450,
                    delivery: "1-2 days",
                    deliveryDays: 2,
                    quality: 8.8,
                    warranty: "2 years OnePlus warranty",
                    returnPolicy: "10 days return",
                    shipping: "Free delivery",
                    url: "#",
                    seller: "Cloudtail India",
                    stock: "In stock",
                    features: ["100W charger included", "Hasselblad camera", "Alert Slider"]
                },
                {
                    store: "flipkart",
                    price: 59999,
                    originalPrice: 69999,
                    rating: 4.7,
                    reviews: 2890,
                    delivery: "2-3 days",
                    deliveryDays: 3,
                    quality: 8.7,
                    warranty: "2 years OnePlus warranty",
                    returnPolicy: "7 days return",
                    shipping: "Free delivery",
                    url: "#",
                    seller: "SuperComNet",
                    stock: "In stock",
                    features: ["No cost EMI", "Exchange offer", "Bank offers"]
                }
            ],
            image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=400&q=80",
            images: [
                "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1598327105854-c8674faddf74?auto=format&fit=crop&w=400&q=80"
            ],
            lastUpdated: "2024-01-13"
        },
        
        // Fashion Category
        {
            id: 2001,
            name: "Nike Air Max 270",
            category: "fashion",
            brand: "Nike",
            description: "Men's running shoes with largest Air Max unit for all-day comfort",
            tags: ["shoes", "sports", "running", "men"],
            specifications: {
                "Material": "Mesh and Synthetic upper",
                "Color": "Black/White/Red",
                "Size": "US 7-12",
                "Type": "Running Shoes",
                "Gender": "Men",
                "Closure": "Lace-up"
            },
            stores: [
                {
                    store: "amazon",
                    price: 12999,
                    originalPrice: 14999,
                    rating: 4.5,
                    reviews: 1250,
                    delivery: "3-4 days",
                    deliveryDays: 4,
                    quality: 8.5,
                    warranty: "30 days",
                    returnPolicy: "30 days return",
                    shipping: "Free delivery",
                    url: "#",
                    seller: "Nike Official",
                    stock: "In stock",
                    features: ["Original Nike product", "Free delivery", "Size exchange"]
                },
                {
                    store: "myntra",
                    price: 11999,
                    originalPrice: 14999,
                    rating: 4.7,
                    reviews: 3420,
                    delivery: "2-3 days",
                    deliveryDays: 3,
                    quality: 8.8,
                    warranty: "30 days",
                    returnPolicy: "30 days return",
                    shipping: "Free delivery",
                    url: "#",
                    seller: "Myntra Fashion",
                    stock: "In stock",
                    features: ["Authentic product", "Try & buy", "Easy returns"]
                },
                {
                    store: "ajio",
                    price: 12499,
                    originalPrice: 14999,
                    rating: 4.4,
                    reviews: 890,
                    delivery: "4-5 days",
                    deliveryDays: 5,
                    quality: 8.3,
                    warranty: "30 days",
                    returnPolicy: "15 days return",
                    shipping: "Free delivery",
                    url: "#",
                    seller: "Ajio Luxury",
                    stock: "In stock",
                    features: ["Premium packaging", "Gift options", "Style advice"]
                }
            ],
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80",
            images: [
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=400&q=80"
            ],
            lastUpdated: "2024-01-12"
        },
        
        {
            id: 2002,
            name: "Levi's 501 Original Fit Jeans",
            category: "fashion",
            brand: "Levi's",
            description: "Classic straight fit jeans in rigid dragon wash",
            tags: ["jeans", "denim", "men", "casual"],
            specifications: {
                "Material": "100% Cotton denim",
                "Fit": "Original Straight",
                "Color": "Mid Blue",
                "Size": "28-42",
                "Wash": "Rigid Dragon",
                "Style": "Five-pocket"
            },
            stores: [
                {
                    store: "myntra",
                    price: 3999,
                    originalPrice: 4999,
                    rating: 4.6,
                    reviews: 2890,
                    delivery: "2-3 days",
                    deliveryDays: 3,
                    quality: 8.7,
                    warranty: "None",
                    returnPolicy: "30 days return",
                    shipping: "Free delivery",
                    url: "#",
                    seller: "Levi's Official",
                    stock: "In stock",
                    features: ["Original Levi's", "Size exchange", "Quality check"]
                },
                {
                    store: "ajio",
                    price: 3799,
                    originalPrice: 4999,
                    rating: 4.5,
                    reviews: 1560,
                    delivery: "3-4 days",
                    deliveryDays: 4,
                    quality: 8.6,
                    warranty: "None",
                    returnPolicy: "15 days return",
                    shipping: "Free delivery",
                    url: "#",
                    seller: "Ajio Premium",
                    stock: "In stock",
                    features: ["Authentic product", "Premium packaging", "Style curation"]
                },
                {
                    store: "amazon",
                    price: 4199,
                    originalPrice: 4999,
                    rating: 4.4,
                    reviews: 890,
                    delivery: "4-5 days",
                    deliveryDays: 5,
                    quality: 8.4,
                    warranty: "None",
                    returnPolicy: "7 days return",
                    shipping: "Free delivery",
                    url: "#",
                    seller: "Appario Retail",
                    stock: "In stock",
                    features: ["Genuine product", "Easy returns", "Customer support"]
                }
            ],
            image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=400&q=80",
            images: [
                "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=400&q=80"
            ],
            lastUpdated: "2024-01-11"
        },
        
        {
            id: 2003,
            name: "Allen Solly Men's Formal Shirt",
            category: "fashion",
            brand: "Allen Solly",
            description: "Slim fit formal shirt in premium cotton",
            tags: ["shirt", "formal", "office", "men"],
            specifications: {
                "Material": "100% Cotton",
                "Fit": "Slim Fit",
                "Color": "Light Blue",
                "Size": "S-XXL",
                "Style": "Formal",
                "Care": "Machine wash"
            },
            stores: [
                {
                    store: "myntra",
                    price: 1299,
                    originalPrice: 1999,
                    rating: 4.3,
                    reviews: 1890,
                    delivery: "2-3 days",
                    deliveryDays: 3,
                    quality: 8.2,
                    warranty: "None",
                    returnPolicy: "30 days return",
                    shipping: "Free delivery",
                    url: "#",
                    seller: "Allen Solly Official",
                    stock: "In stock",
                    features: ["Original brand", "Size guide", "Easy returns"]
                },
                {
                    store: "ajio",
                    price: 1199,
                    originalPrice: 1999,
                    rating: 4.4,
                    reviews: 1340,
                    delivery: "3-4 days",
                    deliveryDays: 4,
                    quality: 8.1,
                    warranty: "None",
                    returnPolicy: "15 days return",
                    shipping: "Free delivery",
                    url: "#",
                    seller: "Ajio Fashion",
                    stock: "In stock",
                    features: ["Premium quality", "Style advice", "Gift wrap"]
                },
                {
                    store: "meesho",
                    price: 899,
                    originalPrice: 1999,
                    rating: 4.0,
                    reviews: 4560,
                    delivery: "5-7 days",
                    deliveryDays: 7,
                    quality: 7.5,
                    warranty: "None",
                    returnPolicy: "7 days return",
                    shipping: "Free delivery",
                    url: "#",
                    seller: "Trendy Styles",
                    stock: "In stock",
                    features: ["Lowest price", "Budget friendly", "COD available"]
                }
            ],
            image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=400&q=80",
            images: [
                "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1598032895397-b9472444bf93?auto=format&fit=crop&w=400&q=80"
            ],
            lastUpdated: "2024-01-10"
        },
        
        // Home & Kitchen Category
        {
            id: 3001,
            name: "Philips Air Fryer XXL",
            category: "home",
            brand: "Philips",
            description: "Healthy cooking with up to 90% less fat using Rapid Air Technology",
            tags: ["kitchen", "appliance", "healthy", "fryer"],
            specifications: {
                "Capacity": "1.4kg",
                "Power": "2225W",
                "Technology": "Rapid Air",
                "Features": "Digital touch, 7 presets",
                "Color": "Black",
                "Warranty": "2 years"
            },
            stores: [
                {
                    store: "amazon",
                    price: 12999,
                    originalPrice: 16999,
                    rating: 4.5,
                    reviews: 3450,
                    delivery: "Tomorrow",
                    deliveryDays: 1,
                    quality: 8.7,
                    warranty: "2 years Philips warranty",
                    returnPolicy: "10 days return",
                    shipping: "Free delivery",
                    url: "#",
                    seller: "Cloudtail India",
                    stock: "In stock",
                    features: ["Original Philips", "Free delivery", "Installation available"]
                },
                {
                    store: "flipkart",
                    price: 12499,
                    originalPrice: 16999,
                    rating: 4.6,
                    reviews: 2890,
                    delivery: "2 days",
                    deliveryDays: 2,
                    quality: 8.6,
                    warranty: "2 years Philips warranty",
                    returnPolicy: "7 days return",
                    shipping: "Free delivery",
                    url: "#",
                    seller: "RetailNet",
                    stock: "In stock",
                    features: ["No cost EMI", "Exchange offer", "Bank offers"]
                },
                {
                    store: "tatacliq",
                    price: 13499,
                    originalPrice: 16999,
                    rating: 4.4,
                    reviews: 780,
                    delivery: "3-4 days",
                    deliveryDays: 4,
                    quality: 8.5,
                    warranty: "2 years Philips warranty",
                    returnPolicy: "14 days return",
                    shipping: "₹99 shipping",
                    url: "#",
                    seller: "Tata CLiQ Home",
                    stock: "In stock",
                    features: ["Assured quality", "Extended warranty", "Installation"]
                }
            ],
            image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=400&q=80",
            images: [
                "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1551698618-2c5c7f5b1b3a?auto=format&fit=crop&w=400&q=80"
            ],
            lastUpdated: "2024-01-09"
        },
        
        {
            id: 3002,
            name: "Milton Thermosteel Flask 1 Liter",
            category: "home",
            brand: "Milton",
            description: "Double wall vacuum insulated flask keeps drinks hot/cold for 24 hours",
            tags: ["flask", "thermos", "kitchen", "travel"],
            specifications: {
                "Capacity": "1 Liter",
                "Material": "Stainless Steel",
                "Insulation": "24 hours hot/cold",
                "Features": "Leak proof, rust proof",
                "Color": "Silver",
                "Warranty": "1 year"
            },
            stores: [
                {
                    store: "amazon",
                    price: 899,
                    originalPrice: 1299,
                    rating: 4.4,
                    reviews: 4560,
                    delivery: "1-2 days",
                    deliveryDays: 2,
                    quality: 8.3,
                    warranty: "1 year warranty",
                    returnPolicy: "10 days return",
                    shipping: "Free delivery",
                    url: "#",
                    seller: "Cloudtail India",
                    stock: "In stock",
                    features: ["Original Milton", "Free delivery", "Gift option"]
                },
                {
                    store: "flipkart",
                    price: 849,
                    originalPrice: 1299,
                    rating: 4.5,
                    reviews: 3890,
                    delivery: "2-3 days",
                    deliveryDays: 3,
                    quality: 8.2,
                    warranty: "1 year warranty",
                    returnPolicy: "7 days return",
                    shipping: "Free delivery",
                    url: "#",
                    seller: "RetailNet",
                    stock: "In stock",
                    features: ["No cost EMI", "Best price", "COD available"]
                },
                {
                    store: "meesho",
                    price: 699,
                    originalPrice: 1299,
                    rating: 4.1,
                    reviews: 5670,
                    delivery: "5-7 days",
                    deliveryDays: 7,
                    quality: 7.8,
                    warranty: "6 months warranty",
                    returnPolicy: "7 days return",
                    shipping: "Free delivery",
                    url: "#",
                    seller: "Home Essentials",
                    stock: "In stock",
                    features: ["Lowest price", "Budget friendly", "COD available"]
                }
            ],
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80",
            images: [
                "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80"
            ],
            lastUpdated: "2024-01-08"
        },
        
        // Beauty Category
        {
            id: 4001,
            name: "Lakmé Absolute Matte Melt Liquid Lip Color",
            category: "beauty",
            brand: "Lakmé",
            description: "Weightless matte liquid lipstick with 12-hour stay and transfer-proof formula",
            tags: ["lipstick", "makeup", "beauty", "women"],
            specifications: {
                "Shade": "Red Carpet",
                "Formula": "Matte Liquid",
                "Stay": "12 hours",
                "Features": "Transfer proof, smudge proof",
                "Net Weight": "6ml",
                "Finish": "Matte"
            },
            stores: [
                {
                    store: "nykaa",
                    price: 699,
                    originalPrice: 899,
                    rating: 4.5,
                    reviews: 7890,
                    delivery: "1-2 days",
                    deliveryDays: 2,
                    quality: 8.6,
                    warranty: "None",
                    returnPolicy: "10 days return",
                    shipping: "Free delivery",
                    url: "#",
                    seller: "Nykaa Retail",
                    stock: "In stock",
                    features: ["Original Lakmé", "Beauty advice", "Free samples"]
                },
                {
                    store: "amazon",
                    price: 649,
                    originalPrice: 899,
                    rating: 4.4,
                    reviews: 4560,
                    delivery: "2-3 days",
                    deliveryDays: 3,
                    quality: 8.4,
                    warranty: "None",
                    returnPolicy: "7 days return",
                    shipping: "Free delivery",
                    url: "#",
                    seller: "Cloudtail India",
                    stock: "In stock",
                    features: ["Authentic product", "COD available", "Gift option"]
                },
                {
                    store: "flipkart",
                    price: 599,
                    originalPrice: 899,
                    rating: 4.3,
                    reviews: 3450,
                    delivery: "3-4 days",
                    deliveryDays: 4,
                    quality: 8.3,
                    warranty: "None",
                    returnPolicy: "7 days return",
                    shipping: "Free delivery",
                    url: "#",
                    seller: "RetailNet",
                    stock: "In stock",
                    features: ["Budget price", "COD available", "Easy returns"]
                }
            ],
            image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=400&q=80",
            images: [
                "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=400&q=80"
            ],
            lastUpdated: "2024-01-07"
        },
        
        {
            id: 4002,
            name: "Mamaearth Vitamin C Face Serum",
            category: "beauty",
            brand: "Mamaearth",
            description: "Vitamin C serum with 10% Vitamin C for brightening and even skin tone",
            tags: ["skincare", "serum", "vitaminc", "face"],
            specifications: {
                "Key Ingredient": "10% Vitamin C",
                "Benefits": "Brightening, even skin tone",
                "Skin Type": "All skin types",
                "Features": "Toxin free, cruelty free",
                "Net Weight": "30ml",
                "Made In": "India"
            },
            stores: [
                {
                    store: "nykaa",
                    price: 599,
                    originalPrice: 799,
                    rating: 4.6,
                    reviews: 12340,
                    delivery: "1-2 days",
                    deliveryDays: 2,
                    quality: 8.7,
                    warranty: "None",
                    returnPolicy: "10 days return",
                    shipping: "Free delivery",
                    url: "#",
                    seller: "Nykaa Retail",
                    stock: "In stock",
                    features: ["Original Mamaearth", "Skin advice", "Free samples"]
                },
                {
                    store: "amazon",
                    price: 549,
                    originalPrice: 799,
                    rating: 4.5,
                    reviews: 8760,
                    delivery: "2-3 days",
                    deliveryDays: 3,
                    quality: 8.6,
                    warranty: "None",
                    returnPolicy: "7 days return",
                    shipping: "Free delivery",
                    url: "#",
                    seller: "Cloudtail India",
                    stock: "In stock",
                    features: ["Authentic product", "COD available", "Gift option"]
                },
                {
                    store: "flipkart",
                    price: 499,
                    originalPrice: 799,
                    rating: 4.4,
                    reviews: 6540,
                    delivery: "3-4 days",
                    deliveryDays: 4,
                    quality: 8.5,
                    warranty: "None",
                    returnPolicy: "7 days return",
                    shipping: "Free delivery",
                    url: "#",
                    seller: "RetailNet",
                    stock: "In stock",
                    features: ["Best price", "COD available", "Easy returns"]
                }
            ],
            image: "https://images.unsplash.com/photo-1556228578-9c360e1d8d34?auto=format&fit=crop&w=400&q=80",
            images: [
                "https://images.unsplash.com/photo-1556228578-9c360e1d8d34?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1556228578-9c360e1d8d34?auto=format&fit=crop&w=400&q=80"
            ],
            lastUpdated: "2024-01-06"
        },
        
        // Sports Category
        {
            id: 5001,
            name: "Cosco Badminton Racquet - Carbon Fiber",
            category: "sports",
            brand: "Cosco",
            description: "Professional badminton racquet with carbon fiber frame and high tension strings",
            tags: ["badminton", "sports", "racquet", "fitness"],
            specifications: {
                "Material": "Carbon Fiber + Graphite",
                "Weight": "85g (3U)",
                "Balance": "Head Heavy",
                "Grip Size": "G4",
                "String Tension": "24-28 lbs",
                "Level": "Professional"
            },
            stores: [
                {
                    store: "amazon",
                    price: 2499,
                    originalPrice: 3499,
                    rating: 4.3,
                    reviews: 2340,
                    delivery: "2-3 days",
                    deliveryDays: 3,
                    quality: 8.2,
                    warranty: "6 months",
                    returnPolicy: "10 days return",
                    shipping: "Free delivery",
                    url: "#",
                    seller: "Cloudtail India",
                    stock: "In stock",
                    features: ["Original Cosco", "Free delivery", "Racket cover included"]
                },
                {
                    store: "flipkart",
                    price: 2299,
                    originalPrice: 3499,
                    rating: 4.4,
                    reviews: 1890,
                    delivery: "3-4 days",
                    deliveryDays: 4,
                    quality: 8.1,
                    warranty: "6 months",
                    returnPolicy: "7 days return",
                    shipping: "Free delivery",
                    url: "#",
                    seller: "RetailNet",
                    stock: "In stock",
                    features: ["No cost EMI", "Budget price", "Accessories included"]
                },
                {
                    store: "meesho",
                    price: 1999,
                    originalPrice: 3499,
                    rating: 4.0,
                    reviews: 3450,
                    delivery: "5-7 days",
                    deliveryDays: 7,
                    quality: 7.8,
                    warranty: "3 months",
                    returnPolicy: "7 days return",
                    shipping: "Free delivery",
                    url: "#",
                    seller: "Sports Gear",
                    stock: "In stock",
                    features: ["Lowest price", "COD available", "Beginner friendly"]
                }
            ],
            image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=400&q=80",
            images: [
                "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=400&q=80"
            ],
            lastUpdated: "2024-01-05"
        },
        
        {
            id: 5002,
            name: "Nike Dri-FIT Training T-shirt",
            category: "sports",
            brand: "Nike",
            description: "Men's training t-shirt with Dri-FIT technology to keep you dry and comfortable",
            tags: ["tshirt", "sports", "training", "men"],
            specifications: {
                "Material": "100% Polyester (Dri-FIT)",
                "Fit": "Regular Fit",
                "Color": "Black",
                "Size": "S-XXL",
                "Technology": "Dri-FIT moisture management",
                "Care": "Machine wash"
            },
            stores: [
                {
                    store: "myntra",
                    price: 1799,
                    originalPrice: 2499,
                    rating: 4.5,
                    reviews: 2890,
                    delivery: "2-3 days",
                    deliveryDays: 3,
                    quality: 8.4,
                    warranty: "None",
                    returnPolicy: "30 days return",
                    shipping: "Free delivery",
                    url: "#",
                    seller: "Nike Official",
                    stock: "In stock",
                    features: ["Original Nike", "Size exchange", "Authentic product"]
                },
                {
                    store: "ajio",
                    price: 1699,
                    originalPrice: 2499,
                    rating: 4.4,
                    reviews: 1560,
                    delivery: "3-4 days",
                    deliveryDays: 4,
                    quality: 8.3,
                    warranty: "None",
                    returnPolicy: "15 days return",
                    shipping: "Free delivery",
                    url: "#",
                    seller: "Ajio Sports",
                    stock: "In stock",
                    features: ["Premium quality", "Style advice", "Gift wrap"]
                },
                {
                    store: "meesho",
                    price: 1299,
                    originalPrice: 2499,
                    rating: 4.1,
                    reviews: 4560,
                    delivery: "5-7 days",
                    deliveryDays: 7,
                    quality: 7.9,
                    warranty: "None",
                    returnPolicy: "7 days return",
                    shipping: "Free delivery",
                    url: "#",
                    seller: "Sports Fashion",
                    stock: "In stock",
                    features: ["Lowest price", "Budget friendly", "COD available"]
                }
            ],
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80",
            images: [
                "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80"
            ],
            lastUpdated: "2024-01-04"
        }
    ],
    
    // Helper functions
    getProductById: function(id) {
        return this.products.find(product => product.id === id);
    },
    
    getProductsByCategory: function(category) {
        return this.products.filter(product => product.category === category);
    },
    
    getProductsByBrand: function(brand) {
        return this.products.filter(product => product.brand.toLowerCase() === brand.toLowerCase());
    },
    
    searchProducts: function(query) {
        const searchTerm = query.toLowerCase();
        return this.products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.brand.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
            product.category.toLowerCase().includes(searchTerm)
        );
    },
    
    getStoreInfo: function(storeId) {
        const stores = {
            amazon: { name: "Amazon", color: "#FF9900", icon: "fab fa-amazon" },
            flipkart: { name: "Flipkart", color: "#047BD5", icon: "fas fa-shopping-bag" },
            myntra: { name: "Myntra", color: "#FF3F6C", icon: "fas fa-star" },
            ajio: { name: "Ajio", color: "#000000", icon: "fas fa-gem" },
            meesho: { name: "Meesho", color: "#F43397", icon: "fas fa-tshirt" },
            tatacliq: { name: "Tata CLiQ", color: "#00A9E0", icon: "fas fa-shopping-cart" },
            nykaa: { name: "Nykaa", color: "#FF3385", icon: "fas fa-spa" },
            snapdeal: { name: "Snapdeal", color: "#FF6F61", icon: "fas fa-tag" }
        };
        return stores[storeId] || { name: storeId, color: "#666", icon: "fas fa-store" };
    },
    
    getCategoryInfo: function(category) {
        const categories = {
            electronics: { name: "Electronics", icon: "fas fa-mobile-alt", color: "#2563eb" },
            fashion: { name: "Fashion", icon: "fas fa-tshirt", color: "#ec4899" },
            home: { name: "Home & Kitchen", icon: "fas fa-home", color: "#10b981" },
            beauty: { name: "Beauty", icon: "fas fa-spa", color: "#8b5cf6" },
            sports: { name: "Sports", icon: "fas fa-dumbbell", color: "#f59e0b" },
            books: { name: "Books", icon: "fas fa-book", color: "#06b6d4" },
            toys: { name: "Toys & Games", icon: "fas fa-gamepad", color: "#ef4444" },
            grocery: { name: "Grocery", icon: "fas fa-shopping-basket", color: "#84cc16" }
        };
        return categories[category] || { name: category, icon: "fas fa-box", color: "#666" };
    },
    
    // Get best deal for a product
    getBestDeal: function(product) {
        if (!product.stores || product.stores.length === 0) return null;
        
        return product.stores.reduce((best, current) => {
            // Consider price, rating, delivery, and quality
            const bestScore = (best.price * 0.4) + (best.rating * 1000 * 0.3) + 
                            ((10 - best.deliveryDays) * 100 * 0.2) + (best.quality * 100 * 0.1);
            const currentScore = (current.price * 0.4) + (current.rating * 1000 * 0.3) + 
                               ((10 - current.deliveryDays) * 100 * 0.2) + (current.quality * 100 * 0.1);
            
            return currentScore < bestScore ? current : best;
        });
    },
    
    // Get price statistics
    getPriceStats: function(product) {
        if (!product.stores || product.stores.length === 0) {
            return { min: 0, max: 0, avg: 0, savings: 0 };
        }
        
        const prices = product.stores.map(store => store.price);
        const min = Math.min(...prices);
        const max = Math.max(...prices);
        const avg = prices.reduce((a, b) => a + b, 0) / prices.length;
        const savings = max - min;
        
        return { min, max, avg, savings };
    },
    
    // Get quality analysis
    getQualityAnalysis: function(product) {
        if (!product.stores || product.stores.length === 0) {
            return { bestQuality: 0, avgQuality: 0, worstQuality: 0 };
        }
        
        const qualities = product.stores.map(store => store.quality);
        const bestQuality = Math.max(...qualities);
        const worstQuality = Math.min(...qualities);
        const avgQuality = qualities.reduce((a, b) => a + b, 0) / qualities.length;
        
        return { bestQuality, avgQuality, worstQuality };
    },
    
    // Get delivery analysis
    getDeliveryAnalysis: function(product) {
        if (!product.stores || product.stores.length === 0) {
            return { fastest: 7, slowest: 7, avgDelivery: 7 };
        }
        
        const deliveries = product.stores.map(store => store.deliveryDays);
        const fastest = Math.min(...deliveries);
        const slowest = Math.max(...deliveries);
        const avgDelivery = deliveries.reduce((a, b) => a + b, 0) / deliveries.length;
        
        return { fastest, slowest, avgDelivery };
    },
    
    // Generate product suggestions
    getSimilarProducts: function(productId, limit = 3) {
        const product = this.getProductById(productId);
        if (!product) return [];
        
        return this.products
            .filter(p => p.id !== productId && p.category === product.category)
            .slice(0, limit);
    },
    
    // Get trending products
    getTrendingProducts: function(limit = 6) {
        // Sort by reviews (popularity) and rating
        return [...this.products]
            .sort((a, b) => {
                const aReviews = a.stores.reduce((sum, store) => sum + store.reviews, 0);
                const bReviews = b.stores.reduce((sum, store) => sum + store.reviews, 0);
                return bReviews - aReviews;
            })
            .slice(0, limit);
    },
    
    // Get best value products (price to quality ratio)
    getBestValueProducts: function(limit = 6) {
        return [...this.products]
            .map(product => {
                const bestDeal = this.getBestDeal(product);
                const priceStats = this.getPriceStats(product);
                const quality = this.getQualityAnalysis(product);
                
                // Calculate value score (lower price + higher quality = better value)
                const valueScore = (1 / bestDeal.price) * 10000 + quality.avgQuality * 10;
                return { ...product, valueScore };
            })
            .sort((a, b) => b.valueScore - a.valueScore)
            .slice(0, limit);
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PRODUCTS_DB;
} else {
    window.PRODUCTS_DB = PRODUCTS_DB;
}
// Add to PRODUCTS_DB object
PRODUCTS_DB = {
    ...PRODUCTS_DB,
    
    // Get best store for a product based on criteria
    getBestStoreByCriteria: function(product, criteria) {
        if (!product.stores || product.stores.length === 0) return null;
        
        switch(criteria) {
            case 'price':
                return product.stores.reduce((best, current) => 
                    current.price < best.price ? current : best
                );
                
            case 'quality':
                return product.stores.reduce((best, current) => 
                    current.quality > best.quality ? current : best
                );
                
            case 'rating':
                return product.stores.reduce((best, current) => 
                    current.rating > best.rating ? current : best
                );
                
            case 'delivery':
                return product.stores.reduce((best, current) => {
                    const currentDays = parseInt(current.delivery) || 7;
                    const bestDays = parseInt(best.delivery) || 7;
                    return currentDays < bestDays ? current : best;
                });
                
            case 'value':
                // Calculate value score (price/quality ratio)
                return product.stores.reduce((best, current) => {
                    const bestValue = best.quality / best.price;
                    const currentValue = current.quality / current.price;
                    return currentValue > bestValue ? current : best;
                });
                
            default:
                return this.getBestDeal(product);
        }
    },
    
    // Get store comparison for a product
    getStoreComparison: function(product) {
        if (!product.stores || product.stores.length === 0) return [];
        
        const stores = product.stores.map(store => {
            const storeInfo = CONFIG.STORES.find(s => s.id === store.store);
            return {
                store: store.store,
                name: storeInfo?.name || store.store,
                color: storeInfo?.color || '#666',
                icon: storeInfo?.icon || 'fas fa-store',
                price: store.price,
                originalPrice: store.originalPrice,
                rating: store.rating,
                reviews: store.reviews,
                delivery: store.delivery,
                deliveryDays: store.deliveryDays || parseInt(store.delivery) || 7,
                quality: store.quality,
                warranty: store.warranty,
                shipping: store.shipping,
                features: store.features || []
            };
        });
        
        // Sort by price (lowest first)
        return stores.sort((a, b) => a.price - b.price);
    },
    
    // Get price distribution across stores
    getPriceDistribution: function(product) {
        if (!product.stores || product.stores.length < 2) return null;
        
        const prices = product.stores.map(s => s.price);
        const min = Math.min(...prices);
        const max = Math.max(...prices);
        const avg = prices.reduce((a, b) => a + b, 0) / prices.length;
        const stdDev = Math.sqrt(
            prices.map(p => Math.pow(p - avg, 2))
                  .reduce((a, b) => a + b, 0) / prices.length
        );
        
        return {
            min,
            max,
            avg: Math.round(avg),
            range: max - min,
            stdDev: Math.round(stdDev),
            priceDifference: ((max - min) / min * 100).toFixed(1)
        };
    },
    
    // Get delivery comparison
    getDeliveryComparison: function(product) {
        if (!product.stores || product.stores.length < 2) return null;
        
        const deliveries = product.stores.map(store => ({
            store: store.store,
            name: CONFIG.STORES.find(s => s.id === store.store)?.name || store.store,
            delivery: store.delivery,
            days: store.deliveryDays || parseInt(store.delivery) || 7,
            shipping: store.shipping
        }));
        
        // Sort by delivery days
        return deliveries.sort((a, b) => a.days - b.days);
    },
    
    // Get quality comparison
    getQualityComparison: function(product) {
        if (!product.stores || product.stores.length < 2) return null;
        
        const qualities = product.stores.map(store => ({
            store: store.store,
            name: CONFIG.STORES.find(s => s.id === store.store)?.name || store.store,
            quality: store.quality,
            rating: store.rating,
            reviews: store.reviews,
            warranty: store.warranty
        }));
        
        // Sort by quality score
        return qualities.sort((a, b) => b.quality - a.quality);
    }
};