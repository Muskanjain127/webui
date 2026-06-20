import React from 'react';
import Page2 from "./page2"
import Page3 from "./page3"
import Page4 from "./page4"
import Page5 from "./page5"
import Page6 from "./page6"

const Home = () => {
  return (
    <>

      <div className="relative w-full h-screen bg-[#000000] overflow-hidden md:hidden">

        <img
          src="/page1.png"
          alt="Jenny"
          className="absolute inset-0 w-full h-full object-cover md:object-contain object-top z-0"
        />

        <div className="absolute inset-0 bg-black/30 z-[1]" />

        <div
          className="absolute bottom-0 left-0 z-[2]"
          style={{ clipPath: "polygon(0 0, 60% 0, 0% 100%)", width: "180px", height: "180px", background: "#3e2310" }}
        />

        <h1 className="absolute z-10 top-6 left-5 text-[52px] font-semibold text-white leading-[0.9] tracking-widest">
          J.E.N<br />N.Y
        </h1>

        <div className="absolute top-6 right-5 z-10 w-10 h-10 rounded-xl border border-teal-500/60 bg-black/30 flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4dd9ac" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
            <polyline points="16 6 12 2 8 6"/>
            <line x1="12" y1="2" x2="12" y2="15"/>
          </svg>
        </div>

        <div className="absolute top-6 right-16 z-10 opacity-60">
          <div className="grid grid-cols-4 gap-[5px]">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="w-[3px] h-[3px] bg-white rounded-full opacity-70" />
            ))}
          </div>
        </div>

        <div className="absolute left-3 top-1/2 -translate-y-1/2 z-10">
          <div className="grid grid-cols-2 gap-[6px]">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="w-[4px] h-[4px] bg-white rounded-full opacity-50" />
            ))}
          </div>
        </div>

        <div className="absolute bottom-14 left-5 z-10">
          <p className="text-5xl font-bold text-white leading-none">15K</p>
          <p className="text-gray-300 uppercase tracking-[0.2em] text-[10px] mt-1">Followers</p>
        </div>

        <div className="absolute bottom-5 left-5 z-10 w-10 h-10 bg-gray-900 border border-yellow-600 flex items-center justify-center rotate-45">
          <span className="text-yellow-600 font-bold -rotate-45 text-[10px]">4.5</span>
        </div>

        <div
          className="absolute z-[3] bottom-24 left-20"
          style={{
            width: "120px", height: "2px",
            background: "linear-gradient(to right, #c97520, transparent)",
            transform: "rotate(-30deg)",
          }}
        />
      </div>

      <div className="relative w-full h-screen bg-[#000000] overflow-hidden hidden md:flex items-center justify-center p-4">

        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-[#3e2310]"
            style={{ clipPath: "polygon(0 0, 85% 0, 25% 100%, 0% 100%)" }}
          />
        </div>

        <div className="relative z-10 w-full max-w-5xl flex items-center justify-between">

          <h1 className="absolute z-50
                         text-[80px] md:text-[90px] lg:text-[120px]
                         left-[24px] md:left-[30px] lg:left-[49px]
                         top-[14px] md:top-[16px] lg:top-[22px]
                         font-semibold text-white leading-[0.9] tracking-widest">
            J.E.N.<br />N.Y
          </h1>

          <div className="absolute
                          bottom-14 md:bottom-10 lg:bottom-20
                          left-4 md:left-8 lg:left-20
                          text-white">
            <div className="grid grid-cols-4 gap-5">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-white rounded-full" />
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <div className="absolute
                            w-10 h-10 md:w-10 md:h-10 lg:w-12 lg:h-12
                            -bottom-4 md:-bottom-3 lg:-bottom-5
                            left-1
                            bg-gray-900 border border-yellow-600 flex items-center justify-center rotate-45">
              <span className="text-yellow-600 font-bold -rotate-45 text-xs lg:text-sm">4.5</span>
            </div>
            <div className="absolute
                            -bottom-6 md:-bottom-5 lg:-bottom-8
                            left-12 md:left-12 lg:left-13">
              <p className="text-4xl md:text-4xl lg:text-6xl font-bold text-white">15K</p>
              <p className="text-gray-400 uppercase tracking-[0.2em] text-xs lg:text-sm">Followers</p>
            </div>
          </div>

          <div className="relative
                          w-[200px] h-[300px] md:w-[240px] md:h-[380px] lg:w-[350px] lg:h-[500px]
                          border-l-4 border-t-4 border-gray-800 rounded-lg overflow-hidden shadow-2xl">
            <img
              src="/page1.png"
              alt="Jenny"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mt-20 md:mt-40 lg:mt-90
                          w-[200px] md:w-[220px] lg:w-[300px]
                          bg-black/40 backdrop-blur-3xl
                          p-4 md:p-5 lg:p-8
                          border border-white/10 rounded-xl text-white z-50">
            <h2 className="flex justify-center text-xl md:text-xl lg:text-3xl font-[Poppins]">I'm Jenny</h2>
            <p className="text-gray-400 flex justify-center items-center mb-5 md:mb-5 lg:mb-8 text-sm">@jennywill</p>
            <div className="flex gap-3 lg:gap-4">
              <button className="flex-1 text-white py-2 lg:py-2.5 rounded-md font-bold hover:bg-gray-200 hover:text-black transition text-xs md:text-sm">
                Message
              </button>
              <button className="flex-1 py-2 lg:py-2.5 rounded-md hover:bg-white hover:text-black transition text-xs md:text-sm">
                Follow
              </button>
            </div>
          </div>

        </div>

        <div className="absolute top-6 md:top-8 lg:top-10 right-6 md:right-8 lg:right-10 opacity-30">
          <div className="grid grid-cols-5 gap-3">
            {[...Array(45)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-white rounded-full" />
            ))}
          </div>
        </div>

      </div>

      <Page2/>
      <Page3/>
      <h1 className="text-white flex justify-center text-4xl bg-black font-bold">MY GALLERY</h1>
      <Page4/>
      <Page5/>
      <Page6/>
    </>
  );
};

export default Home;
