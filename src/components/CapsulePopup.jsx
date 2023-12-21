export const CapsulePopup = ({ capsule, onClose }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80"
      onClick={onClose}
    >
      <div
        className="bg-[#181717] shadow-md rounded-lg bg-clip-border p-8 max-w-fit z-50 relative m-3"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <span
          className="absolute top-2 right-2 cursor-pointer text-gray-200 text-4xl"
          onClick={onClose}
        >
          &times;
        </span>
        <h2 className="text-white font-bold text-xl">
          {capsule.type},{" "}
          <span className="opacity-75 text-lg font-normal">
            {capsule.serial}
          </span>
        </h2>
        <ul className="text-sm opacity-75 text-white mt-3">
          <li>Reused {capsule.reuse_count} times</li>
          <li>{capsule.launches.length} launches</li>
          <li>{capsule.water_landings} water landings</li>
          <li>{capsule.land_landings} land landings</li>
          <li
            className={`capitalize ${
              capsule.status === "active" ? "text-green-500" : "text-red-500"
            }`}
          >
            Status: {capsule.status}
          </li>
        </ul>
        <p className="text-white text-sm opacity-75 mt-3">
          {capsule.last_update}
        </p>
      </div>
    </div>
  );
};
