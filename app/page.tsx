import { Mandarino } from "@/components/icons/mandarino";
import { appEnv } from "@/lib/app-env";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav>
        <Link href="/">
          <Mandarino className="w-6" />
        </Link>
      </nav>

      <main className="mt-8">
        <code>
          <pre>{JSON.stringify(appEnv, null, 4)}</pre>
        </code>
      </main>
    </div>
  );
}
