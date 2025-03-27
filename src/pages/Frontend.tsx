
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { ArrowLeft, Code, FileCode, Github, Server, Layout, Globe } from "lucide-react";

const Frontend = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Frontend Architecture</h1>
          <p className="mt-2 text-gray-600">
            The React-based frontend for your MERN blog platform
          </p>
        </div>

        <Tabs defaultValue="structure" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="structure">Structure</TabsTrigger>
            <TabsTrigger value="components">Components</TabsTrigger>
            <TabsTrigger value="deployment">Deployment</TabsTrigger>
          </TabsList>
          <TabsContent value="structure" className="p-4 border rounded-md bg-white mt-2">
            <div className="space-y-4">
              <div className="flex items-start">
                <FileCode className="h-5 w-5 text-blue-500 mr-3 mt-1" />
                <div>
                  <h3 className="font-medium">Frontend Directory Structure</h3>
                  <pre className="mt-2 p-4 bg-gray-100 rounded-md text-sm overflow-auto">
{`mern-blog-platform/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   ├── layouts/
│   │   │   └── blog/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── context/
│   │   ├── utils/
│   │   ├── api/
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   └── vite.config.ts`}
                  </pre>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="components" className="p-4 border rounded-md bg-white mt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Post List</CardTitle>
                  <CardDescription>Displays all blog posts</CardDescription>
                </CardHeader>
                <CardContent>
                  <Code className="h-8 w-8 text-blue-500 mb-2" />
                  <p className="text-sm text-gray-600">Fetches and renders blog posts from the API</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Post Editor</CardTitle>
                  <CardDescription>Create and edit blog posts</CardDescription>
                </CardHeader>
                <CardContent>
                  <Code className="h-8 w-8 text-blue-500 mb-2" />
                  <p className="text-sm text-gray-600">Rich text editor with image upload support</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Authentication</CardTitle>
                  <CardDescription>User login and registration</CardDescription>
                </CardHeader>
                <CardContent>
                  <Code className="h-8 w-8 text-blue-500 mb-2" />
                  <p className="text-sm text-gray-600">JWT-based authentication system</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Comment System</CardTitle>
                  <CardDescription>Interactive commenting</CardDescription>
                </CardHeader>
                <CardContent>
                  <Code className="h-8 w-8 text-blue-500 mb-2" />
                  <p className="text-sm text-gray-600">Real-time comments with notifications</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="deployment" className="p-4 border rounded-md bg-white mt-2">
            <div className="space-y-6">
              <div className="flex items-start">
                <Globe className="h-5 w-5 text-blue-500 mr-3 mt-1" />
                <div>
                  <h3 className="font-medium">Vercel Deployment</h3>
                  <p className="mt-1 text-gray-600">The frontend is configured for deployment on Vercel with:</p>
                  <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                    <li>Automated builds from GitHub repository</li>
                    <li>Environment variable configuration</li>
                    <li>Preview deployments for pull requests</li>
                    <li>Custom domain configuration</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start">
                <Github className="h-5 w-5 text-blue-500 mr-3 mt-1" />
                <div>
                  <h3 className="font-medium">CI/CD Pipeline</h3>
                  <p className="mt-1 text-gray-600">GitHub Actions workflow for:</p>
                  <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                    <li>Running tests on each commit</li>
                    <li>Building and validating the application</li>
                    <li>Deploying to Vercel on merge to main branch</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Getting Started with Frontend Development</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">1. Clone the repository</h3>
              <pre className="mt-2 p-3 bg-gray-100 rounded-md text-sm overflow-auto">
                git clone https://github.com/yourusername/mern-blog-platform.git
              </pre>
            </div>
            <div>
              <h3 className="font-medium">2. Navigate to frontend directory</h3>
              <pre className="mt-2 p-3 bg-gray-100 rounded-md text-sm overflow-auto">
                cd mern-blog-platform/frontend
              </pre>
            </div>
            <div>
              <h3 className="font-medium">3. Install dependencies</h3>
              <pre className="mt-2 p-3 bg-gray-100 rounded-md text-sm overflow-auto">
                npm install
              </pre>
            </div>
            <div>
              <h3 className="font-medium">4. Start development server</h3>
              <pre className="mt-2 p-3 bg-gray-100 rounded-md text-sm overflow-auto">
                npm run dev
              </pre>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Button asChild>
            <Link to="/backend">
              Continue to Backend Architecture
              <Server className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
