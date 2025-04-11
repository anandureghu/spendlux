import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  CloudIcon as CloudSync,
  Smartphone,
  Wallet2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FeatureCard } from "@/components/feature-card";
import { AppPreview } from "@/components/app-preview";
import { useRef } from "react";
import { EARLY_ACCESS_TIMEOUT } from "@/lib/consts";
import MockUp from "@/assets/spendlux-mockup.png";

export default function Landing() {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handlePressStart = () => {
    timeoutRef.current = setTimeout(() => {
      localStorage.setItem("isEarlyAccess", "true");
      window.location.href = "/";
    }, EARLY_ACCESS_TIMEOUT);
  };

  const handlePressEnd = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <header className="sticky top-0 z-50 w-full border-b bg-black/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between mx-auto">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-500">
              Spendlux
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a
              href="#features"
              className="text-sm font-medium text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-500"
            >
              Features
            </a>
            <a
              href="#preview"
              className="text-sm font-medium text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-500"
            >
              Preview
            </a>
            <a
              href="#signup"
              className="text-sm font-medium text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-500"
            >
              Sign Up
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 dark:text-gray-900"
              onMouseDown={handlePressStart}
              onMouseUp={handlePressEnd}
              onMouseLeave={handlePressEnd}
              onTouchStart={handlePressStart}
              onTouchEnd={handlePressEnd}
            >
              Get Early Access
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20 md:py-28">
          <div className="container flex flex-col items-center text-center mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
              Track smarter.{" "}
              <span className="text-emerald-600 dark:text-emerald-500">
                Spend better.
              </span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
              A sleek, cross-platform PWA for effortless personal finance
              tracking—cloud-synced, offline-ready, and privacy-respecting.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 dark:text-gray-900"
              >
                Join Waitlist
              </Button>
              <Button className="bg-black" size="lg" variant="outline">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="mt-16 w-full max-w-5xl rounded-lg bg-card shadow-lg">
              <Image
                src={MockUp}
                width={1200}
                height={600}
                alt="Spendlux App Preview"
                className="rounded-md"
              />
            </div>
          </div>
        </section>

        <section id="features" className="bg-muted/4 py-20 ">
          <div className="container mx-auto">
            <h2 className="text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
              Why Choose Spendlux?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
              Designed for modern users who want simplicity without sacrificing
              functionality.
            </p>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <FeatureCard
                icon={
                  <Smartphone className="h-10 w-10 text-emerald-600 dark:text-emerald-500" />
                }
                title="Install-Free PWA"
                description="Use instantly on any device with optional installation for offline access."
              />
              <FeatureCard
                icon={
                  <CloudSync className="h-10 w-10 text-emerald-600 dark:text-emerald-500" />
                }
                title="Real-Time Sync"
                description="Your data syncs across all devices with offline capabilities."
              />
              <FeatureCard
                icon={
                  <BarChart3 className="h-10 w-10 text-emerald-600 dark:text-emerald-500" />
                }
                title="Smart Analytics"
                description="Visualize spending patterns and track your financial progress."
              />
              <FeatureCard
                icon={
                  <Wallet2 className="h-10 w-10 text-emerald-600 dark:text-emerald-500" />
                }
                title="Intuitive Budget"
                description="Easily manage expenses and income with a beautiful interface."
              />
            </div>
          </div>
        </section>

        <section id="preview" className="py-20">
          <div className="container mx-auto">
            <h2 className="text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
              App Preview
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
              Get a sneak peek at what&apos;s coming soon.
            </p>
            <div className="mt-16">
              <AppPreview />
            </div>
          </div>
        </section>

        <section
          id="signup"
          className="bg-emerald-600 dark:bg-emerald-900 py-20"
        >
          <div className="container mx-auto">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Be the first to know when we launch
              </h2>
              <p className="mt-4 text-lg text-emerald-100">
                Join our waitlist to get early access and exclusive updates.
              </p>
              <Card className="mt-8">
                <CardContent className="p-4">
                  <form className="flex flex-col sm:flex-row gap-4">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 text-white outline-none border-none"
                    />
                    <Button
                      type="submit"
                      className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 dark:text-gray-900 rounded-lg"
                    >
                      Join Waitlist
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <p className="mt-4 text-sm text-emerald-100">
                We respect your privacy. No spam, ever.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-black py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row mx-auto">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Spendlux. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-500"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-500"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-500"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
