import { Footer } from "@/components/general/footer-section";
import { NavigationBarMenu } from "@/components/general/navigation-bar-menu";

export function Home() {
  return (
    <>
      <NavigationBarMenu />
      <section>Section 1</section>
      <section>Section 2</section>
      <section>Section 3</section>
      <Footer />
    </>
  );
}
