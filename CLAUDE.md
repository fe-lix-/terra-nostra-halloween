# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The website of the Associació de Veïns Terra Nostra (neighbourhood association), served at `avvterranostra.cat` (see `CNAME`) via GitHub Pages. Its main job is a yearly Halloween event page with a countdown, a link to the route map, and the sponsors' logos. All visible content is in Catalan.

## Commands

It is a Jekyll site built with the `github-pages` gem and the `minima` theme. There are no tests, linters or build scripts.

```sh
bundle install
bundle exec jekyll serve   # local preview at http://localhost:4000
```

Pushing to `master` deploys the site. `_site/` is build output and is git-ignored.

## Structure

- `halloweenYYYY.html`: one page per year. Each is a standalone HTML document with no Jekyll front matter, so it bypasses the minima layout. Each loads Bootswatch Cyborg and Bootstrap 3.4.1 from CDNs, and the styles are inline. Older years stay in the repo as an archive.
- `countdown.js`: shared by the yearly pages through `<script src="countdown.js">`. It fills the `#demo` element. Before the start date it shows a countdown, between the start and end dates it shows the Google My Maps link, and after the end date it shows a thank-you message. The start and end dates and the map URL are hard-coded at the top and in the function, and they are edited each year. Because the file is shared, changing it also changes how older year pages that still include it behave.
- `patrocinadors/`: sponsor logos. `patrocinadors/small/` holds the resized copies used by older pages. The 2025 logos use an `avv-2025-` prefix.
- `assemblea.html`: a standalone page for the 2024 general assembly notice.
- `index.md`, `about.markdown`, `404.html`: the default Jekyll and minima scaffolding.

## Yearly workflow (from git history)

1. Copy the previous year's page to a new `halloweenYYYY.html` file.
2. Update the dates in `countdown.js` and add the new sponsor logos.
3. During or after the event, the page is often edited directly: the `<script src="countdown.js">` tag is removed and the map link or the "s'ha acabat" message is hard-coded in `#demo`. `halloween2025.html` is in that final state now.
