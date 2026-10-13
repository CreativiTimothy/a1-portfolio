--Readme document for *Timothy Nguyen*, *timotn14@uci.edu*--

A reminder on academic integrity, as described in the syllabus.

In general, the course staff expects that you will look at code and examples from many online resources as part of the assignments, particularly to resolve syntax and understand frameworks. We expect that you'll use other libraries you find, and will even require it in some assignments. These practices are often critical to the work of developers today. The best developers are adept at interpreting the examples they see, customizing them to their specific situation, and citing their sources so they can find them later. We expect you to do the same.

While learning from examples is encouraged, attempting to pass an existing project or example from the web as your own is not allowed. If you ever have a question about what is or is not appropriate, feel free to ask the course staff!

Talking to classmates about class material, assignment requirements, etc. is a great way to verify ideas and get feedback. But this distinctly does *not* permit attempting to pass off someone else’s code as your own. Talking over ideas and approaches is allowed, but the work that you produce and submit must be your own.

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

11/10
- 1/1 Readme
- 1/2 Basic HTML content
- 1/1 Basic CSS styling
- 1/1 Advanced feature
- 2/2 Responsive layout
- 1/1 Passes validation checks
- 3/2 Embraces spirit of the assignment

2. What (a) basic features, (b) CSS features, and (c) advanced features did you include in your portfolio?

(a) Basic features

- Images: I included a profile photograph, four original artwork images, and social-media logo images with descriptive alt attributes.

- Headings and paragraphs: I used h1 for each page’s main title, h2 and h3 elements for subsections, and paragraphs to present my biography, academic experience, research, creative work, and contact information.

- External links: I included external links to my LinkedIn, GitHub, and YouTube profiles.

- Multiple pages: I created index.html as the main portfolio and research.html as a detailed research page, with navigation links between the two pages.

- Semantic HTML: I organized the website with semantic elements including header, nav, main, section, article, figure, figcaption, and footer.

- Navigation: I included a navigation bar that links to the About, Education, Research, Creative Work, and Contact sections.

- Forms: I included labeled name, email, subject, and message fields in a contact form.

- Embedded content: I embedded YouTube videos for my beatboxing, piano, dance, and handmade Halloween costume projects.

- Accessibility: I included descriptive image alt text, semantic heading levels, form labels, and aria-hidden attributes for decorative emoji icons.

(b) CSS features

- Padding and margins: I adjusted padding, margins, and gaps throughout the website to separate sections and improve readability.

- Custom colors: I created a consistent purple, teal, white, and dark-blue color palette for text, backgrounds, borders, links, and buttons.

- CSS variables: I defined reusable custom properties in :root for colors, shadows, borders, backgrounds, and rounded corners.

- CSS Grid: I used Grid to arrange the introduction, academic cards, research overview, creative-work cards, artwork gallery, contact section, and form fields.

- Flexbox: I used Flexbox to arrange navigation links, academic tags, filter buttons, social-media icons, and footer content.

- Responsive design: I used media queries to change multi-column layouts into single-column layouts on tablets and smartphones.

- Responsive reordering: I used grid-template-areas to place my profile picture immediately after my name on smartphone screens.

- Responsive sizing: I used functions such as clamp(), calc(), and min() to make typography and container dimensions adapt to different screen sizes.

- Image styling: I used aspect-ratio and object-fit to keep the profile picture and artwork thumbnails consistently shaped without stretching them.

- Decorative styling: I used gradients, borders, rounded corners, shadows, and a ::before pseudo-element to create a layered profile-picture design.

- Interactive styling: I used hover effects and CSS transitions on navigation links, academic cards, portfolio cards, filter buttons, and social-media icons.

- Visual separation: I used contrasting light and dark section backgrounds to distinguish the academic, research, creative-work, and contact content.

(c) Advanced features

- Complex navigation: I used Bootstrap to create a responsive navigation bar that collapses into a mobile menu on narrow screens.

