"use client";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const HeroSide = () => {
  return (
    <>
      <Player
        // ref={this.player} // set the ref to your class instance
        autoplay={true}
        loop={true}
        controls={false}
        src="https://assets9.lottiefiles.com/packages/lf20_jtvduiqm.json"
        // src="https://assets2.lottiefiles.com/packages/lf20_yMpiqXia1k.json"
        // src="https://assets5.lottiefiles.com/packages/lf20_cy9r3cif/lottie-1.json"
        style={{ height: "700px", width: "700px" }}
      ></Player>
    </>
  );
};

export default HeroSide;
