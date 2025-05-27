import { Shield, Users, Award, Globe } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About PhishGuard AI</h1>
          <p className="text-xl text-gray-600">
            Leading the fight against phishing with advanced machine learning technology
          </p>
        </div>

        <div className="prose max-w-none mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            PhishGuard AI is dedicated to protecting individuals and organizations from the growing threat of phishing
            attacks. Using state-of-the-art machine learning algorithms, we provide real-time detection and analysis of
            potentially malicious emails and URLs.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-600 mb-6">Our advanced machine learning model analyzes multiple factors including:</p>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>Email content patterns and linguistic analysis</li>
            <li>Sender reputation and domain verification</li>
            <li>URL structure and redirect chain analysis</li>
            <li>Attachment scanning and metadata extraction</li>
            <li>Historical threat intelligence correlation</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Technology Stack</h2>
          <p className="text-gray-600 mb-6">
            Built with cutting-edge technologies for maximum performance and reliability:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Frontend</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Next.js 14 with App Router</li>
                <li>• React 18 with TypeScript</li>
                <li>• Tailwind CSS for styling</li>
                <li>• Recharts for data visualization</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Backend & ML</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Python with FastAPI</li>
                <li>• scikit-learn & TensorFlow</li>
                <li>• Real-time threat intelligence</li>
                <li>• Scalable cloud infrastructure</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardHeader>
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Security First</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Enterprise-grade security with end-to-end encryption and privacy protection
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle>Expert Team</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Cybersecurity experts and ML engineers with decades of combined experience
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <CardTitle>Industry Recognition</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Award-winning technology recognized by leading cybersecurity organizations
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Globe className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <CardTitle>Global Protection</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Protecting users worldwide with 24/7 monitoring and threat intelligence</CardDescription>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-900">Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Enterprise Solutions</h3>
                <p className="text-blue-700 mb-2">enterprise@phishguard.ai</p>
                <p className="text-blue-600">For custom integrations and enterprise deployments</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Technical Support</h3>
                <p className="text-blue-700 mb-2">support@phishguard.ai</p>
                <p className="text-blue-600">24/7 technical assistance and guidance</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
