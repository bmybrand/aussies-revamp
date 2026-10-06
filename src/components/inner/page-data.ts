import type { InnerPageData } from "./inner-page";

const restaurantImage = "/images/inner/restaurant-hero.png";
const hardwareImage = "/images/inner/hardware-counter-pos.png";
const serviceImage = "/images/inner/services-hero-v2.png";
const healthcareImage = "/images/inner/healthcare-hero-v2.png";
const teamImage = "/images/inner/pizzeria-story.png";

export const restaurantsData: InnerPageData = {
  variant: "restaurants",
  eyebrow: "Aussie's For Restaurants",
  title: "Keep Every Table, Ticket And Team In Sync",
  description: "A restaurant POS built to connect front of house, kitchen operations, online orders, payments and reporting without slowing service down.",
  heroImage: restaurantImage,
  heroAlt: "A prepared restaurant dining room with a point-of-sale terminal",
  metrics: [{ value: "FOH", label: "Tableside service" }, { value: "BOH", label: "Kitchen coordination" }, { value: "ONE", label: "Connected restaurant view" }],
  sectionEyebrow: "Service Without The Scramble",
  sectionTitle: "Everything Your Restaurant Needs In One Place",
  sectionIntro: "From the first order to the final close, give every part of your operation the same accurate, up-to-date information.",
  features: [
    { title: "Tableside Ordering", text: "Take accurate orders, add modifiers, split checks and accept payment without unnecessary trips to the counter." },
    { title: "Kitchen Coordination", text: "Route tickets clearly and keep front-of-house teams informed as orders move through preparation." },
    { title: "Menu Management", text: "Update items, availability, pricing and categories from one organized dashboard." },
    { title: "Online Ordering", text: "Bring pickup and delivery orders into the same operating flow as in-person service." },
    { title: "Team Tools", text: "Support roles, permissions, time tracking and shift-level visibility for busy teams." },
    { title: "Restaurant Reporting", text: "Understand sales mix, popular items, labour patterns and service performance in real time." },
  ],
  journey: { eyebrow: "Front To Back", title: "A Smoother Handoff From Guest To Kitchen", text: "Reduce re-entry, missed modifiers and unclear tickets with a connected service flow designed around restaurant pace.", points: ["Send clear orders directly to production", "Keep menus and availability consistent", "See service and sales performance together"], image: teamImage, imageAlt: "Restaurant team preparing food for service" },
  capabilities: [
    { title: "Built For The Rush", text: "Fast, focused workflows help staff act quickly when queues build and tables fill." },
    { title: "Flexible By Format", text: "Shape the setup around full service, quick service, cafés, bars and multi-station teams." },
    { title: "Ready To Grow", text: "Add devices, order channels and connected tools as your operation becomes more complex." },
  ],
  quote: { text: "We can spend less time chasing tickets and more time looking after the room.", name: "Maya Chen", role: "Independent restaurant owner" },
  faqs: [
    { question: "Can the system support tableside ordering?", answer: "Yes. A mobile setup can help staff take orders, apply modifiers and accept payments closer to the guest." },
    { question: "Can online orders flow into the restaurant?", answer: "Online ordering can be organized alongside in-person sales so teams can manage channels through one workflow." },
    { question: "Can menus be updated in one place?", answer: "Menu items, pricing, categories and availability can be managed centrally across connected ordering experiences." },
    { question: "Which hardware fits a restaurant?", answer: "Countertop stations, handheld devices, kitchen displays and kiosks can be combined around your service model and floor plan." },
  ],
};

