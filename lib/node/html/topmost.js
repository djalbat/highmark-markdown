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
                var node = this, contentsDirectiveHTMLTransform = removeContentsDirectiveHTMLNode(node);
                if (contentsDirectiveHTMLTransform === null) {
                    return;
                }
            ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvdG9wbW9zdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcbmltcG9ydCBEaXZpc2lvbkhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2RpdmlzaW9uXCI7XG5pbXBvcnQgQ29udGVudHNEaXJlY3RpdmVIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9kaXJlY3RpdmUvY29udGVudHNcIjtcblxuaW1wb3J0IHsgSFRNTF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyBkaXZpc2lvbkhUTUxOb2Rlc0Zyb21Ob2RlLCBjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2h0bWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wbW9zdEhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICByZXNvbHZlKGNvbnRleHQpIHtcbiAgICB0aGlzLnBhZ2luYXRlKGNvbnRleHQpO1xuXG4gICAgdGhpcy5hZGRDb250ZW50cyhjb250ZXh0KTtcbiAgfVxuXG4gIHBhZ2luYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgZGl2aXNpb25IVE1MTm9kZXMsXG4gICAgICAgIGRpdmlzaW9uSFRNTFRyYW5zZm9ybXM7XG5cbiAgICBkaXZpc2lvbkhUTUxOb2RlcyA9IHRoaXMuZ2V0RGl2aXNpb25IVE1MTm9kZXMoKTtcblxuICAgIGRpdmlzaW9uSFRNTFRyYW5zZm9ybXMgPSBkaXZpc2lvbkhUTUxUcmFuc2Zvcm1zRnJvbURpdmlzaW9uSFRNTE5vZGVzKGRpdmlzaW9uSFRNTE5vZGVzKTtcblxuICAgIGRpdmlzaW9uSFRNTE5vZGVzID0gW107XG5cbiAgICBsZXQgcGFnZU51bWJlcjtcblxuICAgIHBhZ2VOdW1iZXIgPSAxO1xuXG4gICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICBwYWdlTnVtYmVyXG4gICAgfSk7XG5cbiAgICBkaXZpc2lvbkhUTUxUcmFuc2Zvcm1zLmZvckVhY2goKGRpdmlzaW9uSFRNTFRyYW5zZm9ybSkgPT4ge1xuICAgICAgZGl2aXNpb25IVE1MVHJhbnNmb3JtLnJlbW92ZSgpO1xuXG4gICAgICBkaXZpc2lvbkhUTUxUcmFuc2Zvcm0ucmVzb2x2ZShkaXZpc2lvbkhUTUxOb2RlcywgY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBkZWxldGUgY29udGV4dC5wYWdlTnVtYmVyO1xuXG4gICAgZGl2aXNpb25IVE1MVHJhbnNmb3JtcyA9IGRpdmlzaW9uSFRNTFRyYW5zZm9ybXNGcm9tRGl2aXNpb25IVE1MTm9kZXMoZGl2aXNpb25IVE1MTm9kZXMpO1xuXG4gICAgY29uc3QgdG9wbW9zdEhUTUxOb2RlID0gdGhpczsgLy8vXG5cbiAgICBkaXZpc2lvbkhUTUxUcmFuc2Zvcm1zLmZvckVhY2goKGRpdmlzaW9uSFRNTFRyYW5zZm9ybSkgPT4ge1xuICAgICAgZGl2aXNpb25IVE1MVHJhbnNmb3JtLmFwcGVuZFRvVG9wbW9zdEhUTUxOb2RlKHRvcG1vc3RIVE1MTm9kZSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRDb250ZW50cyhjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBjb250ZW50c0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0gPSByZW1vdmVDb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlKG5vZGUpO1xuXG4gICAgaWYgKGNvbnRlbnRzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vL1xuICB9XG5cbiAgYWRqdXN0SW5kZW50KGluZGVudCkge1xuICAgIHJldHVybiBpbmRlbnQ7XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IEhUTUxfUlVMRV9OQU1FO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lO1xuICB9XG5cbiAgZ2V0RGl2aXNpb25IVE1MTm9kZXMoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBkaXZpc2lvbkhUTUxOb2RlcyA9IGRpdmlzaW9uSFRNTE5vZGVzRnJvbU5vZGUobm9kZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25IVE1MTm9kZXM7XG4gIH1cblxuICBnZXREaXZpc2lvbkhUTUxOb2RlQXQoaW5kZXgpIHtcbiAgICBjb25zdCBkaXZpc2lvbkhUTUxOb2RlcyA9IHRoaXMuZ2V0RGl2aXNpb25IVE1MTm9kZXMoKSxcbiAgICAgICAgICBkaXZpc2lvbkhUTUxOb2RlID0gZGl2aXNpb25IVE1MTm9kZXNbaW5kZXhdIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZGl2aXNpb25IVE1MTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJodG1sXCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IG51bGw7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU5vdGhpbmcoVG9wbW9zdEhUTUxOb2RlKTsgfVxufVxuXG5mdW5jdGlvbiBkaXZpc2lvbkhUTUxUcmFuc2Zvcm1zRnJvbURpdmlzaW9uSFRNTE5vZGVzKGRpdmlzaW9uSFRNTE5vZGVzKSB7XG4gIGNvbnN0IGRpdmlzaW9uSFRNTFRyYW5zZm9ybXMgPSBkaXZpc2lvbkhUTUxOb2Rlcy5tYXAoKGRpdmlzaW9uSFRNTE5vZGUpID0+IHtcbiAgICBjb25zdCBkaXZpc2lvbkhUTUxUcmFuc2Zvcm0gPSBEaXZpc2lvbkhUTUxUcmFuc2Zvcm0uZnJvbURpdmlzaW9uSFRNTE5vZGUoZGl2aXNpb25IVE1MTm9kZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25IVE1MVHJhbnNmb3JtO1xuICB9KTtcblxuICByZXR1cm4gZGl2aXNpb25IVE1MVHJhbnNmb3Jtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGUobm9kZSkge1xuICBsZXQgY29udGVudHNEaXJlY3RpdmVIVE1MVHJhbnNmb3JtID0gbnVsbDtcblxuICBjb25zdCBjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlID0gY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlKG5vZGUpO1xuXG4gIGlmIChjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlICE9PSBudWxsKSB7XG4gICAgY29udGVudHNEaXJlY3RpdmVIVE1MVHJhbnNmb3JtID0gQ29udGVudHNEaXJlY3RpdmVIVE1MVHJhbnNmb3JtLmZyb21Db250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlKGNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRlbnRzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybTtcbn1cbiJdLCJuYW1lcyI6WyJUb3Btb3N0SFRNTE5vZGUiLCJyZW1vdmVDb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlIiwicmVzb2x2ZSIsImNvbnRleHQiLCJwYWdpbmF0ZSIsImFkZENvbnRlbnRzIiwiZGl2aXNpb25IVE1MTm9kZXMiLCJkaXZpc2lvbkhUTUxUcmFuc2Zvcm1zIiwiZ2V0RGl2aXNpb25IVE1MTm9kZXMiLCJkaXZpc2lvbkhUTUxUcmFuc2Zvcm1zRnJvbURpdmlzaW9uSFRNTE5vZGVzIiwicGFnZU51bWJlciIsIk9iamVjdCIsImFzc2lnbiIsImZvckVhY2giLCJkaXZpc2lvbkhUTUxUcmFuc2Zvcm0iLCJyZW1vdmUiLCJ0b3Btb3N0SFRNTE5vZGUiLCJhcHBlbmRUb1RvcG1vc3RIVE1MTm9kZSIsIm5vZGUiLCJjb250ZW50c0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0iLCJhZGp1c3RJbmRlbnQiLCJpbmRlbnQiLCJnZXRSdWxlTmFtZSIsInJ1bGVOYW1lIiwiSFRNTF9SVUxFX05BTUUiLCJkaXZpc2lvbkhUTUxOb2Rlc0Zyb21Ob2RlIiwiZ2V0RGl2aXNpb25IVE1MTm9kZUF0IiwiaW5kZXgiLCJkaXZpc2lvbkhUTUxOb2RlIiwiZnJvbU5vdGhpbmciLCJIVE1MTm9kZSIsInRhZ05hbWUiLCJjbGFzc05hbWUiLCJtYXAiLCJEaXZpc2lvbkhUTUxUcmFuc2Zvcm0iLCJmcm9tRGl2aXNpb25IVE1MTm9kZSIsImNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGUiLCJjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUiLCJDb250ZW50c0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0iLCJmcm9tQ29udGVudHNEaXJlY3RpdmVIVE1MTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztlQVNxQkE7O0lBOEZMQywrQkFBK0I7ZUFBL0JBOzs7MkRBckdLOytEQUNhOytEQUNTO3lCQUVaO3FCQUM4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUQsSUFBQSxBQUFNRCxnQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJFLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxPQUFPO2dCQUNiLElBQUksQ0FBQ0MsUUFBUSxDQUFDRDtnQkFFZCxJQUFJLENBQUNFLFdBQVcsQ0FBQ0Y7WUFDbkI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0QsT0FBTztnQkFDZCxJQUFJRyxtQkFDQUM7Z0JBRUpELG9CQUFvQixJQUFJLENBQUNFLG9CQUFvQjtnQkFFN0NELHlCQUF5QkUsNENBQTRDSDtnQkFFckVBLG9CQUFvQixFQUFFO2dCQUV0QixJQUFJSTtnQkFFSkEsYUFBYTtnQkFFYkMsT0FBT0MsTUFBTSxDQUFDVCxTQUFTO29CQUNyQk8sWUFBQUE7Z0JBQ0Y7Z0JBRUFILHVCQUF1Qk0sT0FBTyxDQUFDLFNBQUNDO29CQUM5QkEsc0JBQXNCQyxNQUFNO29CQUU1QkQsc0JBQXNCWixPQUFPLENBQUNJLG1CQUFtQkg7Z0JBQ25EO2dCQUVBLE9BQU9BLFFBQVFPLFVBQVU7Z0JBRXpCSCx5QkFBeUJFLDRDQUE0Q0g7Z0JBRXJFLElBQU1VLGtCQUFrQixJQUFJLEVBQUUsR0FBRztnQkFFakNULHVCQUF1Qk0sT0FBTyxDQUFDLFNBQUNDO29CQUM5QkEsc0JBQXNCRyx1QkFBdUIsQ0FBQ0Q7Z0JBQ2hEO1lBQ0Y7OztZQUVBWCxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWUYsT0FBTztnQkFDakIsSUFBTWUsT0FBTyxJQUFJLEVBQ1hDLGlDQUFpQ2xCLGdDQUFnQ2lCO2dCQUV2RSxJQUFJQyxtQ0FBbUMsTUFBTTtvQkFDM0M7Z0JBQ0Y7WUFFQSxHQUFHO1lBQ0w7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYUMsTUFBTTtnQkFDakIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXQyx5QkFBYztnQkFFL0IsT0FBT0Q7WUFDVDs7O1lBRUFmLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNVSxPQUFPLElBQUksRUFDWFosb0JBQW9CbUIsSUFBQUEsZ0NBQXlCLEVBQUNQO2dCQUVwRCxPQUFPWjtZQUNUOzs7WUFFQW9CLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JDLEtBQUs7Z0JBQ3pCLElBQU1yQixvQkFBb0IsSUFBSSxDQUFDRSxvQkFBb0IsSUFDN0NvQixtQkFBbUJ0QixpQkFBaUIsQ0FBQ3FCLE1BQU0sSUFBSTtnQkFFckQsT0FBT0M7WUFDVDs7OztZQU1PQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFBZ0IsT0FBT0MsYUFBUSxDQUFDRCxXQUFXLENBakYvQjdCO1lBaUZrRDs7O1dBakZsREE7RUFBd0I4QixhQUFRO0FBNkVuRCxpQkE3RW1COUIsaUJBNkVaK0IsV0FBVTtBQUVqQixpQkEvRW1CL0IsaUJBK0VaZ0MsYUFBWTtBQUtyQixTQUFTdkIsNENBQTRDSCxpQkFBaUI7SUFDcEUsSUFBTUMseUJBQXlCRCxrQkFBa0IyQixHQUFHLENBQUMsU0FBQ0w7UUFDcEQsSUFBTWQsd0JBQXdCb0IsaUJBQXFCLENBQUNDLG9CQUFvQixDQUFDUDtRQUV6RSxPQUFPZDtJQUNUO0lBRUEsT0FBT1A7QUFDVDtBQUVPLFNBQVNOLGdDQUFnQ2lCLElBQUk7SUFDbEQsSUFBSUMsaUNBQWlDO0lBRXJDLElBQU1pQiw0QkFBNEJDLElBQUFBLHdDQUFpQyxFQUFDbkI7SUFFcEUsSUFBSWtCLDhCQUE4QixNQUFNO1FBQ3RDakIsaUNBQWlDbUIsaUJBQThCLENBQUNDLDZCQUE2QixDQUFDSDtJQUNoRztJQUVBLE9BQU9qQjtBQUNUIn0=