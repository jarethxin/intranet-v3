import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import logoImg from "@/assets/images/xi-logo.svg";

export function NavigationBarMenu() {
  const { toast } = useToast();

  return (
    <div className="sticky top-0 z-50 w-full bg-white bg-opacity-70">
      <div className="container mx-auto flex items-center space-x-4 px-4">
        <NavigationMenu className="flex-grow">
          <NavigationMenuList className="flex items-center space-x-4">
            <NavigationMenuItem className="cursor-pointer">
              <Link to="/">
                <img
                  src={logoImg}
                  alt="Logo"
                  className="h-10 w-auto m-1 cursor-pointer"
                  onClick={() => {
                    toast({
                      title: "Hey",
                      description: ":D",
                    });
                  }}
                />
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="cursor-pointer">
              <Link to="/contacto">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contacto
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="cursor-pointer">
              <Link to="/login">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Login
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
