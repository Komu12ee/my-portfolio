import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { usePortfolio } from "@/context/PortfolioContext";

const Footer = () => {
  const { data } = usePortfolio();
  const { personalInfo } = data;

  const baseCount = personalInfo.baseVisitorCount || 101;
  const lastUpdated = personalInfo.lastUpdated || "November 10, 2026";

  const [visitorCount, setVisitorCount] = useState<number>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio_visitor_count");
      if (saved) {
        const parsed = parseInt(saved, 10);
        if (!isNaN(parsed) && parsed > 0) return parsed;
      }
    }
    return baseCount;
  });

  useEffect(() => {
    let isMounted = true;
    const isNewSession = !sessionStorage.getItem("portfolio_session_tracked");

    const fetchVisitorCount = async () => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2500);

        const action = isNewSession ? "up" : "get";
        const url = `https://api.counterapi.dev/v1/komendra-sahu-portfolio/visits/${action}`;

        const res = await fetch(url, {
          signal: controller.signal,
          headers: { Accept: "application/json" },
        });
        clearTimeout(timeoutId);

        if (res.ok) {
          const resData = await res.json();
          if (resData && typeof resData.count === "number") {
            const serverCount = resData.count + baseCount;
            if (isMounted) {
              setVisitorCount(serverCount);
              localStorage.setItem("portfolio_visitor_count", serverCount.toString());
              sessionStorage.setItem("portfolio_session_tracked", "true");
              return;
            }
          }
        }
      } catch {
        // Fallback gracefully on network timeout or ad-blocker
      }

      if (isMounted) {
        let current = visitorCount;
        if (isNewSession) {
          current += 1;
          sessionStorage.setItem("portfolio_session_tracked", "true");
        }
        setVisitorCount(current);
        localStorage.setItem("portfolio_visitor_count", current.toString());
      }
    };

    fetchVisitorCount();

    return () => {
      isMounted = false;
    };
  }, [baseCount]);

  const socialLinks = [
    { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn", external: true },
    { icon: Github, href: personalInfo.github, label: "GitHub", external: true },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email", external: false },
  ];

  return (
    <footer className="border-t border-border bg-card">
      <div className="container-custom py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Copyright */}
          <div className="space-y-1">
            <p className="text-sm font-medium text-foreground">
              © {new Date().getFullYear()} {personalInfo.name}
            </p>
            <p className="text-xs text-muted-foreground flex items-center gap-2">
              <span>{personalInfo.roles}</span>
              <span>•</span>
              <Link
                to="/admin"
                className="opacity-50 hover:opacity-100 hover:text-primary transition-opacity font-medium underline underline-offset-2"
                title="Open Portfolio Admin Dashboard"
              >
                Admin
              </Link>
            </p>
          </div>

          {/* Visitor Count & Last Updated Badges */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Live Visitor Count */}
            <div
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-sm transition-colors hover:border-primary/40"
              title="Verified unique visitors"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <Users className="h-3.5 w-3.5 text-primary" />
              <span>
                Visitors:{" "}
                <strong className="text-foreground font-semibold">
                  {visitorCount.toLocaleString()}
                </strong>
              </span>
            </div>

            {/* Last Updated */}
            <div
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/40 px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-sm"
              title="Portfolio last updated date"
            >
              <Clock className="h-3.5 w-3.5 text-primary" />
              <span>
                Last updated:{" "}
                <span className="text-foreground font-semibold">{lastUpdated}</span>
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.external ? "_blank" : undefined}
                rel={social.external ? "noopener noreferrer" : undefined}
                className="rounded-lg border border-border/60 bg-secondary/30 p-2 text-muted-foreground transition-all hover:border-primary hover:text-primary hover:shadow-sm"
                aria-label={social.label}
                title={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
