import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import data from "../../data";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAirportFromCode(code: string) {
  return data.airports.filter((item) => item.code === code)[0];
}
