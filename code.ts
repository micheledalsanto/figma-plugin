// Portfolio Case Study Builder
// Creates 10-page portfolio structure with optional dividers and configurable boards

// ============================
// TYPES & CONFIGURATION
// ============================

type ProjectType = "website" | "mobile" | "webapp" | "brand" | "other";
type Theme = "dark" | "light";
type SeparatorType = "en-dash" | "em-dash" | "asterisk" | "none";

type GenerateOptions = {
  title: string;
  projectType: ProjectType;
  theme: Theme;
  separatorType: SeparatorType;
  deleteExisting: boolean;
  regeneratePlaceholders: boolean;
};

type Section = {
  id: string;
  pageName: string;
  boardName: string;
  heading: string;
  placeholder: string;
  isCover: boolean;
  separatorAfter: boolean; // Create page separator after this section
};

// ============================
// SECTIONS DEFINITIONS
// ============================

const SECTIONS = (projectTitle: string, projectType: string): Section[] => [
  {
    id: "00",
    pageName: "🌟 00 — Cover",
    boardName: "Cover Board",
    heading: projectTitle,
    placeholder:
      `[One compelling sentence that captures the essence and impact of this project]\n\n` +
      `PROJECT INFO\n` +
      `Type: ${projectType}\n` +
      `Role: [e.g., Product Designer, UX/UI Lead, Design Consultant]\n` +
      `Team: [Solo / Team of X / Agency name]\n` +
      `Year: [2024]\n` +
      `Duration: [e.g., 3 months, 6 weeks]\n` +
      `Platform: [Web, iOS, Android, Cross-platform]\n\n` +
      `LINKS\n` +
      `→ [Live Prototype]\n` +
      `→ [Case Study]\n` +
      `→ [GitHub / Source]\n\n` +
      `Add hero image placeholder above (replace with actual design mockup)`,
    isCover: true,
    separatorAfter: true
  },
  {
    id: "01",
    pageName: "🧾 01 — Brief",
    boardName: "Brief Board",
    heading: "Brief",
    placeholder:
      `GOAL\n` +
      `[What is this project trying to achieve? What does success look like?]\n` +
      `Example: Create a mobile-first budgeting app that helps millennials save 20% more per month through behavioral nudges and automated savings.\n\n` +
      `TARGET AUDIENCE\n` +
      `Primary: [e.g., Millennials aged 25-35, urban professionals, tech-savvy]\n` +
      `Secondary: [e.g., Small business owners, freelancers]\n` +
      `Behaviors: [e.g., Use mobile banking daily, struggle with manual budgeting]\n` +
      `Pain points: [e.g., Feel overwhelmed by financial decisions, lack visibility into spending patterns]\n\n` +
      `CONTEXT & BACKGROUND\n` +
      `[Why does this project exist? What triggered it?]\n` +
      `• Market opportunity: [e.g., 73% of millennials live paycheck-to-paycheck]\n` +
      `• Business goal: [e.g., Enter the fintech market with a differentiated product]\n` +
      `• User need: [e.g., Existing tools are too complex or too simplistic]\n\n` +
      `SCOPE\n` +
      `In scope:\n` +
      `• [Feature/capability 1]\n` +
      `• [Feature/capability 2]\n` +
      `• [Feature/capability 3]\n\n` +
      `Out of scope (for v1):\n` +
      `• [Deferred feature 1]\n` +
      `• [Deferred feature 2]\n\n` +
      `CONSTRAINTS\n` +
      `Timeline: [e.g., 3-month MVP deadline]\n` +
      `Budget: [e.g., Limited to 2 designers, 3 developers]\n` +
      `Technical: [e.g., Must integrate with Plaid API, work offline]\n` +
      `Business: [e.g., Must comply with financial regulations, target $X revenue by Q4]`,
    isCover: false,
    separatorAfter: false
  },
  {
    id: "02",
    pageName: "🧠 02 — Problem & Insights",
    boardName: "Problem & Insights Board",
    heading: "Problem & Insights",
    placeholder:
      `PROBLEM STATEMENT\n` +
      `[One clear sentence defining the core problem]\n` +
      `Example: Young professionals want to save money but lack the time and knowledge to create effective budgets, resulting in anxiety and poor financial outcomes.\n\n` +
      `SYMPTOMS (What users experience)\n` +
      `• [Observable behavior 1 — e.g., Users abandon budgeting apps after 2 weeks]\n` +
      `• [Observable behavior 2 — e.g., 65% of users report feeling stressed about money]\n` +
      `• [Observable behavior 3 — e.g., Manual tracking takes 30+ minutes per week]\n` +
      `• [Impact metric — e.g., Only 12% meet their savings goals]\n\n` +
      `ROOT CAUSES (Why it happens)\n` +
      `Behavioral:\n` +
      `• [e.g., Budgeting feels like punishment, not empowerment]\n` +
      `• [e.g., Delayed gratification is psychologically difficult]\n\n` +
      `Systemic:\n` +
      `• [e.g., Existing tools require too much manual input]\n` +
      `• [e.g., Financial literacy is not taught in schools]\n\n` +
      `Technical:\n` +
      `• [e.g., Banks don't expose real-time spending data]\n` +
      `• [e.g., Categorization is inaccurate and requires constant fixing]\n\n` +
      `KEY INSIGHTS (What we learned)\n` +
      `💡 Insight #1: [e.g., Users don't want to budget — they want to feel in control without thinking about it]\n` +
      `   → Implication: Automate everything possible; make savings invisible\n\n` +
      `💡 Insight #2: [e.g., Small wins build momentum better than big goals]\n` +
      `   → Implication: Celebrate micro-achievements; show daily progress\n\n` +
      `💡 Insight #3: [e.g., Shame prevents people from engaging with finances]\n` +
      `   → Implication: Non-judgmental tone; focus on forward progress, not past mistakes\n\n` +
      `OPPORTUNITIES (What we'll focus on)\n` +
      `✓ [Opportunity area 1 — e.g., Automated savings without user effort]\n` +
      `✓ [Opportunity area 2 — e.g., Positive reinforcement over guilt]\n` +
      `✓ [Opportunity area 3 — e.g., AI-powered categorization that just works]`,
    isCover: false,
    separatorAfter: false
  },
  {
    id: "03",
    pageName: "🧭 03 — Strategy / Concept",
    boardName: "Strategy / Concept Board",
    heading: "Strategy / Concept",
    placeholder:
      `POSITIONING\n` +
      `[How should this product feel? What makes it different?]\n` +
      `Example: A calm, judgment-free financial companion that works silently in the background — not another demanding budgeting app.\n\n` +
      `DESIGN PRINCIPLES\n` +
      `1. [Principle name] — [Description]\n` +
      `   e.g., Invisible by default — The best UX is no UX. Automate everything possible.\n\n` +
      `2. [Principle name] — [Description]\n` +
      `   e.g., Celebrate progress, not perfection — Small wins matter more than big goals.\n\n` +
      `3. [Principle name] — [Description]\n` +
      `   e.g., Respect cognitive load — One primary action per screen. No decision fatigue.\n\n` +
      `4. [Principle name] — [Description]\n` +
      `   e.g., Build trust through transparency — Always explain why we're asking for data.\n\n` +
      `5. [Principle name] — [Description]\n` +
      `   e.g., Human, not robotic — Warm tone; feels like a supportive friend, not a spreadsheet.\n\n` +
      `CORE CONCEPT\n` +
      `[The big idea that drives everything]\n` +
      `Example: "Your money, on autopilot" — A savings system that learns your habits and optimizes itself, so you save more without thinking about it.\n\n` +
      `FEATURE PILLARS\n` +
      `🔹 Pillar 1: [e.g., Smart automation]\n` +
      `   • [Feature: Auto-savings based on spending patterns]\n` +
      `   • [Feature: Predictive bill payment]\n` +
      `   • [Feature: Round-up savings]\n\n` +
      `🔹 Pillar 2: [e.g., Behavioral insights]\n` +
      `   • [Feature: Spending trends visualization]\n` +
      `   • [Feature: Goal tracking with milestones]\n` +
      `   • [Feature: Personalized nudges]\n\n` +
      `🔹 Pillar 3: [e.g., Effortless control]\n` +
      `   • [Feature: One-tap adjustments]\n` +
      `   • [Feature: Pause/resume rules instantly]\n` +
      `   • [Feature: Emergency fund access]\n\n` +
      `RISKS & MITIGATIONS\n` +
      `⚠️ Risk: [e.g., Users may not trust automated savings]\n` +
      `   ✓ Mitigation: Transparent onboarding; show calculations; easy opt-out\n\n` +
      `⚠️ Risk: [e.g., Bank API failures could break core features]\n` +
      `   ✓ Mitigation: Graceful degradation; manual fallback mode; proactive notifications\n\n` +
      `⚠️ Risk: [e.g., Oversaving could cause overdrafts]\n` +
      `   ✓ Mitigation: Always maintain buffer; never touch last $100; smart pause triggers`,
    isCover: false,
    separatorAfter: true
  },
  {
    id: "04",
    pageName: "🎨 04 — Visual Direction",
    boardName: "Visual Direction Board",
    heading: "Visual Direction",
    placeholder:
      `MOOD & FEELING\n` +
      `[3-5 adjectives that capture the aesthetic]\n` +
      `Example: Calm · Confident · Modern · Approachable · Trustworthy\n\n` +
      `REFERENCES & INSPIRATION\n` +
      `• [Reference 1 — e.g., Linear (clean interfaces, subtle motion)]\n` +
      `• [Reference 2 — e.g., N26 (friendly fintech, accessible)]\n` +
      `• [Reference 3 — e.g., Stripe (clarity, professional)]\n` +
      `• [Reference 4 — e.g., Headspace (soft colors, gentle UX)]\n` +
      `→ Moodboard link: [Figma/Pinterest/Are.na board]\n\n` +
      `COLOR STRATEGY\n` +
      `Intent: [e.g., Calm and optimistic, avoiding aggressive banking blues]\n\n` +
      `Primary: [#HEX] — [Usage: CTAs, key actions, progress indicators]\n` +
      `Secondary: [#HEX] — [Usage: Accents, highlights, success states]\n` +
      `Neutrals: [#HEX range] — [Usage: Backgrounds, borders, text hierarchy]\n` +
      `Semantic:\n` +
      `  • Success: [#HEX] — [Positive outcomes, confirmations]\n` +
      `  • Warning: [#HEX] — [Alerts, cautionary info]\n` +
      `  • Error: [#HEX] — [Errors, critical issues]\n` +
      `  • Info: [#HEX] — [Tips, educational content]\n\n` +
      `TYPOGRAPHY\n` +
      `Intent: [e.g., Readable, friendly, not corporate]\n\n` +
      `Primary font: [Font name] — [Usage: UI, body text]\n` +
      `  • Weight range: 400 (Regular), 500 (Medium), 600 (Semibold)\n` +
      `  • Why: [e.g., Great readability at small sizes, friendly curves]\n\n` +
      `Display font: [Font name or same as primary] — [Usage: Large headlines]\n` +
      `  • Weight range: [e.g., 700 (Bold)]\n` +
      `  • Why: [e.g., Impact without aggression]\n\n` +
      `Mono font: [Font name] — [Usage: Numbers, currency, data]\n` +
      `  • Why: [e.g., Clarity for financial figures]\n\n` +
      `IMAGERY & GRAPHICS\n` +
      `Style: [e.g., Soft gradients, abstract shapes, no stock photos]\n` +
      `Rules:\n` +
      `  ✓ DO: [e.g., Use subtle gradients, rounded shapes, friendly illustrations]\n` +
      `  ✓ DO: [e.g., Show real data visualizations, not decorative charts]\n` +
      `  ✗ DON'T: [e.g., Generic corporate stock photos]\n` +
      `  ✗ DON'T: [e.g., Harsh shadows, aggressive angles]\n` +
      `  ✗ DON'T: [e.g., Overly playful cartoons (this is money, not a game)]\n\n` +
      `VISUAL PRINCIPLES\n` +
      `• [Principle 1 — e.g., Whitespace over clutter: Generous padding, never cramped]\n` +
      `• [Principle 2 — e.g., Soft over sharp: Rounded corners, gentle transitions]\n` +
      `• [Principle 3 — e.g., Clarity over decoration: Every element must serve a purpose]`,
    isCover: false,
    separatorAfter: false
  },
  {
    id: "05",
    pageName: "🗺️ 05 — IA / User Flow",
    boardName: "IA / User Flow Board",
    heading: "IA / User Flow",
    placeholder:
      `PRIMARY USER JOURNEY\n` +
      `[Map the main happy path from entry to goal completion]\n\n` +
      `Example: First-time user sets up automated savings\n` +
      `1. Welcome screen → Explains value prop, "Get Started" CTA\n` +
      `2. Permission request → Connect bank account (Plaid)\n` +
      `3. Account analysis → System analyzes spending patterns (loading state)\n` +
      `4. Savings recommendation → "We recommend saving $150/week"\n` +
      `5. Customize → User adjusts amount/frequency (optional)\n` +
      `6. Confirmation → Review and activate\n` +
      `7. Success → Celebration screen, "You're all set!"\n` +
      `8. Dashboard → First view of home screen with active rule\n\n` +
      `KEY SCREENS / VIEWS\n` +
      `Core screens:\n` +
      `• Home / Dashboard — Overview of savings progress, recent activity\n` +
      `• Goals — Manage savings goals, create new ones\n` +
      `• Activity — Transaction history, spending breakdown\n` +
      `• Insights — Personalized tips, spending trends\n` +
      `• Settings — Account, notifications, preferences\n\n` +
      `Supporting screens:\n` +
      `• Onboarding (3-4 steps)\n` +
      `• Goal creation flow\n` +
      `• Transfer management\n` +
      `• Notification center\n\n` +
      `NAVIGATION MODEL\n` +
      `Structure: [e.g., Tab bar navigation with 4 primary sections]\n` +
      `Pattern: [e.g., Flat IA — max 2 levels deep, always one tap to main sections]\n\n` +
      `Tab 1: [Home] — Main dashboard\n` +
      `Tab 2: [Goals] — Savings goals\n` +
      `Tab 3: [Activity] — Transactions\n` +
      `Tab 4: [Profile] — Settings & account\n\n` +
      `Deep linking: [e.g., Push notifications → specific goal detail view]\n` +
      `Back behavior: [e.g., Always return to previous context, not home]\n\n` +
      `EDGE CASES & EMPTY STATES\n` +
      `❌ Error states:\n` +
      `  • Bank connection fails → Retry with clear error message, "Try again" CTA\n` +
      `  • Insufficient funds → Pause rule, notify user, suggest adjustment\n` +
      `  • API timeout → Show cached data, background retry\n\n` +
      `⚪ Empty states:\n` +
      `  • No goals yet → Friendly illustration + "Create your first goal" CTA\n` +
      `  • No transactions → "Transactions will appear here once your account is active"\n` +
      `  • No insights → "We need a few days of data to show personalized insights"\n\n` +
      `⚠️ Edge scenarios:\n` +
      `  • User has $0 balance → Pause auto-save, show encouragement (not shame)\n` +
      `  • Multiple bank accounts → Let user choose primary account\n` +
      `  • User deletes goal mid-transfer → Confirm action, explain consequences\n\n` +
      `ASSUMPTIONS\n` +
      `✓ Users have a smartphone (iOS 15+ or Android 10+)\n` +
      `✓ Users have a US checking account compatible with Plaid\n` +
      `✓ Users receive push notifications (we'll gracefully degrade if disabled)\n` +
      `✓ Users understand basic financial concepts (balance, transfer, savings)\n` +
      `✓ Users trust the app enough to connect their bank (onboarding must earn this)`,
    isCover: false,
    separatorAfter: false
  },
  {
    id: "06",
    pageName: "🧩 06 — Design System",
    boardName: "Design System Board",
    heading: "Design System",
    placeholder:
      `TYPOGRAPHY SCALE\n` +
      `Display: [64px/72px, Bold] — Hero headlines\n` +
      `H1: [32px/40px, Semibold] — Page titles\n` +
      `H2: [24px/32px, Semibold] — Section headers\n` +
      `H3: [20px/28px, Medium] — Subsection headers\n` +
      `Body Large: [16px/24px, Regular] — Primary body text\n` +
      `Body: [14px/20px, Regular] — Default body text\n` +
      `Body Small: [12px/16px, Regular] — Captions, labels\n` +
      `Label: [12px/16px, Medium] — Input labels, metadata\n` +
      `Button: [14px/20px, Semibold] — All button text\n\n` +
      `COLOR TOKENS\n` +
      `Primary:\n` +
      `  • primary-500: [#HEX] — Default brand color\n` +
      `  • primary-600: [#HEX] — Hover state\n` +
      `  • primary-400: [#HEX] — Disabled state\n\n` +
      `Neutrals:\n` +
      `  • gray-900: [#HEX] — Primary text\n` +
      `  • gray-700: [#HEX] — Secondary text\n` +
      `  • gray-500: [#HEX] — Tertiary text, placeholders\n` +
      `  • gray-300: [#HEX] — Borders, dividers\n` +
      `  • gray-100: [#HEX] — Subtle backgrounds\n` +
      `  • gray-50: [#HEX] — Page backgrounds\n\n` +
      `Semantic:\n` +
      `  • success-500 / warning-500 / error-500 / info-500\n\n` +
      `SPACING SYSTEM\n` +
      `Base unit: 4px\n` +
      `Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96\n` +
      `Usage:\n` +
      `  • 4px: Icon padding, tight gaps\n` +
      `  • 8px: Component padding, list item gaps\n` +
      `  • 16px: Default element spacing\n` +
      `  • 24px: Section spacing\n` +
      `  • 32-48px: Major section breaks\n\n` +
      `CORE COMPONENTS\n` +
      `Buttons:\n` +
      `  • Primary: Filled, high emphasis (max 1 per screen)\n` +
      `  • Secondary: Outlined, medium emphasis\n` +
      `  • Tertiary: Text only, low emphasis\n` +
      `  • Sizes: Small (32px), Medium (40px), Large (48px)\n` +
      `  • Corner radius: 8px\n\n` +
      `Inputs:\n` +
      `  • Text input: Height 48px, padding 12px, border 1px\n` +
      `  • Label: Above input, 8px gap\n` +
      `  • Helper text: Below input, gray-600, 12px\n` +
      `  • Error state: Red border, error text below\n\n` +
      `Cards:\n` +
      `  • Padding: 16-24px\n` +
      `  • Corner radius: 12px\n` +
      `  • Shadow: [0 2px 8px rgba(0,0,0,0.08)]\n` +
      `  • Border: Optional 1px gray-200\n\n` +
      `Lists:\n` +
      `  • Item height: 56-72px (tap target)\n` +
      `  • Leading icon: 24px, 12px right margin\n` +
      `  • Dividers: 1px gray-200, full width or inset 16px\n\n` +
      `INTERACTION STATES\n` +
      `Default → Hover → Active → Focus → Disabled\n` +
      `  • Hover: Slight darkening (-10% lightness)\n` +
      `  • Active: Scale 0.98, slight darkening\n` +
      `  • Focus: 2px blue ring, 2px offset\n` +
      `  • Disabled: 40% opacity, no cursor\n\n` +
      `MOTION PRINCIPLES\n` +
      `Philosophy: Calm, intentional, never frantic\n` +
      `Easing: ease-out for entrances, ease-in for exits\n` +
      `Duration:\n` +
      `  • Micro: 100ms — Hover, focus ring\n` +
      `  • Small: 200ms — Buttons, toggles, small elements\n` +
      `  • Medium: 300ms — Modals, sheets, cards\n` +
      `  • Large: 400ms — Page transitions, major state changes\n` +
      `Property preference: transform + opacity (GPU-accelerated)\n` +
      `Avoid: Animating width, height, top, left (causes reflow)`,
    isCover: false,
    separatorAfter: true
  },
  {
    id: "07",
    pageName: "🖼️ 07 — Screens / Key Views",
    boardName: "Screens / Key Views Board",
    heading: "Screens / Key Views",
    placeholder:
      `This page should contain your final designed screens.\n` +
      `Replace this text with actual screen mockups organized by flow or feature.\n\n` +
      `RECOMMENDED STRUCTURE\n\n` +
      `📱 ONBOARDING FLOW (4 screens)\n` +
      `  1. Welcome / Value prop\n` +
      `  2. Bank connection (Plaid integration)\n` +
      `  3. Account analysis (loading state)\n` +
      `  4. Set up first savings goal\n\n` +
      `🏠 MAIN APP SCREENS (5 screens)\n` +
      `  1. Home / Dashboard — Default state with active goals\n` +
      `  2. Goals list — Overview of all savings goals\n` +
      `  3. Goal detail — Individual goal view with progress\n` +
      `  4. Activity feed — Transaction history\n` +
      `  5. Settings — Account & preferences\n\n` +
      `✨ KEY FEATURES (3-4 screens)\n` +
      `  1. Create new goal flow (2-3 steps)\n` +
      `  2. Insights / Analytics view\n` +
      `  3. Transfer money manually\n` +
      `  4. Notification center\n\n` +
      `⚪ EMPTY STATES (2-3 examples)\n` +
      `  • Dashboard with no goals\n` +
      `  • Activity with no transactions\n` +
      `  • Insights with insufficient data\n\n` +
      `❌ ERROR STATES (2-3 examples)\n` +
      `  • Bank connection failed\n` +
      `  • Insufficient funds warning\n` +
      `  • Network error / offline mode\n\n` +
      `⏳ LOADING STATES (2 examples)\n` +
      `  • Initial data fetch (skeleton screens)\n` +
      `  • Action in progress (button loading state)\n\n` +
      `PRESENTATION TIPS\n` +
      `✓ Show screens in context (device frames)\n` +
      `✓ Group by user flow or feature area\n` +
      `✓ Include annotations for complex interactions\n` +
      `✓ Show both light and dark modes (if applicable)\n` +
      `✓ Demonstrate responsive behavior (if web app)\n` +
      `✗ Don't show every single variation\n` +
      `✗ Don't include outdated iterations\n\n` +
      `Add your designed screens below this text block ↓`,
    isCover: false,
    separatorAfter: false
  },
  {
    id: "08",
    pageName: "🎞️ 08 — Prototype Notes",
    boardName: "Prototype Notes Board",
    heading: "Prototype Notes",
    placeholder:
      `PROTOTYPE LINK\n` +
      `→ [Figma Prototype URL]\n` +
      `→ [Mobile preview QR code — optional]\n\n` +
      `WHAT'S INTERACTIVE\n` +
      `[Describe the scope of the prototype]\n` +
      `Example: This prototype covers the full onboarding flow (4 screens) and the primary "Create Goal" user journey. Other screens are static for context.\n\n` +
      `Flows included:\n` +
      `✓ Onboarding → Bank connection → First goal setup\n` +
      `✓ Dashboard → Create new goal → Success confirmation\n` +
      `✓ Goal detail → Edit goal → Save changes\n` +
      `✗ Settings navigation (static)\n` +
      `✗ Transaction history (static)\n\n` +
      `KEY INTERACTIONS\n` +
      `[Detail the important micro-interactions and transitions]\n\n` +
      `1. Goal progress animation\n` +
      `   • Circular progress ring fills on load (300ms ease-out)\n` +
      `   • Number counts up from 0 to target value\n` +
      `   • Why: Gives satisfying feedback, makes progress feel tangible\n\n` +
      `2. Pull-to-refresh gesture\n` +
      `   • Drag down → Loading spinner → Fade in updated content\n` +
      `   • Spring animation on release (bounce effect)\n` +
      `   • Why: Standard mobile pattern, feels native\n\n` +
      `3. Bottom sheet modal\n` +
      `   • Slides up from bottom (400ms ease-out)\n` +
      `   • Backdrop dims to 40% opacity\n` +
      `   • Drag down to dismiss (or tap backdrop)\n` +
      `   • Why: Common mobile pattern, feels lightweight\n\n` +
      `4. Button feedback\n` +
      `   • Tap → Scale to 0.98 + slight darken\n` +
      `   • Loading state → Spinner replaces text\n` +
      `   • Success → Checkmark animation (if applicable)\n` +
      `   • Why: Tactile feedback confirms action\n\n` +
      `MOTION & TIMING\n` +
      `Philosophy: [e.g., Smooth and purposeful — never rushed, never sluggish]\n\n` +
      `Timing standards:\n` +
      `• Micro-interactions: 100-200ms (hover, focus)\n` +
      `• UI transitions: 300ms (modals, sheets, cards)\n` +
      `• Page transitions: 400ms (screen changes)\n` +
      `• Celebratory moments: 600ms (success animations)\n\n` +
      `Easing preferences:\n` +
      `• Entrances: ease-out or spring\n` +
      `• Exits: ease-in\n` +
      `• Both: ease-in-out for continuous motion\n\n` +
      `TESTING CHECKLIST\n` +
      `[What should testers focus on?]\n\n` +
      `Usability:\n` +
      `□ Can users complete onboarding without confusion?\n` +
      `□ Is the "Create Goal" flow intuitive?\n` +
      `□ Are CTAs clear and discoverable?\n` +
      `□ Do users understand what will happen before taking action?\n\n` +
      `Visual:\n` +
      `□ Is text readable at all sizes?\n` +
      `□ Do colors meet accessibility contrast requirements?\n` +
      `□ Are tap targets at least 44×44px?\n` +
      `□ Does the design feel cohesive across screens?\n\n` +
      `Technical:\n` +
      `□ Do transitions feel smooth (not janky)?\n` +
      `□ Does the prototype work on actual mobile devices?\n` +
      `□ Are loading states clear and informative?\n` +
      `□ Do error messages help users recover?\n\n` +
      `Emotional:\n` +
      `□ Does the experience feel trustworthy?\n` +
      `□ Is the tone friendly and supportive (not condescending)?\n` +
      `□ Do users feel in control (not manipulated)?\n\n` +
      `KNOWN LIMITATIONS\n` +
      `[Be transparent about what's not realistic]\n` +
      `• API calls are simulated (2-second delays)\n` +
      `• Plaid integration is mocked (not real bank data)\n` +
      `• Some screens are static placeholders\n` +
      `• Real app will have more robust error handling`,
    isCover: false,
    separatorAfter: false
  },
  {
    id: "09",
    pageName: "📌 09 — Results / Learnings",
    boardName: "Results / Learnings Board",
    heading: "Results / Learnings",
    placeholder:
      `PROJECT OUTCOMES\n` +
      `[Summarize the results — both quantitative and qualitative]\n\n` +
      `📊 Quantitative results:\n` +
      `• [Metric 1]: [e.g., 78% of beta users activated automated savings within first week]\n` +
      `• [Metric 2]: [e.g., Average savings increased by 23% vs. manual budgeting]\n` +
      `• [Metric 3]: [e.g., 4.6/5 average App Store rating after 3 months]\n` +
      `• [Metric 4]: [e.g., 65% weekly active user retention (vs. 40% industry avg)]\n` +
      `• [Metric 5]: [e.g., 92% task completion rate in usability testing]\n\n` +
      `💬 Qualitative feedback:\n` +
      `• [User quote]: "Finally, a budgeting app that doesn't make me feel guilty."\n` +
      `• [User quote]: "I love that it just works in the background — I barely think about it."\n` +
      `• [Stakeholder feedback]: "This approach differentiated us from every competitor."\n` +
      `• [Team reflection]: "The design system saved us 40% of dev time on new features."\n\n` +
      `🎯 Business impact:\n` +
      `• [Impact 1 — e.g., Achieved product-market fit within 6 months]\n` +
      `• [Impact 2 — e.g., Featured in App Store "Apps We Love" collection]\n` +
      `• [Impact 3 — e.g., Secured Series A funding based on user traction]\n\n` +
      `WHAT WORKED WELL\n` +
      `✅ [Success 1 — e.g., Behavioral design approach]\n` +
      `   Why: Automation removed friction; users saved more without effort\n` +
      `   Evidence: 78% activation rate vs. 30% industry benchmark\n\n` +
      `✅ [Success 2 — e.g., Non-judgmental tone and visual language]\n` +
      `   Why: Reduced shame/anxiety around money management\n` +
      `   Evidence: User interviews showed 85% felt "encouraged, not scolded"\n\n` +
      `✅ [Success 3 — e.g., Early user testing with real bank data]\n` +
      `   Why: Caught edge cases we never would have anticipated\n` +
      `   Evidence: Prevented 3 critical bugs before public launch\n\n` +
      `✅ [Success 4 — e.g., Iterative design system approach]\n` +
      `   Why: Allowed rapid iteration; maintained consistency at scale\n` +
      `   Evidence: Shipped 12 new features in 6 months without visual debt\n\n` +
      `WHAT DIDN'T WORK\n` +
      `❌ [Challenge 1 — e.g., Initial onboarding was too long]\n` +
      `   Issue: Users dropped off at step 3 (52% completion rate)\n` +
      `   Fix: Reduced from 5 steps to 3; moved optional setup to post-signup\n` +
      `   Result: Completion rate improved to 81%\n\n` +
      `❌ [Challenge 2 — e.g., Over-designed empty states]\n` +
      `   Issue: Custom illustrations slowed down design velocity\n` +
      `   Fix: Simplified to system icons + clear copy\n` +
      `   Result: Faster iteration; maintained clarity\n\n` +
      `❌ [Challenge 3 — e.g., Tried to solve too many problems at once]\n` +
      `   Issue: Feature creep led to delayed MVP launch\n` +
      `   Fix: Ruthlessly cut scope; shipped core value first\n` +
      `   Result: Launched 6 weeks earlier; added features based on real usage\n\n` +
      `TRADE-OFFS & CONSTRAINTS\n` +
      `⚖️ [Trade-off 1 — e.g., Automation vs. user control]\n` +
      `   Decision: Prioritized automation, added manual override for power users\n` +
      `   Why: 90% of users want "set and forget"; 10% want fine-tuning\n` +
      `   Impact: Satisfied both segments without compromising core experience\n\n` +
      `⚖️ [Trade-off 2 — e.g., Native features vs. cross-platform consistency]\n` +
      `   Decision: Embraced platform conventions (iOS/Android differences)\n` +
      `   Why: Felt native > pixel-perfect consistency\n` +
      `   Impact: Higher ratings; users said it "feels like it belongs on my phone"\n\n` +
      `⚖️ [Trade-off 3 — e.g., Speed vs. perfect data accuracy]\n` +
      `   Decision: Ship fast with 95% accuracy; iterate toward perfection\n` +
      `   Why: Better to be useful quickly than perfect eventually\n` +
      `   Impact: Users accepted minor categorization errors; we improved over time\n\n` +
      `KEY LEARNINGS\n` +
      `💡 Learning #1: [e.g., Users care more about outcomes than features]\n` +
      `   Takeaway: Frame everything around "what you'll achieve," not "what it does"\n\n` +
      `💡 Learning #2: [e.g., Constraints breed creativity]\n` +
      `   Takeaway: Limited budget forced us to simplify; resulted in better UX\n\n` +
      `💡 Learning #3: [e.g., Micro-interactions matter more than we expected]\n` +
      `   Takeaway: Users mentioned "smooth animations" in 40% of reviews\n\n` +
      `💡 Learning #4: [e.g., Designers should be in user research sessions]\n` +
      `   Takeaway: Secondhand insights miss crucial context and emotion\n\n` +
      `WHAT'S NEXT\n` +
      `🚀 Immediate (next 3 months):\n` +
      `  • [Feature/improvement 1 — e.g., Add shared goals for couples]\n` +
      `  • [Feature/improvement 2 — e.g., Expand to credit card debt payoff]\n` +
      `  • [Feature/improvement 3 — e.g., Improve AI-powered insights]\n\n` +
      `🔮 Future opportunities:\n` +
      `  • [Idea 1 — e.g., Expand to investment automation]\n` +
      `  • [Idea 2 — e.g., B2B version for employee financial wellness]\n` +
      `  • [Idea 3 — e.g., International expansion (UK, EU markets)]\n\n` +
      `🎓 Team growth:\n` +
      `  • [Investment area — e.g., Hire accessibility specialist]\n` +
      `  • [Process improvement — e.g., Formalize design QA process]\n` +
      `  • [Knowledge sharing — e.g., Document decision-making framework]`,
    isCover: false,
    separatorAfter: false
  }
];

