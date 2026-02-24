import { useState, useEffect, useRef } from "react";

// ============================================
// NAVIGATION
// ============================================
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#empresa", label: "A Empresa" },
    { href: "#equipe", label: "Equipe" },
    { href: "#industrias", label: "Indústrias" },
    { href: "#produtos", label: "Produtos" },
    { href: "#downloads", label: "Downloads" },
    { href: "#atuacao", label: "Atuação" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div
            className={`w-12 h-12 rounded-lg flex items-center justify-center font-['Outfit'] font-extrabold text-xl transition-all duration-300 ${
              scrolled
                ? "bg-[#b91c1c] text-white"
                : "bg-white text-[#b91c1c]"
            }`}
          >
            RR
          </div>
          <span
            className={`font-['Outfit'] font-semibold text-lg hidden sm:block transition-colors duration-300 ${
              scrolled ? "text-[#1a1a1a]" : "text-white"
            }`}
          >
            Representações Rodrigues
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-['DM_Sans'] text-sm font-medium transition-colors hover:text-[#b91c1c] ${
                scrolled ? "text-[#525252]" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-[#1a1a1a]" : "text-white"
          }`}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-[#ebebeb] mt-2">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-['DM_Sans'] text-[#525252] hover:text-[#b91c1c] transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// ============================================
// HERO SECTION
// ============================================
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2d2d2d] to-[#3d2914]" />
      
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      {/* Accent shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#b91c1c] rounded-full blur-[120px] opacity-30" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#8b5e34] rounded-full blur-[150px] opacity-20" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Logo emblem */}
        <div className="opacity-0 animate-scale-in mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-2xl bg-gradient-to-br from-[#b91c1c] to-[#991b1b] shadow-2xl shadow-[#b91c1c]/30">
            <span className="font-['Outfit'] font-extrabold text-6xl text-white tracking-tight">
              RR
            </span>
          </div>
        </div>

        {/* Company name */}
        <h1 className="opacity-0 animate-fade-in-up delay-200 font-['Outfit'] text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 tracking-tight">
          Representações
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ef4444] to-[#c9a07a]">
            Rodrigues
          </span>
        </h1>

        {/* Tagline */}
        <p className="opacity-0 animate-fade-in-up delay-400 font-['DM_Sans'] text-xl md:text-2xl text-[#b3b3b3] max-w-3xl mx-auto mb-10 leading-relaxed">
          Construindo parcerias sólidas no mercado de autopeças.
          <span className="block mt-2 text-[#8c8c8c]">
            Excelência em representação comercial em Mato Grosso e Mato Grosso do Sul.
          </span>
        </p>

        {/* CTA buttons */}
        <div className="opacity-0 animate-fade-in-up delay-600 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contato"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#b91c1c] hover:bg-[#991b1b] text-white font-['DM_Sans'] font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-[#b91c1c]/30"
          >
            Fale Conosco
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#industrias"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-['DM_Sans'] font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/20"
          >
            Nossas Indústrias
          </a>
        </div>

        {/* Stats */}
        <div className="opacity-0 animate-fade-in-up delay-800 mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "40+", label: "Anos de Experiência" },
            { value: "16", label: "Indústrias Parceiras" },
            { value: "2", label: "Estados Atendidos" },
            { value: "100%", label: "Compromisso" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-['Outfit'] text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="font-['DM_Sans'] text-sm text-[#8c8c8c]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-800">
        <a href="#empresa" className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors">
          <span className="font-['DM_Sans'] text-xs uppercase tracking-widest">Saiba Mais</span>
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

// ============================================
// A EMPRESA SECTION
// ============================================
const EmpresaSection = () => {
  const pillars = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: "Foco",
      description: "Construir parcerias sólidas com novos clientes, fortalecendo o relacionamento comercial e ampliando a rede de negócios no setor de autopeças.",
      color: "from-[#b91c1c] to-[#991b1b]",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Visão",
      description: "Ser a principal referência em parcerias no mercado de autopeças, reconhecida pela excelência no atendimento e pela qualidade dos produtos representados.",
      color: "from-[#8b5e34] to-[#78502a]",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Missão",
      description: "Representar indústrias com excelência, através de parcerias estratégicas e atendimento diferenciado, agregando valor ao mercado de autopeças.",
      color: "from-[#404040] to-[#2d2d2d]",
    },
  ];

  return (
    <section id="empresa" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#f7f7f7]" />
      <div className="absolute inset-0 pattern-dots" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#b91c1c] via-[#8b5e34] to-[#404040]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block font-['DM_Sans'] text-sm font-semibold text-[#b91c1c] uppercase tracking-widest mb-4">
            Sobre Nós
          </span>
          <h2 className="font-['Outfit'] text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-6">
            A Empresa
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#b91c1c] to-[#8b5e34] mx-auto" />
        </div>

        {/* Company history */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-[#ebebeb]">
            {/* Quote mark */}
            <div className="absolute -top-6 left-8 w-12 h-12 bg-[#b91c1c] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            
            <div className="pt-4">
              <p className="font-['DM_Sans'] text-lg md:text-xl text-[#404040] leading-relaxed mb-6">
                Fundada em <span className="font-semibold text-[#b91c1c]">1982</span> por 
                <span className="font-semibold text-[#1a1a1a]"> Oswaldo Rodrigues dos Santos Filho</span>, 
                graduado em Administração de Empresas, a Representações Rodrigues nasceu com o propósito de 
                ser um elo de confiança entre indústrias e o mercado de autopeças.
              </p>
              <p className="font-['DM_Sans'] text-lg md:text-xl text-[#404040] leading-relaxed">
                Há mais de quatro décadas, construímos uma trajetória sólida baseada em valores como 
                ética, comprometimento e excelência no atendimento, tornando-nos referência em 
                representação comercial nos estados de <span className="font-semibold text-[#8b5e34]">Mato Grosso</span> e 
                <span className="font-semibold text-[#8b5e34]"> Mato Grosso do Sul</span>.
              </p>
            </div>

            {/* Founder signature area */}
            <div className="mt-8 pt-6 border-t border-[#ebebeb] flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#b91c1c] to-[#8b5e34] flex items-center justify-center text-white font-['Outfit'] font-bold text-lg">
                OR
              </div>
              <div>
                <p className="font-['Outfit'] font-semibold text-[#1a1a1a]">Oswaldo Rodrigues dos Santos Filho</p>
                <p className="font-['DM_Sans'] text-sm text-[#6b6b6b]">Fundador & Diretor</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="group relative bg-white rounded-2xl p-8 shadow-lg border border-[#ebebeb] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${pillar.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {pillar.icon}
              </div>

              {/* Content */}
              <h3 className="font-['Outfit'] text-2xl font-bold text-[#1a1a1a] mb-4">
                {pillar.title}
              </h3>
              <p className="font-['DM_Sans'] text-[#525252] leading-relaxed">
                {pillar.description}
              </p>

              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${pillar.color} opacity-5 rounded-bl-[100px] rounded-tr-2xl`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// NOSSA EQUIPE (TEAM) SECTION
// ============================================
const EquipeSection = () => {
  const teamMembers = [
    {
      name: "Oswaldo Rodrigues",
      role: "Diretor",
      initials: "OR",
      color: "from-[#b91c1c] to-[#991b1b]",
      description: "Fundador e líder da empresa há mais de 40 anos",
    },
    {
      name: "Suely Rodrigues",
      role: "Consultor Comercial / MS",
      initials: "SR",
      color: "from-[#8b5e34] to-[#78502a]",
      description: "Responsável pelo relacionamento comercial em MS",
    },
    {
      name: "Matheus Rodrigues",
      role: "Supervisor de Vendas MS/MT",
      initials: "MR",
      color: "from-[#404040] to-[#2d2d2d]",
      description: "Supervisiona as operações de vendas nos dois estados",
    },
    {
      name: "Érika Oliveira",
      role: "Coord. Administrativo",
      initials: "EO",
      color: "from-[#b91c1c] to-[#8b5e34]",
      description: "Coordena processos administrativos e operacionais",
    },
    {
      name: "Frank de Sá",
      role: "Promotor Vendas / MT",
      initials: "FS",
      color: "from-[#78502a] to-[#5c3d1e]",
      description: "Promove produtos e relacionamento no Mato Grosso",
    },
  ];

  return (
    <section id="equipe" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white" />
      
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#b91c1c] rounded-full blur-[200px] opacity-5" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8b5e34] rounded-full blur-[200px] opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block font-['DM_Sans'] text-sm font-semibold text-[#b91c1c] uppercase tracking-widest mb-4">
            Conheça Nossa Equipe
          </span>
          <h2 className="font-['Outfit'] text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-6">
            Nossa Equipe
          </h2>
          <p className="font-['DM_Sans'] text-lg text-[#525252] max-w-2xl mx-auto">
            Profissionais dedicados e comprometidos com a excelência no atendimento e na construção de parcerias duradouras.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#b91c1c] to-[#8b5e34] mx-auto mt-6" />
        </div>

        {/* Team grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group text-center"
            >
              {/* Photo placeholder with initials */}
              <div className="relative mx-auto mb-6">
                {/* Outer ring */}
                <div className={`absolute inset-0 w-36 h-36 mx-auto rounded-full bg-gradient-to-br ${member.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-sm`} />
                
                {/* Photo circle */}
                <div className={`relative w-32 h-32 mx-auto rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                  <span className="font-['Outfit'] font-bold text-3xl text-white">
                    {member.initials}
                  </span>
                </div>

                {/* Status dot */}
                <div className="absolute bottom-2 right-1/2 translate-x-8 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
              </div>

              {/* Info */}
              <h3 className="font-['Outfit'] text-xl font-bold text-[#1a1a1a] mb-1">
                {member.name}
              </h3>
              <p className="font-['DM_Sans'] text-sm font-medium text-[#b91c1c] mb-2">
                {member.role}
              </p>
              <p className="font-['DM_Sans'] text-sm text-[#6b6b6b] leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>

        {/* Team stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "5", label: "Profissionais" },
            { value: "2", label: "Estados" },
            { value: "40+", label: "Anos de Experiência" },
            { value: "100%", label: "Dedicação" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-[#f7f7f7] rounded-xl">
              <div className="font-['Outfit'] text-4xl font-bold text-[#b91c1c] mb-2">
                {stat.value}
              </div>
              <div className="font-['DM_Sans'] text-sm text-[#6b6b6b]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// NOSSAS INDÚSTRIAS SECTION
// ============================================
const IndustriasSection = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  
  const industries = [
    {
      name: "AutoImpact",
      initials: "AI",
      description: "Especializada em peças de reposição para sistemas de suspensão e direção.",
      category: "Suspensão & Direção",
      color: "from-[#b91c1c] to-[#991b1b]",
    },
    {
      name: "DS Auto Parts",
      initials: "DS",
      description: "Ampla linha de peças automotivas para motores e sistemas de injeção.",
      category: "Motor & Injeção",
      color: "from-[#8b5e34] to-[#78502a]",
    },
    {
      name: "SLY Parts",
      initials: "SL",
      description: "Componentes elétricos e eletrônicos para veículos modernos.",
      category: "Elétrica",
      color: "from-[#404040] to-[#2d2d2d]",
    },
    {
      name: "RIC",
      initials: "RC",
      description: "Pistões e componentes de alta performance para motores.",
      category: "Pistões",
      color: "from-[#b91c1c] to-[#8b5e34]",
    },
    {
      name: "Turotest",
      initials: "TT",
      description: "Equipamentos de teste e diagnóstico automotivo.",
      category: "Diagnóstico",
      color: "from-[#78502a] to-[#5c3d1e]",
    },
    {
      name: "DS Agro",
      initials: "DA",
      description: "Peças e componentes para máquinas agrícolas.",
      category: "Agrícola",
      color: "from-[#404040] to-[#1a1a1a]",
    },
    {
      name: "Florio",
      initials: "FL",
      description: "Filtros e sistemas de filtragem automotiva de alta qualidade.",
      category: "Filtros",
      color: "from-[#b91c1c] to-[#991b1b]",
    },
    {
      name: "Platolândia",
      initials: "PL",
      description: "Platôs e discos de embreagem para veículos leves e pesados.",
      category: "Embreagem",
      color: "from-[#8b5e34] to-[#78502a]",
    },
    {
      name: "FirPar",
      initials: "FP",
      description: "Componentes de freios e sistemas de frenagem.",
      category: "Freios",
      color: "from-[#404040] to-[#2d2d2d]",
    },
    {
      name: "Excelite",
      initials: "EX",
      description: "Lâmpadas automotivas e sistemas de iluminação.",
      category: "Iluminação",
      color: "from-[#b91c1c] to-[#8b5e34]",
    },
    {
      name: "Rolt do Brasil",
      initials: "RB",
      description: "Rolamentos e componentes de transmissão de alta durabilidade.",
      category: "Rolamentos",
      color: "from-[#78502a] to-[#5c3d1e]",
    },
    {
      name: "Weasler",
      initials: "WE",
      description: "Componentes de transmissão para agricultura e indústria.",
      category: "Transmissão",
      color: "from-[#404040] to-[#1a1a1a]",
    },
    {
      name: "Radiex",
      initials: "RX",
      description: "Aditivos e fluidos para sistemas de arrefecimento.",
      category: "Arrefecimento",
      color: "from-[#b91c1c] to-[#991b1b]",
    },
    {
      name: "Sika",
      initials: "SK",
      description: "Adesivos, selantes e produtos químicos automotivos.",
      category: "Químicos",
      color: "from-[#8b5e34] to-[#78502a]",
    },
  ];

  return (
    <section id="industrias" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#2d2d2d]" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='m0 40 40-40h-20l-20 20zm40 0v-20l-20 20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Accent blurs */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-[#b91c1c] rounded-full blur-[150px] opacity-10" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#8b5e34] rounded-full blur-[150px] opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block font-['DM_Sans'] text-sm font-semibold text-[#ef4444] uppercase tracking-widest mb-4">
            Parceiros de Confiança
          </span>
          <h2 className="font-['Outfit'] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Nossas Indústrias
          </h2>
          <p className="font-['DM_Sans'] text-lg text-[#b3b3b3] max-w-2xl mx-auto">
            Representamos as melhores marcas do mercado de autopeças, garantindo qualidade e confiabilidade em cada produto.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#b91c1c] to-[#8b5e34] mx-auto mt-6" />
        </div>

        {/* Industries grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedIndustry(selectedIndustry === industry.name ? null : industry.name)}
            >
              {/* Logo placeholder */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <span className="font-['Outfit'] font-bold text-xl text-white">
                  {industry.initials}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-['Outfit'] text-lg font-bold text-white mb-1">
                {industry.name}
              </h3>
              <span className="inline-block font-['DM_Sans'] text-xs font-medium text-[#ef4444] bg-[#ef4444]/10 px-2 py-1 rounded mb-3">
                {industry.category}
              </span>
              
              {/* Description - shows on hover/click */}
              <p className={`font-['DM_Sans'] text-sm text-[#b3b3b3] leading-relaxed transition-all duration-300 ${
                selectedIndustry === industry.name ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 overflow-hidden lg:group-hover:opacity-100 lg:group-hover:max-h-20'
              }`}>
                {industry.description}
              </p>

              {/* Hover indicator */}
              <div className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-[#ef4444] transition-opacity duration-300 ${
                selectedIndustry === industry.name ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="font-['DM_Sans'] text-[#8c8c8c] mb-6">
            Quer conhecer mais sobre nossos parceiros?
          </p>
          <a
            href="#contato"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#b91c1c] hover:bg-[#991b1b] text-white font-['DM_Sans'] font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          >
            Entre em Contato
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

// ============================================
// PRODUTOS (PRODUCT CATALOG) SECTION
// ============================================
const ProdutosSection = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "Todos",
    "Sensores",
    "Pistões",
    "Válvulas",
    "Embreagens",
    "Lâmpadas",
    "Filtros",
    "Freios",
    "Rolamentos",
  ];

  const products = [
    {
      name: "Sensor de Temperatura",
      category: "Sensores",
      partner: "DS Auto Parts",
      description: "Sensor de alta precisão para monitoramento da temperatura do motor.",
      code: "ST-2401",
    },
    {
      name: "Pistão Forjado Performance",
      category: "Pistões",
      partner: "RIC",
      description: "Pistão de alta performance para motores de competição.",
      code: "PF-1890",
    },
    {
      name: "Válvula de Admissão",
      category: "Válvulas",
      partner: "DS Auto Parts",
      description: "Válvula de admissão com tratamento térmico especial.",
      code: "VA-3320",
    },
    {
      name: "Kit Embreagem Completo",
      category: "Embreagens",
      partner: "Platolândia",
      description: "Kit completo com platô, disco e rolamento para veículos leves.",
      code: "KE-5501",
    },
    {
      name: "Lâmpada LED H7",
      category: "Lâmpadas",
      partner: "Excelite",
      description: "Lâmpada LED de alta luminosidade com 6000K.",
      code: "LH7-220",
    },
    {
      name: "Filtro de Óleo Premium",
      category: "Filtros",
      partner: "Florio",
      description: "Filtro de óleo com elemento filtrante de alta eficiência.",
      code: "FO-1100",
    },
    {
      name: "Pastilha de Freio Cerâmica",
      category: "Freios",
      partner: "FirPar",
      description: "Pastilha de freio cerâmica para uso esportivo.",
      code: "PFC-880",
    },
    {
      name: "Rolamento de Roda",
      category: "Rolamentos",
      partner: "Rolt do Brasil",
      description: "Rolamento de roda com vedação dupla e graxa especial.",
      code: "RR-4420",
    },
    {
      name: "Sensor de Rotação ABS",
      category: "Sensores",
      partner: "SLY Parts",
      description: "Sensor de rotação para sistema ABS com conector original.",
      code: "SA-3100",
    },
    {
      name: "Disco de Embreagem Reforçado",
      category: "Embreagens",
      partner: "Platolândia",
      description: "Disco com molas reforçadas para uso pesado.",
      code: "DE-6700",
    },
    {
      name: "Lâmpada Halógena H4",
      category: "Lâmpadas",
      partner: "Excelite",
      description: "Lâmpada halógena de alta durabilidade.",
      code: "LH4-150",
    },
    {
      name: "Filtro de Ar Esportivo",
      category: "Filtros",
      partner: "Florio",
      description: "Filtro de ar com maior fluxo para melhor desempenho.",
      code: "FA-2200",
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === "Todos" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.partner.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.code.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="produtos" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#f7f7f7]" />
      <div className="absolute inset-0 pattern-grid" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block font-['DM_Sans'] text-sm font-semibold text-[#b91c1c] uppercase tracking-widest mb-4">
            Catálogo
          </span>
          <h2 className="font-['Outfit'] text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-6">
            Nossos Produtos
          </h2>
          <p className="font-['DM_Sans'] text-lg text-[#525252] max-w-2xl mx-auto">
            Explore nossa linha completa de produtos das melhores indústrias do mercado de autopeças.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#b91c1c] to-[#8b5e34] mx-auto mt-6" />
        </div>

        {/* Search and filter */}
        <div className="mb-12">
          {/* Search bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar produtos, códigos ou parceiros..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-4 pl-12 bg-white rounded-xl border border-[#d4d4d4] focus:border-[#b91c1c] focus:ring-2 focus:ring-[#b91c1c]/20 outline-none transition-all font-['DM_Sans']"
              />
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8c8c8c]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-lg font-['DM_Sans'] font-medium text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#b91c1c] text-white shadow-lg shadow-[#b91c1c]/30"
                    : "bg-white text-[#525252] hover:bg-[#ebebeb] border border-[#d4d4d4]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.code}
              className="group bg-white rounded-2xl p-6 shadow-md border border-[#ebebeb] hover:shadow-xl hover:border-[#b91c1c]/20 transition-all duration-300"
            >
              {/* Product image placeholder */}
              <div className="relative w-full h-40 bg-gradient-to-br from-[#f7f7f7] to-[#ebebeb] rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                <svg
                  className="w-16 h-16 text-[#d4d4d4] group-hover:text-[#b91c1c]/30 transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                
                {/* Category badge */}
                <span className="absolute top-3 right-3 font-['DM_Sans'] text-xs font-medium text-white bg-[#b91c1c] px-2 py-1 rounded">
                  {product.category}
                </span>
              </div>

              {/* Product info */}
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-['Outfit'] text-lg font-bold text-[#1a1a1a] leading-tight">
                    {product.name}
                  </h3>
                </div>
                
                <p className="font-['DM_Sans'] text-sm text-[#6b6b6b] leading-relaxed">
                  {product.description}
                </p>

                <div className="flex items-center justify-between pt-2">
                  <span className="font-['DM_Sans'] text-xs font-medium text-[#8b5e34]">
                    {product.partner}
                  </span>
                  <span className="font-['DM_Sans'] text-xs font-mono text-[#8c8c8c] bg-[#f7f7f7] px-2 py-1 rounded">
                    {product.code}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <svg
              className="w-16 h-16 mx-auto text-[#d4d4d4] mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="font-['DM_Sans'] text-lg text-[#6b6b6b]">
              Nenhum produto encontrado para sua busca.
            </p>
            <button
              onClick={() => { setSearchTerm(""); setActiveCategory("Todos"); }}
              className="mt-4 font-['DM_Sans'] text-[#b91c1c] font-medium hover:underline"
            >
              Limpar filtros
            </button>
          </div>
        )}

        {/* Results count */}
        {filteredProducts.length > 0 && (
          <div className="mt-8 text-center">
            <p className="font-['DM_Sans'] text-sm text-[#8c8c8c]">
              Exibindo {filteredProducts.length} de {products.length} produtos
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

// ============================================
// DOWNLOADS SECTION
// ============================================
const DownloadsSection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const catalogs = [
    { company: "AutoImpact", file: "Catálogo Geral 2024", size: "12.5 MB", type: "PDF", color: "from-[#b91c1c] to-[#991b1b]" },
    { company: "DS Auto Parts", file: "Linha Completa Motor", size: "8.2 MB", type: "PDF", color: "from-[#8b5e34] to-[#78502a]" },
    { company: "SLY Parts", file: "Componentes Elétricos", size: "6.8 MB", type: "PDF", color: "from-[#404040] to-[#2d2d2d]" },
    { company: "RIC", file: "Pistões e Anéis", size: "4.5 MB", type: "PDF", color: "from-[#b91c1c] to-[#8b5e34]" },
    { company: "Turotest", file: "Equipamentos Diagnóstico", size: "15.3 MB", type: "PDF", color: "from-[#78502a] to-[#5c3d1e]" },
    { company: "DS Agro", file: "Linha Agrícola 2024", size: "9.1 MB", type: "PDF", color: "from-[#404040] to-[#1a1a1a]" },
    { company: "Florio", file: "Filtros Automotivos", size: "5.7 MB", type: "PDF", color: "from-[#b91c1c] to-[#991b1b]" },
    { company: "Platolândia", file: "Embreagens Leves/Pesados", size: "7.4 MB", type: "PDF", color: "from-[#8b5e34] to-[#78502a]" },
    { company: "FirPar", file: "Sistema de Freios", size: "6.2 MB", type: "PDF", color: "from-[#404040] to-[#2d2d2d]" },
    { company: "Excelite", file: "Iluminação Automotiva", size: "3.9 MB", type: "PDF", color: "from-[#b91c1c] to-[#8b5e34]" },
    { company: "Rolt do Brasil", file: "Rolamentos e Transmissão", size: "11.2 MB", type: "PDF", color: "from-[#78502a] to-[#5c3d1e]" },
    { company: "Weasler", file: "Transmissão Agrícola", size: "8.6 MB", type: "PDF", color: "from-[#404040] to-[#1a1a1a]" },
    { company: "Radiex", file: "Aditivos e Fluidos", size: "2.8 MB", type: "PDF", color: "from-[#b91c1c] to-[#991b1b]" },
    { company: "Sika", file: "Produtos Químicos Auto", size: "4.1 MB", type: "PDF", color: "from-[#8b5e34] to-[#78502a]" },
  ];

  const filteredCatalogs = catalogs.filter(
    (catalog) =>
      catalog.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      catalog.file.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="downloads" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#b91c1c] rounded-full blur-[200px] opacity-5" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8b5e34] rounded-full blur-[180px] opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block font-['DM_Sans'] text-sm font-semibold text-[#b91c1c] uppercase tracking-widest mb-4">
            Materiais
          </span>
          <h2 className="font-['Outfit'] text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-6">
            Downloads
          </h2>
          <p className="font-['DM_Sans'] text-lg text-[#525252] max-w-2xl mx-auto">
            Acesse os catálogos completos de todas as nossas indústrias parceiras.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#b91c1c] to-[#8b5e34] mx-auto mt-6" />
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar catálogos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-4 pl-12 bg-[#f7f7f7] rounded-xl border border-[#ebebeb] focus:border-[#b91c1c] focus:ring-2 focus:ring-[#b91c1c]/20 focus:bg-white outline-none transition-all font-['DM_Sans']"
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8c8c8c]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Catalogs grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredCatalogs.map((catalog) => (
            <div
              key={`${catalog.company}-${catalog.file}`}
              className="group bg-[#f7f7f7] hover:bg-white rounded-xl p-5 border border-[#ebebeb] hover:border-[#d4d4d4] hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                {/* PDF icon */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${catalog.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-['Outfit'] font-bold text-[#1a1a1a] mb-1 truncate">
                    {catalog.company}
                  </h3>
                  <p className="font-['DM_Sans'] text-sm text-[#6b6b6b] truncate mb-2">
                    {catalog.file}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="font-['DM_Sans'] text-xs text-[#8c8c8c]">
                      {catalog.size}
                    </span>
                    <span className="w-1 h-1 bg-[#d4d4d4] rounded-full" />
                    <span className="font-['DM_Sans'] text-xs font-medium text-[#b91c1c]">
                      {catalog.type}
                    </span>
                  </div>
                </div>
              </div>

              {/* Download button */}
              <button className="mt-4 w-full py-2.5 bg-[#1a1a1a] hover:bg-[#b91c1c] text-white font-['DM_Sans'] text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-colors duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download
              </button>
            </div>
          ))}
        </div>

        {/* No results */}
        {filteredCatalogs.length === 0 && (
          <div className="text-center py-12">
            <svg
              className="w-16 h-16 mx-auto text-[#d4d4d4] mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p className="font-['DM_Sans'] text-lg text-[#6b6b6b]">
              Nenhum catálogo encontrado.
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="mt-4 font-['DM_Sans'] text-[#b91c1c] font-medium hover:underline"
            >
              Limpar busca
            </button>
          </div>
        )}

        {/* Results count */}
        {filteredCatalogs.length > 0 && (
          <div className="mt-8 text-center">
            <p className="font-['DM_Sans'] text-sm text-[#8c8c8c]">
              {filteredCatalogs.length} catálogos disponíveis
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

// ============================================
// ATUAÇÃO (COVERAGE MAP) SECTION
// ============================================
const AtuacaoSection = () => {
  const [activeState, setActiveState] = useState<"MT" | "MS" | null>(null);

  const statesData = {
    MT: {
      name: "Mato Grosso",
      capital: "Cuiabá",
      cities: ["Cuiabá", "Várzea Grande", "Rondonópolis", "Sinop", "Tangará da Serra", "Cáceres", "Primavera do Leste"],
      representative: "Frank de Sá",
      phone: "(65) 3054-1819",
    },
    MS: {
      name: "Mato Grosso do Sul",
      capital: "Campo Grande",
      cities: ["Campo Grande", "Dourados", "Três Lagoas", "Corumbá", "Ponta Porã", "Naviraí", "Nova Andradina"],
      representative: "Suely Rodrigues",
      phone: "(67) 3384-4511",
    },
  };

  return (
    <section id="atuacao" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2d2d2d] to-[#3d2914]" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Accent blurs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#b91c1c] rounded-full blur-[180px] opacity-15" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#8b5e34] rounded-full blur-[150px] opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block font-['DM_Sans'] text-sm font-semibold text-[#ef4444] uppercase tracking-widest mb-4">
            Cobertura Regional
          </span>
          <h2 className="font-['Outfit'] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Área de Atuação
          </h2>
          <p className="font-['DM_Sans'] text-lg text-[#b3b3b3] max-w-2xl mx-auto">
            Atendemos toda a região Centro-Oeste com presença forte em Mato Grosso e Mato Grosso do Sul.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#b91c1c] to-[#8b5e34] mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map visualization */}
          <div className="relative">
            {/* Stylized map container */}
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Brazil outline placeholder - stylized */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* MT state */}
                <button
                  onClick={() => setActiveState(activeState === "MT" ? null : "MT")}
                  className={`absolute top-[15%] left-[25%] w-[45%] h-[40%] rounded-2xl transition-all duration-500 flex flex-col items-center justify-center gap-2 ${
                    activeState === "MT" 
                      ? "bg-[#b91c1c] shadow-2xl shadow-[#b91c1c]/50 scale-105" 
                      : "bg-white/10 hover:bg-white/20 border border-white/20"
                  }`}
                >
                  <span className="font-['Outfit'] text-4xl font-bold text-white">MT</span>
                  <span className="font-['DM_Sans'] text-sm text-white/80">Mato Grosso</span>
                  {activeState === "MT" && (
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-pulse" />
                  )}
                </button>

                {/* MS state */}
                <button
                  onClick={() => setActiveState(activeState === "MS" ? null : "MS")}
                  className={`absolute bottom-[15%] left-[35%] w-[40%] h-[35%] rounded-2xl transition-all duration-500 flex flex-col items-center justify-center gap-2 ${
                    activeState === "MS" 
                      ? "bg-[#8b5e34] shadow-2xl shadow-[#8b5e34]/50 scale-105" 
                      : "bg-white/10 hover:bg-white/20 border border-white/20"
                  }`}
                >
                  <span className="font-['Outfit'] text-4xl font-bold text-white">MS</span>
                  <span className="font-['DM_Sans'] text-sm text-white/80">Mato Grosso do Sul</span>
                  {activeState === "MS" && (
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-pulse" />
                  )}
                </button>

                {/* Connection line */}
                <div className="absolute top-[52%] left-[45%] w-[2px] h-[15%] bg-gradient-to-b from-[#b91c1c] to-[#8b5e34] opacity-50" />
              </div>

              {/* Decorative circles */}
              <div className="absolute top-[25%] left-[40%] w-3 h-3 bg-[#ef4444] rounded-full animate-pulse" />
              <div className="absolute bottom-[30%] left-[50%] w-2 h-2 bg-[#c9a07a] rounded-full animate-pulse delay-300" />
            </div>

            {/* Legend */}
            <div className="flex justify-center gap-8 mt-8">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-[#b91c1c]" />
                <span className="font-['DM_Sans'] text-sm text-[#b3b3b3]">Mato Grosso</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-[#8b5e34]" />
                <span className="font-['DM_Sans'] text-sm text-[#b3b3b3]">Mato Grosso do Sul</span>
              </div>
            </div>
          </div>

          {/* State details */}
          <div className="space-y-6">
            {(["MT", "MS"] as const).map((state) => (
              <div
                key={state}
                className={`p-6 rounded-2xl transition-all duration-300 ${
                  activeState === state
                    ? "bg-white/10 border border-white/20"
                    : "bg-white/5 border border-transparent hover:bg-white/10"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center font-['Outfit'] font-bold text-xl text-white ${
                    state === "MT" ? "bg-[#b91c1c]" : "bg-[#8b5e34]"
                  }`}>
                    {state}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-['Outfit'] text-xl font-bold text-white mb-1">
                      {statesData[state].name}
                    </h3>
                    <p className="font-['DM_Sans'] text-sm text-[#8c8c8c] mb-3">
                      Capital: {statesData[state].capital}
                    </p>
                    
                    {/* Cities */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {statesData[state].cities.map((city) => (
                        <span
                          key={city}
                          className="font-['DM_Sans'] text-xs px-2 py-1 bg-white/10 text-[#b3b3b3] rounded"
                        >
                          {city}
                        </span>
                      ))}
                    </div>

                    {/* Contact info */}
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-[#8c8c8c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span className="font-['DM_Sans'] text-[#b3b3b3]">{statesData[state].representative}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-[#8c8c8c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="font-['DM_Sans'] text-[#ef4444]">{statesData[state].phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Headquarters info */}
            <div className="p-6 bg-gradient-to-r from-[#b91c1c]/20 to-[#8b5e34]/20 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-6 h-6 text-[#ef4444]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <h4 className="font-['Outfit'] font-bold text-white">Sede Principal</h4>
              </div>
              <p className="font-['DM_Sans'] text-sm text-[#b3b3b3]">
                Cuiabá - MT • Av. Historiador Rubens de Mendonça, 1731, Sala 1005
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// CONTATO (CONTACT) SECTION
// ============================================
interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  state: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const ContatoSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    state: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Telefone é obrigatório";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Mensagem é obrigatória";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        state: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Endereço",
      content: "Av. Historiador Rubens de Mendonça, 1731",
      subcontent: "Sala 1005, Cuiabá-MT, CEP 78.048-340",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Telefones",
      content: "(65) 3054-1819 - MT",
      subcontent: "(67) 3384-4511 - MS",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      content: "rodrigues@reprodrigues.com.br",
      subcontent: "",
    },
  ];

  return (
    <section id="contato" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#f7f7f7]" />
      <div className="absolute inset-0 pattern-dots" />

      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#b91c1c] via-[#8b5e34] to-[#404040]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block font-['DM_Sans'] text-sm font-semibold text-[#b91c1c] uppercase tracking-widest mb-4">
            Fale Conosco
          </span>
          <h2 className="font-['Outfit'] text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-6">
            Entre em Contato
          </h2>
          <p className="font-['DM_Sans'] text-lg text-[#525252] max-w-2xl mx-auto">
            Estamos prontos para atender você. Entre em contato conosco para dúvidas, orçamentos ou parcerias.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#b91c1c] to-[#8b5e34] mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-5 bg-white rounded-xl border border-[#ebebeb] shadow-sm"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#b91c1c] to-[#8b5e34] flex items-center justify-center text-white flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-['Outfit'] font-bold text-[#1a1a1a] mb-1">
                    {item.title}
                  </h3>
                  <p className="font-['DM_Sans'] text-sm text-[#525252]">
                    {item.content}
                  </p>
                  {item.subcontent && (
                    <p className="font-['DM_Sans'] text-sm text-[#525252]">
                      {item.subcontent}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/556530541819"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-5 bg-[#25D366] hover:bg-[#20BA5C] rounded-xl text-white font-['DM_Sans'] font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-[#25D366]/30"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Falar pelo WhatsApp
            </a>

            {/* Office hours */}
            <div className="p-5 bg-white rounded-xl border border-[#ebebeb]">
              <h3 className="font-['Outfit'] font-bold text-[#1a1a1a] mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#b91c1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Horário de Atendimento
              </h3>
              <p className="font-['DM_Sans'] text-sm text-[#525252]">
                Segunda a Sexta: 08:00 - 18:00
              </p>
              <p className="font-['DM_Sans'] text-sm text-[#525252]">
                Sábado: 08:00 - 12:00
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-[#ebebeb]">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-['Outfit'] text-2xl font-bold text-[#1a1a1a] mb-2">
                    Mensagem Enviada!
                  </h3>
                  <p className="font-['DM_Sans'] text-[#525252] mb-6">
                    Obrigado pelo contato. Retornaremos em breve.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="font-['DM_Sans'] text-[#b91c1c] font-medium hover:underline"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block font-['DM_Sans'] text-sm font-medium text-[#1a1a1a] mb-2">
                        Nome *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-[#f7f7f7] rounded-lg border ${
                          errors.name ? "border-red-500" : "border-[#ebebeb]"
                        } focus:border-[#b91c1c] focus:ring-2 focus:ring-[#b91c1c]/20 focus:bg-white outline-none transition-all font-['DM_Sans']`}
                        placeholder="Seu nome"
                      />
                      {errors.name && (
                        <p className="mt-1 font-['DM_Sans'] text-xs text-red-500">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block font-['DM_Sans'] text-sm font-medium text-[#1a1a1a] mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-[#f7f7f7] rounded-lg border ${
                          errors.email ? "border-red-500" : "border-[#ebebeb]"
                        } focus:border-[#b91c1c] focus:ring-2 focus:ring-[#b91c1c]/20 focus:bg-white outline-none transition-all font-['DM_Sans']`}
                        placeholder="seu@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 font-['DM_Sans'] text-xs text-red-500">{errors.email}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block font-['DM_Sans'] text-sm font-medium text-[#1a1a1a] mb-2">
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-[#f7f7f7] rounded-lg border ${
                          errors.phone ? "border-red-500" : "border-[#ebebeb]"
                        } focus:border-[#b91c1c] focus:ring-2 focus:ring-[#b91c1c]/20 focus:bg-white outline-none transition-all font-['DM_Sans']`}
                        placeholder="(00) 00000-0000"
                      />
                      {errors.phone && (
                        <p className="mt-1 font-['DM_Sans'] text-xs text-red-500">{errors.phone}</p>
                      )}
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block font-['DM_Sans'] text-sm font-medium text-[#1a1a1a] mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#f7f7f7] rounded-lg border border-[#ebebeb] focus:border-[#b91c1c] focus:ring-2 focus:ring-[#b91c1c]/20 focus:bg-white outline-none transition-all font-['DM_Sans']"
                        placeholder="Nome da empresa"
                      />
                    </div>

                    {/* State */}
                    <div>
                      <label className="block font-['DM_Sans'] text-sm font-medium text-[#1a1a1a] mb-2">
                        Estado
                      </label>
                      <select
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#f7f7f7] rounded-lg border border-[#ebebeb] focus:border-[#b91c1c] focus:ring-2 focus:ring-[#b91c1c]/20 focus:bg-white outline-none transition-all font-['DM_Sans']"
                      >
                        <option value="">Selecione</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block font-['DM_Sans'] text-sm font-medium text-[#1a1a1a] mb-2">
                        Assunto
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#f7f7f7] rounded-lg border border-[#ebebeb] focus:border-[#b91c1c] focus:ring-2 focus:ring-[#b91c1c]/20 focus:bg-white outline-none transition-all font-['DM_Sans']"
                      >
                        <option value="">Selecione</option>
                        <option value="orcamento">Orçamento</option>
                        <option value="parceria">Parceria</option>
                        <option value="informacoes">Informações</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-['DM_Sans'] text-sm font-medium text-[#1a1a1a] mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 bg-[#f7f7f7] rounded-lg border ${
                        errors.message ? "border-red-500" : "border-[#ebebeb]"
                      } focus:border-[#b91c1c] focus:ring-2 focus:ring-[#b91c1c]/20 focus:bg-white outline-none transition-all font-['DM_Sans'] resize-none`}
                      placeholder="Sua mensagem..."
                    />
                    {errors.message && (
                      <p className="mt-1 font-['DM_Sans'] text-xs text-red-500">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#b91c1c] hover:bg-[#991b1b] disabled:bg-[#d4d4d4] text-white font-['DM_Sans'] font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensagem
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// FOOTER
// ============================================
const Footer = () => {
  const quickLinks = [
    { href: "#empresa", label: "A Empresa" },
    { href: "#equipe", label: "Equipe" },
    { href: "#industrias", label: "Indústrias" },
    { href: "#produtos", label: "Produtos" },
    { href: "#downloads", label: "Downloads" },
    { href: "#atuacao", label: "Atuação" },
    { href: "#contato", label: "Contato" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative bg-[#1a1a1a] pt-16 pb-8 overflow-hidden">
      {/* Accent line at top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#b91c1c] via-[#8b5e34] to-[#404040]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Main footer content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Company info */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#b91c1c] to-[#991b1b] flex items-center justify-center">
                <span className="font-['Outfit'] font-extrabold text-xl text-white">RR</span>
              </div>
              <span className="font-['Outfit'] font-bold text-xl text-white">
                Representações Rodrigues
              </span>
            </a>
            <p className="font-['DM_Sans'] text-[#8c8c8c] leading-relaxed mb-6 max-w-sm">
              Construindo parcerias sólidas no mercado de autopeças há mais de 40 anos. 
              Excelência em representação comercial em Mato Grosso e Mato Grosso do Sul.
            </p>
            
            {/* Contact mini */}
            <div className="space-y-2">
              <p className="font-['DM_Sans'] text-sm text-[#8c8c8c]">
                <span className="text-[#ef4444]">MT:</span> (65) 3054-1819
              </p>
              <p className="font-['DM_Sans'] text-sm text-[#8c8c8c]">
                <span className="text-[#c9a07a]">MS:</span> (67) 3384-4511
              </p>
              <p className="font-['DM_Sans'] text-sm text-[#8c8c8c]">
                rodrigues@reprodrigues.com.br
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-['Outfit'] font-bold text-white mb-6">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-['DM_Sans'] text-sm text-[#8c8c8c] hover:text-[#ef4444] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & newsletter */}
          <div>
            <h4 className="font-['Outfit'] font-bold text-white mb-6">
              Redes Sociais
            </h4>
            <div className="flex gap-3 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[#b91c1c] flex items-center justify-center text-[#8c8c8c] hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Address mini */}
            <div className="p-4 bg-white/5 rounded-xl">
              <p className="font-['DM_Sans'] text-xs text-[#8c8c8c] leading-relaxed">
                <span className="text-white font-medium">Sede:</span><br />
                Av. Historiador Rubens de Mendonça, 1731<br />
                Sala 1005, Cuiabá-MT<br />
                CEP 78.048-340
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-['DM_Sans'] text-sm text-[#6b6b6b]">
            © {new Date().getFullYear()} Representações Rodrigues. Todos os direitos reservados.
          </p>
          <p className="font-['DM_Sans'] text-xs text-[#525252]">
            Desenvolvido por{" "}
            <a href="#" className="text-[#8c8c8c] hover:text-[#ef4444] transition-colors">
              Softham Sistemas
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

// ============================================
// MAIN EXPORT
// ============================================
function Index() {
  return (
    <main className="font-['DM_Sans']">
      <Navigation />
      <HeroSection />
      <EmpresaSection />
      <EquipeSection />
      <IndustriasSection />
      <ProdutosSection />
      <DownloadsSection />
      <AtuacaoSection />
      <ContatoSection />
      <Footer />
    </main>
  );
}

export default Index;
