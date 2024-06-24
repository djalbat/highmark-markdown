"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createDOMElement: function() {
        return createDOMElement;
    },
    default: function() {
        return StyleElement;
    }
});
var _constants = require("./constants");
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
        this.domElement = domElement;
    }
    _create_class(StyleElement, [
        {
            key: "getDOMElement",
            value: function getDOMElement() {
                return this.domElement;
            }
        },
        {
            key: "setDOMElement",
            value: function setDOMElement(domElement) {
                this.domElement = domElement;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdHlsZUVsZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEhFQUQsIFNUWUxFIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0eWxlRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgc2V0RE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldElubmVySFRNTCgpIHsgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MOyB9XG5cbiAgc2V0SW5uZXJIVE1MKGlubmVySFRNTCkgeyB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIVE1MOyB9XG5cbiAgc2V0Q1NTKGNzcykge1xuICAgIGNvbnN0IGlubmVySFRNTCA9IGBcbiR7Y3NzfVxuYDtcblxuICAgIHRoaXMuc2V0SW5uZXJIVE1MKGlubmVySFRNTCk7XG4gIH1cblxuICByZW1vdmUoKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmUoKTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRE9NRWxlbWVudCgpIHtcbiAgY29uc3QgaGVhZERPTUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKEhFQUQpLFxuICAgICAgICBzdHlsZURPTUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFNUWUxFKTtcblxuICBoZWFkRE9NRWxlbWVudC5hcHBlbmRDaGlsZChzdHlsZURPTUVsZW1lbnQpO1xuXG4gIGNvbnN0IGRvbUVsZW1lbnQgPSBzdHlsZURPTUVsZW1lbnQ7IC8vL1xuXG4gIHJldHVybiBkb21FbGVtZW50O1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZURPTUVsZW1lbnQiLCJTdHlsZUVsZW1lbnQiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsInNldERPTUVsZW1lbnQiLCJnZXRJbm5lckhUTUwiLCJpbm5lckhUTUwiLCJzZXRJbm5lckhUTUwiLCJzZXRDU1MiLCJjc3MiLCJyZW1vdmUiLCJoZWFkRE9NRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkhFQUQiLCJzdHlsZURPTUVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiU1RZTEUiLCJhcHBlbmRDaGlsZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBZ0NnQkEsZ0JBQWdCO2VBQWhCQTs7O2VBNUJLQzs7O3lCQUZPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUViLElBQUEsQUFBTUEsNkJBQUQsQUFBTDthQUFNQSxhQUNQQyxVQUFVO2dDQURIRDtRQUVqQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7O2tCQUZERDs7WUFLbkJFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsVUFBVTtZQUN4Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjRixVQUFVO2dCQUN0QixJQUFJLENBQUNBLFVBQVUsR0FBR0E7WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWtCLE9BQU8sSUFBSSxDQUFDSCxVQUFVLENBQUNJLFNBQVM7WUFBRTs7O1lBRXBEQyxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYUQsU0FBUztnQkFBSSxJQUFJLENBQUNKLFVBQVUsQ0FBQ0ksU0FBUyxHQUFHQTtZQUFXOzs7WUFFakVFLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxHQUFHO2dCQUNSLElBQU1ILFlBQVksQUFBQyxLQUNqQixPQUFKRyxLQUFJO2dCQUdGLElBQUksQ0FBQ0YsWUFBWSxDQUFDRDtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBVyxJQUFJLENBQUNSLFVBQVUsQ0FBQ1EsTUFBTTtZQUFJOzs7V0F6QmxCVDs7QUE0QmQsU0FBU0Q7SUFDZCxJQUFNVyxpQkFBaUJDLFNBQVNDLGFBQWEsQ0FBQ0MsZUFBSSxHQUM1Q0Msa0JBQWtCSCxTQUFTSSxhQUFhLENBQUNDLGdCQUFLO0lBRXBETixlQUFlTyxXQUFXLENBQUNIO0lBRTNCLElBQU1iLGFBQWFhLGlCQUFpQixHQUFHO0lBRXZDLE9BQU9iO0FBQ1QifQ==