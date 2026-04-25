import projectsData from "./projects.json";

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  images: string[];
  description: string;
  status?: string;
}

// ─── Automated Image Discovery ────────────────────────────────────────────────
// This line tells Vite to find all images in the assets folder automatically.
// You no longer need to import images one by one at the top of the file.
const allImages = import.meta.glob("/src/assets/**/*.{jpg,jpeg,png,JPG,JPEG,PNG}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

// Helper to convert the automated image pool into a list for each project
const getProjectImages = (folderName: string, projectId: string) => {
  const images: string[] = [];
  const searchPath = folderName.toLowerCase();
  
  // Special handling for legacy names or specific mappings if needed
  // But generally, we look for images where the path contains the folder name
  Object.keys(allImages).forEach((path) => {
    const lowerPath = path.toLowerCase();
    
    // Check if the image belongs to this project's folder
    // We check if the folder name is part of the path
    if (lowerPath.includes(searchPath)) {
      // For projects with multiple images in one folder (like Taloja/Completed), 
      // we can add more specific logic. But for a start, this picks up all images in that folder.
      
      // If the folder is generic (like "Completedproject"), we might need to match 
      // specific filename patterns if multiple projects share a folder.
      // But looking at your current data, many projects share "Completedproject" folder.
      
      // I'll add a check: if it's in the root "Completedproject", match the Title or typical filename keywords
      if (searchPath === "completedproject") {
        // This is a bit tricky for the "100+ projects" case if they are all in one folder.
        // RECOMMENDATION: Give each project its own subfolder for the best automation.
        
        // For now, I'll match based on the images you had mapped manually.
        // Actually, for the existing ones, I'll keep them working by checking filename keywords.
        const fileName = path.split("/").pop()?.toLowerCase() || "";
        const titleKeywords = projectId.split("-");
        
        // If any keyword matches the filename, include it
        if (titleKeywords.some(kw => fileName.includes(kw))) {
          images.push(allImages[path]);
        }
      } else {
        // For projects with dedicated folders (Ongoing projects), just take everything in that folder
        images.push(allImages[path]);
      }
    }
  });
  
  return images;
};

// ─── Dynamic Project Generation ───────────────────────────────────────────────
export const allProjects: Project[] = projectsData.map((p: any) => ({
  id: p.id,
  title: p.title,
  category: p.category,
  location: p.location,
  year: p.year,
  description: p.description,
  status: p.status,
  images: getProjectImages(p.imageFolder, p.id)
}));

export const completedProjects = allProjects.filter(p => p.status === "completed");
export const ongoingProjects = allProjects.filter(p => p.status === "ongoing");
