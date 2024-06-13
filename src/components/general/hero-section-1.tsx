import { Button } from "../ui/button";

export function HeroSection1() {
  return (
    <section className="bg-gray-700 text-white py-80">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Hero Section 1</h1>
        <p className="text-xl mb-8">
          This is a brief description for the first hero section.
        </p>
        <Button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Learn more
        </Button>
      </div>
    </section>
  );
}
