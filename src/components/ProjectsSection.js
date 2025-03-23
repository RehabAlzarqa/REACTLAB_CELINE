import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Project 1",
    description: "This is the first project.",
    imageSrc: "https://via.placeholder.com/300",
  },
  {
    title: "Project 2",
    description: "This is the second project.",
    imageSrc: "https://via.placeholder.com/300",
  },
  // إضافة المزيد من المشاريع حسب الحاجة
];

const ProjectsSection = () => {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={8} p={8}>
      {projects.map((project, index) => (
        <Card 
          key={index}
          title={project.title}
          description={project.description}
          imageSrc={project.imageSrc}
        />
      ))}
    </SimpleGrid>
  );
};

export default ProjectsSection;

