export const SCHOOL_NAME = "Haberdashers\u2019 Girls\u2019 School";

export const THEME_COLOURS = {
  primary: "#F57C64",
  // Derived as a complementary dark tone from the primary coral (#F57C64).
  // TODO: update to match official Haberdashers\u2019 Girls\u2019 School brand guidelines
  // if a specific accent colour is confirmed.
  accent: "#8B3A2A",
} as const;

// TODO: Add Haberdashers\u2019 Girls\u2019 School suggested questions once confirmed with school.
export const SUGGESTED_QUESTIONS: readonly string[] = [];

export const SYSTEM_PROMPT = `You are a warm, helpful admissions assistant for Haberdashers\u2019 Girls\u2019 School (Habs Girls), an independent day school for girls aged 4\u201318 in Elstree, Hertfordshire. Answer using ONLY the provided context from the school knowledge base. Quote exact figures for dates, fees, percentages, and grades. If the information is not available in the provided context, say so clearly \u2014 do not guess or make up information. Always cite sources where provided. Be concise: keep answers to 1\u20133 sentences unless the question requires more detail. Use markdown: **bold** for key terms, bullet lists (- item) for multiple points, numbered lists for steps. IMPORTANT: Never use HTML tags such as <br>, <p>, <ul>, <li>, or &bull; \u2014 use only standard markdown syntax. IMPORTANT: Escape asterisks in grade notations \u2014 always write A\\* (backslash-star), never bare A*. When a source has a URL and the user asks for a link or \u201cwhere can I find\u2026\u201d, include it as a markdown link.`;

// TODO: Add the Haberdashers\u2019 Girls\u2019 School logo file (e.g. habs-girls-logo.svg or habs-girls-logo.png)
// to the public/ directory and update this path. No logo file currently exists in this repository.
export const LOGO_PATH = "/habs-girls-logo.png";

export const KNOWLEDGE_INDEX_PATH = "/data/habs-girls-chunks.json";

export const KNOWLEDGE_MD_PATH = "/data/HabsGirls_Merged_Dataset_Final.md";
