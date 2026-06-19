const Page4 = () => {
  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center
                    p-3 sm:p-4 md:p-5 lg:p-6">

      <div className="relative bg-black rounded-3xl overflow-hidden shadow-2xl
                      w-[280px] h-[420px]
                      sm:w-[340px] sm:h-[500px]
                      md:w-[420px] md:h-[580px]
                      lg:w-[520px] lg:h-[680px]
                      xl:w-[600px] xl:h-[760px]">

        <img
          src="/page41.jpg"
          className="absolute inset-0 w-full h-full object-cover object-top"
          alt="Post"
        />

        <div className="absolute top-3 left-3 z-10 flex items-center gap-2 backdrop-blur-md rounded-full pr-3
                        sm:top-4 sm:left-4 sm:gap-3 sm:pr-4">
          <img
            src="/page42.jpg"
            className="rounded-full object-cover border border-white/20
                       w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12"
            alt="Profile"
          />
          <div className="text-white">
            <p className="font-bold text-[10px] sm:text-xs md:text-sm">Cameron Williamson</p>
            <p className="text-gray-200 text-[8px] sm:text-[10px] md:text-[11px]">@cameronwilliamson</p>
          </div>
        </div>

        <div className="absolute bottom-0 w-full z-10 bg-gray-800/30 text-white
                        p-3 sm:p-4 md:p-5 lg:p-6">
          <div className="flex justify-between items-end">
            <p className="opacity-80 w-1/2
                          text-[9px] sm:text-[10px] md:text-xs lg:text-sm">
              Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.
            </p>
            <div className="flex items-center font-bold
                            gap-3 sm:gap-4 md:gap-5 lg:gap-6
                            text-[10px] sm:text-xs md:text-sm">
              <span className="flex items-center gap-1">❤️ 26</span>
              <span className="flex items-center gap-1">💬 03</span>
              <span className="cursor-pointer">✈️</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Page4;
