import { Button } from "@/components/ui/button";
import { ArrowLeftRight, Search } from "lucide-react";
import data from "../../data";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import React from "react";
import { FlightDatePicker } from "@/components/FlightDatePicker";
import DottedLine from "@/components/DottedLine";
import Link from "next/link";

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
        <div className="flex items-center justify-between">
          <div>
            <FlightSelect placeholder="where from ?" />
          </div>
          <div className="flex items-center justify-center rounded-full bg-slate-200 p-3">
            <ArrowLeftRight className="w-4 h-4 text-slate-800" />
          </div>
          <div>
            <FlightSelect placeholder="where to ?" />
          </div>
          <div>
            <FlightDatePicker placeholder="Departure" />
          </div>
          <div>
            <FlightDatePicker placeholder="Return" />
          </div>
        </div>
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

const FlightSelect = ({ placeholder }: { placeholder: string }) => {
  return (
    <Select>
      <SelectTrigger className="w-[267px] py-5">
        <div className="flex items-center justify-center gap-x-2">
          <Image
            src="/menu-circle.svg"
            width={16}
            height={16}
            alt="circle icon"
          />
          <SelectValue placeholder={placeholder} />
        </div>
      </SelectTrigger>
      <SelectContent>
        {data.airports.map((item) => (
          <SelectItem key={item.code} value={item.code}>
            {item.city}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
