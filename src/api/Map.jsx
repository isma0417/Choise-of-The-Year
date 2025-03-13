import React from "react";

const Map = () => {
  return (
    <div className="w-full h-[400px] mt-6 border border-gray-300 rounded-lg overflow-hidden">
      <iframe
        src="https://embed.2gis.com/iframe?zoom=19.12&lat=43.228543&lon=76.949249"
        width="100%"
        height="100%"
        style={{ border: "none" }}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Map;
