import FinalCTA from "@/components/FinalCTA";
import { title } from "process";
// import CTA from "@/components/FinalCTA_v2";

export default function Home() {
  return (
    <div>
      <main >
        <FinalCTA
          title="Hành trình chinh phục IELTS"
          highlight="bắt đầu ngay hôm nay"
          subtitle="Và chạm đến band điểm mơ ước"
          description="Học theo đúng định dạng đề thi, luyện tập hiệu quả, chấm điểm tức thì và tiết kiệm thời gian, vì chúng tôi hiểu bạn bận rộn." />
      </main>
    </div>
  );
}