// ============================
// CONFIGURATION HELPERS
// ============================

function getBoardSize(projectType: ProjectType): { width: number; height: number } {
  if (projectType === "mobile") {
    return { width: 390, height: 844 };
  }
  // website, webapp, brand, other
  return { width: 1440, height: 900 };
}

function getPadding(projectType: ProjectType): number {
  return projectType === "mobile" ? 32 : 48;
}

function getItemSpacing(projectType: ProjectType): number {
  return projectType === "mobile" ? 16 : 20;
}

function getThemeColors(theme: Theme) {
  if (theme === "dark") {
    return {
      bg: { r: 0.07, g: 0.07, b: 0.08 }, // #121214
      heading: { r: 0.95, g: 0.95, b: 0.96 },
      body: { r: 0.72, g: 0.72, b: 0.75 },
      heroPlaceholder: { r: 0.16, g: 0.16, b: 0.18 }
    };
  } else {
    return {
      bg: { r: 1, g: 1, b: 1 }, // #FFFFFF
      heading: { r: 0.05, g: 0.05, b: 0.06 },
      body: { r: 0.4, g: 0.4, b: 0.45 },
      heroPlaceholder: { r: 0.9, g: 0.9, b: 0.92 }
    };
  }
}

// ============================
// FONT LOADING
// ============================

