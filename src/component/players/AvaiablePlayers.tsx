import type { Dispatch, SetStateAction } from "react";
import type { IPlayerType } from "../../type";
import AvaiableCard from "./AvaiableCard";
interface IAvaiablePlayerPros {
  players: IPlayerType[];
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayer: IPlayerType[];
  setSelectedPlayer: Dispatch<SetStateAction<IPlayerType[]>>;
}

const AvaiablePlayers = ({
  players,
  coin,
  setCoin,
  selectedPlayer,
  setSelectedPlayer,
}: IAvaiablePlayerPros) => {
  console.log(players);
  return (
    <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5 justify-center ">
      {players.map((player) => (
        <AvaiableCard
          key={player.id}
          player={player}
          coin={coin}
          setCoin={setCoin}
          selectedPlayer={selectedPlayer}
          setSelectedPlayer={setSelectedPlayer}
        ></AvaiableCard>
      ))}
    </div>
  );
};

export default AvaiablePlayers;
