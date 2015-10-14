import React from 'react';
import copy from 'copy-to-clipboard';

const onClick = (text, onCopy) => () => {
  copy(text);
  if (onCopy) {
    onCopy(text);
  }
};

const textOnClick = (getText, onCopy) => () => {
  const text = getText();

  onClick(text, onCopy);
};

const CopyToClipboard = React.createClass({
  propTypes: {
    text: React.PropTypes.string,
    getText: React.PropTypes.func,
    children: React.PropTypes.element.isRequired,
    onCopy: React.PropTypes.func
  },


  render() {
    let retElem;
    const {text, getText, onCopy, children, ...props} = this.props;
    const elem = React.Children.only(children);

    if (text !== null && getText !== null) {
      console.error('Either text or getText must be given, not both');
      return '';
    }
    if (text === null && getText === null) {
      console.error('Either text or getText must be given');
      return '';
    }

    if (text !== null) {
      retElem = React.cloneElement(elem, {
        ...props,
        onClick: onClick(text, onCopy)
      });
    } else {
      retElem = React.cloneElement(elem, {
        ...props,
        onClick: textOnClick(getText, onCopy)
      });
    }
    return retElem;
  }
});


export default CopyToClipboard;
