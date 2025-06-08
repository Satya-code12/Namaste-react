const nestedDiv = React.createElement(
  "div",
  { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello this is nested div from React!"),
    React.createElement("h1", {}, "Hello this is the sibling from React!"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello this is nested div2 from React!"),
    React.createElement("h1", {}, "Hello this is the sibling2 from React!"),
  ]),
]);

const heading = React.createElement(
  "h1", //HERE createElement creates a javaScript object
  { id: "heading-tag", abc: "headingElement" },
  "Hello World coming from React!"
);

console.log(heading); //this will return an object that also contain
// props:
// abc: "headingElement"
// children: "Hello World coming from React!"
// id: "heading-tag"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(nestedDiv); //this render function converts the above object to the h1 tag and placing that inside the DOM
