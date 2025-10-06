import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "C#/.NET", level: 95, category: "frontend" },
  { name: "MudBlazor", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "React Native", level: 75, category: "frontend" },
  { name: "Bootstrap", level: 85, category: "frontend" },
  { name: "Three.js", level: 75, category: "frontend" },
  { name: "TypeScript", level: 80, category: "frontend" },
  { name: "Tailwind CSS", level: 80, category: "frontend" },
  { name: "Expo", level: 75, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "GraphQL", level: 60, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },

  // AI/ML
  { name: "Pandas", level: 80, category: "AI/ML" },
  { name: "NumPy", level: 80, category: "AI/ML" },
  { name: "Scikit-Learn", level: 75, category: "AI/ML" },
  { name: "Matplotlib", level: 90, category: "AI/ML" },
  { name: "Jupyter Notebook", level: 95, category: "AI/ML" },
  { name: "Google Colab", level: 95, category: "AI/ML" },
  { name: "TensorFlow", level: 60, category: "AI/ML" },

  // Embedded
  { name: "C", level: 80, category: "embedded" },
  { name: "C++", level: 80, category: "embedded" },
  { name: "MPLAB", level: 60, category: "embedded" },
  { name: "Linux", level: 60, category: "embedded" },
];

const categories = ["frontend", "backend", "AI/ML", "embedded", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          My <span className="text-primary">Skills</span>
        </motion.h2>

        {/* Category Buttons */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, key) => (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, key) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: key * 0.03 }}
              whileHover={{ scale: 1.03 }}
              className="bg-card p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="bg-primary h-2 rounded-full"
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