export const retailData: InnerPageData = {
  variant: "retail",
  eyebrow: "Aussie's For Retail",
  title: "Turn Every Shelf, Sale And Visit Into Momentum",
  description: "A flexible retail POS that connects checkout, inventory, customer loyalty, returns, reporting and online sales in one dependable system.",
  heroImage: hardwareImage,
  heroAlt: "Modern point-of-sale hardware at a retail counter",
  metrics: [{ value: "SELL", label: "In store and online" }, { value: "TRACK", label: "Inventory in real time" }, { value: "KNOW", label: "Your customers better" }],
  sectionEyebrow: "Retail, Reconnected",
  sectionTitle: "Run The Shop Without Losing Sight Of The Customer",
  sectionIntro: "Move quickly at checkout, understand what is selling, and keep stock and customer activity connected across channels.",
  features: [
    { title: "Inventory Control", text: "Track products, variants, stock levels and item performance with less spreadsheet work." },
    { title: "Fast Checkout", text: "Keep lines moving with clear product lookup, barcode support and flexible payment options." },
    { title: "Simple Returns", text: "Find transactions and handle refunds or exchanges through a consistent team workflow." },
    { title: "Unified Selling", text: "Coordinate in-store and online activity so orders, products and customer records stay aligned." },
    { title: "Customer Loyalty", text: "Create stronger repeat relationships with profiles, rewards and relevant engagement." },
    { title: "Sales Reporting", text: "See product mix, margins, trends and performance across stores and sales channels." },
  ],
  journey: { eyebrow: "Stockroom To Checkout", title: "Know What Is Moving And What Needs Attention", text: "Connect product information with each sale so your team can replenish intelligently and answer customers confidently.", points: ["Monitor stock as sales happen", "Organize variants and product categories", "Bring store and online performance together"], image: restaurantImage, imageAlt: "Customer-facing countertop and payment environment" },
  capabilities: [
    { title: "Built For Product Depth", text: "Handle categories, variants and growing catalogues without making checkout complicated." },
    { title: "Ready For Every Channel", text: "Create a unified view of products and orders across physical and digital storefronts." },
    { title: "Insight You Can Use", text: "Turn transaction activity into clearer decisions about stock, staffing and demand." },
  ],
  quote: { text: "We finally see the shop as one business, whether the customer buys online or at the counter.", name: "Jordan Lee", role: "Independent retailer" },
  faqs: [
    { question: "Can I track product variants?", answer: "Yes. Product records can be organized around size, colour, style and other variants relevant to your catalogue." },
    { question: "Does it support barcode workflows?", answer: "Compatible scanners and product tools can speed up item entry, checkout and inventory updates." },
    { question: "Can online and in-store sales work together?", answer: "Connected commerce tools can coordinate products, orders, customer activity and reporting across channels." },
    { question: "Can staff process returns?", answer: "Returns and refunds can be handled through role-aware workflows that keep the process clear and consistent." },
  ],
};

export const servicesData: InnerPageData = {
  variant: "services",
  eyebrow: "Aussie's For Service Businesses",
  title: "The Easier Way To Book, Serve And Get Paid",
  description: "Appointments, customer details, staff schedules, invoices and payments—working together from the first booking to the final receipt.",
  heroImage: serviceImage,
  heroAlt: "A service business accepting payment from a customer",
  metrics: [{ value: "BOOK", label: "Appointments with clarity" }, { value: "BILL", label: "Invoice with less effort" }, { value: "GROW", label: "Build lasting relationships" }],
  sectionEyebrow: "Your Day, Organized",
  sectionTitle: "Practical Tools For Businesses Built On Service",
  sectionIntro: "Keep the customer experience personal while operational details stay organized behind the scenes.",
  features: [
    { title: "Appointments", text: "Organize bookings, availability and customer schedules in a simple, accessible view." },
    { title: "Fast Invoicing", text: "Create clear invoices and collect payment in person or remotely without duplicating work." },
    { title: "Recurring Payments", text: "Support memberships, plans and repeat services with predictable payment workflows." },
    { title: "Customer Profiles", text: "Keep preferences, visit history and contact information together for better follow-up." },
    { title: "Team Scheduling", text: "Coordinate availability, roles and workloads across employees and locations." },
    { title: "Mobile Checkout", text: "Take payment at the desk, chair, counter, job site or wherever service is completed." },
  ],
  journey: { eyebrow: "Booking To Payment", title: "A Connected Experience For Your Team And Customers", text: "Give staff the context they need while customers move smoothly from scheduling through service and payment.", points: ["Reduce repeated data entry", "Keep customer history easy to find", "See bookings and revenue in context"], image: hardwareImage, imageAlt: "Point-of-sale system ready for a service business" },
  capabilities: [
    { title: "Stay Personal", text: "Keep service warm and human while routine administration becomes easier to manage." },
    { title: "Work From Anywhere", text: "Stay informed at the front desk, between locations or on the move." },
    { title: "Fit Your Workflow", text: "Configure services, staff access, payments and connected apps around how you operate." },
  ],
  quote: { text: "The day feels calmer when bookings, customer notes and payments all live together.", name: "Alex Morgan", role: "Service business operator" },
  faqs: [
    { question: "Can customers pay away from the counter?", answer: "Yes. Mobile devices and remote payment options support businesses working across rooms, locations or job sites." },
    { question: "Can it support appointments and staff schedules?", answer: "Connected scheduling tools can organize availability, bookings and staff assignments around your service model." },
    { question: "Can I create invoices?", answer: "Invoice workflows help request and record payments clearly, including when the customer is not physically present." },
    { question: "Will it work for memberships?", answer: "Recurring payment and customer-management options can support memberships, plans and regular appointments." },
  ],
};

