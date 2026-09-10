import { Suspense, useEffect, useState } from "react";
import Navber from "./component/navbar";
import Players from "./component/players/players";
import Banner from "./component/Banner";
import Subscribe from "./component/Subscribe";
import Footer from "./component/Footer";
import About from "./component/About";

const playersFetch = async () => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data.players;
};

function App() {
  const [playerPromise] = useState(() => playersFetch());
  const [coin, setCoin] = useState<number>(() => {
    const savedCoin = localStorage.getItem("coin");

    return savedCoin ? Number(savedCoin) : 5000;
  });
  useEffect(() => {
    localStorage.setItem("coin", String(coin));
  }, [coin]);

  return (
    <>
      <Navber coin={coin}></Navber>
      <Banner />
      <section id="team">
        <Suspense fallback={<h1>Loading...</h1>}>
          <Players
            playerPromise={playerPromise}
            coin={coin}
            setCoin={setCoin}
          />
        </Suspense>
      </section>
      <About />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
