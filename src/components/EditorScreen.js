import React from "react";

const EditorScreen = () => {
  return (
    <div>
      <iframe
        src="http://localhost:4000?folder=/home/ak/android-hello-world"
        style={{ height: "90vh" }}
        allowFullScreen={true}
        width="100%"
        frameBorder="0"
        title="Editor"
      ></iframe>
    </div>
  );
};

export default EditorScreen;
