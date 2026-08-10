import React, { memo, useMemo } from "react";
import { ExternalLink, Swords } from "lucide-react";
import { motion } from "framer-motion";

// --- Animation Variants (The "Staggered Entrance" Pattern) ---
// Master container for the entire section
const sectionContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

// Nested container for lists/grids inside the section
const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// Single variant for all items that animate in
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};


// --- Child Components ---
const PlatformCard = React.memo(({ platform }) => (
  <motion.div
    variants={itemVariants}
    className="bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow p-6 flex flex-col items-center text-center h-full"
  >
    <div className="w-16 h-16 rounded-xl overflow-hidden flex items-center justify-center bg-background shadow border border-border/60 mb-4">
      <img
        src={platform.logo}
        alt={`${platform.name} Logo`}
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </div>

    <div className="text-lg font-semibold text-foreground">
      {platform.name}
    </div>

    <div className="text-sm text-muted-foreground mt-1 mb-2">
      <span className="text-foreground/80">Profile :</span>{" "}
      <a
        href={platform.profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        {platform.handle}
      </a>
    </div>

    <div className="flex flex-col gap-1 text-sm text-muted-foreground mb-3">
      {platform.stats.map((stat, index) => (
        <div key={index}>
          {stat.label} :
          <span className="font-medium text-foreground">
            {" "}
            {stat.value}
          </span>
        </div>
      ))}
    </div>

    <a
      href={platform.profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-auto flex items-center gap-2 text-primary hover:underline"
    >
      <ExternalLink className="w-4 h-4" />
      View Profile
    </a>
  </motion.div>
));

PlatformCard.displayName = "PlatformCard";

const HighlightItem = React.memo(({ item }) => (
  <motion.li variants={itemVariants}>
    {item.text}
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary hover:underline font-medium"
    >
      {item.linkText}
    </a>
    {item.rest}
  </motion.li>
));

HighlightItem.displayName = "HighlightItem";

function CompetitiveProgrammingComponent() {

  const cpPlatforms = useMemo(
    () => [
      {
        name: "GitHub",
        logo: "/assets/logos/github.png",
        handle: "Arjun-Meghwal",
        profileUrl: "https://github.com/Arjun-Meghwal",
        stats: [
          {
            label: "Projects",
            value: "MERN & Machine Learning",
          },
        ],
      },

      {
        name: "LinkedIn",
        logo: "/assets/logos/linkedin.png",
        handle: "Arjun Meghwal",
        profileUrl:
          "https://www.linkedin.com/in/arjun-meghwal-313820320/",
        stats: [
          {
            label: "Professional",
            value: "Networking",
          },
        ],
      },

      {
        name: "LeetCode",
        logo: "/assets/logos/leetcode.png",
        handle: "Arjun Meghwal",
        profileUrl: "https://leetcode.com/",
        stats: [
          {
            label: "Focus",
            value: "DSA & Problem Solving",
          },
        ],
      },

      {
        name: "Portfolio",
        logo: "/assets/logos/web.png",
        handle: "Personal Portfolio",
        profileUrl: "/",
        stats: [
          {
            label: "Built With",
            value: "React + Tailwind CSS",
          },
        ],
      },
    ],
    []
  );

  const highlights = useMemo(
    () => [
      {
        text: "Developed a complete ",
        linkText: "StudyNotion LMS",
        href: "https://github.com/Arjun-Meghwal",
        rest: " using React, Node.js, Express.js, MongoDB, Redux Toolkit, Razorpay and Cloudinary.",
      },

      {
        text: "Built an ",
        linkText: "Electric Vehicle Battery Health Prediction",
        href: "https://github.com/Arjun-Meghwal",
        rest: " project using Machine Learning and Random Forest.",
      },

      {
        text: "Strong knowledge of ",
        linkText: "Data Structures & Algorithms",
        href: "https://github.com/Arjun-Meghwal",
        rest: " with regular coding practice.",
      },

      {
        text: "Experienced in ",
        linkText: "Full Stack MERN Development",
        href: "https://github.com/Arjun-Meghwal",
        rest: " with REST APIs, Authentication, JWT and MongoDB.",
      },

      {
        text: "Passionate about ",
        linkText: "Problem Solving",
        href: "https://github.com/Arjun-Meghwal",
        rest: " and building scalable web applications.",
      },
    ],
    []
  );

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
      <motion.div
        variants={sectionContainerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center w-full space-y-16"
      >
        <motion.div variants={itemVariants} className="flex flex-col items-center text-center max-w-2xl">
          {/* --- THIS IS THE FIXED HEADING --- */}
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight flex flex-col sm:flex-row items-center sm:items-baseline justify-center gap-2 sm:gap-4 text-foreground text-center">
            <Swords className="w-8 h-8 text-primary drop-shadow-sm flex-shrink-0" />
            <span></span>
          </h2>

          <p className="text-lg text-muted-foreground">
            I actively practice Data Structures & Algorithms to strengthen my
            problem-solving skills while building scalable full-stack applications.
            Below are my coding profiles and achievements.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full max-w-5xl">
          <motion.div
            variants={listContainerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {cpPlatforms.map((platform) => (
              <PlatformCard key={platform.name} platform={platform} />
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full max-w-3xl">
          <div className="bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow p-6">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Key Highlights
            </h3>
            <p className="text-base text-muted-foreground mb-4">
              <a href="https://github.com/Arjun-Meghwal" className="text-primary hover:underline dark:hover:text-primary-foreground/70 transition font-medium" target="_blank" rel="noopener noreferrer">
                View my Github Profile for more details
              </a>
            </p>
            <motion.ul
              variants={listContainerVariants}
              className="list-disc ml-5 space-y-2 text-base text-muted-foreground"
            >
              {highlights.map((item, index) => (
                <HighlightItem key={index} item={item} />
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default React.memo(CompetitiveProgrammingComponent);