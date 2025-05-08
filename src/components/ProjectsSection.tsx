
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projects = [
  {
    id: 'project1',
    title: 'ERP System Automation',
    description: 'Implemented AI-powered automation for a manufacturing company\'s ERP system, reducing manual data entry by 85% and improving accuracy.',
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

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  return (
    <Card className="card-hover overflow-hidden animate-card glass-card" 
          id={project.id} 
          style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="aspect-video bg-tasktide-teal/20 flex items-center justify-center">
        <div className="text-tasktide-teal font-medium">{project.videoPlaceholder}</div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-tasktide-teal">{project.title}</h3>
        <p className="text-gray-300">{project.description}</p>
        <div className="mt-4">
          <button className="text-tasktide-teal hover:text-tasktide-orange transition-colors font-medium">
            View Case Study →
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Filter projects based on the active category
  const getFilteredProjects = (category: string) => {
    return category === "all" 
      ? projects 
      : projects.filter(project => project.category === category);
  };

  return (
    <section id="projects" className="bg-dark-400 py-16">
      <div className="section-container animate-on-scroll">
        <h2 className="section-title text-center animate-text text-tasktide-teal">Our Projects</h2>
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12 animate-text" style={{ animationDelay: '0.2s' }}>
          Explore our portfolio of successful automation projects that have transformed businesses across industries.
        </p>
        
        <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto mb-12 animate-on-scroll" style={{ animationDelay: '0.3s' }}>
          <TabsList className="grid grid-cols-4 mb-8 bg-dark-300">
            <TabsTrigger 
              value="all" 
              onClick={() => setActiveCategory("all")} 
              className="data-[state=active]:bg-tasktide-blue data-[state=active]:text-white"
            >
              All
            </TabsTrigger>
            <TabsTrigger 
              value="enterprise" 
              onClick={() => setActiveCategory("enterprise")} 
              className="data-[state=active]:bg-tasktide-blue data-[state=active]:text-white"
            >
              Enterprise
            </TabsTrigger>
            <TabsTrigger 
              value="ai" 
              onClick={() => setActiveCategory("ai")} 
              className="data-[state=active]:bg-tasktide-blue data-[state=active]:text-white"
            >
              AI Solutions
            </TabsTrigger>
            <TabsTrigger 
              value="workflow" 
              onClick={() => setActiveCategory("workflow")} 
              className="data-[state=active]:bg-tasktide-blue data-[state=active]:text-white"
            >
              Workflow
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getFilteredProjects("all").map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="enterprise" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getFilteredProjects("enterprise").map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="ai" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getFilteredProjects("ai").map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="workflow" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getFilteredProjects("workflow").map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;