let loadedFonts: { regular: FontName; semiBold: FontName } | null = null;

async function ensureFonts(): Promise<void> {
  if (loadedFonts) return;

  try {
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
    loadedFonts = {
      regular: { family: "Inter", style: "Regular" },
      semiBold: { family: "Inter", style: "Semi Bold" }
    };
  } catch (e) {
    console.warn("Inter font not available, trying Roboto...");
    try {
      await figma.loadFontAsync({ family: "Roboto", style: "Regular" });
      await figma.loadFontAsync({ family: "Roboto", style: "Medium" });
      loadedFonts = {
        regular: { family: "Roboto", style: "Regular" },
        semiBold: { family: "Roboto", style: "Medium" }
      };
    } catch (e2) {
      console.warn("Roboto not available, using first available font...");
      const availableFonts = await figma.listAvailableFontsAsync();
      if (availableFonts.length > 0) {
        await figma.loadFontAsync(availableFonts[0]);
        loadedFonts = {
          regular: availableFonts[0],
          semiBold: availableFonts[0]
        };
      } else {
        throw new Error("No fonts available");
      }
    }
  }
}

// ============================
// FIND HELPERS
// ============================

function findPageByName(name: string): PageNode | null {
  return figma.root.children.find((p) => p.name === name) ?? null;
}

