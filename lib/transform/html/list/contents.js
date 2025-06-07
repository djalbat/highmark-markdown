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
var _occamdom = require("occam-dom");
var _necessary = require("necessary");
var _html = /*#__PURE__*/ _interop_require_default(require("../../../transform/html"));
var _contents = /*#__PURE__*/ _interop_require_default(require("../../../node/html/list/contents"));
var _contents1 = /*#__PURE__*/ _interop_require_default(require("../../../transform/html/item/contents"));
var _contents2 = require("../../../utilities/contents");
var _html1 = require("../../../utilities/html");
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
var filter = _necessary.arrayUtilities.filter, isLessThan = _occamdom.nodeUtilities.isLessThan;
var ContentsListHTMLTransform = /*#__PURE__*/ function(HTMLTransform) {
    _inherits(ContentsListHTMLTransform, HTMLTransform);
    function ContentsListHTMLTransform() {
        _class_call_check(this, ContentsListHTMLTransform);
        return _call_super(this, ContentsListHTMLTransform, arguments);
    }
    _create_class(ContentsListHTMLTransform, [
        {
            key: "addAfterContentsDirectiveHTMLNode",
            value: function addAfterContentsDirectiveHTMLNode(contentsDirectiveHTMLNode) {
                var siblingHTMLNode = contentsDirectiveHTMLNode; ///
                _get(_get_prototype_of(ContentsListHTMLTransform.prototype), "replace", this).call(this, siblingHTMLNode);
            }
        }
    ], [
        {
            key: "fromContentsDirectiveHTMLNodeAndTopmostHTMLNode",
            value: function fromContentsDirectiveHTMLNodeAndTopmostHTMLNode(contentsDirectiveHTMLNode, topmostHTMLNode, context) {
                var contentsListHTMLTransform = null;
                var node = topmostHTMLNode, headingHTMLNodes = (0, _html1.headingHTMLNodesFromNode)(node);
                filter(headingHTMLNodes, function(headingHTMLNode) {
                    var contentsDirectiveHTMLNodeLessThanHeadingHTMLNode = isLessThan(contentsDirectiveHTMLNode, headingHTMLNode);
                    if (contentsDirectiveHTMLNodeLessThanHeadingHTMLNode) {
                        return true;
                    }
                });
                var headingHTMLNodesLength = headingHTMLNodes.length;
                if (headingHTMLNodesLength > 0) {
                    var nestedHeadingNodes = nestedHeadingNodesFromHeadingHTMLNodes(headingHTMLNodes), contentsItemHTMLTransforms = contentsItemHTMLTransformsFromNestedHeadingNodes(nestedHeadingNodes, context), contentsListHTMLNode = _contents.default.fromContentsItemHTMLTransforms(contentsItemHTMLTransforms), htmlNode = contentsListHTMLNode; ///
                    contentsListHTMLTransform = _html.default.fromHTMLNode(ContentsListHTMLTransform, htmlNode);
                }
                return contentsListHTMLTransform;
            }
        },
        {
            key: "fromNestedHeadingNodes",
            value: function fromNestedHeadingNodes(nestedHeadingNodes, context) {
                var contentsItemHTMLTransforms = contentsItemHTMLTransformsFromNestedHeadingNodes(nestedHeadingNodes, context), contentsListHTMLNode = _contents.default.fromContentsItemHTMLTransforms(contentsItemHTMLTransforms), htmlNode = contentsListHTMLNode, contentsListHTMLTransform = _html.default.fromHTMLNode(ContentsListHTMLTransform, htmlNode);
                return contentsListHTMLTransform;
            }
        }
    ]);
    return ContentsListHTMLTransform;
}(_html.default);
Object.assign(_contents1.default, {
    ContentsListHTMLTransform: ContentsListHTMLTransform
});
var _default = ContentsListHTMLTransform;
function nestedHeadingNodesFromHeadingHTMLNodes(headingHTMLNodes) {
    var htmlNodes = headingHTMLNodes, nestedNode = (0, _contents2.nestHTMLNodes)(htmlNodes), childNestedNodes = nestedNode.getChildNestedNodes(), nestedHeadingNodes = childNestedNodes; ///
    return nestedHeadingNodes;
}
function contentsItemHTMLTransformsFromNestedHeadingNodes(nestedHeadingNodes, context) {
    var contentsItemHTMLTransforms = nestedHeadingNodes.map(function(nestedHeadingNode) {
        var contentsItemHTMLTransform = _contents1.default.fromNestedHeadingNode(nestedHeadingNode, context);
        return contentsItemHTMLTransform;
    });
    return contentsItemHTMLTransforms;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9saXN0L2NvbnRlbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi8uLi90cmFuc2Zvcm0vaHRtbFwiO1xuaW1wb3J0IENvbnRlbnRzTGlzdEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWwvbGlzdC9jb250ZW50c1wiO1xuaW1wb3J0IENvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uLy4uL3RyYW5zZm9ybS9odG1sL2l0ZW0vY29udGVudHNcIjtcblxuaW1wb3J0IHsgbmVzdEhUTUxOb2RlcyB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvY29udGVudHNcIjtcbmltcG9ydCB7IGhlYWRpbmdIVE1MTm9kZXNGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvaHRtbFwiO1xuXG5jb25zdCB7IGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGlzTGVzc1RoYW4gfSA9IG5vZGVVdGlsaXRpZXM7XG5cbmNsYXNzIENvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0gZXh0ZW5kcyBIVE1MVHJhbnNmb3JtIHtcbiAgYWRkQWZ0ZXJDb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlKGNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGUpIHtcbiAgICBjb25zdCBzaWJsaW5nSFRNTE5vZGUgPSBjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlOyAgLy8vXG5cbiAgICBzdXBlci5yZXBsYWNlKHNpYmxpbmdIVE1MTm9kZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGVBbmRUb3Btb3N0SFRNTE5vZGUoY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZSwgdG9wbW9zdEhUTUxOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0gPSBudWxsO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRvcG1vc3RIVE1MTm9kZSwgLy8vXG4gICAgICAgICAgaGVhZGluZ0hUTUxOb2RlcyA9IGhlYWRpbmdIVE1MTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICAgIGZpbHRlcihoZWFkaW5nSFRNTE5vZGVzLCAoaGVhZGluZ0hUTUxOb2RlKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlTGVzc1RoYW5IZWFkaW5nSFRNTE5vZGUgPSBpc0xlc3NUaGFuKGNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGUsIGhlYWRpbmdIVE1MTm9kZSk7XG5cbiAgICAgIGlmIChjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlTGVzc1RoYW5IZWFkaW5nSFRNTE5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBoZWFkaW5nSFRNTE5vZGVzTGVuZ3RoID0gaGVhZGluZ0hUTUxOb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoaGVhZGluZ0hUTUxOb2Rlc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IG5lc3RlZEhlYWRpbmdOb2RlcyA9IG5lc3RlZEhlYWRpbmdOb2Rlc0Zyb21IZWFkaW5nSFRNTE5vZGVzKGhlYWRpbmdIVE1MTm9kZXMpLFxuICAgICAgICAgICAgY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXMgPSBjb250ZW50c0l0ZW1IVE1MVHJhbnNmb3Jtc0Zyb21OZXN0ZWRIZWFkaW5nTm9kZXMobmVzdGVkSGVhZGluZ05vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGNvbnRlbnRzTGlzdEhUTUxOb2RlID0gQ29udGVudHNMaXN0SFRNTE5vZGUuZnJvbUNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm1zKGNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm1zKSxcbiAgICAgICAgICAgIGh0bWxOb2RlID0gY29udGVudHNMaXN0SFRNTE5vZGU7ICAvLy9cblxuICAgICAgY29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSA9IEhUTUxUcmFuc2Zvcm0uZnJvbUhUTUxOb2RlKENvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0sIGh0bWxOb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudHNMaXN0SFRNTFRyYW5zZm9ybTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmVzdGVkSGVhZGluZ05vZGVzKG5lc3RlZEhlYWRpbmdOb2RlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm1zID0gY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXNGcm9tTmVzdGVkSGVhZGluZ05vZGVzKG5lc3RlZEhlYWRpbmdOb2RlcywgY29udGV4dCksXG4gICAgICAgICAgY29udGVudHNMaXN0SFRNTE5vZGUgPSBDb250ZW50c0xpc3RIVE1MTm9kZS5mcm9tQ29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXMoY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXMpLFxuICAgICAgICAgIGh0bWxOb2RlID0gY29udGVudHNMaXN0SFRNTE5vZGUsICAvLy9cbiAgICAgICAgICBjb250ZW50c0xpc3RIVE1MVHJhbnNmb3JtID0gSFRNTFRyYW5zZm9ybS5mcm9tSFRNTE5vZGUoQ29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSwgaHRtbE5vZGUpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm07XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihDb250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtLCB7ICAvLy9cbiAgQ29udGVudHNMaXN0SFRNTFRyYW5zZm9ybVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm07XG5cbmZ1bmN0aW9uIG5lc3RlZEhlYWRpbmdOb2Rlc0Zyb21IZWFkaW5nSFRNTE5vZGVzKGhlYWRpbmdIVE1MTm9kZXMpIHtcbiAgY29uc3QgaHRtbE5vZGVzID0gaGVhZGluZ0hUTUxOb2RlcywgLy8vXG4gICAgICAgIG5lc3RlZE5vZGUgPSBuZXN0SFRNTE5vZGVzKGh0bWxOb2RlcyksXG4gICAgICAgIGNoaWxkTmVzdGVkTm9kZXMgPSBuZXN0ZWROb2RlLmdldENoaWxkTmVzdGVkTm9kZXMoKSxcbiAgICAgICAgbmVzdGVkSGVhZGluZ05vZGVzID0gY2hpbGROZXN0ZWROb2RlczsgIC8vL1xuXG4gIHJldHVybiBuZXN0ZWRIZWFkaW5nTm9kZXM7XG59XG5cbmZ1bmN0aW9uIGNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm1zRnJvbU5lc3RlZEhlYWRpbmdOb2RlcyhuZXN0ZWRIZWFkaW5nTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXMgPSBuZXN0ZWRIZWFkaW5nTm9kZXMubWFwKChuZXN0ZWRIZWFkaW5nTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm0gPSBDb250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtLmZyb21OZXN0ZWRIZWFkaW5nTm9kZShuZXN0ZWRIZWFkaW5nTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm1zO1xufVxuIl0sIm5hbWVzIjpbImZpbHRlciIsImFycmF5VXRpbGl0aWVzIiwiaXNMZXNzVGhhbiIsIm5vZGVVdGlsaXRpZXMiLCJDb250ZW50c0xpc3RIVE1MVHJhbnNmb3JtIiwiYWRkQWZ0ZXJDb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlIiwiY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZSIsInNpYmxpbmdIVE1MTm9kZSIsInJlcGxhY2UiLCJmcm9tQ29udGVudHNEaXJlY3RpdmVIVE1MTm9kZUFuZFRvcG1vc3RIVE1MTm9kZSIsInRvcG1vc3RIVE1MTm9kZSIsImNvbnRleHQiLCJjb250ZW50c0xpc3RIVE1MVHJhbnNmb3JtIiwibm9kZSIsImhlYWRpbmdIVE1MTm9kZXMiLCJoZWFkaW5nSFRNTE5vZGVzRnJvbU5vZGUiLCJoZWFkaW5nSFRNTE5vZGUiLCJjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlTGVzc1RoYW5IZWFkaW5nSFRNTE5vZGUiLCJoZWFkaW5nSFRNTE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwibmVzdGVkSGVhZGluZ05vZGVzIiwibmVzdGVkSGVhZGluZ05vZGVzRnJvbUhlYWRpbmdIVE1MTm9kZXMiLCJjb250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtcyIsImNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm1zRnJvbU5lc3RlZEhlYWRpbmdOb2RlcyIsImNvbnRlbnRzTGlzdEhUTUxOb2RlIiwiQ29udGVudHNMaXN0SFRNTE5vZGUiLCJmcm9tQ29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXMiLCJodG1sTm9kZSIsIkhUTUxUcmFuc2Zvcm0iLCJmcm9tSFRNTE5vZGUiLCJmcm9tTmVzdGVkSGVhZGluZ05vZGVzIiwiT2JqZWN0IiwiYXNzaWduIiwiQ29udGVudHNJdGVtSFRNTFRyYW5zZm9ybSIsImh0bWxOb2RlcyIsIm5lc3RlZE5vZGUiLCJuZXN0SFRNTE5vZGVzIiwiY2hpbGROZXN0ZWROb2RlcyIsImdldENoaWxkTmVzdGVkTm9kZXMiLCJtYXAiLCJuZXN0ZWRIZWFkaW5nTm9kZSIsImNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm0iLCJmcm9tTmVzdGVkSGVhZGluZ05vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWdFQTs7O2VBQUE7Ozt3QkE5RDhCO3lCQUNDOzJEQUVMOytEQUNPO2dFQUNLO3lCQUVSO3FCQUNXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekMsSUFBTSxBQUFFQSxTQUFXQyx5QkFBYyxDQUF6QkQsUUFDRixBQUFFRSxhQUFlQyx1QkFBYSxDQUE1QkQ7QUFFUixJQUFBLEFBQU1FLDBDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxrQ0FBa0NDLHlCQUF5QjtnQkFDekQsSUFBTUMsa0JBQWtCRCwyQkFBNEIsR0FBRztnQkFFdkQsdUJBSkVGLHNDQUlJSSxXQUFOLElBQUssYUFBU0Q7WUFDaEI7Ozs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsZ0RBQWdESCx5QkFBeUIsRUFBRUksZUFBZSxFQUFFQyxPQUFPO2dCQUN4RyxJQUFJQyw0QkFBNEI7Z0JBRWhDLElBQU1DLE9BQU9ILGlCQUNQSSxtQkFBbUJDLElBQUFBLCtCQUF3QixFQUFDRjtnQkFFbERiLE9BQU9jLGtCQUFrQixTQUFDRTtvQkFDeEIsSUFBTUMsbURBQW1EZixXQUFXSSwyQkFBMkJVO29CQUUvRixJQUFJQyxrREFBa0Q7d0JBQ3BELE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsSUFBTUMseUJBQXlCSixpQkFBaUJLLE1BQU07Z0JBRXRELElBQUlELHlCQUF5QixHQUFHO29CQUM5QixJQUFNRSxxQkFBcUJDLHVDQUF1Q1AsbUJBQzVEUSw2QkFBNkJDLGlEQUFpREgsb0JBQW9CVCxVQUNsR2EsdUJBQXVCQyxpQkFBb0IsQ0FBQ0MsOEJBQThCLENBQUNKLDZCQUMzRUssV0FBV0gsc0JBQXVCLEdBQUc7b0JBRTNDWiw0QkFBNEJnQixhQUFhLENBQUNDLFlBQVksQ0E3QnREekIsMkJBNkJrRnVCO2dCQUNwRjtnQkFFQSxPQUFPZjtZQUNUOzs7WUFFT2tCLEtBQUFBO21CQUFQLFNBQU9BLHVCQUF1QlYsa0JBQWtCLEVBQUVULE9BQU87Z0JBQ3ZELElBQU1XLDZCQUE2QkMsaURBQWlESCxvQkFBb0JULFVBQ2xHYSx1QkFBdUJDLGlCQUFvQixDQUFDQyw4QkFBOEIsQ0FBQ0osNkJBQzNFSyxXQUFXSCxzQkFDWFosNEJBQTRCZ0IsYUFBYSxDQUFDQyxZQUFZLENBdkMxRHpCLDJCQXVDc0Z1QjtnQkFFeEYsT0FBT2Y7WUFDVDs7O1dBMUNJUjtFQUFrQ3dCLGFBQWE7QUE2Q3JERyxPQUFPQyxNQUFNLENBQUNDLGtCQUF5QixFQUFFO0lBQ3ZDN0IsMkJBQUFBO0FBQ0Y7SUFFQSxXQUFlQTtBQUVmLFNBQVNpQix1Q0FBdUNQLGdCQUFnQjtJQUM5RCxJQUFNb0IsWUFBWXBCLGtCQUNacUIsYUFBYUMsSUFBQUEsd0JBQWEsRUFBQ0YsWUFDM0JHLG1CQUFtQkYsV0FBV0csbUJBQW1CLElBQ2pEbEIscUJBQXFCaUIsa0JBQW1CLEdBQUc7SUFFakQsT0FBT2pCO0FBQ1Q7QUFFQSxTQUFTRyxpREFBaURILGtCQUFrQixFQUFFVCxPQUFPO0lBQ25GLElBQU1XLDZCQUE2QkYsbUJBQW1CbUIsR0FBRyxDQUFDLFNBQUNDO1FBQ3pELElBQU1DLDRCQUE0QlIsa0JBQXlCLENBQUNTLHFCQUFxQixDQUFDRixtQkFBbUI3QjtRQUVyRyxPQUFPOEI7SUFDVDtJQUVBLE9BQU9uQjtBQUNUIn0=