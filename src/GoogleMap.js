import React, { useEffect } from "react";

function GoogleMap() {
  // useEffect(() => {
  //   const ifameData = document.getElementById("iframeId");
  //   const lat = 12.9716;
  //   const lon = 77.5946;
  //   ifameData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`;
  // });

  const address = "Leela Palace Bangalore";

  // const iframeSrc = `https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=${address}&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`;
  const iframeSrc = `https://maps.google.com/maps?width=600&height=400&hl=en&q=${address}&t=&z=14&ie=UTF8&iwloc=B&output=embed`;

  return (
    <div
      style={{
        height: "500px",
        width: "500px",

        margin: "auto",
      }}
    >
      {/* <iframe id="iframeId" height="500px" width="100%"></iframe> */}

      <iframe
        src={iframeSrc}
        style={{ width: "100%", height: "40vh" }}
      ></iframe>
      {/* 
      <iframe src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=leela palace bangalore&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> */}
    </div>
  );
}
export default GoogleMap;