export const healthcareData: InnerPageData = {
  variant: "healthcare",
  eyebrow: "Aussie's For Healthcare Businesses",
  title: "A Calmer Way To Handle Every Payment",
  description: "Clear, flexible payment tools for clinics, allied health providers, wellness practices and care-focused teams.",
  heroImage: healthcareImage,
  heroAlt: "A clinic receptionist helping a patient complete a card payment",
  metrics: [{ value: "CLEAR", label: "Patient-friendly checkout" }, { value: "FLEX", label: "In-person and remote" }, { value: "VIEW", label: "Connected reporting" }],
  sectionEyebrow: "Designed Around Care",
  sectionTitle: "Keep Payment Administration Simple And Professional",
  sectionIntro: "Support staff with straightforward tools while giving patients flexible, familiar ways to complete payment.",
  features: [
    { title: "Flexible Checkout", text: "Accept common payment methods at reception, in a consultation room or through a remote workflow." },
    { title: "Clear Invoicing", text: "Create and track invoices with organized references that make follow-up easier." },
    { title: "Virtual Terminal", text: "Process authorized payments without requiring the patient and card at the same counter." },
    { title: "Recurring Plans", text: "Support approved repeat-payment arrangements for ongoing services or programs." },
    { title: "Team Permissions", text: "Give staff appropriate access based on their role and responsibilities." },
    { title: "Business Reporting", text: "Review transactions, refunds, settlements and trends from a connected dashboard." },
  ],
  journey: { eyebrow: "At Reception And Beyond", title: "Keep Administration From Interrupting Care", text: "A clear payment workflow reduces friction at the desk and makes follow-up easier after the visit.", points: ["Offer familiar payment choices", "Organize transactions and invoices", "Give teams visibility without clutter"], image: restaurantImage, imageAlt: "Professional counter with a compact payment terminal" },
  capabilities: [
    { title: "Respectful By Design", text: "Create a checkout experience that feels calm, clear and appropriate for care settings." },
    { title: "Operational Visibility", text: "Help authorized staff understand payment activity without disconnected records." },
    { title: "Configured With Care", text: "Choose devices and workflows based on your environment and team responsibilities." },
  ],
  quote: { text: "Payment feels like a natural final step instead of another administrative obstacle.", name: "Dr. Sam Patel", role: "Allied health practice owner" },
  faqs: [
    { question: "Can payments be accepted away from reception?", answer: "Portable devices can support authorized payments in different areas of a practice." },
    { question: "Can the system create invoices?", answer: "Invoice tools can help teams request, record and follow up on payments." },
    { question: "Can staff access be controlled?", answer: "Role-based permissions can limit access according to staff responsibilities." },
    { question: "Is this a clinical records system?", answer: "No. Aussie’s POS focuses on payments and business operations; clinical records need a purpose-built system." },
  ],
};

export const productsData: InnerPageData = {
  variant: "products",
  eyebrow: "Aussie's Product Family",
  title: "The Right Device For Every Way You Do Business",
  description: "Build a connected setup from countertop stations, customer displays, handheld terminals, mobile readers, kitchen screens and self-service experiences.",
  heroImage: hardwareImage,
  heroAlt: "A modern point-of-sale terminal on a business counter",
  metrics: [{ value: "GO", label: "Mobile card reader" }, { value: "FLEX", label: "Handheld point of sale" }, { value: "DUO", label: "Two-screen countertop" }],
  sectionEyebrow: "Hardware With Purpose",
  sectionTitle: "Choose Tools That Fit The Work, Not The Other Way Around",
  sectionIntro: "Start with the device your team needs today and build outward with products designed to work as one system.",
  features: [
    { title: "Countertop Stations", text: "Give busy counters a stable workstation for orders, payments, receipts and daily management." },
    { title: "Customer Displays", text: "Let customers review orders, follow prompts and complete payment through a clear experience." },
    { title: "Handheld POS", text: "Take orders, scan items and accept payment throughout the floor or away from the counter." },
    { title: "Mobile Readers", text: "Turn a compatible phone into a compact payment point for markets, events and field work." },
    { title: "Kitchen Displays", text: "Organize production tickets and connect order channels with fulfilment teams." },
    { title: "Self-Service Kiosks", text: "Give customers room to browse, customize and submit orders through a guided experience." },
  ],
  journey: { eyebrow: "One Product Family", title: "Start Focused And Expand Without Rebuilding", text: "A connected device strategy makes it easier to add checkout points, mobile service, production screens and customer-facing tools over time.", points: ["Match devices to staff roles", "Keep experiences consistent across hardware", "Add capacity as volume and locations grow"], image: restaurantImage, imageAlt: "Point-of-sale terminal ready for customer checkout" },
  capabilities: [
    { title: "Designed Together", text: "Connected products share a familiar operating environment and consistent business view." },
    { title: "Made For Real Environments", text: "Choose compact, portable, countertop and high-volume formats based on your space." },
    { title: "Supported Beyond Setup", text: "Plan onboarding, configuration and ongoing support around the needs of your team." },
  ],
  quote: { text: "Every device has a clear job, but together they feel like one system.", name: "Taylor Brooks", role: "Multi-site operator" },
  faqs: [
    { question: "Which product should I start with?", answer: "That depends on where transactions happen, who needs access, whether mobility matters and which tools your team uses." },
    { question: "Can I combine countertop and handheld devices?", answer: "Yes. A connected setup can combine fixed and mobile hardware for different roles and customer touchpoints." },
    { question: "Can the system grow later?", answer: "Compatible devices and software capabilities can be added as transaction volume, teams and locations evolve." },
    { question: "Do you help with setup?", answer: "Onboarding can cover device configuration, workflows, team familiarization and connected tools." },
  ],
};

