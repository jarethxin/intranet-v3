import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const onSubmit = (data: any) => {
  const onSubmit = (data) => {
    console.log("Submitted");

    if (!data) {
      console.log("No data");
    } else {
      console.log(data);
    }
  };

  return (
    <section className="bg-gray-700 min-h-screen flex items-center justify-center py-20">
      <form className="mx-auto max-w-sm" onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Coloca tus credenciales para comenzar 😁
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="usuario@dominio.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Contraseña</Label>
                </div>
                <Input id="password" type="password" required />
                <div className="flex items-center">
                  <Link
                    to="#"
                    className="ml-auto inline-block text-sm underline"
                    onClick={() => console.log("Forgot password clicked")}
                  >
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
              </div>
              <Button type="submit" className="w-full">
                Ingresar
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              ¿No tienes cuenta?{" "}
              <Link
                to="#"
                className="underline"
                onClick={() => console.log("Sign up clicked")}
              >
                Regístrate
              </Link>
            </div>
          </CardContent>
        </Card>
      </form>
    </section>
  );
}
