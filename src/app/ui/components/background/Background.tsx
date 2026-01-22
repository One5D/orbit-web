export default function Background({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen w-full relative bg-black">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(160, 110, 240, 0.18), transparent 70%), #000000",
        }}
      />

      {children}
    </div>
  );
}
