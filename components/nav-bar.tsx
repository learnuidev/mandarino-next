import Link from "next/link";
import { Mandarino } from "./icons/mandarino";
import { LanguageSwitcher } from "@/lib/i18n-next/language-switcher";

export const NavBar = () => {
  return (
    <nav className="flex justify-between items-center">
      <Link href="/">
        <Mandarino className="w-6" />
      </Link>

      <LanguageSwitcher />
    </nav>
  );
};
