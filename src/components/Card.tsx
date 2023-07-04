import { FC } from "react";

type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

interface CardProps {
  user: User;
}

const Card: FC<CardProps> = ({ user }) => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center rounded-lg text-center text-white bg-cyan-500 p-5 md:px-10 md:py-5">
      <img
        className="border-4 border-white rounded-full"
        src={user.avatar}
        alt={`${String(user.avatar)}.png`}
      />
      <div>
        <h1 className="text-xl font-bold">
          {user.first_name} {user.last_name}
        </h1>
        <a
          href={`mailto:${user.email}`}
          className="text-xs md:text-md hover:underline underline-offset-2"
        >
          {user.email}
        </a>
      </div>
    </div>
  );
};

export default Card;
