import Image from "next/image";

interface Workout {
  name: string;
  image: string;
  span: string;
}

// Real workout categories BEYOND confirmed they offer. Image paths are
// placeholders until real photography from Instagram is dropped in at
// each path below.
const workouts: Workout[] = [
  {
    name: "Lift",
    image: "/images/beyond-fitness/lift.jpg",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    name: "Ride",
    image: "/images/beyond-fitness/ride.jpg",
    span: "lg:col-span-2 lg:row-span-1",
  },
  {
    name: "Barre Pilates",
    image: "/images/beyond-fitness/baare.jpg",
    span: "lg:col-span-1 lg:row-span-1",
  },
  {
    name: "Sculpt Fusion",
    image: "/images/beyond-fitness/sculpt.jpg",
    span: "lg:col-span-1 lg:row-span-1",
  },
  {
    name: "Breathwork",
    image: "/images/beyond-fitness/breathwork.jpg",
    span: "lg:col-span-2 lg:row-span-1",
  },
  {
    name: "Bootcamp",
    image: "/images/beyond-fitness/bootcamp.jpg",
    span: "lg:col-span-1 lg:row-span-2",
  },
  {
    name: "Swimming (Adult & Kids)",
    image: "/images/beyond-fitness/swimming.jpg",
    span: "lg:col-span-1 lg:row-span-1",
  },
  {
    name: "Aqua Aerobics",
    image: "/images/beyond-fitness/aqua.jpg",
    span: "lg:col-span-2 lg:row-span-1",
  },
  {
    name: "Stretch & Mobility",
    image: "/images/beyond-fitness/stretch.jpg",
    span: "lg:col-span-1 lg:row-span-1",
  },
];

export default function Workouts() {
  return (
    <section id="workouts" className="bg-beyond-dark px-6 py-24 md:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 font-beyond-sans text-sm uppercase tracking-widest text-beyond-gold">
          Workouts
        </p>
        <h2 className="max-w-2xl font-beyond-display text-3xl text-white md:text-5xl">
          Nine Ways to Move
        </h2>
        <p className="mt-4 max-w-xl font-beyond-sans text-white/70">
          Every session is built around real coaching, not a treadmill and a
          mirror. Find the one that fits how you actually want to train.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[180px] lg:grid-cols-4">
          {workouts.map((workout) => (
            <div
              key={workout.name}
              className={`group relative min-h-[180px] overflow-hidden rounded-2xl ${workout.span}`}
            >
              <Image
                src={workout.image}
                alt={workout.name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-beyond-dark/90 via-beyond-dark/20 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <div className="flex items-end justify-between">
                  <h3 className="font-beyond-display text-xl text-white md:text-2xl">
                    {workout.name}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/30 text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 -translate-x-1"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 13L13 1M13 1H4M13 1V10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}