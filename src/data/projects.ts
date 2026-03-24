// ─── Completed Project Images ─────────────────────────────────────────────────
import goaTennant from "@/assets/Completedproject/28-11-2009-Goa tennant.jpg";
import elevation74 from "@/assets/Completedproject/74 elevation-final.jpg";
import img87 from "@/assets/Completedproject/87 (1).JPG";
import conceptDesign from "@/assets/Completedproject/Concept Design - 12 x 15.jpg";
import donBosco from "@/assets/Completedproject/DON BOSCO SCHOOL ,NERUL.jpg";
import g14 from "@/assets/Completedproject/G-14 copy.jpg";
import lawPharmacy from "@/assets/Completedproject/LAW & PHARMACY COLLEGE TALOJA.jpeg";
import mconApartments from "@/assets/Completedproject/M.CON.APARTMENTS.jpg";
import taloja02 from "@/assets/Completedproject/P-11_S-16_Taloja_02.jpg";
import plot79 from "@/assets/Completedproject/PLOT NO 79 - FRONT VIEW - 15.05.24.jpg";
import riddhiSiddhi from "@/assets/Completedproject/RIDDHI  SIDDHI  COMPLEX.jpg";
import shivjay from "@/assets/Completedproject/SHIVJAY COMPLEX.jpg";
import siddhivinayak208 from "@/assets/Completedproject/SIDDHIVINAYAK 208-FINAL.jpg";
import siddhivinayakFinal from "@/assets/Completedproject/SIDDHIVINAYAK-FINAL.jpg";
import smHeight from "@/assets/Completedproject/SM_HEIGHT_.jpg";
import sun333 from "@/assets/Completedproject/SUN_333.JPG";
import sunPushpam from "@/assets/Completedproject/SUN_PUSHPAM.jpg";
import plot101 from "@/assets/Completedproject/plot 101.jpg";
import siddhiHeight from "@/assets/Completedproject/siddhi height.jpg";
import sunrays from "@/assets/Completedproject/sunrays.jpg";

// ─── Ongoing Project Images ──────────────────────────────────────────────────
import jewelDayView from "@/assets/Ongoingprojects/JEWEL OF PANVEL/Day view7500 without logo.jpg";
import jewelElevation2 from "@/assets/Ongoingprojects/JEWEL OF PANVEL/Jewel Of Panvel - Elevation 2.jpg";
import jewelMain from "@/assets/Ongoingprojects/JEWEL OF PANVEL/Jewel Of Panvel.jpg";
import mitkarCommercial from "@/assets/Ongoingprojects/MITKAR COMMERCIAL/Picture2.jpg";
import nerulGymkhana from "@/assets/Ongoingprojects/NERUL GYMKHANA/Picture1.jpg";
import talojaGauriCam4 from "@/assets/Ongoingprojects/TALOJA/GAURI SHANKAR CAM_4.jpg";
import talojaGauriCam1 from "@/assets/Ongoingprojects/TALOJA/GAURI SHANKAR- CAM-1.jpg";

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  images: string[];
  description: string;
}

