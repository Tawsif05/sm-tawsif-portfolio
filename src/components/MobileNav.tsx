"use client";

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

const links = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "resume", path: "/resume" },
    { name: "work", path: "/work" },
    { name: "contact", path: "/contact" },
];

const MobileNav = () => {
    const pathname = usePathname();
    
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries style={{ fontSize: "28px" }} className="text-[#00ff99]" />
            </SheetTrigger>
            <SheetContent className="h-full flex flex-col">
                {/* Accessibility Fix */}
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

                {/* ✅ Properly Centering Name & Applying Margin */}
                <div className="flex-1 flex items-center justify-center">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            S M <span className="text-[#00ff99]">Tawsif.</span>
                        </h1>
                    </Link>
                </div>

                {/* ✅ Navigation Links */}
                <nav className="flex-1 flex flex-col items-center gap-4">
                    {links.map((link) => (
                        <Link 
                        key={link.path} 
                        href={link.path} 
                        style={{
                            color: pathname === link.path ? "#00ff99" : "white",
                            borderBottom: pathname === link.path ? "2px solid #00ff99" : "none",
                            transition: "color 0.3s ease-in-out, border-bottom 0.3s ease-in-out"
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = "#00ff99"}
                        onMouseLeave={(e) => e.currentTarget.style.color = pathname === link.path ? "#00ff99" : "white"}
                        className="capitalize"
                    >
                        {link.name}
                    </Link>
                    
                    
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
