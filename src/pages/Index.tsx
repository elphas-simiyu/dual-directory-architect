
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">MERN Blog Platform</h1>
          <p className="text-xl text-gray-600">
            A complete blog solution with separate frontend and backend architecture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">Frontend</CardTitle>
              <CardDescription>React-based UI for your blog platform</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Built with React and TypeScript</li>
                <li>Styled with Tailwind CSS</li>
                <li>Enhanced with shadcn/ui components</li>
                <li>Optimized for deployment on Vercel</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link to="/frontend" className="w-full">
                <Button className="w-full">Access Frontend</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">Backend</CardTitle>
              <CardDescription>Express.js API with MongoDB integration</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Express.js RESTful API</li>
                <li>MongoDB database connectivity</li>
                <li>Authentication and authorization</li>
                <li>Ready for deployment on Render</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link to="/backend" className="w-full">
                <Button className="w-full">Access Backend</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">DevOps Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Version Control</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Git-based workflow with feature branches</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">CI/CD Pipeline</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Automated testing and deployment</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Error tracking and performance monitoring</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
