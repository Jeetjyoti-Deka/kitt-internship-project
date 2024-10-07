"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import data from "../../data";
import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import { cn, getAirportFromCode } from "@/lib/utils";

const FlightSelect = ({
  placeholder,
  city,
  setCity,
}: {
  placeholder: string;
  city: string;
  setCity: (city: string) => void;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Select
      onValueChange={(v) => {
        const airport = getAirportFromCode(v);
        setCity(airport.name);
      }}
      open={open}
      onOpenChange={(o) => setOpen(o)}
      value={city}
    >
      <SelectTrigger
        className={cn("w-[267px] py-7 focus:ring-0 transition-all", {
          "ring-1 ring-green-900": open,
        })}
      >
        <div className="flex items-center justify-center gap-x-2 ">
          {!city && (
            <Image
              src="/menu-circle.svg"
              width={16}
              height={16}
              alt="circle icon"
            />
          )}
          <SelectValue placeholder={placeholder}>
            <div className="flex flex-col items-start transition-all">
              <span className="text-[12px] text-slate-500">{placeholder}</span>
              <p className="line-clamp-1 max-w-[200px]">{city}</p>
            </div>
          </SelectValue>
        </div>
        <ChevronDownIcon
          className={cn("h-4 w-4 opacity-50 transition-all", {
            "rotate-180": open,
          })}
        />
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

export default FlightSelect;
