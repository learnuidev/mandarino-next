import { Mandarino } from "@/components/icons/mandarino";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav>
        <Link href="/">
          <Mandarino className="w-6" />
        </Link>
      </nav>

      <main>
        <h1 className="text-center text-2xl mt-8 mb-4">Mandarino</h1>

        <p className="text-center">Learning languages for real</p>
      </main>
    </div>
  );
}
