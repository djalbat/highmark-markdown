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
                _get(_get_prototype_of(ContentsListHTMLTransform.prototype), "addAfter", this).call(this, siblingHTMLNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9saXN0L2NvbnRlbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi8uLi90cmFuc2Zvcm0vaHRtbFwiO1xuaW1wb3J0IENvbnRlbnRzTGlzdEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWwvbGlzdC9jb250ZW50c1wiO1xuaW1wb3J0IENvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uLy4uL3RyYW5zZm9ybS9odG1sL2l0ZW0vY29udGVudHNcIjtcblxuaW1wb3J0IHsgbmVzdEhUTUxOb2RlcyB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvY29udGVudHNcIjtcbmltcG9ydCB7IGhlYWRpbmdIVE1MTm9kZXNGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvaHRtbFwiO1xuXG5jb25zdCB7IGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGlzTGVzc1RoYW4gfSA9IG5vZGVVdGlsaXRpZXM7XG5cbmNsYXNzIENvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0gZXh0ZW5kcyBIVE1MVHJhbnNmb3JtIHtcbiAgYWRkQWZ0ZXJDb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlKGNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGUpIHtcbiAgICBjb25zdCBzaWJsaW5nSFRNTE5vZGUgPSBjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlOyAgLy8vXG5cbiAgICBzdXBlci5hZGRBZnRlcihzaWJsaW5nSFRNTE5vZGUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlQW5kVG9wbW9zdEhUTUxOb2RlKGNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGUsIHRvcG1vc3RIVE1MTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBjb250ZW50c0xpc3RIVE1MVHJhbnNmb3JtID0gbnVsbDtcblxuICAgIGNvbnN0IG5vZGUgPSB0b3Btb3N0SFRNTE5vZGUsIC8vL1xuICAgICAgICAgIGhlYWRpbmdIVE1MTm9kZXMgPSBoZWFkaW5nSFRNTE5vZGVzRnJvbU5vZGUobm9kZSk7XG5cbiAgICBmaWx0ZXIoaGVhZGluZ0hUTUxOb2RlcywgKGhlYWRpbmdIVE1MTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZUxlc3NUaGFuSGVhZGluZ0hUTUxOb2RlID0gaXNMZXNzVGhhbihjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlLCBoZWFkaW5nSFRNTE5vZGUpO1xuXG4gICAgICBpZiAoY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZUxlc3NUaGFuSGVhZGluZ0hUTUxOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgaGVhZGluZ0hUTUxOb2Rlc0xlbmd0aCA9IGhlYWRpbmdIVE1MTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKGhlYWRpbmdIVE1MTm9kZXNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBuZXN0ZWRIZWFkaW5nTm9kZXMgPSBuZXN0ZWRIZWFkaW5nTm9kZXNGcm9tSGVhZGluZ0hUTUxOb2RlcyhoZWFkaW5nSFRNTE5vZGVzKSxcbiAgICAgICAgICAgIGNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm1zID0gY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXNGcm9tTmVzdGVkSGVhZGluZ05vZGVzKG5lc3RlZEhlYWRpbmdOb2RlcywgY29udGV4dCksXG4gICAgICAgICAgICBjb250ZW50c0xpc3RIVE1MTm9kZSA9IENvbnRlbnRzTGlzdEhUTUxOb2RlLmZyb21Db250ZW50c0l0ZW1IVE1MVHJhbnNmb3Jtcyhjb250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtcyksXG4gICAgICAgICAgICBodG1sTm9kZSA9IGNvbnRlbnRzTGlzdEhUTUxOb2RlOyAgLy8vXG5cbiAgICAgIGNvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0gPSBIVE1MVHJhbnNmb3JtLmZyb21IVE1MTm9kZShDb250ZW50c0xpc3RIVE1MVHJhbnNmb3JtLCBodG1sTm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbU5lc3RlZEhlYWRpbmdOb2RlcyhuZXN0ZWRIZWFkaW5nTm9kZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtcyA9IGNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm1zRnJvbU5lc3RlZEhlYWRpbmdOb2RlcyhuZXN0ZWRIZWFkaW5nTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgIGNvbnRlbnRzTGlzdEhUTUxOb2RlID0gQ29udGVudHNMaXN0SFRNTE5vZGUuZnJvbUNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm1zKGNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm1zKSxcbiAgICAgICAgICBodG1sTm9kZSA9IGNvbnRlbnRzTGlzdEhUTUxOb2RlLCAgLy8vXG4gICAgICAgICAgY29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSA9IEhUTUxUcmFuc2Zvcm0uZnJvbUhUTUxOb2RlKENvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0sIGh0bWxOb2RlKTtcblxuICAgIHJldHVybiBjb250ZW50c0xpc3RIVE1MVHJhbnNmb3JtO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQ29udGVudHNJdGVtSFRNTFRyYW5zZm9ybSwgeyAgLy8vXG4gIENvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50c0xpc3RIVE1MVHJhbnNmb3JtO1xuXG5mdW5jdGlvbiBuZXN0ZWRIZWFkaW5nTm9kZXNGcm9tSGVhZGluZ0hUTUxOb2RlcyhoZWFkaW5nSFRNTE5vZGVzKSB7XG4gIGNvbnN0IGh0bWxOb2RlcyA9IGhlYWRpbmdIVE1MTm9kZXMsIC8vL1xuICAgICAgICBuZXN0ZWROb2RlID0gbmVzdEhUTUxOb2RlcyhodG1sTm9kZXMpLFxuICAgICAgICBjaGlsZE5lc3RlZE5vZGVzID0gbmVzdGVkTm9kZS5nZXRDaGlsZE5lc3RlZE5vZGVzKCksXG4gICAgICAgIG5lc3RlZEhlYWRpbmdOb2RlcyA9IGNoaWxkTmVzdGVkTm9kZXM7ICAvLy9cblxuICByZXR1cm4gbmVzdGVkSGVhZGluZ05vZGVzO1xufVxuXG5mdW5jdGlvbiBjb250ZW50c0l0ZW1IVE1MVHJhbnNmb3Jtc0Zyb21OZXN0ZWRIZWFkaW5nTm9kZXMobmVzdGVkSGVhZGluZ05vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm1zID0gbmVzdGVkSGVhZGluZ05vZGVzLm1hcCgobmVzdGVkSGVhZGluZ05vZGUpID0+IHtcbiAgICBjb25zdCBjb250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtID0gQ29udGVudHNJdGVtSFRNTFRyYW5zZm9ybS5mcm9tTmVzdGVkSGVhZGluZ05vZGUobmVzdGVkSGVhZGluZ05vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm07XG4gIH0pO1xuXG4gIHJldHVybiBjb250ZW50c0l0ZW1IVE1MVHJhbnNmb3Jtcztcbn1cbiJdLCJuYW1lcyI6WyJmaWx0ZXIiLCJhcnJheVV0aWxpdGllcyIsImlzTGVzc1RoYW4iLCJub2RlVXRpbGl0aWVzIiwiQ29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSIsImFkZEFmdGVyQ29udGVudHNEaXJlY3RpdmVIVE1MTm9kZSIsImNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGUiLCJzaWJsaW5nSFRNTE5vZGUiLCJhZGRBZnRlciIsImZyb21Db250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlQW5kVG9wbW9zdEhUTUxOb2RlIiwidG9wbW9zdEhUTUxOb2RlIiwiY29udGV4dCIsImNvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0iLCJub2RlIiwiaGVhZGluZ0hUTUxOb2RlcyIsImhlYWRpbmdIVE1MTm9kZXNGcm9tTm9kZSIsImhlYWRpbmdIVE1MTm9kZSIsImNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGVMZXNzVGhhbkhlYWRpbmdIVE1MTm9kZSIsImhlYWRpbmdIVE1MTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJuZXN0ZWRIZWFkaW5nTm9kZXMiLCJuZXN0ZWRIZWFkaW5nTm9kZXNGcm9tSGVhZGluZ0hUTUxOb2RlcyIsImNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm1zIiwiY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXNGcm9tTmVzdGVkSGVhZGluZ05vZGVzIiwiY29udGVudHNMaXN0SFRNTE5vZGUiLCJDb250ZW50c0xpc3RIVE1MTm9kZSIsImZyb21Db250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtcyIsImh0bWxOb2RlIiwiSFRNTFRyYW5zZm9ybSIsImZyb21IVE1MTm9kZSIsImZyb21OZXN0ZWRIZWFkaW5nTm9kZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJDb250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtIiwiaHRtbE5vZGVzIiwibmVzdGVkTm9kZSIsIm5lc3RIVE1MTm9kZXMiLCJjaGlsZE5lc3RlZE5vZGVzIiwiZ2V0Q2hpbGROZXN0ZWROb2RlcyIsIm1hcCIsIm5lc3RlZEhlYWRpbmdOb2RlIiwiY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybSIsImZyb21OZXN0ZWRIZWFkaW5nTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZ0VBOzs7ZUFBQTs7O3dCQTlEOEI7eUJBQ0M7MkRBRUw7K0RBQ087Z0VBQ0s7eUJBRVI7cUJBQ1c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QyxJQUFNLEFBQUVBLFNBQVdDLHlCQUFjLENBQXpCRCxRQUNGLEFBQUVFLGFBQWVDLHVCQUFhLENBQTVCRDtBQUVSLElBQUEsQUFBTUUsMENBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLGtDQUFrQ0MseUJBQXlCO2dCQUN6RCxJQUFNQyxrQkFBa0JELDJCQUE0QixHQUFHO2dCQUV2RCx1QkFKRUYsc0NBSUlJLFlBQU4sSUFBSyxhQUFVRDtZQUNqQjs7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxnREFBZ0RILHlCQUF5QixFQUFFSSxlQUFlLEVBQUVDLE9BQU87Z0JBQ3hHLElBQUlDLDRCQUE0QjtnQkFFaEMsSUFBTUMsT0FBT0gsaUJBQ1BJLG1CQUFtQkMsSUFBQUEsK0JBQXdCLEVBQUNGO2dCQUVsRGIsT0FBT2Msa0JBQWtCLFNBQUNFO29CQUN4QixJQUFNQyxtREFBbURmLFdBQVdJLDJCQUEyQlU7b0JBRS9GLElBQUlDLGtEQUFrRDt3QkFDcEQsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxJQUFNQyx5QkFBeUJKLGlCQUFpQkssTUFBTTtnQkFFdEQsSUFBSUQseUJBQXlCLEdBQUc7b0JBQzlCLElBQU1FLHFCQUFxQkMsdUNBQXVDUCxtQkFDNURRLDZCQUE2QkMsaURBQWlESCxvQkFBb0JULFVBQ2xHYSx1QkFBdUJDLGlCQUFvQixDQUFDQyw4QkFBOEIsQ0FBQ0osNkJBQzNFSyxXQUFXSCxzQkFBdUIsR0FBRztvQkFFM0NaLDRCQUE0QmdCLGFBQWEsQ0FBQ0MsWUFBWSxDQTdCdER6QiwyQkE2QmtGdUI7Z0JBQ3BGO2dCQUVBLE9BQU9mO1lBQ1Q7OztZQUVPa0IsS0FBQUE7bUJBQVAsU0FBT0EsdUJBQXVCVixrQkFBa0IsRUFBRVQsT0FBTztnQkFDdkQsSUFBTVcsNkJBQTZCQyxpREFBaURILG9CQUFvQlQsVUFDbEdhLHVCQUF1QkMsaUJBQW9CLENBQUNDLDhCQUE4QixDQUFDSiw2QkFDM0VLLFdBQVdILHNCQUNYWiw0QkFBNEJnQixhQUFhLENBQUNDLFlBQVksQ0F2QzFEekIsMkJBdUNzRnVCO2dCQUV4RixPQUFPZjtZQUNUOzs7V0ExQ0lSO0VBQWtDd0IsYUFBYTtBQTZDckRHLE9BQU9DLE1BQU0sQ0FBQ0Msa0JBQXlCLEVBQUU7SUFDdkM3QiwyQkFBQUE7QUFDRjtJQUVBLFdBQWVBO0FBRWYsU0FBU2lCLHVDQUF1Q1AsZ0JBQWdCO0lBQzlELElBQU1vQixZQUFZcEIsa0JBQ1pxQixhQUFhQyxJQUFBQSx3QkFBYSxFQUFDRixZQUMzQkcsbUJBQW1CRixXQUFXRyxtQkFBbUIsSUFDakRsQixxQkFBcUJpQixrQkFBbUIsR0FBRztJQUVqRCxPQUFPakI7QUFDVDtBQUVBLFNBQVNHLGlEQUFpREgsa0JBQWtCLEVBQUVULE9BQU87SUFDbkYsSUFBTVcsNkJBQTZCRixtQkFBbUJtQixHQUFHLENBQUMsU0FBQ0M7UUFDekQsSUFBTUMsNEJBQTRCUixrQkFBeUIsQ0FBQ1MscUJBQXFCLENBQUNGLG1CQUFtQjdCO1FBRXJHLE9BQU84QjtJQUNUO0lBRUEsT0FBT25CO0FBQ1QifQ==