export const hardwareData: InnerPageData = {
  eyebrow: "POS Hardware",
  title: "Hardware Built Around The Way Your Team Works",
  description: "Compare countertop, handheld, mobile, customer-facing and production hardware for a connected POS setup that fits your space and service flow.",
  heroImage: hardwareImage,
  heroAlt: "Modern point-of-sale hardware arranged for a business counter",
  metrics: [{ value: "FIXED", label: "Countertop stations" }, { value: "MOBILE", label: "Handheld service" }, { value: "CONNECTED", label: "One hardware family" }],
  sectionEyebrow: "Choose By Role",
  sectionTitle: "Give Every Device A Clear Job In Your Business",
  sectionIntro: "Start with where transactions happen, who needs access and how customers move through the experience.",
  features: [
    { title: "Countertop POS", text: "Create a stable main checkout for orders, payments, receipts and daily management." },
    { title: "Handheld POS", text: "Take orders, check information and accept payment throughout the floor." },
    { title: "Mobile Readers", text: "Add a compact payment point for markets, events, field work and backup checkout." },
    { title: "Customer Displays", text: "Let customers review transactions and complete prompts through a dedicated screen." },
    { title: "Kitchen Displays", text: "Route and organize production tickets for teams preparing and fulfilling orders." },
    { title: "Self-Service Kiosks", text: "Offer guided ordering and customization where self-service suits the customer journey." },
  ],
  journey: { eyebrow: "Plan The Full Setup", title: "Match Hardware To Space, Staff And Transaction Flow", text: "A useful hardware plan considers placement, connectivity, mobility, peripherals and room to expand.", points: ["Map every payment location", "Assign devices to staff roles", "Plan connectivity and future capacity"], image: restaurantImage, imageAlt: "POS terminal positioned at a business checkout" },
  capabilities: [
    { title: "Purposeful Placement", text: "Select device formats that suit the counter, floor, kitchen or mobile environment." },
    { title: "Connected Operation", text: "Keep compatible devices working from a consistent system and business view." },
    { title: "Room To Expand", text: "Add checkout points, customer screens and production hardware as demand grows." },
  ],
  quote: { text: "The right hardware disappears into the workflow and lets the team focus on the customer.", name: "Aussie's POS Solution", role: "Hardware planning and setup" },
  faqs: [
    { question: "Which POS terminal should I choose?", answer: "The right choice depends on transaction volume, mobility, counter space, peripherals and the staff using it." },
    { question: "Can countertop and handheld hardware work together?", answer: "Yes. Compatible fixed and portable devices can support different roles within one connected setup." },
    { question: "Can I add more devices later?", answer: "A scalable hardware plan can accommodate additional checkout points and operational screens as the business grows." },
    { question: "Do you help configure the hardware?", answer: "Setup planning can include device roles, core configuration, peripherals and team familiarization." },
  ],
};

