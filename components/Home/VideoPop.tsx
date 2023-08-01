'use client'

import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import YouTube from "react-youtube";
import { AnimatePresence, motion } from "framer-motion";

interface VideoPopupProps {
  isOpen: boolean;
  videoId: string;
  
}

const VideoPopup: React.FC<VideoPopupProps> = ({
  isOpen,
  videoId,
}) => {
  const [isVideoReady, setIsVideoReady] = useState(false);

  const opts = {
    height: "700",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handlePlayerReady = () => {
    setIsVideoReady(true);
  };

  useEffect(() => {
    setIsVideoReady(true);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="w-full">
            {isVideoReady ? (
              <YouTube
                videoId={videoId}
                opts={opts}
                style={{
                  background: "black",
                }}
                onReady={handlePlayerReady}
              />
            ) : (
              <div className="items-center flex justify-center h-[80vh]">
                <CircularProgress />
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoPopup;
