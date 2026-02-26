"use client";

import BannerCard from "@/app/banner/components/BannerCard";
import { beVietnamPro } from "@/app/fonts";

function unimplementedFeatureAlert() {
  alert("This feature would be implemented soon!");
}

const unimplementedFeatureMessage = "Sớm ra mắt";

export default function Banner() {
  return (
    // ? component root div, would be replaced using layout.tsx upon project structure finalisation
    <div
      className={`text-p-neutral-black bg-p-neutral-white ${beVietnamPro.className} antialiased`}
    >
      {/* Left Section */}
      <div className="grid h-225 grid-cols-1 lg:grid-cols-[1fr_12.5%_1fr]">
        <div className="grid place-items-center px-5 py-4 lg:ml-24 lg:p-0">
          <div className="space-y-6 pb-4">
            <div>
              <p className="text-p-primary fs-sub-title mb-4">
                Luyện thi IELTS miễn phí tại nhà
              </p>
              <p className="fs-heading-1">
                {/* js text wrap to eliminate trailing space */}
                Hiệu quả thực tế,{" "}
                <span className="inline-block">kết quả thực chứng</span>
              </p>
            </div>
            <p className="fs-sub-title text-p-neutral-7">
              Nền tảng luyện thi IELTS trực tuyến giúp bạn luyện tập theo định
              dạng thật, kiểm tra kết quả tức thì và học mọi lúc – mọi nơi.
            </p>
            <button
              onClick={unimplementedFeatureAlert}
              className="bg-p-primary hover:text-p-primary text-p-neutral-white hover:bg-p-neutral-white fs-button button-hover-pop px-6 py-2"
            >
              Bắt đầu luyện ngay
            </button>
          </div>
        </div>

        {/* Middle Section used to create the diagonal line spliting the banner into 2 halves in large devices, hidden in smaller devices */}
        <div className="relative hidden lg:block">
          <div className="diagonal-split bg-p-primary"></div>
        </div>

        {/* Right Section */}
        <div className="bg-p-primary grid place-items-center px-5 py-11 lg:py-0 lg:pr-8 lg:pl-2">
          <div className="xs:grid-cols-2 grid w-full auto-rows-fr grid-cols-1 gap-3 lg:w-auto lg:gap-6">
            <BannerCard
              title="Bài Nghe"
              iconPath="/banner/listening-shadow.svg"
              isImplemented={true}
              // ? duration, score & onTestStartClick are mockup for UI display and would be replaced using states & hooks upon depenent feature implementation
              duration={40}
              score={6.5}
              onTestStartClick={unimplementedFeatureAlert}
            />
            <BannerCard
              title="Bài Đọc"
              iconPath="/banner/reading-shadow.svg"
              isImplemented={false}
              unimplementedMessage={unimplementedFeatureMessage}
            />
            <BannerCard
              title="Bài Nói"
              iconPath="/banner/speaking-shadow.svg"
              isImplemented={false}
              unimplementedMessage={unimplementedFeatureMessage}
            />
            <BannerCard
              title="Bài Viết"
              iconPath="/banner/writing-shadow.svg"
              isImplemented={false}
              unimplementedMessage={unimplementedFeatureMessage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
