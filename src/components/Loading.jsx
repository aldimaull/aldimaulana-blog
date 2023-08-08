import React from "react";
import LoadingBar from "react-top-loading-bar";

const Loading = ({ num }) => {
 const [progress, setProgress] = React.useState(0);
 return (
  <div>
   <LoadingBar
    color="#f11946"
    progress={progress}
    onLoaderFinished={() => setProgress(num)}
   />
  </div>
 );
};

export default Loading;
