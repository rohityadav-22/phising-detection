import Link from "next/link"
import { Shield, Zap, BarChart3, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <Shield className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">PhishGuard AI</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">Advanced Machine Learning-Powered Phishing Detection</p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Protect yourself and your organization from phishing attacks with our state-of-the-art AI detection system.
            Analyze emails and URLs in real-time with industry-leading accuracy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/detection">Start Detection</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/dashboard">View Dashboard</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose PhishGuard AI?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <Zap className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <CardTitle>Real-Time Detection</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Instant analysis of emails and URLs with sub-second response times powered by optimized machine learning
                algorithms.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <BarChart3 className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <CardTitle>Advanced Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Comprehensive threat intelligence with detailed risk assessments, confidence scores, and threat
                categorization.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Users className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <CardTitle>Enterprise Ready</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Scalable solution with admin panels, detailed logging, and integration capabilities for enterprise
                environments.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">99.2%</div>
              <div className="text-gray-600">Detection Accuracy</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">{"<"}0.5s</div>
              <div className="text-gray-600">Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">1M+</div>
              <div className="text-gray-600">Threats Analyzed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Protection</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
