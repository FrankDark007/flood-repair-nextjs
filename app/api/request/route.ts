import { NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";

export const runtime = "nodejs";

type LeadPayload = {
  fullName: string;
  phone: string;
  email?: string;
  serviceAddress: string;
  serviceType: string;
  urgency: string;
  description: string;
  consent: boolean;
};

const requiredFields = [
  "fullName",
  "phone",
  "serviceAddress",
  "serviceType",
  "urgency",
  "description",
] as const;

const filePath = path.join(process.cwd(), "data", "leads.json");

export async function POST(request: Request) {
  const payload = (await request.json()) as Partial<LeadPayload>;

  const missing = requiredFields.filter((field) => !payload[field]);
  if (missing.length > 0 || payload.consent !== true) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields or consent." },
      { status: 400 }
    );
  }

  const lead = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    ...payload,
  };

  let existing: unknown[] = [];
  try {
    const raw = await fs.readFile(filePath, "utf8");
    existing = JSON.parse(raw);
    if (!Array.isArray(existing)) existing = [];
  } catch {
    existing = [];
  }

  existing.push(lead);
  await fs.writeFile(filePath, JSON.stringify(existing, null, 2));

  console.log("New service request:", lead);

  return NextResponse.json({ ok: true });
}
