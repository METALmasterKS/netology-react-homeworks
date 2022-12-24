import React from "react";

function New(props) {
  return (
    <div className="wrap-item wrap-item-new">
      <span className="label">New!</span>
      {props.children}
    </div>
  )
}

function Popular(props) {
  return (
    <div className="wrap-item wrap-item-popular">
      <span className="label">Popular!</span>
      {props.children}
    </div>
  )
}

function withHighlight(Component) {
  return class extends React.Component {
    render() {
      const component = <Component {...this.props} />
      switch (true) {
        case (this.props.views >= 1000):
          return (
            <Popular>
              {component}
            </Popular>
          )
        case (this.props.views < 100):
          return (
            <New>
              {component}
            </New>
          )
        default:
          return component
      }
    }
  }
}

export default withHighlight;
