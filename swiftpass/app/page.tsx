const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col justify-center items-center px-6">
      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto text-center space-y-8">
        
        {/* Badge/Pill */}
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
          <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
          Next.js 14 Full Stack Application
        </div>

        {/* Main Heading */}
        <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl text-slate-800 leading-tight">
          Project{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Nexus
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-slate-600 font-light max-w-3xl mx-auto leading-relaxed">
          Event Booking & Ticketing System
        </p>

        {/* Description */}
        <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-8">
          A professional-grade Event Booking & Ticketing web application built 
          with <strong>Next.js 14</strong>, <strong>TypeScript</strong>, and modern 
          tools. Features QR-coded tickets, admin analytics, and seamless booking experiences.
        </p>

        {/* CTA Button */}
        <div className="pt-8">
          <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-12 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
          {[
            { icon: "⚡", title: "Full Stack", desc: "Next.js + PostgreSQL" },
            { icon: "🎯", title: "Type Safe", desc: "TypeScript & Prisma" },
            { icon: "🚀", title: "Production Ready", desc: "Admin Dashboard & Analytics" }
          ].map((feature, index) => (
            <div key={index} className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
              <div className="text-2xl mb-3">{feature.icon}</div>
              <h3 className="font-semibold text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <div className="pt-12">
          <p className="text-slate-400 text-sm font-medium mb-4">BUILT WITH</p>
          <div className="flex justify-center items-center gap-8 text-slate-500">
            {["Next.js", "TypeScript", "Tailwind", "Prisma", "PostgreSQL"].map((tech) => (
              <div key={tech} className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-200">
                <span className="text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default Home;