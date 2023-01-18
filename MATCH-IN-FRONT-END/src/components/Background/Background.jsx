import React from "react";

const Background = ({ image, children }) => {
    return (
        <div
            style={{
                display: "flex",
                backgroundImage: `url(${process.env.PUBLIC_URL + image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100% ",
                height: "100vh",
            }}
        >
            {children}
        </div>
    );
};

export default Background;
