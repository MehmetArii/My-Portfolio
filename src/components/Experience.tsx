"use client";

import React from "react";

type ExperienceItem = {
  company: string;
  role: string;
  period: string; // "2023 — Present" gibi
  points: string[];
};

const DATA: ExperienceItem[] = [
  {
    company: "Freelance",
    role: "Frontend Developer",
    period: "2023 — Present",
    points: [
      "Next.js + TypeScript ile ölçeklenebilir arayüzler",
      "Tailwind ile tasarım sistemi ve component mimarisi",
      "Performans optimizasyonu (Lighthouse 90+)",
    ],
  },
  {
    company: "Part-time / Staj",
    role: "React Developer",
    period: "2022 — 2023",
    points: [
      "Form yönetimi ve API entegrasyonları",
      "SSR/SSG ve temel SEO uygulamaları",
      "Vercel üzerinde CI/CD dağıtımları",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 bg-gray-950 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <header className="mb-10">
          <h2 className="uppercase tracking-widest text-white text-center text-4xl font-bold mb-4">
            My Experience
          </h2>
          <p className="mt-2 text-center text-white/70">
            Gerçek projeler, ölçülebilir çıktılar.
          </p>
        </header>

        <ol className="relative border-s border-white/10">
          {DATA.map((item, i) => (
            <li key={item.company} className="ms-6 pb-10 last:pb-0">
              <span className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-orange-400 ring-4 ring-orange-400/20" />

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                  <h3 className="text-white font-semibold">
                    {item.role}{" "}
                    <span className="text-white/70">@ {item.company}</span>
                  </h3>
                  <span className="text-sm text-white/60">{item.period}</span>
                </div>

                <ul className="mt-3 list-disc space-y-1 ps-5 text-white/80">
                  {item.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