function findChildByName<T extends SceneNode>(
  parent: BaseNode & ChildrenMixin,
  name: string
): T | null {
  return (parent.children.find((n) => n.name === name) as T) ?? null;
}

// ============================
// CREATION HELPERS
// ============================

function getSeparatorName(type: SeparatorType): string {
  switch (type) {
    case "en-dash":
      return "---";
    case "em-dash":
      return "———";
    case "asterisk":
      return "***";
    case "none":
      return "";
    default:
      return "---";
  }
}

function deleteAllPages(): { tempPage: PageNode } {
  // Cannot delete all pages, must keep at least one
  // So we create a temporary page, delete all others, then return it
  // The temp page will be deleted after the first real page is created
  const tempPage = figma.createPage();
  tempPage.name = "🗑️ Temporary (will be deleted)";

  // CRITICAL: Switch to temp page BEFORE deleting others
  // (cannot delete the currently active page)
  figma.currentPage = tempPage;

  const pagesToDelete = figma.root.children.filter(
    (child) => child.type === "PAGE" && child.id !== tempPage.id
  );

  for (const page of pagesToDelete) {
    page.remove();
  }

  // Return temp page so it can be deleted after first real page exists
  return { tempPage };
}

function createBoardFrame(
  section: Section,
  opts: GenerateOptions
): FrameNode {
  const { width, height } = getBoardSize(opts.projectType);
  const padding = getPadding(opts.projectType);
  const itemSpacing = getItemSpacing(opts.projectType);
  const colors = getThemeColors(opts.theme);

  const board = figma.createFrame();
  board.name = section.boardName;
  board.resize(width, height);
  board.layoutMode = "VERTICAL";
  board.primaryAxisSizingMode = "AUTO";
  board.counterAxisSizingMode = "FIXED";
  board.paddingLeft = padding;
  board.paddingRight = padding;
  board.paddingTop = padding;
  board.paddingBottom = padding;
  board.itemSpacing = itemSpacing;
  board.fills = [{ type: "SOLID", color: colors.bg }];
  board.cornerRadius = 24;

  return board;
}

