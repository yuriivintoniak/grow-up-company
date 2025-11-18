export type HeaderMenuOption = {
  label: string;
  href?: string;
};

export type HeaderMenuItem = {
  label: string;
  href?: string;
  options?: HeaderMenuOption[];
};

export const headerMenuItems: HeaderMenuItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Corporate",
    options: [
      { label: "Vision mission", href: "/vision-mission" },
      { label: "Quality policy", href: "/quality-policy" },
      { label: "Sustainability", href: "/sustainabillity" },
      { label: "About us", href: "/about-us" },
    ],
  },
  {
    label: "Fruits",
    options: [
      { label: "Pomegranates", href: "/fruits/pomegranate" },
      { label: "Lemons", href: "/fruits/lemon" },
      { label: "Mandarins", href: "/fruits/mandarin" },
    ],
  },
  {
    label: "Vegetables",
    options: [
      { label: "Cucumbers", href: "/vegetables/cucumber" },
      { label: "Tomatoes", href: "/vegetables/tomatoe" },
      { label: "Peppers", href: "/vegetables/pepper" },
      { label: "Zucchini", href: "/vegetables/zucchini" },
      { label: "Squashes", href: "/vegetables/squash" },
    ],
  },
];
