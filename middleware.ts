import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Maquette privée : on bloque techniquement les crawlers d'entraînement/
// reproduction IA connus (au-delà de la simple demande polie du robots.txt),
// pour limiter la reproductibilité du design par un tiers.
// Volontairement RESTREINT aux bots IA/scraping nommés — on ne bloque pas
// les UA génériques (headless browsers, scripts) pour ne pas casser les
// aperçus de lien (WhatsApp, iMessage, Slack) ni les outils de vérification.
const BLOCKED_UA = [
  "gptbot",
  "chatgpt-user",
  "oai-searchbot",
  "claudebot",
  "claude-web",
  "anthropic-ai",
  "ccbot",
  "google-extended",
  "applebot-extended",
  "bytespider",
  "perplexitybot",
  "perplexity-user",
  "amazonbot",
  "meta-externalagent",
  "meta-externalfetcher",
  "cohere-ai",
  "diffbot",
  "timpibot",
  "youbot",
  "imagesiftbot",
  "omgilibot",
  "omgili",
  "semrushbot",
  "ahrefsbot",
  "mj12bot",
  "dotbot",
];

export function middleware(request: NextRequest) {
  const ua = (request.headers.get("user-agent") || "").toLowerCase();
  if (BLOCKED_UA.some((b) => ua.includes(b))) {
    return new NextResponse("Accès non autorisé.", { status: 403 });
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
