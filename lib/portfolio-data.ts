// ==========================================
// PORTFOLIO DATA - EASY TO MAINTAIN
// ==========================================
// To add a new project, simply add a new object to the projects array
// To add a new skill, add it to the skills array
// All data is centralized here for easy updates

export const personalInfo = {
  name: "Hasindu Ohasa",
  roles: ["Developer", "Designer", "Creator"],
  tagline: "Passionate creative and tech enthusiast specializing in photography, videography, graphic design, and software development.",
  bio: "Hasindu Ohasa, a talented photographer, graphic designer, and content creator from Matara, Sri Lanka with a unique blend of creativity, technical expertise, and passion to every project I work on.",
  story: "I began my journey as a content creator in 2018 when I launched my own YouTube channel. Despite facing setbacks when my channel got hacked, I refused to give up on my dreams. I quickly pivoted to a Facebook page and then a TikTok account, where I have built a loyal following of over 40,000 fans and 4 million views.",
  profileImage: "/profile.jpg",
  founder: "Founder of Droplens Studios Co.",
};

export const contact = {
  email: "hasinduohasa@gmail.com",
  phone: "+94 76 259 4657",
  address: "Sri Jayalath, Getamanna Rd, Kirinda, Puhulwella, Matara, Sri Lanka",
};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/hasindu-ohasa-991aaa241/",
  github: "https://github.com/ohasacreations",
  facebook: "https://web.facebook.com/hasindu.ohasa",
  instagram: "https://www.instagram.com/imnot_hazi/",
  youtube: "https://www.youtube.com/@hasinduohasa5941",
  tiktok: "https://www.tiktok.com/@mr_hasi_bro",
  medium: "https://medium.com/@hasinduohasa",
  buymeacoffee: "https://buymeacoffee.com/hasinduohasa",
};

export const skills = {
  languages: ["Python", "HTML", "CSS", "JavaScript", "PHP", "TypeScript", "Java", "C++", "C#"],
  frameworks: ["React", "Node.js", "Tailwind CSS", "Bootstrap", "React Native", "Flutter"],
  databases: ["SQL", "MySQL", "MongoDB", "Firebase"],
  design: ["Photoshop", "After Effects", "Blender", "Figma", "Premiere Pro", "Filmora"],
  tools: ["Git", "GitHub", "VSCode", "Docker", "Linux", "Terminal", "Arduino"],
  platforms: ["Android Development", "IoT", "Raspberry Pi", "AWS", "Google Cloud", "Netlify", "Vercel"],
};

export const allSkills = [
  "Python", "HTML", "CSS", "JavaScript", "PHP", "TypeScript", "Java", "C++", "C#",
  "React", "Node.js", "Tailwind CSS", "Bootstrap", "SQL", "MySQL", "MongoDB", "Firebase",
  "Photoshop", "After Effects", "Blender", "Figma", "Premiere Pro", "Filmora",
  "Git", "GitHub", "VSCode", "Docker", "Linux", "Terminal", "Arduino",
  "React Native", "Flutter", "Android Development", "IoT", "Raspberry Pi",
  "AWS", "Google Cloud", "Netlify", "Vercel"
];

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  url?: string;
  videoUrl?: string;
  tags: string[];
  featured?: boolean;
}

// ==========================================
// PROJECTS - ADD NEW PROJECTS HERE
// ==========================================
export const projects: Project[] = [
  {
    id: "jarvis-protocol",
    title: "Jarvis-Protocol",
    description: "A Advanced Voice AI Agent Assistant (built using the Gemini API)",
    image: "/images/jarvis.jpg",
    url: "https://jarvis-protocol.vercel.app/",
    tags: ["TypeScript", "HTML", "AI"],
    featured: true,
  },
  {
    id: "santas-winter-ride",
    title: "Santa's Winter Ride",
    description: "Recognized as one of the top 10 best projects at the Java Institute for Advanced Technologies web programming workshop. A festive 2D game developed using HTML, CSS, and JavaScript.",
    image: "/images/santa.png",
    url: "https://ohasacreations.github.io/Santas-Winter-Ride/",
    videoUrl: "https://youtu.be/kpv-2Z3faMk?si=1IgHg48joUtOCf0N",
    tags: ["HTML", "CSS", "JavaScript", "Game", "Award"],
    featured: true,
  },
  {
    id: "stark-holographic-interface",
    title: "Stark-Holographic-Interface",
    description: "A high-performance, browser-based interactive interface that allows users to manipulate a complex 3D particle system using real-time hand gestures.",
    image: "/images/interface.jpg",
    url: "https://holographic-interface.netlify.app/",
    tags: ["TypeScript", "JSON", "HTML", "3D"],
    featured: true,
  },
  {
    id: "sri-lankan-ambulance-mod",
    title: "Sri Lankan Ambulance Mod for GTA V",
    description: "A custom mod bringing a realistic Sri Lankan ambulance into GTA V. Features accurate textures, authentic vehicle details, and lighting patterns that reflect real-life emergency services in Sri Lanka.",
    image: "/images/ambulance.jpg",
    url: "https://www.gta5-mods.com/paintjobs/sri-lanka-ambulance-1990",
    tags: ["GTA V", "Modding", "3D Modeling"],
  },
  {
    id: "matara-cinematic",
    title: "Matara | 4K Cinematic Travel Film",
    description: "This 4K cinematic travel film explores the coastal charm and vibrant life of Matara, Sri Lanka. Through carefully composed visuals, smooth camera movements, and natural soundscapes.",
    image: "/images/matara.jpg",
    url: "https://youtu.be/GTIc3kgcz-8?si=cCdGfqdLCYdFen8A",
    tags: ["4K Video", "Cinematography", "Travel", "Sri Lanka"],
  },
  {
    id: "elephant-explorer",
    title: "The Elephant and the Explorer",
    description: "This digital artwork shows an explorer meeting an elephant in a calm, natural setting. It highlights the connection between humans and nature, using soft lighting and detailed visuals.",
    image: "/images/project-1.jpg",
    tags: ["Photoshop", "Digital Art", "Manipulation"],
  },
  {
    id: "christmas-microworld",
    title: "Christmas Microworld",
    description: "A creative digital artwork that captures the magic of the holiday season in miniature form. This manipulation portrays a tiny Christmas scene using advanced Photoshop techniques.",
    image: "/images/project-2.jpg",
    tags: ["Photoshop", "Manipulation"],
  },
  {
    id: "sl-army-attack",
    title: "SL ARMY ATTACK",
    description: "An immersive first-person shooter game inspired by the 2009 Sri Lankan war. Created using FPS Creator at age 14, showcasing early talent in game design and development.",
    image: "/images/game.png",
    tags: ["FPS Creator", "Game Design", "3D"],
  },
];

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  certificateUrl?: string;
}