export const resourcesData: InnerPageData = {
  variant: "resources",
  eyebrow: "Aussie's Resources",
  title: "Answers And Guidance For Every Stage Of The Journey",
  description: "Practical help for choosing a system, preparing your team, improving daily workflows and getting more value from connected business tools.",
  heroImage: teamImage,
  heroAlt: "A local business team at work during busy service",
  metrics: [{ value: "PLAN", label: "Choose with confidence" }, { value: "LEARN", label: "Help your team succeed" }, { value: "GROW", label: "Improve as you go" }],
  sectionEyebrow: "Knowledge That Stays Useful",
  sectionTitle: "Find The Next Answer Without Losing Momentum",
  sectionIntro: "Explore clear guidance for system selection, setup, daily management, payments, customers and long-term growth.",
  features: [
    { title: "Getting-Started Guides", text: "Understand core POS concepts, compare options and prepare the information your team needs." },
    { title: "Help Centre", text: "Find direct answers for devices, software, payments, accounts and common questions." },
    { title: "Business Playbooks", text: "Use practical checklists for restaurants, retailers, service teams and practices." },
    { title: "Product Education", text: "See how devices and software capabilities fit specific roles and environments." },
    { title: "Integration Guidance", text: "Plan how accounting, ordering, scheduling and inventory tools work together." },
    { title: "Growth Insights", text: "Use reporting, customer engagement and stronger habits to make better decisions." },
  ],
  journey: { eyebrow: "Question To Action", title: "Useful Information Organized Around Real Decisions", text: "Resources should help you move forward, not bury the answer. Start with your goal and follow a clear path.", points: ["Compare solutions by business need", "Prepare your team for a smoother launch", "Keep improving after go-live"], image: hardwareImage, imageAlt: "POS hardware ready for setup and onboarding" },
  capabilities: [
    { title: "Straightforward Guidance", text: "Clear language and practical examples make unfamiliar topics easier to understand." },
    { title: "Built Around Outcomes", text: "Navigate by the problem you are solving, from checkout to inventory visibility." },
    { title: "Human Support", text: "Move from self-service guidance to a conversation when your situation needs a closer look." },
  ],
  quote: { text: "Good support does more than fix a problem—it helps the team feel confident the next time.", name: "Aussie's support team", role: "Business guidance and onboarding" },
  faqs: [
    { question: "Where should a new business begin?", answer: "Start with your transaction environment, team workflow, sales channels, reporting needs and plans for growth." },
    { question: "How do I compare POS devices?", answer: "Consider mobility, counter space, customer interaction, receipt needs, scanning and transaction volume." },
    { question: "What should I prepare before setup?", answer: "Prepare business details, product or menu information, tax settings, staff roles and payment requirements." },
    { question: "Can I speak with someone about my setup?", answer: "Yes. Contact the team for a guided conversation about your workflow, hardware and implementation priorities." },
  ],
};

function supportingPage(data: InnerPageData): InnerPageData {
  return data;
}

export const industriesData = supportingPage({
  eyebrow: "Solutions By Industry",
  title: "A POS Setup Shaped Around How Your Business Works",
  description: "Different businesses move differently. Explore connected systems designed around hospitality, retail, professional services and healthcare workflows.",
  heroImage: restaurantImage,
  heroAlt: "A modern Australian business using a connected POS system",
  metrics: [{ value: "FOOD", label: "Hospitality workflows" }, { value: "RETAIL", label: "Connected commerce" }, { value: "SERVICE", label: "Bookings and payments" }],
  sectionEyebrow: "Find Your Fit",
  sectionTitle: "Start With Your Business, Then Choose The Technology",
  sectionIntro: "The best system supports the way your people serve customers, manage work and make decisions every day.",
  features: [
    { title: "Food & Beverage", text: "Connect ordering, kitchen production, tableside service, payments and restaurant reporting." },
    { title: "Retail", text: "Bring checkout, inventory, returns, customer loyalty and online selling into one view." },
    { title: "Professional Services", text: "Coordinate appointments, invoices, customer details, team schedules and payments." },
    { title: "Healthcare", text: "Create clear, flexible payment workflows for clinics, practices and care-focused teams." },
    { title: "Mobile Businesses", text: "Take secure payments and stay connected at markets, events and customer locations." },
    { title: "Growing Operations", text: "Add devices, locations, channels and business tools without rebuilding from scratch." },
  ],
  journey: { eyebrow: "A Better Match", title: "Build Around The Moments That Matter", text: "We start with transaction flow, staff roles, customer experience and reporting priorities before recommending hardware.", points: ["Map your current workflow", "Identify friction and growth needs", "Choose a connected system"], image: serviceImage, imageAlt: "Business owner serving a customer" },
  capabilities: [
    { title: "Industry-Aware Advice", text: "Recommendations reflect the realities of your service model and working environment." },
    { title: "Flexible Foundations", text: "Start with the essentials and connect additional tools when the business needs them." },
    { title: "One Ongoing Partner", text: "Get support for the setup as your team, locations and operating model evolve." },
  ],
  faqs: [
    { question: "Which industry solution is right for me?", answer: "Choose the closest operating model, then speak with us about the details that make your business unique." },
    { question: "Can one system support mixed business models?", answer: "Yes. We can plan a setup for businesses combining retail, hospitality, appointments or mobile selling." },
    { question: "Can I add locations later?", answer: "A scalable setup can accommodate new devices, staff and locations as your operation grows." },
  ],
});

