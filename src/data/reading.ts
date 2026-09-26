export interface ReadingItem {
  title: string;
  author: string;
  url: string;
  kind: "article" | "paper" | "book" | "docs" | "video" | "course";
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
    added: "2026-09-22",
  },
];
