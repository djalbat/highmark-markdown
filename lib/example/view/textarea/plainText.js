"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
const _textarea = /*#__PURE__*/ _interop_require_default(require("../textarea"));
const _constants = require("../../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class PlainTextTextarea extends _textarea.default {
    setPlainText(plainText) {
        const value = plainText; ///
        this.setValue(value);
    }
    clear() {
        const plainText = _constants.EMPTY_STRING;
        this.setPlainText(plainText);
    }
    update(divisionHTMLNode, context) {
        const plainText = divisionHTMLNode.asPlainText(context);
        this.setPlainText(plainText);
    }
    parentContext() {
        const clearPlainTextTextarea = this.clear.bind(this), updatePlainTextTextarea = this.update.bind(this);
        return {
            clearPlainTextTextarea,
            updatePlainTextTextarea
        };
    }
    static defaultProperties = {
        readOnly: true,
        className: "plain-text"
    };
}
const _default = (0, _easywithstyle.default)(PlainTextTextarea)`

  height: 100%;
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvcGxhaW5UZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuY2xhc3MgUGxhaW5UZXh0VGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIHNldFBsYWluVGV4dChwbGFpblRleHQpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHBsYWluVGV4dDsgIC8vL1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICBjb25zdCBwbGFpblRleHQgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICB0aGlzLnNldFBsYWluVGV4dChwbGFpblRleHQpO1xuICB9XG5cbiAgdXBkYXRlKGRpdmlzaW9uSFRNTE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwbGFpblRleHQgPSBkaXZpc2lvbkhUTUxOb2RlLmFzUGxhaW5UZXh0KGNvbnRleHQpO1xuXG4gICAgdGhpcy5zZXRQbGFpblRleHQocGxhaW5UZXh0KTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgY2xlYXJQbGFpblRleHRUZXh0YXJlYSA9IHRoaXMuY2xlYXIuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgdXBkYXRlUGxhaW5UZXh0VGV4dGFyZWEgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBjbGVhclBsYWluVGV4dFRleHRhcmVhLFxuICAgICAgdXBkYXRlUGxhaW5UZXh0VGV4dGFyZWFcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICByZWFkT25seTogdHJ1ZSxcbiAgICBjbGFzc05hbWU6IFwicGxhaW4tdGV4dFwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShQbGFpblRleHRUZXh0YXJlYSlgXG5cbiAgaGVpZ2h0OiAxMDAlO1xuICBcbmA7XG4iXSwibmFtZXMiOlsiUGxhaW5UZXh0VGV4dGFyZWEiLCJUZXh0YXJlYSIsInNldFBsYWluVGV4dCIsInBsYWluVGV4dCIsInZhbHVlIiwic2V0VmFsdWUiLCJjbGVhciIsIkVNUFRZX1NUUklORyIsInVwZGF0ZSIsImRpdmlzaW9uSFRNTE5vZGUiLCJjb250ZXh0IiwiYXNQbGFpblRleHQiLCJwYXJlbnRDb250ZXh0IiwiY2xlYXJQbGFpblRleHRUZXh0YXJlYSIsImJpbmQiLCJ1cGRhdGVQbGFpblRleHRUZXh0YXJlYSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwicmVhZE9ubHkiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTJDQTs7O2VBQUE7OztzRUF6Q3NCO2lFQUVEOzJCQUVROzs7Ozs7QUFFN0IsTUFBTUEsMEJBQTBCQyxpQkFBUTtJQUN0Q0MsYUFBYUMsU0FBUyxFQUFFO1FBQ3RCLE1BQU1DLFFBQVFELFdBQVksR0FBRztRQUU3QixJQUFJLENBQUNFLFFBQVEsQ0FBQ0Q7SUFDaEI7SUFFQUUsUUFBUTtRQUNOLE1BQU1ILFlBQVlJLHVCQUFZO1FBRTlCLElBQUksQ0FBQ0wsWUFBWSxDQUFDQztJQUNwQjtJQUVBSyxPQUFPQyxnQkFBZ0IsRUFBRUMsT0FBTyxFQUFFO1FBQ2hDLE1BQU1QLFlBQVlNLGlCQUFpQkUsV0FBVyxDQUFDRDtRQUUvQyxJQUFJLENBQUNSLFlBQVksQ0FBQ0M7SUFDcEI7SUFFQVMsZ0JBQWdCO1FBQ2QsTUFBTUMseUJBQXlCLElBQUksQ0FBQ1AsS0FBSyxDQUFDUSxJQUFJLENBQUMsSUFBSSxHQUM3Q0MsMEJBQTBCLElBQUksQ0FBQ1AsTUFBTSxDQUFDTSxJQUFJLENBQUMsSUFBSTtRQUVyRCxPQUFRO1lBQ05EO1lBQ0FFO1FBQ0Y7SUFDRjtJQUVBLE9BQU9DLG9CQUFvQjtRQUN6QkMsVUFBVTtRQUNWQyxXQUFXO0lBQ2IsRUFBRTtBQUNKO01BRUEsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ25CLGtCQUFrQixDQUFDOzs7O0FBSTVDLENBQUMifQ==