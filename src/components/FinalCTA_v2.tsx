import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Be_Vietnam_Pro } from "next/font/google";

const beVietnamPro = Be_Vietnam_Pro({
  weight: ['400', '700'],
  subsets: ['latin', 'vietnamese'],
  variable: '--font-be-vietnam-pro',
});

const CTA: React.FC = () => {
    return (
        <>
            <div className="bg-nve-red py-10 lg:py-12.5 px-4 md:px-8 lg:px-30 relative overflow-hidden">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-around">
                    <div className="hidden lg:flex lg:flex-row items-center justify-around w-full">
                        <div className="relative mb-12 lg:mb-0">
                            <div className="relative">
                                <Image src="images/CardFinalCTA/star-3.svg" alt="Star" width={30} height={30} className="absolute top-[20.29px] -left-[6.23px]"/>
                                <Image src="images/CardFinalCTA/star-3.svg" alt="Star" width={30} height={30} className="absolute -top-[12.710px] left-[283.77px]"/>
                                <Image src="images/CardFinalCTA/star-3.svg" alt="Star" width={30} height={30} className="absolute top-[285px] left-[290px] z-20"/>
                                <Image src="images/CardFinalCTA/star-3.svg" alt="Star" width={30} height={30} className="absolute top-[349px] -left-[35px] z-20"/>
                                <Image src="images/CardFinalCTA/cta-ellipse-1.svg" alt="CTA Image" width={346} height={346} />
                                <Image src="images/CardFinalCTA/cta-ellipse-2.svg" alt="CTA Image" width={180} height={180} className="absolute -bottom-8 -left-12"/>
                            </div>
                        </div>
                        <div className="w-full lg:w-135 text-left lg:ml-4">
                            <h1 className={`text-3xl text-white font-bold mb-6 ${beVietnamPro.className}`}>
                                Hành trình chinh phục IELTS
                            </h1>
                            <h1 className={`text-3xl text-yellow-200 font-bold mb-6 ${beVietnamPro.className}`}>
                                bắt đầu ngay hôm nay
                            </h1>
                            <h2 className={`text-3xl text-white font-bold mb-6 ${beVietnamPro.className}`}>
                                Và chạm đến band điểm mơ ước
                            </h2>
                            <p className="text-2xl text-gray-100 my-4">
                                Học theo đúng định dạng đề thi, luyện tập hiệu quả, chấm điểm tức thì và tiết kiệm thời gian, vì chúng tôi hiểu bạn bận rộn.
                            </p>
                            <Link href="/auth/login">
                                <button className="btn btn-primary-invert cursor-pointer px-8 py-3.5 rounded-md text-[16px] w-[164px] h-[60px] flex items-center justify-center whitespace-nowrap">
                                    Đăng ký ngay
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="block lg:hidden w-full">
                        <div className="relative mb-8 md:mb-10 flex justify-center">
                            <div className="md:py-20 pt-10 md:pt-16 pb-14 md:pb-24">
                                <div className="relative">
                                    <Image src="images/CardFinalCTA/star-3.svg" alt="Star" width={30} height={30} className="absolute md:top-[32px] top-[22.29px] -left-[30.23px]"/>
                                    <Image src="images/CardFinalCTA/star-3.svg" alt="Star" width={30} height={30} className="absolute -top-[10.71px] md:left-[225.77px] left-[210.77px]"/>
                                    <Image src="images/CardFinalCTA/star-3.svg" alt="Star" width={30} height={30} className="absolute md:top-[225px] md:left-[215px] top-[219px] left-[190px] z-20"/>
                                    <Image src="images/CardFinalCTA/star-3.svg" alt="Star" width={30} height={30} className="absolute md:top-[290px] md:-left-[19px] top-[249px] -left-[25px] z-20"/>
                                    <Image src="images/CardFinalCTA/cta-ellipse-1.svg" alt="CTA Image" width={250} height={250} className="md:hidden"/>
                                    <Image src="images/CardFinalCTA/cta-ellipse-1.svg" alt="CTA Image" width={280} height={280} className="hidden md:block"/>
                                    <Image src="images/CardFinalCTA/cta-ellipse-2.svg" alt="CTA Image" width={130} height={130} className="absolute -bottom-6 -left-8 md:hidden"/>
                                    <Image src="images/CardFinalCTA/cta-ellipse-2.svg" alt="CTA Image" width={140} height={140} className="hidden md:block absolute -bottom-8 -left-10"/>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 md:px-6">
                            <h2 className={`text-2xl md:text-3xl text-white font-bold mb-4 md:mb-5 text-left ${beVietnamPro.className}`}>
                                Hành trình chinh phục IELTS
                            </h2>
                            <h2 className={`text-2xl md:text-3xl text-yellow-200 font-bold mb-4 md:mb-5 ${beVietnamPro.className}`}>
                                bắt đầu ngay hôm nay
                            </h2>
                            <h2 className={`text-2xl md:text-3xl text-white font-bold mb-4 md:mb-5 ${beVietnamPro.className}`}>
                                Và chạm đến band điểm mơ ước
                            </h2>
                            <p className="text-[16px] md:text-[18px] text-gray-100 mb-6 md:mb-8">
                                Học theo đúng định dạng đề thi, luyện tập hiệu quả, chấm điểm tức thì và tiết kiệm thời gian, vì chúng tôi hiểu bạn bận rộn.
                            </p>
                            <Link href="/auth/login">
                                <button className="btn btn-primary-invert rounded-lg cursor-pointer py-4 px-8 border-2 w-[144px] h-[60px] whitespace-nowrap flex items-center justify-center text-[14px]">
                                    Đăng ký ngay
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CTA;