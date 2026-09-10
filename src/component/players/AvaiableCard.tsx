import type { Dispatch, SetStateAction } from "react";
import type { IPlayerType } from "../../type";
import { FaUser } from "react-icons/fa";
import { Bounce, toast } from "react-toastify";

interface IPlayerCard {
  player: IPlayerType;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayer: IPlayerType[];
  setSelectedPlayer: Dispatch<SetStateAction<IPlayerType[]>>;
}

const AvaiableCard = ({
  player,
  coin,
  setCoin,
  selectedPlayer,
  setSelectedPlayer,
}: IPlayerCard) => {
  const isSelected = selectedPlayer.some(
    (selected) => selected.id === player.id,
  );

  const handleSelectedBotton = () => {
    if (isSelected) {
      return;
    }

    const newCoin = coin - player.price;
    if (newCoin >= 0) {
      setCoin(newCoin);
      setSelectedPlayer([...selectedPlayer, player]);

      toast.success(`${player.playerName} is purchased successfully`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      toast.error("Not enough money to buy purchase a player");
    }
  };

  return (
    <div className=" overflow-hidden rounded-xl bg-white shadow-lg">
      {/* Player Image */}
      <img
        src={player.playerImage}
        alt={player.playerName}
        className="h-64 w-full object-cover"
      />

      {/* Card Content */}
      <div className="p-5">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800">
            {player.playerName}
          </h2>

          <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
            {player.playerType}
          </span>
        </div>

        <p className="mb-4 text-gray-500 flex items-center gap-1">
          {" "}
          <FaUser />
          {player.origin}
        </p>

        <div className="space-y-2 text-sm text-gray-600">
          <p>
            <span className="font-semibold">Batting:</span>{" "}
            {player.battingStyle}
          </p>

          <p>
            <span className="font-semibold">Bowling:</span>{" "}
            {player.bowlingStyle}
          </p>
        </div>

        <div className="mt-5 flex items-center justify-between border-t pt-4">
          <div>
            <p className="text-xs text-gray-500">Price</p>
            <p className="text-xl font-bold text-green-600">
              ${player.price.toLocaleString()}
            </p>
          </div>

          <button
            onClick={() => handleSelectedBotton()}
            className={`className="rounded-lg bg-green-600 px-4 py-2 font-medium text-white rounded-md
             hover:bg-green-700
             disabled:cursor-not-allowed
             disabled:bg-gray-400
             disabled:hover:bg-gray-400"
             disabled:rounded-md`}
            disabled={isSelected}
          >
            {isSelected ? "selected" : "chose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvaiableCard;
