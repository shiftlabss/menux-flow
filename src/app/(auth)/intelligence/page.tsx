import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { IntelligenceLayout } from "@/components/intelligence/intelligence-layout";
import { verifySessionToken } from "@/lib/auth-session";
import { canAccessIntelligence } from "@/lib/intelligence-permissions";

export const metadata = {
  title: "Menux Intelligence — Flow CRM",
};

const AUTH_COOKIE_NAME = "flow-token";
const INTELLIGENCE_REDIRECT_QUERY = "?redirect=%2Fintelligence";

export default async function IntelligencePage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;

  if (!token) {
    redirect(`/login${INTELLIGENCE_REDIRECT_QUERY}`);
  }

  const session = await verifySessionToken(token);
  if (!session) {
    redirect(`/login${INTELLIGENCE_REDIRECT_QUERY}`);
  }

  if (!canAccessIntelligence(session.user.role)) {
    redirect("/dashboard");
  }

  return <IntelligenceLayout />;
}
