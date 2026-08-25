import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Blocage de bots levé le 25/08/2026 — le site est en phase de visibilité SEO/IA,
// on ne bloque plus aucun crawler (y compris OAI-SearchBot, précédemment bloqué
// par erreur au même titre que GPTBot — cf. doctrine GEO du dossier SEO).
export function proxy(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
