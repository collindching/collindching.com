# Build log draft: Market Map — what sector rotation taught me

**The tool:** [Market Map](/tools/market-map) — a live view of the U.S. stock market as an ecosystem: an overview strip, a sector treemap, sector rotation bars, and large-cap movers. Project #1 of the micro-tool studio. Data: TradingView's scanner API, no keys, all client-side.

## The concept: sector rotation

Here's the thing nobody tells you when you start looking at markets: "the market" isn't one thing. The S&P 500 is eleven sectors wearing a trench coat, and they're almost never moving in the same direction for the same reason.

**Sector rotation** is the observation that different sectors lead at different phases of the economic cycle. Early in a recovery, the economically sensitive stuff rips — tech, consumer discretionary, industrials. Late in the cycle, money hides in staples, utilities, and health care — the companies people pay no matter what. Energy dances to oil prices, which dance to geopolitics.

That's why the rotation bars in the tool default to multiple horizons (1D → 1Y). A sector up 2% today but down 15% on the year is noise; a sector quietly leading on every horizon is a regime. The treemap makes the second lesson visceral: **size**. Tech is roughly a third of the index. When Tech sneezes, "the market" catches a cold — the S&P 500 is cap-weighted, so the biggest companies steer the whole number. That's also why the overview strip shows the Russell 2000 next to the S&P: small caps tell you what the *average* stock is doing, stripped of mega-cap gravity.

## What I'd tell past-me

Don't ask "is the market up?" Ask "what's leading, what's lagging, and does the leadership make sense?" The map turns one number into eleven stories — and eleven stories are where the learning actually happens.

*~300 words. Data is delayed and approximate — a learning instrument, not a trading terminal.*
