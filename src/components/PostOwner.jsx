export const PostOwner = (props) => {
  return (
    <span className="fw-semibold fs-5 text-white">
      <div>
        {props.name} {props.studentId}
      </div>
    </span>
  );
};
