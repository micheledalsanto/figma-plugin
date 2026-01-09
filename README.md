# Portfolio Case Study Builder

**Figma plugin to generate a complete, customizable 10-page portfolio case study structure.**

Build professional portfolio presentations in seconds with pre-structured pages, placeholder content, and flexible design options.

---

## Features

✨ **10 Pre-structured Pages**
- 🌟 Cover
- 🧾 Brief
- 🧠 Problem & Insights
- 🧭 Strategy / Concept
- 🎨 Visual Direction
- 🗺️ IA / User Flow
- 🧩 Design System
- 🖼️ Screens / Key Views
- 🎞️ Prototype Notes
- 📌 Results / Learnings

🎨 **Customizable Options**
- **Project Type**: Mobile App (390×844) / Website, Web App, Brand, Other (1440×900)
- **Theme**: Dark or Light mode
- **Page Separators**: Visual dividers between sections (En-dash, Em-dash, Asterisk, None)
- **Delete Existing Pages**: Clean slate option to remove all pages before generating
- **Regenerate Placeholders**: Update existing content with fresh templates

🔄 **Idempotent & Safe**
- Run multiple times without duplicating pages or frames
- Only creates missing elements
- Preserves existing content unless "Regenerate" is checked

🎯 **Smart Defaults**
- **Rich, structured placeholders** with real examples and best practices
- **Actionable guidance** — Clear instructions on what to include in each section
- Mix of `[BRACKETED]` fields to customize + concrete examples to learn from
- Responsive sizing based on project type
- Graceful font fallback (Inter → Roboto → System)

---

## Installation

### 1. Install Dependencies

```bash
npm install
```

### 2. Build the Plugin

```bash
npm run build
```

This compiles `code.ts` to `code.js` using esbuild.

### 3. Import to Figma Desktop

1. Open Figma Desktop
2. Menu → **Plugins** → **Development** → **Import plugin from manifest**
3. Select `manifest.json` from this folder
4. Plugin appears in: **Plugins → Development → Portfolio Case Study Builder**

---

## Usage

### Quick Start

1. Open any Figma file (new or existing)
2. **Plugins** → **Development** → **Portfolio Case Study Builder**
3. Configure:
   - **Project Title** (required)
   - **Project Type** (Mobile App / Website / Web App / Brand / Other)
   - **Theme** (Dark / Light)
   - **Page Separators** (En-dash / Em-dash / Asterisk / None)
   - ☐ **Delete existing pages first** (caution: removes ALL pages)
   - ☐ **Regenerate placeholders** (overwrite existing text)
4. Click **Generate**

The plugin creates 10 pages with customized boards, placeholders, and visual separators.

### Options Explained

