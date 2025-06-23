import { Banner } from "@/components/banner";
import { NavBar } from "@/components/nav-bar";

export default function Home() {
  return (
    <div className="p-4">
      <NavBar />

      <main>
        <Banner />
      </main>
    </div>
  );
}
