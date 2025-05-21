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
    var headDOMElement = document.querySelector(_constants.HEAD), styleDOMElement = document.createElement(_constants.STYLE);
    headDOMElement.appendChild(styleDOMElement);
    var domElement = styleDOMElement; ///
    return domElement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdHlsZUVsZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEhFQUQsIFNUWUxFIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjb25zdHJ1Y3RFbGVtZW50LCBkZXN0cm95RWxlbWVudCB9IGZyb20gXCIuL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0eWxlRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICBjb25zdHJ1Y3RFbGVtZW50KGVsZW1lbnQsIGRvbUVsZW1lbnQpO1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0SW5uZXJIVE1MKCkgeyAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUw7IH1cblxuICBzZXRJbm5lckhUTUwoaW5uZXJIVE1MKSB7IHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUwgPSBpbm5lckhUTUw7IH1cblxuICBzZXRDU1MoY3NzKSB7XG4gICAgY29uc3QgaW5uZXJIVE1MID0gYFxuJHtjc3N9XG5gO1xuXG4gICAgdGhpcy5zZXRJbm5lckhUTUwoaW5uZXJIVE1MKTtcbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlKCk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgIGRlc3Ryb3lFbGVtZW50KGVsZW1lbnQpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVET01FbGVtZW50KCkge1xuICBjb25zdCBoZWFkRE9NRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoSEVBRCksXG4gICAgICAgIHN0eWxlRE9NRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoU1RZTEUpO1xuXG4gIGhlYWRET01FbGVtZW50LmFwcGVuZENoaWxkKHN0eWxlRE9NRWxlbWVudCk7XG5cbiAgY29uc3QgZG9tRWxlbWVudCA9IHN0eWxlRE9NRWxlbWVudDsgLy8vXG5cbiAgcmV0dXJuIGRvbUVsZW1lbnQ7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlRE9NRWxlbWVudCIsIlN0eWxlRWxlbWVudCIsImRvbUVsZW1lbnQiLCJlbGVtZW50IiwiY29uc3RydWN0RWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJnZXRJbm5lckhUTUwiLCJpbm5lckhUTUwiLCJzZXRJbm5lckhUTUwiLCJzZXRDU1MiLCJjc3MiLCJyZW1vdmUiLCJkZXN0cm95IiwiZGVzdHJveUVsZW1lbnQiLCJoZWFkRE9NRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkhFQUQiLCJzdHlsZURPTUVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiU1RZTEUiLCJhcHBlbmRDaGlsZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBdUNnQkE7ZUFBQUE7OztlQWxDS0M7Ozt5QkFITzt1QkFDcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxDLElBQUEsQUFBTUEsNkJBQU47YUFBTUEsYUFDUEMsVUFBVTtnQ0FESEQ7UUFFakIsSUFBTUUsVUFBVSxJQUFJLEVBQUUsR0FBRztRQUV6QkMsSUFBQUEseUJBQWdCLEVBQUNELFNBQVNEOztrQkFKVEQ7O1lBT25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFVBQVU7WUFDeEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWtCLE9BQU8sSUFBSSxDQUFDSixVQUFVLENBQUNLLFNBQVM7WUFBRTs7O1lBRXBEQyxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYUQsU0FBUztnQkFBSSxJQUFJLENBQUNMLFVBQVUsQ0FBQ0ssU0FBUyxHQUFHQTtZQUFXOzs7WUFFakVFLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxHQUFHO2dCQUNSLElBQU1ILFlBQVksQUFBQyxLQUNqQixPQUFKRyxLQUFJO2dCQUdGLElBQUksQ0FBQ0YsWUFBWSxDQUFDRDtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNULFVBQVUsQ0FBQ1MsTUFBTTtZQUN4Qjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNVCxVQUFVLElBQUksRUFBRSxHQUFHO2dCQUV6QlUsSUFBQUEsdUJBQWMsRUFBQ1Y7WUFDakI7OztXQS9CbUJGOztBQWtDZCxTQUFTRDtJQUNkLElBQU1jLGlCQUFpQkMsU0FBU0MsYUFBYSxDQUFDQyxlQUFJLEdBQzVDQyxrQkFBa0JILFNBQVNJLGFBQWEsQ0FBQ0MsZ0JBQUs7SUFFcEROLGVBQWVPLFdBQVcsQ0FBQ0g7SUFFM0IsSUFBTWhCLGFBQWFnQixpQkFBaUIsR0FBRztJQUV2QyxPQUFPaEI7QUFDVCJ9