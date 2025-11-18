import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/Logo.svg";
import styles from "./Header.module.css";
import { headerMenuItems } from "./data.header";
import { useNavigate } from "@tanstack/react-router";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <img src={logo} alt="Grow Up Company Logo" className={styles.logo} />
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          {headerMenuItems.map((item) => (
            <li key={item.label} className={styles.menuItem}>
              {item.options ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button type="button" className={styles.menuTrigger}>
                      <span>{item.label}</span>
                      <ChevronDown size={24} className={styles.menuTriggerIcon} />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="center"
                    sideOffset={30}
                    className={styles.dropdownContent}
                  >
                    {item.options.map((option) => (
                      <DropdownMenuItem key={option.label} asChild>
                        <a href={option.href} className={styles.dropdownItem}>
                          <ChevronRight size={24} className={styles.dropdownItemIcon} />
                          <span>{option.label}</span>
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <a href={item.href} className={styles.menuLink}>
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <button 
        className={styles.contactButton} 
        onClick={() => navigate({ to: "/contacts" })}
      >
        Contact
      </button>
    </header>
  );
}
