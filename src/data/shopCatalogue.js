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
      image: `/shop/women/women (${number}).webp`,
    };
  }),

  // =====================================================
  // KENYAN VIBES — 15 PRODUCTS
  // =====================================================

  ...[
    1, 2, 3, 4, 5, 6, 7,
    8, 9, 11, 12, 13, 14, 15,
  ].map((number) => ({
    id: `kenyan-vibes-${number}`,
    name: "Kenyan Vibes Tee",
    type: "T-Shirt",
    category: "Kenyan Vibes",
    price: 1250,
    image: `/shop/kenyan-vibes/kenyan-vibes (${number}).webp`,
  })),

  // KENYAN VIBES COMBO
  {
    id: "kenyan-vibes-combo",
    name: "Kenyan Vibes Combo",
    type: "Combo",
    category: "Kenyan Vibes",
    price: 1750,
    image: "/shop/kenyan-vibes/combo-2.webp",
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
      image: `/shop/statement-tees/statement-tees (${number}).webp`,
    };
  }),

  // =====================================================
  // MEN — T-SHIRTS
  // =====================================================

  ...[
    ["main", "men.webp"],
    ["1", "men (1).webp"],
    ["2", "men (2).webp"],
    ["3", "men (3).webp"],
    ["4", "men (4).webp"],
    ["6", "men (6).webp"],
    ["7", "men (7).webp"],
    ["8", "men (8).webp"],
    ["9", "men (9).webp"],
    ["10", "men (10).webp"],
    ["11", "men (11).webp"],
    ["12", "men (12).webp"],
    ["13", "men (13).webp"],
    ["14", "men(14).webp"],
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
    image: "/shop/men/men-cap.webp",
  },

  {
    id: "men-cap-2",
    name: "Men's Cap 2",
    type: "Cap",
    category: "Men",
    price: 600,
    image: "/shop/men/men-cap1.webp",
  },

  // MEN HOODIES
  {
    id: "men-hoodie-1",
    name: "Men's Hoodie",
    type: "Hoodie",
    category: "Men",
    price: 2500,
    image: "/shop/men/men-hoodie (5).webp",
  },

  {
    id: "men-hoodie-2",
    name: "Men's Hoodie 2",
    type: "Hoodie",
    category: "Men",
    price: 2500,
    image: "/shop/men/men-hoodie(15).webp",
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
    image: `/shop/moments/moments (${number}).webp`,
  })),

  // MOMENTS COMBO
  {
    id: "moments-combo",
    name: "Moments Combo",
    type: "Combo",
    category: "Moments",
    price: 1750,
    image: "/shop/moments/combo-3.webp",
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
    image: `/shop/funny-relatable/funny-relatable (${number}).webp`,
  })),

  // FUNNY & RELATABLE COMBO
  {
    id: "funny-combo",
    name: "Funny & Relatable Combo",
    type: "Combo",
    category: "Funny & Relatable",
    price: 1750,
    image: "/shop/funny-relatable/combo-1.webp",
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
    name: "Workwear Tee",
    type: "T-Shirt",
    category: "Corporate & Bulk",
    price: null,
    quoteOnly: true,
    image: `/shop/corporate-bulk/corporate (${number}).webp`,
  })),

  // CORPORATE CAP
  {
    id: "corporate-cap",
    name: "Workwear Cap",
    type: "Cap",
    category: "Corporate & Bulk",
    price: null,
    quoteOnly: true,
    image: "/shop/corporate-bulk/corporate-cap.webp",
  },

  // CORPORATE HOODIES — 6
  ...[
    "corporate-hoodie.webp",
    "corporate-hoodie(1).webp",
    "corporate-hoodie(2).webp",
    "corporate-hoodie(3).webp",
    "corporate-hoodie(4).webp",
    "corporate-hoodie(5).webp",
  ].map((file, index) => ({
    id: `corporate-hoodie-${index + 1}`,
    name: "Workwear Hoodie",
    type: "Hoodie",
    category: "Corporate & Bulk",
    price: null,
    quoteOnly: true,
    image: `/shop/corporate-bulk/${file}`,
  })),
];

export default shopCatalogue;