import Image from "next/image";

export default function CardIntroduction() {
  return (
    <section className="w-full bg-white">
      {/* Card container */}
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[120px] py-[30px]">
        {/* Inner row */}
        <div className="mx-auto w-full max-w-[1200px] flex flex-col md:flex-row items-start gap-10 md:gap-[90px]">
          {/* Left: Text */}
          <div className="w-full md:w-[555px]">
            <h2 className="text-[24px] font-bold text-[#111111] mb-4">
              Giới thiệu
            </h2>

            <div
              className="
                be-vietnam-pro-regular
                text-[#434343]
                text-[16px]
                leading-[21.2px]
              "
            >
              <p className="mb-3">
                Chào mừng bạn đến với Nhan Van Education, nơi cung cấp các giải
                pháp hiện đại cho nhu cầu kiểm tra năng lực tiếng Anh của bạn.
              </p>

              <p className="mb-3">
                Với cơ sở vật chất tiên tiến, chúng tôi thiết kế không gian kiểm
                tra đạt chuẩn, tiện nghi và hiệu quả – từ phòng cách âm cho đến
                hệ thống công nghệ hỗ trợ đánh giá thông minh.
              </p>

              <p className="mb-3">
                Chúng tôi cam kết mang lại trải nghiệm thi cử mượt mà và chuyên
                nghiệp cho mọi học viên. Trung tâm không chỉ chú trọng tính
                chính xác và công năng, mà còn tạo nên không khí thân thiện với
                phong cách trang trí hiện đại và màu sắc tươi sáng.
              </p>

              <p className="be-vietnam-pro-bold">
                Hãy cùng chúng tôi bắt đầu hành trình chinh phục tiếng Anh một
                cách tự tin và hiệu quả!
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full md:w-[555px]">
            <div className="relative w-full h-[240px] md:h-[316.792px] overflow-hidden rounded-[8px]">
              <Image
                src="/images/card_introduction.jpg"
                alt="Card introduction"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
