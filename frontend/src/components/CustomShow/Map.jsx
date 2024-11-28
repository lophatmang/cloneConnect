import { useRecordContext } from "react-admin";
import classes from "./CustomShow.module.css";


const Map = () => {
  const record = useRecordContext();
  return (
    <div className={classes.content_main_map}>
      <iframe
        src={record.map_src}
        width="800"
        height="600"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        // eslint-disable-next-line react/no-unknown-property
        referrerpolicy="no-referrer-when-downgrade"
        title="map"
      ></iframe>
    </div>
  );
};

export default Map;
