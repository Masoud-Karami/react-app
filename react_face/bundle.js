(function (React$1, ReactDOM, d3) {
  "use strict";

  React$1 =
    React$1 && React$1.hasOwnProperty("default") ? React$1["default"] : React$1;
  ReactDOM =
    ReactDOM && ReactDOM.hasOwnProperty("default")
      ? ReactDOM["default"]
      : ReactDOM;

  const BackgroundCircle = ({ radius, strokeWidth }) =>
    React.createElement("circle", {
      r: radius,
      fill: "yellow",
      stroke: "black",
      "stroke-width": strokeWidth,
    });

  const Eyes = ({ eyeOffsetX, eyeOffsetY, eyeRadius }) =>
    React.createElement(
      React.Fragment,
      null,
      React.createElement("circle", {
        cx: -eyeOffsetX,
        cy: -eyeOffsetY,
        r: eyeRadius,
      }),
      React.createElement("circle", {
        cx: eyeOffsetX,
        cy: -eyeOffsetY,
        r: eyeRadius,
      })
    );

  const Mouth = ({ mouthRadius, mouthWidth }) => {
    const mouthArc = d3
      .arc()
      .innerRadius(mouthRadius)
      .outerRadius(mouthRadius + mouthWidth)
      .startAngle(Math.PI / 2)
      .endAngle((Math.PI * 3) / 2);

    return React.createElement("path", { d: mouthArc() });
  };

  const FaceContainer = ({ children, width, height, centerX, centerY }) =>
    React.createElement(
      "svg",
      { width: width, height: height },
      React.createElement(
        "g",
        { transform: `translate(${centerX},${centerY})` },
        children
      )
    );

  const Face = ({
    width,
    height,
    centerX,
    centerY,
    strokeWidth,
    eyeOffsetX,
    eyeOffsetY,
    eyeRadius,
    mouthRadius,
    mouthWidth,
  }) =>
    React.createElement(
      FaceContainer,
      {
        width: width,
        height: height,
        centerX: centerX,
        centerY: centerY,
      },
      React.createElement(BackgroundCircle, {
        radius: centerY - strokeWidth / 2,
        strokeWidth: strokeWidth,
      }),
      React.createElement(Eyes, {
        eyeOffsetX: eyeOffsetX,
        eyeOffsetY: eyeOffsetY,
        eyeRadius: eyeRadius,
      }),
      React.createElement(Mouth, {
        mouthRadius: mouthRadius,
        mouthWidth: mouthWidth,
      })
    );

  const width = 160;
  const height = 160;

  const array = d3.range(6 * 3);

  const App = () =>
    array.map(() =>
      React$1.createElement(Face, {
        width: width,
        height: height,
        centerX: width / 2,
        centerY: height / 2,
        strokeWidth: 6 + Math.random() * 3,
        eyeOffsetX: 20 + Math.random() * 9,
        eyeOffsetY: 20 + Math.random() * 15,
        eyeRadius: 5 + Math.random() * 10,
        mouthWidth: 7 + Math.random() * 9,
        mouthRadius: 30 + Math.random() * 10,
      })
    );

  const rootElement = document.getElementById("root");
  ReactDOM.render(React$1.createElement(App, null), rootElement);
})(React, ReactDOM, d3);
