const React = require('react'); //组件


export class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement("h1", null, "hello react ssr !");
  }

}
