import { DateInput, Filter } from "react-admin";
import classes from "./ListFilters.module.css";
import { useEffect, useRef } from "react";

export function PostFilter(props) {
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener(
      "keydown",
      (e) => {
        if (e.key === "Escape") props.setShow(false);
      },
      true
    );
    // document.addEventListener(
    //   "click",
    //   (e) => {
    //     if (ref.current && !ref.current.contains(e.target))
    //       props.setShow(false);
    //   },
    //   true
    // );
  }, []);

  return (
    <div id="myModal" className={classes.modal}>
      <div ref={ref} className={classes["modal-content"]}>
        <Filter {...props}>
          <DateInput label="Từ ngày" source="dateStart" alwaysOn />
          <DateInput label="Đến ngày" source="dateEnd" alwaysOn />
        </Filter>
        <button onClick={() => props.setShow(false)} className={classes.close}>
          CLOSE
        </button>
      </div>
    </div>
  );
}