export const education: Education[] = [
  {
    id: "harvard",
    institution: "Harvard University",
    degree: "CS50, Computer Science",
    period: "Mar 2024 - Apr 2024",
    certificateUrl: "https://certificates.cs50.io/94280089-0afc-46d6-9d77-e07d33f4ff5d.pdf?size=letter",
  },
  {
    id: "alison",
    institution: "Alison",
    degree: "Dip, Advanced Digital Photography",
    period: "Jan 2019 - Mar 2019",
  },
  {
    id: "al",
    institution: "Rahula College",
    degree: "Advanced Level Examination (A/L)",
    period: "Jan 2024 - Nov 2025",
  },
  {
    id: "ol",
    institution: "MR/Puhulwella National School",
    degree: "Ordinary Level Examination (O/L)",
    period: "2022-23",
  },
];

export interface Experience {
  id: string;
  role: string;
  company: string;
  type: string;
  period: string;
  location?: string;
  description: string;
  skills?: string[];
}

export const experience: Experience[] = [
  {
    id: "droplens",
    role: "Founder & Creative Director",
    company: "DropLens Studios Co.",
    type: "Full-time",
    period: "May 2024 - Present",
    description: "As the Founder and Creative Director of DropLens Studios, I oversee all aspects of our creative services, including photography, videography, and graphic design. I specialize in capturing stunning portraits, events, weddings, and landscapes.",
  },
  {
    id: "photography",
    role: "Head Photographer",
    company: "Hasindu Ohasa Photography",
    type: "Full-time",
    period: "Jan 2019 - Present",
    location: "Matara, Sri Lanka",
    description: "Event Photography, Composition Techniques, Portrait Photography, Landscape Photography, Photo Editing",
    skills: ["Event Photography", "Composition Techniques", "Portrait Photography"],
  },
  {
    id: "graphic-design",
    role: "Graphic Designer",
    company: "Freelance",
    type: "Part-time",
    period: "Jul 2020 - Present",
    description: "Image Design, Graphic Design Software, Brand Identity, Social Media Graphics",
    skills: ["Image Design", "Graphic Design Software", "Brand Identity"],
  },
];

export interface Publication {
  id: string;
  title: string;
  platform: string;
  date: string;
  url: string;
}

export const publications: Publication[] = [
  {
    id: "data-internet",
    title: "How Data Travels Through the Internet",
    platform: "Academia.edu",
    date: "Apr 26, 2025",
    url: "https://www.academia.edu/129050721/How_Data_Travels_Through_the_Internet",
  },
  {
    id: "enchanted-visions",
    title: "Enchanted Visions: A Photographer's Journey",
    platform: "Internet Archive",
    date: "Jan 18, 2025",
    url: "https://archive.org/details/enchanted-visions/mode/1up",
  },
  {
    id: "school-canteens",
    title: "The Hidden Dangerous of School Canteens",
    platform: "Medium",
    date: "Jul 12, 2024",
    url: "https://medium.com/@hasinduohasa/the-hidden-dangerous-of-school-canteens-3c9a6d2991c1",
  },
];

// ==========================================
// TIKTOK VIDEOS & STATS - ADD NEW VIDEOS HERE
// ==========================================
// Videos are stored in /public/videos/ folder
// Simply add the filename here to display in the carousel
export const tiktokVideos = [
  "/videos/1.mp4",
  "/videos/2.mp4",
  "/videos/3.mp4",
  "/videos/4.mp4",
];

export const tiktokStats = {
  followers: 40000,
  totalViews: 4000000,
  startedYear: 2018,
  yearsExperience: new Date().getFullYear() - 2018,
};
