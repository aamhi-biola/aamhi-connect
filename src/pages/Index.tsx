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
import dianaImg from "../pictures/diana.png";
import ericaleeImg from "../pictures/ericalee.png";
import jooyoungImg from "../pictures/jooyoung.png";
import rong2Img from "../pictures/rong2.png";
import terenceImg from "../pictures/terence.jpg";
import figuresBackground from "../pictures/oneinfive.png";
import conferenceImg from "../pictures/conference.png";

// --- DIRECTOR PICTURE IMPORTS ---
import carissaImg from "../pictures/carissa.jpg"; 
import eugeneImg from "../pictures/chin.jpg";   

const biolaProfiles = [
  { name: "Priscilla Kwong", image: pKwongImg }, 
  { name: "Justine Lo", image: justineImg },
  { name: "Lydia Cho", image: lydiaImg },
];

const greaterLAProfiles = [
  { name: "Christine Kim", affiliation: "Fuller Psychological & Family Services", image: chriskimImg },
  { name: "Iris Yam", affiliation: "Hoag Memorial Hospital Presbyterian", image: irisImg },
  { name: "Diana Nguyen", affiliation: "New Horizons Community Wellness Center", image: dianaImg },
  { name: "Bella Cho", affiliation: "Simple Solutions Psychotherapy" },
  { name: "Erica Lee", affiliation: "University of California Los Angeles (UCLA) Semel Institute", image: ericaleeImg },
];

