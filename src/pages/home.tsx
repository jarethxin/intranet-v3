import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export default function Home() {
  const { toast } = useToast();

  return (
    <section className="bg-red-500 dark:bg-gray-900">
      <div className="container border-2 border-black p-4">
        <Button
          onClick={() => {
            toast({
              title: "Hey!",
              description: ":D!",
            });
          }}
        >
          ?
        </Button>
      </div>
    </section>
  );
}
