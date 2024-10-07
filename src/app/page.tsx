import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

import React from "react";
import DottedLine from "@/components/DottedLine";
import Link from "next/link";
import FlightSelectRow from "@/components/FlightSelectRow";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[70%]">
      <h1 className="font-light text-4xl mb-4">Good Morning, Brian</h1>
      <div className="flex w-full flex-col gap-y-6 py-6 px-7 border border-slate-300 rounded-lg shadow-md relative">
        <DottedLine className="left-10" />
        <DottedLine className="left-72" />
        <DottedLine className="right-10" />
        <DottedLine className="right-80" />
        <div className="bg-gray-400 rounded-sm w-20 flex items-center justify-center font-medium">
          Flights
        </div>
        <FlightSelectRow />
        <div className="flex justify-end">
          <Button
            className="flex items-center gap-x-2 bg-green-900 px-10 py-[20px] text-sm"
            asChild
          >
            <Link href="/search">
              <Search className="w-4 h-4 mb-[2px]" />
              Search Flights
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