export const pricingData = supportingPage({
  eyebrow: "Clear POS Options",
  title: "A Setup And Payment Plan That Makes Business Sense",
  description: "Compare ways to access POS hardware, software and payment services with guidance that keeps the total operating picture clear.",
  heroImage: hardwareImage,
  heroAlt: "Modern POS hardware ready for business",
  metrics: [{ value: "BUY", label: "Own your equipment" }, { value: "LEASE", label: "Plan predictable costs" }, { value: "RENT", label: "Stay flexible" }],
  sectionEyebrow: "Pricing With Context",
  sectionTitle: "Understand The Whole Setup Before You Decide",
  sectionIntro: "Equipment, software, payment processing, installation and support can all affect cost. We help you compare the complete picture.",
  features: [
    { title: "Purchase Options", text: "Own the hardware and build a long-term setup around your operational needs." },
    { title: "Lease Options", text: "Spread eligible equipment costs across predictable payments that suit your budget." },
    { title: "Rental Options", text: "Explore flexible access for changing needs, short-term operations or lower upfront cost." },
    { title: "Payment Processing", text: "Understand transaction arrangements and how they connect with your system." },
    { title: "Software Plans", text: "Select capabilities based on the tools, reporting and workflows your business uses." },
    { title: "Setup & Support", text: "Plan onboarding, configuration, training and ongoing assistance from the start." },
  ],
  journey: { eyebrow: "No Guesswork", title: "Compare Options On The Same Terms", text: "We clarify upfront cost, ongoing cost, included services and room to grow so you can choose with confidence.", points: ["Define what your team actually needs", "Compare ownership and payment paths", "Confirm the complete operating cost"], image: teamImage, imageAlt: "Business team discussing a POS setup" },
  capabilities: [
    { title: "Business-First Advice", text: "Recommendations begin with workflow, volume, locations and expected growth." },
    { title: "Flexible Structures", text: "Choose a suitable combination of hardware access, software and processing." },
    { title: "Clear Next Steps", text: "Know what is included, what happens during setup and where support comes from." },
  ],
  faqs: [
    { question: "How much does a POS system cost?", answer: "Cost depends on device mix, software, transaction requirements, locations and the purchase structure you choose." },
    { question: "Can I buy, lease or rent hardware?", answer: "Available options vary by solution and eligibility. We can explain the choices relevant to your business." },
    { question: "Can I request a tailored quote?", answer: "Yes. Share your workflow and preferred setup so we can prepare a more useful recommendation." },
  ],
});

export const aboutData = supportingPage({
  eyebrow: "About Aussie's POS Solution",
  title: "Practical POS Guidance For Australian Businesses",
  description: "We help business owners understand their options, choose the right setup and move forward with confidence.",
  heroImage: teamImage,
  heroAlt: "Australian hospitality team working together",
  metrics: [{ value: "LOCAL", label: "Australian perspective" }, { value: "CLEAR", label: "Straightforward advice" }, { value: "WITH YOU", label: "Beyond installation" }],
  sectionEyebrow: "More Than A Supplier",
  sectionTitle: "Technology Is Only Useful When It Fits The Real Work",
  sectionIntro: "Our role is to make the buying process clearer and connect hardware, payments and business tools around your operation.",
  features: [
    { title: "Listen First", text: "We begin with how your customers buy, how your staff work and what needs improving." },
    { title: "Explain Clearly", text: "We turn technical choices into practical comparisons without unnecessary complexity." },
    { title: "Recommend Thoughtfully", text: "Every proposed setup is shaped around workflow, budget and plans for growth." },
    { title: "Connect The Pieces", text: "Hardware, payments, software and support are considered as one operating system." },
    { title: "Support The Launch", text: "A good start includes configuration, onboarding and a clear path for questions." },
    { title: "Stay Useful", text: "We remain available as your needs change, your team grows and new tools become relevant." },
  ],
  journey: { eyebrow: "Our Approach", title: "From A Business Conversation To A Working System", text: "The process stays focused on decisions that improve service, visibility and everyday operations.", points: ["Understand the business", "Shape the right combination", "Support adoption and growth"], image: serviceImage, imageAlt: "Business owner speaking with a customer" },
  capabilities: [
    { title: "Independent Thinking", text: "The recommendation should make sense for the business—not simply fill a hardware list." },
    { title: "Real-World Focus", text: "We pay attention to counter space, staff movement, transaction volume and customer flow." },
    { title: "Long-Term Value", text: "The right foundation should remain useful as products, people and locations change." },
  ],
  quote: { text: "The best POS conversation starts with the business—not the device.", name: "Aussie's POS Solution", role: "Australian POS guidance" },
  faqs: [
    { question: "Do you work with new businesses?", answer: "Yes. We can help translate your business plan and expected workflow into a practical starting setup." },
    { question: "Can you review an existing setup?", answer: "Yes. We can discuss current pain points, devices, software and payment arrangements to identify useful changes." },
    { question: "Do you support businesses across Australia?", answer: "Talk with the team about availability, onboarding and support options for your location." },
  ],
});

