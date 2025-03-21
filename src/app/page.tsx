import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-full bg-gradient-to-b from-sky-600 to-sky-300">
      <div className="space-y-6 text-center text-white">
        <h1 className="text-9xl font-bold drop-shadow-lg">Auth</h1>
        <p>A Simple Authentication</p>
        <div>
          <Button variant="secondary" asChild className="shadow-sm px-8">
            <Link href="/auth/signin">Sign In</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
