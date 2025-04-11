"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import DashoardImg from "@/assets/dashboard.png";
import AddTransactionImg from "@/assets/add-transaction.png";
import TransactionsImg from "@/assets/transactions.png";
import AnalyticsImg from "@/assets/analytics.png";
import ProfileImg from "@/assets/profile.png";

const screens = [
  {
    name: "Dashboard",
    description:
      "Get a quick overview of your finances with our intuitive dashboard.",
    image: DashoardImg,
  },
  {
    name: "Add Transaction",
    description: "Easily add your income and expenses.",
    image: AddTransactionImg,
  },
  {
    name: "Transactions",
    description: "Easily add and manage your income and expenses.",
    image: TransactionsImg,
  },
  {
    name: "Analytics",
    description: "Visualize your spending patterns and financial trends.",
    image: AnalyticsImg,
  },
  {
    name: "Profile",
    description: "Manage your account settings and preferences.",
    image: ProfileImg,
  },
];

export function AppPreview() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextScreen = () => {
    setActiveIndex((prev) => (prev === screens.length - 1 ? 0 : prev + 1));
  };

  const prevScreen = () => {
    setActiveIndex((prev) => (prev === 0 ? screens.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative mx-auto w-full max-w-md">
        <Card className="overflow-hidden bg-gray-900 dark:bg-gray-950 w-[300px] h-[650px] mx-auto">
          <div className="relative w-[300px] h-[650px] overflow-hidden rounded-lg">
            <Image
              src={screens[activeIndex].image || "/placeholder.svg"}
              alt={screens[activeIndex].name}
              className="object-contain"
            />
          </div>
        </Card>
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full bg-background"
            onClick={prevScreen}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous screen</span>
          </Button>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full bg-background"
            onClick={nextScreen}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next screen</span>
          </Button>
        </div>
      </div>
      <div className="mt-8 text-center">
        <h3 className="text-2xl font-bold text-foreground">
          {screens[activeIndex].name}
        </h3>
        <p className="mt-2 max-w-md text-muted-foreground">
          {screens[activeIndex].description}
        </p>
      </div>
      <div className="mt-4 flex gap-2">
        {screens.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === activeIndex
                ? "bg-emerald-600 dark:bg-emerald-500"
                : "bg-gray-300 dark:bg-gray-700"
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <span className="sr-only">Go to screen {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
