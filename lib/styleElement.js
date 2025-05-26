"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get createDOMElement () {
        return createDOMElement;
    },
    get default () {
        return StyleElement;
    }
});
var _constants = require("./constants");
var _dom = require("./utilities/dom");
var _element = require("./utilities/element");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var StyleElement = /*#__PURE__*/ function() {
    function StyleElement(domElement) {
        _class_call_check(this, StyleElement);
        var element = this; ///
        (0, _element.constructElement)(element, domElement);
    }
    _create_class(StyleElement, [
        {
            key: "getDOMElement",
            value: function getDOMElement() {
                return this.domElement;
            }
        },
        {
            key: "getInnerHTML",
            value: function getInnerHTML() {
                return this.domElement.innerHTML;
            }
        },
        {
            key: "setInnerHTML",
            value: function setInnerHTML(innerHTML) {
                this.domElement.innerHTML = innerHTML;
            }
        },
        {
            key: "setCSS",
            value: function setCSS(css) {
                var innerHTML = "\n".concat(css, "\n");
                this.setInnerHTML(innerHTML);
            }
        },
        {
            key: "remove",
            value: function remove() {
                this.domElement.remove();
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                var element = this; ///
                (0, _element.destroyElement)(element);
            }
        }
    ]);
    return StyleElement;
}();
function createDOMElement() {
    var headDOMElement = document.querySelector(_constants.HEAD), styleDOMElement = document.createElement(_constants.STYLE), parentDOMElement = headDOMElement, domElement = styleDOMElement; ///
    (0, _dom.insertAfterwards)(domElement, parentDOMElement);
    return domElement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdHlsZUVsZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEhFQUQsIFNUWUxFIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBpbnNlcnRBZnRlcndhcmRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2RvbVwiO1xuaW1wb3J0IHsgY29uc3RydWN0RWxlbWVudCwgZGVzdHJveUVsZW1lbnQgfSBmcm9tIFwiLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHlsZUVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50KSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgY29uc3RydWN0RWxlbWVudChlbGVtZW50LCBkb21FbGVtZW50KTtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldElubmVySFRNTCgpIHsgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MOyB9XG5cbiAgc2V0SW5uZXJIVE1MKGlubmVySFRNTCkgeyB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIVE1MOyB9XG5cbiAgc2V0Q1NTKGNzcykge1xuICAgIGNvbnN0IGlubmVySFRNTCA9IGBcbiR7Y3NzfVxuYDtcblxuICAgIHRoaXMuc2V0SW5uZXJIVE1MKGlubmVySFRNTCk7XG4gIH1cblxuICByZW1vdmUoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZSgpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICBkZXN0cm95RWxlbWVudChlbGVtZW50KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRE9NRWxlbWVudCgpIHtcbiAgY29uc3QgaGVhZERPTUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKEhFQUQpLFxuICAgICAgICBzdHlsZURPTUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFNUWUxFKSxcbiAgICAgICAgcGFyZW50RE9NRWxlbWVudCA9IGhlYWRET01FbGVtZW50LCAgLy8vXG4gICAgICAgIGRvbUVsZW1lbnQgPSBzdHlsZURPTUVsZW1lbnQ7IC8vL1xuXG4gIGluc2VydEFmdGVyd2FyZHMoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCk7XG5cbiAgcmV0dXJuIGRvbUVsZW1lbnQ7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlRE9NRWxlbWVudCIsIlN0eWxlRWxlbWVudCIsImRvbUVsZW1lbnQiLCJlbGVtZW50IiwiY29uc3RydWN0RWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJnZXRJbm5lckhUTUwiLCJpbm5lckhUTUwiLCJzZXRJbm5lckhUTUwiLCJzZXRDU1MiLCJjc3MiLCJyZW1vdmUiLCJkZXN0cm95IiwiZGVzdHJveUVsZW1lbnQiLCJoZWFkRE9NRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkhFQUQiLCJzdHlsZURPTUVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiU1RZTEUiLCJwYXJlbnRET01FbGVtZW50IiwiaW5zZXJ0QWZ0ZXJ3YXJkcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBd0NnQkE7ZUFBQUE7OztlQWxDS0M7Ozt5QkFKTzttQkFDSzt1QkFDZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxDLElBQUEsQUFBTUEsNkJBQU47YUFBTUEsYUFDUEMsVUFBVTtnQ0FESEQ7UUFFakIsSUFBTUUsVUFBVSxJQUFJLEVBQUUsR0FBRztRQUV6QkMsSUFBQUEseUJBQWdCLEVBQUNELFNBQVNEOztrQkFKVEQ7O1lBT25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFVBQVU7WUFDeEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWtCLE9BQU8sSUFBSSxDQUFDSixVQUFVLENBQUNLLFNBQVM7WUFBRTs7O1lBRXBEQyxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYUQsU0FBUztnQkFBSSxJQUFJLENBQUNMLFVBQVUsQ0FBQ0ssU0FBUyxHQUFHQTtZQUFXOzs7WUFFakVFLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxHQUFHO2dCQUNSLElBQU1ILFlBQVksQUFBQyxLQUNqQixPQUFKRyxLQUFJO2dCQUdGLElBQUksQ0FBQ0YsWUFBWSxDQUFDRDtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNULFVBQVUsQ0FBQ1MsTUFBTTtZQUN4Qjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNVCxVQUFVLElBQUksRUFBRSxHQUFHO2dCQUV6QlUsSUFBQUEsdUJBQWMsRUFBQ1Y7WUFDakI7OztXQS9CbUJGOztBQWtDZCxTQUFTRDtJQUNkLElBQU1jLGlCQUFpQkMsU0FBU0MsYUFBYSxDQUFDQyxlQUFJLEdBQzVDQyxrQkFBa0JILFNBQVNJLGFBQWEsQ0FBQ0MsZ0JBQUssR0FDOUNDLG1CQUFtQlAsZ0JBQ25CWixhQUFhZ0IsaUJBQWlCLEdBQUc7SUFFdkNJLElBQUFBLHFCQUFnQixFQUFDcEIsWUFBWW1CO0lBRTdCLE9BQU9uQjtBQUNUIn0=