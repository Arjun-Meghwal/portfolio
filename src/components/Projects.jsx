import React, { memo, useMemo } from "react";
import { Code, ExternalLink, FolderKanban } from "lucide-react";
import { motion } from "framer-motion";

// --- Animation Variants (The "Staggered Entrance" Pattern) ---
// This container will orchestrate the animation for the whole page
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Time delay between each child animating in
    },
  },
};

// This variant will be used by each item in the container
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};


// --- Child Component (No changes needed) ---
const ProjectCard = memo(({ project }) => {
  return (
    // This card is now an item in the grid's stagger animation
    <motion.div
      variants={itemVariants}
      className="bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow p-6 flex flex-col h-full"
    >
      <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">
        {project.title}
      </h3>
      <p className="text-base text-muted-foreground mb-4 flex-grow">
        {project.desc}
      </p>
      <div className="flex flex-wrap gap-2 mb-5 mt-auto">
        {project.tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-600"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4 flex-wrap">
        {project.links.map((link, linkIndex) => (
          <a
            key={linkIndex}
            href={link.href}
            className="flex items-center gap-2 text-primary font-semibold text-sm hover:underline hover:text-foreground dark:hover:text-primary-foreground/60 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.type === "code" ? (
              <Code className="w-4 h-4" />
            ) : (
              <ExternalLink className="w-4 h-4" />
            )}
            {link.type === "code" ? "Code" : "Demo"}
          </a>
        ))}
      </div>
    </motion.div>
  );
});
ProjectCard.displayName = "ProjectCard";


// --- Main Projects Component ---
function ProjectsComponent() {
  const projectsData = useMemo(
    () => [
      {
        title: "StudyNotion – Learning Management System",
        desc:
          "Developed a full-stack Learning Management System using the MERN stack. Features include JWT authentication, OTP verification, role-based access (Student/Instructor/Admin), Razorpay payment integration, Cloudinary media uploads, instructor dashboard, and course management.",
        tags: [
          "React",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Redux Toolkit",
          "Tailwind CSS",
          "JWT",
          "Razorpay",
          "Cloudinary",
        ],
        links: [
          {
            type: "code",
            href: "https://github.com/Arjun-Meghwal",
          },
          {
            type: "demo",
            href: "https://course-app-arjun22.vercel.app/",
          },
          // },
        ],
      },

      {
        title: "Electric Vehicle Battery Health Prediction",
        desc:
          "Built a Machine Learning model to predict Electric Vehicle battery health and driving range using Random Forest. Included passenger weight factor, battery degradation analysis, feature engineering, and performance visualization.",
        tags: [
          "Python",
          "Machine Learning",
          "Random Forest",
          "Pandas",
          "NumPy",
          "Scikit-Learn",
        ],
        links: [
          {
            type: "code",
            href: "https://github.com/Arjun-Meghwal",
          },
        ],
      },

      {
        title: "Personal Portfolio Website",
        desc:
          "Designed and developed a responsive developer portfolio with modern UI, dark mode, Framer Motion animations, React Router, and Tailwind CSS to showcase projects, skills, education, and coding profiles.",
        tags: [
          "React",
          "Tailwind CSS",
          "Framer Motion",
          "JavaScript",
        ],
        links: [
          {
            type: "code",
            href: "https://github.com/Arjun-Meghwal",
          },
          {
            type: "demo",
            href: "https://portfolio-arjun22.vercel.app/",
          },

        ],
      },

    ],
    []
  );

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
      {/* 1. This is the SINGLE animation container for the whole page. */}
      {/* It uses `animate`, not `whileInView`, for guaranteed execution. */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center w-full"
      >
        {/* Item 1: The header text block */}
        <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 flex items-center gap-4 text-foreground">
                <FolderKanban className="w-8 h-8 sm:w-11 sm:h-11 text-primary drop-shadow-sm" />
                Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center mb-10">
                Here are some of the projects I've worked on, ranging from algorithm visualizers and utilities to frontend tools and machine learning models. Each project reflects my passion for clean design, efficient problem-solving, and practical implementation.
            </p>
        </motion.div>

        {/* Item 2: The entire project card grid animates in as one block... */}
        <motion.div
          // It is ALSO a container for its own children (the cards)
          variants={containerVariants}
          className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

// Export the memoized component in a standard way
export default memo(ProjectsComponent);