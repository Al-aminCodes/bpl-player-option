import {
  use,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import type { IPlayerType } from "../../type";
import AvaiablePlayers from "./AvaiablePlayers";
import SelectedCard from "./SelectedCard";

interface IplayersPros {
  playerPromise: Promise<IPlayerType[]>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const Players = ({ playerPromise, coin, setCoin }: IplayersPros) => {
  const players = use(playerPromise);
  const [bottonType, setBottonType] = useState("avaiable");
  const [selectedPlayer, setSelectedPlayer] = useState<IPlayerType[]>(() => {
    const savedPlayers = localStorage.getItem("selectedPlayers");

    return savedPlayers ? JSON.parse(savedPlayers) : [];
  });
  useEffect(() => {
    localStorage.setItem("selectedPlayers", JSON.stringify(selectedPlayer));
  }, [selectedPlayer]);

  const handleBotton = (type: string) => {
    setBottonType(type);
  };
  const handleReset = () => {
    localStorage.removeItem("coin");
    localStorage.removeItem("selectedPlayers");

    setCoin(5000);
    setSelectedPlayer([]);
  };
  const avaiablePlayre = players.length - selectedPlayer.length;
  console.log(avaiablePlayre);
  return (
    <div className="container mx-auto py20 mb-20 ">
      <div className="flex justify-between py-10">
        <h1 className="text-3xl font-bold ">
          {`${bottonType === "avaiable" ? "Avaiable Players" : "Selected Players"}`}{" "}
          <span
            className={`inline-flex min-w-10 items-center justify-center rounded-full px-3 py-1 text-2xl font-bold shadow-sm ${bottonType === "avaiable" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-500"} pl-4`}
          >{`${bottonType === "avaiable" ? avaiablePlayre : selectedPlayer.length}`}</span>
          <span>
            {" "}
            <button
              onClick={handleReset}
              className="rounded-lg bg-red-500 text-xl px-2 py-1 font-semibold text-white transition hover:bg-red-600"
            >
              Reset
            </button>
          </span>
        </h1>

        <div className="flex items-center">
          <button
            onClick={() => handleBotton("avaiable")}
            className={`btn  ${bottonType === "avaiable" ? "btn-success" : ""} rounded-r-none`}
          >
            Avaiable
          </button>
          <button
            onClick={() => handleBotton("selected")}
            className={`btn ${bottonType === "selected" ? "btn-success" : ""} rounded-l-none`}
          >
            Selected
          </button>
        </div>
      </div>
      {bottonType === "avaiable" ? (
        <AvaiablePlayers
          players={players}
          coin={coin}
          setCoin={setCoin}
          selectedPlayer={selectedPlayer}
          setSelectedPlayer={setSelectedPlayer}
        />
      ) : (
        <SelectedCard
          selectedPlayer={selectedPlayer}
          setSelectedPlayer={setSelectedPlayer}
          coin={coin}
          setCoin={setCoin}
        ></SelectedCard>
      )}
    </div>
  );
};

export default Players;
