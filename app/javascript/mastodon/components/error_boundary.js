import React from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends React.PureComponent {

  static propTypes = {
    children: PropTypes.node,
  };

  state = {
    hasError: false,
    stackTrace: undefined,
    componentStack: undefined,
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      stackTrace: error.stack,
      componentStack: info && info.componentStack,
    });
  }

  render() {
    const { hasError } = this.state;

    if (!hasError) {
      return this.props.children;
    }

    return (
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" id="hometownlogo" x="0px" y="0px" viewBox="25 40 50 20" width="100%" height="100%"><g><path d="M55.9,53.9H35.3c-0.7,0-1.3,0.6-1.3,1.3s0.6,1.3,1.3,1.3h20.6c0.7,0,1.3-0.6,1.3-1.3S56.6,53.9,55.9,53.9z"/><path d="M55.9,58.2H35.3c-0.7,0-1.3,0.6-1.3,1.3s0.6,1.3,1.3,1.3h20.6c0.7,0,1.3-0.6,1.3-1.3S56.6,58.2,55.9,58.2z"/><path d="M55.9,62.6H35.3c-0.7,0-1.3,0.6-1.3,1.3s0.6,1.3,1.3,1.3h20.6c0.7,0,1.3-0.6,1.3-1.3S56.6,62.6,55.9,62.6z"/><path d="M64.8,53.9c-0.7,0-1.3,0.6-1.3,1.3v8.8c0,0.7,0.6,1.3,1.3,1.3s1.3-0.6,1.3-1.3v-8.8C66,54.4,65.4,53.9,64.8,53.9z"/><path d="M60.4,53.9c-0.7,0-1.3,0.6-1.3,1.3v8.8c0,0.7,0.6,1.3,1.3,1.3s1.3-0.6,1.3-1.3v-8.8C61.6,54.4,61.1,53.9,60.4,53.9z"/><path d="M63.7,48.3c1.3-0.7,2-2.5,2-5.6c0-3.6-0.9-7.8-3.3-7.8s-3.3,4.2-3.3,7.8c0,3.1,0.7,4.9,2,5.6v2.4c0,0.7,0.6,1.3,1.3,1.3   s1.3-0.6,1.3-1.3V48.3z M62.4,37.8c0.4,0.8,0.8,2.5,0.8,4.9c0,2.5-0.5,3.4-0.8,3.4s-0.8-0.9-0.8-3.4C61.7,40.3,62.1,38.6,62.4,37.8   z"/><path d="M57,42.7c0-0.1-0.1-0.1-0.1-0.2l-3.2-4.1c-0.2-0.3-0.6-0.5-1-0.5h-1.6v-1.9c0-0.7-0.6-1.3-1.3-1.3s-1.3,0.6-1.3,1.3V38   h-3.9h-1.1h-5.2c-0.4,0-0.7,0.2-1,0.5l-3.2,4.1c0,0.1-0.1,0.1-0.1,0.2c0,0-0.1,0.1-0.1,0.1C34,43,34,43.2,34,43.3v7.4   c0,0.7,0.6,1.3,1.3,1.3h5.2h7.4h8c0.7,0,1.3-0.6,1.3-1.3v-7.4c0-0.2,0-0.3-0.1-0.4C57,42.8,57,42.8,57,42.7z M41.7,49.5h-5.2v-4.9   h10.2v4.9H41.7z M48.5,42.1l-1.2-1.6h4.8l1.2,1.6H48.5z M44.1,40.5l1.2,1.6h-7.5l1.2-1.6H44.1z M49.2,44.6h5.5v4.9h-5.5V44.6z"/></g></svg>
      </div>
    );
  }

}
