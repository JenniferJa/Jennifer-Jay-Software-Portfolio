import { Briefcase, GraduationCap, ArrowRight, ExternalLink, ChevronDown, ChevronUp, MapPin  } from "lucide-react";
import { useState } from "react";
import {motion} from "framer-motion";

const experience = [
  {
    id: 1,
    company: "ZeroKey",
    logo: "https://yt3.googleusercontent.com/ytc/AIdro_mz0wtitL0ChFuhjpaIOmNGLM_ghVzms8ulElZpoCwRCw=s900-c-k-c0x00ffffff-no-rj",
    role: "Software Developer Intern",
    location: "Calgary, AB",
    tags: ["C#", "React", "Three.js", "MariaDB"],
    description:
    "• Developed full-stack features for the company's dashboard using C#, JavaScript, and MariaDB, enhancing usability and functionality\n• Reimplemented the dashboard from a 2D view to a 3D interactive interface with Three.js to visualize real-time positioning of IoT devices\n• Prototyped and tested APIs with Postman to support demos and integration testing",
    buttonText: "View Company Website",
    buttonLink: "https://zerokey.com/",
    date: "May 2024 - September 2025",
    icon: "work",
  },
  {
    id: 2,
    company: "UofC Solar Car Team",
    logo: "https://avatars.githubusercontent.com/u/14067129?s=280&v=4",
    role: "Telemetry Software Developer",
    tags: ["React", "TypeScript", "Node.js", "Tailwind CSS", "Angular", "Jira", "Agile/Scrum", "Javascript", "HTML", "CSS"],
    location: "Calgary, AB",
    description:
      "• Enhancing a React GUI to offer users convenient access to the car’s statistics, leveraging AWS to delivery in-vehicle sensor information to streamline the identification of specific faults affecting the car’s performance\n• Developed a Packet Interpretation Transformer built on typescript to reconstruct JSON formatted data sent from car sensors to display on the Telemetry website \n• Utilizing Angular to optimize the club’s inventory management portal, implementing Firebase for user authentication and data synchronization to the database\n• Maintaining comprehensive documentation of code to facilitate seamless utilization and future enhancements by both current and forthcoming team members and utilizing Git for version control",
    buttonText: "View Telemetry Dashboard",
    buttonLink: "https://telemetry-beta.calgarysolarcar.ca/battery",
    date: "September 2023 - September 2024",
    icon: "extracurricular",
  },
  {
    id: 3,
    company: "UofC Engineers Without Borders",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS7k9cZFWoUs0yjKtM9SHee_PSNTE9cbheynnltggixcI6cBE5Jbxy2RPz1sNHw-X5ZqA&usqp=CAU",
    role: "President",
    tags: ["Leadership", "Team Management", "Strategic Planning", "Fundraising", "Sustainable Development", "Project Coordination", "Community Engagement"],
    location: "Calgary, AB",
    description:
      "• Elected as Vice President of Finance and Fundraising in the initial year, progressed to the role of Presidentn\n• Led a team of 40+ members, including 6 Vice Presidents, each overseeing individual ventures to address the UN’s 17 Sustainability Development Goals, contributing significantly to human development initiatives\n• Facilitated monthly strategic meetings to align club initiatives with its core mission, ensuring purposeful direction\n• Successfully expanded the club’s membership from 16 to 40+ individuals, fostering a passionate and dedicated community committed to advancing sustainable development goals",
    buttonText: "View Organization's Website",
    buttonLink: "https://members.ewb.ca/",
    date: "May 2022 - July 2022",
    icon: "extracurricular",
  },
  {
    id: 4,
    company: "University of Calgary",
    logo: "https://www.ucalgary.ca/sites/default/files/styles/ucws_image_desktop/public/2024-05/Coat%20of%20arms%201000x1000_0.png?itok=28aOILzk",
    role: "Digital Engineering Researcher",
    tags: ["Flask", "Python", "SQLAlchemy", "Heroku", "Bootstrap"],
    location: "Calgary, AB",
    description:
      "• Developed course material for the Digital Engineering Minor at the University, focusing on full-stack Flask-based web development used to educate undergraduate students\n• Conducted in depth research to implement best practices in Flask, Python, SQLAlchemy databases, Heroku cloud platform, Gunicorn HTTP server, and CSS (utilizing Bootstrap) for an intuitive user interface\n• Employed Bcrypt hashing to enhance data security and safeguard sensitive data stored within SQLAlchemy databases to securely store social media user information\n• Established a user-friendly GitHub fastpages blog, offering accessible and detailed learning material\n• Actively participated in weekly progress meetings to discuss project updates, and receive feedback",
    buttonText: "View My Blog",
    buttonLink: "https://de-fellows.github.io/RexCoding/python/flask/html/2022/06/18/flask-media.html",
    date: "May 2022 - July 2022",
    icon: "work",
  },
];

