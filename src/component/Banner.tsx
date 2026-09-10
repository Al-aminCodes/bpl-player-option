import bannerImg from "../assets/banner-main.png";

const Banner = () => {
  return (
    <section className="container mx-auto mt-5 mb-10 overflow-hidden rounded-3xl">
      <div className="min-h-136.25 bg-linear-to-bl from-orange-950 via-neutral-900 to-slate-900 flex flex-col items-center justify-center px-4 text-center">
        {/* Banner Image */}
        <img
          src={bannerImg}
          alt="Cricket"
          className="w-52 sm:w-60 md:w-64 lg:w-72 object-contain"
        />

        {/* Content */}
        <div className="text-white">
          <h1 className="mt-6 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>

          <p className="mt-5 text-lg text-gray-300 sm:text-xl md:text-2xl">
            Beyond Boundaries Beyond Limits
          </p>

          {/* Button */}
          <button className="mt-7 rounded-2xl border-2 border-lime-400 p-2 transition hover:scale-105">
            <a
              href="#"
              className="block rounded-xl bg-lime-400 px-5 py-3 font-bold text-black hover:bg-lime-300"
            >
              Claim Free Credit
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
