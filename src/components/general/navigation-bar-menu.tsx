import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";

export function NavigationBarMenu() {
  const { toast } = useToast();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="cursor-pointer">
          <Link to="/">
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              onClick={() => {
                toast({
                  title: "Hey",
                  description: ":D",
                });
              }}
            >
              Home
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
  );
}
