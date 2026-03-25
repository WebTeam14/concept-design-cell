import team1 from "@/assets/team-1.png";
import team2 from "@/assets/team-2.png";
import team3 from "@/assets/team-3.png";

export interface Member {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const teamMembers: Member[] = [
  {
    id: "1",
    name: "Director",
    role: "Founder & Principal Architect",
    bio: "With over 20 years of experience, Director leads the firm with a vision for sustainable and innovative architectural solutions.",
    image: team1,
  },
  {
    id: "2",
    name: "Architect",
    role: "Senior Architect",
    bio: "ABC specializes in residential design, blending contemporary aesthetics with functional living spaces.",
    image: team2,
  },
  {
    id: "3",
    name: "Interior Designer",
    role: "Interior Design Lead",
    bio: "Test brings spaces to life with his keen eye for detail, materials, and textures.",
    image: team3,
  },
];
