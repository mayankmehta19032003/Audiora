import { StreamVideo } from "@stream-io/video-react-sdk";
import { useUser } from "../../user-context";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
// import CryptoJS from "crypto-js";

interface NewRoom {
  name: string;
  description: string;
}

const MainPage = () => {
  const { client, user, setCall, isLoadingClient } = useUser();
  const [newRoom, setNewRoom] = useState<NewRoom>({
    name: "",
    description: "",
  });

  const navigate = useNavigate();

  const createRoom = async () => {
    const { name, description } = newRoom;
    if (!client || !user || !name || !description) return;

    const call = client.call("audio_room", name);
    await call.join({
      create: true,
      data: {
        members: [{ user_id: user.username }],
        custom: {
          title: name,
          description,
        },
      },
    });
    setCall(call);
    navigate("/room");
  };

  if (isLoadingClient) return <h1>...</h1>;

  if ((!isLoadingClient && !user) || (!isLoadingClient && !client))
    return <Navigate to="/sign-in" />;

  return (
    <StreamVideo client={client!}>
      <div className="home">
        <h1> Welcome, {user?.name}</h1>
        <div className="form">
          <h2>Create Your Own Room</h2>
          <input
            placeholder="Room Name..."
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setNewRoom((prev) => ({ ...prev, name: event.target.value }))
            }
          />
          <input
            placeholder="Room Description..."
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setNewRoom((prev) => ({
                ...prev,
                description: event.target.value,
              }))
            }
          />
          <button onClick={createRoom}>Create a Room</button>
        </div>
      </div>
    </StreamVideo>
  );
};

export default MainPage;
