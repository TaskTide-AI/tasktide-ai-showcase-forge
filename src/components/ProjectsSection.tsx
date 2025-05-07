
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projects = [
  {
    id: 'project1',
    title: 'ERP System Automation',
    description: 'Implemented AI-powered automation for a manufacturing company's ERP system, reducing manual data entry by 85% and improving accuracy.',
    videoPlaceholder: 'Project 1 Video Showcase',
    category: 'enterprise'
  },
  {
    id: 'project2',
    title: 'Customer Service Chatbot',
    description: 'Developed an intelligent chatbot system that handles 70% of customer inquiries automatically, freeing up support staff for complex issues.',
    videoPlaceholder: 'Project 2 Video Showcase',
    category: 'ai'
  },
  {
    id: 'project3',
    title: 'Supply Chain Optimization',
    description: 'Created an intelligent inventory management system that predicts optimal stock levels and automates ordering processes.',
    videoPlaceholder: 'Project 3 Video Showcase',
    category: 'enterprise'
  },
  {
    id: 'project4',
    title: 'HR Onboarding Automation',
    description: 'Streamlined employee onboarding with an automated document processing system that reduced onboarding time by 60%.',
    videoPlaceholder: 'Project 4 Video Showcase',
    category: 'workflow'
  },
  {
    id: 'project5',
    title: 'Predictive Maintenance System',
    description: 'Built an AI-powered system that monitors equipment performance and predicts maintenance needs before failures occur.',
    videoPlaceholder: 'Project 5 Video Showcase',
    category: 'ai'
  },
  {
    id: 'project6',
    title: 'Document Processing Automation',
    description: 'Developed a system that automatically extracts, categorizes and processes information from invoices, receipts and contracts.',
    videoPlaceholder: 'Project 6 Video Showcase',
    category: 'workflow'
  }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <Card className="card-hover overflow-hidden" id={project.id}>
      <div className="aspect-video bg-tasktide-blue/10 flex items-center justify-center">
        <div className="text-tasktide-blue font-medium">{project.videoPlaceholder}</div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-tasktide-blue">{project.title}</h3>
        <p className="text-gray-600">{project.description}</p>
        <div className="mt-4">
          <button className="text-tasktide-teal hover:text-tasktide-orange font-medium">
            View Case Study →
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="bg-gray-50">
      <div className="section-container">
        <h2 className="section-title text-center">Our Projects</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Explore our portfolio of successful automation projects that have transformed businesses across industries.
        </p>
        
        <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto mb-12">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="all" onClick={() => setActiveCategory("all")}>All</TabsTrigger>
            <TabsTrigger value="enterprise" onClick={() => setActiveCategory("enterprise")}>Enterprise</TabsTrigger>
            <TabsTrigger value="ai" onClick={() => setActiveCategory("ai")}>AI Solutions</TabsTrigger>
            <TabsTrigger value="workflow" onClick={() => setActiveCategory("workflow")}>Workflow</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="enterprise" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="ai" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="workflow" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;
