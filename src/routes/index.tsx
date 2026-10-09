import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Heart, Sprout, MapPin } from "lucide-react";
import { Header, DonationForm, Footer } from "@/components/awassa";
import { Button } from "@/components/ui/button";
import children from "@/assets/children_garden.jpg";
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Awassa Children's Project | A brighter future" },
    { name: "description", content: "Be part of a brighter future for children with Awassa Children's Project." },
    { property: "og:title", content: "Awassa Children's Project | A brighter future" },
    { property: "og:description", content: "Every child deserves care, opportunity, and a place to belong." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});
function Index() {
  return <><Header /><main><section className="hero">
    <img className="hero-photo" src={children} alt="Illustrative image of children smiling with schoolbooks in a green garden" width={1920} height={1088} fetchPriority="high" />
    <div className="hero-inner"><div className="hero-content"><p className="hero-eyebrow">Awassa Children's Project</p><h1>A brighter future.<br />For every child.</h1><p className="hero-description">Every child deserves a place to belong,<br />a chance to learn, and a future full of possibility.</p><DonationForm /></div></div>
    <p className="hero-caption"><MapPin size={12} /> Inspired by Ethiopia</p>
  </section><div className="promise-band"><Heart /><p>Small acts of generosity. <strong>A world of possibility for children.</strong></p></div>
  <section className="vision-section"><p className="eyebrow">Why children?</p><h2>Because a childhood changes everything.</h2><p className="section-intro">Care, connection, and opportunity can shape a lifetime.<br />Together, we can imagine a different future.</p><div className="vision-grid">
    <div className="vision-item"><Heart className="vision-icon" /><h3>A place to belong</h3><p>A childhood rooted in kindness, connection, and the feeling of being part of a community.</p></div>
    <div className="vision-item"><BookOpen className="vision-icon" /><h3>A chance to learn</h3><p>The freedom to be curious, discover new possibilities, and dream beyond today.</p></div>
    <div className="vision-item"><Sprout className="vision-icon" /><h3>A future to grow into</h3><p>A world where children have the encouragement and opportunity to find their own path.</p></div>
  </div><Button variant="link" className="vision-link" asChild><a href="/our-work">Explore our vision <ArrowRight /></a></Button></section>
  <section className="invitation"><h2>A brighter future starts with you.</h2><p>Be part of a community that believes in children.</p><Button variant="give" asChild size="lg"><a href="#give">Give today <Heart /></a></Button></section>
  </main><Footer /></>;
}
