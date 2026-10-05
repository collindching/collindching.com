export interface ReadingItem {
  title: string;
  author: string;
  url: string;
  kind: "article" | "paper" | "book" | "docs" | "video" | "course" | "newsletter";
  note: string;
  added: string; // YYYY-MM-DD
}

export const readingList: ReadingItem[] = [
  {
    title: "hamel.dev — notes on AI product engineering",
    author: "Hamel Husain",
    url: "https://hamel.dev/",
    kind: "article",
    note: "Practitioner notes on building AI products. Start with “Your AI Product Needs Evals” and the “LLM Evals: Everything You Need to Know” FAQ — the clearest framing of product evals vs. model benchmarks and the L1/L2/L3 eval levels.",
    added: "2026-09-23",
  },
  {
    title: "In The Arena",
    author: "Recall",
    url: "https://newsletter.recall.network/",
    kind: "newsletter",
    note: "Weekly guide to AI performance — benchmarks, evals, and research across every model and skill. The recurring read for the evals work: what gets measured each week, and whether the measurements themselves are broken.",
    added: "2026-09-23",
  },
];