- Complex page layout: I created responsive multi-column layouts for the hero, education, research, creative-work, and contact sections.

- Embedded media: I embedded playable YouTube videos directly in the portfolio so visitors can watch my performances without leaving the page.

- Contact form: I created an HTML contact form that collects the visitor’s name, email, subject, and message.

- Form validation: I used required fields, an email input type, and JavaScript with reportValidity() to validate the form before preparing an email.

- JavaScript email preparation: I used JavaScript to collect the contact-form values and generate a mailto URL addressed to my contact email.

- Portfolio filtering: I used JavaScript and data-category attributes to filter projects by All, Music, Dance, Visual Art, and Crafts.

- Interactive artwork gallery: I used JavaScript to let visitors click any of four artwork thumbnails and view the selected image at a larger size.

- Bootstrap modal: I used a Bootstrap modal to display enlarged artwork without sending the visitor to another page.

- Automatic footer year: I used JavaScript and the Date object to update the copyright year automatically.

- Nested selectors: I used nested CSS selectors such as .profile figcaption, .majors .major-icon, .work iframe, and .research-page > h1 to style specific elements without affecting unrelated content.

- Separate research page: I created a dedicated research.html page containing detailed Background, Research Question, Methods, Results, Reflection, and Project Materials sections.

3. Did you ignore any of the warnings or errors presented by the accessibility checker? If so, why does this not seem like an accessibility concern? If it's useful, you can consolidate your thoughts on multiple warnings/errors if the rationale is similar.

Yes, I ignored some warnings because they were general suggestions requiring manual review rather than confirmed errors. For example, my images already have appropriate alt text, my headings describe actual sections, and my links have meaningful purposes. The JavaScript does not create flashing content. I also ignored warnings about site maps and irreversible form submissions because my portfolio has only two clearly linked pages, and the contact form only opens an email draft rather than completing a permanent transaction.

4. How long, in hours, did it take you to complete this assignment?

Total: 11 hours.
Reading instructions, brainstorming, and planning: 30 minutes.
Researching resources / tutorials for some features: 3 hours.
Programming and troubleshooting: 7 hours.
Preparing project for submission: 30 minutes.

5. What online resources did you consult when completing this assignment? (list specific URLs, describe queries to Generative AI, or use of AI-based code completion)

I used generative AI for brainstorming and explaining concepts.

For brainstorming, my original idea was to create a personal website of my own, inspired by Professor Travis Reid's personal website (https://www.lindenreid.com/), an idea I came up by myself with inspiration of Professor Reid. Then, I asked generative AI what HTML/CSS/JS script features would most likely be a good fit for my specific idea of a personal website.

I also asked AI to explain to me how to implement certain features in the assignment, such as the "form" tag for the contact part of my page. For example, AI provided me learning resources (like tutorial websites, mainly https://www.w3schools.com) and explained to me forms (https://www.w3schools.com/html/html_forms.asp) in the context of a contact form. Other requests to AI for resources and explanations included how to use CSS Grid, Flexbox, media queries, reordering for smartphone screens, sizing suggestions (clamp(), calc(), min()), hover effects, Bootstrap menu collapsing and modal, YouTube, embedding, and JavaScript filtering.

6. What classmates or other individuals did you consult as part of this assignment? What did you discuss?

I did not consult with any classmates beyond very general questions like on Slack, such as partial credit (I asked about it), forms in HTML (I answered a question someone asked about it), and an estimate of how long it would take to complete this assignment (I asked).

7. Is there anything special we need to know in order to run your code?

Please open this project using a local web server if possible, such as the Visual Studio Code Live Server extension. Opening index.html directly may cause YouTube’s embedded player to display Error 153 (the video is still playable by clicking on the link, but the embedding may fail). However, the rest of the features should be functional from just opening the file index.html file.

In VS Code:
1) Open the project folder.
2) Click "Go Live" (bottom right of VS Code).
3) The page should open at an address beginning with http://localhost or http://127.0.0.1.