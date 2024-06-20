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
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login } from "@/services/api/apiService";

type LoginFormInputs = {
  username: string;
  password: string;
};

export function LoginPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const response = await login(data.username, data.password);
      const token = response?.token;

      if (token) {
        localStorage.setItem("token", token);
        navigate("/");
      } else {
        throw new Error("No se ha podido obtener el token en la respuesta.");
      }
    } catch (error) {
      console.log(`Error durante el inicio de sesión: ${error}`);
    }
  };

  return (
    <section className="bg-gray-700 min-h-screen flex items-center justify-center py-20">
      <form className="mx-auto max-w-sm" onSubmit={handleSubmit(onSubmit)}>
        <Card className="px-5">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription className="text-center">¡Hola!</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="username">Usuario</Label>
                <Input
                  type="text"
                  {...register("username", { required: true })}
                  placeholder="usuario"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Contraseña</Label>
                </div>
                <Input
                  type="password"
                  {...register("password", { required: true })}
                />
                <div className="flex items-center">
                  <Link
                    to="/forgotpassword"
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
                to="/register"
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
