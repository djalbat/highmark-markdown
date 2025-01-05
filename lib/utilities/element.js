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
    constructElement: function() {
        return constructElement;
    },
    destroyElement: function() {
        return destroyElement;
    }
});
function constructElement(element, domElement) {
    element.domElement = domElement;
}
function destroyElement(element) {
    delete element.domElement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdEVsZW1lbnQoZWxlbWVudCwgZG9tRWxlbWVudCkge1xuICBlbGVtZW50LmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVzdHJveUVsZW1lbnQoZWxlbWVudCkge1xuICBkZWxldGUgZWxlbWVudC5kb21FbGVtZW50O1xufVxuIl0sIm5hbWVzIjpbImNvbnN0cnVjdEVsZW1lbnQiLCJkZXN0cm95RWxlbWVudCIsImVsZW1lbnQiLCJkb21FbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFFZ0JBLGdCQUFnQjtlQUFoQkE7O0lBSUFDLGNBQWM7ZUFBZEE7OztBQUpULFNBQVNELGlCQUFpQkUsT0FBTyxFQUFFQyxVQUFVO0lBQ2xERCxRQUFRQyxVQUFVLEdBQUdBO0FBQ3ZCO0FBRU8sU0FBU0YsZUFBZUMsT0FBTztJQUNwQyxPQUFPQSxRQUFRQyxVQUFVO0FBQzNCIn0=