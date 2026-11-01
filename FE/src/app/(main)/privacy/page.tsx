import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/LegalDocument";

export const metadata: Metadata = { title: "개인정보 취급 방침" };

export default function PrivacyPage() {
  return <LegalDocument kind="privacy" />;
}
