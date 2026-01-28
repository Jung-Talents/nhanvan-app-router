'use client'
import { useRouter } from 'next/navigation';
const AppHeader = () => {
    const router = useRouter();
    const handleIntroductionClick = () => {
        router.push("/introduction");
    }
    const handleHomeClick = () => {
        router.push("/");
    }
    return (
        <header className="flex shadow-md py-4 px-4 sm:px-10 bg-white min-h-[70px] tracking-wide relative z-50">
            <div className="flex flex-wrap items-center justify-between gap-5 w-full mx-auto max-w-[1128px]">
                <a href="javascript:void(0)" className="max-sm:hidden"><img src="/images/logo.png" alt="logo" className="w-36" /></a>
                <div id="collapseMenu"
                    className="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50">
                    <ul
                        className="lg:flex gap-x-4 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
                        <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3" onClick={handleHomeClick}>
                            <a className="hover:text-red-700 text-red-700 block font-medium text-[15px] cursor-pointer">Trang Chủ</a>
                        </li>
                        <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3" onClick={handleIntroductionClick}>
                            <a className="hover:text-red-700 text-slate-900 block font-medium text-[15px] cursor-pointer">Giới Thiệu</a>
                        </li>
                    </ul>
                </div>

                <div className="flex max-lg:ml-auto space-x-4">
                    <button
                        className="px-4 py-2 text-sm rounded-full font-medium cursor-pointer tracking-wide text-red-900 border border-gray-400 hover:bg-red-50 transition-all">Đăng kí học trực tuyến</button>
                    <button
                        className="px-4 py-2 text-sm rounded-full font-medium cursor-pointer tracking-wide text-white border border-red-600 bg-red-600 hover:bg-red-700 transition-all">Đăng Nhập</button>
                </div>
            </div>
        </header>
    );
}
export default AppHeader;