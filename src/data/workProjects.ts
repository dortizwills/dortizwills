export interface WorkProject {
  title: string;
  description: string;
  path: string;
  image: string;
  meta: string;
}

export const productProjects: WorkProject[] = [
  { title: 'Quick Services', description: 'An express checkout experience that helps automotive shops complete routine orders in minutes.', path: '/product-designs/quick-services', image: '/lovable-uploads/01-express-lane/display-express-lane.png', meta: 'B2B SaaS · Product Design' },
  { title: 'Grammy Museum MS Redesign', description: 'A redesigned museum experience focused on discovery, ticket sales, and donations.', path: '/product-designs/grammy-museum', image: '/lovable-uploads/Grammy Museum/Slide 1.png', meta: 'Web · Brand & Product Design' },
  { title: 'Mobile App Portfolio', description: 'Two mobile concepts developed for potential partnerships across safety and recreation.', path: '/mobile-apps', image: '/lovable-uploads/Mobile 1.3.png', meta: 'Mobile Apps · Concept Design' },
  { title: 'Camping Made Easy', description: 'A guided trip-planning experience that makes a first camping trip feel as approachable as booking a hotel.', path: '/product-designs/camping-app', image: '/lovable-uploads/5c802a04-6f1a-41ea-8c43-d0e7e3d5fdf4.png', meta: 'Mobile App · Product Design' },
  { title: 'Gourmet Recipes', description: 'A subscription-focused recipe experience that turns forgotten meal plans into fresh opportunities.', path: '/product-designs/gourmet-recipes', image: '/lovable-uploads/0fdf6c4c-2976-4b6e-af61-6e5b7ed41be0.png', meta: 'Consumer App · Product Design' },
  { title: 'Adhere+', description: 'A full healthcare SaaS website rebrand and scalable design system.', path: '/product-designs/adhere-plus', image: '/lovable-uploads/8b455223-39de-4e07-bac2-cc46c96927a3.png', meta: 'Healthcare SaaS · Brand & Web' },
];

export const visualProjects: WorkProject[] = [
  { title: 'Data-Driven eBooks', description: 'Hundreds of data points distilled into three clear, accessible eBooks.', path: '/graphic-designs/data-driven-ebooks', image: '/lovable-uploads/3132f8cd-a1d3-4166-8782-cee980f9043d.png', meta: 'Shopmonkey · Editorial Design' },
  { title: 'Email Marketing Campaigns', description: 'Editorial email campaigns created for a busy automotive audience.', path: '/graphic-designs/email-marketing', image: '/lovable-uploads/3b9e02c1-446c-48b1-9c63-d01152ab0b67.png', meta: 'Shopmonkey · Email Design' },
  { title: 'Refining Product Illustrations', description: 'A refined illustration system supporting Shopmonkey’s Series C brand evolution.', path: '/graphic-designs/product-illustrations', image: '/lovable-uploads/baed769b-8cd3-4542-9dc3-80ea9e094ce8.png', meta: 'Shopmonkey · Illustration' },
  { title: 'Social Media Campaigns', description: 'Distinctive campaign work for the automotive software community.', path: '/graphic-designs/social-media', image: '/lovable-uploads/62b8d063-053c-4fa6-a1a2-477546463e23.png', meta: 'Shopmonkey · Campaign Design' },
  { title: 'Case Studies', description: 'Customer stories capturing measurable success across automotive shops.', path: '/graphic-designs/case-studies', image: '/lovable-uploads/f79e2d2b-248a-4a89-9a44-ffa1e56eba9c.png', meta: 'Shopmonkey · Editorial Design' },
  { title: 'Event Designs', description: 'Friendly, memorable booth and event design for the automotive industry’s largest trade show.', path: '/graphic-designs/event-designs', image: '/lovable-uploads/cbf46393-8c18-41e4-8e0b-ef504b5d046e.png', meta: 'Shopmonkey · Environmental Design' },
];
