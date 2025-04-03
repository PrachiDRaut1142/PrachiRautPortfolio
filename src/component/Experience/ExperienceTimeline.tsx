import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion"; 
import { useInView } from "react-intersection-observer";
const ExperienceTimeline = () => {
  const calculateExperience = (startDate: string): string => {
    const start = new Date(startDate);
    const now = new Date();
  
    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
  
    if (months < 0) {
      years--;
      months += 12;
    }
  
    return `${years} years ${months} months`;
  };
  
  type Experience = {
    title: string;
    company: string;
    date: string;
    description: string;
    image: string;
  };
  
  const experiences: Experience[] = [
    {
      title: "Software Developer",
      company: "Automatebuddy Technologies Pvt. Ltd.",
      date: `June 2022 - Present (${calculateExperience("2022-06-01")})`, // Dynamically calculated
      description:
        "At Automatebuddy Technologies, I have engineered scalable full-stack applications using React and DOTnet MVC, optimizing performance and user experience. I spearheaded WhatsApp Business API integration, automated workflows with Hangfire, and developed intelligent conversational solutions using Dialogflow CX/ES. Additionally, I enhanced e-commerce, POS, and event management platforms, streamlining operations and boosting efficiency by up to 40%. 🚀",
      image: "/assets/png/Automatebuddy-Logo.png",
    },
  ];
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, 
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="px-5 text-white rounded-lg"
    >
      <VerticalTimeline>
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            date={exp.date}
            icon={<img src={exp.image} alt="Company Logo" style={{ width: "100%", height: "100%", borderRadius: "50%" }} />}
            iconStyle={{
              background: "#2afeb7",
              color: "#00150e",
            }}
            contentStyle={{
              background: "rgba(42, 33, 84, 1)", 
              color: "#86efac",
              borderRadius: "10px",
            }}
            contentArrowStyle={{
              borderRight: "1px solid rgba(42, 254, 183, 0.5)",
            }}
          >
            <motion.div
            >
              <motion.h3
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
                className="text-xl font-semibold text-[rgba(255,255,255,1)"
              >
                {exp.title}
              </motion.h3>
              <motion.h4
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
                className="text-lg text-[rgba(255,255,255,1)]"
              >
                {exp.company}
              </motion.h4>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 * index, duration: 0.5 }}
                className="text-sm text-gray-300"
              >
                {exp.description}
              </motion.p>
            </motion.div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </motion.div>
  );
};

export default ExperienceTimeline;
