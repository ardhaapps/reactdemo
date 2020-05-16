import React, { Component } from "react";

class FooterComponent extends Component {
    render() {
        return (
            <footer
                style={{
                    position: "fixed",
                    bottom: 0,
                    width: "100%",
                    height: " 60px",
                    "line-height": " 60px",
                    "background-color": "#f5f5f5",
                }}
            >
                <div className="container">
                    <span className="text-muted">
                        Cloudstar 2020 All rights reserved.
                    </span>
                </div>
            </footer>
        );
    }
}

export default FooterComponent;


// <footer style={{
//   'position': 'absolute';
//   'bottom': 0;
//   'width':' 100%';
//   'height':' 60px'; 
//   'line-height':' 60px';
//   'background-color': '#f5f5f5';
//         }}>