export const supportData = supportingPage({
  eyebrow: "Business Support",
  title: "Help That Keeps Your Business Moving",
  description: "Find practical guidance for setup, devices, software, payments and the everyday questions that come with running a connected POS system.",
  heroImage: serviceImage,
  heroAlt: "A business specialist helping a customer",
  metrics: [{ value: "SETUP", label: "Onboarding guidance" }, { value: "SOLVE", label: "Practical troubleshooting" }, { value: "GROW", label: "Ongoing advice" }],
  sectionEyebrow: "Support With Context",
  sectionTitle: "Start With The Issue And Find A Clear Next Step",
  sectionIntro: "Whether you are planning, launching or troubleshooting, we help direct the question to the right resource or person.",
  features: [
    { title: "Getting Started", text: "Prepare business details, products, menus, tax settings, staff roles and connected tools." },
    { title: "Hardware Help", text: "Get guidance for device setup, connectivity, peripherals and everyday operation." },
    { title: "Software Guidance", text: "Understand settings, permissions, reporting and the workflows your team relies on." },
    { title: "Payment Questions", text: "Find help with payment flows, settlements, refunds and transaction-related questions." },
    { title: "Team Onboarding", text: "Give staff a clear path to learning the actions they perform most often." },
    { title: "Growth Reviews", text: "Revisit your setup when adding locations, channels, devices or new operational tools." },
  ],
  journey: { eyebrow: "A Clearer Support Path", title: "Get From Question To Resolution Faster", text: "Useful context helps us direct you efficiently and reduce unnecessary back-and-forth.", points: ["Describe the device or workflow", "Share what happened and when", "Follow the recommended next action"], image: hardwareImage, imageAlt: "Point-of-sale hardware ready for support" },
  capabilities: [
    { title: "Practical Answers", text: "Guidance is written around the task your team is trying to complete." },
    { title: "Connected Thinking", text: "We consider how hardware, software, payments and integrations affect one another." },
    { title: "Human Escalation", text: "When self-service is not enough, move the issue into a more focused conversation." },
  ],
  faqs: [
    { question: "What information should I have ready?", answer: "The device, affected workflow, timing, any error message and the steps already tried are useful starting points." },
    { question: "Can you help train my team?", answer: "Onboarding and familiarization options can be discussed as part of your setup or support plan." },
    { question: "Where can I ask a specific question?", answer: "Use the contact page to share your business and system details so the team can route your request." },
  ],
});

export const paymentOptionsData = supportingPage({
  eyebrow: "Payment Options",
  title: "Make Every Payment Feel Simple And Connected",
  description: "Support familiar customer payment methods while keeping transactions, reporting and day-to-day administration aligned with your POS.",
  heroImage: hardwareImage,
  heroAlt: "Contactless payment terminal at a business counter",
  metrics: [{ value: "TAP", label: "Contactless payments" }, { value: "LINK", label: "Remote payment options" }, { value: "VIEW", label: "Connected transaction data" }],
  sectionEyebrow: "Payment Flexibility",
  sectionTitle: "Choose Ways To Pay That Fit The Customer Journey",
  sectionIntro: "Your payment setup should work at the counter, around the floor and wherever approved remote transactions happen.",
  features: [
    { title: "Counter Payments", text: "Create a familiar, reliable checkout experience at a fixed service point." },
    { title: "Mobile Payments", text: "Accept payment closer to the customer with compatible portable devices." },
    { title: "Contactless", text: "Support fast tap-based transactions through compatible payment hardware." },
    { title: "Invoices", text: "Request and record payments clearly when the customer is not at the counter." },
    { title: "Recurring Arrangements", text: "Explore suitable workflows for memberships, plans and repeat services." },
    { title: "Transaction Reporting", text: "Keep payment activity visible alongside wider business performance." },
  ],
  journey: { eyebrow: "Payment In Context", title: "Connect The Transaction To The Work Around It", text: "A connected flow reduces re-entry and gives teams a clearer view of sales, refunds and follow-up.", points: ["Match methods to customer needs", "Keep payment steps easy for staff", "Review activity in one place"], image: serviceImage, imageAlt: "Customer completing a payment" },
  capabilities: [
    { title: "Customer Friendly", text: "Offer straightforward payment moments that suit the service environment." },
    { title: "Team Ready", text: "Keep common transaction actions clear and consistent for authorized staff." },
    { title: "Business Visible", text: "Connect payment information with the reporting used to run the business." },
  ],
  faqs: [
    { question: "Which payment methods can I accept?", answer: "Available methods depend on the selected hardware, processing arrangement and business requirements." },
    { question: "Can I accept payments away from the counter?", answer: "Compatible portable and mobile options can support payments across the floor or on the move." },
    { question: "Can payments connect with reporting?", answer: "A connected setup can bring transaction activity into the wider operational view of the business." },
  ],
});

