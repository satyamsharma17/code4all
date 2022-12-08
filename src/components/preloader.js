import React, { Component } from "react";
import * as LottiePlayer from "@lottiefiles/lottie-player";

export default class Preloader extends Component {
  render() {
    return (
      <div className="preloader" style={{ height: "100vh" }}>
        <lottie-player
          src="https://lottie.host/74cf6c66-8bc2-4bdf-baaa-14f64be296f1/p0SPMYYeGu.json"
          background="transparent"
          speed="1"
          style={{ width: "200px" }}
          loop
          autoplay
        ></lottie-player>
      </div>
    );
  }
}
