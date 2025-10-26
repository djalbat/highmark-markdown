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
    get default () {
        return _default;
    },
    get insertAfter () {
        return insertAfter;
    },
    get insertAfterwards () {
        return insertAfterwards;
    },
    get insertBefore () {
        return insertBefore;
    },
    get insertBeforehand () {
        return insertBeforehand;
    },
    get remove () {
        return remove;
    }
});
function remove(domElement, parentDOMElement) {
    parentDOMElement.removeChild(domElement);
}
function insertAfter(domElement, parentDOMElement, siblingDOMElement) {
    var referenceDOMElement = siblingDOMElement.nextSibling; ///
    parentDOMElement.insertBefore(domElement, referenceDOMElement);
}
function insertBefore(domElement, parentDOMElement, siblingDOMElement) {
    var referenceDOMElement = siblingDOMElement; ///
    parentDOMElement.insertBefore(domElement, referenceDOMElement);
}
function insertAfterwards(domElement, parentDOMElement) {
    var referenceDOMElement = null;
    parentDOMElement.insertBefore(domElement, referenceDOMElement);
}
function insertBeforehand(domElement, parentDOMElement) {
    var referenceDOMElement = parentDOMElement.firstChild; ///
    parentDOMElement.insertBefore(domElement, referenceDOMElement);
}
var _default = {
    remove: remove,
    insertAfter: insertAfter,
    insertBefore: insertBefore,
    insertAfterwards: insertAfterwards,
    insertBeforehand: insertBeforehand
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZG9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpIHtcbiAgcGFyZW50RE9NRWxlbWVudC5yZW1vdmVDaGlsZChkb21FbGVtZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluc2VydEFmdGVyKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KSB7XG4gIGNvbnN0IHJlZmVyZW5jZURPTUVsZW1lbnQgPSBzaWJsaW5nRE9NRWxlbWVudC5uZXh0U2libGluZzsgIC8vL1xuXG4gIHBhcmVudERPTUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIHJlZmVyZW5jZURPTUVsZW1lbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KSB7XG4gIGNvbnN0IHJlZmVyZW5jZURPTUVsZW1lbnQgPSBzaWJsaW5nRE9NRWxlbWVudDsgIC8vL1xuXG4gIHBhcmVudERPTUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIHJlZmVyZW5jZURPTUVsZW1lbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0QWZ0ZXJ3YXJkcyhkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50KSB7XG4gIGNvbnN0IHJlZmVyZW5jZURPTUVsZW1lbnQgPSBudWxsO1xuXG4gIHBhcmVudERPTUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIHJlZmVyZW5jZURPTUVsZW1lbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0QmVmb3JlaGFuZChkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50KSB7XG4gIGNvbnN0IHJlZmVyZW5jZURPTUVsZW1lbnQgPSBwYXJlbnRET01FbGVtZW50LmZpcnN0Q2hpbGQ7ICAvLy9cblxuICBwYXJlbnRET01FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCByZWZlcmVuY2VET01FbGVtZW50KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICByZW1vdmUsXG4gIGluc2VydEFmdGVyLFxuICBpbnNlcnRCZWZvcmUsXG4gIGluc2VydEFmdGVyd2FyZHMsXG4gIGluc2VydEJlZm9yZWhhbmRcbn07XG4iXSwibmFtZXMiOlsiaW5zZXJ0QWZ0ZXIiLCJpbnNlcnRBZnRlcndhcmRzIiwiaW5zZXJ0QmVmb3JlIiwiaW5zZXJ0QmVmb3JlaGFuZCIsInJlbW92ZSIsImRvbUVsZW1lbnQiLCJwYXJlbnRET01FbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJzaWJsaW5nRE9NRWxlbWVudCIsInJlZmVyZW5jZURPTUVsZW1lbnQiLCJuZXh0U2libGluZyIsImZpcnN0Q2hpbGQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQThCQTtlQUFBOztRQXhCZ0JBO2VBQUFBOztRQVlBQztlQUFBQTs7UUFOQUM7ZUFBQUE7O1FBWUFDO2VBQUFBOztRQXRCQUM7ZUFBQUE7OztBQUFULFNBQVNBLE9BQU9DLFVBQVUsRUFBRUMsZ0JBQWdCO0lBQ2pEQSxpQkFBaUJDLFdBQVcsQ0FBQ0Y7QUFDL0I7QUFFTyxTQUFTTCxZQUFZSyxVQUFVLEVBQUVDLGdCQUFnQixFQUFFRSxpQkFBaUI7SUFDekUsSUFBTUMsc0JBQXNCRCxrQkFBa0JFLFdBQVcsRUFBRyxHQUFHO0lBRS9ESixpQkFBaUJKLFlBQVksQ0FBQ0csWUFBWUk7QUFDNUM7QUFFTyxTQUFTUCxhQUFhRyxVQUFVLEVBQUVDLGdCQUFnQixFQUFFRSxpQkFBaUI7SUFDMUUsSUFBTUMsc0JBQXNCRCxtQkFBb0IsR0FBRztJQUVuREYsaUJBQWlCSixZQUFZLENBQUNHLFlBQVlJO0FBQzVDO0FBRU8sU0FBU1IsaUJBQWlCSSxVQUFVLEVBQUVDLGdCQUFnQjtJQUMzRCxJQUFNRyxzQkFBc0I7SUFFNUJILGlCQUFpQkosWUFBWSxDQUFDRyxZQUFZSTtBQUM1QztBQUVPLFNBQVNOLGlCQUFpQkUsVUFBVSxFQUFFQyxnQkFBZ0I7SUFDM0QsSUFBTUcsc0JBQXNCSCxpQkFBaUJLLFVBQVUsRUFBRyxHQUFHO0lBRTdETCxpQkFBaUJKLFlBQVksQ0FBQ0csWUFBWUk7QUFDNUM7SUFFQSxXQUFlO0lBQ2JMLFFBQUFBO0lBQ0FKLGFBQUFBO0lBQ0FFLGNBQUFBO0lBQ0FELGtCQUFBQTtJQUNBRSxrQkFBQUE7QUFDRiJ9