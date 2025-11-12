export type HeaderMenuOption = {
  label: string;
  href: string;
};

export type HeaderMenuItem = {
  label: string;
  href: string;
  options?: HeaderMenuOption[];
};

export const headerMenuItems: HeaderMenuItem[] = [
  {
    label: "Home",
    href: "#home",
  },
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
];

