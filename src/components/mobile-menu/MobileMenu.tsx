import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronRight } from "lucide-react";
import burger from "@/assets/burger-icon.png";
import { useNavigate } from "@tanstack/react-router";
import { headerMenuItems } from "@/components/header/data.header";

export default function MobileMenu() {
  const navigate = useNavigate();

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <button>
            <img src={burger} alt="Menu Button" className="md:hidden inline-flex" />
          </button>
        </SheetTrigger>

        <SheetContent className="text-white bg-[#084902] p-[34px] border-l-0 z-1000">
          <SheetTitle />

          {headerMenuItems.map((item) => (
            <div key={item.label}>
              {item.options ? (
                <Accordion type="single" collapsible>
                  <AccordionItem value={item.label} className="divide-y divide-white/10">
                    <AccordionTrigger>
                      {item.label}
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-2 divide-y divide-white/10">
                      {item.options.map((option) => (
                        <div key={option.label} className="flex items-center p-3 gap-2"> 
                          <ChevronRight size={20} />
                          <a href={option.href} className="text-base cursor-default">
                            {option.label}
                          </a>
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ) : (
                <div className="p-3 pb-6">
                  <a href={item.href} className="cursor-default">
                    {item.label}
                  </a>
                </div>
              )}
            </div>
          ))}

          <button
            className="text-left p-3 pt-6"
            onClick={() => navigate({ to: "/contacts" })}
          >
            Contact
          </button>
        </SheetContent>
      </Sheet>
    </div>
  );  
}
