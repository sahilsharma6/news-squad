export const hamburgerMenu = [
  {
    label: "NEWS",
    route: "/",
    dropdown: false,
  },
  {
    label: "FASHION",
    route: "/category/fashion",
    dropdown: true,
    subItems: [
      { label: "All", route: "/fashion/all" },
      { label: "New Look", route: "/fashion/new-look" },
      { label: "Street Fashion", route: "/fashion/street-fashion" },
      { label: "Style Hunter", route: "/fashion/style-hunter" },
      { label: "Vogue", route: "/fashion/vogue" },
      { label: "Men", route: "/fashion/men" },
      { label: "Women", route: "/fashion/women" },
    ],
  },
  {
    label: "GADGETS",
    route: "/gadgets",
    dropdown: false,
  },
  {
    label: "LIFESTYLE",
    route: "/lifestyle",
    dropdown: false,
  },
  {
    label: "VIDEO",
    route: "/video",
    dropdown: false,
  },
];
