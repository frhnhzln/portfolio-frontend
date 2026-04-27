import Link from 'next/link';
import { Shield, Zap, Terminal, Search, Database, Server, Cpu, ArrowLeft } from 'lucide-react';

export default function FiuuCaseStudy() {
  const techStack = [
    { label: 'Backend', value: 'PHP (Laravel)', icon: <Cpu className="w-5 h-5 text-emerald-400" /> },
    { label: 'Database', value: 'MySQL, CouchDB', icon: <Database className="w-5 h-5 text-emerald-400" /> },
    { label: 'Infrastructure', value: 'Linux-based environment', icon: <Server className="w-5 h-5 text-emerald-400" /> },
  ];

  const features = [
    {
      title: 'Secure Transaction Processing',
      desc: 'Enhanced backend services to ensure secure processing of all online merchant transactions via Jkopay.',
      icon: <Shield className="w-5 h-5 text-emerald-400" />,
    },
    {
      title: 'Backend Code Optimization',
      desc: 'Implemented Laravel-based improvements to enhance the reliability and maintainability of the payment gateway.',
      icon: <Terminal className="w-5 h-5 text-emerald-400" />,
    },
    {
      title: 'Payment Workflow Improvements',
      desc: 'Streamlined the end-to-end payment confirmation and settlement flow for Taiwan-based merchants.',
      icon: <Zap className="w-5 h-5 text-emerald-400" />,
    },
    {
      title: 'Issue Investigation & Resolution',
      desc: 'Identified, debugged, and resolved complex payment processing bugs, ensuring gateway stability.',
      icon: <Search className="w-5 h-5 text-emerald-400" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0c10] text-gray-300 p-8 md:p-16 font-sans">
      {/* Back Button */}
      <nav className="max-w-6xl mx-auto mb-12">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-emerald-400 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </nav>
      {/* Header Section */}
      <header className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 mb-20 items-center">
        <div className="flex-1">
          <p className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-4">Case Study</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Jkopay Taiwan Payment Integration (Fiuu)
          </h1>
          <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
            A specialized backend integration enabling secure, high-volume online transaction processing for Taiwan merchants through the Jkopay ecosystem.
          </p>
          
          <div className="grid grid-cols-2 gap-4 text-sm border-t border-white/10 pt-8">
            <div>
              <p className="text-gray-500 uppercase text-[10px] font-bold">Company</p>
              <p className="text-white">Razer Merchant Services</p>
            </div>
            <div>
              <p className="text-gray-500 uppercase text-[10px] font-bold">Role</p>
              <p className="text-white">Software Engineer</p>
            </div>
            <div>
              <p className="text-gray-500 uppercase text-[10px] font-bold">Duration</p>
              <p className="text-white">Feb 2025 – June 2025</p>
            </div>
          </div>
        </div>
        
        <div className="flex-1 w-full">
          <div className="relative group">
            <div className="absolute -inset-1 bg-emerald-500/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img 
              src="/images/jkopay-hero.png" 
              alt="Payment Integration Hero" 
              className="relative rounded-2xl border border-white/10 w-full shadow-2xl"
            />
          </div>
        </div>
      </header>

      {/* Tech Stack Section */}
      <section className="max-w-6xl mx-auto mb-24">
        <h2 className="text-xl font-semibold text-white mb-8 flex items-center gap-2">
          <span className="w-1 h-1 bg-emerald-400 rounded-full"></span> Tech Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techStack.map((item, i) => (
            <div key={i} className="bg-[#111418] border border-white/5 p-6 rounded-xl hover:border-emerald-500/30 transition-all">
              <div className="mb-4">{item.icon}</div>
              <p className="text-xs text-gray-500 uppercase font-bold mb-1 tracking-tight">{item.label}</p>
              <p className="text-white font-medium">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Features Section */}
      <section className="max-w-6xl mx-auto mb-24">
        <h2 className="text-xl font-semibold text-white mb-8 flex items-center gap-2">
           <span className="w-1 h-1 bg-emerald-400 rounded-full"></span> Key Features I Built
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="bg-[#111418] border border-white/5 p-8 rounded-xl group hover:bg-[#161a1f] transition-colors">
              <div className="mb-4 transform group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="text-white font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold text-white mb-8 flex items-center gap-2">
           <span className="w-1 h-1 bg-emerald-400 rounded-full"></span> Project Visuals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { src: '/images/jkopay-ss1.png', label: 'NEW MERCHANT ONBOARDING' },
            { src: '/images/jkopay-ss2.png', label: 'REAL-TIME TRANSACTION VIEW' },
            { src: '/images/jkopay-ss3.png', label: 'GATEWAY SECURITY SETTINGS' }
          ].map((ss, i) => (
            <div key={i} className="space-y-4">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-[#111418]">
                 <img src={ss.src} alt={ss.label} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-center text-[10px] font-bold tracking-widest text-gray-500 uppercase italic">{ss.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}