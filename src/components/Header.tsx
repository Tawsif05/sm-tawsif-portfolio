import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";


const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            S M <span className="text-[#00ff99]">Tawsif.</span>
          </h1>
        </Link>
        {/* desktop nav */}
        <div className="hidden xl:flex gap-8 items-center">
          <Nav />
          <Link href="/contact">
          <Button>Hire me</Button>
          </Link>
        </div>
        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav/>
        </div>
      </div>
    </header>
  );
};

export default Header;
