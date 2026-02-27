"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SelectorsListCSSNode;
    }
});
const _css = /*#__PURE__*/ _interop_require_default(require("../../node/css"));
const _css1 = require("../../utilities/css");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class SelectorsListCSSNode extends _css.default {
    getSelectorsCSSNodes() {
        const node = this, selectorsCSSNodes = (0, _css1.selectorsCSSNodesFromNode)(node);
        return selectorsCSSNodes;
    }
    asCSS(context) {
        const css = this.reduceChildNode((css, childNode)=>{
            const childNodeCSS = childNode.asCSS(context);
            css = css !== null ? `${css},
${childNodeCSS}` : childNodeCSS; ///
            return css;
        }, null);
        return css;
    }
    static fromNothing() {
        return _css.default.fromNothing(SelectorsListCSSNode);
    }
    static fromOuterNode(outerNode) {
        return _css.default.fromOuterNode(SelectorsListCSSNode, outerNode);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Nzcy9zZWxlY3RvcnNMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ1NTTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9jc3NcIjtcblxuaW1wb3J0IHsgc2VsZWN0b3JzQ1NTTm9kZXNGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdG9yc0xpc3RDU1NOb2RlIGV4dGVuZHMgQ1NTTm9kZSB7XG4gIGdldFNlbGVjdG9yc0NTU05vZGVzKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLFxuICAgICAgICAgIHNlbGVjdG9yc0NTU05vZGVzID0gc2VsZWN0b3JzQ1NTTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICAgIHJldHVybiBzZWxlY3RvcnNDU1NOb2RlcztcbiAgfVxuXG4gIGFzQ1NTKGNvbnRleHQpIHtcbiAgICBjb25zdCBjc3MgPSB0aGlzLnJlZHVjZUNoaWxkTm9kZSgoY3NzLCBjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZUNTUyA9IGNoaWxkTm9kZS5hc0NTUyhjb250ZXh0KTtcblxuICAgICAgY3NzID0gKGNzcyAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICBgJHtjc3N9LFxuJHtjaGlsZE5vZGVDU1N9YCA6XG4gICAgICAgICAgICAgICAgY2hpbGROb2RlQ1NTOyAvLy9cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9LCBudWxsKTtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDU1NOb2RlLmZyb21Ob3RoaW5nKFNlbGVjdG9yc0xpc3RDU1NOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gQ1NTTm9kZS5mcm9tT3V0ZXJOb2RlKFNlbGVjdG9yc0xpc3RDU1NOb2RlLCBvdXRlck5vZGUpOyB9XG59XG4iXSwibmFtZXMiOlsiU2VsZWN0b3JzTGlzdENTU05vZGUiLCJDU1NOb2RlIiwiZ2V0U2VsZWN0b3JzQ1NTTm9kZXMiLCJub2RlIiwic2VsZWN0b3JzQ1NTTm9kZXMiLCJzZWxlY3RvcnNDU1NOb2Rlc0Zyb21Ob2RlIiwiYXNDU1MiLCJjb250ZXh0IiwiY3NzIiwicmVkdWNlQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlQ1NTIiwiZnJvbU5vdGhpbmciLCJmcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXFCQTs7OzREQUpEO3NCQUVzQjs7Ozs7O0FBRTNCLE1BQU1BLDZCQUE2QkMsWUFBTztJQUN2REMsdUJBQXVCO1FBQ3JCLE1BQU1DLE9BQU8sSUFBSSxFQUNYQyxvQkFBb0JDLElBQUFBLCtCQUF5QixFQUFDRjtRQUVwRCxPQUFPQztJQUNUO0lBRUFFLE1BQU1DLE9BQU8sRUFBRTtRQUNiLE1BQU1DLE1BQU0sSUFBSSxDQUFDQyxlQUFlLENBQUMsQ0FBQ0QsS0FBS0U7WUFDckMsTUFBTUMsZUFBZUQsVUFBVUosS0FBSyxDQUFDQztZQUVyQ0MsTUFBTSxBQUFDQSxRQUFRLE9BQ1AsR0FBR0EsSUFBSTtBQUNyQixFQUFFRyxjQUFjLEdBQ0FBLGNBQWMsR0FBRztZQUUzQixPQUFPSDtRQUNULEdBQUc7UUFFSCxPQUFPQTtJQUNUO0lBRUEsT0FBT0ksY0FBYztRQUFFLE9BQU9YLFlBQU8sQ0FBQ1csV0FBVyxDQUFDWjtJQUF1QjtJQUV6RSxPQUFPYSxjQUFjQyxTQUFTLEVBQUU7UUFBRSxPQUFPYixZQUFPLENBQUNZLGFBQWEsQ0FBQ2Isc0JBQXNCYztJQUFZO0FBQ25HIn0=