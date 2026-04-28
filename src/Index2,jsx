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
  MoveRight,
  Printer,
  CheckCircle2,
  Home,
  Briefcase,
  GitMerge,
  Target,
  Users
} from 'lucide-react';

// --- Utility: Smooth Reveal ---
const FadeIn = ({ children, delay = 0, className = "" }) => {
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

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.98)',
        transition: `all 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

// --- Main Application ---
export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  // Scroll Spy for updating active tab automatically
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        // Wechselt den Tab, wenn die Sektion zu ca. 33% im sichtbaren Bereich ist
        if (window.scrollY >= sectionTop - window.innerHeight / 3) {
          current = section.getAttribute('id');
        }
      });
      if (current) setActiveTab(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scroll for nav links
  const scrollTo = (id) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80, // Offset for fixed headers
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 font-sans selection:bg-cyan-500/30 overflow-x-hidden pb-24 md:pb-0">
      
      {/* --- Mobile Top Header (New) --- */}
      <div className="md:hidden fixed top-0 w-full z-40 bg-[#050505]/80 backdrop-blur-md border-b border-white/5 py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            <Layers size={14} className="text-white" />
          </div>
          <span className="text-lg font-bold text-white tracking-tight">LayerForgeX</span>
        </div>
      </div>

      {/* --- Desktop Top Navigation (Hidden on Mobile) --- */}
      <nav className="hidden md:flex fixed w-full z-50 top-0 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 py-4 px-8 items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('home')}>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)]">
            <Layers size={18} className="text-white" />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">LayerForgeX</span>
        </div>
        <div className="flex items-center gap-8 text-sm font-medium">
          <button onClick={() => scrollTo('services')} className={`transition ${activeTab === 'services' ? 'text-cyan-400' : 'text-slate-400 hover:text-cyan-400'}`}>Leistungen</button>
          <button onClick={() => scrollTo('benefits')} className={`transition ${activeTab === 'benefits' ? 'text-cyan-400' : 'text-slate-400 hover:text-cyan-400'}`}>Vorteile</button>
          <button onClick={() => scrollTo('process')} className={`transition ${activeTab === 'process' ? 'text-cyan-400' : 'text-slate-400 hover:text-cyan-400'}`}>Ablauf</button>
          <button onClick={() => scrollTo('target')} className={`transition ${activeTab === 'target' ? 'text-cyan-400' : 'text-slate-400 hover:text-cyan-400'}`}>Für Wen?</button>
          <button onClick={() => scrollTo('contact')} className="px-5 py-2 rounded-full bg-white text-black hover:scale-105 transition-transform font-bold">
            Anfragen
          </button>
        </div>
      </nav>

      <main>
        {/* --- Hero Section (Mobile App like, full dvh) --- */}
        <section id="home" className="relative min-h-[100dvh] flex flex-col justify-center px-6 md:px-12 pt-16 md:pt-24 pb-20 md:pb-0">
          {/* Background FX */}
          <div className="absolute top-0 right-0 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-cyan-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none mix-blend-screen"></div>
          
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 md:gap-12 items-center z-10">
            
            <div className="flex flex-col items-start">
              <FadeIn delay={100}>
                <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight mb-4 md:mb-6 mt-8 md:mt-0">
                  Ihre Idee.<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                    Schicht für Schicht.
                  </span>
                </h1>
              </FadeIn>
              
              <FadeIn delay={200}>
                <p className="text-lg text-slate-400 mb-6 md:mb-8 max-w-md leading-relaxed">
                  Präziser 3D-Druck Service für Prototypen & Serien. In 2-5 Tagen von der CAD-Datei zum fertigen Bauteil in Ihrer Hand.
                </p>
              </FadeIn>

              <FadeIn delay={300} className="w-full sm:w-auto">
                <button onClick={() => scrollTo('contact')} className="w-full sm:w-auto group relative flex items-center justify-between sm:justify-center gap-4 px-6 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg overflow-hidden active:scale-95 transition-all">
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
                  <span className="relative z-10">Jetzt Projekt starten</span>
                  <div className="relative z-10 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-2 transition-transform">
                    <ArrowRight size={20} />
                  </div>
                </button>
              </FadeIn>
            </div>

            {/* Unique "Sliced" 3D Printing Visualizer */}
            <div className="relative h-[40vh] md:h-[600px] w-full flex flex-col items-center justify-center mt-4 md:mt-0">
              <FadeIn delay={300} className="relative z-10 flex flex-col items-center">
                {/* Simulated 3D Print Layers using CSS maps */}
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-48 md:w-64 h-12 md:h-16 rounded-xl border border-cyan-400/30 backdrop-blur-sm"
                    style={{
                      backgroundColor: `rgba(6, 182, 212, ${0.1 + (i * 0.1)})`,
                      transform: `rotateX(60deg) rotateZ(-45deg) translateZ(${i * 10}px)`,
                      marginTop: '-30px',
                      boxShadow: i === 7 ? '0 20px 40px rgba(6,182,212,0.4)' : 'none',
                      animation: `float 3s ease-in-out infinite alternate`,
                      animationDelay: `${i * 0.15}s`
                    }}
                  ></div>
                ))}
                
                {/* Print Head Simulation */}
                <div className="absolute -top-12 animate-pulse">
                  <div className="w-1 h-20 bg-gradient-to-b from-cyan-400 to-transparent mx-auto"></div>
                  <div className="w-8 h-8 rounded-md bg-white shadow-[0_0_30px_#00f0ff] flex items-center justify-center">
                    <Zap size={16} className="text-cyan-500" />
                  </div>
                </div>
              </FadeIn>
            </div>
            
          </div>
        </section>

        {/* --- Benefits Section (Integrated from Original) --- */}
        <section id="benefits" className="py-20 bg-[#080808] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center md:text-left">3 entscheidende <span className="text-cyan-400">Vorteile</span></h2>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-6">
              <FadeIn delay={100}>
                <div className="p-8 rounded-3xl bg-[#0f0f0f] border border-white/5 hover:border-cyan-500/30 transition-colors h-full">
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/50 flex items-center justify-center mb-6 border border-cyan-500/20">
                    <Zap size={24} className="text-cyan-400"/>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Schnelle Umsetzung</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">Von der Idee bis zum fertigen Teil in Rekordzeit. Perfekt für enge Timelines und schnelle Iterationen.</p>
                </div>
              </FadeIn>
              <FadeIn delay={200}>
                <div className="p-8 rounded-3xl bg-[#0f0f0f] border border-white/5 hover:border-blue-500/30 transition-colors h-full">
                  <div className="w-12 h-12 rounded-xl bg-blue-950/50 flex items-center justify-center mb-6 border border-blue-500/20">
                    <Target size={24} className="text-blue-400"/>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Individuelle Anfertigung</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">Passgenaue Lösungen statt Standardware. Wir fertigen exakt nach Ihren Spezifikationen und Maßen.</p>
                </div>
              </FadeIn>
              <FadeIn delay={300}>
                <div className="p-8 rounded-3xl bg-[#0f0f0f] border border-white/5 hover:border-purple-500/30 transition-colors h-full">
                  <div className="w-12 h-12 rounded-xl bg-purple-950/50 flex items-center justify-center mb-6 border border-purple-500/20">
                    <CheckCircle2 size={24} className="text-purple-400"/>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Saubere Ergebnisse</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">Präziser 3D-Druck für funktionale und optisch ansprechende Teile. Höchste Qualität für jedes Projekt.</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* --- Services Section (Grid Layout optimized for Mobile & Desktop) --- */}
        <section id="services" className="py-20 relative bg-[#050505]">
          <div className="px-6 md:px-12 mb-8 md:mb-12 max-w-7xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Fertigungs-<br/><span className="text-cyan-400">Spektrum</span></h2>
              <p className="text-slate-400">Unsere maßgeschneiderten 3D-Druck Lösungen.</p>
            </FadeIn>
          </div>

          {/* Grid Container (Vertical on Mobile, Horizontal on Desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-6 md:px-12 pb-12">
            
            <FadeIn delay={100} className="h-full">
              <div className="h-full rounded-3xl bg-[#0f0f0f] border border-white/5 p-8 flex flex-col relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all"></div>
                <div className="w-14 h-14 rounded-2xl bg-cyan-950/50 flex items-center justify-center border border-cyan-500/20 mb-6">
                  <Box size={28} className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Prototypen</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">Rasche Iterationen für Produktdesigner. Testen Sie Form, Passgenauigkeit und Funktion innerhalb von Tagen.</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200} className="h-full">
              <div className="h-full rounded-3xl bg-[#0f0f0f] border border-white/5 p-8 flex flex-col relative overflow-hidden group">
                <div className="w-14 h-14 rounded-2xl bg-blue-950/50 flex items-center justify-center border border-blue-500/20 mb-6">
                  <Wrench size={28} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Ersatzteile</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">Nicht mehr lieferbar? Wir rekonstruieren und drucken defekte Teile nach Maß, stärker als das Original.</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={300} className="h-full">
              <div className="h-full rounded-3xl bg-[#0f0f0f] border border-white/5 p-8 flex flex-col relative overflow-hidden group">
                <div className="w-14 h-14 rounded-2xl bg-purple-950/50 flex items-center justify-center border border-purple-500/20 mb-6">
                  <Layers size={28} className="text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Kleinserien</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">Kosteneffiziente Produktion ab Stückzahl 1 bis 1000. Keine teuren Spritzgusswerkzeuge nötig.</p>
                </div>
              </div>
            </FadeIn>

          </div>
        </section>

        {/* --- Process Section (App Timeline) --- */}
        <section id="process" className="py-20 bg-[#080808] border-y border-white/5">
          <div className="px-6 md:px-12 max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold text-white mb-12">Der Prozess</h2>
            </FadeIn>

            <div className="relative pl-6 md:pl-8 border-l-2 border-cyan-900/50 space-y-12">
              
              <FadeIn delay={100} className="relative">
                <div className="absolute -left-[35px] md:-left-[41px] top-0 w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-cyan-500 shadow-[0_0_10px_#00f0ff]"></div>
                <div className="text-cyan-500 font-mono text-sm mb-1">Schritt 1</div>
                <h3 className="text-xl font-bold text-white mb-2">Upload & Analyse</h3>
                <p className="text-slate-400 text-sm">Sie senden uns Ihre .STL/.STEP Datei. Unsere Software und Experten prüfen das Modell auf Druckbarkeit und optimieren die Ausrichtung.</p>
              </FadeIn>

              <FadeIn delay={200} className="relative">
                <div className="absolute -left-[35px] md:-left-[41px] top-0 w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-slate-600"></div>
                <div className="text-slate-500 font-mono text-sm mb-1">Schritt 2</div>
                <h3 className="text-xl font-bold text-white mb-2">Fertigung</h3>
                <p className="text-slate-400 text-sm">Ihr Bauteil wird auf modernsten Industrie-Druckern gefertigt. Hohe Schichtauflösung garantiert extrem glatte Oberflächen.</p>
              </FadeIn>

              <FadeIn delay={300} className="relative">
                <div className="absolute -left-[35px] md:-left-[41px] top-0 w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-slate-600"></div>
                <div className="text-slate-500 font-mono text-sm mb-1">Schritt 3</div>
                <h3 className="text-xl font-bold text-white mb-2">Finish & Versand</h3>
                <p className="text-slate-400 text-sm">Support-Material wird entfernt, das Teil wird geprüft, sicher verpackt und verlässt in Rekordzeit unser Haus.</p>
              </FadeIn>

            </div>
          </div>
        </section>

        {/* --- Target Audience Section (Integrated from Original) --- */}
        <section id="target" className="py-20 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Für wen wir <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">drucken</span></h2>
              <p className="text-slate-400 mb-12 max-w-2xl mx-auto">Unser Service richtet sich an alle, die präzise und individuelle Bauteile benötigen – von der Einzelanfertigung bis zur Serie.</p>
            </FadeIn>
            
            <div className="flex flex-wrap justify-center gap-4">
              <FadeIn delay={100}>
                <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#0f0f0f] border border-white/5 text-slate-300 font-medium">
                   <Home size={20} className="text-cyan-500"/>
                   Privatkunden
                </div>
              </FadeIn>
              <FadeIn delay={200}>
                <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#0f0f0f] border border-white/5 text-slate-300 font-medium">
                   <Cpu size={20} className="text-blue-500"/>
                   Maker & Creators
                </div>
              </FadeIn>
              <FadeIn delay={300}>
                <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#0f0f0f] border border-white/5 text-slate-300 font-medium">
                   <Zap size={20} className="text-purple-500"/>
                   Startups & Unternehmen
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* --- Contact / Action Section (Mobile Optimized Forms) --- */}
        <section id="contact" className="py-24 px-6 md:px-12 pb-32 md:pb-24 bg-[#080808] border-t border-white/5">
          <div className="max-w-2xl mx-auto">
            <FadeIn>
              <div className="bg-gradient-to-b from-[#111] to-[#0a0a0a] rounded-[2rem] p-6 md:p-10 border border-white/5 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Printer size={120} />
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-2 relative z-10">Druck anfragen</h2>
                <p className="text-slate-400 text-sm mb-8 relative z-10">Laden Sie Ihr Modell im nächsten Schritt hoch.</p>

                <form className="space-y-5 relative z-10" onSubmit={e => e.preventDefault()}>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 pl-1">Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-[#050505] border border-white/10 rounded-2xl px-5 py-4 text-white text-lg focus:outline-none focus:border-cyan-500 transition-colors appearance-none"
                      placeholder="Ihr Name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 pl-1">E-Mail</label>
                    <input 
                      type="email" 
                      className="w-full bg-[#050505] border border-white/10 rounded-2xl px-5 py-4 text-white text-lg focus:outline-none focus:border-cyan-500 transition-colors appearance-none"
                      placeholder="name@firma.de"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 pl-1">Materialwunsch (Optional)</label>
                    <select className="w-full bg-[#050505] border border-white/10 rounded-2xl px-5 py-4 text-white text-lg focus:outline-none focus:border-cyan-500 transition-colors appearance-none">
                      <option>Beratung gewünscht</option>
                      <option>PLA (Prototyping)</option>
                      <option>PETG (Mechanisch)</option>
                      <option>ABS / ASA (Wetterfest)</option>
                      <option>TPU (Flexibel)</option>
                    </select>
                  </div>
                  
                  <button className="w-full mt-4 bg-cyan-500 hover:bg-cyan-400 text-[#050505] font-black text-lg py-5 rounded-2xl transition-colors flex justify-center items-center gap-2">
                    Angebot einholen <ChevronRight size={20} />
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="bg-[#050505] border-t border-white/5 pt-12 pb-32 md:pb-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 opacity-80">
            <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center grayscale-[50%]">
              <Layers size={12} className="text-white" />
            </div>
            <span className="text-sm font-bold text-white tracking-tight">LayerForgeX</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500 font-medium">
            <a href="#" className="hover:text-cyan-400 transition-colors">Impressum</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">AGB</a>
          </div>
          
          <div className="text-xs text-slate-600">
            © {new Date().getFullYear()} LayerForgeX. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>

      {/* --- Mobile App-Style Bottom Navigation --- */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 p-4">
        <div className="bg-[#111]/95 backdrop-blur-xl border border-white/10 rounded-3xl flex justify-between items-center px-4 py-2 shadow-2xl">
          <button 
            onClick={() => scrollTo('home')}
            className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all min-w-[60px] ${activeTab === 'home' ? 'bg-white/10 text-cyan-400' : 'text-slate-500 hover:text-white'}`}
          >
            <Home size={22} />
            <span className="text-[10px] font-medium">Start</span>
          </button>
          
          <button 
            onClick={() => scrollTo('services')}
            className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all min-w-[60px] ${activeTab === 'services' ? 'bg-white/10 text-cyan-400' : 'text-slate-500 hover:text-white'}`}
          >
            <Briefcase size={22} />
            <span className="text-[10px] font-medium">Leistungen</span>
          </button>
          
          <button 
            onClick={() => scrollTo('process')}
            className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all min-w-[60px] ${activeTab === 'process' ? 'bg-white/10 text-cyan-400' : 'text-slate-500 hover:text-white'}`}
          >
            <GitMerge size={22} />
            <span className="text-[10px] font-medium">Ablauf</span>
          </button>

          {/* Removed target/benefits from bottom nav to keep it clean, added mail instead */}
          
          <button 
            onClick={() => scrollTo('contact')}
            className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all min-w-[60px] ${activeTab === 'contact' ? 'bg-cyan-500/20 text-cyan-400' : 'text-slate-500 hover:text-white'}`}
          >
            <Mail size={22} />
            <span className="text-[10px] font-medium">Kontakt</span>
          </button>
        </div>
      </div>

      {/* Global CSS for hidden scrollbars & animations */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes float {
          0% { transform: rotateX(60deg) rotateZ(-45deg) translateZ(0px); }
          100% { transform: rotateX(60deg) rotateZ(-45deg) translateZ(15px); }
        }
      `}} />
    </div>
  );
}