function createTextNode(
  name: string,
  content: string,
  fontSize: number,
  fontName: FontName,
  color: RGB
): TextNode {
  const text = figma.createText();
  text.name = name;
  text.fontName = fontName;
  text.characters = content;
  text.fontSize = fontSize;
  text.fills = [{ type: "SOLID", color }];
  text.lineHeight = { unit: "PERCENT", value: 135 };
  return text;
}

function createHeroPlaceholder(width: number, height: number, theme: Theme): RectangleNode {
  const colors = getThemeColors(theme);
  const rect = figma.createRectangle();
  rect.name = "Hero Placeholder";
  rect.resize(width, height);
  rect.cornerRadius = 20;
  rect.fills = [{ type: "SOLID", color: colors.heroPlaceholder }];
  return rect;
}

// ============================
// MAIN GENERATOR
// ============================

async function generate(opts: GenerateOptions): Promise<void> {
  console.log("Step 1: Loading fonts...");
  await ensureFonts();
  console.log("Fonts loaded successfully");

  // Delete all existing pages if requested
  let tempPageToDelete: PageNode | null = null;
  if (opts.deleteExisting) {
    console.log("Step 2: Deleting existing pages...");
    const { tempPage } = deleteAllPages();
    tempPageToDelete = tempPage;
    console.log("Existing pages deleted");
  }

  console.log("Step 3: Generating sections...");
  const sections = SECTIONS(opts.title, opts.projectType);
  const { width } = getBoardSize(opts.projectType);
  const padding = getPadding(opts.projectType);
  const colors = getThemeColors(opts.theme);
  const separatorName = getSeparatorName(opts.separatorType);

  let sectionIndex = 0;
  for (const section of sections) {
    sectionIndex++;
    console.log(`Processing section ${sectionIndex}/${sections.length}: ${section.pageName}`);
    // Find or create page
    let page = findPageByName(section.pageName);
    if (!page) {
      page = figma.createPage();
      page.name = section.pageName;

      // Delete temp page after creating first real page
      if (tempPageToDelete) {
        // CRITICAL: Switch to the new real page BEFORE deleting temp page
        figma.currentPage = page;
        tempPageToDelete.remove();
        tempPageToDelete = null;
        console.log("Temp page deleted, now on:", page.name);
      }
    }

    // Create or find board
    let board = findChildByName<FrameNode>(page, section.boardName);

    if (!board) {
      board = createBoardFrame(section, opts);
      page.appendChild(board);
      board.x = 0;
      board.y = 0;
    }

    // Find or create heading
    let heading = findChildByName<TextNode>(board, "Heading");
    if (!heading) {
      heading = createTextNode(
        "Heading",
        section.heading,
        28,
        loadedFonts!.semiBold,
        colors.heading
      );
      board.appendChild(heading);
    } else if (opts.regeneratePlaceholders) {
      heading.characters = section.heading;
      heading.fills = [{ type: "SOLID", color: colors.heading }];
    }

    // Hero placeholder for Cover
    if (section.isCover) {
      let hero = findChildByName<RectangleNode>(board, "Hero Placeholder");
      if (!hero) {
        const heroHeight = opts.projectType === "mobile" ? 360 : 420;
        hero = createHeroPlaceholder(width - padding * 2, heroHeight, opts.theme);
        // Insert after heading
        const headingIndex = board.children.indexOf(heading);
        board.insertChild(headingIndex + 1, hero);
      }
    }

    // Find or create body
    let body = findChildByName<TextNode>(board, "Body");
    if (!body) {
      body = createTextNode(
        "Body",
        section.placeholder,
        13,
        loadedFonts!.regular,
        colors.body
      );
      body.textAutoResize = "HEIGHT";
      body.resize(width - padding * 2, body.height);
      board.appendChild(body);
    } else if (opts.regeneratePlaceholders) {
      body.characters = section.placeholder;
      body.fills = [{ type: "SOLID", color: colors.body }];
      body.resize(width - padding * 2, body.height);
    }

    // Create page separator after this section if needed
    if (section.separatorAfter && opts.separatorType !== "none" && separatorName) {
      try {
        if (typeof figma.createPageDivider === "function") {
          figma.createPageDivider(separatorName);
        } else {
          console.warn("Page dividers not supported in this Figma version");
        }
      } catch (e) {
        console.warn("Could not create page divider:", e);
      }
    }
  }

  // Clean up temp page if it still exists (shouldn't happen, but safety check)
  if (tempPageToDelete && !tempPageToDelete.removed) {
    console.warn("Temp page still exists at end - this shouldn't happen");
    try {
      // Make sure we're not on the temp page before removing it
      const coverPage = findPageByName("🌟 00 — Cover");
      if (coverPage) {
        figma.currentPage = coverPage;
      }
      tempPageToDelete.remove();
      console.log("Cleaned up lingering temp page");
    } catch (e) {
      console.warn("Could not remove temp page:", e);
    }
  }

  // Navigate to Cover page
  const coverPage = findPageByName("🌟 00 — Cover");
  if (coverPage) {
    figma.currentPage = coverPage;

    // Try to zoom to Cover Board
    const coverBoard = findChildByName<FrameNode>(coverPage, "Cover Board");
    if (coverBoard) {
      figma.viewport.scrollAndZoomIntoView([coverBoard]);
    }
  }

  figma.notify("✨ Portfolio structure generated.");
}

// ============================
// PLUGIN LIFECYCLE
// ============================

figma.showUI(__html__, { width: 380, height: 420, themeColors: true });

figma.ui.onmessage = async (msg) => {
  if (msg.type === "GENERATE") {
    try {
      console.log("Starting generation with options:", {
        title: msg.title,
        projectType: msg.projectType,
        theme: msg.theme,
        separatorType: msg.separatorType,
        deleteExisting: msg.deleteExisting,
        regeneratePlaceholders: msg.regeneratePlaceholders
      });

      await generate({
        title: String(msg.title || "New Portfolio Project"),
        projectType: msg.projectType || "mobile",
        theme: msg.theme || "dark",
        separatorType: msg.separatorType || "en-dash",
        deleteExisting: msg.deleteExisting === true,
        regeneratePlaceholders: msg.regeneratePlaceholders === true
      });

      console.log("Generation completed successfully");
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : String(e);
      const errorStack = e instanceof Error ? e.stack : "";

      console.error("Generation failed:");
      console.error("Error message:", errorMessage);
      console.error("Stack trace:", errorStack);
      console.error("Full error object:", e);

      figma.notify("❌ Error: " + errorMessage);
    }
  }

  if (msg.type === "CLOSE") {
    figma.closePlugin();
  }
};
