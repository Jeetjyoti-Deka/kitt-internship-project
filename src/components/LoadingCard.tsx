"use client";

import { cn } from "@/lib/utils";
import { CircleCheckBig, LoaderCircle } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type LoadingStageVal = {
  disable: boolean;
  loading: boolean;
};

const LoadingCard = () => {
  const [loadingStage1, setLoadingStage1] = useState<LoadingStageVal>({
    disable: false,
    loading: true,
  });
  const [loadingStage2, setLoadingStage2] = useState<LoadingStageVal>({
    disable: true,
    loading: false,
  });
  const [loadingStage3, setLoadingStage3] = useState<LoadingStageVal>({
    disable: true,
    loading: false,
  });

  useEffect(() => {
    setTimeout(() => {
      setLoadingStage1({
        disable: false,
        loading: false,
      });
      setLoadingStage2({
        disable: false,
        loading: true,
      });
    }, 2000);

    setTimeout(() => {
      setLoadingStage2({
        disable: false,
        loading: false,
      });
      setLoadingStage3({
        disable: false,
        loading: true,
      });
    }, 4000);

    setTimeout(() => {
      setLoadingStage3({
        disable: false,
        loading: false,
      });
    }, 6000);
  }, []);

  return (
    <div className="p-6 shadow-lg flex flex-col items-center gap-y-4 rounded-lg bg-white">
      <Image
        src="/paper-plane.gif"
        alt="paper plane"
        height={100}
        width={100}
        unoptimized
      />
      <div className="flex flex-col gap-y-2">
        <LoadingStage
          text="Searching 400+ flights"
          disable={loadingStage1.disable}
          loading={loadingStage1.loading}
        />
        <LoadingStage
          text="Attaching company rules"
          disable={loadingStage2.disable}
          loading={loadingStage2.loading}
        />
        <LoadingStage
          text="Serving best results"
          disable={loadingStage3.disable}
          loading={loadingStage3.loading}
        />
      </div>
    </div>
  );
};

const LoadingStage = ({
  text,
  disable,
  loading,
}: {
  text: string;
  disable: boolean;
  loading: boolean;
}) => {
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-1 flex items-center justify-start">
        {!disable && !loading && (
          <CircleCheckBig className="w-4 h-4 text-green-700" />
        )}
        {!disable && loading && (
          <LoaderCircle className="w-4 h-4 animate-spin" />
        )}
      </div>
      <div className="col-span-5 flex items-center justify-start">
        <p className={cn("text-slate-600", { "text-gray-400": disable })}>
          {text}
        </p>
      </div>
    </div>
  );
};

export default LoadingCard;
