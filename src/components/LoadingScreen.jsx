import NProgress from "nprogress";
import { motion } from "framer-motion";
import { useEffect, useMemo } from "react";
// material
import { makeStyles, createStyles } from "@mui/styles";
import { alpha, styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Logo from "./Logo";
import React from "react";
// ----------------------------------------------------------------------

const nprogressStyle = makeStyles((theme) =>
  createStyles({
    "@global": {
      "#nprogress": {
        pointerEvents: "none",
        "& .bar": {
          top: 0,
          left: 0,
          height: 2,
          width: "100%",
          position: "fixed",
          zIndex: 1400,
          backgroundColor: "#FFF",
          boxShadow: `0 0 2px #FFF`,
        },
        "& .peg": {
          right: 0,
          opacity: 1,
          width: 100,
          height: "100%",
          display: "block",
          position: "absolute",
          transform: "rotate(3deg) translate(0px, -4px)",
          boxShadow: `0 0 10px #FFF, 0 0 5px #FFF`,
        },
      },
    },
  })
);

const RootStyle = styled("div")(({ theme }) => ({
  height: "80vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

function ProgressBar() {
  nprogressStyle();

  useMemo(() => {
    NProgress.start();
  }, []);

  useEffect(() => {
    NProgress.done();
  }, []);

  return null;
}

export default function LoadingScreen({ ...other }) {
  return (
    <RootStyle {...other}>
      <ProgressBar />

      <motion.div
        initial={{ rotateY: 0 }}
        animate={{ rotateY: 360 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeatDelay: 1,
          repeat: Infinity,
        }}
      >
        <Logo sx={{ width: 64, height: 64 }} />
      </motion.div>

      <Box
        component={motion.div}
        animate={{
          scale: [1.2, 1, 1, 1.2, 1.2],
          rotate: [270, 0, 0, 270, 270],
          opacity: [0.25, 1, 1, 1, 0.25],
          borderRadius: ["25%", "25%", "50%", "50%", "25%"],
        }}
        transition={{ ease: "linear", duration: 3.2, repeat: Infinity }}
        sx={{
          width: 100,
          height: 100,
          borderRadius: "25%",
          position: "absolute",
          border: (theme) =>
            `solid 3px ${alpha(theme.palette.primary.dark, 0.24)}`,
        }}
      />

      <Box
        component={motion.div}
        animate={{
          scale: [1, 1.2, 1.2, 1, 1],
          rotate: [0, 270, 270, 0, 0],
          opacity: [1, 0.25, 0.25, 0.25, 1],
          borderRadius: ["25%", "25%", "50%", "50%", "25%"],
        }}
        transition={{
          ease: "linear",
          duration: 3.2,
          repeat: Infinity,
        }}
        sx={{
          width: 120,
          height: 120,
          borderRadius: "25%",
          position: "absolute",
          border: (theme) =>
            `solid 8px ${alpha(theme.palette.primary.dark, 0.24)}`,
        }}
      />
    </RootStyle>
  );
}
