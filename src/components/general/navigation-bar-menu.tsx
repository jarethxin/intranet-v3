import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useToast } from "@/components/ui/use-toast";
import { Link, useNavigate } from "react-router-dom";
import logoImg from "@/assets/images/xi-logo.svg";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useAuthContext } from "@/context/authContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function NavigationBarMenu() {
  const { toast } = useToast();
  const { isAuthenticated, user, logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="sticky top-0 z-50 w-full bg-white bg-opacity-90">
      <div className="container mx-auto flex items-center justify-between px-4">
        <NavigationMenu className="flex-grow">
          <NavigationMenuList className="flex items-center space-x-4 flex-wrap">
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
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href="/contact"
              >
                Contacto
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <div className="flex items-center space-x-2">
              <span className="font-medium">{user?.name}</span>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src={user?.avatar} />
                    <AvatarFallback>{`${user?.name
                      .toUpperCase()
                      .charAt(0)}${user?.name
                      .toUpperCase()
                      .charAt(user?.name.indexOf(" ") + 1)}`}</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Perfil</DropdownMenuItem>
                  <DropdownMenuItem>Ajustes</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Ayuda</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    Cerrar sesión
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <NavigationMenu className="flex-grow">
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href="/login"
              >
                Login
              </NavigationMenuLink>
            </NavigationMenu>
          )}
        </div>
      </div>
    </div>
  );
}
