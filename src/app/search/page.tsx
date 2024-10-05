import { Separator } from "@/components/ui/separator";
import { Search, X } from "lucide-react";
import Link from "next/link";

const SearchPage = () => {
  return (
    <div>
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
      {false && <LoadingBar />}
    </div>
  );
};
export default SearchPage;

const LoadingBar = () => {
  return (
    <div className="w-full h-1 bg-slate-100 overflow-hidden absolute inset-x-0">
      {/* <div className="h-2 w-full bg-gradient-to-r from-slate-200 from-5% via-slate-400 via-50% to-slate-200 to-95% animate-bar-loading origin-left" /> */}
      <div className="h-1 w-full bg-gray-300 animate-bar-loading origin-left" />
    </div>
  );
};

const FlightMenu = () => {
  return (
    <div className="rounded-full h-10 border border-slate-300 flex items-center justify-around pl-3 py-6 pr-1 select-none cursor-pointer">
      <div className="flex items-center justify-start gap-x-1 max-w-[200px]">
        <span className="font-semibold">CDG</span>
        <p className="line-clamp-1">Paris Charles De Gujdffan dfa d vadvad</p>
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
  );
};
