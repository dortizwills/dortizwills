import { FC } from 'react';
import { Link } from 'react-router-dom';

const SiteFooter: FC = () => (
  <footer className="border-t border-editorial-line">
    <div className="mx-auto max-w-[1600px] px-4 py-12 md:px-8">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <div>
          <h2 className="mb-2 text-lg font-medium text-editorial-fg">Daniel Ortiz-Wills</h2>
          <p className="max-w-sm text-sm leading-relaxed text-editorial-muted">
            Product designer turning complex product problems into clear, useful, scalable experiences.
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-editorial-muted">Explore</h2>
          <div className="space-y-2">
            <Link to="/work" className="block text-sm text-editorial-muted transition-colors hover:text-editorial-fg">Work</Link>
            <Link to="/about" className="block text-sm text-editorial-muted transition-colors hover:text-editorial-fg">About</Link>
            <Link to="/resume" className="block text-sm text-editorial-muted transition-colors hover:text-editorial-fg">Resume</Link>
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-editorial-muted">Contact</h2>
          <div className="space-y-2">
            <a href="mailto:dortizwills@gmail.com" className="block text-sm text-editorial-muted transition-colors hover:text-editorial-fg">dortizwills@gmail.com</a>
            <a href="https://www.linkedin.com/in/dortiz-wills" target="_blank" rel="noopener noreferrer" className="block text-sm text-editorial-muted transition-colors hover:text-editorial-fg">LinkedIn</a>
            <Link to="/contact" className="block text-sm text-editorial-muted transition-colors hover:text-editorial-fg">Let&apos;s talk</Link>
          </div>
        </div>
      </div>
      <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-editorial-line pt-8 sm:flex-row">
        <p className="text-xs text-editorial-muted">© 2026 Daniel Ortiz-Wills. All rights reserved.</p>
        <p className="text-xs text-editorial-muted">Product design · Brand systems · Visual design</p>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
