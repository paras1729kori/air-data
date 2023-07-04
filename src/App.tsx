import { useState } from "react";
import loader from "./assets/loading.gif";

import SwipeUsers from "./components/SwipeUsers/SwipeUsers";
import StackedCards from "./components/StackedCards";
import Toggler from "./components/Toggler";

type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(true);

  const getUsers = async () => {
    setLoading(true);
    const res = await fetch("https://reqres.in/api/users");
    const data = await res.json();
    setUsers(data.data);
    setLoading(false);
  };

  return (
    <div className="max-w-sm md:max-w-6xl flex flex-col justify-center items-center mx-auto">
      <nav className="w-full flex justify-between px-5 py-6 bg-gray-200 shadow-sm shadow-gray-600 rounded-b-3xl">
        <h1 className="text-3xl font-bold text-cyan-500">Air Data</h1>

        <button
          className="rounded-md bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-4 py-2"
          onClick={getUsers}
        >
          Get users
        </button>
      </nav>

      <section>
        {loading && (
          <div className="w-1/2 mt-2">
            <img src={loader} alt="loading.gif" />
          </div>
        )}
        {users.length <= 0 && (
          <div className="m-5 text-sm md:text-md font-semibold">
            <p>
              Please fetch users by clicking on the <span>Get users</span>{" "}
              button
            </p>
          </div>
        )}
      </section>

      {users.length > 0 && <Toggler setToggleMe={setToggle} />}
      {toggle ? <StackedCards users={users} /> : <SwipeUsers users={users} />}
    </div>
  );
};

export default App;
