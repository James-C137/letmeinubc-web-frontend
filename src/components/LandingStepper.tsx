export default function LandingStepper() {
  return (
    <div className="mt-8 w-full flex flex-col md:flex-row gap-4 md:items-center">
      <div className="flex gap-3 items-center">
        <div className="w-12 h-12 rounded-3xl bg-[#002145] text-[#FFFFFF] flex justify-center items-center">
          1
        </div>
        <p className="font-semibold">Register</p>
      </div>
      <div className="border-l-2 h-[64px] md:h-0 ml-[23px] md:ml-0 md:border-t-2 border-[#002145] h-0 flex-grow" />
      <div className="flex gap-3 items-center">
        <div className="w-12 h-12 rounded-3xl bg-[#002145] text-[#FFFFFF] flex justify-center items-center">
          2
        </div>
        <p className="font-semibold">Track a course</p>
      </div>
      <div className="border-l-2 h-[64px] md:h-0 ml-[23px] md:ml-0 md:border-t-2 border-[#002145] h-0 flex-grow" />
      <div className="flex gap-3 items-center">
        <div className="w-12 h-12 rounded-3xl bg-[#002145] text-[#FFFFFF] flex justify-center items-center">
          3
        </div>
        <p className="font-semibold">Get notified</p>
      </div>
    </div>
  );
}