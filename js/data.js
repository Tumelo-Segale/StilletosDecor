/* ==========================================================================
   Stilletos Decor & Catering - static data
   Plain global object so this loads with a normal <script> tag (no modules,
   no build step, works straight off the filesystem).
   ========================================================================== */

window.STILLETOS_DATA = (function () {
  const BUSINESS_INFO = {
    name: "Stilletos Decor & Catering",
    tagline: "Crafting Luxuries, Creating Memories",
    phone: "067 659 5756",
    whatsappNumber: "27676595756",
    email: "cafenetwork1@gmail.com",
    location: "397 Matshelapata, Chaneng, Rustenburg, 0310",
    coords: { lat: -25.4118433, lng: 27.126436 },
    socials: {
      tiktok: "https://www.tiktok.com/@stilletos_decor?_r=1&_t=ZS-983eawvylFw",
      instagram: "https://www.instagram.com/stilletos_decor/",
      facebook: "https://www.facebook.com/share/1HhN3jWGQf/",
      whatsapp:
        "https://wa.me/27676595756?text=Hi%20Stilletos%20Decor,%20I%27d%20like%20to%20inquire%20about%20your%20services.",
    },
  };

  const ADULT_RENTALS = [
    {
      id: "rent-1",
      name: "Gold Phoenix Chair",
      category: "furniture",
      price: "R30",
      image: "assets/images/rentals/rent-1.jpg",
      colors: [{ name: "White", price: "R25" }],
    },
    {
      id: "rent-2",
      name: "Nude Single Chair",
      category: "furniture",
      price: "R250",
      image: "assets/images/rentals/rent-2.jpg",
      colors: [{ name: "Black" }],
    },
    {
      id: "rent-3",
      name: "Louis Chair",
      category: "furniture",
      price: "R40",
      image: "assets/images/rentals/rent-3.jpg",
    },
    {
      id: "rent-4",
      name: "Black CrossBack Chair",
      category: "furniture",
      price: "R35",
      image: "assets/images/rentals/rent-4.jpg",
    },
    {
      id: "rent-5",
      name: "Double Seater Couch",
      category: "furniture",
      price: "R550",
      image: "assets/images/rentals/rent-5.jpg",
      colors: [
        { name: "Blue" },
        { name: "Green" },
        { name: "Black" },
        { name: "Nude" },
      ],
    },
  ];

  const KIDS_RENTALS = [
    {
      id: "kids-rent-1",
      name: "Gold Vanity Chair",
      category: "kids",
      price: "R40",
      image: "assets/images/rentals/kids-rent-1.jpg",
    },
    {
      id: "kids-rent-2",
      name: "Single Chair",
      category: "kids",
      price: "R150",
      image: "assets/images/rentals/kids-rent-2.jpg",
      colors: [{ name: "Pink" }, { name: "White" }, { name: "Blue" }],
    },
    {
      id: "kids-rent-3",
      name: "Kids High Chair",
      category: "kids",
      price: "R150",
      image: "assets/images/rentals/kids-rent-3.jpg",
    },
    {
      id: "kids-rent-4",
      name: "Kids Tiffany Chair",
      category: "kids",
      price: "R18",
      image: "assets/images/rentals/kids-rent-4.jpg",
    },
    {
      id: "kids-rent-5",
      name: "Kids Penny Chair",
      category: "kids",
      price: "R35",
      image: "assets/images/rentals/kids-rent-5.jpg",
    },
    {
      id: "kids-rent-6",
      name: "Kids Throne Chair",
      category: "kids",
      price: "R120",
      image: "assets/images/rentals/kids-rent-6.jpg",
    },
  ];

  const KIDS_ACCESSORIES = [
    {
      id: "kids-acc-1",
      name: "Butterfly Accessory",
      category: "kids accessory",
      price: "R60",
      image: "assets/images/rentals/kids-acc-1.jpg",
    },
    {
      id: "kids-acc-2",
      name: "Cocomelon Bus",
      category: "kids accessory",
      price: "R80",
      image: "assets/images/rentals/kids-acc-2.jpg",
    },
    {
      id: "kids-acc-3",
      name: "White Jumping Castle",
      category: "kids accessory",
      price: "R1200",
      image: "assets/images/rentals/kids-acc-3.jpg",
    },
    {
      id: "kids-acc-4",
      name: "Small 3x3 Jumping Castle",
      category: "kids accessory",
      price: "R550",
      image: "assets/images/rentals/kids-acc-4.jpg",
    },
  ];

  const ADULT_SERVICES = [
    {
      id: "srv-1",
      title: "Full Event Decor & Design",
      description:
        "From blueprint design to on-site execution, we conceptualize and build gorgeous, high-contrast black-and-gold themed atmospheres for milestones and high-end events.",
      features: [
        "Tailored color palette alignment (sleek black, matte gold, crystal accents)",
        "Exclusive backdrops, floral structures, and custom printed photobooth walls",
        "Full installation, staging, and breakdown",
      ],
      image: "assets/images/srv-1.jpeg",
    },
    {
      id: "srv-3",
      title: "Bespoke Table Styling",
      description:
        "The table is your canvas. We design cohesive, jaw-dropping tablescapes featuring ribbed amber glassware, gold beaded charger plates, custom black napkins, and breathtaking floral displays.",
      features: [
        "Layered high-end dinnerware curation",
        "Unique amber and ribbed crystal glassware pairs",
        "Custom linen rentals including premium velvet or high-thread cotton napkins",
        "Floral centerpieces combined with elegant tapered gold candle holders",
      ],
      image: "assets/images/srv-3.jpeg",
    },
    {
      id: "srv-2",
      title: "Premium Equipment Hire",
      description:
        "An exclusive collection of pristine tablescape assets, gorgeous seating, structures, and service-ready items for food service setup.",
      features: [
        "Phoenix chairs and velvet throne statement pieces",
        "Premium plates, glass pairs, gold cutlery, and tableware sets",
        "Custom backdrops, balloon rings, and stage platform elements",
        "Professional cleaning and quality-inspected item delivery",
      ],
      image: "assets/images/srv-2.jpeg",
    },
  ];

  const KIDS_PACKAGES = [
    {
      key: "glam",
      name: "GLAM PACKAGE",
      title: "Premium Whimsical Wonderland",
      blurb:
        "A premium wonderland experience featuring our signature white flooring, cabana tent, specialized butterfly wooden chairs, and candy cart.",
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=600&q=80",
      bullets: [
        "Cabana Tent & White Flooring",
        "Balloon Entrance Arch",
        "Multi Backdrops Panels",
        "Premium Main Birthday Chair",
        "Premium Kids Chairs (Wood/Butterfly style)",
        "Full Theme Party Packs with custom goodies",
        "Printing - Full Backdrop Sticker + Stickers 2x2",
        "Themed Party Pack Stand",
        "Beautiful Mini Candy Cart",
        "White Jumping Castle (3x3m)",
        "Elegant Plates, Glasses & Cutlery matching the theme",
        "Custom Creative Centerpieces",
        "Custom Branded Bottled Water",
        "Stunning Cake Table setup",
        "Delectable Milkshakes for all guests",
      ],
      prices: { 10: "R7 500", 15: "R8 500", 20: "R9 500" },
    },
    {
      key: "standard",
      name: "STANDARD PACKAGE",
      title: "Vibrant Classic Party Fun",
      blurb:
        "A colorful fun-filled classic package containing a custom 3x3 jumping castle, artificial lawn grass carpet, mini throne/table, and beautiful theme decorations.",
      image:
        "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=600&q=80",
      bullets: [
        "Sturdy Cabana Tent shelter",
        "3 Printed/Styled Backdrop screens",
        "Mini Main Birthday Chair",
        "Themed Kids Chairs (Tiffany or Wimbledon)",
        "Cute Theme Party Packs",
        "Custom Printed Stickers x2",
        "Multi-color 3x3m Jumping Castle included",
        "Party Pack Display Stand",
        "Colorful Plates, Glasses & Cutlery (high quality plastic/paper)",
        "Themed Table Centerpiece decoration",
        "Themed Bottled Water",
        "Classic Cake Table display",
        "Green Artificial Carpet/Lawn",
      ],
      prices: { 10: "R4 000", 15: "R5 000", 20: "R6 000" },
    },
  ];

  const KIDS_EXTRAS = [
    {
      name: "Bubble House",
      badge: "Premium Visual",
      desc: "An incredible transparent inflatable balloon house for beautiful photographs.",
      price: "R2 000",
    },
    {
      name: "Fresh Flowers",
      badge: "Table Decor",
      desc: "Replace faux elements with fragrant, gorgeous color-matched flowers.",
      price: "R1 000",
    },
  ];

  const ADULT_GALLERY_IMAGES = [
    "assets/images/adult-gallery-1.mp4",
    "assets/images/adult-gallery-2.jpeg",
    "assets/images/adult-gallery-3.jpeg",
    "assets/images/adult-gallery-4.jpeg",
    "assets/images/adult-gallery-5.jpeg",
    "assets/images/adult-gallery-6.mp4",
    "assets/images/adult-gallery-7.jpeg",
    "assets/images/adult-gallery-8.jpeg",
    "assets/images/adult-gallery-9.jpeg",
    "assets/images/adult-gallery-10.jpeg",
    "assets/images/adult-gallery-11.mp4",
    "assets/images/adult-gallery-12.jpeg",
    "assets/images/adult-gallery-13.jpeg",
    "assets/images/adult-gallery-14.jpeg",
    "assets/images/adult-gallery-15.jpeg",
    "assets/images/adult-gallery-16.jpeg",
    "assets/images/adult-gallery-17.jpeg",
    "assets/images/adult-gallery-18.jpeg",
    "assets/images/adult-gallery-19.jpeg",
    "assets/images/adult-gallery-20.jpeg",
    "assets/images/adult-gallery-21.jpeg",
  ];

  const KIDS_GALLERY_IMAGES = [
    "assets/images/kids-gallery-1.jpeg",
    "assets/images/kids-gallery-2.jpeg",
    "assets/images/kids-gallery-3.jpeg",
    "assets/images/kids-gallery-4.jpeg",
    "assets/images/kids-gallery-5.jpeg",
    "assets/images/kids-gallery-6.jpeg",
    "assets/images/kids-gallery-7.jpeg",
    "assets/images/kids-gallery-8.jpeg",
    "assets/images/kids-gallery-9.jpeg",
    "assets/images/kids-gallery-10.jpeg",
    "assets/images/kids-gallery-11.jpeg",
    "assets/images/kids-gallery-12.jpeg",
    "assets/images/kids-gallery-13.jpeg",
    "assets/images/kids-gallery-14.jpeg",
    "assets/images/kids-gallery-15.jpeg",
    "assets/images/kids-gallery-16.jpeg",
    "assets/images/kids-gallery-17.jpeg",
    "assets/images/kids-gallery-18.mp4",
    "assets/images/kids-gallery-19.mp4",
    "assets/images/kids-gallery-20.mp4",
    "assets/images/kids-gallery-21.jpeg",
    "assets/images/kids-gallery-22.jpeg",
    "assets/images/kids-gallery-23.jpeg",
    "assets/images/kids-gallery-24.mp4",
  ];

  return {
    BUSINESS_INFO,
    ADULT_RENTALS,
    KIDS_RENTALS,
    KIDS_ACCESSORIES,
    ADULT_SERVICES,
    KIDS_PACKAGES,
    KIDS_EXTRAS,
    ADULT_GALLERY_IMAGES,
    KIDS_GALLERY_IMAGES,
  };
})();
