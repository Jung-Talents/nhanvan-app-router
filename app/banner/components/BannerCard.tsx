"use client";

import Image from "next/image";

interface EssentialBannerCardProps {
  readonly title: string;
  readonly iconPath: string;
}

interface ImplementedBannerCardProps extends EssentialBannerCardProps {
  readonly isImplemented: true;
  readonly duration: number;
  readonly score: number;
  readonly onTestStartClick: () => void;
}

interface UnimplementedBannerCardProps extends EssentialBannerCardProps {
  readonly isImplemented: false;
  readonly unimplementedMessage: string;
}

type BannerCardProps =
  | ImplementedBannerCardProps
  | UnimplementedBannerCardProps;

export default function BannerCard(props: BannerCardProps) {
  return (
    <div className="bg-p-neutral-white min-h-61 space-y-4 rounded-xl px-6 py-5">
      <div className="space-y-6">
        <Image
          src={props.iconPath}
          width={45}
          height={36}
          alt={`${props.title} icon`}
        />
        <p className="fs-body-2">{props.title}</p>
      </div>

      {props.isImplemented ? (
        <>
          <p className="fs-body space-y-2 space-x-2">
            <Image
              src="/banner/timer-20.svg"
              width={20}
              height={20}
              alt="Timer icon"
              className="inline-block"
            />
            {/* ommit duration unit (phút) into a symbol (') in small devices for responsive purposes */}
            <span>
              {props.duration} <span className="sm:hidden">&#39;</span>
              <span className="hidden sm:inline">phút</span>
            </span>
            <span className="inline-block">
              {/* ? currently styled using a mockup colour (p-custom-amber),
              might be coloured dynamically based on different score bands upon further implementation */}
              Tổng điểm:{" "}
              <span className="text-p-custom-amber">{props.score}</span>
            </span>
          </p>
          <button
            onClick={props.onTestStartClick}
            className="bg-p-neutral-white hover:text-p-neutral-white text-p-primary hover:bg-p-primary fs-button button-hover-pop px-2 py-1"
          >
            Tham gia
          </button>
        </>
      ) : (
        <p className="text-p-neutral-6 fs-sub-title">
          ({props.unimplementedMessage})
        </p>
      )}
    </div>
  );
}
