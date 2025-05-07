
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

const TeamMemberCard = ({ member }: { member: typeof teamMembers[0] }) => {
  const initials = member.name
    .split(' ')
    .map(name => name[0])
    .join('');

  return (
    <Card className="card-hover" id={member.id}>
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <Avatar className="h-24 w-24 mb-4">
            <AvatarFallback className="bg-tasktide-teal text-white text-lg">
              {initials}
            </AvatarFallback>
          </Avatar>
          <h3 className="text-xl font-semibold mb-1 text-tasktide-blue">{member.name}</h3>
          <p className="text-tasktide-teal font-medium mb-4">{member.role}</p>
          <p className="text-gray-600">{member.bio}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const PeopleSection = () => {
  return (
    <section id="people" className="bg-white">
      <div className="section-container">
        <h2 className="section-title text-center">Our Team</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Meet the experts behind TaskTide AI's successful automation solutions.
        </p>

        <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto mb-16">
          <AccordionItem value="leadership" id="leadership">
            <AccordionTrigger className="text-xl font-medium text-tasktide-blue">Leadership Team</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                {teamMembers
                  .filter(member => member.category === 'leadership')
                  .map(member => (
                    <TeamMemberCard key={member.id} member={member} />
                  ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="developers" id="developers">
            <AccordionTrigger className="text-xl font-medium text-tasktide-blue">Development Team</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                {teamMembers
                  .filter(member => member.category === 'developers')
                  .map(member => (
                    <TeamMemberCard key={member.id} member={member} />
                  ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="designers">
            <AccordionTrigger className="text-xl font-medium text-tasktide-blue">Design Team</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                {teamMembers
                  .filter(member => member.category === 'designers')
                  .map(member => (
                    <TeamMemberCard key={member.id} member={member} />
                  ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="management">
            <AccordionTrigger className="text-xl font-medium text-tasktide-blue">Project Management</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                {teamMembers
                  .filter(member => member.category === 'management')
                  .map(member => (
                    <TeamMemberCard key={member.id} member={member} />
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
