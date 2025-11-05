import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const cardColors = ["#6366f1", "#ec4899", "#8b5cf6"];
const projects = [
  {
    id: 1,
    title: "Learn Python for Kids Hackathon Project",
    description: "Led a team to second place by developing an interactive, educational, multi-level program introducing kids to Python basics, inspired by the classic Snake Game. Created a user-friendly experience with interactive lessons and a reward system that unlocks new lessons to encourage continued learning.",
    image: "/projects/project3.png",
    tags: ["Python","PyGame", "VS Code", "Git/GitHub"],
    buttonText: "View DevPost",
    buttonLink: "https://devpost.com/software/snake-learn-python-for-kids",
  },
  {
    id: 2,
    title: "Efishant Tasking Hackathon Project",
    description: "Co-created an educational to-do list application supporting neurodiverse children, integrating gamified progress incentives and accessibility features (speech-to-text & text-to-speech) to encourage focus and task completion.",
    image: "/projects/project3.png",
    tags: ["Python","Tkinter", "VS Code", "Git/GitHub"],
    buttonText: "View DevPost",
    buttonLink: "https://devpost.com/software/efishant-tasking",
  },
  
  {
    id: 3,
    title: "Divinity Full Stack",
    description: "Developed a web service for exploring alternative religions, applying SOLID principles and object-oriented design patterns (Singleton, Strategy, Facade, Dependency Injection). Utilized MVC architecture and Agile Scrum methodology, delivering two iterations of the application with comprehensive testing (Ad Hoc, Unit, Integration, System).",
    image: "/projects/project3.png",
    tags: ["React", "Java", "MySQL", "RESTful APIs", "Git/GitHub", "JUnit"],
    buttonText: "View GitHub Repo",
    buttonLink: "https://github.com/jennijjjj/FrontEnd-SENG401",
  },
  {
    id: 4,
    title: "Smart Occupancy Monitoring System",
    description: "Implementing the software system requirements for an IoT-based smart occupancy monitoring solution. Developed the IoT communication layer enabling fixtures to transmit sensor data to the monitoring website via MQTT over AWS IoT Core.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Supabase", "AWS IoT", "MQTT"],
    buttonText: "",
    buttonLink: "",
  },
  {
    id: 5,
    title: "Obituary Generator",
    description: "Developed a cloud-based obituary generator integrating the ChatGPT API for content creation, Amazon Polly for speech conversion, and Cloudinary for media storage. Secured API credentials using AWS Systems Manager Parameter Store and managed AWS resources with Terraform, including DynamoDB and Lambda for back-end-to-front-end communication.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe"],
    buttonText: "",
    buttonLink: "",
  },
  {
    id: 6,
    title: "Operating Systems Scheduler Simulator",
    description: "Developed a C++ program to process job sequences with a file-based input system. Implemented a job linked list data structure optimized with function pointers and applied multiple scheduling policies (FIFO, SJF, STCF, Round-Robin, Lottery). Provided UNIX command-line options for users to select policies and configure time slices.",
    image: "/projects/project3.png",
    tags: ["C++", "UNIX command line"],
    buttonText: "",
    buttonLink: "",
  },
    {
    id: 7,
    title: "Embedded Timer Application",
    description: "Developed a configurable timer application on a PIC24F16K101 microcontroller using push buttons and I/O interrupts for user control; implemented UART communication to display real-time countdown data on Tera Term, and optimized power efficiency with idle states and clock switching.",
    image: "/projects/project3.png",
    tags: ["MPLAB", "C", "Microcontroller","Terraform"],
    buttonText: "",
    buttonLink: "",
  },{
    id: 8,
    title: "Flexio",
    description: "Independently designed and developed a social media app dedicated to documenting and managing users' fitness journeys. Leveraged React Native and Expo for seamless cross-platform functionality.",
    image: "/projects/project2.png",
    tags: ["React Native", "Expo", "TypeScript", "Microservices"],
    buttonText: "",
    buttonLink: "",
  },
];

