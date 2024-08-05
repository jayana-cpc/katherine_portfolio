import Grid2 from "../Home/Grid";
import { useRouter } from "next/navigation";

export default function Buttons() {
  const router = useRouter();
  const toHome = () => {
    router.push("/home");
  };
  const toAbout = () => {
    router.push("/about");
  };
  const toExperience = () => {
    router.push("/gallery");
  };
  const toPublications = () => {
    router.push("/publications");
  };
  return (
    <Grid2>
      <div>
        <button
          className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 transform transition duration-300 hover:-translate-y-1 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          onClick={toHome}
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-customGray px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Home
          </span>
        </button>
      </div>
      <div>
        <button
          className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 transform transition duration-300 hover:-translate-y-1 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          onClick={toAbout}
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-customGray px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            About
          </span>
        </button>
      </div>
      <div>
        <button
          className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 transform transition duration-300 hover:-translate-y-1 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          onClick={toExperience}
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-customGray px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Gallery
          </span>
        </button>
      </div>
      <div>
        <button
          className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 transform transition duration-300 hover:-translate-y-1 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          onClick={toPublications}
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-customGray px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Publications
          </span>
        </button>
      </div>
    </Grid2>
  );
}
