import { Gallery } from "../../App.types";
import s from "./LoadMoreBtn.module.css";

type LoadMoreBtnProps = {
  handleLoadMore: () => void;
};

const LoadMoreBtn = ({ handleLoadMore }: LoadMoreBtnProps) => {
  return (
    <div>
      <button
        className={s.btn}
        onClick={() => {
          handleLoadMore();
        }}
      >
        {" "}
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
