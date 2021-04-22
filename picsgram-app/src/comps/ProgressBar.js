import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";

//component bar

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);
  //uing useeffect when url changes

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return <div className="progress-bar" style={{ width: progress + "%" }}></div>;
};

export default ProgressBar;
