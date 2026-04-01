import Navbar from "@/components/Navbar";
import SectionHeading from "@/components/SectionHeading";
import ProfileCard from "@/components/ProfileCard";
import { Phone, Mail } from "lucide-react"; 
import logoImage from "../logo.png"; 

// --- ADD YOUR PICTURE IMPORTS HERE ---
import pKwongImg from "../pictures/priscilla.png";
import justineImg from "../pictures/justine.jpg";
import lydiaImg from "../pictures/lydiacho.jpg";
import chriskimImg from "../pictures/chriskim.png";
import irisImg from "../pictures/iris.jpg";
import ericaleeImg from "../pictures/ericalee.png";
import terenceImg from "../pictures/terence.jpg";
import figuresBackground from "../pictures/oneinfive.png";

const biolaProfiles = [
  { name: "Priscilla Kwong", image: pKwongImg }, 
  { name: "Justine Lo", image: justineImg },// <--- Added Justine's image
  { name: "Lydia Cho", image: lydiaImg },// <--- Added Lydia's image
];

const greaterLAProfiles = [
  { name: "Christina Kim", affiliation: "Fuller Psychological & Family Services", image: chriskimImg },
  { name: "Iris Yam", affiliation: "Hoag Memorial Hospital Presbyterian", image: irisImg },
  { name: "Diana Nguyen", affiliation: "New Horizons Community Wellness Center" },
  { name: "Bella Cho", affiliation: "Simple Solutions Psychotherapy" },
  { name: "Erica Lee", affiliation: "University of California Los Angeles (UCLA) Semel Institute", image: ericaleeImg },
];

const alumniProfiles = [
  { name: "Joo Young Ok", affiliation: "Access Institute for Psychological Services" },
  { name: "Rong Lin", affiliation: "Pacific Clinics: Asian Pacific Family Center" },
  { name: "Terence Chen", affiliation: "University of San Francisco", image: terenceImg },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

    {/* About / Description Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="container">
          
          {/* This outer div ensures the whole block is centered on the page */}
          <div className="flex flex-col items-center justify-center">
            
            {/* This inner div groups the logo and text tightly together */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 max-w-fit">
              
              {/* Logo Image */}
              <img 
                src={logoImage} 
                alt="AAMHI Logo" 
                className="w-28 h-28 md:w-44 md:h-44 object-contain flex-shrink-0"
              />

              {/* Title - "text-center md:text-left" keeps it looking good on all screens */}
              <h1 className="text-5xl md:text-7xl font-serif text-foreground leading-[1.05] tracking-tight text-center md:text-left">
                Asian American <br />
                <span className="block">Mental Health Initiative</span>
              </h1>
            </div>
          </div>

          {/* Description Text Below */}
          <div className="max-w-3xl mx-auto text-center mt-12">
            <p className="text-xl text-muted-foreground leading-relaxed">
              AAMHI aims to cultivate a new generation of mental health professionals who are proficient in providing faith-integrated culturally responsive care, cutting-edge research, and impactful community-service.
            </p>
          </div>
        </div>
      </section>

{/* Why AAMHI - Integrated background image here */}
      <section id="why" className="relative py-16 md:py-24 bg-section-alt overflow-hidden">
        {/* Soft background image overlay */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-no-repeat opacity-25 filter grayscale"
          style={{ backgroundImage: `url(${figuresBackground})`, zIndex: 1 }}
        ></div>

        {/* Content wrapper with higher z-index for readability */}
        <div className="container max-w-3xl relative" style={{ zIndex: 2 }}>
          <SectionHeading title="Why the Need for AAMHI" />
          <p className="text-center text-muted-foreground">
            Compared to any other racial-ethnic groups, Asian-Americans are the least likely to access mental health care (Alegria, 2008; Derr, 2016; SAMHSA, 2019). This is true even when they endorse mental health needs, have serious psychological distress and experience a major depressive episode (Yang et al., 2020). In fact, only one out of five Asian adults with a mental illness received mental health care. Structural barriers include cost, language barriers and lack of cultural competency from providers, and cultural barriers include stigma and shame associated with seeking mental health care (APA, 2020; Eng & TenElshof, 2020). These problems point to the need for culturally specific outreach and mental health services tailored to Asian/Asian American (AAA) communities.
          </p>
        </div>
      </section>

      {/* Training */}
      <section id="training" className="py-16 md:py-24">
        <div className="container">
          <SectionHeading title="Training" />

          {/* New Training Summary */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg text-muted-foreground leading-relaxed">
              The AAMHI initiative offers a year-long case consultation course for graduate students in advanced practicum placements aimed at strengthening multicultural competence in assessment, therapy, and consultation. The course is offered every year, with alternating focus on (1) Multicultural Orientation-Foundational and (2) Asian American Mental Health-Advanced. The clinician trainees listed below are completing/have completed a full year of case consultation.
            </p>
          </div>

       {/* Biola Counseling Center */}
          <div className="mb-16">
            
            {/* Updated heading to be a highly visible, clickable link */}
            <h3 className="text-xl font-serif text-center mb-4">
              <a 
                href="https://www.biolacounselingcenter.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary underline decoration-2 underline-offset-4 hover:opacity-80 transition-opacity"
              >
                Biola Counseling Center
              </a>
            </h3>
            
            {/* Center Contact Information with icons */}
            <div className="flex flex-col items-center justify-center text-center mb-12 gap-2 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" /> {/* Phone icon */}
                <span>562-903-4800</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" /> {/* Letter icon */}
                <a href="mailto:counseling.center@biola.edu" className="hover:text-primary hover:underline">
                  counseling.center@biola.edu
                </a>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-10">
              {biolaProfiles.map((p) => (
                <ProfileCard key={p.name} {...p} />
              ))}
            </div>
          </div>

          {/* Greater LA/OC */}
          <div className="mb-16">
            <h3 className="text-xl font-serif text-center mb-8 text-foreground">
              Serving the Greater Los Angeles / Orange County Area
            </h3>
            <div className="flex flex-wrap justify-center gap-10">
              {greaterLAProfiles.map((p) => (
                <ProfileCard key={p.name} {...p} />
              ))}
            </div>
          </div>

          {/* Alumni */}
          <div>
            <h3 className="text-xl font-serif text-center mb-8 text-foreground">Alumni</h3>
            <div className="flex flex-wrap justify-center gap-10">
              {alumniProfiles.map((p) => (
                <ProfileCard key={p.name} {...p} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service */}
      <section id="service" className="py-16 md:py-24 bg-section-alt">
        <div className="container max-w-4xl">
          <SectionHeading title="Service" />
          <p className="text-center text-muted-foreground mb-8">
            AAMHI is committed to serving the Asian American community through conferences, workshops, and outreach programs that promote mental health awareness and reduce stigma.
          </p>
          <div className="bg-muted rounded-lg flex items-center justify-center h-64 md:h-80">
            <p className="text-muted-foreground text-sm italic">Conference image placeholder</p>
          </div>
        </div>
      </section>

      {/* Research */}
      <section id="research" className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <SectionHeading title="Research" />

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-serif text-foreground mb-3">Publications</h3>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>Publication entry placeholder</li>
                <li>Publication entry placeholder</li>
                <li>Publication entry placeholder</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-serif text-foreground mb-3">Conference Presentations</h3>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>Conference presentation placeholder</li>
                <li>Conference presentation placeholder</li>
                <li>Conference presentation placeholder</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-nav text-nav-foreground py-8">
        <div className="container text-center text-sm opacity-70">
          © {new Date().getFullYear()} Asian American Mental Health Initiative. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
