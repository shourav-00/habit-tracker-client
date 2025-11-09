import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import habitTracker from "../assets/habit-tracker-app-icon.avif";
import grow from "../assets/grow.jpg";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      {/* Intro text */}
      <div className="text-center mt-10 md:mt-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-3 md:mb-8">
          Boost your day, every day.
        </h1>
        <p className="text-base md:text-lg">
          Stay consistent, stay focused, and watch your habits transform your
          life.
        </p>
      </div>

      {/* Hero slider */}
      <div className="mt-10 md:mt-16">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          //navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full"
        >
          <SwiperSlide>
            <div
              className="hero min-h-[40vh] sm:min-h-[60vh] md:min-h-[90vh] rounded-2xl overflow-hidden"
              style={{
                backgroundImage:
                  "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
              }}
            >
              <div className="hero-overlay"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                  <p className="mb-5">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero min-h-[40vh] sm:min-h-[60vh] md:min-h-[90vh] rounded-2xl overflow-hidden"
              style={{
                backgroundImage:
                  "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
              }}
            >
              <div className="hero-overlay"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                  <p className="mb-5">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero min-h-[40vh] sm:min-h-[60vh] md:min-h-[90vh] rounded-2xl overflow-hidden"
              style={{
                backgroundImage:
                  "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
              }}
            >
              <div className="hero-overlay"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                  <p className="mb-5">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero min-h-[40vh] sm:min-h-[60vh] md:min-h-[90vh] rounded-2xl overflow-hidden"
              style={{
                backgroundImage:
                  "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
              }}
            >
              <div className="hero-overlay"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                  <p className="mb-5">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero min-h-[40vh] sm:min-h-[60vh] md:min-h-[90vh] rounded-2xl overflow-hidden"
              style={{
                backgroundImage:
                  "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
              }}
            >
              <div className="hero-overlay"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                  <p className="mb-5">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* DB Featured Habits Section  */}
      <div className="mt-10 md:mt-[80px]">
        <img
          className="w-18 sm:w-30 ml-[-10px]  md:ml-[-15px]"
          src={habitTracker}
          alt="Tracker-Logo"
        />
        <h2 className="font-bold text-2xl ml-[4px] md:ml-[8px]">
          Organize, Execute, Triumph
        </h2>
        <p className="ml-[4px] md:ml-[8px] mt-4 text-gray-600 hidden sm:block">
          Start your day right with a clear, organized schedule that keeps you
          on track for <br /> success. Here’s an example of how your day with
          Habitify could look:
        </p>
      </div>
      {/* DB Featured Habits Section  */}
      <div>
        <h2 className="font-bold text-center">FROM DB</h2>
      </div>

      <div class="w-full h-64 rounded-t-4xl  bg-gradient-to-r from-[#deeafc] to-[#f4efff] mt-10 rounded-2xl">
        {/* <img className="w-20 rounded-sm" src={grow} alt="" /> */}

        <h2 className="text-center p-5 font-bold">
          Stay Empowered by Your Progress
        </h2>
        <p className="text-center mb-3">
          Scientific studies show that tracking your progress can significantly
          boost your chances of successfully building and maintaining habits.
        </p>
        <p className="text-center ">
          Fuel your journey with insightful metrics, celebrate your milestones,
          and stay motivated on your path to success.
        </p>
      </div>

      {/* Payment Price Explore */}
      <div>
        <div className="w-full rounded-2xl mt-20 flex items-center">
          <span className="border-t-gray-400 border-t-2 flex-1"></span>
          <span className="px-4 text-center whitespace-nowrap">
            Featured Services
          </span>
          <span className="flex-1 border-t-gray-400 border-t-2"></span>
        </div>
        <div className="mt-10 flex justify-between items-center ">
          <div className="flex-1">
            <h2 className="text-[#2EA0B6] font-bold my-3">Special Pricing</h2>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Choose Your Package Service</h2>
            <p>
               Choose the plan that fits your growth. Start with a free plan or level up to Premium for advanced features and full access.
            </p>
            <p></p>
          </div>
          <div className="flex-1">
            <div className="flex justify-center mt-10 px-4">
              {/* Normal Plan Card */}
              <div className="card w-72 bg-gray-100 shadow-sm">
                <div className="card-body">
                  <span className="badge badge-xs badge-secondary">Basic</span>
                  <div className="flex justify-between">
                    <h2 className="text-2xl font-bold">Standard</h2>
                    <span className="text-lg">$9/mo</span>
                  </div>
                  <ul className="mt-4 flex flex-col gap-2 text-xs">
                    <li className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked
                        disabled
                        className="checkbox checkbox-success"
                      />
                      <span>High-resolution image generation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked
                        disabled
                        className="checkbox checkbox-success"
                      />
                      <span>Customizable style templates</span>
                    </li>
                    <li className="flex items-center gap-2 opacity-50">
                      <input
                        type="checkbox"
                        disabled
                        className="checkbox checkbox-success"
                      />
                      <span className="line-through">
                        Batch processing capabilities
                      </span>
                    </li>
                  </ul>
                  <div className="mt-4">
                    <button className="btn btn-secondary btn-block">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex justify-center mt-10 px-4">
              {/* Premium Plan Card */}
              <div className="card w-80 bg-gray-400 shadow-lg">
                <div className="card-body text-white">
                  <span className="badge badge-xs badge-primary">
                    Most Popular
                  </span>
                  <div className="flex justify-between">
                    <h2 className="text-3xl font-bold">Premium</h2>
                    <span className="text-xl">$29/mo</span>
                  </div>
                  <ul className="mt-6 flex flex-col gap-2 text-sm">
                    <li className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked
                        disabled
                        className="checkbox checkbox-success"
                      />
                      <span>High-resolution image generation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked
                        disabled
                        className="checkbox checkbox-success"
                      />
                      <span>Customizable style templates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked
                        disabled
                        className="checkbox checkbox-success"
                      />
                      <span>Batch processing capabilities</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked
                        disabled
                        className="checkbox checkbox-success"
                      />
                      <span>AI-driven image enhancements</span>
                    </li>
                    <li className="flex items-center gap-2 opacity-50">
                      <input
                        type="checkbox"
                        disabled
                        className="checkbox checkbox-success"
                      />
                      <span className="line-through">
                        Seamless cloud integration
                      </span>
                    </li>
                    <li className="flex items-center gap-2 opacity-50">
                      <input
                        type="checkbox"
                        disabled
                        className="checkbox checkbox-success"
                      />
                      <span className="line-through">
                        Real-time collaboration tools
                      </span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <button className="btn btn-primary btn-block">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
