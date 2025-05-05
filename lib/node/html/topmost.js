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
    default: function() {
        return TopmostHTMLNode;
    },
    removeContentsDirectiveHTMLNode: function() {
        return removeContentsDirectiveHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../node/html"));
var _division = /*#__PURE__*/ _interop_require_default(require("../../transform/html/division"));
var _contents = /*#__PURE__*/ _interop_require_default(require("../../transform/html/directive/contents"));
var _ruleNames = require("../../ruleNames");
var _html1 = require("../../utilities/html");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var TopmostHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(TopmostHTMLNode, HTMLNode);
    function TopmostHTMLNode() {
        _class_call_check(this, TopmostHTMLNode);
        return _call_super(this, TopmostHTMLNode, arguments);
    }
    _create_class(TopmostHTMLNode, [
        {
            key: "resolve",
            value: function resolve(context) {
                this.paginate(context);
                this.addContents(context);
            }
        },
        {
            key: "paginate",
            value: function paginate(context) {
                var divisionHTMLNodes, divisionHTMLTransforms;
                divisionHTMLNodes = this.getDivisionHTMLNodes();
                divisionHTMLTransforms = divisionHTMLTransformsFromDivisionHTMLNodes(divisionHTMLNodes);
                divisionHTMLNodes = [];
                var pageNumber;
                pageNumber = 1;
                Object.assign(context, {
                    pageNumber: pageNumber
                });
                divisionHTMLTransforms.forEach(function(divisionHTMLTransform) {
                    divisionHTMLTransform.remove();
                    divisionHTMLTransform.resolve(divisionHTMLNodes, context);
                });
                delete context.pageNumber;
                divisionHTMLTransforms = divisionHTMLTransformsFromDivisionHTMLNodes(divisionHTMLNodes);
                var topmostHTMLNode = this; ///
                divisionHTMLTransforms.forEach(function(divisionHTMLTransform) {
                    divisionHTMLTransform.appendToTopmostHTMLNode(topmostHTMLNode);
                });
            }
        },
        {
            key: "addContents",
            value: function addContents(context) {
                var node = this; ///
            }
        },
        {
            key: "adjustIndent",
            value: function adjustIndent(indent) {
                return indent;
            }
        },
        {
            key: "getRuleName",
            value: function getRuleName() {
                var ruleName = _ruleNames.HTML_RULE_NAME;
                return ruleName;
            }
        },
        {
            key: "getDivisionHTMLNodes",
            value: function getDivisionHTMLNodes() {
                var node = this, divisionHTMLNodes = (0, _html1.divisionHTMLNodesFromNode)(node);
                return divisionHTMLNodes;
            }
        },
        {
            key: "getDivisionHTMLNodeAt",
            value: function getDivisionHTMLNodeAt(index) {
                var divisionHTMLNodes = this.getDivisionHTMLNodes(), divisionHTMLNode = divisionHTMLNodes[index] || null;
                return divisionHTMLNode;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _html.default.fromNothing(TopmostHTMLNode);
            }
        }
    ]);
    return TopmostHTMLNode;
}(_html.default);
_define_property(TopmostHTMLNode, "tagName", "html");
_define_property(TopmostHTMLNode, "className", null);
function divisionHTMLTransformsFromDivisionHTMLNodes(divisionHTMLNodes) {
    var divisionHTMLTransforms = divisionHTMLNodes.map(function(divisionHTMLNode) {
        var divisionHTMLTransform = _division.default.fromDivisionHTMLNode(divisionHTMLNode);
        return divisionHTMLTransform;
    });
    return divisionHTMLTransforms;
}
function removeContentsDirectiveHTMLNode(node) {
    var contentsDirectiveHTMLTransform = null;
    var contentsDirectiveHTMLNode = (0, _html1.contentsDirectiveHTMLNodeFromNode)(node);
    if (contentsDirectiveHTMLNode !== null) {
        contentsDirectiveHTMLTransform = _contents.default.fromContentsDirectiveHTMLNode(contentsDirectiveHTMLNode);
    }
    return contentsDirectiveHTMLTransform;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvdG9wbW9zdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcbmltcG9ydCBEaXZpc2lvbkhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2RpdmlzaW9uXCI7XG5pbXBvcnQgQ29udGVudHNEaXJlY3RpdmVIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9kaXJlY3RpdmUvY29udGVudHNcIjtcblxuaW1wb3J0IHsgSFRNTF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyBkaXZpc2lvbkhUTUxOb2Rlc0Zyb21Ob2RlLCBjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2h0bWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wbW9zdEhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICByZXNvbHZlKGNvbnRleHQpIHtcbiAgICB0aGlzLnBhZ2luYXRlKGNvbnRleHQpO1xuXG4gICAgdGhpcy5hZGRDb250ZW50cyhjb250ZXh0KTtcbiAgfVxuXG4gIHBhZ2luYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgZGl2aXNpb25IVE1MTm9kZXMsXG4gICAgICAgIGRpdmlzaW9uSFRNTFRyYW5zZm9ybXM7XG5cbiAgICBkaXZpc2lvbkhUTUxOb2RlcyA9IHRoaXMuZ2V0RGl2aXNpb25IVE1MTm9kZXMoKTtcblxuICAgIGRpdmlzaW9uSFRNTFRyYW5zZm9ybXMgPSBkaXZpc2lvbkhUTUxUcmFuc2Zvcm1zRnJvbURpdmlzaW9uSFRNTE5vZGVzKGRpdmlzaW9uSFRNTE5vZGVzKTtcblxuICAgIGRpdmlzaW9uSFRNTE5vZGVzID0gW107XG5cbiAgICBsZXQgcGFnZU51bWJlcjtcblxuICAgIHBhZ2VOdW1iZXIgPSAxO1xuXG4gICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICBwYWdlTnVtYmVyXG4gICAgfSk7XG5cbiAgICBkaXZpc2lvbkhUTUxUcmFuc2Zvcm1zLmZvckVhY2goKGRpdmlzaW9uSFRNTFRyYW5zZm9ybSkgPT4ge1xuICAgICAgZGl2aXNpb25IVE1MVHJhbnNmb3JtLnJlbW92ZSgpO1xuXG4gICAgICBkaXZpc2lvbkhUTUxUcmFuc2Zvcm0ucmVzb2x2ZShkaXZpc2lvbkhUTUxOb2RlcywgY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBkZWxldGUgY29udGV4dC5wYWdlTnVtYmVyO1xuXG4gICAgZGl2aXNpb25IVE1MVHJhbnNmb3JtcyA9IGRpdmlzaW9uSFRNTFRyYW5zZm9ybXNGcm9tRGl2aXNpb25IVE1MTm9kZXMoZGl2aXNpb25IVE1MTm9kZXMpO1xuXG4gICAgY29uc3QgdG9wbW9zdEhUTUxOb2RlID0gdGhpczsgLy8vXG5cbiAgICBkaXZpc2lvbkhUTUxUcmFuc2Zvcm1zLmZvckVhY2goKGRpdmlzaW9uSFRNTFRyYW5zZm9ybSkgPT4ge1xuICAgICAgZGl2aXNpb25IVE1MVHJhbnNmb3JtLmFwcGVuZFRvVG9wbW9zdEhUTUxOb2RlKHRvcG1vc3RIVE1MTm9kZSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRDb250ZW50cyhjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXM7ICAvLy9cblxuXG4gIH1cblxuICBhZGp1c3RJbmRlbnQoaW5kZW50KSB7XG4gICAgcmV0dXJuIGluZGVudDtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gSFRNTF9SVUxFX05BTUU7XG5cbiAgICByZXR1cm4gcnVsZU5hbWU7XG4gIH1cblxuICBnZXREaXZpc2lvbkhUTUxOb2RlcygpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGRpdmlzaW9uSFRNTE5vZGVzID0gZGl2aXNpb25IVE1MTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICAgIHJldHVybiBkaXZpc2lvbkhUTUxOb2RlcztcbiAgfVxuXG4gIGdldERpdmlzaW9uSFRNTE5vZGVBdChpbmRleCkge1xuICAgIGNvbnN0IGRpdmlzaW9uSFRNTE5vZGVzID0gdGhpcy5nZXREaXZpc2lvbkhUTUxOb2RlcygpLFxuICAgICAgICAgIGRpdmlzaW9uSFRNTE5vZGUgPSBkaXZpc2lvbkhUTUxOb2Rlc1tpbmRleF0gfHwgbnVsbDtcblxuICAgIHJldHVybiBkaXZpc2lvbkhUTUxOb2RlO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImh0bWxcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gbnVsbDtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tTm90aGluZyhUb3Btb3N0SFRNTE5vZGUpOyB9XG59XG5cbmZ1bmN0aW9uIGRpdmlzaW9uSFRNTFRyYW5zZm9ybXNGcm9tRGl2aXNpb25IVE1MTm9kZXMoZGl2aXNpb25IVE1MTm9kZXMpIHtcbiAgY29uc3QgZGl2aXNpb25IVE1MVHJhbnNmb3JtcyA9IGRpdmlzaW9uSFRNTE5vZGVzLm1hcCgoZGl2aXNpb25IVE1MTm9kZSkgPT4ge1xuICAgIGNvbnN0IGRpdmlzaW9uSFRNTFRyYW5zZm9ybSA9IERpdmlzaW9uSFRNTFRyYW5zZm9ybS5mcm9tRGl2aXNpb25IVE1MTm9kZShkaXZpc2lvbkhUTUxOb2RlKTtcblxuICAgIHJldHVybiBkaXZpc2lvbkhUTUxUcmFuc2Zvcm07XG4gIH0pO1xuXG4gIHJldHVybiBkaXZpc2lvbkhUTUxUcmFuc2Zvcm1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ29udGVudHNEaXJlY3RpdmVIVE1MTm9kZShub2RlKSB7XG4gIGxldCBjb250ZW50c0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0gPSBudWxsO1xuXG4gIGNvbnN0IGNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGUgPSBjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUobm9kZSk7XG5cbiAgaWYgKGNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGUgIT09IG51bGwpIHtcbiAgICBjb250ZW50c0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0gPSBDb250ZW50c0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0uZnJvbUNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGUoY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZSk7XG4gIH1cblxuICByZXR1cm4gY29udGVudHNEaXJlY3RpdmVIVE1MVHJhbnNmb3JtO1xufVxuIl0sIm5hbWVzIjpbIlRvcG1vc3RIVE1MTm9kZSIsInJlbW92ZUNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGUiLCJyZXNvbHZlIiwiY29udGV4dCIsInBhZ2luYXRlIiwiYWRkQ29udGVudHMiLCJkaXZpc2lvbkhUTUxOb2RlcyIsImRpdmlzaW9uSFRNTFRyYW5zZm9ybXMiLCJnZXREaXZpc2lvbkhUTUxOb2RlcyIsImRpdmlzaW9uSFRNTFRyYW5zZm9ybXNGcm9tRGl2aXNpb25IVE1MTm9kZXMiLCJwYWdlTnVtYmVyIiwiT2JqZWN0IiwiYXNzaWduIiwiZm9yRWFjaCIsImRpdmlzaW9uSFRNTFRyYW5zZm9ybSIsInJlbW92ZSIsInRvcG1vc3RIVE1MTm9kZSIsImFwcGVuZFRvVG9wbW9zdEhUTUxOb2RlIiwibm9kZSIsImFkanVzdEluZGVudCIsImluZGVudCIsImdldFJ1bGVOYW1lIiwicnVsZU5hbWUiLCJIVE1MX1JVTEVfTkFNRSIsImRpdmlzaW9uSFRNTE5vZGVzRnJvbU5vZGUiLCJnZXREaXZpc2lvbkhUTUxOb2RlQXQiLCJpbmRleCIsImRpdmlzaW9uSFRNTE5vZGUiLCJmcm9tTm90aGluZyIsIkhUTUxOb2RlIiwidGFnTmFtZSIsImNsYXNzTmFtZSIsIm1hcCIsIkRpdmlzaW9uSFRNTFRyYW5zZm9ybSIsImZyb21EaXZpc2lvbkhUTUxOb2RlIiwiY29udGVudHNEaXJlY3RpdmVIVE1MVHJhbnNmb3JtIiwiY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZSIsImNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZSIsIkNvbnRlbnRzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybSIsImZyb21Db250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O2VBU3FCQTs7SUF5RkxDLCtCQUErQjtlQUEvQkE7OzsyREFoR0s7K0RBQ2E7K0RBQ1M7eUJBRVo7cUJBQzhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5RCxJQUFBLEFBQU1ELGdDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkUsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLE9BQU87Z0JBQ2IsSUFBSSxDQUFDQyxRQUFRLENBQUNEO2dCQUVkLElBQUksQ0FBQ0UsV0FBVyxDQUFDRjtZQUNuQjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTRCxPQUFPO2dCQUNkLElBQUlHLG1CQUNBQztnQkFFSkQsb0JBQW9CLElBQUksQ0FBQ0Usb0JBQW9CO2dCQUU3Q0QseUJBQXlCRSw0Q0FBNENIO2dCQUVyRUEsb0JBQW9CLEVBQUU7Z0JBRXRCLElBQUlJO2dCQUVKQSxhQUFhO2dCQUViQyxPQUFPQyxNQUFNLENBQUNULFNBQVM7b0JBQ3JCTyxZQUFBQTtnQkFDRjtnQkFFQUgsdUJBQXVCTSxPQUFPLENBQUMsU0FBQ0M7b0JBQzlCQSxzQkFBc0JDLE1BQU07b0JBRTVCRCxzQkFBc0JaLE9BQU8sQ0FBQ0ksbUJBQW1CSDtnQkFDbkQ7Z0JBRUEsT0FBT0EsUUFBUU8sVUFBVTtnQkFFekJILHlCQUF5QkUsNENBQTRDSDtnQkFFckUsSUFBTVUsa0JBQWtCLElBQUksRUFBRSxHQUFHO2dCQUVqQ1QsdUJBQXVCTSxPQUFPLENBQUMsU0FBQ0M7b0JBQzlCQSxzQkFBc0JHLHVCQUF1QixDQUFDRDtnQkFDaEQ7WUFDRjs7O1lBRUFYLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZRixPQUFPO2dCQUNqQixJQUFNZSxPQUFPLElBQUksRUFBRyxHQUFHO1lBR3pCOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFDLE1BQU07Z0JBQ2pCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBV0MseUJBQWM7Z0JBRS9CLE9BQU9EO1lBQ1Q7OztZQUVBZCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVUsT0FBTyxJQUFJLEVBQ1haLG9CQUFvQmtCLElBQUFBLGdDQUF5QixFQUFDTjtnQkFFcEQsT0FBT1o7WUFDVDs7O1lBRUFtQixLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxLQUFLO2dCQUN6QixJQUFNcEIsb0JBQW9CLElBQUksQ0FBQ0Usb0JBQW9CLElBQzdDbUIsbUJBQW1CckIsaUJBQWlCLENBQUNvQixNQUFNLElBQUk7Z0JBRXJELE9BQU9DO1lBQ1Q7Ozs7WUFNT0MsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9DLGFBQVEsQ0FBQ0QsV0FBVyxDQTVFL0I1QjtZQTRFa0Q7OztXQTVFbERBO0VBQXdCNkIsYUFBUTtBQXdFbkQsaUJBeEVtQjdCLGlCQXdFWjhCLFdBQVU7QUFFakIsaUJBMUVtQjlCLGlCQTBFWitCLGFBQVk7QUFLckIsU0FBU3RCLDRDQUE0Q0gsaUJBQWlCO0lBQ3BFLElBQU1DLHlCQUF5QkQsa0JBQWtCMEIsR0FBRyxDQUFDLFNBQUNMO1FBQ3BELElBQU1iLHdCQUF3Qm1CLGlCQUFxQixDQUFDQyxvQkFBb0IsQ0FBQ1A7UUFFekUsT0FBT2I7SUFDVDtJQUVBLE9BQU9QO0FBQ1Q7QUFFTyxTQUFTTixnQ0FBZ0NpQixJQUFJO0lBQ2xELElBQUlpQixpQ0FBaUM7SUFFckMsSUFBTUMsNEJBQTRCQyxJQUFBQSx3Q0FBaUMsRUFBQ25CO0lBRXBFLElBQUlrQiw4QkFBOEIsTUFBTTtRQUN0Q0QsaUNBQWlDRyxpQkFBOEIsQ0FBQ0MsNkJBQTZCLENBQUNIO0lBQ2hHO0lBRUEsT0FBT0Q7QUFDVCJ9