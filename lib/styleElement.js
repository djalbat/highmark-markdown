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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdHlsZUVsZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGVsZW1lbnRVdGlsaXRpZXMgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgeyBIRUFELCBTVFlMRSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IGNvbnN0cnVjdEVsZW1lbnQsIGRlc3Ryb3lFbGVtZW50IH0gPSBlbGVtZW50VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHlsZUVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50KSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgY29uc3RydWN0RWxlbWVudChlbGVtZW50LCBkb21FbGVtZW50KTtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIHNldERPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRJbm5lckhUTUwoKSB7ICByZXR1cm4gdGhpcy5kb21FbGVtZW50LmlubmVySFRNTDsgfVxuXG4gIHNldElubmVySFRNTChpbm5lckhUTUwpIHsgdGhpcy5kb21FbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTDsgfVxuXG4gIHNldENTUyhjc3MpIHtcbiAgICBjb25zdCBpbm5lckhUTUwgPSBgXG4ke2Nzc31cbmA7XG5cbiAgICB0aGlzLnNldElubmVySFRNTChpbm5lckhUTUwpO1xuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmUoKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgZGVzdHJveUVsZW1lbnQoZWxlbWVudCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURPTUVsZW1lbnQoKSB7XG4gIGNvbnN0IGhlYWRET01FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihIRUFEKSxcbiAgICAgICAgc3R5bGVET01FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChTVFlMRSk7XG5cbiAgaGVhZERPTUVsZW1lbnQuYXBwZW5kQ2hpbGQoc3R5bGVET01FbGVtZW50KTtcblxuICBjb25zdCBkb21FbGVtZW50ID0gc3R5bGVET01FbGVtZW50OyAvLy9cblxuICByZXR1cm4gZG9tRWxlbWVudDtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVET01FbGVtZW50IiwiU3R5bGVFbGVtZW50IiwiY29uc3RydWN0RWxlbWVudCIsImVsZW1lbnRVdGlsaXRpZXMiLCJkZXN0cm95RWxlbWVudCIsImRvbUVsZW1lbnQiLCJlbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsInNldERPTUVsZW1lbnQiLCJnZXRJbm5lckhUTUwiLCJpbm5lckhUTUwiLCJzZXRJbm5lckhUTUwiLCJzZXRDU1MiLCJjc3MiLCJyZW1vdmUiLCJkZXN0cm95IiwiaGVhZERPTUVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJIRUFEIiwic3R5bGVET01FbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsIlNUWUxFIiwiYXBwZW5kQ2hpbGQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQThDZ0JBLGdCQUFnQjtlQUFoQkE7OztlQXRDS0M7OztvQkFOWTt5QkFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUIsSUFBUUMsbUJBQXFDQyxzQkFBZ0IsQ0FBckRELGtCQUFrQkUsaUJBQW1CRCxzQkFBZ0IsQ0FBbkNDO0FBRVgsSUFBQSxBQUFNSCw2QkFBTjthQUFNQSxhQUNQSSxVQUFVO2dDQURISjtRQUVqQixJQUFNSyxVQUFVLElBQUksRUFBRSxHQUFHO1FBRXpCSixpQkFBaUJJLFNBQVNEOztrQkFKVEo7O1lBT25CTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFVBQVU7WUFDeEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0gsVUFBVTtnQkFDdEIsSUFBSSxDQUFDQSxVQUFVLEdBQUdBO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFrQixPQUFPLElBQUksQ0FBQ0osVUFBVSxDQUFDSyxTQUFTO1lBQUU7OztZQUVwREMsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFELFNBQVM7Z0JBQUksSUFBSSxDQUFDTCxVQUFVLENBQUNLLFNBQVMsR0FBR0E7WUFBVzs7O1lBRWpFRSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsR0FBRztnQkFDUixJQUFNSCxZQUFZLEFBQUMsS0FDakIsT0FBSkcsS0FBSTtnQkFHRixJQUFJLENBQUNGLFlBQVksQ0FBQ0Q7WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDVCxVQUFVLENBQUNTLE1BQU07WUFDeEI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVQsVUFBVSxJQUFJLEVBQUUsR0FBRztnQkFFekJGLGVBQWVFO1lBQ2pCOzs7V0FuQ21CTDs7QUFzQ2QsU0FBU0Q7SUFDZCxJQUFNZ0IsaUJBQWlCQyxTQUFTQyxhQUFhLENBQUNDLGVBQUksR0FDNUNDLGtCQUFrQkgsU0FBU0ksYUFBYSxDQUFDQyxnQkFBSztJQUVwRE4sZUFBZU8sV0FBVyxDQUFDSDtJQUUzQixJQUFNZixhQUFhZSxpQkFBaUIsR0FBRztJQUV2QyxPQUFPZjtBQUNUIn0=