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
var _contents = /*#__PURE__*/ _interop_require_default(require("../../transform/html/list/contents"));
var _contents1 = /*#__PURE__*/ _interop_require_default(require("../../transform/html/directive/contents"));
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
                var topmostHTMLNOde = this, contentsListHTMLTransform = _contents.default.fromTopmostHTMLNode(topmostHTMLNOde, context);
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
        contentsDirectiveHTMLTransform = _contents1.default.fromContentsDirectiveHTMLNode(contentsDirectiveHTMLNode);
    }
    return contentsDirectiveHTMLTransform;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvdG9wbW9zdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcbmltcG9ydCBEaXZpc2lvbkhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2RpdmlzaW9uXCI7XG5pbXBvcnQgQ29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2h0bWwvbGlzdC9jb250ZW50c1wiO1xuaW1wb3J0IENvbnRlbnRzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2h0bWwvZGlyZWN0aXZlL2NvbnRlbnRzXCI7XG5cbmltcG9ydCB7IEhUTUxfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgZGl2aXNpb25IVE1MTm9kZXNGcm9tTm9kZSwgY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9odG1sXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcG1vc3RIVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgcmVzb2x2ZShjb250ZXh0KSB7XG4gICAgdGhpcy5wYWdpbmF0ZShjb250ZXh0KTtcblxuICAgIHRoaXMuYWRkQ29udGVudHMoY29udGV4dCk7XG4gIH1cblxuICBwYWdpbmF0ZShjb250ZXh0KSB7XG4gICAgbGV0IGRpdmlzaW9uSFRNTE5vZGVzLFxuICAgICAgICBkaXZpc2lvbkhUTUxUcmFuc2Zvcm1zO1xuXG4gICAgZGl2aXNpb25IVE1MTm9kZXMgPSB0aGlzLmdldERpdmlzaW9uSFRNTE5vZGVzKCk7XG5cbiAgICBkaXZpc2lvbkhUTUxUcmFuc2Zvcm1zID0gZGl2aXNpb25IVE1MVHJhbnNmb3Jtc0Zyb21EaXZpc2lvbkhUTUxOb2RlcyhkaXZpc2lvbkhUTUxOb2Rlcyk7XG5cbiAgICBkaXZpc2lvbkhUTUxOb2RlcyA9IFtdO1xuXG4gICAgbGV0IHBhZ2VOdW1iZXI7XG5cbiAgICBwYWdlTnVtYmVyID0gMTtcblxuICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgcGFnZU51bWJlclxuICAgIH0pO1xuXG4gICAgZGl2aXNpb25IVE1MVHJhbnNmb3Jtcy5mb3JFYWNoKChkaXZpc2lvbkhUTUxUcmFuc2Zvcm0pID0+IHtcbiAgICAgIGRpdmlzaW9uSFRNTFRyYW5zZm9ybS5yZW1vdmUoKTtcblxuICAgICAgZGl2aXNpb25IVE1MVHJhbnNmb3JtLnJlc29sdmUoZGl2aXNpb25IVE1MTm9kZXMsIGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgZGVsZXRlIGNvbnRleHQucGFnZU51bWJlcjtcblxuICAgIGRpdmlzaW9uSFRNTFRyYW5zZm9ybXMgPSBkaXZpc2lvbkhUTUxUcmFuc2Zvcm1zRnJvbURpdmlzaW9uSFRNTE5vZGVzKGRpdmlzaW9uSFRNTE5vZGVzKTtcblxuICAgIGNvbnN0IHRvcG1vc3RIVE1MTm9kZSA9IHRoaXM7IC8vL1xuXG4gICAgZGl2aXNpb25IVE1MVHJhbnNmb3Jtcy5mb3JFYWNoKChkaXZpc2lvbkhUTUxUcmFuc2Zvcm0pID0+IHtcbiAgICAgIGRpdmlzaW9uSFRNTFRyYW5zZm9ybS5hcHBlbmRUb1RvcG1vc3RIVE1MTm9kZSh0b3Btb3N0SFRNTE5vZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkQ29udGVudHMoY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgY29udGVudHNEaXJlY3RpdmVIVE1MVHJhbnNmb3JtID0gcmVtb3ZlQ29udGVudHNEaXJlY3RpdmVIVE1MTm9kZShub2RlKTtcblxuICAgIGlmIChjb250ZW50c0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0gPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0b3Btb3N0SFRNTE5PZGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICBjb250ZW50c0xpc3RIVE1MVHJhbnNmb3JtID0gQ29udGVudHNMaXN0SFRNTFRyYW5zZm9ybS5mcm9tVG9wbW9zdEhUTUxOb2RlKHRvcG1vc3RIVE1MTk9kZSwgY29udGV4dCk7XG5cbiAgICAvLy9cbiAgfVxuXG4gIGFkanVzdEluZGVudChpbmRlbnQpIHtcbiAgICByZXR1cm4gaW5kZW50O1xuICB9XG5cbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBIVE1MX1JVTEVfTkFNRTtcblxuICAgIHJldHVybiBydWxlTmFtZTtcbiAgfVxuXG4gIGdldERpdmlzaW9uSFRNTE5vZGVzKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZGl2aXNpb25IVE1MTm9kZXMgPSBkaXZpc2lvbkhUTUxOb2Rlc0Zyb21Ob2RlKG5vZGUpO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uSFRNTE5vZGVzO1xuICB9XG5cbiAgZ2V0RGl2aXNpb25IVE1MTm9kZUF0KGluZGV4KSB7XG4gICAgY29uc3QgZGl2aXNpb25IVE1MTm9kZXMgPSB0aGlzLmdldERpdmlzaW9uSFRNTE5vZGVzKCksXG4gICAgICAgICAgZGl2aXNpb25IVE1MTm9kZSA9IGRpdmlzaW9uSFRNTE5vZGVzW2luZGV4XSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uSFRNTE5vZGU7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiaHRtbFwiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBudWxsO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21Ob3RoaW5nKFRvcG1vc3RIVE1MTm9kZSk7IH1cbn1cblxuZnVuY3Rpb24gZGl2aXNpb25IVE1MVHJhbnNmb3Jtc0Zyb21EaXZpc2lvbkhUTUxOb2RlcyhkaXZpc2lvbkhUTUxOb2Rlcykge1xuICBjb25zdCBkaXZpc2lvbkhUTUxUcmFuc2Zvcm1zID0gZGl2aXNpb25IVE1MTm9kZXMubWFwKChkaXZpc2lvbkhUTUxOb2RlKSA9PiB7XG4gICAgY29uc3QgZGl2aXNpb25IVE1MVHJhbnNmb3JtID0gRGl2aXNpb25IVE1MVHJhbnNmb3JtLmZyb21EaXZpc2lvbkhUTUxOb2RlKGRpdmlzaW9uSFRNTE5vZGUpO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uSFRNTFRyYW5zZm9ybTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRpdmlzaW9uSFRNTFRyYW5zZm9ybXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlKG5vZGUpIHtcbiAgbGV0IGNvbnRlbnRzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybSA9IG51bGw7XG5cbiAgY29uc3QgY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZSA9IGNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZShub2RlKTtcblxuICBpZiAoY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnRlbnRzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybSA9IENvbnRlbnRzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybS5mcm9tQ29udGVudHNEaXJlY3RpdmVIVE1MTm9kZShjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBjb250ZW50c0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm07XG59XG4iXSwibmFtZXMiOlsiVG9wbW9zdEhUTUxOb2RlIiwicmVtb3ZlQ29udGVudHNEaXJlY3RpdmVIVE1MTm9kZSIsInJlc29sdmUiLCJjb250ZXh0IiwicGFnaW5hdGUiLCJhZGRDb250ZW50cyIsImRpdmlzaW9uSFRNTE5vZGVzIiwiZGl2aXNpb25IVE1MVHJhbnNmb3JtcyIsImdldERpdmlzaW9uSFRNTE5vZGVzIiwiZGl2aXNpb25IVE1MVHJhbnNmb3Jtc0Zyb21EaXZpc2lvbkhUTUxOb2RlcyIsInBhZ2VOdW1iZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJmb3JFYWNoIiwiZGl2aXNpb25IVE1MVHJhbnNmb3JtIiwicmVtb3ZlIiwidG9wbW9zdEhUTUxOb2RlIiwiYXBwZW5kVG9Ub3Btb3N0SFRNTE5vZGUiLCJub2RlIiwiY29udGVudHNEaXJlY3RpdmVIVE1MVHJhbnNmb3JtIiwidG9wbW9zdEhUTUxOT2RlIiwiY29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSIsIkNvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0iLCJmcm9tVG9wbW9zdEhUTUxOb2RlIiwiYWRqdXN0SW5kZW50IiwiaW5kZW50IiwiZ2V0UnVsZU5hbWUiLCJydWxlTmFtZSIsIkhUTUxfUlVMRV9OQU1FIiwiZGl2aXNpb25IVE1MTm9kZXNGcm9tTm9kZSIsImdldERpdmlzaW9uSFRNTE5vZGVBdCIsImluZGV4IiwiZGl2aXNpb25IVE1MTm9kZSIsImZyb21Ob3RoaW5nIiwiSFRNTE5vZGUiLCJ0YWdOYW1lIiwiY2xhc3NOYW1lIiwibWFwIiwiRGl2aXNpb25IVE1MVHJhbnNmb3JtIiwiZnJvbURpdmlzaW9uSFRNTE5vZGUiLCJjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlIiwiY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlIiwiQ29udGVudHNEaXJlY3RpdmVIVE1MVHJhbnNmb3JtIiwiZnJvbUNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7ZUFVcUJBOztJQWlHTEMsK0JBQStCO2VBQS9CQTs7OzJEQXpHSzsrREFDYTsrREFDSTtnRUFDSzt5QkFFWjtxQkFDOEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlELElBQUEsQUFBTUQsZ0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CRSxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsT0FBTztnQkFDYixJQUFJLENBQUNDLFFB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