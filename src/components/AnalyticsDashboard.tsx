import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { RefreshCw, TrendingUp, Users, MousePointer, Download, Mail } from 'lucide-react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  contactSubmissions: number;
  projectClicks: number;
  themeToggles: number;
  socialClicks: number;
  formStarts: number;
  formCompletions: number;
  topPages: Array<{ page: string; views: number }>;
  topTechnologies: Array<{ tech: string; views: number }>;
  recentEvents: Array<{ action: string; category: string; timestamp: string }>;
}

const AnalyticsDashboard = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    contactSubmissions: 0,
    projectClicks: 0,
    themeToggles: 0,
    socialClicks: 0,
    formStarts: 0,
    formCompletions: 0,
    topPages: [],
    topTechnologies: [],
    recentEvents: []
  });

  const [isLoading, setIsLoading] = useState(false);

  // Mock data for demonstration - replace with real GA4 API calls
  const fetchAnalyticsData = async () => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock data - replace with actual Google Analytics API calls
    setAnalyticsData({
      pageViews: 1247,
      uniqueVisitors: 892,
      contactSubmissions: 23,
      projectClicks: 156,
      themeToggles: 89,
      socialClicks: 67,
      formStarts: 45,
      formCompletions: 23,
      topPages: [
        { page: 'Home', views: 456 },
        { page: 'Projects', views: 234 },
        { page: 'About', views: 189 },
        { page: 'Contact', views: 123 }
      ],
      topTechnologies: [
        { tech: 'Python', views: 89 },
        { tech: 'Docker', views: 67 },
        { tech: 'AWS', views: 54 },
        { tech: 'PyTorch', views: 43 }
      ],
      recentEvents: [
        { action: 'Project Click', category: 'GitHub', timestamp: '2 minutes ago' },
        { action: 'Form Submit', category: 'Contact', timestamp: '5 minutes ago' },
        { action: 'Theme Toggle', category: 'Dark', timestamp: '8 minutes ago' },
        { action: 'Page View', category: 'Projects', timestamp: '12 minutes ago' }
      ]
    });
    
    setIsLoading(false);
  };

  useEffect(() => {
    fetchAnalyticsData();
  }, []);

  const getCompletionRate = () => {
    if (analyticsData.formStarts === 0) return 0;
    return Math.round((analyticsData.formCompletions / analyticsData.formStarts) * 100);
  };

  const getEngagementRate = () => {
    if (analyticsData.uniqueVisitors === 0) return 0;
    return Math.round((analyticsData.projectClicks / analyticsData.uniqueVisitors) * 100);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Portfolio performance insights and user engagement metrics</p>
        </div>
        <Button 
          onClick={fetchAnalyticsData} 
          disabled={isLoading}
          variant="outline"
        >
          <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
          Refresh Data
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Page Views</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData.pageViews.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unique Visitors</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData.uniqueVisitors.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Contact Submissions</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData.contactSubmissions}</div>
            <p className="text-xs text-muted-foreground">+15% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Project Clicks</CardTitle>
            <MousePointer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData.projectClicks}</div>
            <p className="text-xs text-muted-foreground">+22% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Engagement Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Form Completion Rate</CardTitle>
            <CardDescription>Contact form engagement metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Form Starts</span>
                <Badge variant="secondary">{analyticsData.formStarts}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Form Completions</span>
                <Badge variant="secondary">{analyticsData.formCompletions}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Completion Rate</span>
                <Badge variant="default">{getCompletionRate()}%</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>User Engagement</CardTitle>
            <CardDescription>Visitor interaction metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Theme Toggles</span>
                <Badge variant="secondary">{analyticsData.themeToggles}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Social Media Clicks</span>
                <Badge variant="secondary">{analyticsData.socialClicks}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Engagement Rate</span>
                <Badge variant="default">{getEngagementRate()}%</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Top Pages</CardTitle>
            <CardDescription>Most visited pages on your portfolio</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {analyticsData.topPages.map((page, index) => (
                <div key={page.page} className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">{index + 1}</Badge>
                    <span>{page.page}</span>
                  </div>
                  <Badge variant="secondary">{page.views} views</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Technologies</CardTitle>
            <CardDescription>Most viewed technology skills</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {analyticsData.topTechnologies.map((tech, index) => (
                <div key={tech.tech} className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">{index + 1}</Badge>
                    <span>{tech.tech}</span>
                  </div>
                  <Badge variant="secondary">{tech.views} views</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest user interactions and events</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {analyticsData.recentEvents.map((event, index) => (
              <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                <div className="flex items-center space-x-3">
                  <Badge variant="outline">{event.category}</Badge>
                  <span>{event.action}</span>
                </div>
                <span className="text-sm text-muted-foreground">{event.timestamp}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsDashboard;
