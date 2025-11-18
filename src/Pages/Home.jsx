import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Typewriter } from 'react-simple-typewriter';
import habitTracker from "../assets/habit-tracker-app-icon.avif";
import images from "../assets/a.png";

import slider4 from "../assets/S-4.avif";
import slider1 from "../assets/S-1.avif";
import sliderL from "../assets/S-L.avif";
import sliderR from "../assets/S_R.avif";
import sliderS from "../assets/S-S.avif";
import Gif from "../assets/codework.gif";

import fawesome from "../assets/bullseye-solid-full.svg";
import fawesome2 from "../assets/lightbulb-solid-full.svg";
import fawesome3 from "../assets/comment-dots-regular-full.svg";
import fawesome4 from "../assets/seedling-solid-full.svg";
import LatestHabit from "../Components/LatestHabit";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate=useNavigate()

  const handlePublicHabit=()=>{
      navigate('/publicHabits')
  }
  const handleStJourney=()=>{
      navigate('/login')
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center mt-10 sm:mt-[120px]">
          <h1 className="text-4xl md:text-6xl font-bold mb-3 md:mb-8">
            <Typewriter
              words={['Boost your day, every day.']}
              loop={1}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
            />
          </h1>
          <p className="text-base md:text-lg">
            <Typewriter
              words={['Stay consistent, stay focused, and watch your habits transform your life.']}
              loop={1}
              cursor
              cursorStyle='_'
              typeSpeed={50}
              deleteSpeed={30}
            />
          </p>
        </div>
      </motion.div>

      <div></div>

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
                    <Typewriter
                      words={["See What's Holding You Back."]}
                      loop={1}
                      cursor
                      cursorStyle='_'
                      typeSpeed={70}
                      deleteSpeed={50}
                    />
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
                    <Typewriter
                      words={["Find Your True Challenge"]}
                      loop={1}
                      cursor
                      cursorStyle='_'
                      typeSpeed={70}
                      deleteSpeed={50}
                    />
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
                    <Typewriter
                      words={["Learn & Strategize"]}
                      loop={1}
                      cursor
                      cursorStyle='_'
                      typeSpeed={70}
                      deleteSpeed={50}
                    />
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
                  <h1 className="mb-5 text-5xl font-bold">
                    <Typewriter
                      words={["Face It Head-On"]}
                      loop={1}
                      cursor
                      cursorStyle='_'
                      typeSpeed={70}
                      deleteSpeed={50}
                    />
                  </h1>
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
                    <Typewriter
                      words={["Celebrate Your Progress"]}
                      loop={1}
                      cursor
                      cursorStyle='_'
                      typeSpeed={70}
                      deleteSpeed={50}
                    />
                  </h1>

                  <p className="mb-5">
                    See the results of your efforts and enjoy the success you've
                    earned
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="w-full rounded-2xl mt-20 flex items-center">
            <span className="border-t-gray-400 border-t-2 flex-1"></span>

            <span className="px-4 text-center text-2xl sm:text-3xl md:text-5xl whitespace-nowrap">
              <Typewriter
                words={['Why']}
                loop={1}
                cursor
                cursorStyle='_'
                typeSpeed={100}
                deleteSpeed={70}
              />
            </span>

            <span className="flex-1 border-t-gray-400 border-t-2"></span>
          </div>
       
            <h2 className="text-center my-5 text-3xl sm:text-5xl md:text-7xl whitespace-nowrap ">
              <Typewriter
                words={['build habits ?']}
                loop={1}
                cursor
                cursorStyle='_'
                typeSpeed={80}
                deleteSpeed={50}
              />
            </h2>
            <p className="text-center text-gray-600 mb-10 text-base sm:text-lg">
              Consistent habits lead to better focus, reduced stress, and
              personal growth. Start small, track your progress, and see
              meaningful results over time.
            </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 hover:bg-gray-400 cursor-pointer p-6 flex flex-col items-center text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                <img
                  src="https://img.icons8.com/color/96/000000/brain.png"
                  alt="Better Focus"
                  className="w-10 h-10"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                <Typewriter
                  words={['Better Focus']}
                  loop={1}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                />
              </h3>
              <p className="text-gray-600 text-sm">
                Developing habits improves concentration and mental clarity.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 hover:bg-gray-400 cursor-pointer p-6 flex flex-col items-center text-center">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                <img
                  src="https://img.icons8.com/color/96/000000/happy.png"
                  alt="Reduced Stress"
                  className="w-10 h-10"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                <Typewriter
                  words={['Reduced Stress']}
                  loop={1}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                />
              </h3>
              <p className="text-gray-600 text-sm">
                Consistent habits help manage stress and improve mental
                well-being.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 hover:bg-gray-400 cursor-pointer p-6 flex flex-col items-center text-center">
              <div className="bg-yellow-100 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                <img
                  src="https://img.icons8.com/color/96/000000/clock.png"
                  alt="Time Management"
                  className="w-10 h-10"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                <Typewriter
                  words={['Time Management']}
                  loop={1}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                />
              </h3>
              <p className="text-gray-600 text-sm">
                Build routines that make your day more productive and organized.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 hover:bg-gray-400 cursor-pointer p-6 flex flex-col items-center text-center">
              <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                <img
                  src={images}
                  alt="Personal Growth"
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                <Typewriter
                  words={['Personal Growth']}
                  loop={1}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                />
              </h3>
              <p className="text-gray-600 text-sm">
                Small daily habits help you grow and achieve long-term goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="my-10">
        <div className="w-full rounded-2xl mt-20 flex items-center">
          <span className="border-t-gray-400 border-t-2 flex-1"></span>
          <h2 className="mx-4 text-center whitespace-nowrap">
            <Typewriter
              words={['Explore Services']}
              loop={1}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
            />
          </h2>
          <span className="flex-1 border-t-gray-400 border-t-2"></span>
        </div>

        <h2 className="text-3xl font-bold text-center mt-10 text-gray-900">
          <Typewriter
            words={["Explore the Community's Progress"]}
            loop={1}
            cursor
            cursorStyle='_'
            typeSpeed={60}
            deleteSpeed={40}
          />
        </h2>

        <p className="text-center text-gray-600 my-5 text-base sm:text-lg">
          Get inspired by the latest habits and achievements from our community.
        </p>

        <div className="flex items-center justify-center">
          <img src={Gif} alt="" />
        </div>

        <LatestHabit></LatestHabit>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="relative bg-gradient-to-r from-[#deeafc] to-[#f4efff] rounded-3xl sm:rounded-4xl p-6 sm:p-8 lg:p-12 shadow-2xl shadow-blue-100/50 overflow-hidden">

          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-200/30 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-200/40 rounded-full translate-x-1/3 translate-y-1/3"></div>

          <div className="relative z-10 text-center max-w-4xl mx-auto">
     
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/80 rounded-2xl flex items-center justify-center shadow-lg">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
              <Typewriter
                words={['Why Daily Habits Need Digital Tracking']}
                loop={1}
                cursor
                cursorStyle='_'
                typeSpeed={50}
                deleteSpeed={30}
              />
            </h2>

            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 text-left mb-6 sm:mb-8">
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  For Your Personal Growth
                </h3>
                <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>
                      <strong>Build Consistency:</strong> Visual progress keeps
                      you accountable every day
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>
                      <strong>Beat Forgetfulness:</strong> Never miss a day with
                      digital reminders
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>
                      <strong>Stay Motivated:</strong> Watch your streak grow
                      and celebrate small wins
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>
                      <strong>Data-Driven Insights:</strong> Understand your
                      patterns and optimize routines
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  For Business Success
                </h3>
                <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>
                      <strong>User Engagement:</strong> Daily interactions build
                      loyal customers
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>
                      <strong>Valuable Data:</strong> Understand user behavior
                      and preferences
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>
                      <strong>Competitive Edge:</strong> Offer tools that
                      genuinely help users succeed
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>
                      <strong>Long-term Value:</strong> Habit-forming products
                      create lasting relationships
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white/60 rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
              <p className="text-gray-700 text-sm sm:text-base italic text-center">
                🎯 <strong>Scientific Fact:</strong> Studies show that people
                who track their progress are
                <span className="text-blue-600 font-semibold">
                  {" "}
                  42% more likely
                </span>{" "}
                to achieve their goals. Digital tracking makes this effortless
                and engaging.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button onClick={handleStJourney}  className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Your Habit Journey
              </button>
              <button onClick={handlePublicHabit} className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-6 sm:px-8 py-3 rounded-xl font-semibold transition-all duration-300">
                See How It Works
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="w-full rounded-2xl mt-20 flex items-center">
          <span className="border-t-gray-400 border-t-2 flex-1"></span>
          <span className="px-4 text-center whitespace-nowrap">
            <Typewriter
              words={['Explore Services']}
              loop={1}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
            />
          </span>
          <span className="flex-1 border-t-gray-400 border-t-2"></span>
        </div>
        <div className="text-center my-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            <Typewriter
              words={['Pick the Plan That Boosts Your Progress']}
              loop={1}
              cursor
              cursorStyle='_'
              typeSpeed={60}
              deleteSpeed={40}
            />
          </h2>
          <p>
            Start with the Basic plan to track and improve your habits, or
            upgrade to Premium for personalized guidance, advanced tracking, and
            full access to expert features.
          </p>
        </div>

        <div className="bg-[#03045e] mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-white px-5 sm:px-8 md:px-12 py-5 sm:py-8 md:py-12 ">
            <div className="col-span-1">
              <div className="flex justify-center items-center border-b-2 my-5 border-b-gray-300">
                <img className="w-20 invert pb-5" src={fawesome} alt="" />
              </div>

              <h2 className="text-center my-2 text-lg">
                <Typewriter
                  words={['Time & Goal Management']}
                  loop={1}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                />
              </h2>
              <p className="text-center my-2 text-sm">
                Organize your daily routines and set priorities to fix time
                management issues effectively.
              </p>
            </div>
            <div className="col-span-1">
              <div className="flex justify-center items-center border-b-2 my-5 border-b-gray-300">
                <img
                  className="pb-5 invert w-20"
                  src={fawesome2}
                  alt="gfrgtger"
                />
              </div>
              <h2 className="text-center my-2 text-lg">
                <Typewriter
                  words={['Expert Guidance']}
                  loop={1}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                />
              </h2>
              <p className="text-center my-2 text-sm">
                Access advice and support from specialists to overcome obstacles
                and achieve goals faster.
              </p>
            </div>
            <div className="col-span-1">
              <div className="flex justify-center items-center border-b-2 my-5 border-b-gray-300">
                <img
                  className="pb-5 invert w-20"
                  src={fawesome3}
                  alt="gfrgtger"
                />
              </div>

              <h2 className="text-center my-2 text-lg">
                <Typewriter
                  words={['Moderator Support & Updates']}
                  loop={1}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                />
              </h2>
              <p className="text-center my-2 text-sm">
                Our moderators monitor progress, provide feedback, and help
                users stay on track consistently.
              </p>
            </div>
            <div className="col-span-1 mb-5">
              <div className="flex justify-center items-center border-b-2 my-5 border-b-gray-300">
                <img
                  className="pb-5 invert w-20"
                  src={fawesome4}
                  alt="gfrgtger"
                />
              </div>
              <h2 className="text-center my-2 text-lg">
                <Typewriter
                  words={['Personalized Problem Tracking']}
                  loop={1}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                />
              </h2>
              <p className="text-center my-2 text-sm">
                Users can log their challenges and track progress, taking
                control of their own growth journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-15">
        <div className="w-full rounded-2xl mt-20 flex items-center">
          <span className="border-t-gray-400 border-t-2 flex-1"></span>
          <span className="px-4 text-center whitespace-nowrap">
            <Typewriter
              words={['Featured Services']}
              loop={1}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
            />
          </span>
          <span className="flex-1 border-t-gray-400 border-t-2"></span>
        </div>

        <div className="text-center my-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            <Typewriter
              words={['Choose Your Package Service']}
              loop={1}
              cursor
              cursorStyle='_'
              typeSpeed={60}
              deleteSpeed={40}
            />
          </h2>
          <p>
            Choose the plan that fits your growth. Start with a free plan or
            level up to Premium for advanced features and full access.
          </p>
        </div>
        <div className="mt-10 px-4 flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-gradient-to-r from-teal-400 to-teal-600 rounded-2xl shadow-sm p-6 flex flex-col text-white font-semibold">
            <span className="badge badge-xs bg-teal-600 border-teal-600 z-50 text-white mb-3">
              Basic
            </span>
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

      <div className="flex items-center justify-center">
        <img className="h-40 w-40" src={Gif} alt="" />
      </div>
    </div>
  );
};

export default Home;