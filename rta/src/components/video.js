import React from "react";


const Video = () => {
    return (
        <div
        className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden"
        style="padding-top: 56.25%"
      >
        <iframe
          className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
          src="https://www.youtube.com/watch?v=T_QTBNZb76c"
          allowfullscreen=""
          data-gtm-yt-inspected-2340190_699="true"
          id="T_QTBNZb76c"
        ></iframe>
      </div>
    )
}
export default Video;