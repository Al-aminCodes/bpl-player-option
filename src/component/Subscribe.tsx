import { useState } from "react";
import { Bounce, toast } from "react-toastify";

const Subscribe = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (isSubscribed) {
      toast.error("You are already subscribed!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }
    setIsSubscribed(true);
    toast.success("Your email was successfully submitted!", {
      position: "bottom-center",
      autoClose: 2000,
      theme: "light",
      transition: Bounce,
    });
  };
  return (
    <div className="relative z-10 mx-auto -mb-20 w-full max-w-6xl overflow-hidden rounded-3xl border border-gray-300">
      <div className="min-h-83.75 bg-linear-to-bl from-orange-100 via-white to-sky-100 flex items-center justify-center px-4">
        <div className="w-full max-w-2xl text-center">
          <h1 className="text-3xl font-bold text-neutral-900 md:text-4xl">
            Subscribe to our Newsletter
          </h1>

          <p className="mt-4 text-lg text-gray-600 md:text-xl">
            Get the latest updates and news right in your inbox!
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-14 w-full rounded-xl border border-gray-300 bg-white px-7 text-gray-700 outline-none placeholder:text-gray-400 focus:border-gray-500 sm:w-100"
            />

            <button
              onClick={handleSubscribe}
              // disabled={isSubscribed}
              type="button"
              className="h-14 rounded-xl bg-linear-to-r from-pink-300 to-yellow-300 px-8 font-bold text-black transition hover:scale-105"
            >
              {isSubscribed ? "Subscribed" : "Subscribe"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
