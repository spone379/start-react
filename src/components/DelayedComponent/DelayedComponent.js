import { Component } from 'react';

// Use this HOC when need animation on Unmount (with Modal)
//
// Example: 
//     <DelayedComponent
//       delayUnmountTime={500}                   :int
//       isMount={this.state.mountSomeComponent}  :bool !
//      >
//          <SomeComponent />
//      </DelayedComponent>

class DelayedComponent extends Component {
  state = {
    shouldRender: this.props.isMount
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isMount && !this.props.isMount) {
      setTimeout(
        () => this.setState({ shouldRender: false }),
        this.props.delayUnmountTime || 500
      );
    } else if (!prevProps.isMount && this.props.isMount) {
      this.setState({ shouldRender: true });
    }
  }

  render() {
    return this.state.shouldRender
      ? this.props.children
      : null;
  }
}

export default DelayedComponent;