import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function Home() {
  const { toast } = useToast();

  return (
    <>
      <section className="bg-red-500 dark:bg-gray-900">
        <div className="flex flex-col m-4 justify-center">
          <NavigationMenu className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center">
            <NavigationMenuList>
              <NavigationMenuItem>
                  <Button
                    onClick={() => {
                      toast({
                        title: "Hey!",
                        description: ":D!",
                      });
                    }}
                    className="text-base font-medium"
                  >
                    Click me!
                  </Button>
                <NavigationMenuContent>Link</NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </section>
    </>
  );
}
