import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Menu, X, LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/awassa_logo.png.asset.json";

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="header-inner">
    <Link to="/" aria-label="Awassa Children's Project home"><img className="brand-logo" src={logo.url} alt="Awassa Children's Project" width="237" height="71" /></Link>
    <nav className="desktop-nav" aria-label="Main navigation"><Link to="/get-involved">Take action <ArrowRight size={13} /></Link><Link to="/about">About us</Link><Link to="/our-work">Why children?</Link></nav>
    <Button variant="give" asChild className="header-give"><a href="/#give">Give <Heart size={15} /></a></Button>
    <Button variant="ghost" size="icon" className="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
  </div>{open && <nav className="mobile-nav" aria-label="Mobile navigation"><Link to="/get-involved" onClick={() => setOpen(false)}>Take action</Link><Link to="/about" onClick={() => setOpen(false)}>About us</Link><Link to="/our-work" onClick={() => setOpen(false)}>Why children?</Link></nav>}</header>;
}

export function DonationForm() {
  const [monthly, setMonthly] = useState(true);
  const [amount, setAmount] = useState("40");
  const [custom, setCustom] = useState(false);
  const [notice, setNotice] = useState(false);
  return <div className="donation-form" id="give"><div className="donation-tabs" role="group" aria-label="Donation frequency">
    <Button variant={monthly ? "give" : "ghost"} onClick={() => { setMonthly(true); setNotice(false); }}>Monthly <Heart size={14} /></Button>
    <Button variant={!monthly ? "give" : "ghost"} onClick={() => { setMonthly(false); setNotice(false); }}>Give once</Button>
  </div><form onSubmit={e => { e.preventDefault(); setNotice(true); }} className="donation-body">
    <p className="form-label">Choose an amount to give</p><div className="amount-grid">{["10", "20", "40", "100"].map(value => <Button key={value} type="button" variant="amount" data-selected={!custom && amount === value} onClick={() => { setAmount(value); setCustom(false); setNotice(false); }}>${value}<span className="amount-unit">{monthly ? "USD/mo" : "USD"}</span></Button>)}
    <Button type="button" variant="amount" className="other-amount" data-selected={custom} onClick={() => { setCustom(true); setAmount(""); setNotice(false); }}>Other amount</Button></div>
    {custom && <label className="custom-label">Amount in USD<input type="number" min="1" step="1" required value={amount} onChange={e => setAmount(e.target.value)} placeholder="Enter amount" autoFocus /></label>}
    <p className="giving-note"><Heart size={16} /> A little kindness. A brighter future.</p>
    <Button type="submit" variant="give" className="donation-submit" disabled={!amount || Number(amount) <= 0}>{monthly ? "Join today" : "Give today"}<ArrowRight /></Button>
    {notice && <p role="status" className="payment-notice">Thank you for choosing to give ${amount}{monthly ? " monthly" : ""}. Online donations are not available yet. No payment has been taken.</p>}
    <p className="secure-note"><LockKeyhole size={11} /> Give with love. Make a difference.</p>
  </form></div>;
}

export function Footer() {
  return <footer className="site-footer"><div className="footer-inner"><Link to="/"><img src={logo.url} alt="Awassa Children's Project" width="237" height="71" loading="lazy" /></Link><p>A brighter future starts with all of us.</p><nav aria-label="Footer navigation"><Link to="/about">About us</Link><Link to="/our-work">Our vision</Link><Link to="/get-involved">Get involved</Link></nav></div><div className="footer-bottom">© {new Date().getFullYear()} Awassa Children's Project</div></footer>;
}

export function StoryPage({ eyebrow, title, text, points }: { eyebrow: string; title: string; text: string; points: { title: string; text: string }[] }) {
  return <><Header /><main className="story-page"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="story-intro">{text}</p><div className="story-points">{points.map(point => <section key={point.title}><h2>{point.title}</h2><p>{point.text}</p></section>)}</div><Button variant="give" asChild size="lg"><a href="/#give">Be part of a brighter future <ArrowRight /></a></Button></main><Footer /></>;
}