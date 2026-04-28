import React, { useState, useEffect, useRef } from 'react';
import { 
  Layers, 
  Box, 
  Zap, 
  Wrench, 
  Cpu,
  Mail, 
  ArrowRight,
  ChevronRight,
  Printer,
  CheckCircle2,
  Home,
  Briefcase,
  GitMerge,
  Target,
  Orbit,
  Crosshair,
  Activity,
  Terminal
} from 'lucide-react';

// --- Utility: Smooth Reveal ---
const FadeIn = ({ children, delay = 0, className = "", direction = "up" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getInitialTransform = () => {
    switch (direction) {
      case "up": return "translateY(30px) scale(0.95)";
      case "down": return "translateY(-30px) scale(0.95)";
      case "left": return "translateX(30px) scale(0.95)";
      case "right": return "translateX(-30px) scale(0.95)";
      default: return "translateY(30px) scale(0.95)";
    }
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0) scale(1)' : getInitialTransform(),
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

// --- Main Application ---
export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  // Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - window.innerHeight / 3) {
          current = section.getAttribute('id');
        }
      });
      if (current) setActiveTab(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-slate-300 font-sans selection:bg-cyan-500/40 selection:text-white overflow-x-hidden pb-24 md:pb-0 relative">
      
      {/* Global Futuristic Background Grid */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] mask-radial-gradient"></div>
      </div>

      {/* --- Mobile Top Header --- */}
      <div className="md:hidden fixed top-0 w-full z-40 bg-black/60 backdrop-blur-xl border-b border-cyan-500/20 py-4 px-6 flex items-center justify-between shadow-[0_4px_30px_rgba(6,182,212,0.1)]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-black border border-cyan-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.4)_inset]">
            <Layers size={16} className="text-cyan-400" />
          </div>
          <span className="text-lg font-black text-white tracking-widest uppercase">Layer<span className="text-cyan-500">Forge</span>X</span>
        </div>
      </div>

      {/* --- Desktop Top Navigation --- */}
      <nav className="hidden md:flex fixed w-full z-50 top-0 bg-black/50 backdrop-blur-2xl border-b border-cyan-500/10 py-5 px-8 items-center justify-between transition-all">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollTo('home')}>
          <div className="w-10 h-10 rounded-xl bg-black border border-cyan-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.2)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.5)_inset] transition-all duration-500">
            <Layers size={20} className="text-cyan-400" />
          </div>
          <span className="text-xl font-black text-white tracking-widest uppercase group-hover:text-cyan-300 transition-colors">
            Layer<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">Forge</span>X
          </span>
        </div>
        <div className="flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
          <button onClick={() => scrollTo('services')} className={`relative transition duration-300 ${activeTab === 'services' ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]' : 'text-slate-500 hover:text-cyan-300'}`}>Leistungen</button>
          <button onClick={() => scrollTo('benefits')} className={`relative transition duration-300 ${activeTab === 'benefits' ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]' : 'text-slate-500 hover:text-cyan-300'}`}>Vorteile</button>
          <button onClick={() => scrollTo('process')} className={`relative transition duration-300 ${activeTab === 'process' ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]' : 'text-slate-500 hover:text-cyan-300'}`}>Ablauf</button>
          <button onClick={() => scrollTo('contact')} className="group relative px-6 py-2.5 bg-cyan-950/30 border border-cyan-500/50 text-cyan-400 hover:text-white overflow-hidden transition-all">
            <div className="absolute inset-0 bg-cyan-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            <span className="relative z-10 flex items-center gap-2">Anfragen <Mail size={14}/></span>
          </button>
        </div>
      </nav>

      <main className="relative z-10">
        {/* --- Hero Section --- */}
        <section id="home" className="relative min-h-[100dvh] flex flex-col justify-center px-6 md:px-12 pt-20 md:pt-24 pb-20 md:pb-0 overflow-hidden">
          
          {/* Neon Glow Orbs */}
          <div className="absolute top-1/4 right-1/4 w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-1/4 w-[50vw] h-[50vw] bg-fuchsia-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
          
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 md:gap-16 items-center z-10">
            
            <div className="flex flex-col items-start relative z-20">
              <FadeIn delay={100}>
                <div className="inline-flex items-center gap-3 px-3 py-1.5 border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-xs font-mono mb-6 backdrop-blur-sm shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                  <Activity size={14} className="animate-pulse" />
                  <span>BEREIT ZUR FERTIGUNG</span>
                </div>
              </FadeIn>
              
              <FadeIn delay={200}>
                <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.0] tracking-tighter mb-4 md:mb-6 uppercase">
                  Zukunft<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500">
                    Drucken.
                  </span>
                </h1>
              </FadeIn>
              
              <FadeIn delay={300}>
                <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-md leading-relaxed font-light border-l-2 border-cyan-500/50 pl-4">
                  Präziser 3D-Druck für Prototypen und Serien. Konvertieren Sie digitale Modelle in physische Realität in nur wenigen Tagen.
                </p>
              </FadeIn>

              <FadeIn delay={400} className="w-full sm:w-auto">
                <button onClick={() => scrollTo('contact')} className="w-full sm:w-auto group relative flex items-center justify-center gap-4 px-8 py-5 bg-cyan-500 text-black font-black text-lg uppercase tracking-widest overflow-hidden transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] hover:scale-[1.02]">
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                  <span className="relative z-10">Projekt starten</span>
                  <Crosshair size={20} className="relative z-10 group-hover:rotate-90 transition-transform duration-500" />
                </button>
              </FadeIn>
            </div>

            {/* Futuristic Laser Hologram Visualizer */}
            <div className="relative h-[45vh] md:h-[600px] w-full flex items-center justify-center mt-8 md:mt-0 perspective-1000">
              <FadeIn delay={300} className="relative w-full h-full flex flex-col items-center justify-center">
                
                {/* Holographic Projection Base */}
                <div className="absolute bottom-10 md:bottom-20 w-64 md:w-96 h-24 bg-cyan-500/5 border border-cyan-400/20 rounded-full blur-sm transform rotate-x-60"></div>
                <div className="absolute bottom-10 md:bottom-20 w-48 md:w-72 h-16 bg-cyan-400/10 border border-cyan-300/40 rounded-full transform rotate-x-60 shadow-[0_0_50px_rgba(6,182,212,0.4)]"></div>
                
                {/* 3D Hologram Structure */}
                <div className="relative z-10 w-40 h-40 md:w-56 md:h-56 transform-style-3d animate-spin-slow">
                  {/* Glowing core */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/40 to-transparent blur-xl"></div>
                  
                  {/* Wireframe Box */}
                  <div className="absolute inset-0 border border-cyan-400/50 shadow-[0_0_15px_rgba(6,182,212,0.5)_inset] bg-cyan-950/20 backdrop-blur-sm flex items-center justify-center transform translate-z-10">
                     <Layers size={60} className="text-cyan-300 opacity-80" />
                  </div>
                  <div className="absolute inset-0 border border-fuchsia-500/30 transform -translate-z-10 bg-fuchsia-950/10"></div>
                </div>

                {/* Laser Scanning Beam */}
                <div className="absolute top-0 w-full max-w-sm h-full pointer-events-none overflow-hidden mask-fade-y">
                  <div className="w-full h-1 bg-cyan-400 shadow-[0_0_20px_4px_rgba(6,182,212,0.8)] animate-laser-scan relative">
                    <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-32 h-3 bg-white blur-sm rounded-full"></div>
                  </div>
                </div>

                {/* Floating Data particles */}
                <div className="absolute top-1/4 right-1/4 text-cyan-500 font-mono text-[10px] animate-float-fast opacity-50">Z: 0.1mm</div>
                <div className="absolute bottom-1/3 left-1/4 text-fuchsia-500 font-mono text-[10px] animate-float-slow opacity-50">T: 215°C</div>

              </FadeIn>
            </div>
            
          </div>
        </section>

        {/* --- Benefits Section (Sci-Fi Glass Cards) --- */}
        <section id="benefits" className="py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <FadeIn>
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-px bg-cyan-500/50"></div>
                <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-widest">Ihre <span className="text-cyan-400">Vorteile</span></h2>
              </div>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <Zap/>, title: "Schnelle Lieferung", desc: "Realisieren Sie Ihre Projekte in Rekordzeit. So können Sie schneller testen und produzieren.", color: "cyan" },
                { icon: <Crosshair/>, title: "Hohe Präzision", desc: "Detailgetreuer Druck mit geringen Toleranzen. Maßgeschneiderte Passform für komplexe Bauteile.", color: "fuchsia" },
                { icon: <Orbit/>, title: "Einfache Skalierung", desc: "Vom ersten Prototyp bis zur Serienproduktion. Flexibel und ohne teure Werkzeugkosten.", color: "blue" }
              ].map((item, idx) => (
                <FadeIn key={idx} delay={idx * 150}>
                  <div className="relative p-8 h-full bg-[#03050a]/80 backdrop-blur-xl border border-white/5 overflow-hidden group hover:border-cyan-500/50 transition-all duration-500">
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-${item.color}-500/10 rounded-full blur-[50px] group-hover:bg-${item.color}-500/30 transition-all duration-700`}></div>
                    
                    {/* Corner Tech Accents */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-500/50"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-500/50"></div>

                    <div className={`w-14 h-14 rounded-none bg-black border border-${item.color}-500/30 flex items-center justify-center mb-8 relative z-10 shadow-[0_0_15px_rgba(0,0,0,1)_inset] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)_inset] transition-all`}>
                      <div className={`text-${item.color}-400 group-hover:scale-110 transition-transform`}>{item.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed font-light">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* --- Services Section (Data Panels) --- */}
        <section id="services" className="py-24 relative z-10 bg-gradient-to-b from-black via-[#010a12] to-black">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <FadeIn>
              <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-6">
                <div>
                  <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
                    Unsere<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">Leistungen</span>
                  </h2>
                </div>
                <div className="hidden md:flex font-mono text-cyan-500 text-sm animate-pulse">STATUS: BEREIT</div>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12">
              {[
                { icon: <Box size={32}/>, title: "Prototypen", desc: "Haptische Validierung Ihrer 3D-Modelle. Fehler erkennen, bevor Werkzeuge gefräst werden." },
                { icon: <Wrench size={32}/>, title: "Ersatzteile", desc: "Reverse Engineering für obsolete Bauteile. Widerstandsfähiger und leichter als das Original." },
                { icon: <Layers size={32}/>, title: "Kleinserien", desc: "On-Demand Produktion. Skalieren Sie Ihre Hardware ohne massives Startkapital." }
              ].map((srv, idx) => (
                <FadeIn key={idx} delay={idx * 150} className="h-full">
                  <div className="h-full relative bg-black border border-slate-800 p-8 flex flex-col group overflow-hidden">
                    {/* Hover Gradient Sweep */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-900/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    <div className="text-cyan-500 mb-8 opacity-70 group-hover:opacity-100 group-hover:text-cyan-300 transition-colors">
                      {srv.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">{srv.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed font-light">{srv.desc}</p>
                    </div>
                    
                    {/* Decorative Data Line */}
                    <div className="mt-auto pt-8 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="font-mono text-[10px] text-cyan-500">SYS_READY</div>
                      <div className="w-12 h-px bg-cyan-500"></div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* --- Process Section (Sci-Fi Data Stream Timeline) --- */}
        <section id="process" className="py-24 relative z-10 overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2"></div>

          <div className="px-6 md:px-12 max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-16 uppercase tracking-widest text-center">Der <span className="text-fuchsia-500">Ablauf</span></h2>
            </FadeIn>

            <div className="relative pl-8 md:pl-12 space-y-16 before:absolute before:inset-0 before:ml-8 md:before:ml-12 before:-translate-x-px md:before:-translate-x-px before:h-full before:w-[2px] before:bg-gradient-to-b before:from-cyan-500 before:via-fuchsia-500 before:to-cyan-900">
              
              {[
                { step: "01", title: "Datei-Upload", desc: "Senden Sie uns Ihre 3D-Modelle. Wir prüfen die Daten sofort auf Machbarkeit und Druckbarkeit." },
                { step: "02", title: "Fertigung", desc: "Ihr Bauteil wird Schicht für Schicht mit höchster Präzision und modernster Technik gefertigt." },
                { step: "03", title: "Versand", desc: "Nach einer sorgfältigen Qualitätskontrolle wird das fertige Teil sicher verpackt und an Sie versendet." }
              ].map((proc, idx) => (
                <FadeIn key={idx} delay={idx * 200} className="relative">
                  <div className="absolute -left-[35px] md:-left-[51px] top-1 w-6 h-6 rounded-full bg-black border-[3px] border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.8)] z-10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
                  </div>
                  
                  <div className="bg-[#03050a] border border-white/5 p-6 md:p-8 rounded-r-2xl rounded-bl-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 bg-white/5 px-3 py-1 font-mono text-cyan-500 text-xs rounded-bl-lg border-b border-l border-white/10">
                      SCHRITT {proc.step}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">{proc.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed font-light">{proc.desc}</p>
                  </div>
                </FadeIn>
              ))}

            </div>
          </div>
        </section>

        {/* --- Contact / Action Section (Command Terminal) --- */}
        <section id="contact" className="py-24 px-6 md:px-12 pb-32 md:pb-24 relative z-10 bg-black">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="bg-[#020408] rounded-none p-1 border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.1)] relative">
                
                {/* Terminal Header */}
                <div className="bg-[#050a14] px-4 py-2 border-b border-cyan-500/20 flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="font-mono text-xs text-cyan-600">LAYERFORGEX // KONTAKTFORMULAR</div>
                </div>

                <div className="p-6 md:p-12 relative overflow-hidden">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
                  
                  <h2 className="text-3xl font-black text-white mb-2 uppercase tracking-widest flex items-center gap-3">
                    <Mail className="text-cyan-500"/> Projekt anfragen
                  </h2>
                  <p className="text-cyan-500/70 text-sm mb-10 font-mono flex items-center gap-2">
                    <span className="w-2 h-4 bg-cyan-500 animate-pulse"></span>
                    Bitte füllen Sie die Details aus...
                  </p>

                  <form className="space-y-6 relative z-10" onSubmit={e => e.preventDefault()}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-xs font-mono text-cyan-600 mb-2 pl-1 group-focus-within:text-cyan-400 transition-colors">&gt; IHR NAME</label>
                        <input 
                          type="text" 
                          className="w-full bg-black/50 border-b-2 border-slate-800 px-4 py-3 text-white text-lg focus:outline-none focus:border-cyan-500 transition-colors rounded-none font-mono"
                          placeholder="..."
                        />
                      </div>
                      <div className="group">
                        <label className="block text-xs font-mono text-cyan-600 mb-2 pl-1 group-focus-within:text-cyan-400 transition-colors">&gt; IHRE E-MAIL</label>
                        <input 
                          type="email" 
                          className="w-full bg-black/50 border-b-2 border-slate-800 px-4 py-3 text-white text-lg focus:outline-none focus:border-cyan-500 transition-colors rounded-none font-mono"
                          placeholder="..."
                        />
                      </div>
                    </div>
                    <div className="group">
                      <label className="block text-xs font-mono text-cyan-600 mb-2 pl-1 group-focus-within:text-cyan-400 transition-colors">&gt; GEWÜNSCHTES MATERIAL (OPTIONAL)</label>
                      <select className="w-full bg-black/50 border-b-2 border-slate-800 px-4 py-3 text-white text-lg focus:outline-none focus:border-cyan-500 transition-colors rounded-none font-mono appearance-none">
                        <option className="bg-black">Analysieren & Beraten</option>
                        <option className="bg-black">PLA (Standard Prototyp)</option>
                        <option className="bg-black">PETG (Mechanische Belastung)</option>
                        <option className="bg-black">ABS / ASA (Thermische Resistenz)</option>
                      </select>
                    </div>
                    
                    <button className="w-full mt-8 relative group overflow-hidden bg-transparent border border-cyan-500 text-cyan-400 font-black text-lg py-5 transition-all flex justify-center items-center gap-2 hover:text-black">
                      <div className="absolute inset-0 bg-cyan-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                      <span className="relative z-10 font-mono tracking-widest uppercase">Anfrage absenden</span> 
                      <ChevronRight size={20} className="relative z-10" />
                    </button>
                  </form>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="bg-black border-t border-white/5 pt-12 pb-32 md:pb-12 px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
            <Layers size={16} className="text-cyan-500" />
            <span className="text-sm font-bold text-white tracking-widest uppercase">LayerForgeX</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-xs font-mono text-slate-600 uppercase tracking-widest">
            <a href="#" className="hover:text-cyan-400 transition-colors">Impressum</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">AGB</a>
          </div>
          
          <div className="text-[10px] font-mono text-slate-700">
            © {new Date().getFullYear()} LFX SYSTEMS. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>

      {/* --- Mobile App-Style Bottom Navigation (Glass/Neon) --- */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 p-4">
        <div className="bg-black/80 backdrop-blur-2xl border border-cyan-500/20 rounded-2xl flex justify-between items-center px-2 py-2 shadow-[0_0_30px_rgba(0,0,0,0.8)] relative overflow-hidden">
          {/* Bottom Nav Highlight Line */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

          {[
            { id: 'home', icon: <Home size={20}/>, label: 'Start' },
            { id: 'services', icon: <Box size={20}/>, label: 'Leistungen' },
            { id: 'process', icon: <GitMerge size={20}/>, label: 'Ablauf' },
            { id: 'contact', icon: <Mail size={20}/>, label: 'Kontakt' }
          ].map((item) => (
             <button 
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`flex flex-col items-center gap-1.5 p-2 rounded-xl transition-all min-w-[64px] relative ${activeTab === item.id ? 'text-cyan-400' : 'text-slate-600 hover:text-white'}`}
            >
              {activeTab === item.id && (
                <div className="absolute inset-0 bg-cyan-500/10 rounded-xl animate-pulse"></div>
              )}
              <div className="relative z-10">{item.icon}</div>
              <span className="text-[9px] font-mono font-bold tracking-wider relative z-10">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* --- Custom Cyberpunk/Sci-Fi CSS Animations --- */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        /* Grid Background */
        .bg-grid-pattern {
          background-size: 50px 50px;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
        }
        .mask-radial-gradient {
          mask-image: radial-gradient(ellipse at top center, black 20%, transparent 80%);
          -webkit-mask-image: radial-gradient(ellipse at top center, black 20%, transparent 80%);
        }

        /* 3D Visualizer */
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .rotate-x-60 { transform: rotateX(60deg); }
        .translate-z-10 { transform: translateZ(20px); }
        .-translate-z-10 { transform: translateZ(-20px); }
        
        @keyframes laser-scan {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(200px); opacity: 0; }
        }
        .animate-laser-scan { animation: laser-scan 3s ease-in-out infinite; }
        .mask-fade-y { mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent); }

        /* Slow Spin */
        @keyframes spin-slow {
          from { transform: rotateY(0deg) rotateX(20deg); }
          to { transform: rotateY(360deg) rotateX(20deg); }
        }
        .animate-spin-slow { animation: spin-slow 15s linear infinite; }

        /* Floating Texts */
        @keyframes float-fast {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float-fast { animation: float-fast 3s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 5s ease-in-out infinite; }

        /* Button Shimmer */
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-shimmer { animation: shimmer 1.5s infinite; }
        
        /* Pulse BG */
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
      `}} />
    </div>
  );
}