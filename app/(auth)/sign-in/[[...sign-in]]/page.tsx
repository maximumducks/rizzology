import { SignIn } from '@clerk/nextjs'
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign In | CodeGuide Pro",
  description: "Sign in to your CodeGuide Pro account",
};

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <SignIn
          appearance={{
            elements: {
              formButtonPrimary: "bg-primary hover:bg-primary/90",
              footerActionLink: "text-primary hover:text-primary/90"
            }
          }}
        />
        <p>testetsets</p>
      </div>
    </div>
  )
} 