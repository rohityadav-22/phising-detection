"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, LineChart, Line, ResponsiveContainer } from "recharts"
import { Shield, AlertTriangle, TrendingUp, Activity } from "lucide-react"

const threatData = [
  { name: "Phishing Emails", value: 45, color: "#ef4444" },
  { name: "Malicious URLs", value: 30, color: "#f97316" },
  { name: "Spam", value: 20, color: "#eab308" },
  { name: "Safe Content", value: 5, color: "#22c55e" },
]

const sourceData = [
  { source: "Email", threats: 120 },
  { source: "URLs", threats: 85 },
  { source: "Attachments", threats: 45 },
  { source: "Social Media", threats: 30 },
]

const timelineData = [
  { day: "Mon", threats: 12 },
  { day: "Tue", threats: 19 },
  { day: "Wed", threats: 8 },
  { day: "Thu", threats: 25 },
  { day: "Fri", threats: 18 },
  { day: "Sat", threats: 6 },
  { day: "Sun", threats: 4 },
]

const recentDetections = [
  { id: 1, type: "Phishing Email", risk: "High", time: "2 minutes ago", source: "user@company.com" },
  { id: 2, type: "Suspicious URL", risk: "Medium", time: "15 minutes ago", source: "bit.ly/xyz123" },
  { id: 3, type: "Spam Email", risk: "Low", time: "1 hour ago", source: "marketing@fake.com" },
  { id: 4, type: "Malicious Link", risk: "High", time: "2 hours ago", source: "evil-site.com" },
  { id: 5, type: "Safe Email", risk: "Low", time: "3 hours ago", source: "support@legitimate.com" },
]

export default function DashboardPage() {
  const getRiskBadge = (risk: string) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium"
    switch (risk) {
      case "High":
        return `${baseClasses} bg-red-100 text-red-800`
      case "Medium":
        return `${baseClasses} bg-yellow-100 text-yellow-800`
      case "Low":
        return `${baseClasses} bg-green-100 text-green-800`
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Security Dashboard</h1>
        <p className="text-gray-600">Monitor phishing threats and security analytics in real-time</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Threats Detected</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">+12% from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">High Risk Threats</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">89</div>
            <p className="text-xs text-muted-foreground">-5% from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Detection Accuracy</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">99.2%</div>
            <p className="text-xs text-muted-foreground">+0.3% from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Scans</CardTitle>
            <Activity className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">156</div>
            <p className="text-xs text-muted-foreground">Real-time monitoring</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Threat Categories</CardTitle>
            <CardDescription>Distribution of detected threats by type</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                threats: {
                  label: "Threats",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={threatData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {threatData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Threat Sources</CardTitle>
            <CardDescription>Number of threats by source type</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                threats: {
                  label: "Threats",
                  color: "#3b82f6",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sourceData}>
                  <XAxis dataKey="source" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="threats" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Weekly Threat Timeline</CardTitle>
            <CardDescription>Daily phishing attempts over the past week</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                threats: {
                  label: "Threats",
                  color: "#ef4444",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={timelineData}>
                  <XAxis dataKey="day" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="threats" stroke="#ef4444" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Detections</CardTitle>
            <CardDescription>Latest security threats identified</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentDetections.map((detection) => (
                <div key={detection.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <div className="font-medium">{detection.type}</div>
                    <div className="text-sm text-gray-500 truncate">{detection.source}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={getRiskBadge(detection.risk)}>{detection.risk}</span>
                    <span className="text-xs text-gray-400">{detection.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
