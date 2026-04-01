interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => (
  <div className="text-center mb-10">
    <h2 className="text-3xl md:text-4xl font-serif text-foreground">{title}</h2>
    {subtitle && (
      <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
    )}
    <div className="mt-4 mx-auto w-16 h-0.5 bg-primary rounded-full" />
  </div>
);

export default SectionHeading;