export const ProjectsSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const next = () =>
    activeSlide < projects.length - 1 && setActiveSlide(activeSlide + 1);

  const prev = () => activeSlide > 0 && setActiveSlide(activeSlide - 1);

  const getStyles = (index) => {
    if (activeSlide === index)
      return {
        opacity: 1,
        transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
        zIndex: 10
      };
    else if (activeSlide - 1 === index)
      return {
        opacity: 1,
        transform: "translateX(-240px) translateZ(-400px) rotateY(35deg)",
        zIndex: 9
      };
    else if (activeSlide + 1 === index)
      return {
        opacity: 1,
        transform: "translateX(240px) translateZ(-400px) rotateY(-35deg)",
        zIndex: 9
      };
    else if (activeSlide - 2 === index)
      return {
        opacity: 1,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 8
      };
    else if (activeSlide + 2 === index)
      return {
        opacity: 1,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 8
      };
    else if (index < activeSlide - 2)
      return {
        opacity: 0,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 7
      };
    else if (index > activeSlide + 2)
      return {
        opacity: 0,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 7
      };
  };

  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-4 relative" 
    >
      <div className="container mx-auto px-4 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
        > Featured <span className="text-primary">Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Explore my latest work and side projects.
        </motion.p>
        {/* 3D Carousel Container with Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative h-[500px] flex items-center justify-center mb-12"
        >

       
          {/* Left Navigation Button */}
          <button
            onClick={prev}
            disabled={activeSlide === 0}
            className="absolute left-4 z-20 w-14 h-14 rounded-full bg-primary/10 hover:bg-primary/20 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all"
          >
            <ChevronLeft className="text-foreground" size={32} />
          </button>

          <div style={{ perspective: "1000px" }} className="w-full h-full flex items-center justify-center">
            <div className="relative w-full h-full" style={{ transformStyle: "preserve-3d" }}>
              {projects.map((project, i) => (
                <React.Fragment key={project.id}>
                  <div
                    className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -ml-[200px] -mt-[250px] rounded-2xl overflow-hidden transition-all duration-700 ease-in-out"
                    style={{
                      background: cardColors[i % cardColors.length],
                      boxShadow: `0 5px 20px ${cardColors[i % cardColors.length]}30`,
                      transformStyle: "preserve-3d",
                      ...getStyles(i)
                    }}
                  >
                    
                   
                   <div className="p-8 h-full flex flex-col items-center justify-center text-white text-center">
  <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
  <div className="flex flex-wrap gap-2 mb-6 justify-center">
    {project.tags.map((tag, idx) => (
      <span
        key={idx}
        className="px-3 py-1 bg-white/20 text-white rounded-full text-xs font-medium"
      >
        {tag}
      </span>
    ))}
  </div>
  <p className="text-sm text-white/90 mb-6 leading-relaxed max-w-xs">
    {project.description}
  </p>
  {project.buttonText && (
    <a
      href={project.buttonLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex text-foreground/80 hover:text-primary transition-colors duration-300 text-sm font-medium items-center gap-2"
      onClick={(e) => e.stopPropagation()}
    >
      {project.buttonText}
      <ExternalLink size={16} />
    </a>
  )}
</div>

                  </div>
                  {/* Reflection */}
                  <div
                    className="absolute top-1/2 left-1/2 w-[400px] h-[200px] -ml-[200px] mt-[250px] rounded-2xl pointer-events-none transition-all duration-700 ease-in-out"
                    style={{
                      background: `linear-gradient(to bottom, ${project.bgColor}40, transparent)`,
                      transformStyle: "preserve-3d",
                      transform: getStyles(i).transform + " scaleY(-0.5)",
                      opacity: getStyles(i).opacity * 0.3,
                      zIndex: getStyles(i).zIndex - 1
                    }}
                  />
                </React.Fragment>
              ))}
            </div>
          {/* Right Navigation Button */}
          <button
            onClick={next}
            disabled={activeSlide === projects.length - 1}
            className="absolute right-4 z-20 w-14 h-14 rounded-full bg-primary/10 hover:bg-primary/20 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all"
          >
            <ChevronRight className="text-foreground" size={32} />
          </button>
        </div>
          </motion.div>

          

        {/* Slide Indicators */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center gap-3 mt-8"
        >
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`h-2 rounded-full transition-all ${
                activeSlide === idx
                  ? "w-8 bg-foreground/80"
                  : "w-2 bg-foreground/80 bg-opacity-30"
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
