import { comments } from "@/libs/comments";
import { Reply } from "./Reply";

export const Comment = ({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
}) => {
  return (
    <div>
      <img
        // รูป
        src={userImagePath}
        width="48"
        height="48"
        className="rounded-circle"
        style={{ objectFit: "cover" }}
      />
      <div
        className="rounded rounded-3 p-2"
        style={{ backgroundColor: "#3A3B3C" }}
      >
        <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
          {username}
        </span>
        <br />
        <span style={{ color: "#E4E6EB" }}>{commentText}</span>
        <div className="d-flex align-items-center gap-1">
          <span style={{ color: "#B0B3B8" }}>
            {likeNum > 0 ? (
              <img src="/like.svg" width={20}>
                {likeNum}
              </img>
            ) : (
              ""
            )}
          </span>
        </div>
      </div>

      {replies === []
        ? ""
        : comments.map((x) => (
            <Reply
              key={x.userImagePath}
              userImagePath={x.userImagePath}
              username={x.username}
              replyText={x.replyText}
              likeNum={x.likeNum}
            ></Reply>
          ))}

      {/* map-loop render Reply component here */}
    </div>
  );
};
