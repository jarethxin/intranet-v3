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
    console.log(data);
  };

  return (
    <section className="bg-gray-700 min-h-screen flex items-center justify-center py-20">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("firstName", { required: true })}
          placeholder="First Name"
        />
        {errors.firstName && <span>This field is required</span>}

        <input
          type="text"
          {...register("lastName", { required: true })}
          placeholder="Last Name"
        />
        {errors.lastName && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </section>
  );
}
