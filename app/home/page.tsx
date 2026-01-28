'use client'
import { useRouter } from 'next/navigation';

const HomePage = () => {
    const router = useRouter();
    const handleClick = () => {
        router.push("/introduction");
    }
    return (
        <h1 className="font-semibold text-3xl">Đây là trang chủ</h1>
    );
}
export default HomePage;