import { FC } from "react";
import Card from "./Card";

type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

interface StackedCardsProps {
  users: User[];
}

const StackedCards: FC<StackedCardsProps> = ({ users }) => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 mx-auto px-5 my-5 md:my-10">
      {users?.map((user) => {
        return <Card key={user.id} user={user} />;
      })}
    </section>
  );
};

export default StackedCards;
