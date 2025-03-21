import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";

export function SocialButtons() {
  return (
    <div className="flex items-center gap-x-2 w-full">
      <Button
        variant="outline"
        className="w-full h-10 px-8"
        onClick={() => signIn("google", { callbackUrl: "/" })}
      >
        <FcGoogle className="w-6 h-6" />
      </Button>
      <Button
        variant="outline"
        className="w-full h-10 px-8"
        onClick={() => signIn("github", { callbackUrl: "/" })}
      >
        <FaGithub className="w-6 h-6" />
      </Button>
    </div>
  );
}
