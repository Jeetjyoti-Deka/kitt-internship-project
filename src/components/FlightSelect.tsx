import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import data from "../../data";

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

export default FlightSelect;
