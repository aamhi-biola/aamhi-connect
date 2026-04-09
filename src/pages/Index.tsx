{/* --- CONTINUOUS TREE BACKGROUND WRAPPER --- */}
      <div className="relative overflow-hidden">
        
        {/* The Spanning Tree Image */}
        <div 
          className="absolute inset-0 w-full h-full opacity-15 pointer-events-none filter grayscale"
          style={{ 
            backgroundImage: `url(${tallTreeImg})`, 
            backgroundSize: 'auto 100%',      /* Forces the tree to stretch from top to bottom */
            backgroundPosition: 'center bottom', /* Anchors the roots to the bottom */
            backgroundRepeat: 'no-repeat',
            zIndex: 1 
          }}
        ></div>

        {/* Content Container (Keeps text and profiles on top of the tree) */}
        <div className="relative" style={{ zIndex: 2 }}>

          {/* Training */}
          <section id="training" className="py-16 md:py-24">
            <div className="container">
              <SectionHeading title="Training" />

              <div className="max-w-4xl mx-auto text-center mb-16">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  In <a href="https://www.biola.edu/rosemead" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Rosemead School of Psychology</a>, AAMHI offers a year-long case consultation course for doctoral graduate students in advanced practicum placements aimed at strengthening multicultural competence in assessment, therapy, and consultation. The course is offered every year, with alternating focus on (1) Multicultural Orientation-Foundational and (2) Asian American Mental Health-Advanced. The clinician trainees listed below are completing/have completed a full year of case consultation.
                </p>
              </div>

              {/* Biola Counseling Center */}
              <div className="mb-16">
                <h3 className="text-xl font-serif text-center mb-4">
                  <a href="https://www.biolacounselingcenter.org/" target="_blank" rel="noopener noreferrer" className="text-primary underline decoration-2 underline-offset-4 hover:opacity-80 transition-opacity">
                    Biola Counseling Center
                  </a>
                </h3>
                
                <div className="flex flex-wrap items-center justify-center text-center mb-12 gap-3 md:gap-5 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <span>562-903-4800</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <a href="mailto:counseling.center@biola.edu" className="hover:text-primary hover:underline">counseling.center@biola.edu</a>
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
                <h3 className="text-xl font-serif text-center mb-8 text-foreground">Serving the Greater Los Angeles / Orange County Area</h3>
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

          {/* Service - Removed solid background so tree shows through */}
          <section id="service" className="py-16 md:py-24">
            <div className="container max-w-4xl">
              <SectionHeading title="Service" />
              <p className="text-center text-muted-foreground mb-8">
                AAMHI is committed to serving the Asian American community through conferences, workshops, and outreach programs that promote mental health awareness and reduce stigma. Get in touch with us if you would like to learn more!
              </p>
              
              <div className="flex flex-col items-center justify-center max-w-3xl mx-auto">
                <a href="https://ourflourishing.org/" target="_blank" rel="noopener noreferrer" className="block w-full overflow-hidden rounded-lg shadow-md hover:shadow-xl hover:opacity-95 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                  <img src={conferenceImg} alt="AAMHI Conference details at ourflourishing.org" className="w-full h-auto object-cover"/>
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

          {/* Support / Donate - Removed solid background so tree shows through */}
          <section id="support" className="py-16 md:py-24">
            <div className="container max-w-4xl">
              <SectionHeading title="Partner With Us" />
              
              <div className="bg-background/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-sm border border-border text-center">
                <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                  Despite the pervasive model minority myth, the psychological and mental health needs of Asian and Asian American communities are too often rendered invisible. AAMHI is dedicated to changing this narrative through culturally responsive care, clinical training, and targeted research. Your partnership makes this work possible.
                </p>
                
                <div className="flex justify-center mb-16">
                  <a 
                    href="https://INSERT-YOUR-DONATION-LINK-HERE.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-primary text-primary-foreground font-medium text-lg px-8 py-4 rounded-lg shadow-md hover:opacity-90 hover:-translate-y-1 transition-all duration-300"
                  >
                    Support AAMHI
                  </a>
                </div>
                
                <h4 className="font-serif text-lg text-foreground mb-10">
                  To learn more about AAMHI, please contact:
                </h4>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
                  <div className="flex flex-col items-center text-center">
                    <img src={carissaImg} alt="Dr. Carissa Dwiwardani" className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-muted mb-6 shadow-md" />
                    <p className="font-medium text-lg text-foreground mb-1">Dr. Carissa Dwiwardani</p>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Mail className="w-4 h-4 text-primary/70 flex-shrink-0" />
                      <a href="mailto:carissa.dwiwardani@biola.edu" className="hover:text-primary hover:underline text-sm transition-colors">carissa.dwiwardani@biola.edu</a>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <img src={eugeneImg} alt="Dr. Eu Gene Chin" className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-muted mb-6 shadow-md" />
                    <p className="font-medium text-lg text-foreground mb-1">Dr. Eu Gene Chin</p>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Mail className="w-4 h-4 text-primary/70 flex-shrink-0" />
                      <a href="mailto:eu.gene.chin@biola.edu" className="hover:text-primary hover:underline text-sm transition-colors">eu.gene.chin@biola.edu</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
      {/* --- END CONTINUOUS TREE BACKGROUND WRAPPER --- */}
