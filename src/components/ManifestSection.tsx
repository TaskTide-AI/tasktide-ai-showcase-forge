
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, FileStack, BarChartBig, Workflow } from "lucide-react";

const ManifestSection = () => {  return (
    <section className="animate-bg-panel relative overflow-hidden">
      {/* Removed gradient background div as it's replaced by animated background */}
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Tailored Workflow Solutions for Your Business
            </h2>
            <p className="text-gray-300 text-lg mb-6 animate-text" style={{ animationDelay: '0.2s' }}>
              We provide a range of custom and integrated solutions tailored to your business data, 
              helping you focus on growth while we handle the automation.
            </p>
            <Button className="mt-4 bg-gradient-to-r from-tasktide-teal to-tasktide-blue hover:shadow-lg hover:shadow-tasktide-teal/20 transition-all duration-300 animate-text" style={{ animationDelay: '0.3s' }}>
              Explore Solutions <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: <FileStack className="text-tasktide-orange h-8 w-8" />,
                title: "Custom Integrations",
                description: "Connect your existing tools and data sources seamlessly."
              },
              {
                icon: <BarChartBig className="text-tasktide-teal h-8 w-8" />,
                title: "Data-Driven Insights",
                description: "Make decisions based on real-time analytics and reporting."
              },
              {
                icon: <Workflow className="text-tasktide-orange h-8 w-8" />,
                title: "Workflow Automation",
                description: "Eliminate repetitive tasks with intelligent automation."
              },
              {
                icon: <Zap className="text-tasktide-teal h-8 w-8" />,
                title: "Instant Solutions",
                description: "Deploy ready-to-use tools that solve common challenges."
              }
            ].map((item, index) => (
              <div 
                key={item.title} 
                className="glass-card p-6 rounded-xl transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-tasktide-teal/10 animate-card" 
                style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManifestSection;
