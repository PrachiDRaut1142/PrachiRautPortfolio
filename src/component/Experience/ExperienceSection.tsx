import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import ExperienceTimeline from "./ExperienceTimeline";
const ExperienceSection = () => {
  const [audio] = useState(() => new Audio('/assets/mp3/typing-sound.mp3'));
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const [userInteracted, setUserInteracted] = useState(false);
  useEffect(() => {
    const enableAudio = () => {
      setUserInteracted(true);
      document.removeEventListener("click", enableAudio);
    };
    document.addEventListener("click", enableAudio);
    return () => {
      document.removeEventListener("click", enableAudio);
    };
  }, []);
  useEffect(() => {
    if (userInteracted) {
      if (inView) {
        audio.loop = true;
        audio.play().catch((err) => console.error("Audio play failed:", err));
      } else {
        audio.pause();
        audio.currentTime = 0;
      }
    }
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [inView, userInteracted, audio]);
  return (
    <div id="experience" className="relative z-40 border-t border-[#25213b]">
      <img alt="Hero" loading="lazy" width="1572" height="795" decoding="async" data-nimg="1" className="absolute top-0 -z-10" style={{ color: 'transparent' }} src="/assets/svg/bg-texture.svg"></img>
      <div className="relative flex flex-col items-center justify-center min-h-screen text-white">
        <div className="flex justify-center mt-5 pt-10 lg:mt-0 lg:pt-0 pb-10">
          <div className="flex items-center space-x-2">
            <span className="px-2 w-10 bg-[rgba(73,66,121,1)] rounded-md">{"<>"}</span>
            <span className="bg-[rgba(73,66,121,1)] w-fit text-white p-2 px-5 text-xl rounded-md">Experiences</span>
            <span className="px-2 w-10 bg-[rgba(73,66,121,1)] rounded-md">{"</>"}</span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10">
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <div className="width:95%">
                <DotLottieReact
                  src="https://lottie.host/291d1a01-7414-4994-91dc-2bb526744770/i5t2tXqVpn.lottie"
                  loop
                  autoplay
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-6 mt-10">
              <div className="glow-container-experience-1 glow-container">
                <ExperienceTimeline />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExperienceSection;