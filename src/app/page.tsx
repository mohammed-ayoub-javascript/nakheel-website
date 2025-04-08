import Aboutus from "@/modules/home/ui/about/about-us";
import Developers from "@/modules/home/ui/about/users";
import Footer from "@/modules/home/ui/footer/footer";
import Header from "@/modules/home/ui/header";

export default function Home() {
  return (
    <div className=" w-full h-screen">
      <Header />
      <Aboutus />
      <Developers />
      <Footer />
    </div>
  );
}
