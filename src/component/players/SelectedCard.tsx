import { type Dispatch, type SetStateAction } from "react";
import type { IPlayerType } from "../../type";

import SelectedPlayerCard from "./SelectedPlayerCard";
interface ISelectedType {
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayer: IPlayerType[];
  setSelectedPlayer: Dispatch<SetStateAction<IPlayerType[]>>;
}

const SelectedCard = ({
  coin,
  setCoin,
  selectedPlayer,
  setSelectedPlayer,
}: ISelectedType) => {
  if (selectedPlayer.length === 0) {
    return (
      <div>
        <h1 className="grid justify-center items-center text-2xl md:text-5xl text-red-300 font-semibold">
          No player are selected
        </h1>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-7 mt-6">
      {selectedPlayer.map((player: IPlayerType, index: number) => (
        <SelectedPlayerCard
          key={index}
          player={player}
          coin={coin}
          setCoin={setCoin}
          selectedPlayer={selectedPlayer}
          setSelectedPlayer={setSelectedPlayer}
        ></SelectedPlayerCard>
      ))}
    </div>
  );
};

export default SelectedCard;
