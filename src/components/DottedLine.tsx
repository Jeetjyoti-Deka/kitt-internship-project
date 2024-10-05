import { cn } from "@/lib/utils";

const DottedLine = ({
  className,
  color = "#e2e8f0",
}: {
  className: string;
  color?: string;
}) => {
  return (
    <div className={cn("absolute -top-[400px]", className)}>
      <svg height="400" width="4" xmlns="http://www.w3.org/2000/svg">
        <path
          stroke={color}
          stroke-width="1"
          stroke-dasharray="10,7"
          d="M2 0 l0 400"
        />
      </svg>
    </div>
  );
};
export default DottedLine;
