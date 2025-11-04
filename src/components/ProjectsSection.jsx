import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Smart Occupancy Monitoring System",
    description: "Implementing the software system requirements for an IoT-based smart occupancy monitoring solution. Developed the IoT communication layer enabling fixtures to transmit sensor data to the monitoring website via MQTT over AWS IoT Core.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Supabase", "AWS IoT", "MQTT"],
    demoUrl: "#",
    githubUrl: "#",
    bgColor: "#6366f1"
  },
  {
    id: 2,
    title: "Flexio",
    description: "Independently designed and developed a social media app dedicated to documenting and managing users' fitness journeys. Leveraged React Native and Expo for seamless cross-platform functionality.",
    image: "/projects/project2.png",
    tags: ["React Native", "Expo", "TypeScript", "Microservices"],
    demoUrl: "#",
    githubUrl: "#",
    bgColor: "#ec4899"
  },
  {
    id: 3,
    title: "Divinity Full Stack",
    description: "Developed a web service for exploring alternative religions, applying SOLID principles and object-oriented design patterns (Singleton, Strategy, Facade, Dependency Injection). Utilized MVC architecture and Agile Scrum methodology, delivering two iterations of the application with comprehensive testing (Ad Hoc, Unit, Integration, System).",
    image: "/projects/project3.png",
    tags: ["React", "Java", "MySQL", "RESTful APIs", "GitHub", "JUnit"],
    demoUrl: "#",
    githubUrl: "#",
    bgColor: "#8b5cf6"
  },
  {
    id: 4,
    title: "Obituary Generator",
    description: "Developed a cloud-based obituary generator integrating the ChatGPT API for content creation, Amazon Polly for speech conversion, and Cloudinary for media storage. Secured API credentials using AWS Systems Manager Parameter Store and managed AWS resources with Terraform, including DynamoDB and Lambda for back-end-to-front-end communication.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
    bgColor: "#6366f1"
  },
  {
    id: 5,
    title: "E-commerce Platform",
    description: "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/project3.png",
    tags: ["ChatGPT API", "Amazon Polly", "Cloudinary", "AWS Systems Manager", "Terraform", "DynamoDB"],
    demoUrl: "#",
    githubUrl: "#",
    bgColor: "#ec4899"
  },
    {
    id: 5,
    title: "Embedded Timer Application",
    description: "Developed a timer application on a 32-bit microcontroller using I/O interrupts, idle states, and clock switching functionalities.",
    image: "/projects/project3.png",
    tags: ["MPLAB", "C", "Microcontroller"],
    demoUrl: "#",
    githubUrl: "#",
    bgColor: "#8b5cf6"
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
                    className="absolute top-1/2 left-1/2 w-[400px] h-[450px] -ml-[200px] -mt-[250px] rounded-2xl overflow-hidden transition-all duration-700 ease-in-out"
                    style={{
                      background: project.bgColor,
                      boxShadow: `0 5px 20px ${project.bgColor}30`,
                      transformStyle: "preserve-3d",
                      ...getStyles(i)
                    }}
                  >
                    <div className="p-8 h-full flex flex-col text-white">
                      <div className="flex-1 overflow-y-auto">
                        <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
                        <p className="text-sm text-white/90 mb-6 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-white/20 text-white rounded-full text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-4 mt-auto">
                        <a
                          href={project.demoUrl}
                          className="flex-1 flex items-center justify-center gap-2 bg-white text-gray-900 py-3 px-4 rounded-lg font-semibold hover:bg-white/90 transition-all"
                        >
                          <ExternalLink size={18} />
                          Demo
                        </a>
                        <a
                          href={project.githubUrl}
                          className="flex-1 flex items-center justify-center gap-2 bg-white/20 text-white py-3 px-4 rounded-lg font-semibold hover:bg-white/30 transition-all"
                        >
                          <Github size={18} />
                          Code
                        </a>
                      </div>
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

//   return (
//     <section className="py-24 px-4 relative">
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
//           Featured <span className="text-primary">Projects</span>
//         </h2>

//         <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
//           These projects showcase my hands-on experience and passion for learning and building software.
//         </p>

//         {/* Swiper Carousel */}
//         <Swiper
//           modules={[Navigation, Autoplay]}
//           spaceBetween={30}
//           slidesPerView={1.2}
//           breakpoints={{
//             640: { slidesPerView: 1.2 },
//             768: { slidesPerView: 1.5 },
//             1024: { slidesPerView: 2.2 },
//             1280: { slidesPerView: 2.5 },
//           }}
//           navigation={{
//             prevEl: ".prev-btn",
//             nextEl: ".next-btn",
//           }}
//           autoplay={{
//             delay: 0,
//             disableOnInteraction: true,
//           }}
//           className="cursor-grab"
//         >
//           {projects.map((project) => (
//             <SwiperSlide key={project.id}>
//               <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
//                 <div className="h-56 overflow-hidden">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.tags.map((tag) => (
//                       <span
//                         key={tag}
//                         className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                   <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
//                   <p className="text-muted-foreground text-sm mb-4">
//                     {project.description}
//                   </p>
//                   <div className="flex space-x-3">
//                     <a
//                       href={project.demoUrl}
//                       target="_blank"
//                       className="text-foreground/80 hover:text-primary transition-colors duration-300"
//                     >
//                       <ExternalLink size={20} />
//                     </a>
//                     <a
//                       href={project.githubUrl}
//                       target="_blank"
//                       className="text-foreground/80 hover:text-primary transition-colors duration-300"
//                     >
//                       <Github size={20} />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Navigation Buttons */}
//         <div className="flex items-center justify-center mt-12 gap-5">
//           <button className="prev-btn bg-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-neutral-200 transition-colors cursor-pointer">
//             <ArrowRight className="rotate-180" size={24} />
//           </button>
//           <button className="next-btn bg-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-neutral-200 transition-colors cursor-pointer">
//             <ArrowRight size={24} />
//           </button>
//         </div>

//         {/* Optional: Github Link */}
//         <div className="text-center mt-12">
//           <a
//             className="cosmic-button w-fit flex items-center mx-auto gap-2"
//             target="_blank"
//             href="https://github.com/machadop1407"
//           >
//             Check My Github <ArrowRight size={16} />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };