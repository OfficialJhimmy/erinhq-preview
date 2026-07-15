export default function BookingLayout({
  left,
  right,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
}) {
  return (
    <div className="grid lg:grid-cols-[40%_60%]">
      <div className="relative order-2 lg:order-1">{left}</div>
      <div className="order-1 flex items-center px-6 py-16 md:px-16 lg:order-2 lg:py-24">
        {right}
      </div>
    </div>
  );
}