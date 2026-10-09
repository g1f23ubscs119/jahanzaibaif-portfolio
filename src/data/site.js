export const SITE = {
  name: "Jahanzaib Asif",
  role: "Full Stack Web Developer",
  email: "jahanzaibasif55@gmail.com",
  phone: "+92 328 9096100",
  whatsapp: "923289096100",
  github: "https://github.com/g1f23ubscs119",
  linkedin: "https://www.linkedin.com/",
  cv: "/CV.pdf",
};

const unsplash = (id, w) =>
  "https://images.unsplash.com/" +
  id +
  "?auto=format&fit=crop&w=" +
  (w || 1400) +
  "&q=80";

export const IMAGES = {
  heroMain: unsplash("photo-1498050108023-c5249f4df085", 1000),
  heroSmall: unsplash("photo-1461749280684-dccba630e2f6", 700),
  about: unsplash("photo-1555066931-4365d14bab8c", 1000),
  workspace: unsplash("photo-1517694712202-14dd9538aa97", 1000),
  team: unsplash("photo-1519389950473-47ba0277781c", 1000),
  typing: unsplash("photo-1486312338219-ce68d2c6f44d", 1600),
  office: unsplash("photo-1497366216548-37526070297c", 1600),
  desk: unsplash("photo-1504384308090-c894fdcc538d", 1600),
  meeting: unsplash("photo-1522071820081-009f0129c71c", 1600),
  students: unsplash("photo-1523240795612-9a054b0db644", 1000),
};

export const SKILLS = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "HTML",
  "CSS",
  "Python",
  "C++",
  "WordPress",
  "Vite",
  "AI & Backend",
];

export const EDUCATION = [
  {
    title: "BS Computer Science",
    place: "University of Central Punjab, Gujranwala",
    year: "2023 - 2027",
  },
];

export const PICS = {
  oop: unsplash("photo-1542831371-29b0f74f9713", 900),
  problem: unsplash("photo-1526374965328-7f61d4dc18c5", 900),
  responsive: unsplash("photo-1559028012-481c04fa702d", 900),
  optimize: unsplash("photo-1551288049-bebda4e38f71", 900),
  frontend: unsplash("photo-1515879218367-8466d910aaa4", 900),
  programming: unsplash("photo-1461749280684-dccba630e2f6", 900),
  wordpress: unsplash("photo-1460925895917-afdab827c52f", 900),
  productivity: unsplash("photo-1497366216548-37526070297c", 900),
  expWeb: unsplash("photo-1498050108023-c5249f4df085", 800),
  expSoftware: unsplash("photo-1555066931-4365d14bab8c", 800),
  expWordpress: unsplash("photo-1507238691740-187a5b1d37b8", 800),
};
