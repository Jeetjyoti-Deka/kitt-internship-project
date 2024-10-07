"use client";

import LoadingCard from "@/components/LoadingCard";
import LoadingSkeletons from "@/components/LoadingSkeletons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeftRight, Clock, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import FlightSelect from "@/components/FlightSelect";
import FlightDatePicker from "@/components/FlightDatePicker";
import { useStore } from "@/store/store";

const SearchPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6500);
  }, []);

  return (
    <div className="h-full">
      <div className="flex items-center justify-between">
        <div className="py-5">
          <FlightMenu />
        </div>
        <Link
          href="/"
          className="p-3 rounded-full flex items-center justify-center border border-slate-200"
        >
          <X className="w-5 h-5" />
        </Link>
      </div>
      <Separator className="absolute inset-x-0 h-px" />
      {loading ? (
        <LoaderComponents />
      ) : (
        <div>
          <p className="text-gray-500 mt-8 mb-4 text-[18px]">
            Showing 356 of 767 results
          </p>
          <div className="flex flex-col gap-y-5">
            <FlightDetailsCard />
            <FlightDetailsCard />
            <FlightDetailsCard />
            <FlightDetailsCard />
            <FlightDetailsCard />
            <FlightDetailsCard />
          </div>
        </div>
      )}
    </div>
  );
};
export default SearchPage;

const FlightDetailsCard = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="border border-gray-200/75 rounded-md grid grid-cols-4 hover:bg-gray-50 cursor-pointer">
          <div className="flex flex-col gap-y-14 col-span-3 p-4">
            <div className="grid grid-cols-2">
              <div className="flex items-center justify-start gap-x-4">
                <div className="border border-gray-200 flex items-center justify-center p-2 rounded-md">
                  <Image
                    src="/emirates.png"
                    alt="airline"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="flex flex-col items-start gap-y-1">
                  <p className="text-[13px] text-gray-400">
                    Emirates • AT 4334
                  </p>
                  <h3 className="font-semibold text-[18px]">
                    9:45 AM - 11:45 AM
                  </h3>
                </div>
              </div>
              <div className="flex items-end justify-end gap-x-20">
                <div className="flex flex-col items-start gap-y-1">
                  <p className="text-[14px] text-gray-400">CDG - DXB</p>
                  <p className="text-[18px]">2h 10min</p>
                </div>
                <p className="text-[18px] w-[120px] max-w-[120px]">Non Stop</p>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="flex items-center justify-start gap-x-4">
                <div className="border border-gray-200 flex items-center justify-center p-2 rounded-md">
                  <Image
                    src="/lufthansa.png"
                    alt="airline"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="flex flex-col items-start gap-y-1">
                  <p className="text-[13px] text-gray-400">
                    Lufthansa • AT 4334
                  </p>
                  <div className="flex items-start gap-x-1">
                    <h3 className="font-semibold text-[18px]">
                      11:45 PM - 6:45 AM
                    </h3>
                    <span className="text-[10px] text-red-800 font-semibold mt-px">
                      +1 day
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-end justify-end gap-x-20">
                <div className="flex flex-col items-start gap-y-1">
                  <p className="text-[14px] text-gray-400">DXB - CDG</p>
                  <p className="text-[18px]">4h 10min</p>
                </div>
                <div className="flex flex-col items-start gap-y-1">
                  <p className="text-[14px] text-gray-400 max-w-[120px] line-clamp-1">
                    6h 32m in Lisbon, Paris
                  </p>
                  <p className="text-[18px]">2 stops</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-end border-l border-slate-200 p-3 gap-y-2">
            <span className="text-[14px] text-gray-400">from</span>
            <p className="text-[20px]">AED 2,456.90</p>
            <Button className="my-1 bg-green-900 hover:bg-green-700">
              Select
            </Button>
          </div>
        </div>
      </SheetTrigger>
      <SheetContent className="h-[calc(100%-30px)] my-auto mr-[15px] rounded-lg min-w-[659px] overflow-auto">
        <SheetHeader className="mt-16">
          <SheetTitle className="text-[30px]">Flights Details</SheetTitle>
        </SheetHeader>
        <Separator orientation="horizontal" className="w-full my-5" />
        <div className="flex flex-col gap-y-10 pl-14 relative">
          <div className="absolute top-[10px] left-0 flex flex-col gap-y-2">
            <Image
              src="/timeline-circle.svg"
              alt="circle"
              width={10}
              height={10}
            />
            <Image src="/timeline-line.svg" alt="line" width={10} height={2} />
            <Image
              src="/timeline-circle.svg"
              alt="circle"
              width={10}
              height={10}
            />
            <Image
              src="/timeline-dotted-line.svg"
              alt="line"
              width={10}
              height={2}
            />
            <Image
              src="/timeline-circle.svg"
              alt="circle"
              width={10}
              height={10}
            />
            <Image src="/timeline-line.svg" alt="line" width={10} height={2} />
            <Image
              src="/timeline-circle.svg"
              alt="circle"
              width={10}
              height={10}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-y-12">
              <div>
                <span className="text-[12px] text-gray-400">
                  Sat 28 Sept • 2:15
                </span>
                <p className="text-[14px]">DXB • Dubai International Airport</p>
              </div>
              <div>
                <span className="text-[12px] text-gray-400">
                  Sat 28 Sept • 2:15
                </span>
                <p className="text-[14px] text-wrap max-w-[200px]">
                  RUH • King Khalid International Airport
                </p>
              </div>
            </div>
            <div className="flex items-start gap-x-3">
              <div>
                <Image
                  src="/lufthansa.png"
                  alt="airline logo"
                  width={23}
                  height={23}
                  className="mt-1"
                />
              </div>
              <div>
                <p className="text-[12px] text-slate-400">
                  Saudi Arabian Airlines • SV553
                </p>
                <p className="text-[12px] text-slate-400">Economy • A330</p>
                <p className="text-[12px] text-slate-400">Flight time 3h 45m</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start gap-x-3 ml-14">
            <Clock className="w-4 h-4 text-gray-400" />
            <p className="text-[14px] text-gray-400">Layover 2h 25m</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-y-12">
              <div>
                <span className="text-[12px] text-gray-400">
                  Sat 28 Sept • 2:15
                </span>
                <p className="text-[14px]">DXB • Dubai International Airport</p>
              </div>
              <div>
                <span className="text-[12px] text-gray-400">
                  Sat 28 Sept • 2:15
                </span>
                <p className="text-[14px] text-wrap max-w-[200px]">
                  RUH • King Khalid International Airport
                </p>
              </div>
            </div>
            <div className="flex items-start gap-x-3">
              <div>
                <Image
                  src="/lufthansa.png"
                  alt="airline logo"
                  width={23}
                  height={23}
                  className="mt-1"
                />
              </div>
              <div>
                <p className="text-[12px] text-slate-400">
                  Saudi Arabian Airlines • SV553
                </p>
                <p className="text-[12px] text-slate-400">Economy • A330</p>
                <p className="text-[12px] text-slate-400">Flight time 3h 45m</p>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const LoaderComponents = () => {
  return (
    <>
      <LoadingBar />
      <div className="mt-14 h-[calc(100%-90px-56px)] overflow-y-hidden">
        <LoadingSkeletons />
      </div>
      <div className="absolute top-80 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <LoadingCard />
      </div>
    </>
  );
};

