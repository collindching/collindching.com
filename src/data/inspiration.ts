// The inspiration collection. This is the curation file — add anything you
// find cool here: design, content, marketing. One entry per item.
//
//   title:    what it is
//   url:      where to find it
//   category: "design" | "content" | "marketing"
//   note:     your take — what makes it cool, what you'd steal from it
//   added:    date you saved it, YYYY-MM-DD
//   example:  delete the three starter examples below once you add your own

export type InspirationCategory = "design" | "content" | "marketing";

export interface InspirationItem {
  title: string;
  url: string;
  category: InspirationCategory;
  note: string;
  added: string;
  example?: boolean;
}

export const inspiration: InspirationItem[] = [
  {
    title: "Linear",
    url: "https://linear.app",
    category: "design",
    note: "A B2B product site that feels like a designed object — dark, precise, and every animation earns its place. The bar for 'tool that looks inevitable'.",
    added: "2026-09-22",
    example: true,
  },
  {
    title: "Karpathy's blog",
    url: "https://karpathy.github.io",
    category: "content",
    note: "Explains genuinely hard ideas in plain language with zero fluff. Proof that clarity is the whole game in technical writing.",
    added: "2026-09-22",
    example: true,
  },
  {
    title: "Liquid Death",
    url: "https://liquiddeath.com",
    category: "marketing",
    note: "Selling canned water like a punk band. The canonical example that the story is the product — and that a commodity can have a personality.",
    added: "2026-09-22",
    example: true,
  },
  {
    title: "The Brain Lab Co.",
    url: "https://www.instagram.com/thebrainlabco/",
    category: "content",
    note: "Neuroscience translated into content people actually want — explaining the brain to make life less scary. The model for teaching anything technical.",
    added: "2026-09-22",
  },
  {
    title: "2511 Studio",
    url: "https://www.instagram.com/2511.studio/",
    category: "design",
    note: "Animation in service of the story — motion that explains instead of decorates. The takeaway: I can teach and tell stories with animation, building visuals I'd never be able to film otherwise.",
    added: "2026-09-22",
  },
  {
    title: "brainrotco",
    url: "https://www.instagram.com/brainrotco/",
    category: "content",
    note: "Interesting, but the animations are wallpaper — they don't match what's being said. The higher bar: animations and diagrams that actually illustrate the content in question.",
    added: "2026-09-22",
  },
];