| Option | Description |
|--------|-------------|
| **Project Title** | Main title displayed on Cover page |
| **Project Type** | Determines board size: Mobile (390×844) or Desktop (1440×900) |
| **Theme** | Dark (#121214 bg) or Light (#FFFFFF bg) |
| **Page Separators** | Visual dividers in page list: `---` (En-dash), `———` (Em-dash), `***` (Asterisk), or None |
| **Delete Existing Pages** | ⚠️ Removes ALL pages before generating (use for clean start) |
| **Regenerate Placeholders** | Overwrites existing text with template (use for resetting content) |

### Page Separators Explained

The plugin uses Figma's native page divider feature to organize your portfolio sections:

- **En-dash (---)**: Default, clean and minimal (recommended)
- **Em-dash (———)**: Slightly bolder visual separator
- **Asterisk (***)**: Alternative style for visual variety
- **None**: No separators, continuous page list

Separators are automatically placed after:
1. **Cover** (Section 00)
2. **Strategy / Concept** (Section 03)
3. **Design System** (Section 06)

This creates 4 logical groups:
- **Intro**: Cover
- **Context**: Brief → Problem → Strategy
- **Design**: Visual Direction → IA/Flow → Design System
- **Execution**: Screens → Prototype → Results

### Idempotency Behavior

**Safe to run multiple times:**
- Pages: Creates if missing, skips if exists (by exact name)
- Frames: Creates if missing, preserves if exists
- Text: Only updates if "Regenerate placeholders" is checked
- **Result**: No duplicates, stable naming, incremental updates

**Example workflow:**
1. Run plugin → generates full structure
2. Edit some pages, leave others incomplete
3. Run plugin again (same settings) → fills only missing pages
4. Check "Regenerate placeholders" → resets all text to templates

---

## Development

### Watch Mode (Auto-rebuild)

```bash
npm run watch
```

Changes to `code.ts` auto-compile to `code.js`. Reload plugin in Figma to see updates.

### Project Structure

```
portfolio-case-study-builder/
├── manifest.json       # Figma plugin config
├── code.ts             # Main plugin logic (TypeScript)
├── ui.html             # Plugin UI (inline CSS + vanilla JS)
├── package.json        # Dependencies & build scripts
├── tsconfig.json       # TypeScript config
├── .gitignore          # Ignore node_modules, code.js
└── README.md           # This file
```

### Build System

- **esbuild**: Bundles `code.ts` → `code.js` (fast, zero-config)
- **TypeScript**: Type checking with `@figma/plugin-typings`
- **No network calls**: Fully offline, no telemetry

---

## Placeholder Content

### Philosophy: Learning by Example

Instead of minimal `[BRACKETED]` hints, each section provides **comprehensive, structured placeholders** that serve as:
- ✅ **Templates** you can customize
- ✅ **Examples** showing best practices
- ✅ **Guidance** on what to include
- ✅ **Inspiration** with realistic scenarios

### What You'll Find in Each Section

**🌟 Cover** (Project hero)
- Compelling one-liner structure
- Complete project metadata (role, team, duration, platform)
- Links section (prototype, case study, source)
- Reminder to add hero image

**🧾 Brief** (Project foundation)
- Goal with success criteria
- Target audience breakdown (primary/secondary/behaviors/pain points)
- Context & background (market opportunity, business goal, user need)
- Scope (in/out of scope with examples)
- Constraints (timeline, budget, technical, business)

**🧠 Problem & Insights** (Research findings)
- Problem statement template
- Symptoms (observable behaviors with metrics)
- Root causes (behavioral, systemic, technical)
- Key insights with implications (💡 format)
- Opportunity areas to focus on

**🧭 Strategy / Concept** (Design direction)
- Positioning statement
- 5 design principles with descriptions
- Core concept (the big idea)
- Feature pillars with specific features
- Risks & mitigations (⚠️ → ✓ format)

**🎨 Visual Direction** (Aesthetic guide)
- Mood & feeling (3-5 adjectives)
- References & moodboard links
- Color strategy (primary, secondary, neutrals, semantic)
- Typography (primary, display, mono fonts with rationale)
- Imagery & graphics rules (DO/DON'T)
- Visual principles

**🗺️ IA / User Flow** (Navigation structure)
- Primary user journey (step-by-step example)
- Key screens (core + supporting)
- Navigation model (structure, pattern, deep linking)
- Edge cases (❌ errors, ⚪ empty states, ⚠️ edge scenarios)
- Assumptions checklist

**🧩 Design System** (Component library)
- Typography scale (9 levels with usage)
- Color tokens (primary, neutrals, semantic)
- Spacing system (8-point grid)
- Core components (buttons, inputs, cards, lists)
- Interaction states (hover, active, focus, disabled)
- Motion principles (timing, easing, property preferences)

**🖼️ Screens / Key Views** (Final designs)
- Recommended structure (onboarding, main screens, features)
- Empty, error, and loading state examples
- Presentation tips (DO/DON'T)
- Instruction to replace text with actual screens

**🎞️ Prototype Notes** (Interactive demo)
- Prototype link section
- What's interactive (scope description)
- Key interactions (4 detailed examples with timing)
- Motion & timing standards
- Testing checklist (usability, visual, technical, emotional)
- Known limitations

**📌 Results / Learnings** (Outcomes)
- Project outcomes (quantitative + qualitative)
- What worked well (✅ with evidence)
- What didn't work (❌ with fixes)
- Trade-offs & constraints (⚖️ with rationale)
- Key learnings (💡 with takeaways)
- What's next (immediate, future, team growth)

### Example: Brief Section Structure

```
GOAL
[What is this project trying to achieve? What does success look like?]
Example: Create a mobile-first budgeting app that helps millennials
save 20% more per month through behavioral nudges and automated savings.

TARGET AUDIENCE
Primary: [e.g., Millennials aged 25-35, urban professionals, tech-savvy]
Secondary: [e.g., Small business owners, freelancers]
Behaviors: [e.g., Use mobile banking daily, struggle with manual budgeting]
Pain points: [e.g., Feel overwhelmed by financial decisions]

CONTEXT & BACKGROUND
[Why does this project exist? What triggered it?]
• Market opportunity: [e.g., 73% of millennials live paycheck-to-paycheck]
• Business goal: [e.g., Enter the fintech market]
• User need: [e.g., Existing tools are too complex]

... (continues with Scope and Constraints)
```

### How to Use These Placeholders

1. **Read the examples** to understand the expected format and depth
2. **Replace `[BRACKETED]` fields** with your project-specific content
3. **Keep the structure** — it's optimized for portfolio presentations
4. **Delete what doesn't apply** — not every project needs every field
5. **Add your own** — these are starting points, not rigid templates

---

## Technical Details

### Board Sizes

| Project Type | Width | Height | Padding | Spacing |
|--------------|-------|--------|---------|---------|
| Mobile App   | 390px | 844px  | 32px    | 16px    |
| Website      | 1440px| 900px  | 48px    | 20px    |
| Web App      | 1440px| 900px  | 48px    | 20px    |
| Brand        | 1440px| 900px  | 48px    | 20px    |
| Other        | 1440px| 900px  | 48px    | 20px    |

### Theme Colors

**Dark Theme:**
- Board background: `#121214`
- Heading text: `#F2F2F5`
- Body text: `#B8B8C0`
- Hero placeholder: `#292A2D`

**Light Theme:**
- Board background: `#FFFFFF`
- Heading text: `#0D0D0F`
- Body text: `#66666B`
- Hero placeholder: `#E5E6EB`

### Font Fallback Cascade

1. **Inter** (Regular + Semi Bold) — preferred
2. **Roboto** (Regular + Medium) — fallback
3. **First available system font** — last resort

### Page Separator Types

Figma's native page dividers support specific character patterns:

| Type | Characters | Visual | Use Case |
|------|-----------|--------|----------|
| En-dash | `---` | Clean line | Default, professional |
| Em-dash | `———` | Bolder line | Stronger separation |
| Asterisk | `***` | Dotted style | Alternative aesthetic |
| None | - | No separator | Minimal, continuous flow |

**Implementation**: Uses `figma.createPageDivider()` API with valid divider names (all en-dashes, em-dashes, or asterisks).

---

## Troubleshooting

### Plugin not appearing in Figma
- Ensure you used **Figma Desktop** (not browser)
- Check that `code.js` exists (run `npm run build`)
- Re-import manifest: Plugins → Development → Import plugin from manifest

### Build fails
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Fonts not loading
Plugin automatically falls back to Roboto or system fonts. Check Figma console (Plugins → Development → Open Console) for warnings.

### Pages/frames duplicating
This shouldn't happen if names match exactly. Check for:
- Extra spaces in page names
- Emoji rendering differences (copy-paste from `code.ts`)

---

## License

MIT

---

## Contributing

This is a standalone plugin. Feel free to fork and customize for your workflow.

**Suggestions:**
- Add more page templates
- Customize placeholder text for specific industries
- Adjust board sizes for different devices
- Add brand color presets

---

## Changelog

### v1.2.0 (2026-01-09)
- **NEW**: Professional plugin icon with document/case study visual metaphor
- **NEW**: Enhanced placeholder content with realistic fintech app examples
- **NEW**: Cover page now includes quantitative impact metrics (50k+ users, $2.3M saved)
- **NEW**: Brief section with specific target audience and measurable success criteria
- **NEW**: Problem & Insights section with behavioral psychology insights and emoji-coded findings
- **IMPROVED**: All placeholders now use realistic, industry-specific examples instead of generic templates
- **IMPROVED**: Added emoji visual hierarchy (📈📉💡🎯✨🤖⚡) for better content organization
- **IMPROVED**: Fixed page deletion bug that prevented temp page cleanup
- **IMPROVED**: Safer page deletion with error handling and validation
- **IMPROVED**: Menu command integration for better plugin UX
- **FORMAT**: Consistent emoji markers throughout (✅ ❌ ⚠️ 💡 📈 etc.)
- **CONTENT**: Placeholders now tell a cohesive story of a fintech savings app
- **SIZE**: Plugin size increased to 38KB due to rich, realistic content

### v1.1.0 (2026-01-09)
- **NEW**: Page separators using Figma's native divider API (En-dash/Em-dash/Asterisk/None)
- **NEW**: Delete existing pages option for clean slate generation
- **IMPROVED**: Removed frame-based dividers in favor of native page separators
- **IMPROVED**: Automatic separator placement after Cover, Strategy, and Design System sections
- **IMPROVED**: Cleaner page organization with 4 logical section groups

### v1.0.0 (2026-01-09)
- Initial release
- 10-page portfolio structure
- Dark/Light themes
- Mobile/Desktop sizing
- Idempotent generation
- Graceful font fallback
