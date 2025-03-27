
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { ArrowLeft, Database, FileCode, Server, Shield, BarChart } from "lucide-react";

const Backend = () => {
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
          <h1 className="text-3xl font-bold text-gray-900">Backend Architecture</h1>
          <p className="mt-2 text-gray-600">
            The Express.js and MongoDB backend for your MERN blog platform
          </p>
        </div>

        <Tabs defaultValue="structure" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="structure">Structure</TabsTrigger>
            <TabsTrigger value="api">API Endpoints</TabsTrigger>
            <TabsTrigger value="database">Database</TabsTrigger>
            <TabsTrigger value="deployment">Deployment</TabsTrigger>
          </TabsList>
          
          <TabsContent value="structure" className="p-4 border rounded-md bg-white mt-2">
            <div className="space-y-4">
              <div className="flex items-start">
                <FileCode className="h-5 w-5 text-green-500 mr-3 mt-1" />
                <div>
                  <h3 className="font-medium">Backend Directory Structure</h3>
                  <pre className="mt-2 p-4 bg-gray-100 rounded-md text-sm overflow-auto">
{`mern-blog-platform/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js
│   │   │   └── env.js
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── postController.js
│   │   │   └── userController.js
│   │   ├── middleware/
│   │   │   ├── auth.js
│   │   │   └── errorHandler.js
│   │   ├── models/
│   │   │   ├── Post.js
│   │   │   ├── User.js
│   │   │   └── Comment.js
│   │   ├── routes/
│   │   │   ├── api/
│   │   │   └── index.js
│   │   ├── utils/
│   │   │   ├── logger.js
│   │   │   └── validators.js
│   │   └── server.js
│   ├── .env
│   ├── package.json
│   └── ecosystem.config.js (PM2)`}
                  </pre>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="api" className="p-4 border rounded-md bg-white mt-2">
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-lg mb-3">API Endpoints</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Authentication</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span className="font-medium">POST /api/auth/register</span>
                          <span className="text-gray-500">Create user account</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="font-medium">POST /api/auth/login</span>
                          <span className="text-gray-500">Get JWT token</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="font-medium">GET /api/auth/me</span>
                          <span className="text-gray-500">Get current user</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Posts</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span className="font-medium">GET /api/posts</span>
                          <span className="text-gray-500">Get all posts</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="font-medium">GET /api/posts/:id</span>
                          <span className="text-gray-500">Get post by ID</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="font-medium">POST /api/posts</span>
                          <span className="text-gray-500">Create post</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="font-medium">PUT /api/posts/:id</span>
                          <span className="text-gray-500">Update post</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="font-medium">DELETE /api/posts/:id</span>
                          <span className="text-gray-500">Delete post</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Comments</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span className="font-medium">GET /api/posts/:id/comments</span>
                          <span className="text-gray-500">Get post comments</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="font-medium">POST /api/posts/:id/comments</span>
                          <span className="text-gray-500">Add comment</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="font-medium">DELETE /api/comments/:id</span>
                          <span className="text-gray-500">Delete comment</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Users</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span className="font-medium">GET /api/users</span>
                          <span className="text-gray-500">Get all users</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="font-medium">GET /api/users/:id</span>
                          <span className="text-gray-500">Get user profile</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="font-medium">PUT /api/users/:id</span>
                          <span className="text-gray-500">Update profile</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="database" className="p-4 border rounded-md bg-white mt-2">
            <div className="space-y-6">
              <div className="flex items-start">
                <Database className="h-5 w-5 text-green-500 mr-3 mt-1" />
                <div>
                  <h3 className="font-medium">MongoDB Structure</h3>
                  <p className="mt-1 text-gray-600">The application uses MongoDB with the following schema:</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">User Schema</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="p-3 bg-gray-100 rounded-md text-sm overflow-auto">
{`{
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  avatar: { type: String },
  bio: { type: String },
  role: { type: String, default: 'user' },
  createdAt: { type: Date, default: Date.now }
}`}
                    </pre>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Post Schema</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="p-3 bg-gray-100 rounded-md text-sm overflow-auto">
{`{
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
  },
  featuredImage: { type: String },
  tags: [{ type: String }],
  status: { 
    type: String, 
    enum: ['draft', 'published'],
    default: 'draft'
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}`}
                    </pre>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Comment Schema</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="p-3 bg-gray-100 rounded-md text-sm overflow-auto">
{`{
  content: { type: String, required: true },
  post: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Post' 
  },
  author: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
  },
  createdAt: { type: Date, default: Date.now }
}`}
                    </pre>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="deployment" className="p-4 border rounded-md bg-white mt-2">
            <div className="space-y-6">
              <div className="flex items-start">
                <Server className="h-5 w-5 text-green-500 mr-3 mt-1" />
                <div>
                  <h3 className="font-medium">Render Deployment</h3>
                  <p className="mt-1 text-gray-600">The backend is configured for deployment on Render with:</p>
                  <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                    <li>Web Service configuration</li>
                    <li>Environment variable management</li>
                    <li>Database connection to MongoDB Atlas</li>
                    <li>Automatic deployment from GitHub</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start">
                <Shield className="h-5 w-5 text-green-500 mr-3 mt-1" />
                <div>
                  <h3 className="font-medium">Security Measures</h3>
                  <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                    <li>JWT authentication for API security</li>
                    <li>Rate limiting to prevent abuse</li>
                    <li>CORS configuration</li>
                    <li>Helmet.js for HTTP headers security</li>
                    <li>Input validation with express-validator</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start">
                <BarChart className="h-5 w-5 text-green-500 mr-3 mt-1" />
                <div>
                  <h3 className="font-medium">Monitoring and Logging</h3>
                  <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                    <li>Winston for comprehensive logging</li>
                    <li>Morgan for HTTP request logging</li>
                    <li>PM2 for process management and monitoring</li>
                    <li>Sentry integration for error tracking</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Getting Started with Backend Development</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">1. Clone the repository</h3>
              <pre className="mt-2 p-3 bg-gray-100 rounded-md text-sm overflow-auto">
                git clone https://github.com/yourusername/mern-blog-platform.git
              </pre>
            </div>
            <div>
              <h3 className="font-medium">2. Navigate to backend directory</h3>
              <pre className="mt-2 p-3 bg-gray-100 rounded-md text-sm overflow-auto">
                cd mern-blog-platform/backend
              </pre>
            </div>
            <div>
              <h3 className="font-medium">3. Install dependencies</h3>
              <pre className="mt-2 p-3 bg-gray-100 rounded-md text-sm overflow-auto">
                npm install
              </pre>
            </div>
            <div>
              <h3 className="font-medium">4. Set up environment variables</h3>
              <pre className="mt-2 p-3 bg-gray-100 rounded-md text-sm overflow-auto">
                cp .env.example .env
                # Edit .env file with your MongoDB connection string
              </pre>
            </div>
            <div>
              <h3 className="font-medium">5. Start development server</h3>
              <pre className="mt-2 p-3 bg-gray-100 rounded-md text-sm overflow-auto">
                npm run dev
              </pre>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Button asChild>
            <Link to="/frontend">
              Back to Frontend Architecture
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Backend;
