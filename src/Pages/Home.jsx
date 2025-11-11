import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import habitTracker from "../assets/habit-tracker-app-icon.avif";

import slider4 from "../assets/S-4.avif";
import slider1 from "../assets/S-1.avif";
import sliderL from "../assets/S-L.avif";
import sliderR from "../assets/S_R.avif";
import sliderS from "../assets/S-S.avif";

import fawesome from '../assets/bullseye-solid-full.svg'
import fawesome2 from '../assets/lightbulb-solid-full.svg'
import fawesome3 from '../assets/comment-dots-regular-full.svg'
import fawesome4 from '../assets/seedling-solid-full.svg'


const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="text-center mt-10 sm:mt-[120px]">
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
                backgroundImage: `url(${slider1})`,
              }}
            >
              <div className="hero-overlay"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">
                    {" "}
                    See What’s Holding You Back.
                  </h1>

                  <p className="mb-5">
                    Discover the distractions stopping your progress and take
                    the first step.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero min-h-[40vh] sm:min-h-[60vh] md:min-h-[90vh] rounded-2xl overflow-hidden"
              style={{
                backgroundImage: `url(${sliderR})`,
              }}
            >
              <div className="hero-overlay"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">
                    Find Your True Challeng
                  </h1>
                  <p className="mb-5">
                    Understand your habits and pinpoint what needs to change in
                    your life.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero min-h-[40vh] sm:min-h-[60vh] md:min-h-[90vh] rounded-2xl overflow-hidden"
              style={{
                backgroundImage: `url(${slider4})`,
              }}
            >
              <div className="hero-overlay"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">
                    Learn & Strategize
                  </h1>
                  <p className="mb-5">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero min-h-[40vh] sm:min-h-[60vh] md:min-h-[90vh] rounded-2xl overflow-hidden"
              style={{
                backgroundImage: `url(${sliderS})`,
              }}
            >
              <div className="hero-overlay"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">Face It Head-On</h1>
                  <p className="mb-5">
                    Encounter challenges, push through obstacles, and build
                    resilience.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero min-h-[40vh] sm:min-h-[60vh] md:min-h-[90vh] rounded-2xl overflow-hidden"
              style={{
                backgroundImage: `url(${sliderL})`,
              }}
            >
              <div className="hero-overlay"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">
                    Celebrate Your Progress
                  </h1>
                  <p className="mb-5">
                    See the results of your efforts and enjoy the success you’ve
                    earned
                  </p>
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

      {/* Services Shortly Explain */}
      <div>
        <div className="w-full rounded-2xl mt-20 flex items-center">
          <span className="border-t-gray-400 border-t-2 flex-1"></span>
          <span className="px-4 text-center whitespace-nowrap">
            Explore Services
          </span>
          <span className="flex-1 border-t-gray-400 border-t-2"></span>
        </div>
        <div className="text-center my-10">
         
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Pick the Plan That Boosts Your Progress
          </h2>
          <p>
            Start with the Basic plan to track and improve your habits, or upgrade to Premium for personalized guidance, advanced tracking, and full access to expert features.
        
          </p>
        </div>

        <div className="bg-[#03045e] mt-10">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-white px-5 sm:px-8 md:px-12 py-5 sm:py-8 md:py-12 ">
            <div className="col-span-1">
              <div className="flex justify-center items-center border-b-2 my-5 border-b-gray-300">
         
             <img className="w-20 invert pb-5" src={fawesome} alt="" />
          
              </div>
                
                <h2 className="text-center my-2 text-lg">Time & Goal Management</h2>
                <p  className="text-center my-2 text-sm">Organize your daily routines and set priorities to fix time management issues effectively.”.</p>
            </div>
            <div className="col-span-1">
                 <div className="flex justify-center items-center border-b-2 my-5 border-b-gray-300">
                  <img className="pb-5 invert w-20" src={fawesome2} alt="gfrgtger" />
              </div>
                <h2 className="text-center my-2 text-lg">Expert Guidance”</h2>
                <p  className="text-center my-2 text-sm">Access advice and support from specialists to overcome obstacles and achieve goals faster.</p>
            </div>
            <div className="col-span-1">
              <div className="flex justify-center items-center border-b-2 my-5 border-b-gray-300">
                  <img className="pb-5 invert w-20" src={fawesome3} alt="gfrgtger" />
              </div>
                
                <h2 className="text-center my-2 text-lg">Moderator Support & Updates</h2>
                <p className="text-center my-2 text-sm">“Our moderators monitor progress, provide feedback, and help users stay on track consistently.</p>
            </div>
            <div className="col-span-1 mb-5">
              <div className="flex justify-center items-center border-b-2 my-5 border-b-gray-300">
                  <img className="pb-5 invert w-20" src={fawesome4} alt="gfrgtger" />
              </div>
                <h2 className="text-center my-2 text-lg">Personalized Problem Tracking</h2>
                <p className="text-center my-2 text-sm">Users can log their challenges and track progress, taking control of their own growth journey.</p>
            </div>
            

          </div>

        </div>
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

        <div className="text-center my-10">
         
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Choose Your Package Service
          </h2>
          <p>
            Choose the plan that fits your growth. Start with a free plan or
            level up to Premium for advanced features and full access.
          </p>
        </div>
        <div className="mt-10 px-4 flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-gradient-to-r from-teal-400 to-teal-600 rounded-2xl shadow-sm p-6 flex flex-col text-white font-semibold">
            <span className="badge badge-xs bg-teal-600 border-teal-600 z-50 text-white mb-3">Basic</span>
            <h2 className="text-2xl font-bold mb-2">Standard</h2>
            <span className="text-lg mb-4">$9/mo</span>
            <ul className="flex flex-col gap-2 text-xs mb-4">
              <li className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="checkbox checkbox-success"
                />
                <span>Track up to 5 habits</span>
              </li>

              <li className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="checkbox checkbox-success"
                />
                <span>Limited number of daily requests</span>
              </li>
              <li className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="checkbox checkbox-success"
                />
                <span>Simple streak visualization</span>
              </li>
            </ul>
            <button className="btn btn-primary btn-block">Subscribe</button>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-2xl shadow-lg p-6 flex flex-col">
            <span className="badge badge-xs badge-primary mb-3">Premium</span>
            <h2 className="text-2xl font-bold mb-2">Pro</h2>
            <span className="text-lg mb-4">$29/mo</span>
            <ul className="flex flex-col gap-2 text-xs mb-4">
              <li className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="checkbox checkbox-success"
                />
                <span>Track unlimited habits</span>
              </li>
              <li className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="checkbox checkbox-success"
                />
                <span>Customizable habit categories</span>
              </li>
              <li className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="checkbox checkbox-success"
                />
                <span>Cloud backup & sync between devices</span>
              </li>
            </ul>
            <button className="btn btn-primary btn-block">Subscribe</button>
          </div>

          {/* Card 3 */}
          <div className="bg-pink-400 text-white rounded-2xl shadow-lg p-6 flex flex-col">
            <span className="badge badge-xs badge-secondary mb-3">
              Advanced
            </span>
            <h2 className="text-2xl font-bold mb-2">Enterprise</h2>
            <span className="text-lg mb-4">$49/mo</span>
            <ul className="flex flex-col gap-2 text-xs mb-4">
              <li className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="checkbox checkbox-success"
                />
                <span>Everything in Standard,plus</span>
              </li>
              <li className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="checkbox checkbox-success"
                />
                <span>Priority support & early access to new features</span>
              </li>
              <li className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="checkbox checkbox-success"
                />
                <span>Team or family habit tracking</span>
              </li>
            </ul>
            <button className="btn btn-primary btn-block">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
