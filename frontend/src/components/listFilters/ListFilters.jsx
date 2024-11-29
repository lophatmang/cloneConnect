import { DateInput, Filter } from "react-admin";
import classes from "./ListFilters.module.css";
import { useEffect, useRef } from "react";

export function PostFilter(props) {
  const refShow = useRef();

  useEffect(() => {
    document.addEventListener(
      "keydown",
      (e) => {
        if (e.key === "Escape") props.setShowModal(false);
      },
      true
    );
    document.addEventListener(
      "click",
      (e) => {
        if (refShow.current && !refShow.current.contains(e.target))
          // props.setShowModal(false);
          console.log(refShow.current);
      },
      true
    );
  }, []);

  return (
    <div className={classes.modal}>
      <div ref={refShow} className={classes.modalContent}>
        <Filter {...props}>
          <DateInput label="Từ ngày" source="dateStart" alwaysOn />
          <DateInput label="Đến ngày" source="dateEnd" alwaysOn />
        </Filter>
        <button
          onClick={() => props.setShowModal(false)}
          className={classes.close}
        >
          CLOSE
        </button>
      </div>
    </div>
  );
}
