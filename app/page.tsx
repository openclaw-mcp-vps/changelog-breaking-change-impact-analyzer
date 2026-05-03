export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] text-[#58a6ff] text-xs font-semibold tracking-widest uppercase border border-[#30363d]">
          For API Product Managers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Know Exactly Who Gets Broken<br />
          <span className="text-[#58a6ff]">Before You Ship</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Paste your changelog. Upload your API usage logs. Instantly see which customers will be impacted by every breaking change — before you hit publish.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Free Trial — $79/mo
        </a>
        <p className="mt-4 text-xs text-[#484f58]">No credit card required for 14-day trial. Cancel anytime.</p>
      </section>

      {/* Feature highlights */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid sm:grid-cols-3 gap-6 text-center">
        {[
          { icon: "📋", title: "Parse Changelogs", desc: "Detects breaking changes using vector embeddings and semantic matching." },
          { icon: "📊", title: "Analyze Usage Logs", desc: "Ingests your API logs to map real customer endpoint usage patterns." },
          { icon: "🎯", title: "Predict Impact", desc: "Cross-references both to surface exactly which customers are at risk." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] text-xs font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$79<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-sm text-[#8b949e] mb-6">Everything you need to protect your API customers</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited changelog analyses",
              "Up to 10M API log events/mo",
              "Semantic breaking-change detection",
              "Per-customer impact reports",
              "CSV & JSON export",
              "Email alerts before releases"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "What log formats are supported?",
              a: "We support standard JSON, CSV, and NDJSON API log formats from AWS API Gateway, Kong, Nginx, and most major API gateways."
            },
            {
              q: "How does the breaking change detection work?",
              a: "We use vector embeddings to semantically match endpoints and parameters mentioned in your changelog against actual usage patterns in your logs — no regex rules to maintain."
            },
            {
              q: "Can I integrate this into my CI/CD pipeline?",
              a: "Yes. We provide a REST API and a GitHub Action so you can block releases automatically when high-impact breaking changes are detected."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-white font-semibold mb-2">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#484f58]">
        © {new Date().getFullYear()} Changelog Impact Analyzer. All rights reserved.
      </footer>
    </main>
  );
}
