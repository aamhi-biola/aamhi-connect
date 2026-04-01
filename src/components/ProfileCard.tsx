interface ProfileCardProps {
  name: string;
  affiliation?: string;
  image?: string; // <--- Changed from imageUrl to image
}

const ProfileCard = ({ name, affiliation, image }: ProfileCardProps) => (
  <div className="flex flex-col items-center gap-3 text-center">
    <div className="w-32 h-32 rounded-full bg-muted overflow-hidden flex items-center justify-center">
      {image ? ( // <--- Changed from imageUrl
        <img src={image} alt={name} className="w-full h-full object-cover" /> // <--- Changed from imageUrl
      ) : (
        <span className="text-3xl font-serif text-muted-foreground">
          {name.charAt(0)}
        </span>
      )}
    </div>
    <div>
      <p className="font-semibold text-foreground">{name}</p>
      {affiliation && (
        <p className="text-sm text-muted-foreground mt-0.5">{affiliation}</p>
      )}
    </div>
  </div>
);

export default ProfileCard;
