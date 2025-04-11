"use client";

import { useRef } from "react";
import SemiCircleProgressBar from "@/components/semiCircleProgressBar";
import TransactionCard from "@/components/transactionCard";
import Link from "next/link";
import { EARLY_ACCESS_TIMEOUT } from "@/lib/consts";
import Landing from "@/components/landing-page";

export default function Home() {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const transactions = [
    { success: false },
    { success: true },
    { success: false },
    { success: true },
    { success: false },
    { success: false },
    { success: true },
    { success: false },
  ];

  const isEarlyAccess =
    (typeof window !== "undefined" &&
      localStorage.getItem("isEarlyAccess") === "true") ||
    !process.env.NEXT_PUBLIC_ENV;

  const handlePressStart = () => {
    timeoutRef.current = setTimeout(() => {
      localStorage.setItem("isEarlyAccess", "false");
      window.location.href = "/";
    }, EARLY_ACCESS_TIMEOUT); // 10 seconds
  };

  const handlePressEnd = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // Cancel if released early
    }
  };

  return isEarlyAccess ? (
    <>
      <main>
        <section
          className="mt-2"
          onMouseDown={handlePressStart}
          onMouseUp={handlePressEnd}
          onMouseLeave={handlePressEnd}
          onTouchStart={handlePressStart}
          onTouchEnd={handlePressEnd}
        >
          <div className="rounded">
            <SemiCircleProgressBar />
          </div>

          <div className="grid grid-cols-2 m-2 p-3 text-xs font-normal">
            <div>Recent Transactions</div>
            <div className="text-right underline decoration-white/25">
              <Link href="/">View All</Link>
            </div>
          </div>

          <div>
            {transactions.map((transaction, index) => (
              <TransactionCard key={index} success={transaction.success} />
            ))}
          </div>
        </section>
      </main>
    </>
  ) : (
    <Landing />
  );
}
