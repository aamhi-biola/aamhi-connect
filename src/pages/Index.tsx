import Navbar from "@/components/Navbar";
import SectionHeading from "@/components/SectionHeading";
import ProfileCard from "@/components/ProfileCard";
// Import your logo from the src folder
import logoImage from "../logo.png"; 

const biolaProfiles = [
  { name: "Priscilla Kwong" },
  { name: "Justine Lo" },
  { name: "Lydia Cho" },
];

const greaterLAProfiles = [
  { name: "Christina Kim", affiliation: "Fuller Psychological & Family Services" },
  { name: "Iris Yam", affiliation: "Hoag Memorial Hospital Presbyterian" },
  { name: "Diana Nguyen", affiliation: "New Horizons Community Wellness Center" },
  { name: "Bella Cho", affiliation: "Simple Solutions Psychotherapy" },
  { name: "Erica Lee", affiliation: "University of California Los Angeles (UCLA) Semel Institute" },
];

const alumniProfiles = [
  { name: "Joo Young Ok", affiliation: "Access Institute for Psychological Services" },
  { name: "Rong Lin", affiliation: "Pacific Clinics: Asian Pacific Family Center" },
  { name: "Terence Chen", affiliation: "University of San Francisco" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

    {/* About / Description Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="container max-w-6xl">
          {/* Using gap-2 to keep them close but prevent overlapping */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 text-center md:text-left">
            
            {/* Logo Image */}
            <img 
              src={logoImage} 
              alt="AAMHI Logo" 
              className="w-28 h-28 md:w-44 md:h-44 object-contain flex-shrink-0"
            />

            {/* Title - Removed negative margin, added flex-1 to give it its own space */}
            <h1 className="text-5xl md:text-7xl font-serif text-foreground leading-[1.05] tracking-tight flex-1">
              Asian American <br />
              <span className="block">Mental Health Initiative</span>
            </h1>
          </div>

          <div className="max-w-3xl mx-auto text-center mt-12">
            <p className="text-xl text-muted-foreground leading-relaxed">
              AAMHI aims to cultivate a new generation of mental health professionals who are proficient in providing culturally responsive care, cutting-edge research, and impactful community-service.
            </p>
          </div>
        </div>
      </section>

      {/* Why AAMHI */}
      <section id="why" className="py-16 md:py-24 bg-section-alt">
        <div className="container max-w-3xl">
          <SectionHeading title="Why the Need for AAMHI" />
          <p className="text-center text-muted-foreground italic">
            Content coming soon.
          </p>
        </div>
      </section>

      {/* Training */}
      <section id="training" className="py-16 md:py-24">
        <div className="container">
          <SectionHeading title="Training" />

          {/* Biola Counseling Center */}
          <div className="mb-16">
            <h3 className="text-xl font-serif text-center mb-8 text-foreground">Biola Counseling Center</h3>
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

      {/* Gallery */}
      <section id="gallery" className="py-16 md:py-24 bg-section-alt">
        <div className="container">
          <SectionHeading title="Gallery" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground text-xs">Photo {i + 1}</span>
              </div>
            ))}
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
