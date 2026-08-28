export default function BackgroundGlow() {
  return (
    <>
      <div
        className="
          pointer-events-none
          fixed
          -top-40
          -left-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-500/15
          blur-[150px]
          -z-10
        "
      />

      <div
        className="
          pointer-events-none
          fixed
          top-1/2
          -right-40
          h-[450px]
          w-[450px]
          rounded-full
          bg-violet-500/15
          blur-[150px]
          -z-10
        "
      />
    </>
  );
}