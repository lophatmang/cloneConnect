import classes from "./CustomShow.module.css";

import React from "react";

const Map = () => {
  return (
    <div className={classes.content_main_map}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d62704.081231636235!2d106.61906868563274!3d10.81092247089184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x31752ee78aa3083f%3A0x3e867836815261a!2zS2luZyBDZW50ZXIsIMSQxrDhu51uZyBUaMOgbmggVGjDoWksIHBoxrDhu51uZyAxNCwgUXXhuq1uIDEwLCBI4buTIENow60gTWluaA!3m2!1d10.7692388!2d106.66606259999999!4m5!1s0x317529d9a531f3db%3A0xcd8cc66596e9fe83!2zTmjDoCBow6BuZyB0aeG7h2MgY8aw4bubaSDEkOG7k25nIFhhbmgsIDEzMjAgxJAuIEzDqiDEkOG7qWMgVGjhu40sIFBoxrDhu51uZyAxMywgR8OyIFbhuqVwLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!3m2!1d10.8540151!2d106.6577619!5e0!3m2!1svi!2s!4v1732733291158!5m2!1svi!2s"
        width="800"
        height="600"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="map"
      ></iframe>
    </div>
  );
};

export default Map;
