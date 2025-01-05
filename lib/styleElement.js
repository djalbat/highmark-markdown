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
var _easy = require("easy");
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
var constructElement = _easy.elementUtilities.constructElement, destroyElement = _easy.elementUtilities.destroyElement;
var StyleElement = /*#__PURE__*/ function() {
    function StyleElement(domElement) {
        _class_call_check(this, StyleElement);
        var element = this; ///
        constructElement(element, domElement);
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
                destroyElement(element);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdHlsZUVsZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGVsZW1lbnRVdGlsaXRpZXMgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgeyBIRUFELCBTVFlMRSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IGNvbnN0cnVjdEVsZW1lbnQsIGRlc3Ryb3lFbGVtZW50IH0gPSBlbGVtZW50VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHlsZUVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50KSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgY29uc3RydWN0RWxlbWVudChlbGVtZW50LCBkb21FbGVtZW50KTtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldElubmVySFRNTCgpIHsgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MOyB9XG5cbiAgc2V0SW5uZXJIVE1MKGlubmVySFRNTCkgeyB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIVE1MOyB9XG5cbiAgc2V0Q1NTKGNzcykge1xuICAgIGNvbnN0IGlubmVySFRNTCA9IGBcbiR7Y3NzfVxuYDtcblxuICAgIHRoaXMuc2V0SW5uZXJIVE1MKGlubmVySFRNTCk7XG4gIH1cblxuICByZW1vdmUoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZSgpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICBkZXN0cm95RWxlbWVudChlbGVtZW50KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRE9NRWxlbWVudCgpIHtcbiAgY29uc3QgaGVhZERPTUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKEhFQUQpLFxuICAgICAgICBzdHlsZURPTUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFNUWUxFKTtcblxuICBoZWFkRE9NRWxlbWVudC5hcHBlbmRDaGlsZChzdHlsZURPTUVsZW1lbnQpO1xuXG4gIGNvbnN0IGRvbUVsZW1lbnQgPSBzdHlsZURPTUVsZW1lbnQ7IC8vL1xuXG4gIHJldHVybiBkb21FbGVtZW50O1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZURPTUVsZW1lbnQiLCJTdHlsZUVsZW1lbnQiLCJjb25zdHJ1Y3RFbGVtZW50IiwiZWxlbWVudFV0aWxpdGllcyIsImRlc3Ryb3lFbGVtZW50IiwiZG9tRWxlbWVudCIsImVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwiZ2V0SW5uZXJIVE1MIiwiaW5uZXJIVE1MIiwic2V0SW5uZXJIVE1MIiwic2V0Q1NTIiwiY3NzIiwicmVtb3ZlIiwiZGVzdHJveSIsImhlYWRET01FbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiSEVBRCIsInN0eWxlRE9NRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJTVFlMRSIsImFwcGVuZENoaWxkIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUEwQ2dCQSxnQkFBZ0I7ZUFBaEJBOzs7ZUFsQ0tDOzs7b0JBTlk7eUJBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVCLElBQVFDLG1CQUFxQ0Msc0JBQWdCLENBQXJERCxrQkFBa0JFLGlCQUFtQkQsc0JBQWdCLENBQW5DQztBQUVYLElBQUEsQUFBTUgsNkJBQU47YUFBTUEsYUFDUEksVUFBVTtnQ0FESEo7UUFFakIsSUFBTUssVUFBVSxJQUFJLEVBQUUsR0FBRztRQUV6QkosaUJBQWlCSSxTQUFTRDs7a0JBSlRKOztZQU9uQk0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixVQUFVO1lBQ3hCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFrQixPQUFPLElBQUksQ0FBQ0gsVUFBVSxDQUFDSSxTQUFTO1lBQUU7OztZQUVwREMsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFELFNBQVM7Z0JBQUksSUFBSSxDQUFDSixVQUFVLENBQUNJLFNBQVMsR0FBR0E7WUFBVzs7O1lBRWpFRSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsR0FBRztnQkFDUixJQUFNSCxZQUFZLEFBQUMsS0FDakIsT0FBSkcsS0FBSTtnQkFHRixJQUFJLENBQUNGLFlBQVksQ0FBQ0Q7WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDUixVQUFVLENBQUNRLE1BQU07WUFDeEI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVIsVUFBVSxJQUFJLEVBQUUsR0FBRztnQkFFekJGLGVBQWVFO1lBQ2pCOzs7V0EvQm1CTDs7QUFrQ2QsU0FBU0Q7SUFDZCxJQUFNZSxpQkFBaUJDLFNBQVNDLGFBQWEsQ0FBQ0MsZUFBSSxHQUM1Q0Msa0JBQWtCSCxTQUFTSSxhQUFhLENBQUNDLGdCQUFLO0lBRXBETixlQUFlTyxXQUFXLENBQUNIO0lBRTNCLElBQU1kLGFBQWFjLGlCQUFpQixHQUFHO0lBRXZDLE9BQU9kO0FBQ1QifQ==