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
    function StyleElement(mediaType, domElement) {
        _class_call_check(this, StyleElement);
        this.mediaType = mediaType;
        this.domElement = domElement;
    }
    _create_class(StyleElement, [
        {
            key: "getMediaType",
            value: function getMediaType() {
                return this.mediaType;
            }
        },
        {
            key: "getDOMElement",
            value: function getDOMElement() {
                return this.domElement;
            }
        },
        {
            key: "setMediaType",
            value: function setMediaType(mediaType) {
                this.mediaType = mediaType;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdHlsZUVsZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEhFQUQsIFNUWUxFIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0eWxlRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKG1lZGlhVHlwZSwgZG9tRWxlbWVudCkge1xuICAgIHRoaXMubWVkaWFUeXBlID0gbWVkaWFUeXBlO1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRNZWRpYVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVkaWFUeXBlO1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgc2V0TWVkaWFUeXBlKG1lZGlhVHlwZSkge1xuICAgIHRoaXMubWVkaWFUeXBlID0gbWVkaWFUeXBlO1xuICB9XG5cbiAgc2V0RE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldElubmVySFRNTCgpIHsgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MOyB9XG5cbiAgc2V0SW5uZXJIVE1MKGlubmVySFRNTCkgeyB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIVE1MOyB9XG5cbiAgc2V0Q1NTKGNzcykge1xuICAgIGNvbnN0IGlubmVySFRNTCA9IGBcbiR7Y3NzfVxuYDtcblxuICAgIHRoaXMuc2V0SW5uZXJIVE1MKGlubmVySFRNTCk7XG4gIH1cblxuICByZW1vdmUoKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmUoKTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRE9NRWxlbWVudCgpIHtcbiAgY29uc3QgaGVhZERPTUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKEhFQUQpLFxuICAgICAgICBzdHlsZURPTUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFNUWUxFKTtcblxuICBoZWFkRE9NRWxlbWVudC5hcHBlbmRDaGlsZChzdHlsZURPTUVsZW1lbnQpO1xuXG4gIGNvbnN0IGRvbUVsZW1lbnQgPSBzdHlsZURPTUVsZW1lbnQ7IC8vL1xuXG4gIHJldHVybiBkb21FbGVtZW50O1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZURPTUVsZW1lbnQiLCJTdHlsZUVsZW1lbnQiLCJtZWRpYVR5cGUiLCJkb21FbGVtZW50IiwiZ2V0TWVkaWFUeXBlIiwiZ2V0RE9NRWxlbWVudCIsInNldE1lZGlhVHlwZSIsInNldERPTUVsZW1lbnQiLCJnZXRJbm5lckhUTUwiLCJpbm5lckhUTUwiLCJzZXRJbm5lckhUTUwiLCJzZXRDU1MiLCJjc3MiLCJyZW1vdmUiLCJoZWFkRE9NRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkhFQUQiLCJzdHlsZURPTUVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiU1RZTEUiLCJhcHBlbmRDaGlsZCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQXlDZ0JBLGdCQUFnQjtlQUFoQkE7OztlQXJDS0M7Ozt5QkFGTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFYixJQUFBLEFBQU1BLDZCQUFELEFBQUw7YUFBTUEsYUFDUEMsU0FBUyxFQUFFQyxVQUFVO2dDQURkRjtRQUVqQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOztrQkFIREY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFNBQVM7WUFDdkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFVBQVU7WUFDeEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYUosU0FBUztnQkFDcEIsSUFBSSxDQUFDQSxTQUFTLEdBQUdBO1lBQ25COzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNKLFVBQVU7Z0JBQ3RCLElBQUksQ0FBQ0EsVUFBVSxHQUFHQTtZQUNwQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBa0IsT0FBTyxJQUFJLENBQUNMLFVBQVUsQ0FBQ00sU0FBUztZQUFFOzs7WUFFcERDLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhRCxTQUFTO2dCQUFJLElBQUksQ0FBQ04sVUFBVSxDQUFDTSxTQUFTLEdBQUdBO1lBQVc7OztZQUVqRUUsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLEdBQUc7Z0JBQ1IsSUFBTUgsWUFBWSxBQUFDLEtBQ2pCLE9BQUpHLEtBQUk7Z0JBR0YsSUFBSSxDQUFDRixZQUFZLENBQUNEO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFXLElBQUksQ0FBQ1YsVUFBVSxDQUFDVSxNQUFNO1lBQUk7OztXQWxDbEJaOztBQXFDZCxTQUFTRDtJQUNkLElBQU1jLGlCQUFpQkMsU0FBU0MsYUFBYSxDQUFDQyxlQUFJLEdBQzVDQyxrQkFBa0JILFNBQVNJLGFBQWEsQ0FBQ0MsZ0JBQUs7SUFFcEROLGVBQWVPLFdBQVcsQ0FBQ0g7SUFFM0IsSUFBTWYsYUFBYWUsaUJBQWlCLEdBQUc7SUFFdkMsT0FBT2Y7QUFDVCJ9