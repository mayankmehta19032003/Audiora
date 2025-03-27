import { StreamVideo } from "@stream-io/video-react-sdk";
import { useUser } from "../../user-context";
import { Navigate } from "react-router-dom";

const MainPage = () => {
  const { client,user } = useUser();

  const createRoom = ()=>{

  };

  if (!client) return <Navigate to="/sign-in" />;
  return <StreamVideo client={client}>
    <div className="home">
      <h1> Welcome, {user?.name}</h1>
      <div className="form">
        <h2>Create Your Own Room</h2>
        <input placeholder="Room Name..."/>
        <input placeholder="Room Description..."/>
        <button onClick={createRoom}>Create a Room</button>
      </div>
    </div>
  </StreamVideo>;
};

export default MainPage;
