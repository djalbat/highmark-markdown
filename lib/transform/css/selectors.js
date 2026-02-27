"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SelectorsCSSTransform;
    }
});
const _css = /*#__PURE__*/ _interop_require_default(require("../../transform/css"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class SelectorsCSSTransform extends _css.default {
    appendToSelectorsListCSSNode(selectorsListCSSNode) {
        const cssNode = selectorsListCSSNode; ///
        this.appendTo(cssNode);
    }
    mergeWithSelectorsCSSNode(selectorsCSSNode) {
        let cssNode = selectorsCSSNode; ///
        cssNode = this.mergeWith(cssNode);
        selectorsCSSNode = cssNode; ///
        const selectorsCSSTransform = SelectorsCSSTransform.fromSelectorsCSSNode(selectorsCSSNode);
        return selectorsCSSTransform;
    }
    static fromSelectorsCSSNode(selectorsCSSNode) {
        const cssNode = selectorsCSSNode, selectorsCSSTransform = _css.default.fromCSSNode(SelectorsCSSTransform, cssNode);
        return selectorsCSSTransform;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vY3NzL3NlbGVjdG9ycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENTU1RyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2Nzc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdG9yc0NTU1RyYW5zZm9ybSBleHRlbmRzIENTU1RyYW5zZm9ybSB7XG4gIGFwcGVuZFRvU2VsZWN0b3JzTGlzdENTU05vZGUoc2VsZWN0b3JzTGlzdENTU05vZGUpIHtcbiAgICBjb25zdCBjc3NOb2RlID0gc2VsZWN0b3JzTGlzdENTU05vZGU7IC8vL1xuXG4gICAgdGhpcy5hcHBlbmRUbyhjc3NOb2RlKTtcbiAgfVxuXG4gIG1lcmdlV2l0aFNlbGVjdG9yc0NTU05vZGUoc2VsZWN0b3JzQ1NTTm9kZSkge1xuICAgIGxldCBjc3NOb2RlID0gc2VsZWN0b3JzQ1NTTm9kZTsgLy8vXG5cbiAgICBjc3NOb2RlID0gdGhpcy5tZXJnZVdpdGgoY3NzTm9kZSk7XG5cbiAgICBzZWxlY3RvcnNDU1NOb2RlID0gY3NzTm9kZTsgIC8vL1xuXG4gICAgY29uc3Qgc2VsZWN0b3JzQ1NTVHJhbnNmb3JtID0gU2VsZWN0b3JzQ1NTVHJhbnNmb3JtLmZyb21TZWxlY3RvcnNDU1NOb2RlKHNlbGVjdG9yc0NTU05vZGUpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9yc0NTU1RyYW5zZm9ybTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2VsZWN0b3JzQ1NTTm9kZShzZWxlY3RvcnNDU1NOb2RlKSB7XG4gICAgY29uc3QgY3NzTm9kZSA9IHNlbGVjdG9yc0NTU05vZGUsIC8vL1xuICAgICAgICAgIHNlbGVjdG9yc0NTU1RyYW5zZm9ybSA9IENTU1RyYW5zZm9ybS5mcm9tQ1NTTm9kZShTZWxlY3RvcnNDU1NUcmFuc2Zvcm0sIGNzc05vZGUpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9yc0NTU1RyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlNlbGVjdG9yc0NTU1RyYW5zZm9ybSIsIkNTU1RyYW5zZm9ybSIsImFwcGVuZFRvU2VsZWN0b3JzTGlzdENTU05vZGUiLCJzZWxlY3RvcnNMaXN0Q1NTTm9kZSIsImNzc05vZGUiLCJhcHBlbmRUbyIsIm1lcmdlV2l0aFNlbGVjdG9yc0NTU05vZGUiLCJzZWxlY3RvcnNDU1NOb2RlIiwibWVyZ2VXaXRoIiwic2VsZWN0b3JzQ1NTVHJhbnNmb3JtIiwiZnJvbVNlbGVjdG9yc0NTU05vZGUiLCJmcm9tQ1NTTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFxQkE7Ozs0REFGSTs7Ozs7O0FBRVYsTUFBTUEsOEJBQThCQyxZQUFZO0lBQzdEQyw2QkFBNkJDLG9CQUFvQixFQUFFO1FBQ2pELE1BQU1DLFVBQVVELHNCQUFzQixHQUFHO1FBRXpDLElBQUksQ0FBQ0UsUUFBUSxDQUFDRDtJQUNoQjtJQUVBRSwwQkFBMEJDLGdCQUFnQixFQUFFO1FBQzFDLElBQUlILFVBQVVHLGtCQUFrQixHQUFHO1FBRW5DSCxVQUFVLElBQUksQ0FBQ0ksU0FBUyxDQUFDSjtRQUV6QkcsbUJBQW1CSCxTQUFVLEdBQUc7UUFFaEMsTUFBTUssd0JBQXdCVCxzQkFBc0JVLG9CQUFvQixDQUFDSDtRQUV6RSxPQUFPRTtJQUNUO0lBRUEsT0FBT0MscUJBQXFCSCxnQkFBZ0IsRUFBRTtRQUM1QyxNQUFNSCxVQUFVRyxrQkFDVkUsd0JBQXdCUixZQUFZLENBQUNVLFdBQVcsQ0FBQ1gsdUJBQXVCSTtRQUU5RSxPQUFPSztJQUNUO0FBQ0YifQ==