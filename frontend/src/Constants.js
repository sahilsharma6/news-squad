export const hamburgerMenu = [
  {
    label: "NEWS",
    route: "/",
    dropdown: false,
  },
  {
    label: "FASHION",
    route: "/category/fashion",
    dropdown: false,
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
    route: "/category/gadgets",
    dropdown: false,
  },
  {
    label: "LIFESTYLE",
    route: "/category/lifestyle",
    dropdown: false,
  },
  {
    label: "DASHBOARD", 
    route: "/dashboard",
    dropdown: false,
  },
];
