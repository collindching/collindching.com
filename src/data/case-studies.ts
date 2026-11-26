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
  {
    company: "PostHog",
    url: "https://posthog.com",
    tagline:
      "Open-source product analytics, self-hostable. The developer-first alternative to Mixpanel and Amplitude. About $50M ARR, $1.4B valuation.",
    studied: "2026-11-19",
    story: [
      "Founders James Hawkins (CEO) and Tim Glaser (CTO) met at Arachnys, a London regulatory-tech startup. Hawkins went from individual contributor to VP of Sales in four years; Glaser ran data infrastructure. They started building together in August 2019 and split the work: Tim built, James booked two meetings with sales leaders every day. PostHog was their sixth idea in about nine months, across 100+ meetings with potential users.",
      "The five ideas before it, and why each died: (1) a sales territory management tool — VPs of Sales weren't interested, inadequate demand. (2) A CRM with predictive analytics — users didn't find it valuable, adoption never came. (3) A 1:1 tool with predictive analytics, inspired by Andrew Grove's High Output Management — it failed the Mom Test: people said nice things in conversation, but only 1 of 10 teams used it after logging in. (4) A technical debt monitoring tool, via surveys after each pull request — the one that worked best: 600 users, a 50% survey response rate, collecting payment, and it got them into Y Combinator's Winter 2020 batch. They killed it anyway, three weeks into the batch: every customer said the same thing — nice way to log issues, doesn't solve the underlying problem. It measured the problem without fixing it. (5) An engineering retention tool — lasted five days. Hawkins was pitching it inside YC, sensed it was mushy, and flipped the meetings to ask about in-house analytics instead. That flip is what found PostHog.",
      "The recurring frustration across all five failures: every product they built needed analytics, and the tools they reached for — Mixpanel, Amplitude, Heap — sent your data to a third party, charged expensive egress fees, and priced in a way that punished growth. They had kept a three-page list of startup ideas; product analytics was on it. They started writing code on January 23, 2020. Their rules for pivoting: sleep on it before deciding, divide and conquer, and kill an idea fast when users value it at $2 per user instead of the $20 you asked for. The gates: can we get users, will they use it, will they pay.",
      "First customers were product engineers and technical founders at early-stage startups, reached through Hacker News, GitHub, and the YC network. Launched on Hacker News on February 20, 2020, four weeks after starting code: 282 upvotes, 83 comments, over 300 deployments in a couple of days, 1,500 GitHub stars within two weeks, 1,000 users by May 2020. PostHog Cloud launched in May 2020 because self-hosting created so much support work; cloud quickly became most of the revenue.",
      "The growth after: seed $3.025M in April 2020 (YC Continuity Fund, 1984 Ventures, angels Solomon Hykes of Docker and David Cramer of Sentry). Series A $9M led by GV, closed July 2020, announced December 2020. Series B $15M led by YC Continuity in June 2021. Then two quiet years: the ClickHouse rebuild and the multi-product expansion. Series D $70M in June 2025, led by Stripe at a $920M valuation — it started with a November 2023 tweet from Stripe CEO Patrick Collison saying the PostHog website was well done; the founders cold-emailed him, and 18 months of conversations followed. Series E $75M in September 2025, led by Peak XV at $1.4B. Revenue: grew 6x in 2022 to millions; $9.5M ARR at end of 2024, up 138% year over year; about $50M by October 2025. Headcount stayed lean: 38 people in December 2022, about 65 in October 2024, about 140 in October 2025.",
      "The other engine: the handbook. Before the HN launch they wrote a public handbook to look mature, so people would trust a brand-new startup with their data. It grew into the whole operating manual published in public — salaries, runway, revenue, OKRs, strategy, all editable by pull request. That became the moat no competitor could copy in a year, because six years of public commit history can't be faked. About 70% of early growth came from recommendations, the rest from content.",
    ],
    lesson:
      "The winning idea was hiding inside the five failures: every product they built needed analytics, and every analytics tool frustrated them the same way. And they killed a product with 600 users and payment coming in because it logged the problem instead of solving it. Usage is not the same as solving the problem.",
    caveat:
      "The ~$50M ARR figure (October 2025) is Crunchbase's estimate, not a company disclosure.",
  },
  {
    company: "Mercor",
    url: "https://mercor.com",
    tagline:
      "AI training-data platform that supplies domain experts to the frontier AI labs. $20B valuation, $2B revenue run rate.",
    studied: "2026-11-22",
    story: [
      "Founders Brendan Foody (CEO), Adarsh Hiremath (co-CEO, former CTO), and Surya Midha (co-founder, former COO, board chairman) went to Bellarmine College Prep in San Jose, where they were teammates on the nationally ranked speech and debate team; Hiremath and Midha were childhood friends from elementary school debate. Foody and Midha went to Georgetown, Hiremath to Harvard. Foody had been selling since eighth grade — a donut resale business, then charging friends $495 to build a website and claim AWS startup credits.",
      "The company was founded in January 2022 as a software development and recruitment agency. The first version was manual: matching engineers from India's IITs with US startups over WhatsApp and Google Sheets, run from their dorm rooms. They won $10,000 and first place in Georgetown's entrepreneurship pitch competition in early 2022.",
      "First customers: the supply side came first, and it came from hackathons. On April 27, 2022 they sponsored a hackathon at IIT Kharagpur, a top computer science school with a 2 percent acceptance rate, with about 500 students expected, and interviewed the most qualified for spots on engineering teams. On the demand side, the first client was a friend who paid $500 a week for a developer, with Mercor keeping about 30 percent. An early client named in their own press was Attend, an edtech startup, for whom they built a revolving QR-code attendance system. They were on track for $40,000 in revenue in April 2022. By January 2023 they formalized the AI-powered recruiting platform and bootstrapped to a $1 million annual run rate within nine months, with a talent pool of 100,000 users across 25 countries and about $80,000 in profit, no outside money. They dropped out to run it full time and were named Thiel Fellows in March 2024.",
      "The bottleneck was the matching itself, so they built the thing that became the company: a 20-minute AI video interview that vets a candidate the way a recruiter would. Seed $3.6 million from General Catalyst, September 2023.",
      "The pivot: in August 2023 a customer introduced them to the founders of xAI, who wanted access to their network of math and computer science people in India. The labs' problem had changed: as models got more capable, training them needed people who actually knew a subject, not crowdworkers drawing boxes. Mercor already had the machine to find and vet those people. By 2024 the lab work had passed the hiring business, and by 2026 the hiring product was effectively gone.",
      "Growth after the pivot: Series A $30 million from Benchmark at a $250 million valuation, September 2024, at about $2 million in annual run rate. Series B $100 million from Felicis at a $2 billion valuation, February 2025, at about $75 million annualized. Series C $350 million at a $10 billion valuation, October 2025, at $450 million to $500 million in annual revenue, which made all three founders, then 22, the youngest self-made billionaires Forbes had named. Series D $750 million at $20 billion, November 10, 2026. Revenue $614 million in the first half of 2026, more than 90 percent from frontier labs; $2 billion annual run rate by mid-2026.",
      "Two things sped it up. First, they paid the experts well from the start — about three times the going rate — which bought them the best supply while competitors paid crowdworker wages. Second, in June 2025 Meta bought 49 percent of Scale AI for $14.3 billion, and OpenAI and Google DeepMind cut ties with Scale; Mercor, Surge, and Handshake absorbed the demand, and Mercor grew about fourfold in the two quarters after. In January 2026 they released their own benchmark, APEX-Agents, which grades how well AI models do real business tasks — every model launch becomes an advertisement for the thing Mercor sells. In May 2025 they hired Sundeep Jain, Uber's former chief product officer, as president. In February 2026 they bought Sepal AI, and in July 2026 they bought Deeptune.",
    ],
    lesson:
      "The beachhead was chosen by the customer, not by the founders. They set out to fix hiring, built a vetting machine because the manual matching didn't scale, and the labs came asking for that machine. The other part to copy is the supply side: they paid experts about three times the going rate from day one. And the first hundred came from going where the talent already gathered — a hackathon at one university — instead of advertising for it.",
    caveat:
      "The founding date is January 2022 in Mercor's own April 2022 press release, and January 2023 in most later profiles — the later date is when the AI recruiting platform version started. All revenue figures are gross, counting what labs pay before Mercor pays the experts; outside estimates put the experts' share at 60 to 70 percent. In late March 2026 Mercor was hit by a supply-chain attack on the LiteLLM package that reportedly exposed up to 4 terabytes of internal data and contractor personal information.",
  },
  {
    company: "Erebor",
    tagline:
      "A nationally chartered US bank for companies building physical things — AI infrastructure, drones, defense systems, robotics, and advanced manufacturing. Reported valuation around $8 to $9 billion.",
    studied: "2026-11-25",
    story: [
      "Founder Jacob Hirshman is a lawyer who spent his career in financial services regulation — Penn Law, about a year as an associate at Sullivan & Cromwell, then an advisor to Circle, the stablecoin company. He started Erebor in May 2025 with Palmer Luckey (Oculus, Anduril), Owen Rapaport, who is CEO, Aaron Pelz, and Trevor Capozza. Hirshman handles sales, marketing, and regulation. The bank applied for its charter in June 2025 and opened in February 2026, nine months from the first line of code to opening.",
      "Why now: after 2008, new bank charters effectively stopped — applications took two or three years, which made raising money to fund the process impractical, so ambitious bankers bought existing banks instead. Hirshman read public comments from the new administration's regulators saying new banks drive innovation and lower costs, and bet the door was reopening. The other trigger was the 2023 collapses of Silicon Valley Bank and First Republic. Founders in defense, manufacturing, and AI had large balances at those banks and had never treated bank failure as a business risk.",
      "First customers: the beachhead was founders building capital-intensive industrial businesses who had just watched their bank fail. The offer was a bank that understands their assets and will not lose their money, not a cheaper loan. Demand from prospective customers before the bank even opened let them raise more capital as the charter advanced. No first customers are named in the sources used here, so the first-100 specifics are thinner than the other studies — the known part is the pre-opening demand, not a customer list.",
      "What makes it different: it owns the whole stack — the charter, the balance sheet, its own core banking software, and its own underwriting software, all written from scratch starting in May 2025. Hirshman argues that regulation and owning the balance sheet are advantages, not burdens, because they let the bank control its costs, products, and speed. It caps itself at a 50 percent loan-to-deposit ratio, versus roughly 70 percent for the average bank, so customers can trust the money will still be there. The team is a mix of veteran bankers and speed-oriented operators, and 40 percent of the employees are former founders. Hirshman calls it the farmer's bank for tech: historical farmers' banks understood agricultural equipment and balance sheets well enough to finance customers through cycles, and Erebor wants to do the same for AI infrastructure and defense hardware. The name is Erebor, the Lonely Mountain from Tolkien, where the dwarves rebuild a prosperous society around mining. The model he names is J.P. Morgan, the trusted capital provider for the industrialists of a new era.",
      "Funding: early backers include Joe Lonsdale, Katie Haun, Human Capital, and Han Ventures. Lonsdale sits on the board. The capital came fast in part because Luckey's name attracted it. The bank was raising at a reported valuation around $8 to $9 billion in fall 2026.",
    ],
    lesson:
      "The bet was timing, not cleverness. A window that had been shut since 2008 cracked open, and he was through it first. The beachhead was picked by a shock — founders who had just watched their bank fail — and the offer was safety and understanding of the assets, not a cheaper loan. Demand before opening did the fundraising work.",
    caveat:
      "The valuation around $8 to $9 billion is a reported figure, not a confirmed round. Hirshman was not alone in the window: at least one other new bank was conditionally approved and had to capitalize with roughly $560 million, and Mercury and Revolut also hold conditional approvals. No named first customers or deposit figures appear in the sources used here.",
  },
];
