import { FC, useState } from "react";

interface TogglerProps {
  setToggleMe: React.Dispatch<React.SetStateAction<boolean>>;
}

const Toggler: FC<TogglerProps> = ({ setToggleMe }) => {
  const [move, setMove] = useState<boolean>(false);
  return (
    <div
      onClick={() => {
        setToggleMe((prev) => !prev);
        setMove((prev) => !prev);
      }}
      className="w-full flex justify-center mt-5 mx-10"
    >
      <div
        className={`w-[80px] h-[50px] rounded-full flex items-center ${
          move ? "bg-sky-300" : "bg-gray-300"
        }`}
      >
        <div
          className={`w-[30px] h-[30px] rounded-full bg-white mx-2 ${
            move
              ? "translate-x-full duration-300"
              : "translate-x-0 duration-300"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Toggler;
