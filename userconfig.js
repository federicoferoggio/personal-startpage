// latte / frappe / macchiato / mocha
const palette = mocha;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Munich",
    scale: "C",
  },
  clock: {
    format: "h:i - m/b/Y",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "https://app.raindrop.io",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "Lore",
      background_url: "src/img/banners/cbg-11.gif",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "raindrop",
              url: "https://app.raindrop.io",
              icon: "droplet-bolt",
              icon_color: palette.green,
            },
            {
              name: "musicForProgramming();",
              url: "https://musicforprogramming.net",
              icon: "binary-tree",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "todo and stuff",
          links: [
            {
              name: "todoist",
              url: "https://todoist.com",
              icon: "checklist",
              icon_color: palette.green,
            },
            {
              name: "calendar",
              url: "https://calendar.google.com",
              icon: "calendar-filled",
              icon_color: palette.peach,
            },
            {
              name: "spotify",
              url: "https://open.spotify.com",
              icon: "brand-spotify",
              icon_color: palette.red,
            },
            {
              name: "drive",
              url: "https://drive.google.com/drive/home",
              icon: "brand-google-drive",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "news",
          links: [
            {
              name: "theGuardian",
              url: "https://www.theguardian.com/europe",
              icon: "brand-guardian",
              icon_color: palette.green,
            },
            {
              name: "KlassegegenKlasse",
              url: "https://www.klassegegenklasse.org/",
              icon: "lighter",
              icon_color: palette.peach,
            },
            {
              name: "Fußball",
              url: "https://www.sportschau.de/fussball/serie-a",
              icon: "play-football",
              icon_color: palette.red,
            },
            {
              name: "Suddeutsche Zeitung",
              url: "https://www.sueddeutsche.de/",
              icon: "news",
              icon_color: palette.blue,
            },
            {
              name: "Internazionale",
              url: "https://www.internazionale.it/",
              icon: "globe",
              icon_color: palette.mauve,
            },
          ],
        },
      ],
    },
    {
      name: "learn",
      background_url: "src/img/banners/cbg-06.gif",
      categories: [
        {
          name: "code development",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "openAI",
              url: "https://chatgpt.com",
              icon: "robot",
              icon_color: palette.peach,
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "kaggle",
              url: "https://www.kaggle.com",
              icon: "brain",
              icon_color: palette.green,
            },
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: palette.peach,
            },
            {
              name: "exercism",
              url: "https://exercism.org",
              icon: "code-minus",
              icon_color: palette.red,
            },
            {
              name: "aoc",
              url: "https://adventofcode.com",
              icon: "brand-linktree",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "maffs",
          links: [
            {
              name: "taooo",
              url: "https://terrytao.wordpress.com",
              icon: "abacus",
              icon_color: palette.green,
            },
            {
              name: "M ∩ P",
              url: "https://www.jeremykun.com",
              icon: "circle-square",
              icon_color: palette.peach,
            },
            {
              name: "theo of day",
              url: "https://www.theoremoftheday.org/",
              icon: "square",
              icon_color: palette.red,
            },
            {
              name: "xkcd",
              url: "https://xkcd.com",
              icon: "x",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-04.gif",
      categories: [
        {
          name: "castles and friends",
          links: [
            {
              name: "dndbeyond",
              url: "https://www.dndbeyond.com",
              icon: "dice-6",
              icon_color: palette.green,
            },
            {
              name: "camp overview",
              url: "https://federicoferoggio.github.io/stardom_odyssey/index.html",
              icon: "sparkles",
              icon_color: palette.peach,
            },
            {
              name: "data",
              url: "https://docs.google.com/spreadsheets/d/1HQFkhHqonxjv_OJXA-oQFhIjCHWmZCvngP6ohjpBdV8/edit?gid=0#gid=0",
              icon: "border-style-2",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "health and mind",
          links: [
            {
              name: "strava",
              url: "https://www.strava.com",
              icon: "treadmill",
              icon_color: palette.green,
            },
            {
              name: "programs",
              url: "https://www.boostcamp.app/programs",
              icon: "barbell",
              icon_color: palette.peach,
            },
            {
              name: "podcasts",
              url: "https://pocketcasts.com",
              icon: "podcast",
              icon_color: palette.red,
            },
            {
              name: "kindle",
              url: "https://read.amazon.com",
              icon: "book",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "vidoes",
          links: [
            {
              name: "netflix",
              url: "https://www.netflix.com",
              icon: "brand-netflix",
              icon_color: palette.green,
            },
            {
              name: "primevideo",
              url: "https://www.primevideo.com",
              icon: "brand-amazon",
              icon_color: palette.peach,
            },
            {
              name: "apple-tv",
              url: "https://tv.apple.com",
              icon: "brand-apple",
              icon_color: palette.red,
            },
            {
              name: "dropout",
              url: "https://www.dropout.tv",
              icon: "letter-d",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
