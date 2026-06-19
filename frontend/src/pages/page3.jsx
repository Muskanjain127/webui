const Page3 = () => {
  const ShareIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4dd9ac" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
      <polyline points="16 6 12 2 8 6"/>
      <line x1="12" y1="2" x2="12" y2="15"/>
    </svg>
  );

  return (
    <>
      <div className="relative w-full h-screen bg-[#000000] overflow-hidden flex flex-col items-center justify-center md:hidden">

        <div
          className="absolute inset-0 z-0 bg-[#3e2310]"
          style={{ clipPath: "polygon(0% 40%, 100% 0%, 100% 60%, 0% 100%)" }}
        />

        <div className="relative z-10 flex items-center justify-center gap-2 px-3">

          <div className="relative flex flex-col items-center mt-8">
            <img
              src="/page32.jpg"
              className="w-[95px] h-[170px] object-cover rounded-sm"
              alt="Left"
            />
            <div className="mt-2 w-7 h-7 rounded-lg border border-teal-500/80 bg-black/40 flex items-center justify-center">
              <ShareIcon />
            </div>
          </div>

          <div className="relative flex flex-col items-center -mt-6">
            <img
              src="/page31.jpg"
              className="w-[120px] h-[220px] object-cover rounded-sm"
              alt="Center"
            />
            <div className="mt-2 w-7 h-7 rounded-lg border border-teal-500/80 bg-black/40 flex items-center justify-center">
              <ShareIcon />
            </div>
          </div>

          <div className="relative flex flex-col items-center mt-8">
            <img
              src="/page33.jpg"
              className="w-[95px] h-[170px] object-cover rounded-sm"
              alt="Right"
            />
            <div className="mt-2 w-7 h-7 rounded-lg border border-teal-500/80 bg-black/40 flex items-center justify-center">
              <ShareIcon />
            </div>
          </div>
        </div>

        <div className="relative z-10 flex items-center gap-2 mt-6">
          <div className="w-3 h-3 rounded-full bg-transparent border border-white/60" />
          <div className="w-3 h-3 rounded-full bg-white border border-white" />
          <div className="w-3 h-3 rounded-full bg-gray-500 border border-gray-500" />
        </div>
      </div>

      <div className="relative w-full h-screen bg-[#000000] overflow-hidden hidden md:flex items-center justify-center">

        <div
          className="absolute inset-0 z-0 bg-[#3e2310]"
          style={{ clipPath: "polygon(0% 40%, 100% 0%, 100% 60%, 0% 100%)" }}
        />

        <div className="relative z-10 flex items-center">

        
          <div className="absolute group
                          -left-16 md:-left-20 lg:-left-30">
            <img
              src="/page32.jpg"
              className="object-cover border-2 border-transparent
                         w-[140px] h-[210px] md:w-[170px] md:h-[255px] lg:w-[200px] lg:h-[300px]"
              alt="Left"
            />
            <div className="absolute bottom-2 right-2 border border-teal-500 p-1 rounded" />
          </div>

          <div className="relative group p-1">
            <img
              src="/page31.jpg"
              className="z-50 object-cover
                         w-[175px] h-[280px] md:w-[210px] md:h-[336px] lg:w-[250px] lg:h-[400px]"
              alt="Center"
            />
          </div>

          <div>
            <img
              src="/page33.jpg"
              className="object-cover
                         w-[140px] h-[210px] md:w-[170px] md:h-[255px] lg:w-[200px] lg:h-[300px]"
              alt="Right"
            />
          </div>

        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2">
          <div className="w-3 h-3 bg-gray-500 border border-white rounded-full" />
          <div className="w-3 h-3 border border-white bg-white rounded-full" />
          <div className="w-3 h-3 border border-gray-500 bg-white rounded-full" />
        </div>

      </div>
    </>
  );
};

export default Page3;
