import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { Button } from "../ui/button";

export function Footer() {
  return (
    <section className="bg-gray-800 text-white py-20">
      <div className="container mx-auto px-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button className="border border-gray-700 bg-transparent hover:bg-gray-700 text-white font-bold rounded">
                Hover
              </Button>
            </TooltipTrigger>
            <TooltipContent className="TooltipContent">
              <p className="text-sm px-3 py-2 mb-1 border border-gray-700 rounded">
                Add to library
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <h1 className="text-xl font-bold">Welcome to Footer Section</h1>
        <p className="text-sm mb-4">
          This is a brief description for the footer section.
        </p>
      </div>
    </section>
  );
}
