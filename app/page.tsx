import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import {Button} from "@/components/ui/button";
import LoginButton from "@/components/auth/login-button"

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-slate-900 to-neutral-950">
       <div className="space-y-6 text-center">
        <h1 className={cn(
          "text-6xl font-semibold text-white drop-shadow-md",
          font.className,
        )}>
          🔐 Auth
        </h1>
        <p className="text-white text-lg">
          A simple authentication skeleton using NextAuth.js
        </p>
        <div>
          <LoginButton>
            <Button variant={"secondary"} size={"lg"}>
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