export const completedProjects: Project[] = [
  {
    id: "goa-tennant",
    title: "Goa Tennant",
    category: "Residential",
    location: "Goa, India",
    year: "2009",
    images: [goaTennant],
    description: "A residential project in Goa blending coastal aesthetics with modern living.",
  },
  {
    id: "74-elevation",
    title: "Plot 74 Elevation",
    category: "Residential",
    location: "Maharashtra, India",
    year: "2022",
    images: [elevation74],
    description: "A striking residential elevation featuring contemporary facade design.",
  },
  {
    id: "concept-design",
    title: "Concept Design",
    category: "Commercial",
    location: "Maharashtra, India",
    year: "2023",
    images: [conceptDesign, img87],
    description: "A concept-driven design showcasing bold architectural ideas and spatial innovation.",
  },
  {
    id: "don-bosco-school",
    title: "Don Bosco School, Nerul",
    category: "Institutional",
    location: "Nerul, Navi Mumbai",
    year: "2020",
    images: [donBosco],
    description: "An institutional building designed to provide a vibrant learning environment for students.",
  },
  {
    id: "g-14",
    title: "G-14 Residency",
    category: "Residential",
    location: "Maharashtra, India",
    year: "2023",
    images: [g14],
    description: "A premium residential complex with modern amenities and elegant facade design.",
  },
  {
    id: "law-pharmacy-college",
    title: "Law & Pharmacy College, Taloja",
    category: "Institutional",
    location: "Taloja, Navi Mumbai",
    year: "2021",
    images: [lawPharmacy, taloja02],
    description: "A purpose-built educational campus for law and pharmacy studies with state-of-the-art facilities.",
  },
  {
    id: "mcon-apartments",
    title: "M.CON. Apartments",
    category: "Residential",
    location: "Maharashtra, India",
    year: "2023",
    images: [mconApartments],
    description: "A modern apartment complex offering spacious living with contemporary architectural language.",
  },
  {
    id: "plot-79",
    title: "Plot No. 79",
    category: "Residential",
    location: "Maharashtra, India",
    year: "2024",
    images: [plot79],
    description: "A residential project featuring a distinctive front elevation with clean lines and modern finishes.",
  },
  {
    id: "riddhi-siddhi-complex",
    title: "Riddhi Siddhi Complex",
    category: "Commercial",
    location: "Maharashtra, India",
    year: "2022",
    images: [riddhiSiddhi],
    description: "A commercial complex designed for retail and office use with a prominent street presence.",
  },
  {
    id: "shivjay-complex",
    title: "Shivjay Complex",
    category: "Commercial",
    location: "Maharashtra, India",
    year: "2021",
    images: [shivjay],
    description: "A mixed-use commercial building with an architecturally bold facade and functional interiors.",
  },
  {
    id: "siddhivinayak",
    title: "Siddhivinayak",
    category: "Residential",
    location: "Maharashtra, India",
    year: "2023",
    images: [siddhivinayak208, siddhivinayakFinal],
    description: "A landmark residential project with a grand elevation and premium living spaces.",
  },
  {
    id: "sm-height",
    title: "SM Height",
    category: "Residential",
    location: "Maharashtra, India",
    year: "2022",
    images: [smHeight],
    description: "A residential tower project designed with attention to vertical aesthetics and space efficiency.",
  },
  {
    id: "sun-333",
    title: "Sun 333",
    category: "Residential",
    location: "Maharashtra, India",
    year: "2021",
    images: [sun333, sunrays],
    description: "A residential project that brings warmth and light into every living space through thoughtful design.",
  },
  {
    id: "sun-pushpam",
    title: "Sun Pushpam",
    category: "Residential",
    location: "Maharashtra, India",
    year: "2023",
    images: [sunPushpam],
    description: "A premium residential development with lush landscaping and a modern architectural language.",
  },
  {
    id: "plot-101",
    title: "Plot 101",
    category: "Residential",
    location: "Maharashtra, India",
    year: "2022",
    images: [plot101],
    description: "A residential design showcasing efficient space utilization and a contemporary exterior finish.",
  },
  {
    id: "siddhi-height",
    title: "Siddhi Height",
    category: "Residential",
    location: "Maharashtra, India",
    year: "2021",
    images: [siddhiHeight],
    description: "A high-rise residential building with a clean, modern silhouette and quality living spaces.",
  },
];

export const ongoingProjects: Project[] = [
  {
    id: "jewel-of-panvel",
    title: "Jewel of Panvel",
    category: "Commercial",
    location: "Panvel, Navi Mumbai",
    year: "2025",
    images: [jewelMain, jewelDayView, jewelElevation2],
    description:
      "A prestigious commercial project in Panvel featuring a modern glass-and-steel facade with premium office and retail spaces.",
  },
  {
    id: "mitkar-commercial",
    title: "Mitkar Commercial",
    category: "Commercial",
    location: "Maharashtra, India",
    year: "2025",
    images: [mitkarCommercial],
    description:
      "A commercial development designed for modern business needs with flexible floor plans and a striking elevation.",
  },
  {
    id: "nerul-gymkhana",
    title: "Nerul Gymkhana",
    category: "Recreational",
    location: "Nerul, Navi Mumbai",
    year: "2025",
    images: [nerulGymkhana],
    description:
      "A recreational and sports facility with state-of-the-art amenities designed to serve the Nerul community.",
  },
  {
    id: "gauri-shankar-taloja",
    title: "Gauri Shankar, Taloja",
    category: "Residential",
    location: "Taloja, Navi Mumbai",
    year: "2026",
    images: [talojaGauriCam1, talojaGauriCam4],
    description:
      "A residential project in Taloja offering spacious apartments with thoughtful design and modern amenities.",
  },
];
