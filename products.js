const products = [

{
    id: 1,
    name: "Apple AirPods Pro",
    brand: "Apple",
    category: "Electronics",

    price: 22999,
    oldPrice: 25999,
    discount: 12,

    rating: 4.5,
    reviews: 1823,

    stock: 15,
    availability: "In Stock",

    image:"https://www.icrescent.in/cdn/shop/files/Untitled_-_2025-09-16T163834.848-removebg-preview.png?v=1758021123",

    description:
    "Active noise cancellation earbuds with immersive audio experience.",

    features: [
        "Spatial Audio",
        "Noise Cancellation",
        "MagSafe Charging",
        "Water Resistant"
    ],

    specifications: {
        Connectivity: "Bluetooth 5.3",
        Battery: "30 Hours",
        Warranty: "1 Year",
    },

    delivery: {
        freeDelivery: true,
        estimated: "2 Days"
    },

    seller: {
        name: "Apple Store",
        rating: 4.8
    },

    offers: [
        "10% Bank Discount",
        "Free Delivery"
    ],

    tags: [
        "Best Seller",
        "Trending"
    ],

    faq: [
        {
            question: "Is warranty included?",
            answer: "Yes, 1 year warranty."
        }
    ],

    reviewsData: [
        {
            user: "Rahul",
            rating: 5,
            comment: "Excellent product!"
        },
        {
            user: "Priya",
            rating: 4,
            comment: "Worth the price."
        }
    ]
},
{
    id: 2,
    name: "Samsung Galaxy S24",
    brand: "Samsung",
    category: "Electronics",

    price: 89999,
    oldPrice: 99999,
    discount: 10,

    rating: 5,
    reviews: 2450,

    stock: 20,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600",

    description:
    "Premium Samsung flagship smartphone with AI-powered features and stunning AMOLED display.",

    features: [
        "Dynamic AMOLED Display",
        "AI Camera",
        "Fast Charging",
        "5G Support"
    ],

    specifications: {
        Connectivity: "5G",
        Battery: "5000mAh",
        Warranty: "1 Year"
    },

    delivery: {
        freeDelivery: true,
        estimated: "3 Days"
    },

    seller: {
        name: "Samsung Store",
        rating: 4.7
    },

    offers: [
        "₹5000 Exchange Bonus",
        "10% Bank Discount"
    ],

    tags: [
        "Flagship",
        "Trending"
    ],

    faq: [
        {
            question: "Does it support wireless charging?",
            answer: "Yes, wireless charging is supported."
        }
    ],

    reviewsData: [
        {
            user: "Arjun",
            rating: 5,
            comment: "Amazing display and camera quality."
        },
        {
            user: "Sneha",
            rating: 5,
            comment: "Very smooth performance."
        }
    ]
},

{
    id: 3,
    name: "MacBook Air M3",
    brand: "Apple",
    category: "Electronics",

    price: 114999,
    oldPrice: 124999,
    discount: 8,

    rating: 5,
    reviews: 1980,

    stock: 12,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1651747137395-065bd3af97bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    description:
    "Ultra-light laptop powered by Apple M3 chip with all-day battery life.",

    features: [
        "Apple M3 Chip",
        "Retina Display",
        "18 Hours Battery",
        "Lightweight Design"
    ],

    specifications: {
        Connectivity: "WiFi 6E",
        Battery: "18 Hours",
        Warranty: "1 Year"
    },

    delivery: {
        freeDelivery: true,
        estimated: "4 Days"
    },

    seller: {
        name: "Apple Store",
        rating: 4.9
    },

    offers: [
        "Student Discount Available",
        "No Cost EMI"
    ],

    tags: [
        "Best Seller",
        "Premium"
    ],

    faq: [
        {
            question: "Is MS Office included?",
            answer: "No, MS Office needs separate purchase."
        }
    ],

    reviewsData: [
        {
            user: "Karan",
            rating: 5,
            comment: "Super fast and lightweight."
        },
        {
            user: "Divya",
            rating: 5,
            comment: "Battery backup is excellent."
        }
    ]
},

{
    id: 4,
    name: "Gaming Laptop",
    brand: "ASUS",
    category: "Electronics",

    price: 99999,
    oldPrice: 112999,
    discount: 12,

    rating: 4,
    reviews: 1430,

    stock: 10,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600",

    description:
    "High-performance gaming laptop with powerful graphics and fast refresh display.",

    features: [
        "RTX Graphics",
        "144Hz Display",
        "RGB Keyboard",
        "Advanced Cooling"
    ],

    specifications: {
        Connectivity: "WiFi 6",
        Battery: "8 Hours",
        Warranty: "1 Year"
    },

    delivery: {
        freeDelivery: true,
        estimated: "5 Days"
    },

    seller: {
        name: "ASUS Official",
        rating: 4.6
    },

    offers: [
        "Free Gaming Mouse",
        "15% Cashback"
    ],

    tags: [
        "Gaming",
        "Powerful"
    ],

    faq: [
        {
            question: "Can it run AAA games?",
            answer: "Yes, it supports high-end gaming."
        }
    ],

    reviewsData: [
        {
            user: "Vikram",
            rating: 4,
            comment: "Great gaming performance."
        },
        {
            user: "Manoj",
            rating: 5,
            comment: "Cooling system works very well."
        }
    ]
},

{
    id: 5,
    name: "Apple Watch Series 9",
    brand: "Apple",
    category: "Electronics",

    price: 45999,
    oldPrice: 49999,
    discount: 8,

    rating: 4.5,
    reviews: 1750,

    stock: 18,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600",

    description:
    "Advanced smartwatch with fitness tracking and seamless Apple ecosystem integration.",

    features: [
        "Heart Rate Monitor",
        "Always-On Display",
        "Fitness Tracking",
        "Water Resistant"
    ],

    specifications: {
        Connectivity: "Bluetooth 5.3",
        Battery: "18 Hours",
        Warranty: "1 Year"
    },

    delivery: {
        freeDelivery: true,
        estimated: "2 Days"
    },

    seller: {
        name: "Apple Store",
        rating: 4.8
    },

    offers: [
        "No Cost EMI",
        "Free Strap"
    ],

    tags: [
        "Trending",
        "Fitness"
    ],

    faq: [
        {
            question: "Does it support swimming?",
            answer: "Yes, it is water resistant."
        }
    ],

    reviewsData: [
        {
            user: "Riya",
            rating: 5,
            comment: "Excellent fitness features."
        },
        {
            user: "Ajay",
            rating: 4,
            comment: "Looks premium and smooth."
        }
    ]
},

{
    id: 6,
    name: "Noise Smart Watch",
    brand: "Noise",
    category: "Electronics",

    price: 3999,
    oldPrice: 4999,
    discount: 20,

    rating: 4,
    reviews: 980,

    stock: 25,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",

    description:
    "Affordable smartwatch with fitness tracking and Bluetooth calling.",

    features: [
        "Bluetooth Calling",
        "Heart Rate Monitor",
        "Sleep Tracking",
        "Long Battery Life"
    ],

    specifications: {
        Connectivity: "Bluetooth 5.0",
        Battery: "7 Days",
        Warranty: "1 Year"
    },

    delivery: {
        freeDelivery: true,
        estimated: "3 Days"
    },

    seller: {
        name: "Noise Official",
        rating: 4.5
    },

    offers: [
        "20% Discount",
        "Free Delivery"
    ],

    tags: [
        "Budget",
        "Popular"
    ],

    faq: [
        {
            question: "Does it support Android phones?",
            answer: "Yes, it supports Android and iPhone."
        }
    ],

    reviewsData: [
        {
            user: "Kishore",
            rating: 4,
            comment: "Good value for money."
        },
        {
            user: "Meena",
            rating: 4,
            comment: "Battery lasts long."
        }
    ]
},

{
    id: 7,
    name: "Sony WH-1000XM5",
    brand: "Sony",
    category: "Electronics",

    price: 29999,
    oldPrice: 34999,
    discount: 14,

    rating: 5,
    reviews: 2100,

    stock: 14,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",

    description:
    "Industry-leading noise cancelling headphones with crystal clear audio.",

    features: [
        "Noise Cancellation",
        "30 Hours Battery",
        "Touch Controls",
        "Hi-Res Audio"
    ],

    specifications: {
        Connectivity: "Bluetooth 5.2",
        Battery: "30 Hours",
        Warranty: "1 Year"
    },

    delivery: {
        freeDelivery: true,
        estimated: "2 Days"
    },

    seller: {
        name: "Sony Center",
        rating: 4.8
    },

    offers: [
        "10% Instant Discount",
        "Free Carry Case"
    ],

    tags: [
        "Premium",
        "Top Rated"
    ],

    faq: [
        {
            question: "Can it connect to multiple devices?",
            answer: "Yes, multipoint connection is supported."
        }
    ],

    reviewsData: [
        {
            user: "Rahul",
            rating: 5,
            comment: "Best headphones I’ve used."
        },
        {
            user: "Anjali",
            rating: 5,
            comment: "Noise cancellation is excellent."
        }
    ]
},

{
    id: 8,
    name: "JBL Bluetooth Speaker",
    brand: "JBL",
    category: "Electronics",

    price: 4999,
    oldPrice: 6499,
    discount: 23,

    rating: 3.5,
    reviews: 760,

    stock: 30,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1589003077984-894e133dabab?w=600",

    description:
    "Portable Bluetooth speaker with deep bass and waterproof design.",

    features: [
        "Portable Design",
        "Deep Bass",
        "Waterproof",
        "12 Hours Playback"
    ],

    specifications: {
        Connectivity: "Bluetooth 5.1",
        Battery: "12 Hours",
        Warranty: "1 Year"
    },

    delivery: {
        freeDelivery: true,
        estimated: "3 Days"
    },

    seller: {
        name: "JBL Official",
        rating: 4.4
    },

    offers: [
        "Free Delivery",
        "Extra ₹500 Off"
    ],

    tags: [
        "Music",
        "Portable"
    ],

    faq: [
        {
            question: "Is it waterproof?",
            answer: "Yes, it has IPX7 waterproof rating."
        }
    ],

    reviewsData: [
        {
            user: "Sanjay",
            rating: 4,
            comment: "Sound quality is great."
        },
        {
            user: "Pooja",
            rating: 3,
            comment: "Battery could be better."
        }
    ]
},

{
    id: 9,
    name: "Canon DSLR Camera",
    brand: "Canon",
    category: "Electronics",

    price: 68999,
    oldPrice: 75999,
    discount: 9,

    rating: 4.5,
    reviews: 1320,

    stock: 8,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600",

    description:
    "Professional DSLR camera with high-quality image and video performance.",

    features: [
        "24MP Sensor",
        "4K Video",
        "Fast Autofocus",
        "WiFi Connectivity"
    ],

    specifications: {
        Connectivity: "WiFi + Bluetooth",
        Battery: "1200 Shots",
        Warranty: "2 Years"
    },

    delivery: {
        freeDelivery: true,
        estimated: "4 Days"
    },

    seller: {
        name: "Canon Store",
        rating: 4.7
    },

    offers: [
        "Free Camera Bag",
        "5% Cashback"
    ],

    tags: [
        "Photography",
        "Professional"
    ],

    faq: [
        {
            question: "Does it support 4K recording?",
            answer: "Yes, it supports 4K video recording."
        }
    ],

    reviewsData: [
        {
            user: "Naveen",
            rating: 5,
            comment: "Image quality is fantastic."
        },
        {
            user: "Keerthi",
            rating: 4,
            comment: "Perfect for beginners and pros."
        }
    ]
},

{
    id: 10,
    name: "GoPro Hero 12",
    brand: "GoPro",
    category: "Electronics",

    price: 39999,
    oldPrice: 44999,
    discount: 11,

    rating: 4,
    reviews: 860,

    stock: 11,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600",

    description:
    "Compact action camera with stunning stabilization and waterproof build.",

    features: [
        "5.3K Video",
        "HyperSmooth Stabilization",
        "Waterproof",
        "Voice Control"
    ],

    specifications: {
        Connectivity: "WiFi + Bluetooth",
        Battery: "2 Hours",
        Warranty: "1 Year"
    },

    delivery: {
        freeDelivery: true,
        estimated: "3 Days"
    },

    seller: {
        name: "GoPro Official",
        rating: 4.6
    },

    offers: [
        "Free SD Card",
        "10% Bank Discount"
    ],

    tags: [
        "Adventure",
        "Trending"
    ],

    faq: [
        {
            question: "Can it be used underwater?",
            answer: "Yes, it is waterproof up to 10m."
        }
    ],

    reviewsData: [
        {
            user: "Rohit",
            rating: 4,
            comment: "Excellent stabilization."
        },
        {
            user: "Asha",
            rating: 5,
            comment: "Perfect for travel videos."
        }
    ]
},{
    id: 11,
    name: "PlayStation 5",
    brand: "Sony",
    category: "Gaming",

    price: 54999,
    oldPrice: 59999,
    discount: 8,

    rating: 5,
    reviews: 4217,
       stock: 20,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600",

    description:
    "Next-gen gaming console with ultra-fast SSD and immersive gameplay.",

    features: [
        "4K Gaming",
        "Ultra Fast SSD",
        "DualSense Controller",
        "Ray Tracing"
    ],

    specifications: {
        Storage: "1TB SSD",
        Resolution: "4K",
        Connectivity: "WiFi & Bluetooth",
        Warranty: "1 Year"
    },

    delivery: {
        freeDelivery: true,
        estimated: "2 Days"
    },

    seller: {
        name: "Sony Store",
        rating: 4.9
    },

    offers: [
        "10% Instant Bank Discount",
        "Free Gaming Headset"
    ],

    tags: [
        "Best Seller",
        "Trending"
    ],

    faq: [
        {
            question: "Does it support 4K gaming?",
            answer: "Yes, it supports up to 4K resolution."
        }
    ],

    reviewsData: [
        {
            user: "Arjun",
            rating: 5,
            comment: "Amazing gaming performance."
        },
        {
            user: "Kiran",
            rating: 4,
            comment: "Worth every rupee."
        }
    ]
},

{
    id: 12,
    name: "Xbox Series X",
    brand: "Microsoft",
    category: "Gaming",

    price: 52999,
    oldPrice: 57999,
    discount: 9,
       stock: 0,
    availability: "No Stock",
    rating: 4.5,
    reviews: 2981,

    image:"https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=600",

    description:
    "Powerful gaming console with smooth graphics and fast loading.",

    features: [
        "4K Gaming",
        "Quick Resume",
        "1TB SSD",
        "Dolby Atmos"
    ],

    specifications: {
        Storage: "1TB SSD",
        Resolution: "4K",
        Connectivity: "WiFi 6",
        Warranty: "1 Year"
    },

    delivery: {
        freeDelivery: true,
        estimated: "3 Days"
    },

    seller: {
        name: "Xbox Official",
        rating: 4.8
    },

    offers: [
        "Free Game Pass Trial",
        "No Cost EMI"
    ],

    tags: [
        "Gaming Beast",
        "Hot Deal"
    ],

    faq: [
        {
            question: "Can I play old Xbox games?",
            answer: "Yes, backward compatibility is supported."
        }
    ],

    reviewsData: [
        {
            user: "Rahul",
            rating: 5,
            comment: "Super smooth gameplay."
        },
        {
            user: "Vikram",
            rating: 4,
            comment: "Excellent console."
        }
    ]
},

{
    id: 13,
    name: "VR Headset",
    brand: "Meta",
    category: "Electronics",

    price: 25999,
    oldPrice: 29999,
    discount: 13,

    rating: 4,
    reviews: 1632,

    image:"https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=600",

    description:
    "Immersive virtual reality headset for gaming and entertainment.",

    features: [
        "360° VR Experience",
        "Motion Tracking",
        "Wireless",
        "HD Display"
    ],

    specifications: {
        Display: "HD",
        Battery: "5 Hours",
        Connectivity: "Bluetooth & WiFi",
        Warranty: "1 Year"
    },

    delivery: {
        freeDelivery: true,
        estimated: "4 Days"
    },

    seller: {
        name: "VR World",
        rating: 4.6
    },

    offers: [
        "5% Cashback",
        "Free Carry Case"
    ],

    tags: [
        "Trending",
        "Tech Gadget"
    ],

    faq: [
        {
            question: "Is it wireless?",
            answer: "Yes, fully wireless VR experience."
        }
    ],

    reviewsData: [
        {
            user: "Sneha",
            rating: 4,
            comment: "Very immersive."
        },
        {
            user: "Aman",
            rating: 5,
            comment: "Feels futuristic."
        }
    ]
},

{
    id: 14,
    name: "WiFi Router",
    brand: "TP-Link",
    category: "Electronics",

    price: 3499,
    oldPrice: 4499,
    discount: 22,

    rating: 3.5,
    reviews: 985,

    image:"https://images.unsplash.com/photo-1647427060118-4911c9821b82?w=600",

    description:
    "High-speed WiFi router for seamless internet connectivity.",

    features: [
        "Dual Band",
        "High Speed Internet",
        "Easy Setup",
        "Wide Coverage"
    ],

    specifications: {
        Speed: "1200 Mbps",
        Connectivity: "Dual Band",
        Range: "Large Home",
        Warranty: "2 Years"
    },

    delivery: {
        freeDelivery: false,
        estimated: "5 Days"
    },

    seller: {
        name: "NetGear Hub",
        rating: 4.3
    },

    offers: [
        "Flat ₹300 Discount",
        "Extra Warranty"
    ],

    tags: [
        "Budget Pick",
        "Popular"
    ],

    faq: [
        {
            question: "Does it support dual band?",
            answer: "Yes, 2.4GHz and 5GHz supported."
        }
    ],

    reviewsData: [
        {
            user: "Hari",
            rating: 4,
            comment: "Good range."
        },
        {
            user: "Deepak",
            rating: 3,
            comment: "Decent performance."
        }
    ]
},

{
    id: 15,
    name: "Portable SSD",
    brand: "Samsung",
    category: "Electronics",

    price: 7999,
    oldPrice: 9999,
    discount: 20,

    rating: 2.5,
    reviews: 624,

    image:"https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600",

    description:
    "Compact portable SSD with ultra-fast transfer speeds.",

    features: [
        "Fast Transfer",
        "Compact Design",
        "Shock Resistant",
        "USB-C Support"
    ],

    specifications: {
        Storage: "1TB",
        Speed: "1050 MB/s",
        Connectivity: "USB-C",
        Warranty: "3 Years"
    },

    delivery: {
        freeDelivery: true,
        estimated: "3 Days"
    },

    seller: {
        name: "Samsung Store",
        rating: 4.5
    },

    offers: [
        "Extra ₹500 Off",
        "Free Delivery"
    ],

    tags: [
        "Portable",
        "Storage Device"
    ],

    faq: [
        {
            question: "Is it compatible with Mac?",
            answer: "Yes, works with both Mac and Windows."
        }
    ],

    reviewsData: [
        {
            user: "Rohit",
            rating: 3,
            comment: "Good speed."
        },
        {
            user: "Anjali",
            rating: 2,
            comment: "A bit expensive."
        }
    ]
},

{
    id: 16,
    name: "Pendrive 128GB",
    brand: "SanDisk",
    category: "Electronics",

    price: 999,
    oldPrice: 1499,
    discount: 33,

    rating: 4,
    reviews: 2103,

    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK4FKFn0F3_HLbwZynaURTc9ZNFpcgHHxkMQ&s",

    description:
    "High-speed 128GB USB flash drive for daily storage needs.",

    features: [
        "128GB Storage",
        "USB 3.0",
        "Compact",
        "Fast Transfer"
    ],

    specifications: {
        Storage: "128GB",
        Connectivity: "USB 3.0",
        Compatibility: "Windows & Mac",
        Warranty: "5 Years"
    },

    delivery: {
        freeDelivery: true,
        estimated: "2 Days"
    },

    seller: {
        name: "SanDisk Official",
        rating: 4.7
    },

    offers: [
        "Buy 2 Get 5% Off",
        "Free Delivery"
    ],

    tags: [
        "Top Rated",
        "Budget Friendly"
    ],

    faq: [
        {
            question: "Does it support OTG?",
            answer: "No, OTG not supported."
        }
    ],

    reviewsData: [
        {
            user: "Suresh",
            rating: 4,
            comment: "Good storage device."
        },
        {
            user: "Pooja",
            rating: 5,
            comment: "Very useful."
        }
    ]
},

{
    id: 17,
    name: "Streaming Stick",
    brand: "Amazon",
    category: "Electronics",

    price: 3999,
    oldPrice: 5499,
    discount: 27,

    rating: 4.5,
    reviews: 1789,

    image:"https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600",

    description:
    "Smart streaming stick for endless entertainment on TV.",

    features: [
        "Voice Remote",
        "4K Streaming",
        "WiFi Support",
        "App Integration"
    ],

    specifications: {
        Resolution: "4K",
        Connectivity: "WiFi",
        VoiceControl: "Alexa",
        Warranty: "1 Year"
    },

    delivery: {
        freeDelivery: true,
        estimated: "2 Days"
    },

    seller: {
        name: "Amazon Devices",
        rating: 4.8
    },

    offers: [
        "₹500 Cashback",
        "Free OTT Trial"
    ],

    tags: [
        "Entertainment",
        "Trending"
    ],

    faq: [
        {
            question: "Can it stream Netflix?",
            answer: "Yes, supports all major OTT apps."
        }
    ],

    reviewsData: [
        {
            user: "Ajay",
            rating: 5,
            comment: "Excellent streaming quality."
        },
        {
            user: "Divya",
            rating: 4,
            comment: "Easy to use."
        }
    ]
},

{
    id: 18,
    name: "Mechanical Keyboard",
    brand: "Logitech",
    category: "Electronics",

    price: 4999,
    oldPrice: 6999,
    discount: 29,

    rating: 5,
    reviews: 2478,

    image:"https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=600",

    description:
    "RGB mechanical keyboard designed for gaming and productivity.",

    features: [
        "RGB Lighting",
        "Mechanical Switches",
        "Gaming Mode",
        "Ergonomic Design"
    ],

    specifications: {
        Connectivity: "USB",
        Lighting: "RGB",
        SwitchType: "Blue Switches",
        Warranty: "2 Years"
    },

    delivery: {
        freeDelivery: true,
        estimated: "3 Days"
    },

    seller: {
        name: "Logitech Store",
        rating: 4.9
    },

    offers: [
        "10% Instant Discount",
        "Free Mouse Pad"
    ],

    tags: [
        "Gaming",
        "Best Seller"
    ],

    faq: [
        {
            question: "Is RGB customizable?",
            answer: "Yes, lighting is customizable."
        }
    ],

    reviewsData: [
        {
            user: "Karthik",
            rating: 5,
            comment: "Amazing typing experience."
        },
        {
            user: "Varun",
            rating: 4,
            comment: "Very responsive keys."
        }
    ]
},

{
    id: 19,
    name: "Gaming Mouse",
    brand: "Razer",
    category: "Electronics",

    price: 1999,
    oldPrice: 2999,
    discount: 33,

    rating: 3.5,
    reviews: 1431,

    image:"https://images.unsplash.com/photo-1527814050087-3793815479db?w=600",

    description:
    "Ergonomic gaming mouse with precision tracking.",

    features: [
        "RGB Lighting",
        "Adjustable DPI",
        "Ergonomic Design",
        "Lightweight"
    ],

    specifications: {
        DPI: "16000",
        Connectivity: "USB",
        Buttons: "7",
        Warranty: "1 Year"
    },

    delivery: {
        freeDelivery: false,
        estimated: "4 Days"
    },

    seller: {
        name: "Razer Hub",
        rating: 4.4
    },

    offers: [
        "Extra ₹200 Off",
        "Combo Offer Available"
    ],

    tags: [
        "Gaming Gear",
        "Budget Pick"
    ],

    faq: [
        {
            question: "Can DPI be adjusted?",
            answer: "Yes, adjustable DPI supported."
        }
    ],

    reviewsData: [
        {
            user: "Manoj",
            rating: 4,
            comment: "Smooth performance."
        },
        {
            user: "Ashwin",
            rating: 3,
            comment: "Good for gaming."
        }
    ]
},

{
    id: 20,
    name: "iPad Air",
    brand: "Apple",
    category: "Electronics",

    price: 59999,
    oldPrice: 67999,
    discount: 12,

    rating: 5,
    reviews: 3875,

    image:"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600",

    description:
    "Lightweight and powerful iPad with stunning Retina display.",

    features: [
        "Retina Display",
        "M-Series Chip",
        "Apple Pencil Support",
        "All-Day Battery"
    ],

    specifications: {
        Display: "10.9-inch",
        Processor: "Apple M2",
        Storage: "256GB",
        Warranty: "1 Year"
    },

    delivery: {
        freeDelivery: true,
        estimated: "2 Days"
    },

    seller: {
        name: "Apple Store",
        rating: 4.9
    },

    offers: [
        "No Cost EMI",
        "Free Delivery"
    ],

    tags: [
        "Premium",
        "Top Rated"
    ],

    faq: [
        {
            question: "Does it support Apple Pencil?",
            answer: "Yes, Apple Pencil supported."
        }
    ],

    reviewsData: [
        {
            user: "Nisha",
            rating: 5,
            comment: "Fantastic display and speed."
        },
        {
            user: "Ravi",
            rating: 5,
            comment: "Perfect for work and entertainment."
        }
    ]
},
{
    id: 21,
    name: "Apple Monitor",
    brand: "Apple",
    category: "Electronics",

    price: 15999,
    oldPrice: 18999,
    discount: 16,

    rating: 4.5,
    reviews: 2145,

    stock: 18,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600",

    description:
    "Premium Apple monitor with stunning visuals and ultra-clear display.",

    features: [
        "4K Display",
        "Ultra Slim Design",
        "Wide Color Gamut",
        "Energy Efficient"
    ],

    specifications: {
        Display: "27-inch 4K",
        RefreshRate: "75Hz",
        Connectivity: "HDMI & USB-C",
        Warranty: "1 Year",
    },

    delivery: {
        freeDelivery: true,
        estimated: "3 Days"
    },

    seller: {
        name: "Apple Store",
        rating: 4.8
    },

    offers: [
        "10% Bank Discount",
        "Free Installation"
    ],

    tags: [
        "Best Seller",
        "Premium"
    ],

    faq: [
        {
            question: "Does it support USB-C?",
            answer: "Yes, USB-C connectivity is available."
        }
    ],

    reviewsData: [
        {
            user: "Rahul",
            rating: 5,
            comment: "Excellent display quality!"
        },
        {
            user: "Priya",
            rating: 4,
            comment: "Very sharp and vibrant."
        }
    ]
},

{
    id: 22,
    name: "Bluetooth Earbuds",
    brand: "Boat",
    category: "Electronics",

    price: 2499,
    oldPrice: 3499,
    discount: 29,

    rating: 4,
    reviews: 3871,

    stock: 35,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600",

    description:
    "Wireless earbuds with immersive sound and long battery backup.",

    features: [
        "Noise Cancellation",
        "Touch Controls",
        "Fast Charging",
        "Sweat Resistant"
    ],

    specifications: {
        Connectivity: "Bluetooth 5.2",
        Battery: "24 Hours",
        Waterproof: "IPX4",
        Warranty: "1 Year",
    },

    delivery: {
        freeDelivery: true,
        estimated: "2 Days"
    },

    seller: {
        name: "Boat Official",
        rating: 4.6
    },

    offers: [
        "Flat ₹300 Off",
        "Free Delivery"
    ],

    tags: [
        "Trending",
        "Hot Deal"
    ],

    faq: [
        {
            question: "Are these waterproof?",
            answer: "Yes, they are sweat and splash resistant."
        }
    ],

    reviewsData: [
        {
            user: "Arun",
            rating: 4,
            comment: "Sound quality is amazing."
        },
        {
            user: "Sneha",
            rating: 5,
            comment: "Very comfortable to wear."
        }
    ]
},

{
    id: 23,
    name: "Men Casual Shirt",
    brand: "Levis",
    category: "Fashion",

    price: 1299,
    oldPrice: 1999,
    discount: 35,

    rating: 4,
    reviews: 1421,

    stock: 40,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600",

    description:
    "Stylish casual shirt perfect for daily wear and outings.",

    features: [
        "Cotton Fabric",
        "Regular Fit",
        "Breathable Material",
        "Comfort Wear"
    ],

    specifications: {
        Material: "100% Cotton",
        Sleeve: "Full Sleeve",
        Fit: "Regular Fit",
        WashCare: "Machine Wash",
    },

    delivery: {
        freeDelivery: false,
        estimated: "4 Days"
    },

    seller: {
        name: "Levis Fashion",
        rating: 4.5
    },

    offers: [
        "Buy 2 Get 1 Free",
        "5% Cashback"
    ],

    tags: [
        "Fashion",
        "Trending"
    ],

    faq: [
        {
            question: "Is the fabric stretchable?",
            answer: "No, it is pure cotton fabric."
        }
    ],

    reviewsData: [
        {
            user: "Karthik",
            rating: 4,
            comment: "Very comfortable shirt."
        },
        {
            user: "Dinesh",
            rating: 4,
            comment: "Good fitting and quality."
        }
    ]
},

{
    id: 24,
    name: "Women Floral Dress",
    brand: "Zara",
    category: "Fashion",

    price: 2499,
    oldPrice: 3499,
    discount: 29,

    rating: 5,
    reviews: 2980,

    stock: 22,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600",

    description:
    "Elegant floral dress designed for comfort and style.",

    features: [
        "Soft Fabric",
        "Floral Print",
        "Lightweight",
        "Modern Design"
    ],

    specifications: {
        Material: "Polyester Blend",
        Length: "Midi",
        Fit: "Slim Fit",
        WashCare: "Machine Wash",
    },

    delivery: {
        freeDelivery: true,
        estimated: "2 Days"
    },

    seller: {
        name: "Zara Fashion",
        rating: 4.7
    },

    offers: [
        "Flat 10% Discount",
        "Free Delivery"
    ],

    tags: [
        "Best Seller",
        "Women's Choice"
    ],

    faq: [
        {
            question: "Is it suitable for parties?",
            answer: "Yes, perfect for casual and party wear."
        }
    ],

    reviewsData: [
        {
            user: "Aisha",
            rating: 5,
            comment: "Beautiful design!"
        },
        {
            user: "Meera",
            rating: 5,
            comment: "Looks exactly like the picture."
        }
    ]
},

{
    id: 25,
    name: "Men Denim Jacket",
    brand: "Wrangler",
    category: "Fashion",

    price: 3499,
    oldPrice: 4599,
    discount: 24,

    rating: 3.5,
    reviews: 1032,

    stock: 16,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    description:
    "Classic denim jacket with rugged style and premium comfort.",

    features: [
        "Denim Fabric",
        "Stylish Look",
        "Button Closure",
        "Comfort Fit"
    ],

    specifications: {
        Material: "Denim",
        Sleeve: "Full Sleeve",
        Fit: "Regular",
        WashCare: "Machine Wash",
    },

    delivery: {
        freeDelivery: true,
        estimated: "5 Days"
    },

    seller: {
        name: "Wrangler Store",
        rating: 4.4
    },

    offers: [
        "₹500 Instant Discount",
        "Free Shipping"
    ],

    tags: [
        "Winter Wear",
        "Trending"
    ],

    faq: [
        {
            question: "Is this suitable for winter?",
            answer: "Yes, suitable for mild winter conditions."
        }
    ],

    reviewsData: [
        {
            user: "Vijay",
            rating: 4,
            comment: "Stylish jacket."
        },
        {
            user: "Rohit",
            rating: 3,
            comment: "Good quality but slightly heavy."
        }
    ]
},

{
    id: 26,
    name: "Women Handbag",
    brand: "Lavie",
    category: "Accessories",

    price: 1999,
    oldPrice: 2999,
    discount: 33,

    rating: 5,
    reviews: 2507,

    stock: 20,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600",

    description:
    "Elegant handbag with spacious compartments and stylish design.",

    features: [
        "Premium Leather Finish",
        "Spacious Storage",
        "Adjustable Strap",
        "Lightweight"
    ],

    specifications: {
        Material: "PU Leather",
        Compartments: "3",
        Closure: "Zip",
        Warranty: "6 Months",
    },

    delivery: {
        freeDelivery: true,
        estimated: "2 Days"
    },

    seller: {
        name: "Lavie Store",
        rating: 4.7
    },

    offers: [
        "Extra 5% Off",
        "Free Delivery"
    ],

    tags: [
        "Trending",
        "Women's Choice"
    ],

    faq: [
        {
            question: "Is it waterproof?",
            answer: "It is water resistant."
        }
    ],

    reviewsData: [
        {
            user: "Nisha",
            rating: 5,
            comment: "Very stylish handbag."
        },
        {
            user: "Pavithra",
            rating: 5,
            comment: "Good storage space."
        }
    ]
},

{
    id: 27,
    name: "Kids T-Shirt",
    brand: "Puma",
    category: "Fashion",

    price: 699,
    oldPrice: 999,
    discount: 30,

    rating: 4,
    reviews: 842,

    stock: 50,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600",

    description:
    "Comfortable and colorful kids t-shirt for everyday wear.",

    features: [
        "Soft Cotton",
        "Lightweight",
        "Comfort Fit",
        "Durable Print"
    ],

    specifications: {
        Material: "Cotton",
        Fit: "Regular",
        Sleeve: "Half Sleeve",
        WashCare: "Machine Wash",
    },

    delivery: {
        freeDelivery: false,
        estimated: "4 Days"
    },

    seller: {
        name: "Puma Kids",
        rating: 4.4
    },

    offers: [
        "Buy 2 Save 10%",
        "Cashback Offer"
    ],

    tags: [
        "Kids Wear",
        "Popular"
    ],

    faq: [
        {
            question: "Is it suitable for summer?",
            answer: "Yes, breathable fabric for summer."
        }
    ],

    reviewsData: [
        {
            user: "Anu",
            rating: 4,
            comment: "Nice quality."
        },
        {
            user: "Sathya",
            rating: 4,
            comment: "Kids loved it."
        }
    ]
},

{
    id: 28,
    name: "Baby Romper",
    brand: "Babyhug",
    category: "Fashion",

    price: 799,
    oldPrice: 1199,
    discount: 33,

    rating: 4.5,
    reviews: 1142,

    stock: 30,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1766918780914-5df4a5a98c44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    description:
    "Soft and cozy romper designed for babies with maximum comfort.",

    features: [
        "Soft Fabric",
        "Skin Friendly",
        "Easy Button Closure",
        "Cute Design"
    ],

    specifications: {
        Material: "Cotton Blend",
        Fit: "Comfort Fit",
        Sleeve: "Half Sleeve",
        WashCare: "Gentle Wash",
    },

    delivery: {
        freeDelivery: true,
        estimated: "3 Days"
    },

    seller: {
        name: "Babyhug Store",
        rating: 4.6
    },

    offers: [
        "Extra ₹100 Off",
        "Free Delivery"
    ],

    tags: [
        "Baby Care",
        "Top Rated"
    ],

    faq: [
        {
            question: "Is the fabric safe for babies?",
            answer: "Yes, skin-friendly soft material."
        }
    ],

    reviewsData: [
        {
            user: "Keerthi",
            rating: 5,
            comment: "Very soft and comfortable."
        },
        {
            user: "Divya",
            rating: 4,
            comment: "Cute and affordable."
        }
    ]
},

{
    id: 29,
    name: "Women Saree",
    brand: "Kalanjali",
    category: "Fashion",

    price: 3499,
    oldPrice: 4999,
    discount: 30,

    rating: 5,
    reviews: 3211,

    stock: 12,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1616756141603-6d37d5cde2a2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    description:
    "Elegant saree with traditional craftsmanship and premium fabric.",

    features: [
        "Traditional Design",
        "Premium Fabric",
        "Lightweight",
        "Festive Wear"
    ],

    specifications: {
        Material: "Silk Blend",
        Length: "6.3 Meter",
        BlousePiece: "Included",
        WashCare: "Dry Clean",
    },

    delivery: {
        freeDelivery: true,
        estimated: "2 Days"
    },

    seller: {
        name: "Kalanjali Fashion",
        rating: 4.9
    },

    offers: [
        "Festival Offer 15% Off",
        "Free Delivery"
    ],

    tags: [
        "Festive Wear",
        "Best Seller"
    ],

    faq: [
        {
            question: "Is blouse piece included?",
            answer: "Yes, blouse piece is included."
        }
    ],

    reviewsData: [
        {
            user: "Lakshmi",
            rating: 5,
            comment: "Beautiful saree quality."
        },
        {
            user: "Renu",
            rating: 5,
            comment: "Perfect for functions."
        }
    ]
},

{
    id: 30,
    name: "Men Sneakers",
    brand: "Nike",
    category: "Fashion",

    price: 2999,
    oldPrice: 4499,
    discount: 33,

    rating: 4,
    reviews: 2750,

    stock: 25,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",

    description:
    "Comfortable sneakers designed for daily wear and sports.",

    features: [
        "Lightweight",
        "Breathable",
        "Comfort Sole",
        "Stylish Design"
    ],

    specifications: {
        Material: "Mesh",
        Sole: "Rubber",
        Closure: "Lace-Up",
        Warranty: "6 Months",
    },

    delivery: {
        freeDelivery: true,
        estimated: "3 Days"
    },

    seller: {
        name: "Nike Store",
        rating: 4.8
    },

    offers: [
        "Extra 10% Off",
        "Free Delivery"
    ],

    tags: [
        "Sports Wear",
        "Trending"
    ],

    faq: [
        {
            question: "Are these shoes lightweight?",
            answer: "Yes, designed for comfort and lightweight use."
        }
    ],

    reviewsData: [
        {
            user: "Aravind",
            rating: 4,
            comment: "Very comfortable shoes."
        },
        {
            user: "Sanjay",
            rating: 5,
            comment: "Perfect fit and stylish."
        }
    ]
},

{
    id: 31,
    name: "Women Heels",
    brand: "Zara",
    category: "Fashion",

    price: 2499,
    oldPrice: 3299,
    discount: 24,

    rating: 3.5,
    reviews: 842,

    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600",

    description:
    "Stylish high heels perfect for parties, weddings, and evening wear.",

    features: [
        "Comfort Cushion Sole",
        "Premium Finish",
        "Elegant Design",
        "Lightweight Build"
    ],

    specifications: {
        Material: "Synthetic Leather",
        Heel: "3 Inches",
        Closure: "Slip-On",
        Warranty: "6 Months",
    },

    delivery: {
        freeDelivery: true,
        estimated: "4 Days"
    },

    seller: {
        name: "Fashion Hub",
        rating: 4.3
    },

    offers: [
        "5% Instant Discount",
        "Free Delivery"
    ],

    tags: [
        "Trending",
        "Party Wear"
    ],

    faq: [
        {
            question: "Are these comfortable for long wear?",
            answer: "Yes, they come with soft cushioning."
        }
    ],

    reviewsData: [
        {
            user: "Ananya",
            rating: 4,
            comment: "Very stylish and comfortable."
        },
        {
            user: "Riya",
            rating: 3,
            comment: "Good quality for the price."
        }
    ]
},

{
    id: 32,
    name: "Travel Backpack",
    brand: "Wildcraft",
    category: "Accessories",

    price: 2199,
    oldPrice: 2999,
    discount: 27,

    rating: 2.5,
    reviews: 531,

    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1535120927584-0230f40fc1e2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    description:
    "Spacious travel backpack with multiple compartments and ergonomic straps.",

    features: [
        "Water Resistant",
        "Laptop Compartment",
        "USB Charging Port",
        "Adjustable Straps"
    ],

    specifications: {
        Capacity: "35L",
        Material: "Polyester",
        Weight: "900g",
        Warranty: "1 Year",
    },

    delivery: {
        freeDelivery: true,
        estimated: "5 Days"
    },

    seller: {
        name: "Travel Gear Store",
        rating: 4.1
    },

    offers: [
        "Extra ₹200 Off",
        "Free Delivery"
    ],

    tags: [
        "Travel Essential",
        "Popular"
    ],

    faq: [
        {
            question: "Can it fit a 15-inch laptop?",
            answer: "Yes, it supports up to 15.6-inch laptops."
        }
    ],

    reviewsData: [
        {
            user: "Rahul",
            rating: 3,
            comment: "Good storage but average quality."
        },
        {
            user: "Kiran",
            rating: 2,
            comment: "Straps could be stronger."
        }
    ]
},

{
    id: 33,
    name: "Luxury Sunglasses",
    brand: "Ray-Ban",
    category: "Accessories",

    price: 4999,
    oldPrice: 6499,
    discount: 23,

    rating: 5,
    reviews: 1904,

    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600",

    description:
    "Premium UV-protected sunglasses with stylish modern frame.",

    features: [
        "UV Protection",
        "Polarized Lens",
        "Lightweight",
        "Premium Case Included"
    ],

    specifications: {
        Lens: "Polarized",
        Frame: "Metal",
        Protection: "UV400",
        Warranty: "1 Year",
    },

    delivery: {
        freeDelivery: true,
        estimated: "2 Days"
    },

    seller: {
        name: "Luxury Vision",
        rating: 4.8
    },

    offers: [
        "10% Bank Discount",
        "Free Sunglass Case"
    ],

    tags: [
        "Best Seller",
        "Premium"
    ],

    faq: [
        {
            question: "Do these have UV protection?",
            answer: "Yes, they offer full UV400 protection."
        }
    ],

    reviewsData: [
        {
            user: "Sneha",
            rating: 5,
            comment: "Excellent quality and stylish."
        },
        {
            user: "Aakash",
            rating: 5,
            comment: "Worth every rupee."
        }
    ]
},

{
    id: 34,
    name: "Gold Necklace",
    brand: "Tanishq",
    category: "Accessories",

    price: 7999,
    oldPrice: 9999,
    discount: 20,

    rating: 2,
    reviews: 215,

    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1705326452390-3ecf6070595f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    description:
    "Elegant gold necklace with premium finish for special occasions.",

    features: [
        "Elegant Design",
        "Premium Polish",
        "Gift Packaging",
        "Lightweight"
    ],

    specifications: {
        Material: "Gold Plated",
        Weight: "25g",
        Finish: "Glossy",
        Warranty: "6 Months",
    },

    delivery: {
        freeDelivery: true,
        estimated: "4 Days"
    },

    seller: {
        name: "Jewelry World",
        rating: 3.9
    },

    offers: [
        "5% Jewelry Discount",
        "Free Gift Box"
    ],

    tags: [
        "Luxury",
        "Wedding Collection"
    ],

    faq: [
        {
            question: "Is it real gold?",
            answer: "It is gold plated jewelry."
        }
    ],

    reviewsData: [
        {
            user: "Pooja",
            rating: 2,
            comment: "Looks good but finish fades quickly."
        },
        {
            user: "Meena",
            rating: 2,
            comment: "Average quality."
        }
    ]
},

{
    id: 35,
    name: "Silver Bracelet",
    brand: "Pandora",
    category: "Accessories",

    price: 2499,
    oldPrice: 3199,
    discount: 22,

    rating: 4,
    reviews: 786,

    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1619119069152-a2b331eb392a?w=600",

    description:
    "Elegant silver bracelet crafted for daily and party wear.",

    features: [
        "Premium Silver Finish",
        "Lightweight",
        "Adjustable Size",
        "Gift Ready"
    ],

    specifications: {
        Material: "Sterling Silver",
        Weight: "12g",
        Style: "Casual",
        Warranty: "1 Year",
    },

    delivery: {
        freeDelivery: true,
        estimated: "3 Days"
    },

    seller: {
        name: "Silver Shine",
        rating: 4.4
    },

    offers: [
        "Flat ₹250 Off",
        "Free Delivery"
    ],

    tags: [
        "Trending",
        "Gift Item"
    ],

    faq: [
        {
            question: "Is it adjustable?",
            answer: "Yes, it supports adjustable sizing."
        }
    ],

    reviewsData: [
        {
            user: "Nisha",
            rating: 4,
            comment: "Beautiful bracelet."
        },
        {
            user: "Harini",
            rating: 4,
            comment: "Nice shine and quality."
        }
    ]
},

{
    id: 36,
    name: "Men Formal Shoes",
    brand: "Bata",
    category: "Fashion",

    price: 3999,
    oldPrice: 4999,
    discount: 20,

    rating: 5,
    reviews: 1342,

    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600",

    description:
    "Premium formal shoes designed for office and professional wear.",

    features: [
        "Soft Cushioning",
        "Leather Finish",
        "Anti-Slip Sole",
        "Comfort Fit"
    ],

    specifications: {
        Material: "Leather",
        Sole: "Rubber",
        Closure: "Lace-Up",
        Warranty: "1 Year",
    },

    delivery: {
        freeDelivery: true,
        estimated: "2 Days"
    },

    seller: {
        name: "Footwear Store",
        rating: 4.7
    },

    offers: [
        "10% Instant Discount",
        "No Cost EMI"
    ],

    tags: [
        "Best Seller",
        "Office Wear"
    ],

    faq: [
        {
            question: "Are these suitable for daily office use?",
            answer: "Yes, they are built for all-day comfort."
        }
    ],

    reviewsData: [
        {
            user: "Vikram",
            rating: 5,
            comment: "Very comfortable and classy."
        },
        {
            user: "Arjun",
            rating: 5,
            comment: "Excellent leather quality."
        }
    ]
},

{
    id: 37,
    name: "Women Kurti",
    brand: "Biba",
    category: "Fashion",

    price: 1499,
    oldPrice: 1999,
    discount: 25,

    rating: 4.5,
    reviews: 1123,

    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1760287364219-160c234ded00?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    description:
    "Elegant cotton kurti with modern ethnic design and comfort fit.",

    features: [
        "Breathable Fabric",
        "Elegant Print",
        "Comfort Fit",
        "Machine Washable"
    ],

    specifications: {
        Material: "Cotton",
        Sleeve: "3/4 Sleeve",
        Fit: "Regular",
        Warranty: "No Warranty",
    },

    delivery: {
        freeDelivery: true,
        estimated: "3 Days"
    },

    seller: {
        name: "Ethnic Fashion",
        rating: 4.5
    },

    offers: [
        "Buy 2 Get 1",
        "Flat ₹150 Off"
    ],

    tags: [
        "Trending",
        "Ethnic Wear"
    ],

    faq: [
        {
            question: "Is the fabric soft?",
            answer: "Yes, it uses soft breathable cotton."
        }
    ],

    reviewsData: [
        {
            user: "Divya",
            rating: 5,
            comment: "Beautiful color and fitting."
        },
        {
            user: "Keerthi",
            rating: 4,
            comment: "Comfortable for daily wear."
        }
    ]
},

{
    id: 38,
    name: "Leather Wallet",
    brand: "Woodland",
    category: "Accessories",

    price: 999,
    oldPrice: 1499,
    discount: 33,

    rating: 4,
    reviews: 653,

    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1627123424574-724758594e93?w=600",

    description:
    "Premium leather wallet with multiple compartments and slim design.",

    features: [
        "Genuine Leather",
        "Compact Design",
        "Multiple Card Slots",
        "Durable Stitching"
    ],

    specifications: {
        Material: "Leather",
        Compartments: "8",
        Weight: "120g",
        Warranty: "6 Months",
    },

    delivery: {
        freeDelivery: true,
        estimated: "2 Days"
    },

    seller: {
        name: "Wallet World",
        rating: 4.2
    },

    offers: [
        "Extra ₹100 Off",
        "Cashback Offer"
    ],

    tags: [
        "Popular",
        "Daily Use"
    ],

    faq: [
        {
            question: "Does it support RFID protection?",
            answer: "Yes, RFID blocking is included."
        }
    ],

    reviewsData: [
        {
            user: "Rohit",
            rating: 4,
            comment: "Slim and premium quality."
        },
        {
            user: "Ajay",
            rating: 4,
            comment: "Good value for money."
        }
    ]
},

{
    id: 39,
    name: "Men Hoodie",
    brand: "H&M",
    category: "Fashion",

    price: 1899,
    oldPrice: 2499,
    discount: 24,

    rating: 3.5,
    reviews: 748,

    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600",

    description:
    "Comfortable fleece hoodie suitable for winter and casual outings.",

    features: [
        "Soft Fleece",
        "Warm Fabric",
        "Adjustable Hood",
        "Machine Washable"
    ],

    specifications: {
        Material: "Cotton Blend",
        Sleeve: "Full Sleeve",
        Fit: "Regular",
        Warranty: "No Warranty",
    },

    delivery: {
        freeDelivery: true,
        estimated: "4 Days"
    },

    seller: {
        name: "Winter Wear Hub",
        rating: 4.1
    },

    offers: [
        "Flat ₹200 Off",
        "Free Shipping"
    ],

    tags: [
        "Winter Collection",
        "Trending"
    ],

    faq: [
        {
            question: "Is it suitable for cold weather?",
            answer: "Yes, it provides good warmth."
        }
    ],

    reviewsData: [
        {
            user: "Manoj",
            rating: 4,
            comment: "Very cozy and stylish."
        },
        {
            user: "Karthik",
            rating: 3,
            comment: "Good but slightly thin fabric."
        }
    ]
},

{
    id: 40,
    name: "Women Watch",
    brand: "Titan",
    category: "Accessories",

    price: 2999,
    oldPrice: 3999,
    discount: 25,

    rating: 4,
    reviews: 925,

    availability: "In Stock",

    image:"https://plus.unsplash.com/premium_photo-1728759440467-d710b7073761?q=80&w=722&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    description:
    "Elegant women’s watch with premium strap and stylish dial.",

    features: [
        "Water Resistant",
        "Premium Finish",
        "Quartz Movement",
        "Elegant Design"
    ],

    specifications: {
        Strap: "Stainless Steel",
        Display: "Analog",
        Battery: "2 Years",
        Warranty: "1 Year",
    },

    delivery: {
        freeDelivery: true,
        estimated: "3 Days"
    },

    seller: {
        name: "Titan Store",
        rating: 4.6
    },

    offers: [
        "10% Bank Discount",
        "Free Gift Packaging"
    ],

    tags: [
        "Best Seller",
        "Luxury"
    ],

    faq: [
        {
            question: "Is the watch water resistant?",
            answer: "Yes, it supports basic water resistance."
        }
    ],

    reviewsData: [
        {
            user: "Lavanya",
            rating: 4,
            comment: "Beautiful watch and elegant design."
        },
        {
            user: "Sowmya",
            rating: 4,
            comment: "Looks premium and stylish."
        }
    ]
},

{
    id: 41,
    name: "Travel Suitcase",
    brand: "American Tourister",
    category: "Accessories",

    price: 4999,
    oldPrice: 6499,
    discount: 23,

    rating: 4,
    reviews: 1245,

    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=600",

    description:
    "Durable travel suitcase with spacious compartments and smooth wheels.",

    features: [
        "360° Spinner Wheels",
        "TSA Lock",
        "Lightweight Body",
        "Scratch Resistant"
    ],

    specifications: {
        Material: "Polycarbonate",
        Capacity: "65L",
        Weight: "3.5kg",
        Warranty: "3 Years",
    },

    delivery: {
        freeDelivery: true,
        estimated: "4 Days"
    },

    seller: {
        name: "Travel World",
        rating: 4.5
    },

    offers: [
        "Flat ₹500 Off",
        "Free Delivery"
    ],

    tags: [
        "Travel Essential",
        "Best Seller"
    ],

    faq: [
        {
            question: "Does it include TSA lock?",
            answer: "Yes, built-in TSA lock included."
        }
    ],

    reviewsData: [
        {
            user: "Rohit",
            rating: 4,
            comment: "Strong and spacious suitcase."
        },
        {
            user: "Anjali",
            rating: 4,
            comment: "Smooth wheels and premium look."
        }
    ]
},

{
    id: 42,
    name: "Baby Shoes",
    brand: "Cute Steps",
    category: "Fashion",

    price: 799,
    oldPrice: 1099,
    discount: 27,

    rating: 4.5,
    reviews: 642,

    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=600",

    description:
    "Soft and comfortable baby shoes designed for tiny feet.",

    features: [
        "Soft Sole",
        "Breathable Fabric",
        "Anti-Slip Grip",
        "Cute Design"
    ],

    specifications: {
        Material: "Cotton Blend",
        Sole: "Rubber",
        Closure: "Velcro",
        Warranty: "No Warranty",
    },

    delivery: {
        freeDelivery: true,
        estimated: "3 Days"
    },

    seller: {
        name: "Baby Care Store",
        rating: 4.4
    },

    offers: [
        "Buy 2 Get 10% Off",
        "Free Delivery"
    ],

    tags: [
        "Kids Fashion",
        "Trending"
    ],

    faq: [
        {
            question: "Are these suitable for toddlers?",
            answer: "Yes, ideal for toddlers and infants."
        }
    ],

    reviewsData: [
        {
            user: "Priya",
            rating: 5,
            comment: "Very cute and soft."
        },
        {
            user: "Divya",
            rating: 4,
            comment: "Comfortable for babies."
        }
    ]
},

{
    id: 43,
    name: "Modern Sofa",
    brand: "Urban Ladder",
    category: "Home & Kitchen",

    price: 35999,
    oldPrice: 42999,
    discount: 16,

    rating: 3.5,
    reviews: 754,

    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1759647020668-648cd90ddce4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    description:
    "Modern premium sofa with elegant finish and comfortable seating.",

    features: [
        "Premium Cushion",
        "Wooden Frame",
        "Modern Design",
        "Easy Maintenance"
    ],

    specifications: {
        Material: "Fabric",
        Seating: "3 Seater",
        Frame: "Solid Wood",
        Warranty: "5 Years",
    },

    delivery: {
        freeDelivery: true,
        estimated: "7 Days"
    },

    seller: {
        name: "Furniture Hub",
        rating: 4.2
    },

    offers: [
        "No Cost EMI",
        "Free Installation"
    ],

    tags: [
        "Luxury",
        "Living Room"
    ],

    faq: [
        {
            question: "Does installation come free?",
            answer: "Yes, free installation is included."
        }
    ],

    reviewsData: [
        {
            user: "Karan",
            rating: 4,
            comment: "Very comfortable sofa."
        },
        {
            user: "Megha",
            rating: 3,
            comment: "Looks stylish but delivery was late."
        }
    ]
},

{
    id: 44,
    name: "Dining Table",
    brand: "IKEA",
    category: "Home & Kitchen",

    price: 24999,
    oldPrice: 31999,
    discount: 22,

    rating: 4,
    reviews: 902,

    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=600",

    description:
    "Elegant wooden dining table suitable for modern homes.",

    features: [
        "Premium Finish",
        "6 Seater",
        "Strong Build",
        "Modern Design"
    ],

    specifications: {
        Material: "Engineered Wood",
        Seating: "6 People",
        Finish: "Matte",
        Warranty: "3 Years",
    },

    delivery: {
        freeDelivery: true,
        estimated: "6 Days"
    },

    seller: {
        name: "Home Decor Store",
        rating: 4.3
    },

    offers: [
        "Flat ₹1500 Off",
        "Free Assembly"
    ],

    tags: [
        "Family Choice",
        "Best Seller"
    ],

    faq: [
        {
            question: "Does it require assembly?",
            answer: "Yes, free assembly service is included."
        }
    ],

    reviewsData: [
        {
            user: "Amit",
            rating: 4,
            comment: "Strong and elegant table."
        },
        {
            user: "Sonal",
            rating: 4,
            comment: "Perfect for family dining."
        }
    ]
},

{
    id: 45,
    name: "Air Fryer",
    brand: "Philips",
    category: "Home & Kitchen",

    price: 7999,
    oldPrice: 9999,
    discount: 20,

    rating: 5,
    reviews: 2145,

    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1695089028114-ce28248f0ab9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    description:
    "Healthy cooking air fryer with rapid air technology and digital controls.",

    features: [
        "Oil-Free Cooking",
        "Digital Display",
        "Rapid Air Technology",
        "Easy Cleaning"
    ],

    specifications: {
        Capacity: "4.1L",
        Power: "1400W",
        Control: "Touch Panel",
        Warranty: "2 Years",
    },

    delivery: {
        freeDelivery: true,
        estimated: "2 Days"
    },

    seller: {
        name: "Kitchen Essentials",
        rating: 4.8
    },

    offers: [
        "10% Bank Discount",
        "Free Delivery"
    ],

    tags: [
        "Healthy Cooking",
        "Trending"
    ],

    faq: [
        {
            question: "Can it bake cakes?",
            answer: "Yes, it supports baking and grilling."
        }
    ],

    reviewsData: [
        {
            user: "Neha",
            rating: 5,
            comment: "Amazing product for healthy cooking."
        },
        {
            user: "Ravi",
            rating: 5,
            comment: "Easy to use and clean."
        }
    ]
},

{
    id: 46,
    name: "Microwave Oven",
    brand: "LG",
    category: "Home & Kitchen",

    price: 11999,
    oldPrice: 14999,
    discount: 20,

    rating: 4,
    reviews: 1114,

    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=600",

    description:
    "Smart microwave oven with multiple cooking modes and fast heating.",

    features: [
        "Auto Cook Menu",
        "Child Lock",
        "Quick Heating",
        "Touch Controls"
    ],

    specifications: {
        Capacity: "28L",
        Power: "900W",
        Type: "Convection",
        Warranty: "1 Year",
    },

    delivery: {
        freeDelivery: true,
        estimated: "3 Days"
    },

    seller: {
        name: "LG Appliances",
        rating: 4.5
    },

    offers: [
        "No Cost EMI",
        "Extra ₹1000 Off"
    ],

    tags: [
        "Kitchen Essential",
        "Smart Appliance"
    ],

    faq: [
        {
            question: "Does it support baking?",
            answer: "Yes, it supports baking and grilling."
        }
    ],

    reviewsData: [
        {
            user: "Arvind",
            rating: 4,
            comment: "Works efficiently and heats quickly."
        },
        {
            user: "Shreya",
            rating: 4,
            comment: "Great features and easy controls."
        }
    ]
},

{
    id: 47,
    name: "Washing Machine",
    brand: "Samsung",
    category: "Home & Kitchen",

    price: 10999,
    oldPrice: 13999,
    discount: 21,

    rating: 4.5,
    reviews: 1832,

    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600",

    description:
    "Efficient washing machine with smart wash programs and low noise operation.",

    features: [
        "Quick Wash",
        "Low Noise",
        "Smart Control",
        "Energy Efficient"
    ],

    specifications: {
        Capacity: "7kg",
        Type: "Fully Automatic",
        SpinSpeed: "1200 RPM",
        Warranty: "2 Years",
    },

    delivery: {
        freeDelivery: true,
        estimated: "5 Days"
    },

    seller: {
        name: "Samsung Appliances",
        rating: 4.7
    },

    offers: [
        "Free Installation",
        "10% Cashback"
    ],

    tags: [
        "Best Seller",
        "Home Essential"
    ],

    faq: [
        {
            question: "Does it support quick wash?",
            answer: "Yes, quick wash mode is included."
        }
    ],

    reviewsData: [
        {
            user: "Kishore",
            rating: 5,
            comment: "Very efficient and silent."
        },
        {
            user: "Anu",
            rating: 4,
            comment: "Good washing performance."
        }
    ]
},

{
    id: 48,
    name: "Smart LED Bulb",
    brand: "Philips",
    category: "Home & Kitchen",

    price: 799,
    oldPrice: 1199,
    discount: 33,

    rating: 3,
    reviews: 526,

    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1674659719067-8735479ba10c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    description:
    "WiFi enabled smart LED bulb with voice assistant support.",

    features: [
        "Voice Control",
        "Energy Saving",
        "Mobile App Support",
        "Color Changing"
    ],

    specifications: {
        Power: "12W",
        Connectivity: "WiFi",
        Lifespan: "15000 Hours",
        Warranty: "1 Year",
    },

    delivery: {
        freeDelivery: false,
        estimated: "4 Days"
    },

    seller: {
        name: "Smart Home Store",
        rating: 4.1
    },

    offers: [
        "Buy 2 Get 1",
        "₹100 Cashback"
    ],

    tags: [
        "Smart Home",
        "Trending"
    ],

    faq: [
        {
            question: "Can it connect with Alexa?",
            answer: "Yes, supports Alexa and Google Assistant."
        }
    ],

    reviewsData: [
        {
            user: "Harish",
            rating: 3,
            comment: "Good smart features."
        },
        {
            user: "Pavi",
            rating: 3,
            comment: "Brightness could be better."
        }
    ]
},

{
    id: 49,
    name: "Vacuum Cleaner",
    brand: "Dyson",
    category: "Home & Kitchen",

    price: 9999,
    oldPrice: 12999,
    discount: 23,

    rating: 5,
    reviews: 1658,

    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1558317374-067fb5f30001?w=600",

    description:
    "Powerful vacuum cleaner with advanced suction and easy handling.",

    features: [
        "High Suction Power",
        "Bagless Design",
        "HEPA Filter",
        "Lightweight"
    ],

    specifications: {
        Power: "1800W",
        DustCapacity: "2L",
        Filter: "HEPA",
        Warranty: "2 Years",
    },

    delivery: {
        freeDelivery: true,
        estimated: "2 Days"
    },

    seller: {
        name: "Cleaning Essentials",
        rating: 4.8
    },

    offers: [
        "Extra ₹1000 Off",
        "Free Accessories"
    ],

    tags: [
        "Top Rated",
        "Home Cleaning"
    ],

    faq: [
        {
            question: "Is it suitable for pet hair?",
            answer: "Yes, it works effectively on pet hair."
        }
    ],

    reviewsData: [
        {
            user: "Vijay",
            rating: 5,
            comment: "Excellent suction power."
        },
        {
            user: "Keerthana",
            rating: 5,
            comment: "Makes cleaning very easy."
        }
    ]
},

{
    id: 50,
    name: "Water Purifier",
    brand: "Kent",
    category: "Home & Kitchen",

    price: 14999,
    oldPrice: 18999,
    discount: 21,

    rating: 5,
    reviews: 2014,

    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1589986005992-68bc7aa343c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    description:
    "Advanced RO water purifier providing safe and clean drinking water.",

    features: [
        "RO + UV Purification",
        "Mineral Retention",
        "Large Storage",
        "Energy Saving"
    ],

    specifications: {
        Capacity: "8L",
        Purification: "RO + UV",
        Installation: "Wall Mount",
        Warranty: "1 Year",
    },

    delivery: {
        freeDelivery: true,
        estimated: "3 Days"
    },

    seller: {
        name: "Kent Official",
        rating: 4.9
    },

    offers: [
        "Free Installation",
        "₹1500 Instant Discount"
    ],

    tags: [
        "Best Seller",
        "Family Essential"
    ],

    faq: [
        {
            question: "Does it retain minerals?",
            answer: "Yes, mineral retention technology included."
        }
    ],

    reviewsData: [
        {
            user: "Ramesh",
            rating: 5,
            comment: "Water tastes very pure."
        },
        {
            user: "Lakshmi",
            rating: 5,
            comment: "Excellent purification quality."
        }
    ]
},

{
    id: 51,
    name: "Gardening Tool Kit",
    brand: "GardenPro",
    category: "Home & Kitchen",

    price: 2499,
    oldPrice: 3199,
    discount: 22,

    rating: 4.1,
    reviews: 684,

    stock: 18,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1416879595882-3373a0480b5b",

    description:
    "Complete gardening tool set for planting, trimming, and maintaining your garden.",

    features: [
        "Rust Resistant Tools",
        "Comfort Grip Handles",
        "Portable Storage Bag",
        "Durable Steel Build"
    ],

    specifications: {
        Material: "Carbon Steel",
        Pieces: "10 Tools",
        Warranty: "6 Months",
    },

    delivery: {
        freeDelivery: true,
        estimated: "3 Days"
    },

    seller: {
        name: "Garden Store",
        rating: 4.4
    },

    offers: [
        "5% Instant Discount",
        "Free Gardening Gloves"
    ],

    tags: [
        "Garden Essential",
        "Top Rated"
    ],

    faq: [
        {
            question: "Is the storage bag included?",
            answer: "Yes, a portable bag is included."
        }
    ],

    reviewsData: [
        {
            user: "Aarav",
            rating: 4,
            comment: "Very useful gardening kit."
        },
        {
            user: "Sneha",
            rating: 5,
            comment: "Strong and durable tools."
        }
    ]
},

{
    id: 52,
    name: "Blood Pressure Monitor",
    brand: "HealthCare",
    category: "Home & Kitchen",

    price: 1999,
    oldPrice: 2599,
    discount: 23,

    rating: 4.4,
    reviews: 1432,

    stock: 24,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1649877510851-10effb9a59b4?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    description:
    "Digital blood pressure monitor with accurate readings and easy operation.",

    features: [
        "Large Display",
        "Memory Storage",
        "Automatic Inflation",
        "Portable Design"
    ],

    specifications: {
        Display: "LCD",
        Power: "Battery Operated",
        Warranty: "1 Year",
    },

    delivery: {
        freeDelivery: true,
        estimated: "2 Days"
    },

    seller: {
        name: "MediCare Hub",
        rating: 4.6
    },

    offers: [
        "10% Bank Discount",
        "No Cost EMI"
    ],

    tags: [
        "Health Care",
        "Best Seller"
    ],

    faq: [
        {
            question: "Does it include batteries?",
            answer: "Yes, batteries are included."
        }
    ],

    reviewsData: [
        {
            user: "Rahul",
            rating: 5,
            comment: "Very accurate readings."
        },
        {
            user: "Anjali",
            rating: 4,
            comment: "Easy to use and lightweight."
        }
    ]
},

{
    id: 53,
    name: "Yoga Mat",
    brand: "FitFlex",
    category: "Home & Kitchen",

    price: 899,
    oldPrice: 1199,
    discount: 25,

    rating: 4.0,
    reviews: 942,

    stock: 30,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1518611012118-696072aa579a",

    description:
    "Soft and non-slip yoga mat suitable for workouts, yoga, and meditation.",

    features: [
        "Anti Slip Surface",
        "Lightweight",
        "Easy to Roll",
        "Sweat Resistant"
    ],

    specifications: {
        Material: "Foam",
        Thickness: "6mm",
        Warranty: "6 Months",
    },

    delivery: {
        freeDelivery: true,
        estimated: "2 Days"
    },

    seller: {
        name: "Fitness Zone",
        rating: 4.3
    },

    offers: [
        "Extra 5% Discount",
        "Free Carry Strap"
    ],

    tags: [
        "Fitness",
        "Trending"
    ],

    faq: [
        {
            question: "Can it be washed?",
            answer: "Yes, it is easy to clean."
        }
    ],

    reviewsData: [
        {
            user: "Priya",
            rating: 4,
            comment: "Comfortable and soft."
        },
        {
            user: "Karthik",
            rating: 4,
            comment: "Perfect for daily workouts."
        }
    ]
},

{
    id: 54,
    name: "Electric Kettle",
    brand: "Philips",
    category: "Home & Kitchen",

    price: 1499,
    oldPrice: 1999,
    discount: 25,

    rating: 4.6,
    reviews: 1653,

    stock: 20,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1643114786355-ff9e52736eab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    description:
    "Fast boiling electric kettle ideal for tea, coffee, and instant meals.",

    features: [
        "Auto Shut-Off",
        "Fast Heating",
        "Cool Touch Handle",
        "Stainless Steel Body"
    ],

    specifications: {
        Capacity: "1.5L",
        Power: "1500W",
        Warranty: "1 Year",
    },

    delivery: {
        freeDelivery: true,
        estimated: "1 Day"
    },

    seller: {
        name: "Kitchen World",
        rating: 4.7
    },

    offers: [
        "10% Cashback",
        "Free Delivery"
    ],

    tags: [
        "Kitchen Essential",
        "Top Pick"
    ],

    faq: [
        {
            question: "Does it auto switch off?",
            answer: "Yes, it has auto shut-off protection."
        }
    ],

    reviewsData: [
        {
            user: "Meena",
            rating: 5,
            comment: "Boils water very quickly."
        },
        {
            user: "Rohit",
            rating: 4,
            comment: "Compact and useful."
        }
    ]
},

{
    id: 55,
    name: "Coffee Maker",
    brand: "Nescafe",
    category: "Home & Kitchen",

    price: 4999,
    oldPrice: 6499,
    discount: 23,

    rating: 4.8,
    reviews: 2143,

    stock: 12,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1707241358597-bafcc8a8e73d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    description:
    "Premium coffee maker for brewing delicious coffee at home instantly.",

    features: [
        "Quick Brew",
        "Easy Cleaning",
        "Compact Design",
        "Energy Efficient"
    ],

    specifications: {
        Capacity: "4 Cups",
        Power: "800W",
        Warranty: "1 Year",
    },

    delivery: {
        freeDelivery: true,
        estimated: "2 Days"
    },

    seller: {
        name: "Coffee Hub",
        rating: 4.8
    },

    offers: [
        "15% Bank Discount",
        "Free Coffee Sachets"
    ],

    tags: [
        "Best Seller",
        "Premium"
    ],

    faq: [
        {
            question: "Can it make cappuccino?",
            answer: "Yes, it supports multiple coffee styles."
        }
    ],

    reviewsData: [
        {
            user: "Arjun",
            rating: 5,
            comment: "Amazing coffee quality."
        },
        {
            user: "Divya",
            rating: 5,
            comment: "Very easy to use."
        }
    ]
},

{
    id: 56,
    name: "Wall Clock",
    brand: "HomeStyle",
    category: "Home & Kitchen",

    price: 999,
    oldPrice: 1399,
    discount: 29,

    rating: 4.2,
    reviews: 753,

    stock: 27,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c",

    description:
    "Modern wall clock with elegant design suitable for living rooms and offices.",

    features: [
        "Silent Movement",
        "Elegant Design",
        "Easy Installation",
        "Durable Build"
    ],

    specifications: {
        Material: "Wood & Glass",
        Size: "14 Inch",
        Warranty: "6 Months",
    },

    delivery: {
        freeDelivery: true,
        estimated: "3 Days"
    },

    seller: {
        name: "Decor Hub",
        rating: 4.3
    },

    offers: [
        "Flat ₹100 Discount",
        "Free Delivery"
    ],

    tags: [
        "Home Decor",
        "Trending"
    ],

    faq: [
        {
            question: "Is it silent?",
            answer: "Yes, it has silent sweeping movement."
        }
    ],

    reviewsData: [
        {
            user: "Vikram",
            rating: 4,
            comment: "Looks premium."
        },
        {
            user: "Aisha",
            rating: 4,
            comment: "Perfect for my room."
        }
    ]
},

{
    id: 57,
    name: "Bedside Lamp",
    brand: "GlowLite",
    category: "Home & Kitchen",

    price: 1499,
    oldPrice: 1999,
    discount: 25,

    rating: 4.1,
    reviews: 865,

    stock: 16,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",

    description:
    "Stylish bedside lamp with warm lighting for bedrooms and study spaces.",

    features: [
        "Warm Light",
        "Compact Design",
        "Energy Efficient",
        "Touch Control"
    ],

    specifications: {
        Material: "Metal & Fabric",
        Power: "12W",
        Warranty: "1 Year",
    },

    delivery: {
        freeDelivery: true,
        estimated: "2 Days"
    },

    seller: {
        name: "Light House",
        rating: 4.5
    },

    offers: [
        "Extra ₹150 Off",
        "Free Delivery"
    ],

    tags: [
        "Decor",
        "Best Seller"
    ],

    faq: [
        {
            question: "Does it support LED bulbs?",
            answer: "Yes, LED bulbs are supported."
        }
    ],

    reviewsData: [
        {
            user: "Sanjay",
            rating: 4,
            comment: "Beautiful lighting."
        },
        {
            user: "Neha",
            rating: 4,
            comment: "Looks elegant."
        }
    ]
},

{
    id: 58,
    name: "Office Chair",
    brand: "ComfortPro",
    category: "Home & Kitchen",

    price: 6999,
    oldPrice: 8999,
    discount: 22,

    rating: 4.7,
    reviews: 1920,

    stock: 11,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1688578735427-994ecdea3ea4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    description:
    "Ergonomic office chair designed for maximum comfort during long work hours.",

    features: [
        "Adjustable Height",
        "Lumbar Support",
        "360 Degree Rotation",
        "Breathable Cushion"
    ],

    specifications: {
        Material: "Mesh & Steel",
        WeightCapacity: "120kg",
        Warranty: "2 Years",
    },

    delivery: {
        freeDelivery: true,
        estimated: "4 Days"
    },

    seller: {
        name: "Office World",
        rating: 4.7
    },

    offers: [
        "10% Cashback",
        "Free Installation"
    ],

    tags: [
        "Work From Home",
        "Top Rated"
    ],

    faq: [
        {
            question: "Is assembly required?",
            answer: "Yes, basic assembly is required."
        }
    ],

    reviewsData: [
        {
            user: "Kiran",
            rating: 5,
            comment: "Very comfortable chair."
        },
        {
            user: "Harsha",
            rating: 4,
            comment: "Good support for long hours."
        }
    ]
},

{
    id: 59,
    name: "Kitchen Knife Set",
    brand: "ChefMaster",
    category: "Home & Kitchen",

    price: 1999,
    oldPrice: 2699,
    discount: 26,

    rating: 4.3,
    reviews: 988,

    stock: 22,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1593618998160-e34014e67546",

    description:
    "Sharp and durable kitchen knife set for all cooking needs.",

    features: [
        "Stainless Steel",
        "Ergonomic Grip",
        "Rust Resistant",
        "Easy Cleaning"
    ],

    specifications: {
        Pieces: "6 Knives",
        Material: "Stainless Steel",
        Warranty: "1 Year",
    },

    delivery: {
        freeDelivery: true,
        estimated: "2 Days"
    },

    seller: {
        name: "Kitchen Store",
        rating: 4.5
    },

    offers: [
        "Flat ₹200 Off",
        "Free Delivery"
    ],

    tags: [
        "Kitchen Essential",
        "Trending"
    ],

    faq: [
        {
            question: "Are the knives dishwasher safe?",
            answer: "Yes, they are dishwasher safe."
        }
    ],

    reviewsData: [
        {
            user: "Ramesh",
            rating: 4,
            comment: "Very sharp and durable."
        },
        {
            user: "Pooja",
            rating: 5,
            comment: "Excellent quality."
        }
    ]
},

{
    id: 60,
    name: "Storage Rack",
    brand: "SpaceSaver",
    category: "Home & Kitchen",

    price: 2999,
    oldPrice: 3999,
    discount: 25,

    rating: 4.0,
    reviews: 612,

    stock: 14,
    availability: "In Stock",

    image:"https://plus.unsplash.com/premium_photo-1672976596533-695f79868216?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    description:
    "Multi-layer storage rack for organizing kitchen and household items neatly.",

    features: [
        "Space Saving",
        "Strong Build",
        "Easy Assembly",
        "Modern Design"
    ],

    specifications: {
        Material: "Metal",
        Shelves: "5 Layers",
        Warranty: "1 Year",
    },

    delivery: {
        freeDelivery: true,
        estimated: "3 Days"
    },

    seller: {
        name: "Home Organizers",
        rating: 4.4
    },

    offers: [
        "5% Instant Discount",
        "Free Delivery"
    ],

    tags: [
        "Organizer",
        "Top Pick"
    ],

    faq: [
        {
            question: "Can it hold heavy items?",
            answer: "Yes, it supports up to 80kg."
        }
    ],

    reviewsData: [
        {
            user: "Deepak",
            rating: 4,
            comment: "Very sturdy rack."
        },
        {
            user: "Shalini",
            rating: 4,
            comment: "Useful for storage."
        }
    ]
},

{
    id: 61,
    name: "Maybelline Fit Me Foundation",
    brand: "Maybelline",
    category: "Beauty & Personal Care",

    price: 699,
    oldPrice: 899,
    discount: 22,

    rating: 4.3,
    reviews: 2145,

    stock: 24,
    availability: "In Stock",

    image:"https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/mby/mby23866/l/28.jpg",

    description:
    "Lightweight matte foundation with natural coverage for all skin types.",

    features: [
        "Matte Finish",
        "Oil Control",
        "Long Lasting",
        "Smooth Coverage"
    ],

    specifications: {
        Shade: "Natural Beige",
        Quantity: "30ml",
        Warranty: "No Warranty",
    },

    delivery: {
        freeDelivery: true,
        estimated: "2 Days"
    },

    seller: {
        name: "Beauty Store",
        rating: 4.7
    },

    offers: [
        "10% Bank Discount",
        "Free Delivery"
    ],

    tags: [
        "Best Seller",
        "Trending"
    ],

    faq: [
        {
            question: "Is it suitable for oily skin?",
            answer: "Yes, it works well for oily skin."
        }
    ],

    reviewsData: [
        {
            user: "Priya",
            rating: 5,
            comment: "Blends perfectly on skin."
        },
        {
            user: "Sneha",
            rating: 4,
            comment: "Very smooth finish."
        }
    ]
},

{
    id: 62,
    name: "Lakme Face Wash",
    brand: "Lakme",
    category: "Beauty & Personal Care",

    price: 249,
    oldPrice: 349,
    discount: 29,

    rating: 3.9,
    reviews: 892,

    stock: 8,
    availability: "Only Few Left",

    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Z_Vv6yr2tyRIvbwx9PnizsH7w0X6CC_Ptg&s",

    description:
    "Refreshing face wash that removes dirt and excess oil effectively.",

    features: [
        "Deep Cleansing",
        "Oil Control",
        "Refreshing Formula",
        "Daily Use"
    ],

    specifications: {
        Quantity: "100ml",
        SkinType: "All Skin Types",
        Warranty: "No Warranty",
    },

    delivery: {
        freeDelivery: false,
        estimated: "3 Days"
    },

    seller: {
        name: "Glow Beauty",
        rating: 4.4
    },

    offers: [
        "Buy 2 Get 1 Free",
        "5% Cashback"
    ],

    tags: [
        "Skin Care",
        "Popular"
    ],

    faq: [
        {
            question: "Can it be used daily?",
            answer: "Yes, it is suitable for daily use."
        }
    ],

    reviewsData: [
        {
            user: "Aisha",
            rating: 4,
            comment: "Good for oily skin."
        },
        {
            user: "Riya",
            rating: 3,
            comment: "Nice fragrance."
        }
    ]
},

{
    id: 63,
    name: "Mamaearth Onion Hair Oil",
    brand: "Mamaearth",
    category: "Beauty & Personal Care",

    price: 399,
    oldPrice: 549,
    discount: 27,

    rating: 4.8,
    reviews: 3240,

    stock: 31,
    availability: "In Stock",

    image:"https://images.mamaearth.in/wysiwyg/Onion%20hair%20oil_200ml_FOP_1200x1200.png",

    description:
    "Natural onion hair oil that helps reduce hair fall and supports hair growth.",

    features: [
        "Reduces Hair Fall",
        "Natural Ingredients",
        "Non Sticky",
        "Boosts Hair Growth"
    ],

    specifications: {
        Quantity: "200ml",
        HairType: "All Hair Types",
        Warranty: "No Warranty",
    },

    delivery: {
        freeDelivery: true,
        estimated: "1 Day"
    },

    seller: {
        name: "Mamaearth Official",
        rating: 4.9
    },

    offers: [
        "15% Bank Discount",
        "Free Delivery"
    ],

    tags: [
        "Top Rated",
        "Natural Care"
    ],

    faq: [
        {
            question: "Does it help hair growth?",
            answer: "Yes, regular use supports healthy hair growth."
        }
    ],

    reviewsData: [
        {
            user: "Meena",
            rating: 5,
            comment: "Very effective product."
        },
        {
            user: "Harini",
            rating: 5,
            comment: "Hair feels smoother now."
        }
    ]
},

{
    id: 64,
    name: "Nivea Body Lotion",
    brand: "Nivea",
    category: "Beauty & Personal Care",

    price: 320,
    oldPrice: 450,
    discount: 29,

    rating: 4.2,
    reviews: 1789,

    stock: 19,
    availability: "In Stock",

    image:"https://cdn.grofers.com/da/cms-assets/cms/product/12146b1c-3ce4-4bf9-9334-1b5e7fec3ddd.jpg",

    description:
    "Moisturizing body lotion that keeps skin soft and hydrated all day.",

    features: [
        "48 Hour Moisture",
        "Smooth Skin",
        "Quick Absorption",
        "Non Greasy"
    ],

    specifications: {
        Quantity: "400ml",
        SkinType: "Dry Skin",
        Warranty: "No Warranty",
    },

    delivery: {
        freeDelivery: true,
        estimated: "2 Days"
    },

    seller: {
        name: "Nivea Store",
        rating: 4.6
    },

    offers: [
        "Extra ₹50 Off",
        "Free Delivery"
    ],

    tags: [
        "Skin Care",
        "Best Seller"
    ],

    faq: [
        {
            question: "Is it suitable for winter?",
            answer: "Yes, it provides deep moisturization."
        }
    ],

    reviewsData: [
        {
            user: "Divya",
            rating: 4,
            comment: "Very hydrating lotion."
        },
        {
            user: "Kaviya",
            rating: 5,
            comment: "Softens skin instantly."
        }
    ]
},

{
    id: 65,
    name: "Minimalist Vitamin C Serum",
    brand: "Minimalist",
    category: "Beauty & Personal Care",

    price: 599,
    oldPrice: 799,
    discount: 25,

    rating: 4.0,
    reviews: 1540,

    stock: 5,
    availability: "Only Few Left",

    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwsFLgwc0KDNRQx_oxosTRWFM5xpUL00RRWw&s",

    description:
    "Vitamin C serum that brightens skin and reduces dark spots.",

    features: [
        "Brightening Formula",
        "Reduces Pigmentation",
        "Lightweight Texture",
        "Hydrating"
    ],

    specifications: {
        Quantity: "30ml",
        SkinType: "All Skin Types",
        Warranty: "No Warranty",
    },

    delivery: {
        freeDelivery: false,
        estimated: "3 Days"
    },

    seller: {
        name: "Skin Care Hub",
        rating: 4.5
    },

    offers: [
        "Flat ₹100 Discount",
        "Cashback Offer"
    ],

    tags: [
        "Trending",
        "Glow Skin"
    ],

    faq: [
        {
            question: "Can beginners use this serum?",
            answer: "Yes, it is beginner friendly."
        }
    ],

    reviewsData: [
        {
            user: "Pooja",
            rating: 4,
            comment: "Skin looks brighter."
        },
        {
            user: "Ananya",
            rating: 4,
            comment: "Good for daily use."
        }
    ]
},

{
    id: 66,
    name: "Philips Hair Dryer",
    brand: "Philips",
    category: "Beauty & Personal Care",

    price: 1499,
    oldPrice: 1999,
    discount: 25,

    rating: 4.6,
    reviews: 2210,

    stock: 14,
    availability: "In Stock",

    image:"https://www.shop.philips.co.in/cdn/shop/files/BHD318-00_1_646dcb26-0ceb-49fe-95a0-6b0700bd05cd.jpg?v=1743671828",

    description:
    "Compact hair dryer with fast drying technology and heat protection.",

    features: [
        "Fast Drying",
        "Heat Protection",
        "Foldable Handle",
        "Multiple Speed Modes"
    ],

    specifications: {
        Power: "1600W",
        CordLength: "1.8m",
        Warranty: "2 Years",
    },

    delivery: {
        freeDelivery: true,
        estimated: "1 Day"
    },

    seller: {
        name: "Philips Store",
        rating: 4.8
    },

    offers: [
        "10% Cashback",
        "Free Delivery"
    ],

    tags: [
        "Top Pick",
        "Trending"
    ],

    faq: [
        {
            question: "Does it have cool air mode?",
            answer: "Yes, cool air mode is available."
        }
    ],

    reviewsData: [
        {
            user: "Roshni",
            rating: 5,
            comment: "Very powerful dryer."
        },
        {
            user: "Keerthi",
            rating: 4,
            comment: "Compact and easy to carry."
        }
    ]
},

{
    id: 67,
    name: "Beardo Beard Oil",
    brand: "Beardo",
    category: "Beauty & Personal Care",

    price: 350,
    oldPrice: 499,
    discount: 30,

    rating: 4.1,
    reviews: 1102,

    stock: 21,
    availability: "In Stock",

    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1N82MjH_BrY3aBP63poCXEgFEGlbWIKSdRg&s",

    description:
    "Premium beard oil for softer beard growth and healthy skin.",

    features: [
        "Softens Beard",
        "Natural Oils",
        "Non Sticky",
        "Long Lasting Fragrance"
    ],

    specifications: {
        Quantity: "30ml",
        Fragrance: "Woody",
        Warranty: "No Warranty",
    },

    delivery: {
        freeDelivery: true,
        estimated: "2 Days"
    },

    seller: {
        name: "Men Grooming Store",
        rating: 4.5
    },

    offers: [
        "Extra 10% Off",
        "Free Delivery"
    ],

    tags: [
        "Men Care",
        "Popular"
    ],

    faq: [
        {
            question: "Can it be used daily?",
            answer: "Yes, daily use is recommended."
        }
    ],

    reviewsData: [
        {
            user: "Rahul",
            rating: 4,
            comment: "Makes beard smooth."
        },
        {
            user: "Arun",
            rating: 5,
            comment: "Nice fragrance and texture."
        }
    ]
},

{
    id: 68,
    name: "Himalaya Neem Face Pack",
    brand: "Himalaya",
    category: "Beauty & Personal Care",

    price: 180,
    oldPrice: 250,
    discount: 28,

    rating: 4.0,
    reviews: 940,

    stock: 11,
    availability: "In Stock",

    image:"https://himalayawellness.in/cdn/shop/products/purifying-neem-pack-50g.jpg?v=1622097556",

    description:
    "Neem face pack that helps control acne and deeply cleanses skin.",

    features: [
        "Acne Control",
        "Natural Neem",
        "Deep Cleansing",
        "Cooling Effect"
    ],

    specifications: {
        Quantity: "100g",
        SkinType: "Oily Skin",
        Warranty: "No Warranty",
    },

    delivery: {
        freeDelivery: false,
        estimated: "4 Days"
    },

    seller: {
        name: "Himalaya Care",
        rating: 4.4
    },

    offers: [
        "Buy 1 Get 1 50% Off",
        "Cashback Offer"
    ],

    tags: [
        "Natural Care",
        "Skin Care"
    ],

    faq: [
        {
            question: "Does it help acne?",
            answer: "Yes, it helps reduce acne and oil."
        }
    ],

    reviewsData: [
        {
            user: "Nisha",
            rating: 4,
            comment: "Refreshing face pack."
        },
        {
            user: "Lavanya",
            rating: 4,
            comment: "Skin feels clean after use."
        }
    ]
},

{
    id: 69,
    name: "Dove Shampoo",
    brand: "Dove",
    category: "Beauty & Personal Care",

    price: 420,
    oldPrice: 550,
    discount: 24,

    rating: 4.4,
    reviews: 1890,

    stock: 27,
    availability: "In Stock",

    image:"https://www.quickpantry.in/cdn/shop/products/dove-intense-repair-shampoo-quick-pantry-3.jpg?v=1772984328",

    description:
    "Repair shampoo that nourishes damaged hair and improves smoothness.",

    features: [
        "Hair Repair",
        "Smooth Finish",
        "Daily Care",
        "Deep Nourishment"
    ],

    specifications: {
        Quantity: "650ml",
        HairType: "Damaged Hair",
        Warranty: "No Warranty",
    },

    delivery: {
        freeDelivery: true,
        estimated: "2 Days"
    },

    seller: {
        name: "Hair Care Store",
        rating: 4.6
    },

    offers: [
        "Extra ₹40 Off",
        "Free Delivery"
    ],

    tags: [
        "Hair Care",
        "Best Seller"
    ],

    faq: [
        {
            question: "Is it suitable for daily use?",
            answer: "Yes, it is gentle for everyday use."
        }
    ],

    reviewsData: [
        {
            user: "Swathi",
            rating: 5,
            comment: "Hair feels softer."
        },
        {
            user: "Monika",
            rating: 4,
            comment: "Good fragrance and shine."
        }
    ]
},

{
    id: 70,
    name: "WOW Skin Science Aloe Gel",
    brand: "WOW Skin Science",
    category: "Beauty & Personal Care",

    price: 299,
    oldPrice: 399,
    discount: 25,

    rating: 4.5,
    reviews: 1320,

    stock: 16,
    availability: "In Stock",

    image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/7504b595-6261-405c-b52b-fcf8f2499306.png?bg_token=color.background.quaternary",

    description:
    "Pure aloe vera gel for soothing, moisturizing, and hydrating skin and hair.",

    features: [
        "Hydrating Formula",
        "Multi Purpose Use",
        "Cooling Effect",
        "Natural Aloe Vera"
    ],

    specifications: {
        Quantity: "250ml",
        SkinType: "All Skin Types",
        Warranty: "No Warranty",
    },

    delivery: {
        freeDelivery: true,
        estimated: "2 Days"
    },

    seller: {
        name: "WOW Official",
        rating: 4.7
    },

    offers: [
        "10% Instant Discount",
        "Free Delivery"
    ],

    tags: [
        "Trending",
        "Natural Care"
    ],

    faq: [
        {
            question: "Can it be used on hair?",
            answer: "Yes, it works for both skin and hair."
        }
    ],

    reviewsData: [
        {
            user: "Kajal",
            rating: 5,
            comment: "Very soothing gel."
        },
        {
            user: "Ishita",
            rating: 4,
            comment: "Good quality aloe vera gel."
        }
    ]
},

{
    id: 71,
    name: "The Psychology of Money",
    brand: "Jaico Publishing",
    category: "Books",

    price: 399,
    oldPrice: 499,
    discount: 20,

    rating: 5,
    reviews: 4521,

    stock: 18,
    availability: "In Stock",

    image:"https://m.media-amazon.com/images/I/71g2ednj0JL._SL1500_.jpg",

    description:
    "A bestselling personal finance book explaining wealth, behavior, and money mindset.",

    features: [
        "Finance Insights",
        "Easy Language",
        "Bestseller",
        "Paperback Edition"
    ],

    specifications: {
        Author: "Morgan Housel",
        Language: "English",
        Pages: "256",
        Publisher: "Jaico Publishing"
    },

    delivery: {
        freeDelivery: true,
        estimated: "3 Days"
    },

    seller: {
        name: "Book World",
        rating: 4.7
    },

    offers: [
        "5% Bank Discount",
        "Free Bookmark"
    ],

    tags: [
        "Best Seller",
        "Trending"
    ],

    faq: [
        {
            question: "Is this suitable for beginners?",
            answer: "Yes, it is beginner friendly."
        }
    ],

    reviewsData: [
        {
            user: "Rahul",
            rating: 5,
            comment: "Very insightful and practical."
        },
        {
            user: "Ananya",
            rating: 4,
            comment: "Easy to understand concepts."
        }
    ]
},

{
    id: 72,
    name: "Atomic Habits",
    brand: "Random House",
    category: "Books",

    price: 550,
    oldPrice: 699,
    discount: 21,

    rating: 4.5,
    reviews: 5230,

    stock: 12,
    availability: "In Stock",

    image:"https://m.media-amazon.com/images/I/81wgcld4wxL._SL1500_.jpg",

    description:
    "A powerful self-improvement book focused on building good habits and breaking bad ones.",

    features: [
        "Habit Building",
        "Motivational",
        "Bestseller",
        "Paperback"
    ],

    specifications: {
        Author: "James Clear",
        Language: "English",
        Pages: "320",
        Publisher: "Random House"
    },

    delivery: {
        freeDelivery: true,
        estimated: "2 Days"
    },

    seller: {
        name: "Readers Hub",
        rating: 4.8
    },

    offers: [
        "10% Card Discount",
        "Free Delivery"
    ],

    tags: [
        "Trending",
        "Editor's Choice"
    ],

    faq: [
        {
            question: "Does it contain practical examples?",
            answer: "Yes, the book includes many real-life examples."
        }
    ],

    reviewsData: [
        {
            user: "Kiran",
            rating: 5,
            comment: "Life-changing book."
        },
        {
            user: "Priya",
            rating: 4,
            comment: "Very motivating read."
        }
    ]
},

{
    id: 73,
    name: "Rich Dad Poor Dad",
    brand: "Plata Publishing",
    category: "Books",

    price: 350,
    oldPrice: 450,
    discount: 22,

    rating: 4,
    reviews: 3890,

    stock: 20,
    availability: "In Stock",

    image:"https://m.media-amazon.com/images/I/81bsw6fnUiL._SL1500_.jpg",

    description:
    "A famous finance book teaching financial independence and wealth creation.",

    features: [
        "Money Management",
        "Personal Finance",
        "Easy Reading",
        "Bestseller"
    ],

    specifications: {
        Author: "Robert Kiyosaki",
        Language: "English",
        Pages: "336",
        Publisher: "Plata Publishing"
    },

    delivery: {
        freeDelivery: false,
        estimated: "4 Days"
    },

    seller: {
        name: "Knowledge Store",
        rating: 4.6
    },

    offers: [
        "Flat ₹50 Cashback",
        "Combo Book Offer"
    ],

    tags: [
        "Popular",
        "Finance"
    ],

    faq: [
        {
            question: "Is this book motivational?",
            answer: "Yes, it focuses on financial thinking and growth."
        }
    ],

    reviewsData: [
        {
            user: "Arjun",
            rating: 4,
            comment: "Great financial lessons."
        },
        {
            user: "Meena",
            rating: 4,
            comment: "Worth reading once."
        }
    ]
},

{
    id: 74,
    name: "Ikigai",
    brand: "Penguin",
    category: "Books",

    price: 420,
    oldPrice: 520,
    discount: 19,

    rating: 3,
    reviews: 2100,

    stock: 9,
    availability: "In Stock",

    image:"https://m.media-amazon.com/images/I/81l3rZK4lnL._SL1500_.jpg",

    description:
    "A Japanese philosophy book about finding purpose and happiness in life.",

    features: [
        "Self Help",
        "Mindfulness",
        "Inspirational",
        "Paperback"
    ],

    specifications: {
        Author: "Héctor García",
        Language: "English",
        Pages: "208",
        Publisher: "Penguin"
    },

    delivery: {
        freeDelivery: true,
        estimated: "3 Days"
    },

    seller: {
        name: "Book Point",
        rating: 4.5
    },

    offers: [
        "Buy 2 Get 1",
        "Free Delivery"
    ],

    tags: [
        "Inspirational",
        "Trending"
    ],

    faq: [
        {
            question: "Is the content easy to understand?",
            answer: "Yes, the writing style is simple."
        }
    ],

    reviewsData: [
        {
            user: "Sneha",
            rating: 3,
            comment: "Good but slow paced."
        },
        {
            user: "Varun",
            rating: 4,
            comment: "Interesting philosophy."
        }
    ]
},

{
    id: 75,
    name: "Think Like a Monk",
    brand: "Simon & Schuster",
    category: "Books",

    price: 480,
    oldPrice: 620,
    discount: 23,

    rating: 4,
    reviews: 2780,

    stock: 14,
    availability: "In Stock",

    image:"https://m.media-amazon.com/images/I/71UwSHSZRnS._SL1500_.jpg",

    description:
    "A motivational book about mindfulness, discipline, and mental peace.",

    features: [
        "Mindfulness",
        "Self Growth",
        "Motivational",
        "Paperback"
    ],

    specifications: {
        Author: "Jay Shetty",
        Language: "English",
        Pages: "352",
        Publisher: "Simon & Schuster"
    },

    delivery: {
        freeDelivery: true,
        estimated: "2 Days"
    },

    seller: {
        name: "Readers Zone",
        rating: 4.7
    },

    offers: [
        "10% Instant Discount",
        "Free Shipping"
    ],

    tags: [
        "Motivational",
        "Best Seller"
    ],

    faq: [
        {
            question: "Does this book include practical tips?",
            answer: "Yes, it includes actionable advice."
        }
    ],

    reviewsData: [
        {
            user: "Akash",
            rating: 4,
            comment: "Very calming and useful."
        },
        {
            user: "Divya",
            rating: 5,
            comment: "Loved the life lessons."
        }
    ]
},

{
    id: 76,
    name: "Harry Potter Collection",
    brand: "Bloomsbury",
    category: "Books",

    price: 3200,
    oldPrice: 3999,
    discount: 20,

    rating: 3.5,
    reviews: 6120,

    stock: 6,
    availability: "Limited Stock",

    image:"https://m.media-amazon.com/images/I/91ocU8970hL._SL1500_.jpg",

    description:
    "Complete Harry Potter book collection packed with magical adventures.",

    features: [
        "Complete Collection",
        "Fantasy Series",
        "Premium Box Set",
        "Collector Edition"
    ],

    specifications: {
        Author: "J.K. Rowling",
        Language: "English",
        Books: "7",
        Publisher: "Bloomsbury"
    },

    delivery: {
        freeDelivery: true,
        estimated: "5 Days"
    },

    seller: {
        name: "Magic Books",
        rating: 4.9
    },

    offers: [
        "Special Combo Offer",
        "Free Gift Wrap"
    ],

    tags: [
        "Collector Edition",
        "Popular"
    ],

    faq: [
        {
            question: "Are all 7 books included?",
            answer: "Yes, complete collection included."
        }
    ],

    reviewsData: [
        {
            user: "Nithin",
            rating: 4,
            comment: "Amazing collection."
        },
        {
            user: "Riya",
            rating: 3,
            comment: "Box quality could improve."
        }
    ]
},

{
    id: 77,
    name: "Wings of Fire",
    brand: "Universities Press",
    category: "Books",

    price: 299,
    oldPrice: 399,
    discount: 25,

    rating: 5,
    reviews: 4100,

    stock: 22,
    availability: "In Stock",

    image:"https://m.media-amazon.com/images/I/71KKZlVjbwL._SL1500_.jpg",

    description:
    "Autobiography of Dr. A.P.J Abdul Kalam sharing his inspiring journey.",

    features: [
        "Inspirational",
        "Biography",
        "Paperback",
        "Educational"
    ],

    specifications: {
        Author: "A.P.J Abdul Kalam",
        Language: "English",
        Pages: "180",
        Publisher: "Universities Press"
    },

    delivery: {
        freeDelivery: false,
        estimated: "3 Days"
    },

    seller: {
        name: "Education Hub",
        rating: 4.8
    },

    offers: [
        "Extra ₹20 Off",
        "Student Offer"
    ],

    tags: [
        "Inspirational",
        "Must Read"
    ],

    faq: [
        {
            question: "Is this book suitable for students?",
            answer: "Yes, highly recommended for students."
        }
    ],

    reviewsData: [
        {
            user: "Harish",
            rating: 5,
            comment: "Very inspiring story."
        },
        {
            user: "Keerthi",
            rating: 5,
            comment: "One of my favorite books."
        }
    ]
},

{
    id: 78,
    name: "The Alchemist",
    brand: "HarperCollins",
    category: "Books",

    price: 350,
    oldPrice: 450,
    discount: 22,

    rating: 4,
    reviews: 3650,

    stock: 11,
    availability: "In Stock",

    image:"https://m.media-amazon.com/images/I/71aFt4+OTOL._SL1500_.jpg",

    description:
    "A philosophical novel about dreams, destiny, and self-discovery.",

    features: [
        "Fiction",
        "Inspirational",
        "Easy Reading",
        "Classic Novel"
    ],

    specifications: {
        Author: "Paulo Coelho",
        Language: "English",
        Pages: "208",
        Publisher: "HarperCollins"
    },

    delivery: {
        freeDelivery: true,
        estimated: "2 Days"
    },

    seller: {
        name: "Novel Corner",
        rating: 4.6
    },

    offers: [
        "5% Cashback",
        "Free Delivery"
    ],

    tags: [
        "Classic",
        "Popular"
    ],

    faq: [
        {
            question: "Is this book fiction?",
            answer: "Yes, it is a philosophical fiction novel."
        }
    ],

    reviewsData: [
        {
            user: "Asha",
            rating: 4,
            comment: "Beautiful storytelling."
        },
        {
            user: "Rohit",
            rating: 4,
            comment: "Meaningful and inspiring."
        }
    ]
},

{
    id: 79,
    name: "Do Epic Shit",
    brand: "Penguin",
    category: "Books",

    price: 280,
    oldPrice: 350,
    discount: 20,

    rating: 4.5,
    reviews: 1980,

    stock: 17,
    availability: "In Stock",

    image:"https://m.media-amazon.com/images/I/71dNsRuYL7L._SL1500_.jpg",

    description:
    "A motivational book packed with practical life advice and inspiration.",

    features: [
        "Motivational",
        "Self Help",
        "Easy Reading",
        "Paperback"
    ],

    specifications: {
        Author: "Ankur Warikoo",
        Language: "English",
        Pages: "280",
        Publisher: "Penguin"
    },

    delivery: {
        freeDelivery: false,
        estimated: "4 Days"
    },

    seller: {
        name: "Readers Paradise",
        rating: 4.5
    },

    offers: [
        "Flat ₹30 Discount",
        "Buy More Save More"
    ],

    tags: [
        "Trending",
        "Self Growth"
    ],

    faq: [
        {
            question: "Is this book suitable for young adults?",
            answer: "Yes, especially for students and professionals."
        }
    ],

    reviewsData: [
        {
            user: "Karthik",
            rating: 5,
            comment: "Simple and motivating."
        },
        {
            user: "Neha",
            rating: 4,
            comment: "Good practical advice."
        }
    ]
},

{
    id: 80,
    name: "Deep Work",
    brand: "Grand Central Publishing",
    category: "Books",

    price: 499,
    oldPrice: 650,
    discount: 23,

    rating: 3,
    reviews: 1650,

    stock: 8,
    availability: "Limited Stock",

    image:"https://m.media-amazon.com/images/I/71QKQ9mwV7L._SL1500_.jpg",

    description:
    "A productivity book teaching focus and distraction-free work techniques.",

    features: [
        "Productivity",
        "Focus Techniques",
        "Self Improvement",
        "Paperback"
    ],

    specifications: {
        Author: "Cal Newport",
        Language: "English",
        Pages: "304",
        Publisher: "Grand Central Publishing"
    },

    delivery: {
        freeDelivery: true,
        estimated: "3 Days"
    },

    seller: {
        name: "Smart Reads",
        rating: 4.6
    },

    offers: [
        "10% Bank Offer",
        "Free Shipping"
    ],

    tags: [
        "Productivity",
        "Trending"
    ],

    faq: [
        {
            question: "Is this useful for students?",
            answer: "Yes, it helps improve concentration and productivity."
        }
    ],

    reviewsData: [
        {
            user: "Surya",
            rating: 3,
            comment: "Useful concepts but repetitive."
        },
        {
            user: "Lavanya",
            rating: 4,
            comment: "Good productivity tips."
        }
    ]
},

{
    id: 81,
    name: "LEGO Classic Set",
    brand: "LEGO",
    category: "Toys & Games",

    price: 2499,
    oldPrice: 2999,
    discount: 17,

    rating: 3.5,
    reviews: 1821,

    stock: 14,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=1200&auto=format&fit=crop",

    description:
    "Creative LEGO building set for kids with colorful blocks and endless fun.",

    features: [
        "Creative Play",
        "Colorful Blocks",
        "STEM Learning",
        "Durable Material"
    ],

    specifications: {
        Material: "Plastic",
        Pieces: "500+",
        Age: "5+ Years",
        Warranty: "No Warranty"
    },

    delivery: {
        freeDelivery: true,
        estimated: "3 Days"
    },

    seller: {
        name: "Toy World",
        rating: 4.7
    },

    offers: [
        "10% Bank Discount",
        "Free Delivery"
    ],

    tags: [
        "Best Seller",
        "Educational"
    ],

    faq: [
        {
            question: "Is it safe for kids?",
            answer: "Yes, made with child-safe materials."
        }
    ],

    reviewsData: [
        {
            user: "Rahul",
            rating: 4,
            comment: "Kids loved it!"
        },
        {
            user: "Priya",
            rating: 3,
            comment: "Good creative toy."
        }
    ]
},

{
    id: 82,
    name: "Remote Control Car",
    brand: "Hot Racer",
    category: "Toys & Games",

    price: 1599,
    oldPrice: 1999,
    discount: 20,

    rating: 4,
    reviews: 1430,

    stock: 10,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",

    description:
    "High-speed remote control car with smooth controls and rechargeable battery.",

    features: [
        "Wireless Remote",
        "Rechargeable",
        "High Speed",
        "Durable Wheels"
    ],

    specifications: {
        Range: "20m",
        Battery: "1200mAh",
        Age: "6+ Years",
        Warranty: "6 Months"
    },

    delivery: {
        freeDelivery: false,
        estimated: "4 Days"
    },

    seller: {
        name: "Kids Hub",
        rating: 4.5
    },

    offers: [
        "Flat ₹100 Off",
        "Combo Offer Available"
    ],

    tags: [
        "Trending",
        "Fun Toy"
    ],

    faq: [
        {
            question: "Does it include batteries?",
            answer: "Yes, rechargeable battery included."
        }
    ],

    reviewsData: [
        {
            user: "Arjun",
            rating: 5,
            comment: "Very fast and fun."
        },
        {
            user: "Sneha",
            rating: 4,
            comment: "Worth the price."
        }
    ]
},

{
    id: 83,
    name: "Barbie Doll",
    brand: "Barbie",
    category: "Toys & Games",

    price: 999,
    oldPrice: 1299,
    discount: 23,

    rating: 4,
    reviews: 2210,

    stock: 18,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop",

    description:
    "Stylish Barbie doll with fashionable outfit and accessories for imaginative play.",

    features: [
        "Fashion Accessories",
        "Premium Design",
        "Safe Material",
        "Creative Fun"
    ],

    specifications: {
        Material: "Plastic",
        Height: "12 Inches",
        Age: "3+ Years",
        Warranty: "No Warranty"
    },

    delivery: {
        freeDelivery: true,
        estimated: "2 Days"
    },

    seller: {
        name: "Toy Kingdom",
        rating: 4.8
    },

    offers: [
        "Buy 1 Get 10% Off",
        "Free Gift Wrap"
    ],

    tags: [
        "Popular",
        "Girls Favorite"
    ],

    faq: [
        {
            question: "Does it come with accessories?",
            answer: "Yes, accessories are included."
        }
    ],

    reviewsData: [
        {
            user: "Meera",
            rating: 4,
            comment: "Beautiful doll."
        },
        {
            user: "Anu",
            rating: 4,
            comment: "My daughter loved it."
        }
    ]
},

{
    id: 84,
    name: "UNO Cards",
    brand: "Mattel",
    category: "Toys & Games",

    price: 149,
    oldPrice: 199,
    discount: 25,

    rating: 4.5,
    reviews: 5120,

    stock: 35,
    availability: "In Stock",

    image:"https://assetsio.gnwcdn.com/uno-hand_I1JrsbV.jpg?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp",

    description:
    "Classic UNO card game perfect for family and friends game nights.",

    features: [
        "Multiplayer Fun",
        "Easy Rules",
        "Portable",
        "Family Game"
    ],

    specifications: {
        Players: "2-10",
        Material: "Cardboard",
        Age: "7+ Years",
        Warranty: "No Warranty"
    },

    delivery: {
        freeDelivery: true,
        estimated: "1 Day"
    },

    seller: {
        name: "Game Store",
        rating: 4.9
    },

    offers: [
        "Extra 5% Cashback",
        "Free Delivery"
    ],

    tags: [
        "Best Seller",
        "Family Fun"
    ],

    faq: [
        {
            question: "Can adults play this?",
            answer: "Yes, suitable for all ages."
        }
    ],

    reviewsData: [
        {
            user: "Kiran",
            rating: 5,
            comment: "Super fun game."
        },
        {
            user: "Divya",
            rating: 4,
            comment: "Perfect for parties."
        }
    ]
},

{
    id: 85,
    name: "Chess Board",
    brand: "Classic Games",
    category: "Toys & Games",

    price: 499,
    oldPrice: 699,
    discount: 29,

    rating: 4,
    reviews: 980,

    stock: 16,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1528819622765-d6bcf132f793?q=80&w=1200&auto=format&fit=crop",

    description:
    "Wooden chess board set designed for strategy lovers and beginners.",

    features: [
        "Wooden Finish",
        "Portable",
        "Classic Design",
        "Educational"
    ],

    specifications: {
        Material: "Wood",
        BoardSize: "12 Inches",
        Age: "8+ Years",
        Warranty: "No Warranty"
    },

    delivery: {
        freeDelivery: false,
        estimated: "5 Days"
    },

    seller: {
        name: "Board Games Hub",
        rating: 4.6
    },

    offers: [
        "₹50 Instant Discount",
        "Festival Offer"
    ],

    tags: [
        "Educational",
        "Classic Game"
    ],

    faq: [
        {
            question: "Are the pieces magnetic?",
            answer: "No, standard wooden pieces."
        }
    ],

    reviewsData: [
        {
            user: "Rohit",
            rating: 4,
            comment: "Nice quality."
        },
        {
            user: "Vikram",
            rating: 4,
            comment: "Good beginner set."
        }
    ]
},

{
    id: 86,
    name: "Jenga Game",
    brand: "Hasbro",
    category: "Toys & Games",

    price: 899,
    oldPrice: 1199,
    discount: 25,

    rating: 4,
    reviews: 1755,

    stock: 13,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?q=80&w=1200&auto=format&fit=crop",

    description:
    "Classic stacking tower game for exciting family entertainment.",

    features: [
        "Wooden Blocks",
        "Party Game",
        "Easy Setup",
        "Fun for All Ages"
    ],

    specifications: {
        Material: "Wood",
        Blocks: "54",
        Age: "6+ Years",
        Warranty: "No Warranty"
    },

    delivery: {
        freeDelivery: true,
        estimated: "2 Days"
    },

    seller: {
        name: "Fun Zone",
        rating: 4.7
    },

    offers: [
        "Free Delivery",
        "5% Card Discount"
    ],

    tags: [
        "Party Game",
        "Trending"
    ],

    faq: [
        {
            question: "Is it made of real wood?",
            answer: "Yes, premium wooden blocks."
        }
    ],

    reviewsData: [
        {
            user: "Harini",
            rating: 4,
            comment: "Very entertaining."
        },
        {
            user: "Manoj",
            rating: 5,
            comment: "Fun with friends."
        }
    ]
},

{
    id: 87,
    name: "Hot Wheels Pack",
    brand: "Hot Wheels",
    category: "Toys & Games",

    price: 799,
    oldPrice: 999,
    discount: 20,

    rating: 3,
    reviews: 1200,

    stock: 21,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",

    description:
    "Collection of mini racing cars with detailed design and smooth wheels.",

    features: [
        "Metal Body",
        "Mini Cars",
        "Collectible",
        "Durable Design"
    ],

    specifications: {
        Cars: "5 Pack",
        Material: "Metal & Plastic",
        Age: "4+ Years",
        Warranty: "No Warranty"
    },

    delivery: {
        freeDelivery: false,
        estimated: "3 Days"
    },

    seller: {
        name: "Toy Planet",
        rating: 4.5
    },

    offers: [
        "Flat ₹50 Off",
        "Kids Special Offer"
    ],

    tags: [
        "Collectible",
        "Popular"
    ],

    faq: [
        {
            question: "Are the cars metal?",
            answer: "Yes, die-cast metal body."
        }
    ],

    reviewsData: [
        {
            user: "Akhil",
            rating: 3,
            comment: "Good but small size."
        },
        {
            user: "Nisha",
            rating: 4,
            comment: "Nice collection."
        }
    ]
},

{
    id: 88,
    name: "Puzzle Game Set",
    brand: "Brainy Toys",
    category: "Toys & Games",

    price: 599,
    oldPrice: 799,
    discount: 25,

    rating: 4,
    reviews: 875,

    stock: 11,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=1200&auto=format&fit=crop",

    description:
    "Educational puzzle game set designed to improve problem-solving skills.",

    features: [
        "Brain Development",
        "Educational",
        "Colorful Pieces",
        "Family Friendly"
    ],

    specifications: {
        Pieces: "250",
        Material: "Cardboard",
        Age: "5+ Years",
        Warranty: "No Warranty"
    },

    delivery: {
        freeDelivery: true,
        estimated: "2 Days"
    },

    seller: {
        name: "Learning Toys",
        rating: 4.6
    },

    offers: [
        "Extra 10% Off",
        "Free Delivery"
    ],

    tags: [
        "Educational",
        "Best Seller"
    ],

    faq: [
        {
            question: "Is it suitable for beginners?",
            answer: "Yes, easy to assemble."
        }
    ],

    reviewsData: [
        {
            user: "Keerthi",
            rating: 4,
            comment: "Fun and educational."
        },
        {
            user: "Suresh",
            rating: 4,
            comment: "Kids enjoyed it."
        }
    ]
},

{
    id: 89,
    name: "Building Blocks Set",
    brand: "Block Master",
    category: "Toys & Games",

    price: 1299,
    oldPrice: 1699,
    discount: 24,

    rating: 5,
    reviews: 2450,

    stock: 19,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1558060370-d644479cb6f7?q=80&w=1200&auto=format&fit=crop",

    description:
    "Creative building blocks set encouraging imagination and learning.",

    features: [
        "STEM Learning",
        "Safe Material",
        "Creative Play",
        "Durable Blocks"
    ],

    specifications: {
        Pieces: "300+",
        Material: "Plastic",
        Age: "4+ Years",
        Warranty: "No Warranty"
    },

    delivery: {
        freeDelivery: true,
        estimated: "3 Days"
    },

    seller: {
        name: "Kids Learning Store",
        rating: 4.9
    },

    offers: [
        "10% Bank Offer",
        "Free Delivery"
    ],

    tags: [
        "Educational",
        "Trending"
    ],

    faq: [
        {
            question: "Are blocks compatible with LEGO?",
            answer: "Yes, mostly compatible."
        }
    ],

    reviewsData: [
        {
            user: "Varsha",
            rating: 5,
            comment: "Amazing quality."
        },
        {
            user: "Kishore",
            rating: 5,
            comment: "Excellent for kids."
        }
    ]
},

{
    id: 90,
    name: "Kids Kitchen Toy Set",
    brand: "Fun Kitchen",
    category: "Toys & Games",

    price: 1799,
    oldPrice: 2299,
    discount: 22,

    rating: 3.5,
    reviews: 1045,

    stock: 9,
    availability: "Limited Stock",

    image:"https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=1200&auto=format&fit=crop",

    description:
    "Pretend play kitchen toy set with accessories for imaginative role play.",

    features: [
        "Role Play",
        "Kitchen Accessories",
        "Safe Plastic",
        "Interactive Fun"
    ],

    specifications: {
        Material: "Plastic",
        Accessories: "20 Pieces",
        Age: "3+ Years",
        Warranty: "No Warranty"
    },

    delivery: {
        freeDelivery: false,
        estimated: "4 Days"
    },

    seller: {
        name: "Kids Paradise",
        rating: 4.5
    },

    offers: [
        "Festival Offer",
        "₹100 Cashback"
    ],

    tags: [
        "Kids Favorite",
        "Creative Play"
    ],

    faq: [
        {
            question: "Does it require batteries?",
            answer: "No, manual play set."
        }
    ],

    reviewsData: [
        {
            user: "Shalini",
            rating: 4,
            comment: "Very cute toy set."
        },
        {
            user: "Ramesh",
            rating: 3,
            comment: "Good but small size."
        }
    ]
},
{
    id: 91,
    name: "Classmate Notebook Pack",
    brand: "Classmate",
    category: "Art & Crafts",

    price: 399,
    oldPrice: 499,
    discount: 20,

    rating: 4,
    reviews: 1342,

    stock: 42,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1531346878377-a5be20888e57?q=80&w=1200&auto=format&fit=crop",

    description:
    "Premium notebook pack for school, office, and daily writing needs.",

    features: [
        "High Quality Paper",
        "Smooth Writing",
        "Durable Cover",
        "Eco Friendly"
    ],

    specifications: {
        Pages: "300 Pages",
        Size: "A4",
        Warranty: "No Warranty",
    },

    delivery: {
        freeDelivery: true,
        estimated: "3 Days"
    },

    seller: {
        name: "Classmate Store",
        rating: 4.5
    },

    offers: [
        "5% Bank Discount",
        "Free Delivery"
    ],

    tags: [
        "Best Seller",
        "Trending"
    ],

    faq: [
        {
            question: "Is the paper quality good?",
            answer: "Yes, smooth and thick pages."
        }
    ],

    reviewsData: [
        {
            user: "Rahul",
            rating: 5,
            comment: "Very useful for students."
        },
        {
            user: "Priya",
            rating: 4,
            comment: "Nice quality notebooks."
        }
    ]
},

{
    id: 92,
    name: "Camel Water Colors",
    brand: "Camel",
    category: "Art & Crafts",

    price: 249,
    oldPrice: 349,
    discount: 28,

    rating: 4,
    reviews: 965,

    stock: 36,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200&auto=format&fit=crop",

    description:
    "Bright and vibrant water colors for painting and craft projects.",

    features: [
        "Rich Pigments",
        "Easy Mixing",
        "Non Toxic",
        "Portable Box"
    ],

    specifications: {
        Colors: "24 Shades",
        Type: "Water Colors",
        Warranty: "No Warranty",
    },

    delivery: {
        freeDelivery: true,
        estimated: "2 Days"
    },

    seller: {
        name: "Camel Arts",
        rating: 4.4
    },

    offers: [
        "Extra 10% Off",
        "Free Delivery"
    ],

    tags: [
        "Popular",
        "Kids Choice"
    ],

    faq: [
        {
            question: "Are these colors washable?",
            answer: "Yes, easy to clean from surfaces."
        }
    ],

    reviewsData: [
        {
            user: "Anu",
            rating: 4,
            comment: "Good color quality."
        },
        {
            user: "Kiran",
            rating: 5,
            comment: "Perfect for painting."
        }
    ]
},

{
    id: 93,
    name: "Sketch Pen Set",
    brand: "Faber Castell",
    category: "Art & Crafts",

    price: 199,
    oldPrice: 299,
    discount: 33,

    rating: 5,
    reviews: 1870,

    stock: 50,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=1200&auto=format&fit=crop",

    description:
    "Colorful sketch pen set for drawing, art, and school projects.",

    features: [
        "Fine Tip",
        "Bright Colors",
        "Smooth Ink Flow",
        "Safe For Kids"
    ],

    specifications: {
        Colors: "12 Colors",
        Ink: "Water Based",
        Warranty: "No Warranty",
    },

    delivery: {
        freeDelivery: true,
        estimated: "2 Days"
    },

    seller: {
        name: "Faber Store",
        rating: 4.7
    },

    offers: [
        "Combo Discount",
        "Free Shipping"
    ],

    tags: [
        "Trending",
        "Top Rated"
    ],

    faq: [
        {
            question: "Do pens dry quickly?",
            answer: "No, long lasting ink quality."
        }
    ],

    reviewsData: [
        {
            user: "Sneha",
            rating: 5,
            comment: "Amazing vibrant colors."
        },
        {
            user: "Ajay",
            rating: 5,
            comment: "Kids loved it."
        }
    ]
},

{
    id: 94,
    name: "Drawing Book",
    brand: "Navneet",
    category: "Art & Crafts",

    price: 149,
    oldPrice: 199,
    discount: 25,

    rating: 4.5,
    reviews: 742,

    stock: 29,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1200&auto=format&fit=crop",

    description:
    "High-quality drawing book suitable for sketching and painting.",

    features: [
        "Thick Pages",
        "Smooth Texture",
        "Durable Binding",
        "Artist Friendly"
    ],

    specifications: {
        Pages: "100 Pages",
        Size: "A3",
        Warranty: "No Warranty",
    },

    delivery: {
        freeDelivery: false,
        estimated: "4 Days"
    },

    seller: {
        name: "Navneet Stationery",
        rating: 4.3
    },

    offers: [
        "Flat ₹20 Off",
        "Special Student Offer"
    ],

    tags: [
        "Artist Choice",
        "Trending"
    ],

    faq: [
        {
            question: "Can watercolor be used?",
            answer: "Yes, pages support light watercolor."
        }
    ],

    reviewsData: [
        {
            user: "Maya",
            rating: 5,
            comment: "Paper quality is excellent."
        },
        {
            user: "Vikram",
            rating: 4,
            comment: "Good for sketching."
        }
    ]
},

{
    id: 95,
    name: "Acrylic Paint Kit",
    brand: "Fevicryl",
    category: "Art & Crafts",

    price: 499,
    oldPrice: 699,
    discount: 29,

    rating: 5,
    reviews: 1540,

    stock: 24,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1200&auto=format&fit=crop",

    description:
    "Professional acrylic paint kit with vibrant and long-lasting colors.",

    features: [
        "Rich Pigmentation",
        "Fast Drying",
        "Multi Surface Use",
        "Water Resistant"
    ],

    specifications: {
        Colors: "18 Colors",
        Finish: "Matte",
        Warranty: "No Warranty",
    },

    delivery: {
        freeDelivery: true,
        estimated: "3 Days"
    },

    seller: {
        name: "Fevicryl Official",
        rating: 4.8
    },

    offers: [
        "10% Instant Discount",
        "Free Delivery"
    ],

    tags: [
        "Best Seller",
        "Premium"
    ],

    faq: [
        {
            question: "Can it be used on canvas?",
            answer: "Yes, ideal for canvas painting."
        }
    ],

    reviewsData: [
        {
            user: "Deepa",
            rating: 5,
            comment: "Professional quality paints."
        },
        {
            user: "Nithin",
            rating: 5,
            comment: "Loved the vibrant colors."
        }
    ]
},

{
    id: 96,
    name: "Geometry Box",
    brand: "Camlin",
    category: "Art & Crafts",

    price: 120,
    oldPrice: 160,
    discount: 25,

    rating: 4,
    reviews: 610,

    stock: 45,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=1200&auto=format&fit=crop",

    description:
    "Complete geometry box set for students and school use.",

    features: [
        "Durable Tools",
        "Compact Design",
        "Student Friendly",
        "Accurate Measurements"
    ],

    specifications: {
        Material: "Metal",
        Pieces: "10 Pieces",
        Warranty: "No Warranty",
    },

    delivery: {
        freeDelivery: false,
        estimated: "3 Days"
    },

    seller: {
        name: "Camlin Store",
        rating: 4.2
    },

    offers: [
        "Back To School Offer",
        "Flat ₹10 Off"
    ],

    tags: [
        "School Essential",
        "Budget Pick"
    ],

    faq: [
        {
            question: "Does it include compass?",
            answer: "Yes, full geometry tools included."
        }
    ],

    reviewsData: [
        {
            user: "Ravi",
            rating: 4,
            comment: "Good quality set."
        },
        {
            user: "Keerthi",
            rating: 4,
            comment: "Useful for students."
        }
    ]
},

{
    id: 97,
    name: "Calligraphy Pen Set",
    brand: "Luxor",
    category: "Art & Crafts",

    price: 699,
    oldPrice: 899,
    discount: 22,

    rating: 3,
    reviews: 421,

    stock: 17,
    availability: "Limited Stock",

    image:"https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop",

    description:
    "Elegant calligraphy pen set for handwriting and creative artwork.",

    features: [
        "Smooth Ink",
        "Premium Nibs",
        "Comfort Grip",
        "Elegant Design"
    ],

    specifications: {
        Pens: "6 Pens",
        Ink: "Black Ink",
        Warranty: "6 Months",
    },

    delivery: {
        freeDelivery: true,
        estimated: "5 Days"
    },

    seller: {
        name: "Luxor Pens",
        rating: 4.1
    },

    offers: [
        "Festival Discount",
        "Free Shipping"
    ],

    tags: [
        "Creative",
        "Premium"
    ],

    faq: [
        {
            question: "Suitable for beginners?",
            answer: "Yes, easy to use for beginners."
        }
    ],

    reviewsData: [
        {
            user: "Arjun",
            rating: 3,
            comment: "Good but expensive."
        },
        {
            user: "Megha",
            rating: 4,
            comment: "Nice pen quality."
        }
    ]
},

{
    id: 98,
    name: "Craft Paper Set",
    brand: "JK Paper",
    category: "Art & Crafts",

    price: 250,
    oldPrice: 320,
    discount: 22,

    rating: 4,
    reviews: 533,

    stock: 34,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",

    description:
    "Colorful craft paper set ideal for DIY projects and school activities.",

    features: [
        "Multiple Colors",
        "Easy Folding",
        "Smooth Texture",
        "Creative Use"
    ],

    specifications: {
        Sheets: "50 Sheets",
        Size: "A4",
        Warranty: "No Warranty",
    },

    delivery: {
        freeDelivery: true,
        estimated: "2 Days"
    },

    seller: {
        name: "JK Stationery",
        rating: 4.3
    },

    offers: [
        "Combo Offer",
        "Free Delivery"
    ],

    tags: [
        "DIY",
        "Kids Favorite"
    ],

    faq: [
        {
            question: "Can it be used for origami?",
            answer: "Yes, perfect for origami crafts."
        }
    ],

    reviewsData: [
        {
            user: "Pooja",
            rating: 4,
            comment: "Bright colorful sheets."
        },
        {
            user: "Hari",
            rating: 4,
            comment: "Good quality paper."
        }
    ]
},

{
    id: 99,
    name: "DIY Craft Kit",
    brand: "FunBlast",
    category: "Art & Crafts",

    price: 899,
    oldPrice: 1199,
    discount: 25,

    rating: 5,
    reviews: 1489,

    stock: 22,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=80&w=1200&auto=format&fit=crop",

    description:
    "Creative DIY craft kit for kids and hobby enthusiasts.",

    features: [
        "All In One Kit",
        "Creative Activities",
        "Safe Materials",
        "Fun Learning"
    ],

    specifications: {
        Pieces: "100+ Items",
        Age: "5+ Years",
        Warranty: "No Warranty",
    },

    delivery: {
        freeDelivery: true,
        estimated: "3 Days"
    },

    seller: {
        name: "FunBlast Store",
        rating: 4.7
    },

    offers: [
        "15% Instant Discount",
        "Free Shipping"
    ],

    tags: [
        "Best Seller",
        "Kids Favorite"
    ],

    faq: [
        {
            question: "Is it safe for children?",
            answer: "Yes, made with child-safe materials."
        }
    ],

    reviewsData: [
        {
            user: "Lavanya",
            rating: 5,
            comment: "Kids enjoyed it a lot."
        },
        {
            user: "Suresh",
            rating: 5,
            comment: "Worth buying."
        }
    ]
},

{
    id: 100,
    name: "Office Stationery Set",
    brand: "Doms",
    category: "Art & Crafts",

    price: 599,
    oldPrice: 799,
    discount: 25,

    rating: 4.5,
    reviews: 1124,

    stock: 31,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1200&auto=format&fit=crop",

    description:
    "Complete office stationery kit for work, study, and organization.",

    features: [
        "All Essentials Included",
        "Premium Quality",
        "Portable Kit",
        "Durable Materials"
    ],

    specifications: {
        Items: "25 Pieces",
        Material: "Mixed",
        Warranty: "No Warranty",
    },

    delivery: {
        freeDelivery: true,
        estimated: "2 Days"
    },

    seller: {
        name: "Doms Official",
        rating: 4.6
    },

    offers: [
        "Office Combo Deal",
        "Free Delivery"
    ],

    tags: [
        "Trending",
        "Office Use"
    ],

    faq: [
        {
            question: "Does it include sticky notes?",
            answer: "Yes, sticky notes are included."
        }
    ],

    reviewsData: [
        {
            user: "Karthik",
            rating: 5,
            comment: "Very useful office kit."
        },
        {
            user: "Divya",
            rating: 4,
            comment: "Good quality products."
        }
    ]
},
{
    id: 101,
    name: "Fossil Men’s Watch",
    brand: "Fossil",
    category: "Accessories",

    price: 7999,
    oldPrice: 9999,
    discount: 20,

    rating: 4.5,
    reviews: 2145,

    stock: 18,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1200&auto=format&fit=crop",

    description:
    "Premium men's analog watch with stylish leather strap and elegant design.",

    features: [
        "Water Resistant",
        "Leather Strap",
        "Quartz Movement",
        "Premium Finish"
    ],

    specifications: {
        Display: "Analog",
        Strap: "Leather",
        Warranty: "2 Years",
    },

    delivery: {
        freeDelivery: true,
        estimated: "3 Days"
    },

    seller: {
        name: "Fossil Official",
        rating: 4.8
    },

    offers: [
        "10% Bank Discount",
        "Free Delivery"
    ],

    tags: [
        "Premium",
        "Trending"
    ],

    faq: [
        {
            question: "Is it waterproof?",
            answer: "Yes, it is water resistant."
        }
    ],

    reviewsData: [
        {
            user: "Arun",
            rating: 5,
            comment: "Looks premium and classy."
        },
        {
            user: "Kiran",
            rating: 4,
            comment: "Excellent build quality."
        }
    ]
},

{
    id: 102,
    name: "Ray-Ban Sunglasses",
    brand: "Ray-Ban",
    category: "Accessories",

    price: 5999,
    oldPrice: 7499,
    discount: 20,

    rating: 4.6,
    reviews: 1788,

    stock: 26,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1200&auto=format&fit=crop",

    description:
    "Stylish UV-protected sunglasses with premium lightweight frame.",

    features: [
        "UV Protection",
        "Lightweight Frame",
        "Premium Lens",
        "Stylish Design"
    ],

    specifications: {
        Lens: "Polarized",
        Frame: "Metal",
        Warranty: "1 Year",
    },

    delivery: {
        freeDelivery: true,
        estimated: "2 Days"
    },

    seller: {
        name: "Ray-Ban Store",
        rating: 4.7
    },

    offers: [
        "Flat ₹500 Off",
        "Free Shipping"
    ],

    tags: [
        "Best Seller",
        "Fashion"
    ],

    faq: [
        {
            question: "Does it have UV protection?",
            answer: "Yes, full UV400 protection."
        }
    ],

    reviewsData: [
        {
            user: "Rahul",
            rating: 5,
            comment: "Very stylish sunglasses."
        },
        {
            user: "Nisha",
            rating: 4,
            comment: "Comfortable to wear."
        }
    ]
},

{
    id: 103,
    name: "American Tourister Bag",
    brand: "American Tourister",
    category: "Accessories",

    price: 3499,
    oldPrice: 4299,
    discount: 18,

    rating: 4,
    reviews: 1265,

    stock: 20,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=1200&auto=format&fit=crop",

    description:
    "Durable travel bag with spacious compartments for easy packing.",

    features: [
        "Large Capacity",
        "Strong Wheels",
        "Water Resistant",
        "Lightweight"
    ],

    specifications: {
        Capacity: "65L",
        Material: "Polyester",
        Warranty: "3 Years",
    },

    delivery: {
        freeDelivery: true,
        estimated: "4 Days"
    },

    seller: {
        name: "Tourister Hub",
        rating: 4.5
    },

    offers: [
        "Travel Sale Offer",
        "Free Delivery"
    ],

    tags: [
        "Travel",
        "Popular"
    ],

    faq: [
        {
            question: "Is it cabin luggage?",
            answer: "No, suitable for check-in travel."
        }
    ],

    reviewsData: [
        {
            user: "Sathish",
            rating: 4,
            comment: "Good storage space."
        },
        {
            user: "Deepa",
            rating: 4,
            comment: "Strong and durable."
        }
    ]
},

{
    id: 104,
    name: "Wildcraft Backpack",
    brand: "Wildcraft",
    category: "Accessories",

    price: 1999,
    oldPrice: 2599,
    discount: 23,

    rating: 3,
    reviews: 732,

    stock: 14,
    availability: "Limited Stock",

    image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",

    description:
    "Comfortable and spacious backpack ideal for college and travel.",

    features: [
        "Laptop Compartment",
        "Adjustable Straps",
        "Water Resistant",
        "Multiple Pockets"
    ],

    specifications: {
        Capacity: "35L",
        Material: "Nylon",
        Warranty: "1 Year",
    },

    delivery: {
        freeDelivery: false,
        estimated: "5 Days"
    },

    seller: {
        name: "Wildcraft Official",
        rating: 4.2
    },

    offers: [
        "Back To College Offer",
        "5% Cashback"
    ],

    tags: [
        "Trending",
        "Student Pick"
    ],

    faq: [
        {
            question: "Can it fit a 15-inch laptop?",
            answer: "Yes, it supports laptops up to 15.6 inches."
        }
    ],

    reviewsData: [
        {
            user: "Varun",
            rating: 3,
            comment: "Good but average quality."
        },
        {
            user: "Asha",
            rating: 4,
            comment: "Comfortable for daily use."
        }
    ]
},

{
    id: 105,
    name: "Leather Wallet",
    brand: "Woodland",
    category: "Accessories",

    price: 899,
    oldPrice: 1199,
    discount: 25,

    rating: 4,
    reviews: 1102,

    stock: 35,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1200&auto=format&fit=crop",

    description:
    "Classic leather wallet with multiple card slots and premium finish.",

    features: [
        "Genuine Leather",
        "Compact Design",
        "Card Slots",
        "Durable Build"
    ],

    specifications: {
        Material: "Leather",
        Slots: "8 Card Slots",
        Warranty: "6 Months",
    },

    delivery: {
        freeDelivery: true,
        estimated: "2 Days"
    },

    seller: {
        name: "Woodland Store",
        rating: 4.4
    },

    offers: [
        "Wallet Combo Offer",
        "Free Shipping"
    ],

    tags: [
        "Best Seller",
        "Classic"
    ],

    faq: [
        {
            question: "Is it genuine leather?",
            answer: "Yes, premium quality leather."
        }
    ],

    reviewsData: [
        {
            user: "Manoj",
            rating: 4,
            comment: "Elegant wallet design."
        },
        {
            user: "Ajith",
            rating: 5,
            comment: "Worth the price."
        }
    ]
},

{
    id: 106,
    name: "Women’s Handbag",
    brand: "Lavie",
    category: "Accessories",

    price: 2499,
    oldPrice: 3199,
    discount: 22,

    rating: 4.5,
    reviews: 1433,

    stock: 24,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop",

    description:
    "Elegant handbag with spacious storage and stylish modern design.",

    features: [
        "Premium Material",
        "Multiple Compartments",
        "Lightweight",
        "Fashionable Design"
    ],

    specifications: {
        Material: "PU Leather",
        Compartments: "3",
        Warranty: "1 Year",
    },

    delivery: {
        freeDelivery: true,
        estimated: "3 Days"
    },

    seller: {
        name: "Lavie Fashion",
        rating: 4.6
    },

    offers: [
        "15% Fashion Discount",
        "Free Delivery"
    ],

    tags: [
        "Trending",
        "Women Choice"
    ],

    faq: [
        {
            question: "Does it have adjustable straps?",
            answer: "Yes, adjustable shoulder straps included."
        }
    ],

    reviewsData: [
        {
            user: "Meena",
            rating: 5,
            comment: "Beautiful and spacious."
        },
        {
            user: "Pavithra",
            rating: 4,
            comment: "Very stylish handbag."
        }
    ]
},

{
    id: 107,
    name: "Travel Neck Pillow",
    brand: "Amazon Basics",
    category: "Accessories",

    price: 699,
    oldPrice: 899,
    discount: 22,

    rating: 3,
    reviews: 418,

    stock: 12,
    availability: "Limited Stock",

    image:"https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1200&auto=format&fit=crop",

    description:
    "Soft memory foam neck pillow for comfortable travel support.",

    features: [
        "Memory Foam",
        "Soft Fabric",
        "Portable Design",
        "Neck Support"
    ],

    specifications: {
        Material: "Memory Foam",
        Cover: "Washable",
        Warranty: "6 Months",
    },

    delivery: {
        freeDelivery: false,
        estimated: "4 Days"
    },

    seller: {
        name: "Travel Comfort",
        rating: 4.1
    },

    offers: [
        "Travel Combo Offer",
        "Flat ₹50 Off"
    ],

    tags: [
        "Travel Essential",
        "Comfort"
    ],

    faq: [
        {
            question: "Is the cover removable?",
            answer: "Yes, washable removable cover included."
        }
    ],

    reviewsData: [
        {
            user: "Rakesh",
            rating: 3,
            comment: "Comfortable for flights."
        },
        {
            user: "Anitha",
            rating: 4,
            comment: "Soft and useful."
        }
    ]
},

{
    id: 108,
    name: "Titan Women Watch",
    brand: "Titan",
    category: "Accessories",

    price: 5499,
    oldPrice: 6999,
    discount: 21,

    rating: 4,
    reviews: 1035,

    stock: 21,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1200&auto=format&fit=crop",

    description:
    "Elegant women’s watch with premium design and stylish finish.",

    features: [
        "Elegant Design",
        "Water Resistant",
        "Quartz Movement",
        "Premium Strap"
    ],

    specifications: {
        Display: "Analog",
        Strap: "Metal",
        Warranty: "2 Years",
    },

    delivery: {
        freeDelivery: true,
        estimated: "3 Days"
    },

    seller: {
        name: "Titan Official",
        rating: 4.7
    },

    offers: [
        "Festival Offer",
        "Free Shipping"
    ],

    tags: [
        "Trending",
        "Luxury"
    ],

    faq: [
        {
            question: "Does it include warranty?",
            answer: "Yes, 2 years manufacturer warranty."
        }
    ],

    reviewsData: [
        {
            user: "Latha",
            rating: 4,
            comment: "Beautiful watch design."
        },
        {
            user: "Shreya",
            rating: 5,
            comment: "Loved the premium look."
        }
    ]
},

{
    id: 109,
    name: "Luxury Perfume Gift Set",
    brand: "Bella Vita",
    category: "Accessories",

    price: 3999,
    oldPrice: 4999,
    discount: 20,

    rating: 4.5,
    reviews: 864,

    stock: 16,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1200&auto=format&fit=crop",

    description:
    "Premium perfume gift set with long-lasting fragrance collection.",

    features: [
        "Long Lasting",
        "Luxury Packaging",
        "Multiple Fragrances",
        "Perfect Gift"
    ],

    specifications: {
        Quantity: "4 Bottles",
        Fragrance: "Mixed",
        Warranty: "No Warranty",
    },

    delivery: {
        freeDelivery: true,
        estimated: "2 Days"
    },

    seller: {
        name: "Bella Vita Store",
        rating: 4.5
    },

    offers: [
        "Gift Combo Offer",
        "Free Delivery"
    ],

    tags: [
        "Luxury",
        "Gift Item"
    ],

    faq: [
        {
            question: "Is it suitable for gifting?",
            answer: "Yes, comes in premium gift packaging."
        }
    ],

    reviewsData: [
        {
            user: "Sanjay",
            rating: 5,
            comment: "Amazing fragrance collection."
        },
        {
            user: "Riya",
            rating: 4,
            comment: "Elegant packaging."
        }
    ]
},

{
    id: 110,
    name: "Travel Organizer Pouch",
    brand: "Skybags",
    category: "Accessories",

    price: 499,
    oldPrice: 699,
    discount: 29,

    rating: 3,
    reviews: 390,

    stock: 40,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?q=80&w=1200&auto=format&fit=crop",

    description:
    "Compact travel organizer pouch for accessories and gadgets.",

    features: [
        "Multiple Compartments",
        "Compact Design",
        "Water Resistant",
        "Easy Storage"
    ],

    specifications: {
        Material: "Polyester",
        Compartments: "6",
        Warranty: "6 Months",
    },

    delivery: {
        freeDelivery: false,
        estimated: "5 Days"
    },

    seller: {
        name: "Skybags Official",
        rating: 4.0
    },

    offers: [
        "Flat ₹100 Off",
        "Travel Essentials Deal"
    ],

    tags: [
        "Travel",
        "Organizer"
    ],

    faq: [
        {
            question: "Can it store cables and chargers?",
            answer: "Yes, designed for travel accessories."
        }
    ],

    reviewsData: [
        {
            user: "Vimal",
            rating: 3,
            comment: "Useful for travel."
        },
        {
            user: "Keerthi",
            rating: 4,
            comment: "Compact and handy."
        }
    ]
},

{
    id: 111,
    name: "Weight lift",
    brand: "PowerFit",
    category: "Beauty & Personal Care",

    price: 999,
    oldPrice: 1299,
    discount: 23,

    rating: 4,
    reviews: 1180,

    stock: 28,
    availability: "In Stock",

    image:"https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",

    description:
    "Durable weight lifting equipment for home workouts and fitness training.",

    features: [
        "Strong Grip",
        "Durable Material",
        "Fitness Training",
        "Compact Design"
    ],

    specifications: {
        Weight: "10 KG",
        Material: "Iron",
        Warranty: "1 Year",
    },

    delivery: {
        freeDelivery: true,
        estimated: "4 Days"
    },

    seller: {
        name: "PowerFit Store",
        rating: 4.4
    },

    offers: [
        "Fitness Sale Offer",
        "Free Shipping"
    ],

    tags: [
        "Gym Essential",
        "Workout"
    ],

    faq: [
        {
            question: "Suitable for beginners?",
            answer: "Yes, perfect for beginners and home workouts."
        }
    ],

    reviewsData: [
        {
            user: "Dinesh",
            rating: 4,
            comment: "Strong and sturdy."
        },
        {
            user: "Aravind",
            rating: 5,
            comment: "Good quality for workouts."
        }
    ]
}
];