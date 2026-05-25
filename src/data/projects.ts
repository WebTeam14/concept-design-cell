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
  plotArea?: string;
  client?: string;
}

// ─── Automated Image Discovery ────────────────────────────────────────────────
// This line tells Vite to find all images in the assets folder automatically.
// You no longer need to import images one by one at the top of the file.
const allImages = import.meta.glob("/src/assets/**/*.{jpg,jpeg,png,JPG,JPEG,PNG}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

// Helper to convert the automated image pool into a list for each project
const getProjectImages = (folderName: string, projectId: string, imageFiles?: string[]) => {
  const images: string[] = [];
  const searchPath = folderName.toLowerCase();
  
  // If specific image files are provided (e.g. for completed projects), use exact matches
  if (imageFiles && imageFiles.length > 0) {
    Object.keys(allImages).forEach((path) => {
      const fileName = path.split("/").pop() || "";
      // Check if the current file is in the list of exact image files for this project
      if (imageFiles.includes(fileName) && path.toLowerCase().includes(searchPath)) {
        images.push(allImages[path]);
      }
    });
    return images;
  }
  
  // Fallback behavior for folders without explicit image files (Ongoing projects)
  Object.keys(allImages).forEach((path) => {
    const lowerPath = path.toLowerCase();
    
    // Check if the image belongs to this project's folder
    if (lowerPath.includes(searchPath)) {
      images.push(allImages[path]);
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
  plotArea: p["plot area"],
  client: p.client,
  images: getProjectImages(p.imageFolder, p.id, p.imageFiles)
}));

export const completedProjects = allProjects.filter(p => p.status === "completed");
export const ongoingProjects = allProjects.filter(p => p.status === "ongoing");
export const liasioningProjects = allProjects.filter(p => p.status === "liasioning");
