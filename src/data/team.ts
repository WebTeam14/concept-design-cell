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
    name: "Arch. Piyush Tak.",
    role: "Principal Architect",
    bio: "Working since 2002 in Navi Mumbai, the Principal Architect brings over two decades of professional experience in architecture and project design. With proven expertise in planning and designing commercial, residential, industrial, and institutional projects, he has successfully delivered numerous developments distinguished by functional efficiency, aesthetic appeal, and compliance with statutory norms, combined with strong project execution skills, ensure innovative and practical design solutions tailored to each client’s unique requirements.His comprehensive understanding and specialized expertise in Redevelopment projects enable him to effectively balance design innovation with regulatory compliance and on-ground feasibility. He has a deep insight into the complexities of society redevelopment, including stakeholder coordination, space optimization, and phased construction planning.<br /> His strategic approach ensures that every project not only meets design aspirations but also maximizes functional efficiency, sustainability, and long-term value for all stakeholders.",
    image: team1,
  },
  {
    id: "2",
    name: "Arch. Minakshi  Patil.",
    role: "Associate Architect",
    bio: "Associate Architect",
    image: team2,
  },

];