const LoadingBar = () => {
  return (
    <div className="w-full h-1 bg-slate-100 overflow-hidden absolute inset-x-0">
      {/* <div className="h-2 w-full bg-gradient-to-r from-slate-200 from-5% via-slate-400 via-50% to-slate-200 to-95% animate-bar-loading origin-left" /> */}
      <div className="h-1 w-full bg-gray-300 animate-bar-loading origin-left" />
    </div>
  );
};

const FlightMenu = () => {
  const {
    setFrom,
    from,
    to,
    setTo,
    fromDate,
    setFromDate,
    returnDate,
    setReturnDate,
  } = useStore();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="rounded-full h-10 border border-slate-300 flex items-center justify-around pl-3 py-6 pr-1 select-none cursor-pointer">
          <div className="flex items-center justify-start gap-x-1 max-w-[200px]">
            <span className="font-semibold">CDG</span>
            <p className="line-clamp-1">
              Paris Charles De Gujdffan dfa d vadvad
            </p>
          </div>
          <Separator orientation="vertical" className="h-7 mx-2" />
          <div className="flex items-center justify-start gap-x-1 max-w-[200px]">
            <span className="font-semibold">CDG</span>
            <p className="line-clamp-1">Paris Charles De Gujdffan</p>
          </div>
          <Separator orientation="vertical" className="h-7 mx-2" />
          <div className="flex items-center justify-start gap-x-1">
            <p className="font-semibold text-nowrap">Jun 25 - Jul 2</p>
          </div>
          <Separator orientation="vertical" className="h-7 mx-2" />
          <div className="bg-slate-100 rounded-full p-[10px]">
            <Search className="w-4 h-4 text-[#003E39]" />
          </div>
        </div>
      </SheetTrigger>
      <SheetContent side="top" showBackBtn={false} className="h-[233px]">
        <div className="max-w-[1057px] h-full mx-auto flex flex-col justify-end gap-y-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <FlightSelect
                placeholder="where from ?"
                city={from}
                setCity={setFrom}
              />
            </div>
            <div className="flex items-center justify-center rounded-full bg-slate-200 p-3">
              <ArrowLeftRight className="w-4 h-4 text-slate-800" />
            </div>
            <div>
              <FlightSelect
                placeholder="where to ?"
                city={to}
                setCity={setTo}
              />
            </div>
            <div>
              <FlightDatePicker
                placeholder="Departure"
                date={fromDate}
                setDate={setFromDate}
              />
            </div>
            <div>
              <FlightDatePicker
                placeholder="Return"
                date={returnDate}
                setDate={setReturnDate}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <SheetClose asChild>
              <Button
                className="flex items-center gap-x-2 bg-green-900 px-10 py-[20px] text-sm"
                asChild
              >
                <Link href="/search">
                  <Search className="w-4 h-4 mb-[2px]" />
                  Search Flights
                </Link>
              </Button>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
