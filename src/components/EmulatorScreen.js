import React from "react";

const EmulatorScreen = () => {
  return (
    <div>
      <iframe
        src="http://localhost:80"
        style={{ height: "95vh" }}
        allowFullScreen={true}
        width="100%"
        frameBorder="0"
        title="Emulator"
      ></iframe>
    </div>
  );
};

export default EmulatorScreen;
