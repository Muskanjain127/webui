const Page5 = () => {
  const imageArray = ["/page51.jpg", "/page52.jpg", "/page53.jpg", "/page54.jpg"];

  return (
    <>
      <div className="relative w-full min-h-screen bg-[#0a0a0a] overflow-hidden flex flex-col text-white md:hidden">

        <div className="relative w-full flex" style={{ height: "42vh" }}>

          <div className="w-1/2 h-full p-2">
            <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-blue-500">
              <img src="/page51.jpg" className="w-full h-full object-cover" alt="Profile 1" />
            </div>
          </div>

          <div className="w-1/2 h-full p-2">
            <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10">
              <img src="/page52.jpg" className="w-full h-full object-cover" alt="Profile 2" />
            </div>
          </div>

          <p className="absolute bottom-3 right-4 text-sm font-medium cursor-pointer hover:underline">
            View all &gt;
          </p>
        </div>

        <div className="relative flex-1 overflow-hidden">
          <div
            className="absolute inset-0 bg-[#3e2310]"
            style={{ clipPath: "polygon(0 0, 100% 20%, 100% 100%, 0% 100%)" }}
          />
          <div className="absolute inset-0 bg-[#111]"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 20%, 0 0)" }} />

          <div className="relative z-10 flex flex-col items-start px-6 pt-8 pb-10">

            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg border border-teal-500/70 bg-black/30 flex items-center justify-center shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4dd9ac" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                </svg>
              </div>
              <h2 className="text-xl font-bold tracking-wide">SHORT MESSAGE</h2>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-10">
              Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit. Facilisis
            </p>

            <h3 className="text-lg font-serif italic text-center w-full mt-4">Thank you ! Visit Again</h3>
          </div>
        </div>
      </div>

      <div className="relative w-full h-screen bg-[#000000] overflow-hidden hidden md:flex flex-col items-center justify-center text-white">

        <div
          className="absolute inset-0 z-0 bg-[#3e2310]"
          style={{ clipPath: "polygon(0% 40%, 100% 0%, 100% 60%, 0% 100%)" }}
        />

        <div className="relative z-10 flex flex-col items-center w-full max-w-4xl px-6">

          <div className="w-full mb-8 md:mb-12 lg:mb-16">
            <div className="flex gap-3 md:gap-4 lg:gap-6 mb-4 justify-center">
              {imageArray.map((url, i) => (
                <div key={i} className="rounded-2xl bg-gray-700 overflow-hidden border border-white/20 transition-transform hover:scale-105
                                        w-32 h-24 md:w-48 md:h-32 lg:w-64 lg:h-40 xl:w-80 xl:h-48">
                  <img src={url} className="w-full h-full object-cover" alt={`Profile ${i + 1}`} />
                </div>
              ))}
              <div className="rounded-2xl bg-gray-800 border border-white/10 flex items-center justify-center text-gray-500 text-xs
                              w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48">
                +
              </div>
            </div>
            <p className="text-right text-sm font-medium cursor-pointer hover:underline mr-10">View all &gt;</p>
          </div>

          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="font-bold mb-4 md:mb-6
                           text-2xl md:text-3xl lg:text-4xl">SHORT MESSAGE</h2>
            <p className="text-gray-300 max-w-md mx-auto leading-relaxed
                          text-sm md:text-base lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit. Facilisis
            </p>
          </div>

          <div className="text-center">
            <h3 className="font-serif italic
                           text-xl md:text-2xl lg:text-3xl">Thank you ! Visit Again</h3>
          </div>

        </div>
      </div>
    </>
  );
};

export default Page5;
