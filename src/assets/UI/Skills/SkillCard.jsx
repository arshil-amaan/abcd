import { Suspense, useMemo } from "react";
import Marquee from "react-fast-marquee";

const SkillCard = ({ list, direction="right" }) => {
  const marqueeStyles = useMemo(() => ({
    WebkitMaskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0) 100%)",
    maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0) 100%)"
  }), []);


  return (
    <div className="w-full">
      <Suspense fallback={<div>Loading skills...</div>}>
        <Marquee speed={60} direction={direction} className="pt-12" pauseOnHover style={marqueeStyles} >
          {list.map((item, key) => {
            const Icon = item.Icon;
            return (
              <div title={item.tooltip} className="relative inline-block cursor-pointer group">
                <div className="w-fit flex items-center justify-center m-[10px] px-8 md:px-16 py-2 bg-slate-100 rounded-md hover:shadow-none shadow-[0_0_4px_#38bdf8] transition-transform duration-300 ease-in-out hover:scale-105">
                  <Icon />
                </div>
              </div>
            )
          })}
        </Marquee>
      </Suspense>
    </div>
  );
}

export default SkillCard;