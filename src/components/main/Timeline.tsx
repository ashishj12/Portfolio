'use client';

import { motion } from 'framer-motion';
import { FC, JSX } from 'react';
import Image from 'next/image';
import { Timeline as TimelineComponent } from '@/components/sub/ui/timeline';
import { FaBriefcase, FaBuilding, } from 'react-icons/fa';

export interface TimelineItem {
  id: number;
  type: 'work' | 'project';
  title: string;
  company: string;
  location: string;
  date: string;
  imageURL: string;
  description: string;
  achievements: string[];
  icon: JSX.Element;
  companyIcon: JSX.Element;
}

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    type: 'work',
    title: 'Bachelor of Technology in Computer Science & Engineering',
    company: 'SBCET',
    location: 'Jaipur, India',
    date: 'Oct 2021 - May 2025',
    imageURL: '/sbcet.svg',
    description: 'Specialized in Backend Development, Data Structures, Algorithms, and Docker.',
    achievements: [
      'Graduated with First Class, GPA: 7.82/10.',
      'Led a team of 5 to develop a image based attendance system using ML and MERN stack.',
      'College Level SIH Winner 2024 - Developed an Portal for Innovation Excellence Indicators.',
    ],
    icon: <FaBriefcase className="w-6 h-6 text-primary" />,
    companyIcon: <FaBuilding className="w-8 h-8 text-blue-500" />,
  },
  {
    id: 2,
    type: 'work',
    title: 'Summer Intern - Backend Developer',
    company: 'TECHOCTANET SERVICES PVT LTD.',
    location: 'Remote',
    date: 'July 2024 - Sep 2024',
    imageURL: '/octanet.jpeg',
    description: 'Worked on enhancing backend services and optimizing database queries.',
    achievements: [
      'Developed RESTful APIs using Node.js and Express.',
      'Worked with MongoDB to optimize data retrieval and storage.',
      'Machine Learning model integration for data analysis.',
    ],
    icon: <FaBriefcase className="w-6 h-6 text-primary" />,
    companyIcon: <FaBuilding className="w-8 h-8 text-orange-500" />,
  },
];

export const TimelineElement: FC<{ item: TimelineItem; index: number }> = ({ item, index }) => (
  <div className="space-y-6" key={index}>
    <div className="flex items-center gap-4">
      {item.type === 'work' && (
        <Image
          src={item.imageURL}
          alt={`${item.company} Logo`}
          width={48}
          height={48}
          className="rounded-md shadow bg-muted p-1"
        />
      )}
      <div>
        <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
        <p className="text-sm text-muted-foreground">
          {item.company} • {item.location}
        </p>
        <p className="text-sm text-muted-foreground">{item.date}</p>
      </div>
    </div>

    <p className="text-sm text-muted-foreground">{item.description}</p>

    <ul className="list-disc pl-5 space-y-1 text-sm text-foreground">
      {item.achievements.map(ach => (
        <li key={ach}>{ach}</li>
      ))}
    </ul>

    {item.type === 'project' && (
      <div className="w-full mt-4">
        <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-md bg-background">
          <Image
            src={item.imageURL}
            alt={`${item.title} Architecture`}
            className="object-contain"
            loading="lazy"
            fill
          />
        </div>
      </div>
    )}
  </div>
);

const Timeline: FC = () => {
  const timelineContent = timelineData.map(item => ({
    title: item.date,
    content: <TimelineElement key={item.id} item={item} index={item.id} />,
  }));

  return (
    <section id="experience" className="py-20 bg-background text-foreground transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold tracking-tight text-primary">Education & Experience</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base">
            A journey through my academic and professional milestones, showcasing my growth and
            achievements.
          </p>
        </motion.div>

        <div className="relative w-full">
          <TimelineComponent data={timelineContent} />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
