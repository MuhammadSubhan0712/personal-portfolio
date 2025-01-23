import Image from "next/image";
import Navbar from "./components/Navbar";
import TopBackground from "./components/Hero/TopBackground";
import Sections from "./components/Sections";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  return (
    <div className="relative overflow-clip" id="home">
      <Sections />
      <Navbar />
      <ThemeToggle />
      <TopBackground />
      <Image
        src="/botttom_gradient_mobile.svg"
        alt="bottom gradient background"
        height={700}
        width={1024}
        className="absolute bottom-0 min-w-[1024px]
     min-h-[700px] -z-50 md:hidden"
      />
    </div>
  );
}
