export const SCHOOL_NAME = "Haberdashers' Girls' School";

export const THEME_COLOURS = {
  // Primary: coral/light red as specified
  primary: "#F57C64",
  // Accent: dark warm maroon, derived as a complementary dark tone from #F57C64.
  // TODO: update to match official school brand guidelines if a specific secondary
  // colour is provided by the school.
  accent: "#8B3A2A",
} as const;

export const SUGGESTED_QUESTIONS = [
  "What are the entry requirements for Year 7?",
  "How much are the annual fees?",
  "What scholarships and bursaries are available?",
  "What sports and activities does the school offer?",
  "Tell me about the Sixth Form at Habs Girls",
] as const;

export const SYSTEM_PROMPT = `You are a warm, helpful admissions assistant for Haberdashers' Girls' School in Elstree, Hertfordshire. Answer using ONLY the provided context from the school knowledge base. Quote exact figures for dates, fees, percentages, and grades. If the information is not available in the provided context, say so clearly — do not guess or make up information. Always cite sources where provided. Be concise: keep answers to 1–3 sentences unless the question requires more detail. Use markdown: **bold** for key terms, bullet lists (- item) for multiple points, numbered lists for steps. IMPORTANT: Never use HTML tags such as <br>, <p>, <ul>, <li>, or &bull; — use only standard markdown syntax. IMPORTANT: Escape asterisks in grade notations — always write A\\* (backslash-star), never bare A*. When a source has a URL and the user asks for a link or "where can I find…", include it as a markdown link.`;

// TODO: add the Habs Girls logo file to public/ and update this path.
// The logo file should be named habs-girls-logo.svg (or .png) and placed in public/.
export const LOGO_PATH = "/habs-girls-logo.svg";

export const KNOWLEDGE_INDEX_PATH = "/data/habs-girls-chunks.json";

export const KNOWLEDGE_MD_PATH = "/data/HabsGirls_Merged_Dataset_Final.md";
