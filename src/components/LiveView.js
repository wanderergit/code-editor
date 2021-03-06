import React, { Component } from 'react'
import ReactDOM from 'react-dom'

/*
  LiveView - iframe component with hot reloading
*/
export default class LiveView extends Component {
  componentDidMount() {
    this.node.addEventListener("load", this.handleLoad);
  }

  componentWillUnmout() {
    this.node.removeEventListener("load", this.handleLoad);
  }

  handleLoad = () => {
    this.iframeRoot = this.node.contentDocument.body;
    this.forceUpdate();
  };

  render() {
    const { children, code } = this.props;
    return (
      <iframe title="code" className='code' srcDoc={`<!DOCTYPE html>${code}`} ref={node => (this.node = node)}>
        {this.iframeRoot && ReactDOM.createPortal(children, this.iframeRoot)}
      </iframe>
    );
  }
}
