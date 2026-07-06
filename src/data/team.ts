import team1 from "@/assets/Ar.PiyushTak (2).jpeg";
//import minakshi from "@/assets/Ar.MinakshiPatil.jpeg";

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
  }
  // {
  //   id: "2",
  //   name: "Arch. Minakshi Patil.",
  //   role: "Associate Architect",
  //   bio: "Working since 2006, the Architect possesses extensive experience in the planning, design, and execution of diverse architectural projects. With a vast knowledge of construction processes and site coordination, she ensures the seamless integration of design intent with on-site implementation. Her multidisciplinary exposure across residential, commercial, industrial, and institutional sectors enables her to deliver practical, efficient, and aesthetically balanced architectural solutions.<br />Her strong understanding of building materials, services integration, and local development regulations supports effective project delivery from concept to completion. With a keen eye for detail and commitment to design excellence, she consistently aims to create spaces that are functional, sustainable, and contextually responsive.",
  //   image: minakshi,
  // }
];