export const WorkExperienceSection = () => {
  const [expanded, setExpanded] = useState({});

  const toggleDescription = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const [filter, setFilter] = useState("all");

const filteredExperience = experience.filter((item) => {
  if (filter === "all") return true;
  return item.icon === filter; // "work" or "extracurricular"
});

  return (
    <section id="workexperience" className="py-24">
      <div className="container mx-auto px-4 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
        > My <span className="text-primary">Experience</span>
        </motion.h2>

        {/* <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          My professional journey in software development and engineering.
        </motion.p> */}
        <motion.div initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }} className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all z-10 ${
              filter === "all" ? "bg-primary text-white border-primary" : "border-foreground/20 hover:border-primary"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setFilter("work")}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all z-10 ${
              filter === "work" ? "bg-primary text-white border-primary" : "border-foreground/20 hover:border-primary"
            }`}
          >
            Work
          </button>

          <button
            onClick={() => setFilter("extracurricular")}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all z-10 ${
              filter === "extracurricular" ? "bg-primary text-white border-primary" : "border-foreground/20 hover:border-primary"
            }`}
          >
            Extracurriculars
          </button>
</motion.div>

        <div className="relative w-full">
          {/* Center line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 bg-primary hidden md:block pointer-events-none"
          ></motion.div>

          <div className="space-y-0">
            {filteredExperience.map((item, index) => {
              const isLeft = index % 2 === 0;
              const show = expanded[item.id];

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  } items-start`}
                >
                  {/* Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full ring-4 ring-gray-50 shadow-lg z-10 hidden md:block"
                  ></motion.div>

                  {/* Date (opposite side of card) */}
                  <div
                    className={`hidden md:block absolute top-6 text-sm font-semibold text-primary ${
                      isLeft ? "left-[52%] text-left" : "right-[52%] text-right"
                    }`}
                  >
                    {item.date}
                  </div>

                  {/* Card */}
                  <div
                    className={`md:w-[45%] mt-12 md:mt-0 z-10 ${
                      isLeft ? "md:pr-10" : "md:pl-10"
                    }`} onClick={() => toggleDescription(item.id)}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className="bg-card rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100"
                    >
                      <div className="flex items-start gap-4 mb-3">
                        <img
                          src={item.logo}
                          alt={`${item.company} logo`}
                          className="w-12 h-12 object-contain rounded-lg bg-white"
                        />
                        <div className="flex-1 text-left">
                          <h3 className="text-xl font-bold mb-1">
                            {item.company}
                          </h3>

                          {/* Role + Location on same line */}
                          <div className="flex justify-between items-center flex-wrap">
                            <p className="text-lg font-semibold ">
                              {item.role}
                            </p>
                            <p className="text-sm flex items-center gap-1 text-foreground/80">
                              <MapPin size={14} className="" />{item.location}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4 justify-center">
                        {item.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button
                        
                        className="text-primary hover:text-primary/80 text-sm font-medium flex items-center gap-1 mb-2"
                      >
                        {show ? (
                          <>
                            Hide Description <ChevronUp size={14} />
                          </>
                        ) : (
                          <>
                            Show Description <ChevronDown size={14} />
                          </>
                        )}
                      </button>
                      
                      {/* Description toggle */}
                      {show && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-sm mb-4 leading-relaxed whitespace-pre-line text-left"
                        >
                          {item.description}
                        </motion.p>
                      )}

                      

                       {item.buttonText && (
                      <div className="flex justify-start">
                        <a
                          href={item.buttonLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex text-foreground/80 hover:text-primary transition-colors duration-300 text-sm font-medium items-center gap-2"
                          onClick={(e) => e.stopPropagation()} // prevents bubbling if parent has click
                        >
                          {item.buttonText}
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    )}

                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};