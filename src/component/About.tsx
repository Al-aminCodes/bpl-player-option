const About = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-3 inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-600">
            About This Project
          </span>

          <h2 className="mb-6 text-3xl font-bold text-neutral-900 md:text-4xl">
            Build Your Dream BPL Squad
          </h2>

          <p className="mb-5 text-base leading-7 text-gray-600 md:text-lg">
            BPL Player Option is an interactive player selection platform
            inspired by the Bangladesh Premier League. Explore available
            players, check their information and price, and build your own squad
            within a virtual coin budget.
          </p>

          <p className="mb-8 text-base leading-7 text-gray-600 md:text-lg">
            This project demonstrates modern frontend development using React
            and TypeScript, with reusable components, state management,
            responsive design, toast notifications, and localStorage to preserve
            your squad and coin balance even after refreshing the page.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React",
              "TypeScript",
              "Vite",
              "Tailwind CSS",
              "DaisyUI",
              "React Toastify",
              "LocalStorage",
              "Responsive UI",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
