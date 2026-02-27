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
const _parseTree = /*#__PURE__*/ _interop_require_default(require("../../textarea/parseTree"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class CSSParseTreeTextarea extends _parseTree.default {
    parentContext() {
        const showCSSParseTreeTextarea = this.show.bind(this), hideCSSParseTreeTextarea = this.hide.bind(this), clearCSSParseTreeTextarea = this.clear.bind(this), updateCSSParseTreeTextarea = this.update.bind(this); ///
        return {
            showCSSParseTreeTextarea,
            hideCSSParseTreeTextarea,
            clearCSSParseTreeTextarea,
            updateCSSParseTreeTextarea
        };
    }
    static defaultProperties = {
        className: "css"
    };
}
const _default = (0, _easywithstyle.default)(CSSParseTreeTextarea)`

  margin-top: 1rem;
  height: 48rem;
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlL2Nzcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuLi8uLi90ZXh0YXJlYS9wYXJzZVRyZWVcIjtcblxuY2xhc3MgQ1NTUGFyc2VUcmVlVGV4dGFyZWEgZXh0ZW5kcyBQYXJzZVRyZWVUZXh0YXJlYSB7XG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2hvd0NTU1BhcnNlVHJlZVRleHRhcmVhID0gdGhpcy5zaG93LmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGhpZGVDU1NQYXJzZVRyZWVUZXh0YXJlYSA9IHRoaXMuaGlkZS5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBjbGVhckNTU1BhcnNlVHJlZVRleHRhcmVhID0gdGhpcy5jbGVhci5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICB1cGRhdGVDU1NQYXJzZVRyZWVUZXh0YXJlYSA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzaG93Q1NTUGFyc2VUcmVlVGV4dGFyZWEsXG4gICAgICBoaWRlQ1NTUGFyc2VUcmVlVGV4dGFyZWEsXG4gICAgICBjbGVhckNTU1BhcnNlVHJlZVRleHRhcmVhLFxuICAgICAgdXBkYXRlQ1NTUGFyc2VUcmVlVGV4dGFyZWFcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiY3NzXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKENTU1BhcnNlVHJlZVRleHRhcmVhKWBcblxuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBoZWlnaHQ6IDQ4cmVtO1xuICBcbmA7XG4iXSwibmFtZXMiOlsiQ1NTUGFyc2VUcmVlVGV4dGFyZWEiLCJQYXJzZVRyZWVUZXh0YXJlYSIsInBhcmVudENvbnRleHQiLCJzaG93Q1NTUGFyc2VUcmVlVGV4dGFyZWEiLCJzaG93IiwiYmluZCIsImhpZGVDU1NQYXJzZVRyZWVUZXh0YXJlYSIsImhpZGUiLCJjbGVhckNTU1BhcnNlVHJlZVRleHRhcmVhIiwiY2xlYXIiLCJ1cGRhdGVDU1NQYXJzZVRyZWVUZXh0YXJlYSIsInVwZGF0ZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEwQkE7OztlQUFBOzs7c0VBeEJzQjtrRUFFUTs7Ozs7O0FBRTlCLE1BQU1BLDZCQUE2QkMsa0JBQWlCO0lBQ2xEQyxnQkFBZ0I7UUFDZCxNQUFNQywyQkFBMkIsSUFBSSxDQUFDQyxJQUFJLENBQUNDLElBQUksQ0FBQyxJQUFJLEdBQzlDQywyQkFBMkIsSUFBSSxDQUFDQyxJQUFJLENBQUNGLElBQUksQ0FBQyxJQUFJLEdBQzlDRyw0QkFBNEIsSUFBSSxDQUFDQyxLQUFLLENBQUNKLElBQUksQ0FBQyxJQUFJLEdBQ2hESyw2QkFBNkIsSUFBSSxDQUFDQyxNQUFNLENBQUNOLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRztRQUU5RCxPQUFRO1lBQ05GO1lBQ0FHO1lBQ0FFO1lBQ0FFO1FBQ0Y7SUFDRjtJQUVBLE9BQU9FLG9CQUFvQjtRQUN6QkMsV0FBVztJQUNiLEVBQUU7QUFDSjtNQUVBLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNkLHFCQUFxQixDQUFDOzs7OztBQUsvQyxDQUFDIn0=