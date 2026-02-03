export function FeatureVideo({
  src,
  title,
  className = "",
}: Readonly<{
  src: string;
  title: string;
  className?: string;
}>) {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <video
        className="h-full w-full object-cover rounded-lg"
        src={src}
        title={title}
        autoPlay
        loop
        muted
        playsInline
        controls={false}
      />
    </div>
  );
}
