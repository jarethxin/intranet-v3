import { Button } from "../ui/button";

export function HeroSection2() {
  return (
    <section className="bg-gray-800 text-white py-40">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Explore Hero Section 2</h1>
        <p className="text-xl mb-8">
          This is a brief description for the second hero section.
        </p>
        <Button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Discover More
        </Button>
      </div>
    </section>
  );
}
