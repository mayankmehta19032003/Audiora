import { useCallStateHooks } from "@stream-io/video-react-sdk"

const Room = () => {
  const {useCallCustomData,useParticipantCount,useCallCreatedBy} = useCallStateHooks();

  const custom = useCallCustomData();
  // const participants = useParticipantCount();
  const createBy = useCallCreatedBy();

  return (
    <div className="room">
      <h2 className="title">{custom?.title ?? "TITLE"}</h2>
      <h3 className="description">{custom?.description ?? "DESCRIPTION"}</h3>
      {/* <p className="participant-count">{participants.length} participants</p> */}
    </div>
  )
}

export default Room
