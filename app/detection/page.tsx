"use client"

import { useState } from "react"
import { Shield, AlertTriangle, CheckCircle, XCircle, Loader2, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

interface DetectionResult {
  riskLevel: "Low" | "Medium" | "High"
  threatType: string
  confidence: number
  details: string[]
  indicators: string[]
}

export default function DetectionPage() {
  const [emailText, setEmailText] = useState("")
  const [url, setUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<DetectionResult | null>(null)

  const analyzeEmail = async () => {
    if (!emailText.trim()) return

    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Mock ML prediction
    const mockResult: DetectionResult = {
      riskLevel:
        emailText.toLowerCase().includes("urgent") || emailText.toLowerCase().includes("click") ? "High" : "Low",
      threatType: emailText.toLowerCase().includes("urgent") ? "Urgency Scam" : "Legitimate Email",
      confidence: Math.floor(Math.random() * 30) + 70,
      details: [
        "Sender domain analysis completed",
        "Content pattern matching performed",
        "Link safety verification done",
        "Attachment scan completed",
      ],
      indicators: emailText.toLowerCase().includes("urgent")
        ? ["Urgency language detected", "Suspicious call-to-action", "Generic greeting used"]
        : ["Professional language tone", "Legitimate sender domain", "No suspicious patterns"],
    }

    setResult(mockResult)
    setIsLoading(false)
  }

  const analyzeUrl = async () => {
    if (!url.trim()) return

    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const mockResult: DetectionResult = {
      riskLevel: url.includes("bit.ly") || url.includes("tinyurl") ? "Medium" : "Low",
      threatType: url.includes("bit.ly") ? "URL Shortener Risk" : "Safe URL",
      confidence: Math.floor(Math.random() * 25) + 75,
      details: [
        "Domain reputation checked",
        "SSL certificate verified",
        "Blacklist comparison done",
        "Redirect chain analyzed",
      ],
      indicators: url.includes("bit.ly")
        ? ["URL shortener detected", "Redirect chain present", "Domain age verification needed"]
        : ["Direct URL structure", "Known safe domain", "Valid SSL certificate"],
    }

    setResult(mockResult)
    setIsLoading(false)
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low":
        return "text-green-600 bg-green-50 border-green-200"
      case "Medium":
        return "text-yellow-600 bg-yellow-50 border-yellow-200"
      case "High":
        return "text-red-600 bg-red-50 border-red-200"
      default:
        return "text-gray-600 bg-gray-50 border-gray-200"
    }
  }

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case "Low":
        return <CheckCircle className="h-5 w-5" />
      case "Medium":
        return <AlertTriangle className="h-5 w-5" />
      case "High":
        return <XCircle className="h-5 w-5" />
      default:
        return <Shield className="h-5 w-5" />
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Phishing Detection</h1>
          <p className="text-gray-600">
            Analyze emails and URLs for potential phishing threats using advanced machine learning
          </p>
        </div>

        <Tabs defaultValue="email" className="mb-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="email">Email Analysis</TabsTrigger>
            <TabsTrigger value="url">URL Analysis</TabsTrigger>
          </TabsList>

          <TabsContent value="email">
            <Card>
              <CardHeader>
                <CardTitle>Email Content Analysis</CardTitle>
                <CardDescription>
                  Paste the full email content including headers, body, and any suspicious elements
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="email-content">Email Content</Label>
                  <Textarea
                    id="email-content"
                    placeholder="Paste the email content here..."
                    value={emailText}
                    onChange={(e) => setEmailText(e.target.value)}
                    className="min-h-[200px] mt-2"
                  />
                </div>
                <Button onClick={analyzeEmail} disabled={!emailText.trim() || isLoading} className="w-full">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing Email...
                    </>
                  ) : (
                    "Analyze Email"
                  )}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="url">
            <Card>
              <CardHeader>
                <CardTitle>URL Safety Check</CardTitle>
                <CardDescription>Enter a URL to check for potential phishing or malicious content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="url-input">URL</Label>
                  <Input
                    id="url-input"
                    type="url"
                    placeholder="https://example.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="mt-2"
                  />
                </div>
                <Button onClick={analyzeUrl} disabled={!url.trim() || isLoading} className="w-full">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing URL...
                    </>
                  ) : (
                    "Analyze URL"
                  )}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {result && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Detection Results
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className={`p-4 rounded-lg border ${getRiskColor(result.riskLevel)}`}>
                  <div className="flex items-center gap-2 mb-2">
                    {getRiskIcon(result.riskLevel)}
                    <span className="font-semibold">Risk Level</span>
                  </div>
                  <div className="text-2xl font-bold">{result.riskLevel}</div>
                </div>

                <div className="p-4 rounded-lg border bg-blue-50 border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold text-blue-600">Threat Type</span>
                  </div>
                  <div className="text-lg font-medium text-blue-900">{result.threatType}</div>
                </div>

                <div className="p-4 rounded-lg border bg-purple-50 border-purple-200">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="h-5 w-5 text-purple-600" />
                    <span className="font-semibold text-purple-600">Confidence</span>
                  </div>
                  <div className="text-2xl font-bold text-purple-900">{result.confidence}%</div>
                  <Progress value={result.confidence} className="mt-2" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Analysis Details</h3>
                  <ul className="space-y-2">
                    {result.details.map((detail, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Key Indicators</h3>
                  <div className="space-y-2">
                    {result.indicators.map((indicator, index) => (
                      <Badge
                        key={index}
                        variant={result.riskLevel === "High" ? "destructive" : "secondary"}
                        className="mr-2 mb-2"
                      >
                        {indicator}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
