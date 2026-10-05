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
    note: "Facial aesthetics decoded with measurements, simulations, and cited studies — 1.19M followers. The engine: infinite subjects, one fixed lens, every post a reveal. And the bio is the business model: “Get Your Personalised Facial Analysis” is teardown → consulting in another domain. The steal: the format discipline. Fuel note: the subject is you — that’s half the engine. 3Blue1Brown runs the same engine on curiosity; it works, but weaker.",
    added: "2026-09-25",
    diagramId: "qoves",
    diagramCaption: "The reveal engine",
  },
  {
    title: "createwithalena",
    url: "https://www.instagram.com/createwithalena/",
    category: "design",
    note: "Alena's design-tip reels (459K followers, 192K likes on the one I saved): four before/afters per video — fix the layout, exaggerate the scale, detail the plain parts, force the contrast. Same engine as Qoves: infinite subjects, one fixed lens, every post a transformation — and the bio is the business model again (freelance designer, hire link up top). The deeper read: the aha is recognition, not revelation — your eye already felt the before was wrong; she just names the itch. One variable per reel keeps the aha clean. The steal: boring is everything at the same volume. One brave choice per view.",
    added: "2026-09-25",
    diagramId: "alena",
    diagramCaption: "Small tweaks, huge difference",
  },
  {
    title: "chrispathway",
    url: "https://www.instagram.com/chrispathway/",
    category: "content",
    note: "AI/ML explainers from an ETH Zurich statistics grad (307K followers) that run concrete → abstract: open with something you can see — a boat spinning in circles instead of finishing the race — then name the concept as the payoff ('it is called misalignment'). Curiosity first, vocabulary second; the visual does the teaching. Also a distribution mechanic worth stealing: comment-gated resources ('comment PROJECT and I'll send the papers + code' → 8K comments). That's demand capture disguised as content.",
    added: "2026-09-25",
    diagramId: "chrispathway",
    diagramCaption: "Curiosity first, vocabulary second",
  },
  {
    title: "pirknn",
    url: "https://www.instagram.com/reel/DdqIjWlxFvc/",
    category: "content",
    note: "Study-motivation reel in chrispathway's orbit: dim desk, training curves on the monitors, highlighted textbook, notebook equations — overlaid with 'there's something addictive about being bad at something and refusing to stay bad.' The move: the grind is the content. It sells the feeling of progress without the cost — identity and belonging, no teaching required. The honest version of this for me is documentation, not performance: I'm actually doing the reps, so mine is proof, not posture.",
    added: "2026-09-25",
    diagramId: "pirknn",
    diagramCaption: "The posture is the product",
  },
  {
    title: "designify",
    url: "https://www.instagram.com/p/Dc-3nkgk5uu/",
    category: "marketing",
    note: "Melbourne signage company's trend carousel — '5 signage trends for 2026-2027,' 10K likes on 17.5K followers. The engine: content is the funnel. The carousel teaches (trend listicle with an open loop: '#3 is our next viral prediction'), the caption gates ('comment SIGN for a free quote'), and the bio closes (free mock-up and quote). Same as Qoves and Alena — the bio is the business model. The steal for my teardown track: teardown → 'comment TEARDOWN for a free mini-audit' → consulting.",
    added: "2026-09-26",
    diagramId: "designify",
    diagramCaption: "Content is the funnel",
  },
  {
    title: "marina_uiux",
    url: "https://www.instagram.com/reel/DavzH2FInra/",
    category: "design",
    note: "Marina Budarina's interactive web-art: every country becomes a door with its own wind chime — a Chinese temple roof dissolving into cascading text ('roofs that refuse gravity'), a Japanese eave, a Kazakh yurt. 321K likes. The move: one childhood memory expanded into a generative system — infinite subjects, one interaction, one emotion. The text doesn't describe the chime; the text IS the chime. The caption is the fuel (nomad, childhood doorway, every new country a new door) — the craft is the vehicle, the memory is the engine. The steal: build beautiful useless things in public and let the comments ('tutorial please', 'do Korea!') dictate what comes next.",
    added: "2026-09-26",
    diagramId: "marina-uiux",
    diagramCaption: "One memory, infinite doors",
  },
  {
    title: "chrismansour__",
    url: "https://www.instagram.com/reel/DcpLuSIvaSx/",
    category: "marketing",
    note: "Christopher Mansour's brand film for Behind The Scenes ('for digital builders') — 52K likes, 14K followers from this one video, per his caption. The hook is a dare: 'You can't make a tech company look cool' — and the video itself is the proof. Structure: identity induction first (moon landing → Kobe → Jobs montage, '0.01% of humanity who will actually change the world,' 'a builder's brain... wired a little differently'), receipts second ($109K dashboard, $2.97M earned, AUD payout lists), CTA last ('Create Space'). It never sells features; it inducts you into a club, then hands you the membership card. The steal: prove the claim by being the claim — the format is the demo. My version: open with 'You can't teach taste in 60 seconds,' then do exactly that.",
    added: "2026-09-28",
  },
  {
    title: "ml.swe",
    url: "https://www.instagram.com/ml.swe/",
    category: "content",
    note: "Andrew Tang — ML/SWE at Netflix, 'ml & ai explained visually.' 20 posts, ~4K followers, started about a month ago (first post mid-September 2026). The pattern: animation as a tool, not a topic. Every post is an explainer where motion does the teaching — k-means clustering as points finding their centers, deep learning history as a sequence of bottlenecks. The caption style is calm and mechanistic ('Drop a few centers anywhere. Every point joins the closest one.'), and he runs the comment-gate too ('comment cluster and I'll send the interactive version'). The steal: instruments, not sermons — he never lectures, he builds you a toy and lets you pull the levers. That's my own principle running wild on someone else's account, and the growth rate says it's working.",
    added: "2026-10-05",
  },
];
