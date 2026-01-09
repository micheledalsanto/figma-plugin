# Page Separators in Figma

This plugin uses **Figma's native page divider feature** to organize portfolio sections visually.

## What Are Page Separators?

Page separators (dividers) are special page elements that appear as visual breaks in Figma's page panel. They help organize large projects by grouping related pages together.

## Separator Types

The plugin offers 4 separator styles:

### 1. En-dash (---) ✨ Recommended
```
---
```
- **Visual**: Clean horizontal line
- **Use case**: Professional, default choice
- **Character**: En-dash (–)

### 2. Em-dash (———)
```
———
```
- **Visual**: Slightly bolder line
- **Use case**: Stronger visual separation
- **Character**: Em-dash (—)

### 3. Asterisk (***)
```
***
```
- **Visual**: Dotted/starred pattern
- **Use case**: Alternative aesthetic, visual variety
- **Character**: Asterisk (*)

### 4. None
- No separators created
- Continuous page list
- Minimal approach

## Where Separators Are Placed

The plugin automatically places separators after these key sections:

```
🌟 Cover
    --- SEPARATOR ---
🧾 Brief
🧠 Problem & Insights
🧭 Strategy / Concept
    --- SEPARATOR ---
🎨 Visual Direction
🗺️ IA / User Flow
🧩 Design System
    --- SEPARATOR ---
🖼️ Screens / Key Views
🎞️ Prototype Notes
📌 Results / Learnings
```

This creates **4 logical section groups**:

1. **Intro**: Cover page
2. **Context**: Brief, Problem, Strategy
3. **Design**: Visual Direction, IA, Design System
4. **Execution**: Screens, Prototype, Results

## How It Works Technically

The plugin uses Figma's official API:
```typescript
figma.createPageDivider(dividerName?: string)
```

### Valid Divider Names
According to [Figma's documentation](https://developers.figma.com/docs/plugins/api/properties/figma-createpagedivider/), divider names must be composed **entirely** of:
- All asterisks (`***`)
- All en dashes (`---`)
- All em dashes (`———`)
- All spaces (`   `)

### Implementation Notes
- Dividers are `PageNode` objects with `isPageDivider: true`
- They **cannot have children** (always empty)
- They appear only as visual separators in the page panel
- Default name is `"---"` if not specified

## Visual Example

In Figma's page panel, you'll see:

```
📁 Pages
  └─ 🌟 00 — Cover
  └─ ─────────────── (separator)
  └─ 🧾 01 — Brief
  └─ 🧠 02 — Problem & Insights
  └─ 🧭 03 — Strategy / Concept
  └─ ─────────────── (separator)
  └─ 🎨 04 — Visual Direction
  └─ 🗺️ 05 — IA / User Flow
  └─ 🧩 06 — Design System
  └─ ─────────────── (separator)
  └─ 🖼️ 07 — Screens / Key Views
  └─ 🎞️ 08 — Prototype Notes
  └─ 📌 09 — Results / Learnings
```

## References

- [Figma API: createPageDivider](https://developers.figma.com/docs/plugins/api/properties/figma-createpagedivider/)
- [Figma Forum: Organize pages with dividers](https://forum.figma.com/product-updates-3/organize-your-pages-with-dividers-multiple-page-moves-36045)
- [How to Add Dividers in Figma](https://zight.com/guides/add-dividers-in-figma/)

---

**Pro tip**: Use separators to quickly scan your portfolio structure and jump between major sections during presentations!