const alumniProfiles = [
  { name: "Joo Young Ok", affiliation: "Access Institute for Psychological Services", image: jooyoungImg },
  { name: "Rong Lin", affiliation: "Pacific Clinics: Asian Pacific Family Center", image:rong2Img },
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

              {/* Title & Subtitle Wrapper - Keeps them stacked next to the logo */}
              <div className="flex flex-col items-center md:items-start">
                <h1 className="text-5xl md:text-7xl font-serif text-foreground leading-[1.05] tracking-tight text-center md:text-left">
                  Asian American <br />
                  <span className="block">Mental Health Initiative</span>
                </h1>
                
                {/* Updated Subtitle: Matches Banner Branding */}
                <p className="mt-3 text-lg md:text-xl text-black font-bold font-sans uppercase tracking-widest text-center md:text-left">
                  Rosemead School of Psychology
                </p>
              </div>

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
              In <a href="https://www.biola.edu/rosemead" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">Rosemead School of Psychology</a>, AAMHI offers a year-long case consultation course for doctoral graduate students in advanced practicum placements aimed at strengthening multicultural competence in assessment, therapy, and consultation. The course is offered every year, with alternating focus on (1) Multicultural Orientation-Foundational and (2) Asian American Mental Health-Advanced. The clinician trainees listed below are completing/have completed a full year of case consultation.
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
            <div className="flex flex-wrap items-center justify-center text-center mb-12 gap-3 md:gap-5 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>562-903-4800</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
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
            AAMHI is committed to serving the Asian American community through conferences, workshops, and outreach programs that promote mental health awareness and reduce stigma. Get in touch with us if you would like to learn more!
          </p>
          
          {/* Interactive Conference Image Link */}
          <div className="flex flex-col items-center justify-center max-w-3xl mx-auto">
            <a 
              href="https://ourflourishing.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full overflow-hidden rounded-lg shadow-md hover:shadow-xl hover:opacity-95 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              <img 
                src={conferenceImg} 
                alt="AAMHI Conference details at ourflourishing.org" 
                className="w-full h-auto object-cover"
              />
            </a>
          </div>
          
        </div>
      </section>

      {/* Research */}
      <section id="research" className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <SectionHeading title="Research" />

          <p className="text-center text-muted-foreground mb-12 leading-relaxed">
            AAMHI activities are driven by culturally responsive research, program evaluation data, and/or findings from peer-reviewed literature. Help us answer key questions for community impact. 
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-serif text-foreground mb-3">Publications & Conference Presentations</h3>
              <div className="space-y-4 text-muted-foreground text-left">
                <p className="pl-8 -indent-8">
                  Kwong, P., Dwiwardani, C., Kim, G. Y., Chin, E. G., Chang, N., & Cho, L. (2025). Mixed-Methods Needs Assessment of Mental Health Among Asian American Christians: A Pilot Study. <em className="italic">Journal of Psychology and Theology</em>, <em className="italic">53</em>(2), 157-175.
                </p>
                <p className="pl-8 -indent-8">
                  Kwong, P., Dwiwardani, C., Kim, G. Y., Chin, E., Chang, N., Cho, L., & Wong, S. (2025, August 7-9). <em className="italic">Mixed-Methods Needs Assessment of Mental Health Among Asian American Christians: A Pilot Study</em>. [Poster Presentation]. 2025 American Psychological Association Conference – Division 36 Society for the Psychology of Religion and Spirituality, Denver, CO, United States.
                </p>
                <p className="pl-8 -indent-8">
                  Kim, C. Y., Dwiwardani, C., Chin, E., Kim, C. L., Kwong, P., Cho, L., Kim, G. Y., & Wong, S. (2026, April 9-10). <em className="italic">Ministry Leader Perspectives: Mental Health Needs in Asian American Christian Community</em>. [Poster Presentation]. 2025 American Psychological Association Conference – Division 36 Society for the Psychology of Religion and Spirituality, Denver, CO, United States.
                </p>
                <p className="pl-8 -indent-8">
                  Yuen. J. M., Chin, E., Wang, D. C., McMartin, J., Nettelhorst, S. C., Reynolds Jr., D. J., Krome, K. R. (2025, August 7-9). <em className="italic">Shaping Mental Health Help-Seeking in Asian Americans: An Experimental Study on Individualism, Collectivism, and Promotion-Prevention Messaging</em>. [Poster Presentation]. 2025 American Psychological Association Conference – Division 45 Society for the Psychological Study of Culture, Ethnicity and Race, Denver, CO, United States.
                </p>
                <p className="pl-8 -indent-8">
                  Wong, S., Dwiwardani, C., & Chin, E. (2026, April 9-10). <em className="italic">Suicidality and Societal Factors among Asian Americans</em>. [Poster Presentation]. 2026 Our Flourishing, Our Faith: Navigating Rupture and Repair in Asian American Christian Communities, La Mirada, CA, United States. 
                </p>
                <p className="pl-8 -indent-8">
                  Cho, L., Dwiwardani, C., & Kim, C. L. (2026, April 9-10). <em className="italic">Parenting Styles of Millennial Second-Generation Asian American Parents: A Qualitative Exploration of Experiences and Practices</em>. [Poster Presentation]. 2026 Our Flourishing, Our Faith: Navigating Rupture and Repair in Asian American Christian Communities, La Mirada, CA, United States. 
                </p>
                <p className="pl-8 -indent-8">
                  Lo, J., Dwiwardani, C., & Kim, C. L. (2026, April 9-10). <em className="italic">Transgenerational Trauma, Gender Roles, and Mental Health Implications Among Hmong American Women </em>. [Poster Presentation]. 2026 Our Flourishing, Our Faith: Navigating Rupture and Repair in Asian American Christian Communities, La Mirada, CA, United States. 
                </p>
                <p className="pl-8 -indent-8">
                  Lee, E., Dwiwardani, C., & Abouezzeddine, T. (2026, April 9-10). <em className="italic">The Impacts of Historical Trauma on the Parent-Child Relationship of First- and Second-Generation Korean Americans</em>. [Poster Presentation]. 2026 Our Flourishing, Our Faith: Navigating Rupture and Repair in Asian American Christian Communities, La Mirada, CA, United States. 
                </p>
                </div>
            </div>

            <div>
              <h3 className="text-lg font-serif text-foreground mb-3">Papers in Preparation</h3>
              <div className="space-y-4 text-muted-foreground text-left">
                <p className="pl-8 -indent-8">
                  Yuen, J. M., Chin, E., Wang, D. C., McMartin, J., Nettelhorst, S. C., Reynolds, D. J. Jr., Krome, L. R. (2026). <em className="italic">A Quasi-Experimental Study with Asian Americans: Self-Construal and Messaging Effects on Mental Health Help-Seeking Attitudes, Intentions, and Treatment Credibility </em>. [Manuscript submitted for publication]. Rosemead School of Psychology, Biola University.
                </p>
                <p className="pl-8 -indent-8">
                  Eaton, E., Chin, E., Hall, E., & Dwiwardani, C. (2026). <em className="italic">Moral Foundations and Purity Culture Among Christian Asian American Women: The Mediating Role of Religious Fundamentalism and the Moderating Role of Colonial Mentality</em>. [Manuscript submitted for publication]. Rosemead School of Psychology, Biola University.
                </p>
                <p className="pl-8 -indent-8">
                  Chen, T., Chin, E., & Wang, D. (2026). <em className="italic">A Moderated Mediation Model of Asian Values Predicting Professional Help-Seeking: Exploring God-Centered Self-Esteem as a Protective Factor Against Stigma</em>. [Unpublished masters thesis]. Rosemead School of Psychology, Biola University.
                </p>
                <p className="pl-8 -indent-8">
                  Miri, H., Chin, E., & Kim, C. (2026). <em className="italic">Korean American Help-Seeking Behavior as Seen Through the Theory of Reasoned Action: Moderation Analyses with Bicultural Self-Efficacy</em>. [Unpublished masters thesis]. Rosemead School of Psychology, Biola University.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support / Donate */}
      <section id="support" className="py-16 md:py-24 bg-section-alt">
        <div className="container max-w-4xl">
          <SectionHeading title="Partner With Us" />
          
          <div className="bg-background rounded-2xl p-8 md:p-12 shadow-sm border border-border text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Despite the pervasive model minority myth, the wellbeing and mental health needs of Asian and Asian American communities are too often rendered invisible. AAMHI is dedicated to changing this problem through culturally responsive care, clinical training, and targeted research. Your partnership makes this work possible.
            </p>
            
            <div className="flex flex-col items-center justify-center mb-12">
              {/* External Donation Button */}
              <a 
                href="https://connect.biola.edu/donations-asian-american-mental-health--the-church-initiative" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground font-medium text-lg px-8 py-4 rounded-lg shadow-md hover:opacity-90 hover:-translate-y-1 transition-all duration-300 mb-10"
              >
                Support AAMHI
              </a>
              
              {/* New Contact Verbiage */}
              <h4 className="font-serif text-xl text-foreground">
                To learn more about AAMHI, please contact:
              </h4>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
              
              {/* Dr. Dwiwardani Contact */}
              <div className="flex flex-col items-center text-center">
                <img 
                  src={carissaImg} 
                  alt="Dr. Carissa Dwiwardani" 
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-muted mb-6 shadow-md"
                />
                
                <p className="font-medium text-lg text-foreground mb-1">Dr. Carissa Dwiwardani</p>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary/70 flex-shrink-0" />
                  <a href="mailto:carissa.dwiwardani@biola.edu" className="hover:text-primary hover:underline text-sm transition-colors">
                    carissa.dwiwardani@biola.edu
                  </a>
                </div>
              </div>
              
              {/* Dr. Chin Contact */}
              <div className="flex flex-col items-center text-center">
                <img 
                  src={eugeneImg} 
                  alt="Dr. Eu Gene Chin" 
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-muted mb-6 shadow-md"
                />
                
                <p className="font-medium text-lg text-foreground mb-1">Dr. Eu Gene Chin</p>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary/70 flex-shrink-0" />
                  <a href="mailto:eu.gene.chin@biola.edu" className="hover:text-primary hover:underline text-sm transition-colors">
                    eu.gene.chin@biola.edu
                  </a>
                </div>
              </div>
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
