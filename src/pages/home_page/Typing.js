import React from "react";
import Typewriter from "typewriter-effect";

function Typing() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Software Developer",
                    "Web Developer",
                    "Master at Frontend",
                    "Problem Solver",
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
