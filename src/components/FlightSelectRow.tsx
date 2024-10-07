"use client";

import { ArrowLeftRight } from "lucide-react";
import FlightDatePicker from "./FlightDatePicker";
import FlightSelect from "./FlightSelect";
import { useStore } from "@/store/store";

const FlightSelectRow = () => {
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
        <FlightSelect placeholder="where to ?" city={to} setCity={setTo} />
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
  );
};
export default FlightSelectRow;
