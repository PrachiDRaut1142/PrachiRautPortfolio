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
      image: "data:image/jpeg;base64,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",
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
