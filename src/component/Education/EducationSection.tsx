import React from "react";

const educationData = [
    { year: "2020 - Present", degree: "Bachelor Degree", institution: "National University of Bangladesh" },
    { year: "2018 - 2020", degree: "Higher Secondary Certificate", institution: "Noakhali Islamia Kamil Madrasah" },
    { year: "2008 - 2018", degree: "Secondary School Certificate", institution: "Baitus Saif Islamia Madrasah" },
    { year: "2023", degree: "Certification in Web Development", institution: "Udemy / Coursera" },
    { year: "2022", degree: "Certification in AI & ML", institution: "Google AI Academy" },
];

function EducationSection() {
    return (
        <div id="education" className="relative z-40 border-t border-[#25213b] pb-10 ">
            <img
                alt="Background Texture"
                loading="lazy"
                width="1572"
                height="795"
                decoding="async"
                className="absolute top-0 -z-10 w-full"
                style={{ color: "transparent" }}
                src="/assets/svg/bg-texture.svg"
            />
            <div className="relative flex flex-col items-center justify-center min-h-screen text-white mx-8 md:mx-12">
                <div className="flex justify-center mt-5 py-20">
                    <div className="flex items-center space-x-2">
                        <span className="px-2 w-10 bg-[rgba(73,66,121,1)] rounded-md">{"<>"}</span>
                        <span className="bg-[rgba(73,66,121,1)] text-white p-2 px-5 text-xl rounded-md">Education</span>
                        <span className="px-2 w-10 bg-[rgba(73,66,121,1)] rounded-md">{"</>"}</span>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto flex flex-col items-center space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                        {educationData.slice(0, 4).map((edu, index) => (
                            <div key={index} className="relative p-[3px] border-gradient-education">
                                <div className="relative bg-[#2A2154] p-6 flex flex-col justify-between rounded-xl">
                                    <p className="text-xs sm:text-sm text-[#16f2b3]">{edu.year}</p>
                                    <div className="flex items-center gap-x-6 px-3 py-5">
                                        <div className="text-violet-500 text-2xl">🎓</div>
                                        <div>
                                            <p className="text-lg sm:text-xl mb-1 font-semibold uppercase">{edu.degree}</p>
                                            <p className="text-sm sm:text-base">{edu.institution}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex justify-center">
                        <div className="relative p-[3px] border-gradient-education w-full sm:w-[50%]">
                            <div className="relative bg-[#2A2154] p-6 flex flex-col justify-between rounded-xl">
                                <p className="text-xs sm:text-sm text-[#16f2b3]">{educationData[4].year}</p>
                                <div className="flex items-center gap-x-6 px-3 py-5">
                                    <div className="text-violet-500 text-2xl">🎓</div>
                                    <div>
                                        <p className="text-lg sm:text-xl mb-1 font-semibold uppercase">{educationData[4].degree}</p>
                                        <p className="text-sm sm:text-base">{educationData[4].institution}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default EducationSection;
