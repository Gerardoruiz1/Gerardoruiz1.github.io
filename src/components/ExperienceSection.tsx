import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer, Co-Founder",
    company: "MoreTime",
    period: "January 2025 – Present",
    bullets: [
      "Improved user productivity by 200% and reduced daily social media usage by 50% (from 4 to 2 hours) by deploying a Swift-based blocker app to the App Store using Apple's ScreenTime APIs and MVVM architecture.",
      "Acquired 100+ active users by converting insights from 115+ user interviews into core product features, ensuring customer-centric development and full SDLC implementation from concept to deployment.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Dzeus.com",
    period: "February 2024 – August 2024",
    bullets: [
      "Saved 48 hours/month in manual testing time by automating functional and load testing workflows using Java Selenium, JMeter, and Docker with Selenium Grid, improving test coverage and accelerating performance.",
      "Improved sign-up conversion rate by 300% by enhancing authentication flow, improving Auth integration via GCP, and redesigning welcome page HTML/CSS to create a faster and intuitive user experience.",
      "Created UI dashboard visualizing user registrations and orders from influencer referrals by wiring data pipelines to support performance analysis and implementing referral tracking with Firestore, cookies, and local storage.",
      "Expanded the app's TAM from 3M to 25M users by scaling product access to Florida through development of cloud function infrastructure with GCP that integrated patient and pharmacy data.",
    ],
  },
  {
    role: "Software Engineer Mentee",
    company: "Itacon Mentorship Program — Coronavirus Dashboard",
    period: "April 2023 – February 2024",
    bullets: [
      "Utilized Angular to build a Dashboard web application to visualize global COVID-19 data, integrating the Coronavirus API, and implementing Firebase Auth and Firestore for secure authentication and data storage.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 flex items-center gap-4">
            
            Experience
            <span className="hidden md:block h-px bg-border flex-1 ml-4" />
          </h2>

          <div className="mt-12 space-y-10">
            {experiences.map((exp) => (
              <div key={exp.role + exp.company} className="group">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-3">
                  <h3 className="text-xl font-semibold">
                    {exp.role}{" "}
                    <span className="text-primary">@ {exp.company}</span>
                  </h3>
                  <span className="font-mono text-sm text-muted-foreground shrink-0">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-muted-foreground text-sm leading-relaxed"
                    >
                      <span className="text-primary mt-1 shrink-0">▹</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
