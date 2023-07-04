import { FC } from "react";
import Card from "../Card";
import "./scroller.css";

type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

interface SwipeUsersProps {
  users: User[];
}

const SwipeUsers: FC<SwipeUsersProps> = ({ users }) => {
  return (
    <section className="max-w-xs md:max-w-4xl flex overflow-x-scroll gap-10 mx-5 my-5 md:my-10">
      {users?.map((user) => {
        return <Card key={user.id} user={user} />;
      })}
    </section>
  );
};

export default SwipeUsers;
