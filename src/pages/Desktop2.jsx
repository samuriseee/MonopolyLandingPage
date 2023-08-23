import Carousel from "../components/slide";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import CarouselComponent from "../components/slide";
import SlideComponent from "../components/slideAddress";
import VerticalCarousel from "../components/slide";
import "./Desktop2.css";
const Desktop2 = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    }); // Khởi tạo AOS trong useEffect
  }, []);
  return (
      <div className="">
        <div className="main-container w-full relative bg-cornsilk-100 h-[366rem] overflow-hidden text-left text-[1.5rem] text-cornsilk-100 font-palatino-linotype">
          <div className="flex justify-around items-center">
            <img
                className="absolute top-[1.25rem] left-[6.69rem] w-[10.69rem] h-[5.75rem] overflow-hidden"
                alt=""
                src="/layer-1.svg"
            />
            <div className="relative top-[1.75rem] left-[15rem] w-[59.31rem] h-[84px]">
              <div className="absolute top-[0rem] left-[-10rem] rounded-[63px] flex flex-row py-[1.63rem] px-[2.44rem] items-start justify-start gap-[2.13rem] border-[2px] border-solid border-darkslategray">
                <div className="flex flex-row items-start justify-start gap-[2.75rem] text-darkslategray">
                  <div className="flex flex-row items-center justify-start gap-[2.75rem]">
                    <div className="flex flex-row items-start justify-start gap-[2.75rem]">
                      <div className="flex flex-row items-center justify-start gap-[1.5rem] cursor-pointer hover:text-[#eb813e]">
                        <span className="relative z-20">Trang chủ</span>
                        <img
                            className="relative w-[1.31rem]  z-20 h-[1.31rem] overflow-hidden shrink-0"
                            alt=""
                            src="/layer-11.svg"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[1.5rem] cursor-pointer hover:text-[#eb813e]">
                        <div className="relative">Bài viết</div>
                        <img
                            className="relative w-[1.31rem] h-[1.31rem] overflow-hidden shrink-0"
                            alt=""
                            src="/layer-11.svg"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[1.5rem] cursor-pointer hover:text-[#eb813e]">
                        <div className="relative">Sự kiện</div>
                        <img
                            className="relative w-[1.31rem] h-[1.31rem] overflow-hidden shrink-0"
                            alt=""
                            src="/layer-11.svg"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-center gap-[1.5rem] cursor-pointer hover:text-[#eb813e]">
                        <div className="relative">Về dự án</div>
                        <img
                            className="relative w-[1.31rem] h-[1.31rem] overflow-hidden shrink-0"
                            alt=""
                            src="/layer-11.svg"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-center gap-[1.5rem] cursor-pointer hover:text-[#eb813e]">
                        <div className="relative">Liên hệ</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[3rem] left-[105.81rem] flex flex-row items-center justify-start gap-[0.88rem] text-black font-be-vietnam-pro cursor-pointer">
              <img
                  className="relative w-[2.63rem] h-[2.63rem] object-cover"
                  alt=""
                  src="/connection-903482-1@2x.png"
              />
              <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                <div className="relative">VN</div>
                <img
                    className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
                    alt=""
                    src="/arrowdownsline.svg"
                />
              </div>
            </div>
          </div>
          <img
              className="absolute h-[17.8%] w-[99.9%] top-[2.42%] right-[0%] bottom-[79.79%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/nn01-1@2x.png"
          />
          <img
              className="absolute top-[7.94rem] left-[50.67rem] w-[69.33rem] h-[63.37rem] object-cover"
              alt=""
              src="/20101-1@2x.png"
          />
          <img
              className="absolute top-[12.66rem] left-[54.98rem] w-[64.77rem] h-[10.69rem] overflow-hidden"
              alt=""
              src="/isolation-mode.svg"
          />
          <div className="absolute top-[71.83rem] left-[88.08rem] [background:linear-gradient(269.96deg,_rgba(4,_67,_50,_0.82)_1.32%,_rgba(19,_85,_67,_0.79)_28.73%,_rgba(20,_93,_73,_0.69)_41.8%,_rgba(24,_108,_85,_0.63)_50.48%,_rgba(28,_127,_100,_0.49)_58.69%,_rgba(32,_145,_114,_0.36)_65.44%,_rgba(37,_172,_136,_0.15)_73.46%,_rgba(242,_223,_183,_0)_88.61%)] w-[88.2rem] h-[63rem] [transform:_rotate(180deg)] [transform-origin:0_0]" />
          <div className="absolute top-[15.97rem] left-[7.93rem] w-[40.42rem] h-[28.08rem] text-[4.88rem] font-be-vietnam-pro">
            <div className="absolute top-[0rem] left-[0rem] inline-block w-[4.14rem] h-[14.08rem]">{`“  `}</div>
            <div className="absolute top-[14.08rem] left-[35.7rem] inline-block w-[4.72rem] h-[14rem]">{`”  `}</div>
            <img
                className="absolute top-[0.5rem] left-[2.65rem] w-[35.37rem] h-[12.59rem] object-cover"
                alt=""
                src="/tetsstts01-1@2x.png"
            />
            <img
                className="absolute top-[11.43rem] left-[2.49rem] w-[31.97rem] h-[10.93rem] object-cover"
                alt=""
                src="/tetsstts01-2@2x.png"
            />
          </div>
          <b className="absolute top-[40.44rem] left-[10.56rem] text-[2.13rem] text-chocolate">
            XANH ƯỚC MƠ - VÀNG PHÚ HỘ
          </b>
          <div className="absolute top-[45.94rem] left-[10.56rem] inline-block w-[34.63rem]">
            <p className="m-0">{`Sự kết hợp giữa khát vọng muốn khám phá và `}</p>
            <p className="m-0">{`chinh phục những danh lam thắng cảnh, văn hóa `}</p>
            <p className="m-0">{`tuyệt đẹp của Việt Nam, cùng với sự may mắn và `}</p>
            <p className="m-0">thành công của Phú Hộ trong bộ cờ.</p>
          </div>
          <div className="absolute top-[57.44rem] left-[10.56rem] rounded-16xl flex flex-row py-[1.13rem] px-[1.75rem] items-center justify-start gap-[0.63rem] border-[3px] border-solid border-chocolate">
            <b className="relative inline-block w-[8.5rem] h-[1.5rem] shrink-0">
              XEM THÊM
            </b>
            <img
                className="relative w-[1.02rem] h-[0.63rem]"
                alt=""
                src="/vector.svg"
            />
          </div>
          <img
              className="absolute top-[71.13rem] left-[0.06rem] w-[119.94rem] h-[27.88rem] object-cover"
              alt=""
              src="/image-12@2x.png"
          />
          <img
              className="absolute top-[71.13rem] left-[0.13rem] w-[119.88rem] h-[27.88rem] object-cover"
              alt=""
              src="/3-1@2x.png"
          />
          <div className="absolute top-[71.13rem] left-[0.06rem] bg-cornsilk-200 w-[119.94rem] h-[27.88rem]" />
          <div className="absolute top-[76.5rem] left-[13.94rem] flex flex-col items-center justify-start gap-[1.5rem] text-[2.75rem] text-black">
            <div className="flex flex-col items-center justify-start gap-[1.75rem]">
              <b className="relative">Giới thiệu</b>
              <div className="relative text-[1.5rem] text-center inline-block w-[88.94rem]">
                Cờ "Phú Hộ Du Lãm" không chỉ là một hình thức giải trí truyền thống,
                mà còn là cầu nối để chúng ta tận hưởng những khoảng khắc đáng nhớ
                bên gia đình và bạn bè. Trong thời đại công nghệ phát triển mạnh mẽ,
                chúng ta đang cảm nhận sự kì diệu khi quay lại với những trò chơi
                vui nhộn, mang đậm niềm tự hào Việt Nam.
              </div>
            </div>
            <div className="rounded-16xl flex flex-row py-[1.13rem] px-[1.75rem] items-center justify-start gap-[0.63rem] text-[1.5rem] text-chocolate">
              <b className="relative inline-block w-[8.5rem] h-[1.5rem] shrink-0">
                XEM THÊM
              </b>
              <img
                  className="relative w-[1.02rem] h-[0.63rem]"
                  alt=""
                  src="/vector1.svg"
              />
            </div>
          </div>
          <div className="absolute top-[99.06rem] left-[6.5rem] bg-darkslategray w-[107rem]">
            <VerticalCarousel />
          </div>

          <div className="absolute top-[155.06rem]  flex flex-col items-center justify-center gap-[3.38rem] text-center text-[2.75rem] text-black  w-[100%]">
            <div className="flex flex-col items-center justify-start gap-[1.5rem]">
              <b className="relative">{`Du lạc các địa danh Việt Nam `}</b>
              <div className="relative text-[1.5rem] text-left">{`Hình ảnh các danh lam thắng canh, di tích lịch sử và di sản văn hoá Việt Nam được sử dụng `}</div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[2.5rem] text-left text-[2rem] ">
              <SlideComponent />
            </div>
          </div>
          <div className="absolute top-[209.69rem] left-[11.56rem] flex flex-col items-center justify-start gap-[3rem] text-[2.75rem] text-black">
            <div className="flex flex-col items-center justify-start gap-[3.38rem]">
              <b className="relative">Đánh giá sản phẩm</b>
              <div className="flex flex-row items-center justify-center gap-[8.38rem] text-[1.88rem]">
                <div
                    className="rounded-sm bg-gray-200 shadow-[0px_2px_4px_rgba(0,_0,_0,_0.15)] flex flex-col py-[3.13rem] px-[2.25rem] items-center justify-start gap-[1.38rem]"
                    data-aos="fade-left"
                    data-aos-offset="-180"
                    data-aos-delay="300"
                >
                  <img
                      className="relative w-[10.94rem] h-[10.94rem] object-cover"
                      alt=""
                      src="/group-20@2x.png"
                  />
                  <div className="flex flex-col items-center justify-center gap-[1.5rem]">
                    <div className="flex flex-col items-center justify-start gap-[1.5rem]">
                      <div className="flex flex-col items-center justify-start gap-[1.5rem]">
                        <b className="relative">Như Ảnh</b>
                        <div className="flex flex-row items-start justify-start gap-[0.88rem]">
                          <img
                              className="relative w-[1.5rem] h-[1.5rem]"
                              alt=""
                              src="/star-1.svg"
                          />
                          <img
                              className="relative w-[1.5rem] h-[1.5rem]"
                              alt=""
                              src="/star-1.svg"
                          />
                          <img
                              className="relative w-[1.5rem] h-[1.5rem]"
                              alt=""
                              src="/star-1.svg"
                          />
                          <img
                              className="relative w-[1.5rem] h-[1.5rem]"
                              alt=""
                              src="/star-1.svg"
                          />
                          <img
                              className="relative w-[1.5rem] h-[1.5rem]"
                              alt=""
                              src="/star-1.svg"
                          />
                        </div>
                      </div>
                      <div className="relative text-[1.25rem] text-justify inline-block w-[21.75rem]">
                        "Thật vui khi chơi bộ cờ với phong cách hiện đại như thế
                        này, team của mình chơi quá sung mà đến nỗi gần đốt nhà
                        nhau. Tuyệt vời quá, rất thích "
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.88rem]">
                      <div className="relative w-[8.48rem] h-[8.25rem]">
                        <div className="absolute top-[0rem] left-[0rem] rounded-10xs bg-darkslategray w-[8.48rem] h-[8.25rem]" />
                        <img
                            className="absolute top-[0.24rem] left-[0.25rem] rounded-10xs w-[7.98rem] h-[7.77rem] object-cover"
                            alt=""
                            src="/image-21@2x.png"
                        />
                      </div>
                      <div className="relative w-[8.28rem] h-[8.28rem]">
                        <div className="absolute top-[0rem] left-[0rem] w-[8.28rem] h-[8.28rem]">
                          <div className="absolute top-[0rem] left-[0rem] w-[8.28rem] h-[8.28rem]">
                            <div className="absolute top-[0rem] left-[0rem] rounded-10xs bg-darkslategray w-[8.28rem] h-[8.28rem]" />
                          </div>
                        </div>
                        <img
                            className="absolute top-[0.24rem] left-[0.24rem] rounded-10xs w-[7.79rem] h-[7.79rem] object-cover"
                            alt=""
                            src="/image-22@2x.png"
                        />
                        <img
                            className="absolute top-[0.24rem] left-[0.24rem] rounded-10xs w-[7.79rem] h-[7.79rem] object-cover"
                            alt=""
                            src="/image-25@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                    className="rounded-sm bg-gray-200 shadow-[0px_2px_4px_rgba(0,_0,_0,_0.15)] flex flex-col py-[4rem] px-[2.25rem] items-center justify-start gap-[1.38rem] text-[2rem]"
                    data-aos="fade-up"
                    data-aos-offset="-180"
                >
                  <img
                      className="relative w-[12.5rem] h-[12.5rem] object-cover"
                      alt=""
                      src="/group-19@2x.png"
                  />
                  <div className="flex flex-col items-center justify-center gap-[1.5rem]">
                    <div className="flex flex-col items-center justify-start gap-[1.5rem]">
                      <div className="flex flex-col items-center justify-start gap-[1.5rem]">
                        <b className="relative">Đăng Khánh</b>
                        <div className="flex flex-row items-start justify-start gap-[0.88rem]">
                          <img
                              className="relative w-[1.5rem] h-[1.5rem]"
                              alt=""
                              src="/star-11.svg"
                          />
                          <img
                              className="relative w-[1.5rem] h-[1.5rem]"
                              alt=""
                              src="/star-11.svg"
                          />
                          <img
                              className="relative w-[1.5rem] h-[1.5rem]"
                              alt=""
                              src="/star-11.svg"
                          />
                          <img
                              className="relative w-[1.5rem] h-[1.5rem]"
                              alt=""
                              src="/star-11.svg"
                          />
                          <img
                              className="relative w-[1.5rem] h-[1.5rem]"
                              alt=""
                              src="/star-11.svg"
                          />
                        </div>
                      </div>
                      <div className="relative text-[1.5rem] text-justify inline-block w-[23.56rem]">
                        “ Game vô cùng thú vị, lăng ba vi mộ Lăng thẳng vô tù. Được
                        trải nghiệm lắc xúc sắc 3 ngày 3 đêm chưa ra tù ”.
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.56rem]">
                      <div className="relative w-[10.33rem] h-[8rem]">
                        <div className="absolute top-[0rem] left-[0rem] w-[10.33rem] h-[8rem]">
                          <div className="absolute top-[0rem] left-[0rem] rounded-10xs bg-darkslategray w-[10.33rem] h-[8rem]" />
                        </div>
                        <img
                            className="absolute top-[0.2rem] left-[0.2rem] rounded-10xs w-[9.92rem] h-[7.6rem] object-cover"
                            alt=""
                            src="/img-0860-2@2x.png"
                        />
                      </div>
                      <div className="relative w-[10.47rem] h-[8.05rem]">
                        <div className="absolute top-[0rem] left-[0rem] w-[10.47rem] h-[8.05rem]">
                          <div className="absolute top-[0rem] left-[0rem] rounded-10xs bg-darkslategray w-[10.47rem] h-[8.05rem]" />
                        </div>
                        <img
                            className="absolute top-[0.24rem] left-[0.24rem] rounded w-[10rem] h-[7.62rem] object-cover"
                            alt=""
                            src="/image-23@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                    className="rounded-sm bg-gray-200 shadow-[0px_2px_4px_rgba(0,_0,_0,_0.15)] flex flex-col py-[3.13rem] px-[2.25rem] items-center justify-start gap-[1.38rem]"
                    data-aos="fade-right"
                    data-aos-offset="-180"
                    data-aos-delay="150"
                >
                  <img
                      className="relative w-[10.94rem] h-[10.94rem] object-cover"
                      alt=""
                      src="/group-22@2x.png"
                  />
                  <div className="h-[21.13rem] flex flex-col items-center justify-center gap-[1.5rem]">
                    <div className="flex flex-col items-center justify-start gap-[1.5rem]">
                      <div className="flex flex-col items-center justify-start gap-[1.5rem]">
                        <b className="relative">Ngọc Ánh</b>
                        <div className="flex flex-row items-start justify-start gap-[0.88rem]">
                          <img
                              className="relative w-[1.5rem] h-[1.5rem]"
                              alt=""
                              src="/star-12.svg"
                          />
                          <img
                              className="relative w-[1.5rem] h-[1.5rem]"
                              alt=""
                              src="/star-12.svg"
                          />
                          <img
                              className="relative w-[1.5rem] h-[1.5rem]"
                              alt=""
                              src="/star-12.svg"
                          />
                          <img
                              className="relative w-[1.5rem] h-[1.5rem]"
                              alt=""
                              src="/star-12.svg"
                          />
                          <img
                              className="relative w-[1.5rem] h-[1.5rem]"
                              alt=""
                              src="/star-12.svg"
                          />
                        </div>
                      </div>
                      <div className="relative text-[1.25rem] text-justify inline-block w-[21.75rem]">
                        “ Cảm giác Ố ỳe nhất là thấy đứa mình ghét dẫm vào lô đất 2
                        căn khách sạn của mình ”
                      </div>
                    </div>
                    <div className="w-[17.44rem] flex flex-row items-start justify-start gap-[0.88rem]">
                      <div className="relative w-[8.51rem] h-[8.63rem]">
                        <div className="absolute top-[0rem] left-[0rem] w-[8.51rem] h-[8.63rem]">
                          <div className="absolute top-[0rem] left-[0rem] w-[8.51rem] h-[8.63rem]">
                            <div className="absolute top-[0rem] left-[0rem] rounded-10xs bg-darkslategray w-[8.51rem] h-[8.63rem]" />
                          </div>
                        </div>
                        <img
                            className="absolute top-[0.25rem] left-[0.25rem] rounded-10xs w-[8.01rem] h-[8.12rem] object-cover"
                            alt=""
                            src="/image-221@2x.png"
                        />
                      </div>
                      <div className="relative w-[8.43rem] h-[8.54rem]">
                        <div className="absolute top-[0rem] left-[0rem] w-[8.43rem] h-[8.54rem]">
                          <div className="absolute top-[0rem] left-[0rem] rounded-10xs bg-darkslategray w-[8.43rem] h-[8.54rem]" />
                        </div>
                        <img
                            className="absolute top-[0.25rem] left-[0.25rem] rounded-10xs w-[7.94rem] h-[8.04rem] object-cover"
                            alt=""
                            src="/image-15@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {}
          </div>
          <b className="absolute top-[272.94rem] left-[47.63rem] text-[2.75rem] text-black">
            Thông tin đặt hàng
          </b>
          <img
              className="absolute top-[275.81rem] left-[0rem] w-[75.69rem] h-[63.31rem] object-cover"
              alt=""
              data-aos="fade-right"
              data-aos-offset="-200"
              data-aos-duration="1500"
              src="/123-1@2x.png"
          />
          <div className="absolute top-[280.69rem] left-[67.13rem] rounded-[18px] bg-lightgoldenrodyellow flex flex-col pt-[2.13rem] px-[3.38rem] pb-[3.13rem] items-center justify-start gap-[3rem] text-black border-[1px] border-solid border-black"
               data-aos="fade-left"
               data-aos-offset="-250"
               data-aos-duration="1500"
          >
            <div className="flex flex-col items-start justify-start gap-[2rem]">
              <div className="rounded-lg flex flex-col items-start justify-start gap-[0.13rem]">
                <div className="flex flex-row p-[0.63rem] items-start justify-start">
                  <div className="relative">Họ và tên</div>
                </div>
                <div className="rounded-lg bg-white flex flex-row py-[0.88rem] pr-[16.06rem] pl-[0.88rem] items-start justify-start text-gray-100 border-[1px] border-solid border-chocolate">
                  <div className="relative">Nhập họ và tên của bạn</div>
                </div>
              </div>
              <div className="w-[31.38rem] flex flex-col items-start justify-start gap-[0.13rem]">
                <div className="flex flex-row p-[0.63rem] items-start justify-start">
                  <div className="relative">Email</div>
                </div>
                <div className="rounded-lg bg-white box-border w-[32.75rem] flex flex-col py-[0.25rem] pr-[17.38rem] pl-[0.25rem] items-start justify-start text-gray-100 border-[1px] border-solid border-chocolate">
                  <div className="flex flex-row p-[0.63rem] items-start justify-start">
                    <div className="relative">Nhập email của bạn</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[0.13rem]">
                <div className="flex flex-row p-[0.63rem] items-start justify-start">
                  <div className="relative">Số điện thoại</div>
                </div>
                <div className="rounded-lg bg-white box-border w-[32.81rem] flex flex-col py-[0.25rem] pr-[13.75rem] pl-[0.25rem] items-start justify-start text-gray-100 border-[1px] border-solid border-chocolate">
                  <div className="flex flex-row p-[0.63rem] items-start justify-start">
                    <div className="relative">Nhập số điện thoại của bạn</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-row p-[0.63rem] items-start justify-start">
                    <div className="relative">Địa chỉ</div>
                  </div>
                  <div className="rounded-lg bg-white box-border w-[32.88rem] flex flex-col py-[0.25rem] pr-[13.75rem] pl-[0.25rem] items-start justify-start text-gray-100 border-[1px] border-solid border-chocolate">
                    <div className="flex flex-row p-[0.63rem] items-start justify-start">
                      <div className="relative">Nhập số địa chỉ của bạn</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-col items-start justify-start gap-[0.13rem]">
                  <div className="flex flex-row p-[0.63rem] items-start justify-start">
                    <div className="relative">Ghi chú đơn hàng (tuỳ chọn)</div>
                  </div>
                  <div className="rounded-lg bg-white box-border w-[32.81rem] h-[6.31rem] flex flex-col py-[0.25rem] pr-[13.75rem] pl-[0.25rem] items-start justify-start border-[1px] border-solid border-chocolate">
                    <div />
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[40px] bg-chocolate flex flex-row py-[1rem] pr-[0.5rem] pl-[1.88rem] items-center justify-start gap-[0.63rem] text-cornsilk-100 cursor-pointer">
              <b className="relative inline-block w-[8.5rem] h-[1.5rem] shrink-0">
                ĐĂNG KÍ
              </b>
              <img
                  className="relative w-[0.63rem] h-[1.02rem] hidden"
                  alt=""
                  src="/vector2.svg"
              />
            </div>
          </div>
          <img
              className="absolute top-[344.25rem] left-[0rem] w-[120rem] h-[23.08rem] object-cover"
              alt=""
              src="/group-18@2x.png"
          />
          <div className="absolute top-[348.16rem] left-[7.75rem] flex flex-col items-center justify-start gap-[1.75rem] text-chocolate">
            <div className="flex flex-col items-center justify-start gap-[1.75rem]">
              <img
                  className="relative w-[11.38rem] h-[6.13rem] overflow-hidden shrink-0"
                  alt=""
                  src="/isolation-mode1.svg"
              />
              <b className="relative">XANH ƯỚC MƠ - VÀNG PHÚ HỘ</b>
            </div>
            <img
                className="relative w-[7.53rem] h-[1.88rem]"
                alt=""
                src="/group-12.svg"
            />
          </div>
          <div className="absolute top-[351.04rem] left-[67.13rem] text-[1.63rem] text-justify inline-block w-[33.38rem] h-[8.31rem]">
            <p className="m-0">Số điện thoại: +84 345 678 90</p>
            <p className="m-0">Email:phuhodulam@gmail.com</p>
            <p className="m-0">Địa chỉ: 137 Nguyễn Tất Thành, P. Hoà Minh</p>
            <p className="m-0">Q. Liên Chiểu, TP. Đà Nẵng</p>
          </div>
        </div>
      </div>
  );
};

export default Desktop2;
