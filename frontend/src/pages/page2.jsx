const Page2 = () => {
  return (
    <>
      <div className="relative w-full bg-black overflow-hidden flex flex-col md:hidden">

        <div className="relative w-full bg-[#000000] flex items-center justify-center" style={{ height: "55vh" }}>

          <div className="relative flex flex-col w-1/2 h-full gap-1 p-1">

          <div className="relative flex gap-4 items-end
                          w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] xl:w-[340px]
                          h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] xl:h-[440px]
                          shrink-0">

            <img
              src="/page22.jpg"
              className="absolute object-cover rounded-lg border border-white/20
                         w-[90px] h-[110px]
                         sm:w-[100px] sm:h-[130px]
                         md:w-[120px] md:h-[150px]
                         lg:w-[130px] lg:h-[170px]
                         xl:w-[152px] xl:h-[200px]
                         left-[40%]
                         top-[7%] xl:top-[10px]"
              alt="Jenny"
            />

            <img
              src="/page21.jpg"
              className="absolute object-cover rounded-lg border border-white/20
                         w-[90px] h-[140px]
                         sm:w-[100px] sm:h-[130px]
                         md:w-[115px] md:h-[150px]
                         lg:w-[125px] lg:h-[170px]
                         xl:w-[152px] xl:h-[240px]
                         left-0
                         top-[48%] xl:top-[240px]"
              alt="Jenny"
            />

            <img
              src="/page23.jpg"
              className="object-cover rounded-lg border border-white/20
                         ml-[18%] mt-[10%]
                         w-[100px] h-[200px]
                         sm:w-[120px] sm:h-[220px]
                         md:w-[140px] md:h-[280px]
                         lg:w-[160px] lg:h-[320px]
                         xl:w-[192px] xl:h-[344px]"
              alt="Jenny"
            />
          </div>
          </div>
        </div>

        <div className="relative w-full overflow-hidden" style={{ minHeight: "45vh" }}>

          <div
            className="absolute inset-0 bg-[#3e2310]"
            style={{ clipPath: "polygon(0 0, 55% 0, 100% 100%, 0% 100%)" }}
          />
          <div className="absolute inset-0 bg-[#000000]" style={{ clipPath: "polygon(55% 0, 100% 0, 100% 100%)" }} />

          <div className="relative z-10 px-5 pt-6 pb-8">
            <h1 className="text-[60px] font-bold text-white leading-none mb-4">
              MY<br />INTRO
            </h1>

            <div className="absolute top-6 right-5 w-8 h-8 rounded-lg border border-teal-500/70 bg-black/20 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4dd9ac" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
              </svg>
            </div>

            <p className="text-gray-300 text-[12px] leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, tincidunt sed purus phasellus condimentum sed
              diam sem. Maecenas fermentum ac aliquet felis. Su sagittis, purus auctor curabitur. Pellentesque in quis
              rhoncus vel sed netus ipsum. Consectetur curabitur ante.
            </p>

            <div className="flex gap-16">
              <button className="text-white text-xl font-medium pb-1">About Me</button>
              <button className="text-white text-xl font-medium pb-1">Hire Me</button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-screen bg-[#000000] overflow-hidden hidden md:flex items-center justify-center p-4">

        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-[#3e2310]"
            style={{ clipPath: "polygon(0 0, 35% 0, 90% 100%, 43% 100%)" }}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex items-center justify-between
                        px-4 sm:px-6 md:px-8 lg:px-10">

          <div className="relative flex gap-4 items-end
                          w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] xl:w-[340px]
                          h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] xl:h-[440px]
                          shrink-0">

            <img
              src="/page22.jpg"
              className="absolute object-cover rounded-lg border border-white/20
                         w-[90px] h-[110px] sm:w-[100px] sm:h-[130px] md:w-[120px] md:h-[150px] lg:w-[130px] lg:h-[170px] xl:w-[152px] xl:h-[200px]
                         left-[40%] top-[2%] xl:top-[10px]"
              alt="Jenny"
            />

            <img
              src="/page21.jpg"
              className="absolute object-cover rounded-lg border border-white/20
                         w-[90px] h-[110px] sm:w-[100px] sm:h-[130px] md:w-[115px] md:h-[150px] lg:w-[125px] lg:h-[170px] xl:w-[152px] xl:h-[240px]
                         left-0 top-[48%] xl:top-[240px]"
              alt="Jenny"
            />

            <img
              src="/page23.jpg"
              className="object-cover rounded-lg border border-white/20
                         ml-[18%] mt-[10%]
                         w-[100px] h-[200px] sm:w-[120px] sm:h-[240px] md:w-[140px] md:h-[280px] lg:w-[160px] lg:h-[320px] xl:w-[192px] xl:h-[344px]"
              alt="Jenny"
            />
          </div>

          {/* Right Side: Text */}
          <div className="text-white w-1/2 mt-4 md:mt-8 lg:mt-12 xl:mt-19">
            <h1 className="font-bold mb-3 md:mb-4 lg:mb-6
                           text-[36px] sm:text-[48px] md:text-[56px] lg:text-[72px] xl:text-[96px]
                           leading-tight">
              MY <br /> INTRO
            </h1>

            <p className="text-gray-300 max-w-md mb-4 md:mb-6 lg:mb-8 xl:mb-10
                          text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, tincidunt sed purus phasellus condimentum sed
              diam sem. Maecenas fermentum ac aliquet felis. Eu sagittis, purus auctor curabitur. Pellentesque in quis
              rhoncus vel sed netus ipsum. Consectetur curabitur ante.
            </p>

            <div className="flex gap-6 sm:gap-10 md:gap-14 lg:gap-20 xl:gap-30">
              <button className="pb-1 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">About Me</button>
              <button className="pb-1 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Hire Me</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page2;
