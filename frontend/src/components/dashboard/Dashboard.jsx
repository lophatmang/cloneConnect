import { Card, CardContent } from "@material-ui/core";
import "./Dashbord.css";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import "leaflet/dist/leaflet.css";
import { useGetList } from "react-admin";

const Dashboard = (props) => {
  const [position, setPosition] = useState();
  const [statistical, setStatistical] = useState();
  const { data } = useGetList("drives");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setPosition([latitude, longitude]);
      },
      (error) => {
        console.error("Error getting location", error);
      }
    );
    if (data) {
      const sumTime = data.reduce((cur, e) => cur + e.total_time, 0);
      const sumDistance = data.reduce((cur, e) => cur + e.distance, 0);
      setStatistical({
        time: Math.round(sumTime / 60),
        distance: Math.round(sumDistance / 1000),
      });
    }
  }, [data]);

  return (
    <Card style={{ backgroundColor: "initial", zIndex: "0" }}>
      <CardContent>
        <div>
          {position && (
            <MapContainer
              center={position}
              zoom={17}
              style={{
                height: "300px",
                width: "100%",
              }}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token=${
                  import.meta.env.VITE_REACT_APP_API_KEY
                }`}
                attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
              />
              <Marker position={position}>
                <Popup>Your current location</Popup>
              </Marker>
            </MapContainer>
          )}
          <div className="statistical">
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <h3>Demo 3X</h3>
              {statistical && (
                <>
                  <div style={{ textAlign: "center" }}>
                    <span>{statistical.distance}</span>
                    <span>kilometers</span>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <span>{data.length}</span>
                    <span>drives</span>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <span>{statistical.time}</span>
                    <span>hours</span>
                  </div>
                </>
              )}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <button>device offline</button>
              <button disabled>take snapshot</button>
              <button
                onClick={() => props.setShow(true)}
                style={{ padding: "5px 30px", backgroundColor: "#fff" }}
              >
                <AccessTimeIcon />
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Dashboard;
