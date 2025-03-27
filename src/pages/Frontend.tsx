
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Edit, FileText, Plus, Trash2, User } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

// Sample blog post data
const initialPosts = [
  {
    id: 1,
    title: "Getting Started with MERN Stack",
    content: "The MERN stack consists of MongoDB, Express.js, React, and Node.js. This powerful combination allows developers to build full-stack applications using JavaScript throughout the entire development process...",
    author: "Jane Developer",
    date: "2023-04-15",
    tags: ["MongoDB", "Express", "React", "Node.js"]
  },
  {
    id: 2,
    title: "Implementing Authentication in Your MERN App",
    content: "Authentication is a critical aspect of any web application. In this post, we'll explore how to implement JWT-based authentication in a MERN stack application...",
    author: "John Auth",
    date: "2023-04-12",
    tags: ["Authentication", "Security", "JWT"]
  },
  {
    id: 3,
    title: "Deploying MERN Applications",
    content: "Deploying a MERN stack application involves several steps, from setting up your production environment to configuring your database. In this comprehensive guide...",
    author: "Jane Developer",
    date: "2023-04-08",
    tags: ["Deployment", "DevOps", "Hosting"]
  }
];

const Frontend = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [activeTab, setActiveTab] = useState("posts");
  const [editingPost, setEditingPost] = useState(null);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    author: "Jane Developer",
    tags: ""
  });

  const handleCreatePost = () => {
    if (!newPost.title || !newPost.content) return;
    
    const post = {
      id: Date.now(),
      title: newPost.title,
      content: newPost.content,
      author: newPost.author,
      date: new Date().toISOString().split('T')[0],
      tags: newPost.tags.split(',').map(tag => tag.trim())
    };
    
    setPosts([post, ...posts]);
    setNewPost({
      title: "",
      content: "",
      author: "Jane Developer",
      tags: ""
    });
    setActiveTab("posts");
  };

  const handleDeletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const handleEditPost = (post) => {
    setEditingPost(post);
    setNewPost({
      title: post.title,
      content: post.content,
      author: post.author,
      tags: post.tags.join(', ')
    });
    setActiveTab("create");
  };

  const handleUpdatePost = () => {
    if (!editingPost) return;
    
    const updatedPosts = posts.map(post => {
      if (post.id === editingPost.id) {
        return {
          ...post,
          title: newPost.title,
          content: newPost.content,
          author: newPost.author,
          tags: newPost.tags.split(',').map(tag => tag.trim())
        };
      }
      return post;
    });
    
    setPosts(updatedPosts);
    setEditingPost(null);
    setNewPost({
      title: "",
      content: "",
      author: "Jane Developer",
      tags: ""
    });
    setActiveTab("posts");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Personal Blog Platform</h1>
          <p className="mt-2 text-gray-600">
            Create, edit, and publish your blog posts
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="posts">Blog Posts</TabsTrigger>
            <TabsTrigger value="create">
              {editingPost ? "Edit Post" : "Create New Post"}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="posts" className="p-4 border rounded-md bg-white mt-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">All Posts</h2>
              <Button onClick={() => {
                setEditingPost(null);
                setNewPost({
                  title: "",
                  content: "",
                  author: "Jane Developer",
                  tags: ""
                });
                setActiveTab("create");
              }}>
                <Plus className="mr-1 h-4 w-4" />
                New Post
              </Button>
            </div>
            
            <div className="space-y-4">
              {posts.map(post => (
                <Card key={post.id} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{post.title}</CardTitle>
                        <div className="flex items-center mt-2 text-sm text-gray-500">
                          <User className="h-3 w-3 mr-1" />
                          <span className="mr-3">{post.author}</span>
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm" onClick={() => handleEditPost(post)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleDeletePost(post.id)}>
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 line-clamp-3">{post.content}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-3">
                      {post.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="bg-gray-50 pt-3">
                    <Button variant="outline" size="sm" className="ml-auto">
                      <FileText className="mr-1 h-4 w-4" />
                      Read More
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="create" className="p-4 border rounded-md bg-white mt-2">
            <h2 className="text-xl font-semibold mb-4">
              {editingPost ? "Edit Post" : "Create New Post"}
            </h2>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Post Title</Label>
                <Input 
                  id="title" 
                  placeholder="Enter post title" 
                  value={newPost.title}
                  onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                />
              </div>
              
              <div>
                <Label htmlFor="content">Content</Label>
                <Textarea 
                  id="content" 
                  placeholder="Write your post content here..." 
                  className="min-h-[200px]"
                  value={newPost.content}
                  onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                />
              </div>
              
              <div>
                <Label htmlFor="author">Author</Label>
                <Input 
                  id="author" 
                  placeholder="Your name" 
                  value={newPost.author}
                  onChange={(e) => setNewPost({...newPost, author: e.target.value})}
                />
              </div>
              
              <div>
                <Label htmlFor="tags">Tags (comma separated)</Label>
                <Input 
                  id="tags" 
                  placeholder="React, JavaScript, Web Development" 
                  value={newPost.tags}
                  onChange={(e) => setNewPost({...newPost, tags: e.target.value})}
                />
              </div>
              
              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline" onClick={() => setActiveTab("posts")}>
                  Cancel
                </Button>
                <Button onClick={editingPost ? handleUpdatePost : handleCreatePost}>
                  {editingPost ? "Update Post" : "Publish Post"}
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Deployment Instructions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">1. Backend Deployment (Render)</h3>
              <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                <li>Create a new Web Service on Render</li>
                <li>Connect your GitHub repository</li>
                <li>Set environment variables for MongoDB connection and JWT secret</li>
                <li>Configure build command: <code>cd backend && npm install</code></li>
                <li>Configure start command: <code>cd backend && npm start</code></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium">2. Frontend Deployment (Vercel)</h3>
              <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                <li>Import your repository on Vercel</li>
                <li>Set the root directory to <code>frontend</code></li>
                <li>Configure the environment variable for API URL</li>
                <li>Deploy and obtain your production URL</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium">3. Continuous Integration</h3>
              <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                <li>GitHub Actions workflow is configured to run tests on each push</li>
                <li>Pull requests require passing tests before merging</li>
                <li>Automated deployments are triggered on main branch changes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
