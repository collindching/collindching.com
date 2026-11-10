export interface CaseStudy {
  company: string;
  url?: string;
  tagline: string;
  studied: string; // YYYY-MM-DD
  story: string[];
  lesson: string;
  caveat?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    company: "Amplitude",
    url: "https://amplitude.com",
    tagline: "Product analytics.",
    studied: "2026-11-02",
    story: [
      "Founders Spenser Skates and Curtis Liu (MIT) plus Jeffrey Wang started as Sonalight (YC W12), which failed on retention. Their internal analytics showed that a successful first interaction doubled retention — that insight became Amplitude. Public debut February 2014.",
      "First customers were YC batchmates. They talked to 30 prospects before building, half talking and half building. Of the first 30, none paid early — they asked about interest, not willingness to pay. The beachhead was mobile gaming PMs, reached through ex-Zynga PMs' network. First money: Brett, CEO of Super Lucky, asked the price; Skates blurted $1,000 a month (he wanted about $50), the buyer said yes, and they kept doubling. Sales-led: $0 to $1M ARR in 9 months. Product-led growth layered on only after $1M ARR.",
    ],
    lesson:
      "Small but moneyed beats big but broke. Ask about payment in the first conversation.",
  },
  {
    company: "Chatbase",
    url: "https://chatbase.co",
    tagline: "AI agent platform for support and sales. 10,000+ paying customers, bootstrapped, no VC.",
    studied: "2026-11-03",
    story: [
      "Founder Yasser Elsaid built it in about 60 days: 'ChatGPT for your PDFs' — the first productized RAG. Launched early February 2023 with a demo tweet to 16 Twitter followers. It went viral. First paying customer within 30 minutes. $400 MRR by Feb 11, $10K by mid-March, $64K by mid-May, $1M ARR reportedly 117 days after the first tweet, zero marketing budget.",
      "Copycats followed and growth slowed. Pivoted from B2C toy to B2B support and sales agents. Formal relaunch as an AI agent platform in February 2025 at $5M ARR. Crossed $10M ARR in March 2026 with 26 employees.",
    ],
    lesson:
      "Your first product is a wedge, not a destination. Payment, not applause, is the PMF signal.",
  },
  {
    company: "Bending Spoons",
    url: "https://bendingspoons.com",
    tagline: "Holding company that buys profitable software businesses and runs them better. 50+ acquisitions. Nasdaq IPO July 1, 2026, ticker BSP.",
    studied: "2026-11-04",
    story: [
      "Night of August 2, 2010, Lombok, Indonesia — three Italian engineering graduates (Luca Ferrari, Francesco Patarnello, Matteo Danieli) decided to start a company. Two months later: Evertale, an app using AI to automatically write a diary of your life from phone data. Raised about $1M, team of about 10, presented at TechCrunch Disrupt SF 2011. By mid-2013: almost no revenue, about 4 months runway. Failed. Investors let the founders keep the leftover ~$40,000. Ferrari calls the failure 'liberating.'",
      "The insight: PMF is mostly luck — stop hunting for product-market fit, buy it from people who already have it, and run it better. First deal: about $10,000 for a one-man iPhone keyboard-personalization app — almost no revenue, decent user base, good app-store placement. Rebuilt from scratch, roughly doubled their money, reinvested; later shut down. The pattern scaled: Splice (2018), Remini (2021), then the roll-up — Evernote (2023), WeTransfer (2024), Meetup (2024), Vimeo, AOL, Eventbrite. Never sold a material business.",
    ],
    lesson: "Buy PMF instead of hunting for it.",
    caveat:
      "Honest caveat: debt-funded — borrowings ~$4.4B, reported net income near zero on acquisition accounting. Q2 2026: revenue $704M, +126% YoY, but organic growth only 3% — the growth is almost entirely bought.",
  },
  {
    company: "Demand Curve",
    url: "https://demandcurve.com",
    tagline: "The AI-powered growth agency for startups. Done-for-you growth, senior operators only, month-to-month. 7,000+ startups, 43 unicorns.",
    studied: "2026-11-06",
    story: [
      "Founder Julian Shapiro learned growth by promoting Velocity.js (built September 2013) with zero budget and zero credibility. Did freelance growth for friends' companies for about a year and a half, then formalized as agency Bell Curve in April 2017 with Neal O'Grady. Narrowed from broad services to three scopable things: Facebook ads, Instagram ads, CRO. Clients came from his SF network and the Growth Guide on julian.com.",
      "Demand Curve came second: converted internal training docs into a course; launched March 2019, Y Combinator Summer 2019. Growth Program: 6 weeks, about $2,500, 40+ playbooks. Later the agency wound down to scale education — then the market pulled them back ('I don't want to learn this, I want you to do this for me') and the agency rebooted under the Demand Curve name. Julian's founder/CEO tenure: March 2019 – September 2022; he now runs Julian Capital.",
    ],
    lesson:
      "Go very narrow and very deep. Build something, have to promote it, learn the channel, write it up — the writing becomes the credential. Narrowing is decided by reps, not by thinking.",
  },
  {
    company: "Cursor",
    url: "https://cursor.com",
    tagline: "AI code editor (Anysphere).",
    studied: "2026-11-02",
    story: [
      "Founded 2022 by four MIT classmates (Michael Truell, Sualeh Asif, Arvid Lunnemark, Aman Sanger). Pivoted from AI-for-CAD to code after early GPT-4 access. Forked VS Code because plugins are narrow keyholes — the fork was the insight. Public launch March 2023, no marketing. 30,000 daily users within 10 months.",
    ],
    lesson:
      "When the platform constrains you, fork it. Distribution was the product working in public.",
  },
  {
    company: "Triips",
    url: "https://triips.com",
    tagline: "Cheap flight deals by email — $59 a year after a 7-day free trial. Booking happens through Skyscanner (official partner); Triips doesn't sell tickets itself.",
    studied: "2026-11-08",
    story: [
      "Founder Omar (@omaruecos), from Montreal. Travelled to 80+ countries, quit his consulting job at BCG at 22, started Triips around 2025, built in stealth. Members get 2–3 deal emails a week.",
      "Growth: short-form video plus a creator program. 450k Instagram followers and 150k on TikTok in a year. Creators post sub-two-minute videos from Triips' scripts and get paid $1 per 1,000 TikTok views (plus $0.25 per 1,000 on Instagram/Facebook reposts), some making up to $12k a month; top creators get hired full-time. Formerly called Fair Fare Club.",
    ],
    lesson:
      "The email list is the product; short-form is the distribution. Pay for views, not sales.",
    caveat:
      "Revenue figures are Omar's own claims in promotional clips — $0 to $3M a year in 18 months, $200k–$280k a month, peak over $500k in a single month, zero employees, 70% margin — not verified financials.",
  },
  {
    company: "Broccoli AI",
    tagline:
      "Voice and messaging AI agents that run the front office of home-service businesses — answering calls, booking jobs into the scheduling software, chasing estimates, renewing memberships. 1,500+ businesses, 10M+ customer conversations, 2.5M appointments booked.",
    studied: "2026-11-10",
    story: [
      "Founders AJ Jain (CEO, 27) and Aditya Ketkar met as computer science students at BITS Pilani in 2016 and have built companies together since 2017: a campus delivery app, an interview-prep bootcamp, then Telematica — a YC-backed universal API for EVs that took them to London, got eight customers in two years, and stalled. They moved to San Francisco in January 2024.",
      "Instead of building another product, they spent spring 2024 visiting roughly 140 contractors across Northern California — Bay Area, Stockton, Lodi, Modesto, Sacramento — carrying a diary instead of laptops, offering no sales pitch. They wanted an owner to build with. The only thing they had to show was an automated appointment-reminder call built for one San Francisco electrician.",
      "First customer: Marcelle Flowers, 62, owner of Armstrong Plumbing in Sacramento. Skeptical of AI replacing jobs; paying about $5,000 a month for an answering service that only entered bookings into her scheduling software about a third of the time; the employee who made reminder calls had left. They played her a recording of the automated call. Within two days they'd adapted it using her scripts. For roughly three months they worked out of her Sacramento office. She became first customer, then adviser, then their first COO.",
      "Funding: $52M total — Series A $22M + Series B $30M nine months apart, both led by Khosla Ventures (YC and Operator Partners also in), at a reported ~$300M valuation. Revenue tripled since the Series A; headcount 15 to 150+. The system handles about 80% of tasks, the rest going to humans.",
    ],
    lesson:
      "The beachhead was trades and home services, the wedge was one narrow job (appointment reminders), and the first customer became the team. Don't build in a vacuum — carry a diary, find the owner with the $5,000-a-month bleed, and build beside her.",
  },
];
