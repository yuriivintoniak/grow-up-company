type FooterMenuOption = {
  label: string;
  href: string;
};

type FooterMenuItem = {
  label: string;
  href: string;
  options?: FooterMenuOption[];
};

export const footerMenuItems: FooterMenuItem[] = [
  {
    label: "Corporate",
    href: "#corporate",
    options: [
      { label: "Vision mission", href: "#vision-mission" },
      { label: "Quality policy", href: "#quality-policy" },
      { label: "Sustainability", href: "#sustainability" },
      { label: "About us", href: "#about-us" },
    ],
  },
  {
    label: "Fruits",
    href: "#fruits",
    options: [
      { label: "Pomegranates", href: "#pomegranates" },
      { label: "Lemons", href: "#lemons" },
      { label: "Mandarins", href: "#mandarins" },
    ],
  },
  {
    label: "Vegetables",
    href: "#vegetables",
    options: [
      { label: "Cucumbers", href: "#cucumbers" },
      { label: "Tomatoes", href: "#tomatoes" },
      { label: "Peppers", href: "#peppers" },
      { label: "Zucchini", href: "#zucchini" },
      { label: "Squashes", href: "#squashes" },
    ],
  },
  {
    label: "Contacts",
    href: "#contacts",
    options: [
      { label: "+90 534 29 29 764", href: "#phone" },
      { label: "+90 545 78 59 035", href: "#phone" },
      { label: "freshveggies.info@gmail.com", href: "#email" },
    ],
  },
];
