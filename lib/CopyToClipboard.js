'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _copyToClipboard = require('copy-to-clipboard');

var _copyToClipboard2 = _interopRequireDefault(_copyToClipboard);

var onClick = function onClick(text, onCopy) {
  return function () {
    (0, _copyToClipboard2['default'])(text);
    if (onCopy) {
      onCopy(text);
    }
  };
};

var textOnClick = function textOnClick(getText, onCopy) {
  return function () {
    var text = getText();

    onClick(text, onCopy);
  };
};

var CopyToClipboard = _react2['default'].createClass({
  displayName: 'CopyToClipboard',

  propTypes: {
    text: _react2['default'].PropTypes.string,
    getText: _react2['default'].PropTypes.func,
    children: _react2['default'].PropTypes.element.isRequired,
    onCopy: _react2['default'].PropTypes.func
  },

  render: function render() {
    var retElem = undefined;
    var _props = this.props;
    var text = _props.text;
    var getText = _props.getText;
    var onCopy = _props.onCopy;
    var children = _props.children;

    var props = _objectWithoutProperties(_props, ['text', 'getText', 'onCopy', 'children']);

    var elem = _react2['default'].Children.only(children);

    if (text && getText) {
      console.error('Either text or getText must be given, not both');
      return false;
    }
    if (!text && !getText) {
      console.error('Either text or getText must be given');
      return false;
    }

    if (text) {
      retElem = _react2['default'].cloneElement(elem, _extends({}, props, {
        onClick: onClick(text, onCopy)
      }));
    } else {
      retElem = _react2['default'].cloneElement(elem, _extends({}, props, {
        onClick: textOnClick(getText, onCopy)
      }));
    }
    return retElem;
  }
});

exports['default'] = CopyToClipboard;
module.exports = exports['default'];
//# sourceMappingURL=CopyToClipboard.js.map