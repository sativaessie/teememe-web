const shopCatalogue = [
  // =====================================================
  // WOMEN — 24 T-SHIRTS
  // =====================================================

  ...Array.from({ length: 24 }, (_, index) => {
    const number = index + 1;

    return {
      id: `women-${number}`,
     name: "Women's Tee",
      type: "T-Shirt",
      category: "Women",
      price: 1250,
      image: `/shop/women/women (${number}).jpg`,
    };
  }),

  // =====================================================
  // KENYAN VIBES — 14 T-SHIRTS
  // =====================================================

  ...Array.from({ length: 14 }, (_, index) => {
    const number = index + 1;

    return {
      id: `kenyan-vibes-${number}`,
      name: "Kenyan Vibes Tee",
      type: "T-Shirt",
      category: "Kenyan Vibes",
      price: 1250,
      image: `/shop/kenyan-vibes/kenyan-vibes (${number}).jpg`,
    };
  }),

  // KENYAN VIBES COMBO
  {
    id: "kenyan-vibes-combo",
    name: "Kenyan Vibes Combo",
    type: "Combo",
    category: "Kenyan Vibes",
    price: 1750,
    image: "/shop/kenyan-vibes/combo-2.jpg",
  },

  // =====================================================
  // STATEMENT TEES — 21
  // =====================================================

  ...Array.from({ length: 21 }, (_, index) => {
    const number = index + 1;

    return {
      id: `statement-tee-${number}`,
      name: "Statement Tee",
      type: "T-Shirt",
      category: "Statement Tees",
      price: 1250,
      image: `/shop/statement-tees/statement-tees (${number}).jpg`,
    };
  }),

  // =====================================================
  // MEN — T-SHIRTS
  // =====================================================

  ...[
    ["main", "men.jpg"],
    ["1", "men (1).jpg"],
    ["2", "men (2).jpg"],
    ["3", "men (3).png"],
    ["4", "men (4).jpg"],
    ["6", "men (6).jpg"],
    ["7", "men (7).jpg"],
    ["8", "men (8).jpg"],
    ["9", "men (9).jpg"],
    ["10", "men (10).jpg"],
    ["11", "men (11).jpg"],
    ["12", "men (12).jpg"],
    ["13", "men (13).jpg"],
    ["14", "men(14).jpg"],
  ].map(([number, file]) => ({
    id: `men-tee-${number}`,
    name: "Men's Tee",
    type: "T-Shirt",
    category: "Men",
    price: 1250,
    image: `/shop/men/${file}`,
  })),

  // MEN CAPS
  {
    id: "men-cap-1",
    name: "Men's Cap",
    type: "Cap",
    category: "Men",
    price: 600,
    image: "/shop/men/men-cap.png",
  },

  {
    id: "men-cap-2",
    name: "Men's Cap 2",
    type: "Cap",
    category: "Men",
    price: 600,
    image: "/shop/men/men-cap1.png",
  },

  // MEN HOODIES
  {
    id: "men-hoodie-1",
    name: "Men's Hoodie",
    type: "Hoodie",
    category: "Men",
    price: 2500,
    image: "/shop/men/men-hoodie (5).png",
  },

  {
    id: "men-hoodie-2",
    name: "Men's Hoodie 2",
    type: "Hoodie",
    category: "Men",
    price: 2500,
    image: "/shop/men/men-hoodie(15).png",
  },

  // =====================================================
  // MOMENTS — 13 T-SHIRTS
  // =====================================================

  ...[
    1, 2, 3, 4, 5, 6, 7,
    8, 9, 10, 11, 12, 14,
  ].map((number) => ({
    id: `moments-${number}`,
    name: "Moments Tee",
    type: "T-Shirt",
    category: "Moments",
    price: 1250,
    image: `/shop/moments/moments (${number}).jpg`,
  })),

  // MOMENTS COMBO
  {
    id: "moments-combo",
    name: "Moments Combo",
    type: "Combo",
    category: "Moments",
    price: 1750,
    image: "/shop/moments/combo-3.jpg",
  },

  // =====================================================
  // FUNNY & RELATABLE — 17 T-SHIRTS
  // =====================================================

  ...[
    1, 2, 3, 4, 5, 6, 7, 8,
    10, 11, 12, 13, 14, 15, 16, 17, 18,
  ].map((number) => ({
    id: `funny-${number}`,
   name: "Funny & Relatable Tee",
    type: "T-Shirt",
    category: "Funny & Relatable",
    price: 1250,
    image: `/shop/funny-relatable/funny-relatable (${number}).jpg`,
  })),

  // FUNNY & RELATABLE COMBO
  {
    id: "funny-combo",
    name: "Funny & Relatable Combo",
    type: "Combo",
    category: "Funny & Relatable",
    price: 1750,
    image: "/shop/funny-relatable/combo-1.jpg",
  },

  // =====================================================
  // CORPORATE & BULK
  // =====================================================

  // CORPORATE T-SHIRTS — 18
  ...[
    1, 2, 4, 5, 6, 7, 8, 9,
    11, 12, 13, 14, 15, 17, 18, 19, 20, 23,
  ].map((number) => ({
    id: `corporate-tee-${number}`,
    name: `Corporate Tee ${number}`,
    type: "T-Shirt",
    category: "Corporate & Bulk",
    price: null,
    quoteOnly: true,
    image: `/shop/corporate-bulk/corporate (${number}).jpg`,
  })),

  // CORPORATE CAP
  {
    id: "corporate-cap",
    name: "Corporate Cap",
    type: "Cap",
    category: "Corporate & Bulk",
    price: null,
    quoteOnly: true,
    image: "/shop/corporate-bulk/corporate-cap.jpg",
  },

  // CORPORATE HOODIES — 6
  ...[
    "corporate-hoodie.jpg",
    "corporate-hoodie(1).jpg",
    "corporate-hoodie(2).jpg",
    "corporate-hoodie(3).jpg",
    "corporate-hoodie(4).jpg",
    "corporate-hoodie(5).jpg",
  ].map((file, index) => ({
    id: `corporate-hoodie-${index + 1}`,
    name: `Corporate Hoodie ${index + 1}`,
    type: "Hoodie",
    category: "Corporate & Bulk",
    price: null,
    quoteOnly: true,
    image: `/shop/corporate-bulk/${file}`,
  })),
];

export default shopCatalogue;