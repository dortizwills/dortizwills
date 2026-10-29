# Homepage media, shared footer, and Work page

## What will change
- Replace the Grammy Museum homepage still image with its existing looping project video.
- Move the homepage footer into one shared footer displayed beneath every page.
- Simplify the main navigation to **Work**, **About**, and **Let's Talk** on desktop and mobile.
- Add a dedicated **Work** page linked from the navigation.
- Present every existing case study on the Work page in two clearly labeled groups: **Product Designs** and **Visual Designs**.

## Experience details
- Work cards will use the current editorial visual style, existing project images, concise descriptions, and direct links to each case study.
- The Work navigation item will remain visibly active on the Work page and individual project pages.
- The shared footer will preserve the current portfolio, contact, and work links without duplicating it on the homepage.
- Existing `/product-designs` and `/graphic-designs` links will continue working.

## Technical details
- Create reusable shared footer and project-card data modules.
- Add a `/work` route and grouped Work page.
- Update the application shell so navigation and footer wrap every route.
- Remove the homepage-local footer and switch the Grammy card to the existing Grammy Museum MP4.
- Verify the homepage, Work page, a case-study page, mobile navigation, media playback, and build status.
