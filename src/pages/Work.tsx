import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { productProjects, visualProjects, type WorkProject } from '@/data/workProjects';

interface ProjectGroupProps {
  eyebrow: string;
  title: string;
  description: string;
  projects: WorkProject[];
}

const ProjectGroup = ({ eyebrow, title, description, projects }: ProjectGroupProps) => (
  <section className="border-t border-editorial-line py-16 md:py-24" aria-labelledby={`${eyebrow}-heading`}>
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-editorial-muted">{eyebrow}</p>
      <h2 id={`${eyebrow}-heading`} className="text-3xl font-medium text-editorial-fg md:text-4xl">{title}</h2>
      <p className="mt-3 text-lg leading-relaxed text-editorial-muted">{description}</p>
    </div>
    <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Link key={project.path} to={project.path} className="group block">
          <div className={`mb-5 aspect-[4/3] overflow-hidden rounded-lg ${project.path === '/mobile-apps' ? 'bg-editorial-media' : 'bg-editorial-soft'}`}>
            <img src={project.image} alt={`${project.title} project preview`} loading={project.path === '/mobile-apps' ? 'eager' : 'lazy'} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-editorial-muted">{project.meta}</p>
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-medium text-editorial-fg transition-colors group-hover:text-editorial-accent">{project.title}</h3>
            <ArrowUpRight className="mt-1 shrink-0 text-editorial-muted transition-colors group-hover:text-editorial-fg" size={18} aria-hidden="true" />
          </div>
          <p className="mt-2 leading-relaxed text-editorial-muted">{project.description}</p>
        </Link>
      ))}
    </div>
  </section>
);

export default Work;
