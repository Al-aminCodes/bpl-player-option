import { type Dispatch, type SetStateAction } from "react";
import type { IPlayerType } from "../../type/index";
import { TbTrash } from "react-icons/tb";

interface ISelectedPlayerCardProps {
  player: IPlayerType;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayer: IPlayerType[];
  setSelectedPlayer: Dispatch<SetStateAction<IPlayerType[]>>;
}

const SelectedPlayerCard = ({
  player,
  coin,
  setCoin,
  selectedPlayer,
  setSelectedPlayer,
}: ISelectedPlayerCardProps) => {
  const handleRemovePlayer = (player: IPlayerType) => {
    const restPlayers = selectedPlayer.filter(
      (selectedPlayer) => selectedPlayer.playerName != player.playerName,
    );
    // console.log(restPlayers, "restPlayers");

    setSelectedPlayer(restPlayers);

    const newCoinPrice = coin + player.price;
    setCoin(newCoinPrice);
  };
  return (
    <div className="flex gap-2 justify-between items-center border-2 border-gray-200 rounded-3xl py-2 px-4">
      <div className="flex gap-2">
        <img src={player.playerImage} alt="" className="h-15 w-15" />
        <div>
          <h2 className="font-bold text-2xl">{player.playerName}</h2>
          <p>{player.playerType}</p>
        </div>
      </div>
      <span
        className="text-red-500 font-bold cursor-pointer"
        onClick={() => handleRemovePlayer(player)}
      >
        <TbTrash />
      </span>
    </div>
  );
};

export default SelectedPlayerCard;
