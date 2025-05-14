
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const teamMembers = [
  {
    id: 'member1',
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    bio: 'Alex has over 15 years of experience in enterprise software and automation solutions. Previously led digital transformation initiatives at Fortune 500 companies.',
    category: 'leadership'
  },
  {
    id: 'member2',
    name: 'Sarah Chen',
    role: 'CTO',
    bio: 'With a Ph.D. in Machine Learning, Sarah oversees all technical aspects of our AI implementations and ensures we stay at the cutting edge of technology.',
    category: 'leadership'
  },
  {
    id: 'member3',
    name: 'Michael Rodriguez',
    role: 'Lead AI Engineer',
    bio: 'Michael specializes in natural language processing and conversational AI interfaces, having developed multiple award-winning AI systems.',
    category: 'developers'
  },
  {
    id: 'member4',
    name: 'Priya Patel',
    role: 'Senior Automation Architect',
    bio: 'Priya has designed and implemented automation solutions for over 50 enterprise clients, with expertise in RPA and workflow optimization.',
    category: 'developers'
  },
  {
    id: 'member5',
    name: 'David Kim',
    role: 'UX/UI Designer',
    bio: 'David ensures that all our automation solutions are intuitive and user-friendly, with a background in cognitive psychology and human-computer interaction.',
    category: 'designers'
  },
  {
    id: 'member6',
    name: 'Emma Wilson',
    role: 'Project Manager',
    bio: 'Emma excels at coordinating complex implementation projects and ensuring on-time, on-budget delivery with maximum client satisfaction.',
    category: 'management'
  }
];

const TeamMemberCard = ({ member, index }: { member: typeof teamMembers[0]; index: number }) => {
  const initials = member.name
    .split(' ')
    .map(name => name[0])
    .join('');

  return (
    <Card className="card-hover animate-card glass-card" id={member.id} style={{ animationDelay: `${index * 0.1}s` }}>
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <Avatar className="h-24 w-24 mb-4 bg-tasktide-teal/20">
            <AvatarFallback className="bg-tasktide-teal text-white text-lg">
              {initials}
            </AvatarFallback>
          </Avatar>
          <h3 className="text-xl font-semibold mb-1 text-tasktide-teal">{member.name}</h3>
          <p className="text-tasktide-teal/80 font-medium mb-4">{member.role}</p>
          <p className="text-gray-300">{member.bio}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const PeopleSection = () => {
  return (
    <section id="people" className="animate-bg-panel">
      <div className="section-container animate-on-scroll">
        <h2 className="section-title text-center animate-text">Our Team</h2>
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12 animate-text" style={{ animationDelay: '0.2s' }}>
          Meet the experts behind TaskTide AI's successful automation solutions.
        </p>

        <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto mb-16 animate-on-scroll" style={{ animationDelay: '0.3s' }}>
          <AccordionItem value="leadership" id="leadership" className="border-tasktide-teal/30">
            <AccordionTrigger className="text-xl font-medium text-tasktide-teal px-4">Leadership Team</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                {teamMembers
                  .filter(member => member.category === 'leadership')
                  .map((member, index) => (
                    <TeamMemberCard key={member.id} member={member} index={index} />
                  ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="developers" id="developers" className="border-tasktide-teal/30">
            <AccordionTrigger className="text-xl font-medium text-tasktide-teal px-4">Development Team</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                {teamMembers
                  .filter(member => member.category === 'developers')
                  .map((member, index) => (
                    <TeamMemberCard key={member.id} member={member} index={index} />
                  ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="designers" className="border-tasktide-teal/30">
            <AccordionTrigger className="text-xl font-medium text-tasktide-teal px-4">Design Team</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                {teamMembers
                  .filter(member => member.category === 'designers')
                  .map((member, index) => (
                    <TeamMemberCard key={member.id} member={member} index={index} />
                  ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="management" className="border-tasktide-teal/30">
            <AccordionTrigger className="text-xl font-medium text-tasktide-teal px-4">Project Management</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                {teamMembers
                  .filter(member => member.category === 'management')
                  .map((member, index) => (
                    <TeamMemberCard key={member.id} member={member} index={index} />
                  ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default PeopleSection;
