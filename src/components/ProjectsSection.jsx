import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const projects = [
  {
    id: 1,
    title: "Smart Occupancy Monitoring System",
    description: "Implementing the software system requirements for an IoT-based smart occupancy monitoring solution. Developed the IoT communication layer enabling fixtures to transmit sensor data to the monitoring website via MQTT over AWS IoT Core, and integrated DynamoDB for scalable data storage supporting real-time monitoring and analytics. Built a web-based dashboard with public and admin views, allowing users to check occupancy and wait times, and administrators to configure fixtures, view analytics, and manage client accounts. Contributed to a scalable, user-friendly architecture suitable for spaces such as washrooms and parking garages.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Flexio",
    description:
      "Independently designed and developed a social media app dedicated to documenting and managing users’ fitness journeys. Leveraged React Native and Expo for seamless cross-platform functionality, and applied microservice architecture to enhance scalability and streamline CI/CD processes.",
    image: "/projects/project2.png",
    tags: ["TypeScript", "D3.js", "Next.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {

  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These projects showcase my hands-on experience and passion for learning and building software.
        </p>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2.2 },
            1280: { slidesPerView: 2.5 },
          }}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          autoplay={{
            delay: 0,
            disableOnInteraction: true,
          }}
          className="cursor-grab"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                <div className="h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center mt-12 gap-5">
          <button className="prev-btn bg-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-neutral-200 transition-colors cursor-pointer">
            <ArrowRight className="rotate-180" size={24} />
          </button>
          <button className="next-btn bg-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-neutral-200 transition-colors cursor-pointer">
            <ArrowRight size={24} />
          </button>
        </div>

        {/* Optional: Github Link */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/machadop1407"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};