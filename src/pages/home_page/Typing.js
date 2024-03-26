import React from "react";
import Typewriter from "typewriter-effect";

function Typing() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Software Developer",
                    "Web Developer",
                    "Part time Designer",
                    "Full time Learner.",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 25,
            }}
        />
    );
}

export default Typing;
