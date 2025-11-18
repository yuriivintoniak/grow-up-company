type FooterMenuOption = {
  label: string;
  href?: string;
};

type FooterMenuItem = {
  label: string;
  href?: string;
  options?: FooterMenuOption[];
};

export const footerMenuItems: FooterMenuItem[] = [
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
    href: "/fruits/",
    options: [
      { label: "Pomegranates", href: "/fruits/pomegranate" },
      { label: "Lemons", href: "/fruits/lemon" },
      { label: "Mandarins", href: "/fruits/mandarin" },
    ],
  },
  {
    label: "Vegetables",
    href: "/vegetables/",
    options: [
      { label: "Cucumbers", href: "/vegetables/cucumber" },
      { label: "Tomatoes", href: "/vegetables/tomatoe" },
      { label: "Peppers", href: "/vegetables/pepper" },
      { label: "Zucchini", href: "/vegetables/zucchini" },
      { label: "Squashes", href: "/vegetables/squash" },
    ],
  },
  {
    label: "Contacts",
    href: "/contacts",
    options: [
      { label: "+90 534 29 29 764" },
      { label: "+90 545 78 59 035" },
      { label: "freshveggies.info@gmail.com" },
    ],
  },
];
