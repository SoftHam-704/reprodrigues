import { useState, useEffect } from "react";

// ============================================
// NAVIGATION - Conservative, Professional
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
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div
            className={`w-11 h-11 flex items-center justify-center font-serif font-bold text-xl transition-all duration-300 ${
              scrolled
                ? "bg-[#c41e3a] text-white"
                : "bg-white text-[#c41e3a]"
            }`}
          >
            RR
          </div>
          <span
            className={`font-serif font-semibold text-lg hidden sm:block transition-colors duration-300 ${
              scrolled ? "text-[#2a2a2a]" : "text-white"
            }`}
          >
            Representações Rodrigues
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#c41e3a] ${
                scrolled ? "text-[#4a4a4a]" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 ${
            scrolled ? "text-[#2a2a2a]" : "text-white"
          }`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#e5e5e5] mt-2">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#4a4a4a] hover:text-[#c41e3a] transition-colors py-2 border-b border-[#f0f0f0]"
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
// HERO SECTION - Clean with industrial background
// ============================================
const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center">
      {/* Background image with dark overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-[#2a2a2a]/85" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Logo */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-[#c41e3a] shadow-lg">
            <span className="font-serif font-bold text-4xl text-white tracking-tight">
              RR
            </span>
          </div>
        </div>

        {/* Company name */}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
          Representações Rodrigues
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-[#d0d0d0] max-w-2xl mx-auto mb-8 leading-relaxed">
          Construindo parcerias sólidas no mercado de autopeças desde 1982.
          <span className="block mt-2 text-[#a0a0a0]">
            Excelência em representação comercial em Mato Grosso e Mato Grosso do Sul.
          </span>
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contato"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#c41e3a] hover:bg-[#a31830] text-white font-medium transition-colors"
          >
            Fale Conosco
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#industrias"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent hover:bg-white/10 text-white font-medium transition-colors border border-white/40"
          >
            Nossas Indústrias
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: "40+", label: "Anos de Experiência" },
            { value: "16", label: "Indústrias Parceiras" },
            { value: "2", label: "Estados Atendidos" },
            { value: "100%", label: "Compromisso" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-3xl md:text-4xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-[#9a9a9a] uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#empresa" className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors">
          <span className="text-xs uppercase tracking-wider">Saiba Mais</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

// ============================================
// A EMPRESA SECTION - Two-column layout
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
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Visão",
      description: "Ser a principal referência em parcerias no mercado de autopeças, reconhecida pela excelência no atendimento e pela qualidade dos produtos representados.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Missão",
      description: "Representar indústrias com excelência, através de parcerias estratégicas e atendimento diferenciado, agregando valor ao mercado de autopeças.",
    },
  ];

  return (
    <section id="empresa" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2a2a2a] mb-3">
            A Empresa
          </h2>
          <div className="w-16 h-0.5 bg-[#c41e3a] mx-auto" />
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Company text */}
          <div>
            <p className="text-[#4a4a4a] text-lg leading-relaxed mb-6">
              Fundada em <span className="font-semibold text-[#c41e3a]">1982</span> por 
              <span className="font-semibold text-[#2a2a2a]"> Oswaldo Rodrigues dos Santos Filho</span>, 
              graduado em Administração de Empresas, a Representações Rodrigues nasceu com o propósito de 
              ser um elo de confiança entre indústrias e o mercado de autopeças.
            </p>
            <p className="text-[#4a4a4a] text-lg leading-relaxed">
              Há mais de quatro décadas, construímos uma trajetória sólida baseada em valores como 
              ética, comprometimento e excelência no atendimento, tornando-nos referência em 
              representação comercial nos estados de <span className="font-semibold text-[#6d4c41]">Mato Grosso</span> e 
              <span className="font-semibold text-[#6d4c41]"> Mato Grosso do Sul</span>.
            </p>
          </div>

          {/* Right - Professional office photo */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Escritório profissional"
              className="w-full h-80 object-cover shadow-md"
            />
          </div>
        </div>

        {/* Pillars - Simple white cards */}
        <div className="bg-[#f5f5f5] -mx-6 px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 bg-[#f5f5f5] flex items-center justify-center text-[#c41e3a] mb-4">
                    {pillar.icon}
                  </div>

                  {/* Content */}
                  <h3 className="font-serif text-xl font-bold text-[#2a2a2a] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-[#5a5a5a] text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// NOSSA EQUIPE (TEAM) SECTION - Clean grid
// ============================================
const EquipeSection = () => {
  const teamMembers = [
    {
      name: "Oswaldo Rodrigues",
      role: "Diretor",
      initials: "OR",
    },
    {
      name: "Suely Rodrigues",
      role: "Consultor Comercial / MS",
      initials: "SR",
    },
    {
      name: "Matheus Rodrigues",
      role: "Supervisor de Vendas MS/MT",
      initials: "MR",
    },
    {
      name: "Érika Oliveira",
      role: "Coord. Administrativo",
      initials: "EO",
    },
    {
      name: "Frank de Sá",
      role: "Promotor Vendas / MT",
      initials: "FS",
    },
  ];

  return (
    <section id="equipe" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2a2a2a] mb-3">
            Nossa Equipe
          </h2>
          <p className="text-[#6a6a6a] max-w-xl mx-auto">
            Profissionais dedicados e comprometidos com a excelência no atendimento.
          </p>
          <div className="w-16 h-0.5 bg-[#c41e3a] mx-auto mt-4" />
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              {/* Photo circle - simple border */}
              <div className="relative mx-auto mb-4">
                <div className="w-28 h-28 mx-auto rounded-full bg-[#e8e8e8] border-2 border-[#d0d0d0] flex items-center justify-center hover:border-[#c41e3a] transition-colors">
                  <span className="font-serif font-bold text-2xl text-[#6a6a6a]">
                    {member.initials}
                  </span>
                </div>
              </div>

              {/* Info */}
              <h3 className="font-semibold text-[#2a2a2a] mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-[#6d4c41]">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// NOSSAS INDÚSTRIAS SECTION - Clean grid of white cards
// ============================================
const IndustriasSection = () => {
  const industries = [
    { name: "AutoImpact", initials: "AI", description: "Peças de reposição para sistemas de suspensão e direção." },
    { name: "DS Auto Parts", initials: "DS", description: "Ampla linha de peças automotivas para motores e sistemas de injeção." },
    { name: "SLY Parts", initials: "SL", description: "Componentes elétricos e eletrônicos para veículos modernos." },
    { name: "RIC", initials: "RC", description: "Pistões e componentes de alta performance para motores." },
    { name: "Turotest", initials: "TT", description: "Equipamentos de teste e diagnóstico automotivo." },
    { name: "DS Agro", initials: "DA", description: "Peças e componentes para máquinas agrícolas." },
    { name: "Florio", initials: "FL", description: "Filtros e sistemas de filtragem automotiva de alta qualidade." },
    { name: "Platolândia", initials: "PL", description: "Platôs e discos de embreagem para veículos leves e pesados." },
    { name: "FirPar", initials: "FP", description: "Componentes de freios e sistemas de frenagem." },
    { name: "Excelite", initials: "EX", description: "Lâmpadas automotivas e sistemas de iluminação." },
    { name: "Rolt do Brasil", initials: "RB", description: "Rolamentos e componentes de transmissão de alta durabilidade." },
    { name: "Weasler", initials: "WE", description: "Componentes de transmissão para agricultura e indústria." },
    { name: "Radiex", initials: "RX", description: "Aditivos e fluidos para sistemas de arrefecimento." },
    { name: "Sika", initials: "SK", description: "Adesivos, selantes e produtos químicos automotivos." },
    { name: "Nacional", initials: "NC", description: "Componentes de alta qualidade para o mercado automotivo." },
    { name: "Premium Parts", initials: "PP", description: "Peças premium para veículos de passeio e utilitários." },
  ];

  return (
    <section id="industrias" className="py-20 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2a2a2a] mb-3">
            Nossas Indústrias
          </h2>
          <p className="text-[#6a6a6a] max-w-xl mx-auto">
            Representamos as melhores marcas do mercado de autopeças.
          </p>
          <div className="w-16 h-0.5 bg-[#c41e3a] mx-auto mt-4" />
        </div>

        {/* Industries grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Logo placeholder */}
              <div className="w-12 h-12 bg-[#f0f0f0] flex items-center justify-center text-[#c41e3a] font-serif font-bold text-lg mb-3 mx-auto">
                {industry.initials}
              </div>

              {/* Content */}
              <h3 className="font-semibold text-[#2a2a2a] text-center mb-2">
                {industry.name}
              </h3>
              <p className="text-[#6a6a6a] text-sm text-center leading-relaxed mb-3">
                {industry.description}
              </p>
              
              {/* Link */}
              <div className="text-center">
                <a href="#contato" className="text-[#c41e3a] text-sm hover:underline">
                  Saiba mais →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// PRODUCTS SECTION - Clean filterable grid
// ============================================
const ProdutosSection = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "Todos", "Sensores", "Pistões", "Válvulas", "Embreagens", 
    "Lâmpadas", "Filtros", "Freios", "Rolamentos"
  ];

  const products = [
    { name: "Sensor de Temperatura", category: "Sensores", partner: "SLY Parts", description: "Sensor de temperatura com precisão e durabilidade.", code: "ST-2240" },
    { name: "Pistão Forjado", category: "Pistões", partner: "RIC", description: "Pistão de alta performance para motores.", code: "PF-1890" },
    { name: "Válvula de Admissão", category: "Válvulas", partner: "DS Auto Parts", description: "Válvula de admissão com tratamento térmico especial.", code: "VA-3320" },
    { name: "Kit Embreagem Completo", category: "Embreagens", partner: "Platolândia", description: "Kit completo com platô, disco e rolamento.", code: "KE-5501" },
    { name: "Lâmpada LED H7", category: "Lâmpadas", partner: "Excelite", description: "Lâmpada LED de alta luminosidade com 6000K.", code: "LH7-220" },
    { name: "Filtro de Óleo Premium", category: "Filtros", partner: "Florio", description: "Filtro de óleo com elemento filtrante de alta eficiência.", code: "FO-1100" },
    { name: "Pastilha de Freio Cerâmica", category: "Freios", partner: "FirPar", description: "Pastilha de freio cerâmica para uso esportivo.", code: "PFC-880" },
    { name: "Rolamento de Roda", category: "Rolamentos", partner: "Rolt do Brasil", description: "Rolamento de roda com vedação dupla.", code: "RR-4420" },
    { name: "Sensor de Rotação ABS", category: "Sensores", partner: "SLY Parts", description: "Sensor de rotação para sistema ABS.", code: "SA-3100" },
    { name: "Disco de Embreagem Reforçado", category: "Embreagens", partner: "Platolândia", description: "Disco com molas reforçadas para uso pesado.", code: "DE-6700" },
    { name: "Lâmpada Halógena H4", category: "Lâmpadas", partner: "Excelite", description: "Lâmpada halógena de alta durabilidade.", code: "LH4-150" },
    { name: "Filtro de Ar Esportivo", category: "Filtros", partner: "Florio", description: "Filtro de ar com maior fluxo para melhor desempenho.", code: "FA-2200" },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === "Todos" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.partner.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.code.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="produtos" className="py-20 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2a2a2a] mb-3">
            Nossos Produtos
          </h2>
          <p className="text-[#6a6a6a] max-w-xl mx-auto">
            Explore nossa linha completa de produtos das melhores indústrias.
          </p>
          <div className="w-16 h-0.5 bg-[#c41e3a] mx-auto mt-4" />
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar produtos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-10 bg-white border border-[#d5d5d5] focus:border-[#c41e3a] focus:outline-none transition-colors"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9a9a9a]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Category filter - simple pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium transition-colors border ${
                activeCategory === category
                  ? "bg-[#c41e3a] text-white border-[#c41e3a]"
                  : "bg-white text-[#5a5a5a] border-[#d5d5d5] hover:border-[#c41e3a]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredProducts.map((product) => (
            <div
              key={product.code}
              className="bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Product image placeholder */}
              <div className="w-full h-32 bg-[#f0f0f0] flex items-center justify-center mb-4">
                <svg
                  className="w-12 h-12 text-[#d0d0d0]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>

              {/* Product info */}
              <h3 className="font-semibold text-[#2a2a2a] mb-1">
                {product.name}
              </h3>
              <p className="text-[#6a6a6a] text-sm mb-3 leading-relaxed">
                {product.description}
              </p>

              <div className="flex items-center justify-between text-xs">
                <span className="text-[#6d4c41] font-medium">{product.partner}</span>
                <span className="text-[#9a9a9a] font-mono bg-[#f5f5f5] px-2 py-1">{product.code}</span>
              </div>
            </div>
          ))}
        </div>

        {/* No results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#6a6a6a]">Nenhum produto encontrado.</p>
            <button
              onClick={() => { setSearchTerm(""); setActiveCategory("Todos"); }}
              className="mt-3 text-[#c41e3a] hover:underline"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

// ============================================
// DOWNLOADS SECTION - Simple list/table view
// ============================================
const DownloadsSection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const catalogs = [
    { company: "AutoImpact", file: "Catálogo Geral 2024", size: "12.5 MB" },
    { company: "DS Auto Parts", file: "Linha Completa Motor", size: "8.2 MB" },
    { company: "SLY Parts", file: "Componentes Elétricos", size: "6.8 MB" },
    { company: "RIC", file: "Pistões e Anéis", size: "4.5 MB" },
    { company: "Turotest", file: "Equipamentos Diagnóstico", size: "15.3 MB" },
    { company: "DS Agro", file: "Linha Agrícola 2024", size: "9.1 MB" },
    { company: "Florio", file: "Filtros Automotivos", size: "5.7 MB" },
    { company: "Platolândia", file: "Embreagens Leves/Pesados", size: "7.4 MB" },
    { company: "FirPar", file: "Sistema de Freios", size: "6.2 MB" },
    { company: "Excelite", file: "Iluminação Automotiva", size: "3.9 MB" },
    { company: "Rolt do Brasil", file: "Rolamentos e Transmissão", size: "11.2 MB" },
    { company: "Weasler", file: "Transmissão Agrícola", size: "8.6 MB" },
    { company: "Radiex", file: "Aditivos e Fluidos", size: "2.8 MB" },
    { company: "Sika", file: "Produtos Químicos Auto", size: "4.1 MB" },
  ];

  const filteredCatalogs = catalogs.filter(
    (catalog) =>
      catalog.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      catalog.file.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="downloads" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2a2a2a] mb-3">
            Downloads
          </h2>
          <p className="text-[#6a6a6a] max-w-xl mx-auto">
            Acesse os catálogos completos de nossas indústrias parceiras.
          </p>
          <div className="w-16 h-0.5 bg-[#c41e3a] mx-auto mt-4" />
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar catálogos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-10 bg-[#f5f5f5] border border-[#e5e5e5] focus:border-[#c41e3a] focus:outline-none transition-colors"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9a9a9a]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Table view */}
        <div className="bg-white border border-[#e5e5e5] overflow-hidden">
          {/* Table header */}
          <div className="hidden md:grid grid-cols-4 gap-4 px-6 py-3 bg-[#f5f5f5] border-b border-[#e5e5e5] text-sm font-semibold text-[#4a4a4a]">
            <div>Empresa</div>
            <div>Documento</div>
            <div>Tamanho</div>
            <div className="text-right">Ação</div>
          </div>

          {/* Table rows */}
          {filteredCatalogs.map((catalog, index) => (
            <div
              key={`${catalog.company}-${catalog.file}`}
              className={`grid md:grid-cols-4 gap-2 md:gap-4 px-6 py-4 items-center ${
                index !== filteredCatalogs.length - 1 ? "border-b border-[#e5e5e5]" : ""
              }`}
            >
              <div className="font-medium text-[#2a2a2a]">{catalog.company}</div>
              <div className="text-[#5a5a5a] text-sm">{catalog.file}</div>
              <div className="text-[#8a8a8a] text-sm">{catalog.size}</div>
              <div className="md:text-right">
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-[#c41e3a] hover:bg-[#a31830] text-white text-sm transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download
                </button>
              </div>
            </div>
          ))}

          {filteredCatalogs.length === 0 && (
            <div className="text-center py-8 text-[#6a6a6a]">
              Nenhum catálogo encontrado.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// ============================================
// ATUAÇÃO SECTION - Simple map with text
// ============================================
const AtuacaoSection = () => {
  return (
    <section id="atuacao" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2a2a2a] mb-3">
            Área de Atuação
          </h2>
          <p className="text-[#6a6a6a] max-w-xl mx-auto">
            Presença consolidada em Mato Grosso e Mato Grosso do Sul.
          </p>
          <div className="w-16 h-0.5 bg-[#c41e3a] mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Map */}
          <div className="h-80 lg:h-auto min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843084.4377559335!2d-58.11654!3d-15.5989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db47d8b7e0e4d%3A0xe52b2f5eb8c92f17!2sMato%20Grosso!5e0!3m2!1spt-BR!2sbr!4v1708000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Área de atuação"
              className="min-h-[400px]"
            />
          </div>

          {/* Coverage info */}
          <div className="space-y-6">
            {/* MT */}
            <div className="bg-[#f5f5f5] p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#c41e3a] flex items-center justify-center text-white font-serif font-bold">
                  MT
                </div>
                <div>
                  <h3 className="font-semibold text-[#2a2a2a]">Mato Grosso</h3>
                  <p className="text-sm text-[#6a6a6a]">Capital: Cuiabá</p>
                </div>
              </div>
              <p className="text-sm text-[#5a5a5a] mb-3">
                <span className="font-medium">Cidades atendidas:</span> Cuiabá, Várzea Grande, Rondonópolis, Sinop, Tangará da Serra, Cáceres
              </p>
              <p className="text-sm text-[#5a5a5a]">
                <span className="font-medium">Contato:</span> <span className="text-[#c41e3a]">(65) 3054-1819</span>
              </p>
            </div>

            {/* MS */}
            <div className="bg-[#f5f5f5] p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#6d4c41] flex items-center justify-center text-white font-serif font-bold">
                  MS
                </div>
                <div>
                  <h3 className="font-semibold text-[#2a2a2a]">Mato Grosso do Sul</h3>
                  <p className="text-sm text-[#6a6a6a]">Capital: Campo Grande</p>
                </div>
              </div>
              <p className="text-sm text-[#5a5a5a] mb-3">
                <span className="font-medium">Cidades atendidas:</span> Campo Grande, Dourados, Três Lagoas, Corumbá, Ponta Porã, Naviraí
              </p>
              <p className="text-sm text-[#5a5a5a]">
                <span className="font-medium">Contato:</span> <span className="text-[#6d4c41]">(67) 3384-4511</span>
              </p>
            </div>

            {/* Headquarters */}
            <div className="border border-[#e0e0e0] p-6">
              <h4 className="font-semibold text-[#2a2a2a] mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#c41e3a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Sede Principal
              </h4>
              <p className="text-sm text-[#5a5a5a]">
                Av. Historiador Rubens de Mendonça, 1731<br />
                Sala 1005, Cuiabá-MT<br />
                CEP 78.048-340
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// CONTATO (CONTACT) SECTION - Simple form
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
    
    if (!formData.name.trim()) newErrors.name = "Nome é obrigatório";
    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }
    if (!formData.phone.trim()) newErrors.phone = "Telefone é obrigatório";
    if (!formData.message.trim()) newErrors.message = "Mensagem é obrigatória";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", company: "", state: "", subject: "", message: "" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contato" className="py-20 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2a2a2a] mb-3">
            Entre em Contato
          </h2>
          <p className="text-[#6a6a6a] max-w-xl mx-auto">
            Estamos prontos para atender você.
          </p>
          <div className="w-16 h-0.5 bg-[#c41e3a] mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Contact info sidebar */}
          <div className="space-y-4">
            {/* Address */}
            <div className="bg-white p-5 border border-[#e5e5e5]">
              <h3 className="font-semibold text-[#2a2a2a] mb-2">Endereço</h3>
              <p className="text-sm text-[#5a5a5a]">
                Av. Historiador Rubens de Mendonça, 1731<br />
                Sala 1005, Cuiabá-MT<br />
                CEP 78.048-340
              </p>
            </div>

            {/* Phones */}
            <div className="bg-white p-5 border border-[#e5e5e5]">
              <h3 className="font-semibold text-[#2a2a2a] mb-2">Telefones</h3>
              <p className="text-sm text-[#5a5a5a]">
                <span className="text-[#c41e3a]">MT:</span> (65) 3054-1819<br />
                <span className="text-[#6d4c41]">MS:</span> (67) 3384-4511
              </p>
            </div>

            {/* Email */}
            <div className="bg-white p-5 border border-[#e5e5e5]">
              <h3 className="font-semibold text-[#2a2a2a] mb-2">Email</h3>
              <p className="text-sm text-[#5a5a5a]">
                rodrigues@reprodrigues.com.br
              </p>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/556530541819"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-4 bg-[#25D366] hover:bg-[#20BA5C] text-white font-medium transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Falar pelo WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 border border-[#e5e5e5]">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#2a2a2a] mb-2">
                    Mensagem Enviada!
                  </h3>
                  <p className="text-[#6a6a6a] mb-4">
                    Obrigado pelo contato. Retornaremos em breve.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-[#c41e3a] hover:underline"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-[#4a4a4a] mb-1">
                        Nome *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-[#d5d5d5]'} focus:border-[#c41e3a] focus:outline-none`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-[#4a4a4a] mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-[#d5d5d5]'} focus:border-[#c41e3a] focus:outline-none`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-[#4a4a4a] mb-1">
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-[#d5d5d5]'} focus:border-[#c41e3a] focus:outline-none`}
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-sm font-medium text-[#4a4a4a] mb-1">
                        Empresa
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#d5d5d5] focus:border-[#c41e3a] focus:outline-none"
                      />
                    </div>

                    {/* State */}
                    <div>
                      <label className="block text-sm font-medium text-[#4a4a4a] mb-1">
                        Estado
                      </label>
                      <select
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#d5d5d5] focus:border-[#c41e3a] focus:outline-none bg-white"
                      >
                        <option value="">Selecione...</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                      </select>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-sm font-medium text-[#4a4a4a] mb-1">
                        Assunto
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#d5d5d5] focus:border-[#c41e3a] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-[#4a4a4a] mb-1">
                      Mensagem *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-[#d5d5d5]'} focus:border-[#c41e3a] focus:outline-none resize-none`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#c41e3a] hover:bg-[#a31830] disabled:bg-[#d5d5d5] text-white font-medium transition-colors"
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
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
// FOOTER - Simple dark gray
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

  return (
    <footer className="bg-[#2a2a2a] pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main footer content - 3 columns */}
        <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          {/* Company info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#c41e3a] flex items-center justify-center">
                <span className="font-serif font-bold text-lg text-white">RR</span>
              </div>
              <span className="font-serif font-semibold text-white">
                Representações Rodrigues
              </span>
            </div>
            <p className="text-[#9a9a9a] text-sm leading-relaxed">
              Construindo parcerias sólidas no mercado de autopeças há mais de 40 anos. 
              Excelência em representação comercial em Mato Grosso e Mato Grosso do Sul.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#9a9a9a] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              Contato
            </h4>
            <div className="space-y-2 text-sm text-[#9a9a9a]">
              <p>
                Av. Historiador Rubens de Mendonça, 1731<br />
                Sala 1005, Cuiabá-MT<br />
                CEP 78.048-340
              </p>
              <p className="pt-2">
                <span className="text-[#c41e3a]">MT:</span> (65) 3054-1819<br />
                <span className="text-[#9a7a6a]">MS:</span> (67) 3384-4511
              </p>
              <p className="pt-2">
                rodrigues@reprodrigues.com.br
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-[#6a6a6a]">
            © {new Date().getFullYear()} Representações Rodrigues. Todos os direitos reservados.
          </p>
          <p className="text-xs text-[#5a5a5a]">
            Desenvolvido por{" "}
            <a href="#" className="text-[#7a7a7a] hover:text-white transition-colors">
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
    <main>
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
