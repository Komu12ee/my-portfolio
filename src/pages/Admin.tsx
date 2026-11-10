import { useState } from "react";
import { usePortfolio, ProjectItem, PublicationItem } from "@/context/PortfolioContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Save,
  Plus,
  Trash2,
  Edit2,
  RotateCcw,
  Download,
  Upload,
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  Briefcase,
  BookOpen,
  FolderGit2,
  User,
  Settings,
  Sparkles,
  Image as ImageIcon,
  Video,
  X,
  Play,
} from "lucide-react";
import { Link } from "react-router-dom";

const Admin = () => {
  const {
    data,
    updatePersonalInfo,
    updateProject,
    addProject,
    deleteProject,
    updateExperience,
    updatePublication,
    addPublication,
    deletePublication,
    resetToDefaults,
    exportJSON,
    importJSON,
  } = usePortfolio();

  const [activeTab, setActiveTab] = useState("profile");
  const [saveNotice, setSaveNotice] = useState<string | null>(null);

  // Profile Form state
  const [profileForm, setProfileForm] = useState(data.personalInfo);

  // Project Form state (shared between Add and Edit)
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);
  const [projectForm, setProjectForm] = useState<Omit<ProjectItem, "id">>({
    title: "",
    category: "AI & GenAI",
    highlight: "",
    description: "",
    image: "",
    videoUrl: "",
    tags: [],
    github: "",
    link: "",
    featured: false,
  });
  const [tagsInput, setTagsInput] = useState("");

  // Publication Form state
  const [newPublication, setNewPublication] = useState<Omit<PublicationItem, "id">>({
    title: "",
    venue: "",
    detail: "",
    href: "",
    status: "Accepted",
  });

  const [importJsonText, setImportJsonText] = useState("");

  const notify = (msg: string) => {
    setSaveNotice(msg);
    setTimeout(() => setSaveNotice(null), 3500);
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updatePersonalInfo(profileForm);
    notify("Personal & Profile information updated successfully!");
  };

  const handleStartEditProject = (proj: ProjectItem) => {
    setEditingProjectId(proj.id);
    setProjectForm({
      title: proj.title,
      category: proj.category,
      highlight: proj.highlight || "",
      description: proj.description,
      image: proj.image || "",
      videoUrl: proj.videoUrl || "",
      tags: proj.tags || [],
      github: proj.github || "",
      link: proj.link || "",
      featured: !!proj.featured,
    });
    setTagsInput((proj.tags || []).join(", "));
    document.getElementById("project-form-card")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCancelEditProject = () => {
    setEditingProjectId(null);
    setProjectForm({
      title: "",
      category: "AI & GenAI",
      highlight: "",
      description: "",
      image: "",
      videoUrl: "",
      tags: [],
      github: "",
      link: "",
      featured: false,
    });
    setTagsInput("");
  };

  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectForm.title.trim()) return;

    const tagsArray = tagsInput
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    const payload = {
      ...projectForm,
      tags: tagsArray.length > 0 ? tagsArray : ["AI", "Engineering"],
    };

    if (editingProjectId) {
      updateProject(editingProjectId, payload);
      notify(`Project "${projectForm.title}" updated successfully!`);
    } else {
      addProject(payload);
      notify(`New project "${projectForm.title}" added to portfolio!`);
    }

    handleCancelEditProject();
  };

  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2.5 * 1024 * 1024) {
        alert("Image size exceeds 2.5MB. Please choose a smaller image.");
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target?.result as string;
        setProjectForm((prev) => ({ ...prev, image: base64 }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddPublication = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPublication.title.trim()) return;
    addPublication(newPublication);
    setNewPublication({
      title: "",
      venue: "",
      detail: "",
      href: "",
      status: "Accepted",
    });
    notify("New research publication added!");
  };

  const handleDownloadJSON = () => {
    const jsonStr = exportJSON();
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `portfolio-backup-${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    notify("Portfolio JSON exported successfully!");
  };

  const handleImportJSON = () => {
    if (!importJsonText.trim()) return;
    const ok = importJSON(importJsonText);
    if (ok) {
      setImportJsonText("");
      setProfileForm(data.personalInfo);
      notify("Portfolio data imported successfully!");
    } else {
      alert("Invalid JSON format. Please verify your backup JSON.");
    }
  };

  const handleResetDefaults = () => {
    if (window.confirm("Are you sure you want to reset all portfolio data to factory defaults?")) {
      resetToDefaults();
      setProfileForm(data.personalInfo);
      notify("Portfolio reset to default data!");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Admin Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="container-custom flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Exit to Website</span>
              </Button>
            </Link>
            <div className="h-4 w-[1px] bg-border" />
            <div className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-primary" />
              <h1 className="font-display font-bold text-lg">Portfolio Admin</h1>
              <Badge variant="outline" className="border-primary/40 text-primary text-xs hidden md:inline-flex">
                Live Dynamic Editor
              </Badge>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {saveNotice && (
              <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs text-emerald-500 animate-fade-in">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>{saveNotice}</span>
              </div>
            )}
            <Link to="/" target="_blank" rel="noreferrer">
              <Button size="sm" variant="default" className="gap-1.5">
                <ExternalLink className="h-3.5 w-3.5" />
                <span>View Live Site</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Admin Content */}
      <main className="container-custom max-w-6xl py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-2 sm:grid-cols-5 h-auto p-1.5 gap-1.5 bg-muted/60 rounded-xl">
            <TabsTrigger value="profile" className="gap-2 py-2.5">
              <User className="h-4 w-4" />
              <span>Profile & Hero</span>
            </TabsTrigger>
            <TabsTrigger value="projects" className="gap-2 py-2.5">
              <FolderGit2 className="h-4 w-4" />
              <span>Projects ({data.projects.length})</span>
            </TabsTrigger>
            <TabsTrigger value="experience" className="gap-2 py-2.5">
              <Briefcase className="h-4 w-4" />
              <span>Experience</span>
            </TabsTrigger>
            <TabsTrigger value="publications" className="gap-2 py-2.5">
              <BookOpen className="h-4 w-4" />
              <span>Publications ({data.publications.length})</span>
            </TabsTrigger>
            <TabsTrigger value="backup" className="gap-2 py-2.5">
              <Sparkles className="h-4 w-4" />
              <span>Backup & Reset</span>
            </TabsTrigger>
          </TabsList>

          {/* TAB 1: Profile & Hero */}
          <TabsContent value="profile" className="space-y-6">
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Personal Information & Hero Section</CardTitle>
                <CardDescription>
                  Update your identity, headlines, contact information, education, and footer status.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSaveProfile} className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={profileForm.name}
                        onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="roles">Roles / Tagline Bar</Label>
                      <Input
                        id="roles"
                        value={profileForm.roles}
                        onChange={(e) => setProfileForm({ ...profileForm, roles: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="headline">Hero Main Headline</Label>
                    <Input
                      id="headline"
                      value={profileForm.headline}
                      onChange={(e) => setProfileForm({ ...profileForm, headline: e.target.value })}
                      required
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={profileForm.location}
                        onChange={(e) => setProfileForm({ ...profileForm, location: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileForm.email}
                        onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gate">GATE Score</Label>
                      <Input
                        id="gate"
                        value={profileForm.gateScore}
                        onChange={(e) => setProfileForm({ ...profileForm, gateScore: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="linkedin">LinkedIn URL</Label>
                      <Input
                        id="linkedin"
                        value={profileForm.linkedin}
                        onChange={(e) => setProfileForm({ ...profileForm, linkedin: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="github">GitHub URL</Label>
                      <Input
                        id="github"
                        value={profileForm.github}
                        onChange={(e) => setProfileForm({ ...profileForm, github: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Education & Mission */}
                  <div className="border-t pt-4 space-y-4">
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                      Education & Current Mission Card
                    </h3>
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="space-y-2">
                        <Label htmlFor="mtech">M.Tech Degree & College</Label>
                        <Input
                          id="mtech"
                          value={`${profileForm.mtechTitle} - ${profileForm.mtechCollege}`}
                          onChange={(e) => setProfileForm({ ...profileForm, mtechCollege: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cgpa">M.Tech CGPA</Label>
                        <Input
                          id="cgpa"
                          value={profileForm.mtechCgpa}
                          onChange={(e) => setProfileForm({ ...profileForm, mtechCgpa: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="mtechYear">M.Tech Period</Label>
                        <Input
                          id="mtechYear"
                          value={profileForm.mtechYear}
                          onChange={(e) => setProfileForm({ ...profileForm, mtechYear: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="missionOrg">Current Mission Org</Label>
                        <Input
                          id="missionOrg"
                          value={profileForm.currentMissionOrg}
                          onChange={(e) =>
                            setProfileForm({ ...profileForm, currentMissionOrg: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="missionDetails">Current Mission Details</Label>
                        <Input
                          id="missionDetails"
                          value={profileForm.currentMissionDetails}
                          onChange={(e) =>
                            setProfileForm({ ...profileForm, currentMissionDetails: e.target.value })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  {/* Footer Settings */}
                  <div className="border-t pt-4 space-y-4">
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                      Footer & Visitor Settings
                    </h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="lastUpdated">Last Updated Date</Label>
                        <Input
                          id="lastUpdated"
                          value={profileForm.lastUpdated}
                          onChange={(e) =>
                            setProfileForm({ ...profileForm, lastUpdated: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="visitors">Baseline Visitor Count</Label>
                        <Input
                          id="visitors"
                          type="number"
                          value={profileForm.baseVisitorCount}
                          onChange={(e) =>
                            setProfileForm({
                              ...profileForm,
                              baseVisitorCount: parseInt(e.target.value, 10) || 0,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button type="submit" size="lg" className="gap-2">
                      <Save className="h-4 w-4" />
                      Save Profile Changes
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* TAB 2: Projects Manager (Add & Edit) */}
          <TabsContent value="projects" className="space-y-6">
            <Card id="project-form-card" className="border-2 border-primary/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    {editingProjectId ? (
                      <>
                        <Edit2 className="h-5 w-5 text-primary" />
                        <CardTitle className="text-xl">Edit Project</CardTitle>
                        <Badge variant="outline" className="border-primary/40 text-primary">
                          Editing Mode
                        </Badge>
                      </>
                    ) : (
                      <>
                        <Plus className="h-5 w-5 text-primary" />
                        <CardTitle className="text-xl">Add New Project</CardTitle>
                      </>
                    )}
                  </div>
                  <CardDescription className="mt-1">
                    {editingProjectId
                      ? "Update project details, custom cover image, demo video link, and metadata."
                      : "Create and publish a new project with cover image and demo video."}
                  </CardDescription>
                </div>
                {editingProjectId && (
                  <Button variant="ghost" size="sm" onClick={handleCancelEditProject} className="gap-1 text-muted-foreground">
                    <X className="h-4 w-4" /> Cancel Edit
                  </Button>
                )}
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSaveProject} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="projTitle">Project Title</Label>
                      <Input
                        id="projTitle"
                        placeholder="e.g. LLM Evaluation Center"
                        value={projectForm.title}
                        onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="projCategory">Category</Label>
                      <select
                        id="projCategory"
                        value={projectForm.category}
                        onChange={(e) =>
                          setProjectForm({
                            ...projectForm,
                            category: e.target.value as ProjectItem["category"],
                          })
                        }
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <option value="AI & GenAI">AI & GenAI</option>
                        <option value="Machine Learning">Machine Learning</option>
                        <option value="Engineering & Web">Engineering & Web</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="projHighlight">Badge / Highlight (Optional)</Label>
                      <Input
                        id="projHighlight"
                        placeholder="e.g. Production Deployed • 10K Users"
                        value={projectForm.highlight}
                        onChange={(e) => setProjectForm({ ...projectForm, highlight: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="projTags">Tags (Comma-separated)</Label>
                      <Input
                        id="projTags"
                        placeholder="Python, FastAPI, Docker, PyTorch"
                        value={tagsInput}
                        onChange={(e) => setTagsInput(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projDesc">Description</Label>
                    <Textarea
                      id="projDesc"
                      placeholder="Comprehensive summary of architectural scope, algorithms, and key outcomes..."
                      rows={3}
                      value={projectForm.description}
                      onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                      required
                    />
                  </div>

                  {/* IMAGE & DEMO VIDEO ROW */}
                  <div className="rounded-xl border bg-secondary/30 p-4 space-y-4">
                    <div className="flex items-center gap-2">
                      <ImageIcon className="h-4 w-4 text-primary" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-foreground">
                        Project Media (Image & Demo Video)
                      </span>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      {/* Image section */}
                      <div className="space-y-2">
                        <Label htmlFor="projImage">Project Cover Image</Label>
                        <div className="space-y-2">
                          <Input
                            id="projImage"
                            placeholder="Paste image URL (https://...)"
                            value={projectForm.image || ""}
                            onChange={(e) => setProjectForm({ ...projectForm, image: e.target.value })}
                          />
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground">or upload from device:</span>
                            <input
                              type="file"
                              id="imageUploadInput"
                              accept="image/*"
                              className="hidden"
                              onChange={handleImageFileChange}
                            />
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              className="text-xs h-7 gap-1.5"
                              onClick={() => document.getElementById("imageUploadInput")?.click()}
                            >
                              <Upload className="h-3 w-3" /> Choose File
                            </Button>
                            {projectForm.image && (
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="text-xs h-7 text-destructive hover:text-destructive"
                                onClick={() => setProjectForm({ ...projectForm, image: "" })}
                              >
                                Remove Image
                              </Button>
                            )}
                          </div>
                        </div>

                        {projectForm.image && (
                          <div className="mt-2 relative w-32 h-20 rounded-md overflow-hidden border bg-muted">
                            <img
                              src={projectForm.image}
                              alt="Preview"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                      </div>

                      {/* Demo Video Link section */}
                      <div className="space-y-2">
                        <Label htmlFor="projVideo" className="flex items-center gap-1.5">
                          <Video className="h-4 w-4 text-primary" />
                          <span>Demo Video Link</span>
                        </Label>
                        <Input
                          id="projVideo"
                          placeholder="e.g. YouTube, Loom, Drive, or MP4 link"
                          value={projectForm.videoUrl || ""}
                          onChange={(e) => setProjectForm({ ...projectForm, videoUrl: e.target.value })}
                        />
                        <p className="text-[11px] text-muted-foreground">
                          When added, a prominent <strong>"Watch Demo"</strong> button will appear on the project card.
                        </p>
                        {projectForm.videoUrl && (
                          <div className="flex items-center gap-1.5 text-xs text-amber-500 font-medium">
                            <Play className="h-3.5 w-3.5 fill-current" />
                            <span>Demo video configured</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="projLive">Live URL / Portal</Label>
                      <Input
                        id="projLive"
                        placeholder="https://example.com"
                        value={projectForm.link}
                        onChange={(e) => setProjectForm({ ...projectForm, link: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="projGithub">GitHub Repository</Label>
                      <Input
                        id="projGithub"
                        placeholder="https://github.com/..."
                        value={projectForm.github}
                        onChange={(e) => setProjectForm({ ...projectForm, github: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <input
                      type="checkbox"
                      id="projFeatured"
                      checked={projectForm.featured}
                      onChange={(e) => setProjectForm({ ...projectForm, featured: e.target.checked })}
                      className="h-4 w-4 rounded border-gray-300 text-primary"
                    />
                    <Label htmlFor="projFeatured" className="cursor-pointer font-medium text-sm">
                      Mark as Featured Project
                    </Label>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <Button type="submit" className="gap-2">
                      {editingProjectId ? (
                        <>
                          <Save className="h-4 w-4" /> Save Project Changes
                        </>
                      ) : (
                        <>
                          <Plus className="h-4 w-4" /> Add Project
                        </>
                      )}
                    </Button>
                    {editingProjectId && (
                      <Button type="button" variant="outline" onClick={handleCancelEditProject}>
                        Cancel
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Existing Projects List */}
            <div className="space-y-4">
              <h2 className="font-display font-bold text-xl">Existing Projects ({data.projects.length})</h2>
              <div className="grid gap-4">
                {data.projects.map((proj) => (
                  <Card key={proj.id} className="border">
                    <CardContent className="p-5 flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div className="space-y-2 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-semibold text-base">{proj.title}</h3>
                          <Badge variant="secondary" className="text-xs">
                            {proj.category}
                          </Badge>
                          {proj.featured && (
                            <Badge className="bg-primary text-primary-foreground text-xs">Featured</Badge>
                          )}
                          {proj.highlight && (
                            <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded">
                              {proj.highlight}
                            </span>
                          )}
                          {proj.videoUrl && (
                            <Badge variant="outline" className="border-amber-500/40 text-amber-500 text-xs flex items-center gap-1">
                              <Play className="h-2.5 w-2.5 fill-current" /> Demo Video
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                          {proj.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {proj.tags.map((t) => (
                            <Badge key={t} variant="outline" className="text-[10px]">
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {proj.videoUrl && (
                          <a
                            href={proj.videoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-md hover:bg-muted text-amber-500 hover:text-amber-400 transition-colors"
                            title="Open Demo Video"
                          >
                            <Video className="h-4 w-4" />
                          </a>
                        )}
                        {proj.link && (
                          <a
                            href={proj.link}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-md hover:bg-muted text-muted-foreground hover:text-primary transition-colors"
                            title="Open Live Link"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-1.5 text-xs h-8"
                          onClick={() => handleStartEditProject(proj)}
                        >
                          <Edit2 className="h-3.5 w-3.5" /> Edit
                        </Button>
                        <Button
                          variant="destructive"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => {
                            if (window.confirm(`Delete project "${proj.title}"?`)) {
                              deleteProject(proj.id);
                              notify(`Project "${proj.title}" removed.`);
                            }
                          }}
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* TAB 3: Experience */}
          <TabsContent value="experience" className="space-y-6">
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Professional Experience</CardTitle>
                <CardDescription>
                  Edit your role descriptions, achievements, and responsibilities.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {data.experience.map((exp) => (
                  <div key={exp.id} className="rounded-xl border p-5 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h3 className="font-display font-bold text-lg">{exp.role}</h3>
                        <p className="text-sm font-medium text-primary">{exp.organization}</p>
                      </div>
                      <Badge variant="secondary">{exp.period}</Badge>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Key Accomplishments & Bullet Points (One per line)
                      </Label>
                      <Textarea
                        rows={exp.points.length + 2}
                        defaultValue={exp.points.join("\n")}
                        onBlur={(e) => {
                          const updatedPoints = e.target.value
                            .split("\n")
                            .map((p) => p.trim())
                            .filter(Boolean);
                          updateExperience(exp.id, { points: updatedPoints });
                          notify(`Updated experience for ${exp.role}!`);
                        }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* TAB 4: Publications */}
          <TabsContent value="publications" className="space-y-6">
            {/* Add Publication Form */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Add Research Publication</CardTitle>
                <CardDescription>Add new conference papers or journal publications.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddPublication} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="pubTitle">Paper Title</Label>
                      <Input
                        id="pubTitle"
                        placeholder="e.g. Dynamic Query Handling with RAG Fusion..."
                        value={newPublication.title}
                        onChange={(e) => setNewPublication({ ...newPublication, title: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pubStatus">Status</Label>
                      <select
                        id="pubStatus"
                        value={newPublication.status}
                        onChange={(e) => setNewPublication({ ...newPublication, status: e.target.value })}
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <option value="Published">Published</option>
                        <option value="Accepted">Accepted</option>
                        <option value="Under Review">Under Review</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="pubVenue">Conference / Journal Venue</Label>
                      <Input
                        id="pubVenue"
                        placeholder="e.g. IEEE Xplore, 2025"
                        value={newPublication.venue}
                        onChange={(e) => setNewPublication({ ...newPublication, venue: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pubLink">Paper URL / DOI</Label>
                      <Input
                        id="pubLink"
                        placeholder="https://..."
                        value={newPublication.href}
                        onChange={(e) => setNewPublication({ ...newPublication, href: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pubDetail">Summary & Contribution</Label>
                    <Textarea
                      id="pubDetail"
                      placeholder="Brief overview of methodology, dataset size, and performance metrics..."
                      value={newPublication.detail}
                      onChange={(e) => setNewPublication({ ...newPublication, detail: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" className="gap-2">
                    <Plus className="h-4 w-4" /> Add Publication
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* List Existing Publications */}
            <div className="space-y-4">
              <h2 className="font-display font-bold text-xl">
                Publications List ({data.publications.length})
              </h2>
              <div className="grid gap-4">
                {data.publications.map((pub) => (
                  <Card key={pub.id} className="border">
                    <CardContent className="p-5 flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div className="space-y-1.5 flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-base">{pub.title}</h3>
                          <Badge variant="outline">{pub.status || "Accepted"}</Badge>
                        </div>
                        <p className="text-xs font-medium text-primary">{pub.venue}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{pub.detail}</p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <a
                          href={pub.href}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-md hover:bg-muted text-muted-foreground hover:text-primary transition-colors"
                          title="Open Paper"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                        <Button
                          variant="destructive"
                          size="icon"
                          onClick={() => {
                            if (window.confirm(`Delete publication "${pub.title}"?`)) {
                              deletePublication(pub.id);
                              notify(`Publication removed.`);
                            }
                          }}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* TAB 5: Backup & Reset */}
          <TabsContent value="backup" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Export Portfolio Backup</CardTitle>
                  <CardDescription>
                    Download a complete JSON file containing all your edited profile info, projects, and publications.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Keep a local backup copy of your customized portfolio data anytime you make extensive edits.
                  </p>
                  <Button onClick={handleDownloadJSON} className="gap-2">
                    <Download className="h-4 w-4" /> Export JSON Backup
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Reset to Factory Defaults</CardTitle>
                  <CardDescription>
                    Revert all changes back to the original portfolio state provided in the codebase.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    This will clear your local custom changes and restore all original government projects, publications, and descriptions.
                  </p>
                  <Button variant="outline" onClick={handleResetDefaults} className="gap-2 text-destructive border-destructive/40 hover:bg-destructive/10">
                    <RotateCcw className="h-4 w-4" /> Reset All to Defaults
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2">
              <CardHeader>
                <CardTitle>Import Portfolio JSON</CardTitle>
                <CardDescription>
                  Paste your backup JSON below to restore or sync your portfolio configuration.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Paste complete portfolio JSON data here..."
                  rows={6}
                  value={importJsonText}
                  onChange={(e) => setImportJsonText(e.target.value)}
                />
                <Button onClick={handleImportJSON} className="gap-2">
                  <Upload className="h-4 w-4" /> Import & Apply Data
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;
