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
    <div className="mb-10 grid gap-4 lg:grid-cols-[1fr_2fr] lg:gap-12">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-editorial-muted">{eyebrow}</p>
      <div>
        <h2 id={`${eyebrow}-heading`} className="text-3xl font-medium text-editorial-fg md:text-4xl">{title}</h2>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-editorial-muted">{description}</p>
      </div>
    </div>
    <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Link key={project.path} to={project.path} className="group block">
          <div className="mb-5 aspect-[4/3] overflow-hidden rounded-lg bg-editorial-soft">
            <img src={project.image} alt={`${project.title} project preview`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
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

const Work = () => (
  <main className="mx-auto max-w-[1600px] px-4 pb-8 pt-28 md:px-8 md:pt-36">
    <header className="max-w-4xl pb-16 md:pb-24">
      <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-editorial-muted">Selected work</p>
      <h1 className="text-5xl font-medium leading-[1.05] text-editorial-fg md:text-6xl lg:text-7xl">Product thinking with a strong visual point of view.</h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-editorial-muted md:text-xl">Explore product experiences and visual systems designed for growing teams, established brands, and everyday people.</p>
    </header>
    <ProjectGroup eyebrow="01" title="Product Designs" description="Digital products shaped around clear workflows, measurable outcomes, and thoughtful interaction." projects={productProjects} />
    <ProjectGroup eyebrow="02" title="Visual Designs" description="Brand systems and campaign work built to make complex ideas memorable and useful." projects={visualProjects} />
  </main>
);

export default Work;
