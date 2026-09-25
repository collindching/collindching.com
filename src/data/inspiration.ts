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
  diagramId?: string;
  diagramCaption?: string;
}

export const inspiration: InspirationItem[] = [
  {
    title: "The Brain Lab Co.",
    url: "https://www.instagram.com/thebrainlabco/",
    category: "content",
    note: "Neuroscience translated into content people actually want — explaining the brain to make life less scary. The model for teaching anything technical.",
    added: "2026-09-22",
    diagramId: "brain-lab",
    diagramCaption: "The translation model",
  },
  {
    title: "2511 Studio",
    url: "https://www.instagram.com/2511.studio/",
    category: "design",
    note: "Animation in service of the story — motion that explains instead of decorates. The takeaway: I can teach and tell stories with animation, building visuals I'd never be able to film otherwise.",
    added: "2026-09-22",
    diagramId: "studio-2511",
    diagramCaption: "Signal, not noise",
  },
  {
    title: "brainrotco",
    url: "https://www.instagram.com/brainrotco/",
    category: "content",
    note: "Motion is a spotlight: it captures attention automatically, whether or not it means anything. brainrotco's animations are wallpaper — movement that grabs the eye but illustrates nothing. The higher bar: point the spotlight at the idea itself.",
    added: "2026-09-22",
    diagramId: "brainrotco",
    diagramCaption: "Movement is a spotlight",
  },
  {
    title: "Qoves",
    url: "https://www.instagram.com/qoves/",
    category: "content",
    note: "Facial aesthetics decoded with measurements, simulations, and cited studies — 1.19M followers. The engine: infinite subjects, one fixed lens, every post a reveal. And the bio is the business model: “Get Your Personalised Facial Analysis” is teardown → consulting in another domain. The steal: the format discipline.",
    added: "2026-09-25",
    diagramId: "qoves",
    diagramCaption: "The reveal engine",
  },
];
