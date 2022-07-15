import React from "react";
import "./RandomizeButton.scss";

// Component imports
import { ClipLoader } from "react-spinners";

interface Props {
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
}

const RandomizeButton: React.FunctionComponent<Props> = (props) => {
  const { onClickHandler, loading } = props;

  return (
    <div>
      <button className="randomize-button" onClick={onClickHandler}>
        {loading ? <ClipLoader /> : "Randomize!"}
      </button>
    </div>
  );
};

export default RandomizeButton;
