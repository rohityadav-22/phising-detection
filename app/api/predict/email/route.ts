import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { emailContent } = await request.json()

    // Simulate ML model processing
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock prediction logic
    const suspiciousKeywords = ["urgent", "click here", "verify account", "suspended", "immediate action"]
    const hasSuspiciousContent = suspiciousKeywords.some((keyword) => emailContent.toLowerCase().includes(keyword))

    const result = {
      riskLevel: hasSuspiciousContent ? "High" : "Low",
      threatType: hasSuspiciousContent ? "Phishing Email" : "Legitimate Email",
      confidence: Math.floor(Math.random() * 30) + 70,
      details: [
        "Content analysis completed",
        "Sender verification performed",
        "Link safety check done",
        "Pattern matching executed",
      ],
      indicators: hasSuspiciousContent
        ? ["Suspicious language detected", "Urgency tactics identified", "Generic greeting used"]
        : ["Professional tone", "Legitimate content patterns", "No suspicious elements"],
    }

    return NextResponse.json(result)
  } catch (error) {
    return NextResponse.json({ error: "Failed to analyze email" }, { status: 500 })
  }
}
