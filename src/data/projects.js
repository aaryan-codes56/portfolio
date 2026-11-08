// Project content, checked against each repository's code and commit history.
// To add a project, add an entry here with its images in src/assets/projects/.
// `contribution` and `change` are optional. Leave them out rather than guessing.

export const projects = [
  {
    slug: 'poppinflea',
    title: 'PoppinFlea',
    published: true,
    summary:
      'Table booking for a three-day event run by Garda Patna and Poppin Event, with payment checks and a door dashboard for staff.',
    meta: 'Freelance, solo developer, December 2025',
    role: 'Solo developer',
    date: 'December 2025',
    stack: ['Next.js', 'Google Sheets API', 'Cloudinary', 'Nodemailer', 'CSS Modules'],
    image: { name: 'poppin', alt: 'PoppinFlea booking form with date, seating area and colour-coded time slots', height: 900 },
    gallery: [{ name: 'poppin-home', alt: 'PoppinFlea landing page with the event description', height: 900 }],
    links: { live: 'https://poppinflea.in/', code: 'https://github.com/aaryan-codes56/poppin-flea' },
    problem:
      'Organisers had a fixed number of seats across two areas and six evening slots. They needed to take bookings, confirm UPI payments by hand and still fit in walk-ins on the day.',
    what:
      'Guests choose a date, slot and area, see how full it is, pay by UPI and upload proof. Staff verify payments, check guests in, mark tables free and add walk-ins from an admin dashboard.',
    contribution:
      'I built the whole product: booking flow, API routes, Google Sheets storage, transactional emails and the admin dashboard. I also ran branding and social for the event.',
    trace: [
      { label: 'Check slots', code: 'GET /api/getSlots', detail: 'Adds up adults per slot and area, and returns green, yellow or red. Pending bookings count, so an unverified payment still holds its seats.' },
      { label: 'Submit', code: 'POST /api/createBooking', detail: 'Parses the multipart form, rejects any date or slot outside the event, and uploads the payment screenshot to Cloudinary.' },
      { label: 'Enforce capacity', code: 'Sheet1!A:I', detail: 'Reads the sheet again on the server and applies the limit: 16 adults indoors, 4 in the library. A full slot replies with how many places are left.' },
      { label: 'Verify payment', code: 'POST /api/confirmPayment', detail: 'The booking starts as Pending Verification. Staff compare the UPI reference and screenshot, then move it to Reserved.' },
      { label: 'Confirm', code: 'nodemailer', detail: 'The guest gets an email with a reference ID. Cancelling from the dashboard sends a notice too.' },
    ],
    features: [
      'Live availability for every slot and seating area',
      'UPI payment proof uploaded with the booking',
      'Booking lifecycle tracked from pending to reserved, arrived, completed or cancelled',
      'On-the-spot registration for walk-in guests',
      'Confirmation and cancellation emails with reference IDs',
    ],
    challenges: [
      { title: 'Capacity rules on top of a spreadsheet', body: 'Sheets enforces nothing, so the API does. Every booking re-reads the sheet and sums adults for that exact date, slot and area before appending a row.' },
      { title: 'A failed upload should not lose a booking', body: 'Cloudinary errors are caught and logged, and the booking continues. Staff can still reconcile it from the UPI transaction ID.' },
      { title: 'Staff working a busy door', body: 'Status changes update the dashboard immediately and sync to Sheets in the background, so nobody waits on a spreadsheet round trip with a queue in front of them.' },
    ],
    change:
      'Reading the sheet and then appending is not atomic, so two simultaneous bookings could both pass the capacity check. A database transaction would close that gap.',
  },
  {
    slug: 'rexai',
    title: 'RexAI',
    published: true,
    summary:
      'A career guidance platform with AI-generated courses, industry interview practice and a resume builder.',
    meta: 'Solo project, live, November 2025 to January 2026',
    role: 'Solo developer',
    date: 'November 2025 to January 2026',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Gemini API', 'JWT'],
    image: { name: 'rexai', alt: 'RexAI landing page introducing the AI career coach', height: 900 },
    links: { live: 'https://rexxai.netlify.app/', code: 'https://github.com/aaryan-codes56/rex-ai' },
    problem:
      'Career advice and course lists are generic. People preparing for a role in a specific industry need practice and learning material aimed at that industry.',
    what:
      'After signing in and setting an industry, users get generated courses, ten-question interview quizzes with explanations, salary and trend insights, and resumes they can save and edit.',
    contribution:
      'I built the full stack: the Express API, MongoDB models, JWT auth, Gemini integration and all React screens.',
    trace: [
      { label: 'Wake server', code: 'wakeUpBackend()', detail: 'The free-tier API sleeps. The app pings it on load and tells the user when a cold start is taking a while.' },
      { label: 'Authenticate', code: 'authMiddleware', detail: 'JWT bearer tokens are verified and the user is loaded on every protected route. Passwords use bcrypt.' },
      { label: 'Generate', code: 'POST /api/interview/generate', detail: 'Gemini gets a prompt built from the user\'s industry and skills and is told to return JSON only.' },
      { label: 'Validate', code: 'JSON.parse', detail: 'The reply is sliced to its outermost JSON and its shape is checked before use. If that fails, curated fallback content is served.' },
      { label: 'Store', code: 'Course.insertMany', detail: 'Courses generated for a new category are saved, so later requests read from MongoDB instead of calling the model again.' },
    ],
    features: [
      'AI course generation for each industry',
      'Interview quizzes with answers and explanations',
      'Salary and market insights by role',
      'Resume builder with saved versions',
    ],
    challenges: [
      { title: 'Treating model output as untrusted input', body: 'Models wrap JSON in prose or return a partial shape. Every AI route extracts, parses and validates the response and has a fallback, so a bad reply never breaks the screen.' },
      { title: 'A sleeping backend', body: 'Render free instances take up to a minute to start. An early wake-up call, a two-minute abort and a clear status message keep the first request from looking broken.' },
    ],
    change:
      'Prompt building is repeated across routes. A shared service with schema validation would remove that duplication.',
  },
  {
    slug: 'researchscope',
    title: 'ResearchScope AI',
    summary:
      'An agentic research assistant that turns a medical question into a sourced report, using classical NLP before any language model is involved.',
    meta: 'Team project, 2026',
    role: 'Team project',
    date: 'February to April 2026',
    stack: ['Python', 'LangGraph', 'Groq', 'Streamlit', 'NLTK', 'scikit-learn'],
    image: { name: 'researchscope', alt: 'ResearchScope AI application running on Streamlit', height: 900 },
    links: { live: 'https://researchscope2.streamlit.app/', code: 'https://github.com/AradhyaTiwari10/researchscope-nlp-healthcare' },
    problem:
      'Medical research is spread across many sources, and a language model on its own can produce confident summaries that are not anchored in any of them.',
    what:
      'Given a healthcare question, the agent finds and reads trusted articles, scores their sentences and topics statistically, then writes a structured report that can be exported as a PDF.',
    trace: [
      { label: 'Check scope', code: 'is_medical_query()', detail: 'A deterministic check confirms the question is medical. Anything else is rejected before any search runs.' },
      { label: 'Search', code: 'search_web()', detail: 'DuckDuckGo retrieval gathers source URLs for the question.' },
      { label: 'Extract', code: 'extract_multiple()', detail: 'Newspaper3k downloads each page and strips it to clean article text.' },
      { label: 'Analyse', code: 'process_articles()', detail: 'TF-IDF picks the most informative sentences, and LDA groups the sources into topics.' },
      { label: 'Report', code: 'llama-3.3-70b-versatile', detail: 'Groq writes the report section by section from the extracted summaries.' },
    ],
    features: [
      'LangGraph state machine with explicit nodes and edges',
      'Out-of-scope questions rejected deterministically',
      'Step-by-step mode that shows the pipeline as it runs',
      'PDF export of the finished report',
    ],
    challenges: [
      { title: 'Anchoring the model in evidence', body: 'The language model only sees sentences that classical NLP has already selected from the sources, which limits how far it can drift from them.' },
      { title: 'Keeping long reports detailed', body: 'Report generation is split into smaller prompts for each section, so no part gets squeezed out of a single long response.' },
    ],
  },
  {
    slug: 'uk-road-safety',
    title: 'UK Road Safety Analysis',
    summary:
      'Cleaning, statistical analysis and a Tableau dashboard of UK road accidents, covering severity, timing and speed-limit risk.',
    meta: 'Team project, report and presentation, 2026',
    role: 'Report and presentation',
    date: 'April 2026',
    stack: ['Python', 'Pandas', 'NumPy', 'SciPy', 'Seaborn', 'Tableau'],
    image: { name: 'uk-road-safety', alt: 'UK Road Safety Tableau dashboard with accident totals, yearly trends and fatal rate by speed limit', height: 900 },
    links: {
      live: 'https://public.tableau.com/app/profile/dev.kothari/viz/UKAccidentAnalysis2_17774736712620/Dashboard1',
      code: 'https://github.com/Deepanshu-Nst/SectionE_G-4_UK-Road-Safety',
    },
    liveLabel: 'Open dashboard',
    problem:
      'Large volumes of accident data exist, but without structured analysis it is hard to see where serious accidents happen, why severity rises and where to intervene first.',
    what:
      'Raw accident records are cleaned and analysed in Python, tested statistically, and published as an interactive Tableau dashboard with KPIs and trends for decision-makers.',
    contribution: 'I worked on the report and presentation.',
    trace: [
      { label: 'Clean', code: 'Scripts/cleaning.ipynb', detail: 'Raw accident records are cleaned and standardised in Pandas.' },
      { label: 'Explore', code: 'Scripts/eda.ipynb', detail: 'Exploratory analysis looks at severity, time periods, weather, light and road conditions.' },
      { label: 'Test', code: 'Scripts/statistical_analysis.ipynb', detail: 'Statistical tests check which of those patterns hold up.' },
      { label: 'Prepare', code: 'UK_Accident_dashboard_ready.csv', detail: 'A separate processed file is shaped specifically for the dashboard.' },
      { label: 'Present', code: 'UK Accident Analysis.twbx', detail: 'Tableau shows accident totals, severity split and fatal rate by year and speed limit.' },
    ],
    features: [
      'End-to-end workflow from raw data to dashboard',
      'KPIs for total accidents, severity share and average casualties',
      'Fatal rate broken down by year and speed limit',
      'Written report and presentation with recommendations',
    ],
    challenges: [
      { title: 'From patterns to evidence', body: 'Statistical testing sits alongside exploration in its own notebook, so conclusions rest on more than a chart that looks convincing.' },
      { title: 'Keeping analysis and dashboard apart', body: 'Cleaned data and dashboard-ready data are separate outputs, so Tableau gets exactly the shape it needs without changing the analysis set.' },
    ],
  },
  {
    slug: 'cardio-risk',
    title: 'Cardiovascular Risk Assessment',
    summary:
      'About 10,000 patient records cleaned and analysed to see how smoking and diabetes relate to disease, heart rate and cholesterol.',
    meta: 'Team project, project files and write-up, 2026',
    role: 'Project files and write-up',
    date: 'February 2026',
    stack: ['Google Sheets', 'Excel', 'Python'],
    image: { name: 'cardio-risk', alt: 'Cardiovascular risk dashboard with patient totals, risk multipliers and charts by smoking and diabetes status', height: 1012 },
    links: {
      live: 'https://docs.google.com/spreadsheets/d/1GaOiBl-1Sb5tEx1u_0V1A0bZIkZrJKNOeL-GtxrP1mQ/edit?gid=670728713#gid=670728713',
      code: 'https://github.com/RahulDwivedi205/G11_DVA_Capstone',
    },
    liveLabel: 'Open dashboard',
    problem:
      'Patient records mix inconsistent labels, units and formats, which makes it hard to compare lifestyle factors with clinical measures reliably.',
    what:
      'A raw patient dataset is standardised and validated, summarised with pivot tables, and presented in a filterable dashboard of disease rate and combined risk.',
    contribution: 'I worked on the project files and write-up.',
    trace: [
      { label: 'Import', code: 'Patient_Health_Records_Raw.csv', detail: 'About 10,000 anonymised records, one row per patient, with 15 documented fields.' },
      { label: 'Standardise', code: 'Gender, Smoking_Status, Diabetic', detail: 'Inconsistent categories, city names and date formats are normalised.' },
      { label: 'Validate', code: 'Systolic_BP, Diastolic_BP, BMI', detail: 'Blood pressure is split into two fields, units are stripped from BMI and medical ranges are checked.' },
      { label: 'Summarise', code: 'Pivot_Table_Analysis.csv', detail: 'Pivot tables compare disease, heart rate and cholesterol across smoking and diabetes groups.' },
      { label: 'Present', code: 'Patient_Health_Records.xlsx', detail: 'A dashboard with filters for smoking, diabetes, disease and high cholesterol.' },
    ],
    features: [
      'Documented data dictionary for all 15 fields',
      'Cleaning rules for categories, dates and units',
      'Combined risk segments for smoking and diabetes',
      'Filterable dashboard of patient and disease metrics',
    ],
    challenges: [
      { title: 'Making messy categories comparable', body: 'Labels such as smoking status and diabetic status had inconsistent values, so they had to be standardised before any group comparison meant anything.' },
      { title: 'Numbers stored as text', body: 'Blood pressure and BMI needed splitting and unit removal so that pivot tables could treat them as numbers.' },
    ],
  },
  {
    slug: 'amara',
    title: 'Amara Home Solutions',
    summary:
      'A multi-page React site for browsing home services and prices, with Clerk sign-up and a working contact form.',
    meta: 'Frontend project, 2025',
    role: 'Frontend developer',
    date: '2025',
    stack: ['React', 'React Router', 'Clerk', 'CSS'],
    image: { name: 'amara', alt: 'Amara home page with service categories', height: 900 },
    links: { live: 'https://amarasolutions.vercel.app/', code: 'https://github.com/aaryan-codes56/amara-home-service' },
    problem:
      'Finding someone for a home repair or cleaning job often means searching across scattered listings, with prices that are hard to compare.',
    what:
      'Visitors browse service categories with prices, create an account through Clerk, view a bookings page and reach support through a contact form.',
    contribution:
      'I built the React frontend: routing, shared layout, service pages, Clerk sign-in and the contact form integration.',
    trace: [
      { label: 'Start', code: 'ClerkProvider', detail: 'The app wraps everything in Clerk and stops early with a clear error if its key is missing.' },
      { label: 'Layout', code: 'Layout.jsx', detail: 'Nested routes share one layout, so navigation stays consistent on every page.' },
      { label: 'Sign up', code: '<SignUp />', detail: 'Clerk handles account creation and sign-in on dedicated routes.' },
      { label: 'Browse', code: '/services', detail: 'Service categories are shown with descriptions and starting prices.' },
      { label: 'Contact', code: 'api.web3forms.com', detail: 'The form posts to Web3Forms and shows the send result on the page.' },
    ],
    features: [
      'Service categories with descriptions and prices',
      'Sign-up and login through Clerk',
      'Nested routing with a shared layout',
      'Contact form with submission feedback',
    ],
    challenges: [
      { title: 'Keeping auth out of the app', body: 'Using Clerk for accounts kept password handling and sessions out of a frontend-only project.' },
    ],
    change:
      'The bookings page uses sample data. A backend with real availability and saved bookings is the next step.',
  },
];

export const featuredProjects = projects;
