import React from "react";

const services = [
  {
    title: "Accounting & Book-keeping",
    desc: "Streamline your financial operations with our comprehensive accounting solutions, including bookkeeping, financial statements, tax compliance, and financial analysis.",
    icon: "📒",
  },
  {
    title: "Financial Reporting & Analysis",
    desc: "Enhance your business growth with our finance services, including budgeting, cash flow management, financial planning, and risk management.",
    icon: "📊",
  },
  {
    title: "Internal Controls & Audit Support",
    desc: "Safeguard your business with robust internal controls, including risk assessment, control design, compliance audits, and continuous monitoring.",
    icon: "🛡️",
  },
  {
    title: "Business Registration & Setup",
    desc: "Simplify the process of starting a business with our expert assistance in company formation, legal documentation, regulatory compliance, and consultation.",
    icon: "📝",
  },
  {
    title: "Regulatory Compliance",
    desc: "Ensure your business meets all regulatory requirements with our advisory, compliance programs, audit support, and training services.",
    icon: "✅",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="w-full bg-[#183232] text-white py-16 px-4 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Services</h2>
      <p className="text-center max-w-2xl mb-8 text-gray-200">
        Numbers don&apos;t have to be boring—we make finance fun (and flawless)! From crunching the books and decoding audits to setting up your dream business and keeping you on the right side of regulations, we&apos;ve got your back. Let us handle the spreadsheets while you handle the spotlight.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {services.slice(0, 3).map((service) => (
          <div key={service.title} className="bg-[#eaf3ef] text-[#183232] rounded-lg shadow p-6 flex flex-col gap-2 border border-gray-200">
            <span className="text-3xl mb-2">{service.icon}</span>
            <h3 className="font-bold text-lg underline underline-offset-2">{service.title}</h3>
            <p className="text-sm text-gray-700">{service.desc}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mt-6">
        {services.slice(3).map((service) => (
          <div key={service.title} className="bg-[#eaf3ef] text-[#183232] rounded-lg shadow p-6 flex flex-col gap-2 border border-gray-200">
            <span className="text-3xl mb-2">{service.icon}</span>
            <h3 className="font-bold text-lg underline underline-offset-2">{service.title}</h3>
            <p className="text-sm text-gray-700">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection; 