export const businessToolsData = supportingPage({
  eyebrow: "Connected Business Tools",
  title: "Bring The Essential Parts Of Your Business Together",
  description: "Connect payments with inventory, customers, staff, reporting and the operational tools that support better daily decisions.",
  heroImage: restaurantImage,
  heroAlt: "Connected POS software and hardware in a business",
  metrics: [{ value: "SELL", label: "Manage transactions" }, { value: "RUN", label: "Coordinate operations" }, { value: "KNOW", label: "See performance" }],
  sectionEyebrow: "Beyond Checkout",
  sectionTitle: "Turn Your POS Into A Clearer Operating View",
  sectionIntro: "The right connected tools reduce duplicate work and make useful information easier for your team to act on.",
  features: [
    { title: "Inventory", text: "Track products, availability, variants and movement as sales happen." },
    { title: "Customer Tools", text: "Keep customer details, history and loyalty activity available for better service." },
    { title: "Staff Management", text: "Support roles, permissions, schedules and team-level visibility." },
    { title: "Reporting", text: "Understand sales, products, times, locations and operational trends." },
    { title: "Ordering", text: "Coordinate in-person and digital orders within a more consistent workflow." },
    { title: "Integrations", text: "Connect compatible accounting, scheduling, commerce and specialist applications." },
  ],
  journey: { eyebrow: "One Connected View", title: "Reduce Repeated Work Across The Business", text: "When core tools share the right information, teams spend less time reconciling systems and more time serving customers.", points: ["Identify repeated manual steps", "Connect the most useful workflows", "Use clearer data to improve"], image: teamImage, imageAlt: "Team using connected business tools" },
  capabilities: [
    { title: "Simple At The Front", text: "Keep the everyday experience focused even as capability grows behind the scenes." },
    { title: "Useful To Managers", text: "Give decision-makers access to timely operational information." },
    { title: "Ready To Extend", text: "Add compatible tools as the business develops new needs and channels." },
  ],
  faqs: [
    { question: "Which tools should I connect first?", answer: "Start with the workflows creating the most repeated work or the biggest visibility gap." },
    { question: "Can the system connect to accounting tools?", answer: "Integration availability depends on the selected platform and application. We can discuss suitable options." },
    { question: "Can I add tools later?", answer: "Yes. A well-planned foundation can expand as your operational needs grow." },
  ],
});

export const contactData = supportingPage({
  eyebrow: "Talk To Aussie's",
  title: "Tell Us How Your Business Works",
  description: "Share what you sell, how your team operates and what you want to improve. We’ll help you identify a practical next step.",
  heroImage: teamImage,
  heroAlt: "Australian business team ready to discuss a POS solution",
  metrics: [{ value: "LISTEN", label: "Understand your workflow" }, { value: "MATCH", label: "Shape the right setup" }, { value: "PLAN", label: "Define next steps" }],
  sectionEyebrow: "Start The Conversation",
  sectionTitle: "A Better Recommendation Begins With Better Context",
  sectionIntro: "Tell us about your business type, transaction environment, team, locations and current challenges.",
  features: [
    { title: "Request A Quote", text: "Get a recommendation shaped around the devices, software and payment setup you need." },
    { title: "Find Your Setup", text: "Talk through how customers buy, how staff work and where transactions happen." },
    { title: "Book A Demonstration", text: "Explore relevant workflows and product options with your operating model in mind." },
    { title: "Ask A Support Question", text: "Share the affected device, workflow and issue so your request can be directed properly." },
    { title: "Review An Existing System", text: "Discuss what is working, where friction remains and what could change." },
    { title: "Plan For Growth", text: "Prepare for additional locations, devices, staff, sales channels and connected tools." },
  ],
  journey: { eyebrow: "What Happens Next", title: "From First Conversation To A Clear Recommendation", text: "We organize the information around your priorities, then help compare the options that fit.", points: ["Describe the business and workflow", "Review suitable products and services", "Confirm a practical implementation path"], image: serviceImage, imageAlt: "POS specialist helping a business owner" },
  capabilities: [
    { title: "No Generic Package", text: "The conversation begins with your operation and the outcomes you want." },
    { title: "Clear Comparisons", text: "Understand why an option fits and what role each part of the setup plays." },
    { title: "A Practical Path", text: "Move forward with defined equipment, onboarding and support expectations." },
  ],
  faqs: [
    { question: "What should I include in my enquiry?", answer: "Your business type, locations, approximate transaction flow, current setup and main priorities are useful." },
    { question: "Can I request a product demonstration?", answer: "Yes. Tell us which workflows or devices you want to understand and we can discuss suitable options." },
    { question: "Can you help if I already use a POS?", answer: "Yes. Explain the current system and the issues or changes you are considering." },
  ],
});
