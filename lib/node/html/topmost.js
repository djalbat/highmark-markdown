"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TopmostHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../node/html"));
var _index = /*#__PURE__*/ _interop_require_default(require("../../transform/html/index"));
var _division = /*#__PURE__*/ _interop_require_default(require("../../transform/html/division"));
var _contents = /*#__PURE__*/ _interop_require_default(require("../../transform/html/list/contents"));
var _index1 = /*#__PURE__*/ _interop_require_default(require("../../transform/html/directive/index"));
var _contents1 = /*#__PURE__*/ _interop_require_default(require("../../transform/html/directive/contents"));
var _markdown = require("../../ruleNames/markdown");
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
            key: "mount",
            value: function mount(parentDOMElement, siblingDOMElement, context) {
                this.childNodes.forEach(function(childNode) {
                    siblingDOMElement = childNode.mount(parentDOMElement, siblingDOMElement, context);
                });
                return siblingDOMElement;
            }
        },
        {
            key: "unmount",
            value: function unmount(parentDOMElement) {
                this.childNodes.forEach(function(childNode) {
                    childNode.unmount(parentDOMElement);
                });
            }
        },
        {
            key: "resolve",
            value: function resolve(context) {
                this.paginate(context);
                this.addContents(context);
                this.addIndex(context);
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
            key: "addIndex",
            value: function addIndex(context) {
                var node = this, indexDirectiveHTMLNode = (0, _html1.indexDirectiveHTMLNodeFromNode)(node);
                if (indexDirectiveHTMLNode === null) {
                    return;
                }
                var divisionHTMLNodes = this.getDivisionHTMLNodes(), indexDirectiveHTMLTransform = _index1.default.fromIndexDirectiveHTMLNode(indexDirectiveHTMLNode), indexHTMLTransform = _index.default.fromIndexDirectiveHTMLTransformAndDivisionHTMLNodes(indexDirectiveHTMLTransform, divisionHTMLNodes, context);
                indexHTMLTransform !== null ? indexHTMLTransform.replaceIndexDirectiveHTMLTransform(indexDirectiveHTMLTransform) : indexDirectiveHTMLTransform.remove();
            }
        },
        {
            key: "addContents",
            value: function addContents(context) {
                var node = this, contentsDirectiveHTMLNode = (0, _html1.contentsDirectiveHTMLNodeFromNode)(node);
                if (contentsDirectiveHTMLNode === null) {
                    return;
                }
                var topmostHTMLNode = this, contentsDirectiveHTMLTransform = _contents1.default.fromContentsDirectiveHTMLNode(contentsDirectiveHTMLNode), contentsListHTMLTransform = _contents.default.fromContentsDirectiveHTMLTransformAndTopmostHTMLNode(contentsDirectiveHTMLTransform, topmostHTMLNode, context);
                contentsListHTMLTransform !== null ? contentsListHTMLTransform.replaceContentsDirectiveHTMLTransform(contentsDirectiveHTMLTransform) : contentsDirectiveHTMLTransform.remove();
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
                var ruleName = _markdown.HTML_MARKDOWN_RULE_NAME;
                return ruleName;
            }
        },
        {
            key: "getDivisionHTMLNode",
            value: function getDivisionHTMLNode() {
                var index = 0, divisionHTMLNode = this.getDivisionHTMLNodeAt(index);
                return divisionHTMLNode;
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
        },
        {
            key: "fromChildHTMLNodes",
            value: function fromChildHTMLNodes(childHTMLNodes) {
                return _html.default.fromChildHTMLNodes(TopmostHTMLNode, childHTMLNodes);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvdG9wbW9zdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcbmltcG9ydCBJbmRleEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2luZGV4XCI7XG5pbXBvcnQgRGl2aXNpb25IVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9kaXZpc2lvblwiO1xuaW1wb3J0IENvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2xpc3QvY29udGVudHNcIjtcbmltcG9ydCBJbmRleERpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2RpcmVjdGl2ZS9pbmRleFwiO1xuaW1wb3J0IENvbnRlbnRzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2h0bWwvZGlyZWN0aXZlL2NvbnRlbnRzXCI7XG5cbmltcG9ydCB7IEhUTUxfTUFSS0RPV05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lcy9tYXJrZG93blwiO1xuaW1wb3J0IHsgZGl2aXNpb25IVE1MTm9kZXNGcm9tTm9kZSwgaW5kZXhEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlLCBjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2h0bWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wbW9zdEhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBtb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gY2hpbGROb2RlLm1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzaWJsaW5nRE9NRWxlbWVudDtcbiAgfVxuXG4gIHVubW91bnQocGFyZW50RE9NRWxlbWVudCkge1xuICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNoaWxkTm9kZS51bm1vdW50KHBhcmVudERPTUVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVzb2x2ZShjb250ZXh0KSB7XG4gICAgdGhpcy5wYWdpbmF0ZShjb250ZXh0KTtcblxuICAgIHRoaXMuYWRkQ29udGVudHMoY29udGV4dCk7XG5cbiAgICB0aGlzLmFkZEluZGV4KGNvbnRleHQpO1xuICB9XG5cbiAgcGFnaW5hdGUoY29udGV4dCkge1xuICAgIGxldCBkaXZpc2lvbkhUTUxOb2RlcyxcbiAgICAgICAgZGl2aXNpb25IVE1MVHJhbnNmb3JtcztcblxuICAgIGRpdmlzaW9uSFRNTE5vZGVzID0gdGhpcy5nZXREaXZpc2lvbkhUTUxOb2RlcygpO1xuXG4gICAgZGl2aXNpb25IVE1MVHJhbnNmb3JtcyA9IGRpdmlzaW9uSFRNTFRyYW5zZm9ybXNGcm9tRGl2aXNpb25IVE1MTm9kZXMoZGl2aXNpb25IVE1MTm9kZXMpO1xuXG4gICAgZGl2aXNpb25IVE1MTm9kZXMgPSBbXTtcblxuICAgIGxldCBwYWdlTnVtYmVyO1xuXG4gICAgcGFnZU51bWJlciA9IDE7XG5cbiAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgIHBhZ2VOdW1iZXJcbiAgICB9KTtcblxuICAgIGRpdmlzaW9uSFRNTFRyYW5zZm9ybXMuZm9yRWFjaCgoZGl2aXNpb25IVE1MVHJhbnNmb3JtKSA9PiB7XG4gICAgICBkaXZpc2lvbkhUTUxUcmFuc2Zvcm0ucmVtb3ZlKCk7XG5cbiAgICAgIGRpdmlzaW9uSFRNTFRyYW5zZm9ybS5yZXNvbHZlKGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIGRlbGV0ZSBjb250ZXh0LnBhZ2VOdW1iZXI7XG5cbiAgICBkaXZpc2lvbkhUTUxUcmFuc2Zvcm1zID0gZGl2aXNpb25IVE1MVHJhbnNmb3Jtc0Zyb21EaXZpc2lvbkhUTUxOb2RlcyhkaXZpc2lvbkhUTUxOb2Rlcyk7XG5cbiAgICBjb25zdCB0b3Btb3N0SFRNTE5vZGUgPSB0aGlzOyAvLy9cblxuICAgIGRpdmlzaW9uSFRNTFRyYW5zZm9ybXMuZm9yRWFjaCgoZGl2aXNpb25IVE1MVHJhbnNmb3JtKSA9PiB7XG4gICAgICBkaXZpc2lvbkhUTUxUcmFuc2Zvcm0uYXBwZW5kVG9Ub3Btb3N0SFRNTE5vZGUodG9wbW9zdEhUTUxOb2RlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEluZGV4KGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGluZGV4RGlyZWN0aXZlSFRNTE5vZGUgPSBpbmRleERpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUobm9kZSk7XG5cbiAgICBpZiAoaW5kZXhEaXJlY3RpdmVIVE1MTm9kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRpdmlzaW9uSFRNTE5vZGVzID0gdGhpcy5nZXREaXZpc2lvbkhUTUxOb2RlcygpLFxuICAgICAgICAgIGluZGV4RGlyZWN0aXZlSFRNTFRyYW5zZm9ybSA9IEluZGV4RGlyZWN0aXZlSFRNTFRyYW5zZm9ybS5mcm9tSW5kZXhEaXJlY3RpdmVIVE1MTm9kZShpbmRleERpcmVjdGl2ZUhUTUxOb2RlKSxcbiAgICAgICAgICBpbmRleEhUTUxUcmFuc2Zvcm0gPSBJbmRleEhUTUxUcmFuc2Zvcm0uZnJvbUluZGV4RGlyZWN0aXZlSFRNTFRyYW5zZm9ybUFuZERpdmlzaW9uSFRNTE5vZGVzKGluZGV4RGlyZWN0aXZlSFRNTFRyYW5zZm9ybSwgZGl2aXNpb25IVE1MTm9kZXMsIGNvbnRleHQpO1xuXG4gICAgKGluZGV4SFRNTFRyYW5zZm9ybSAhPT0gbnVsbCkgP1xuICAgICAgaW5kZXhIVE1MVHJhbnNmb3JtLnJlcGxhY2VJbmRleERpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0oaW5kZXhEaXJlY3RpdmVIVE1MVHJhbnNmb3JtKSA6XG4gICAgICAgIGluZGV4RGlyZWN0aXZlSFRNTFRyYW5zZm9ybS5yZW1vdmUoKTtcbiAgfVxuXG4gIGFkZENvbnRlbnRzKGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGUgPSBjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUobm9kZSk7XG5cbiAgICBpZiAoY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHRvcG1vc3RIVE1MTm9kZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIGNvbnRlbnRzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybSA9IENvbnRlbnRzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybS5mcm9tQ29udGVudHNEaXJlY3RpdmVIVE1MTm9kZShjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlKSxcbiAgICAgICAgICBjb250ZW50c0xpc3RIVE1MVHJhbnNmb3JtID0gQ29udGVudHNMaXN0SFRNTFRyYW5zZm9ybS5mcm9tQ29udGVudHNEaXJlY3RpdmVIVE1MVHJhbnNmb3JtQW5kVG9wbW9zdEhUTUxOb2RlKGNvbnRlbnRzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybSwgdG9wbW9zdEhUTUxOb2RlLCBjb250ZXh0KTtcblxuICAgIChjb250ZW50c0xpc3RIVE1MVHJhbnNmb3JtICE9PSBudWxsKSA/XG4gICAgICBjb250ZW50c0xpc3RIVE1MVHJhbnNmb3JtLnJlcGxhY2VDb250ZW50c0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0oY29udGVudHNEaXJlY3RpdmVIVE1MVHJhbnNmb3JtKSA6XG4gICAgICAgIGNvbnRlbnRzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybS5yZW1vdmUoKTtcbiAgfVxuXG4gIGFkanVzdEluZGVudChpbmRlbnQpIHtcbiAgICByZXR1cm4gaW5kZW50O1xuICB9XG5cbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBIVE1MX01BUktET1dOX1JVTEVfTkFNRTtcblxuICAgIHJldHVybiBydWxlTmFtZTtcbiAgfVxuXG4gIGdldERpdmlzaW9uSFRNTE5vZGUoKSB7XG4gICAgY29uc3QgaW5kZXggPSAwLFxuICAgICAgICAgIGRpdmlzaW9uSFRNTE5vZGUgPSB0aGlzLmdldERpdmlzaW9uSFRNTE5vZGVBdChpbmRleCk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25IVE1MTm9kZTtcbiAgfVxuXG4gIGdldERpdmlzaW9uSFRNTE5vZGVzKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZGl2aXNpb25IVE1MTm9kZXMgPSBkaXZpc2lvbkhUTUxOb2Rlc0Zyb21Ob2RlKG5vZGUpO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uSFRNTE5vZGVzO1xuICB9XG5cbiAgZ2V0RGl2aXNpb25IVE1MTm9kZUF0KGluZGV4KSB7XG4gICAgY29uc3QgZGl2aXNpb25IVE1MTm9kZXMgPSB0aGlzLmdldERpdmlzaW9uSFRNTE5vZGVzKCksXG4gICAgICAgICAgZGl2aXNpb25IVE1MTm9kZSA9IGRpdmlzaW9uSFRNTE5vZGVzW2luZGV4XSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uSFRNTE5vZGU7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiaHRtbFwiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBudWxsO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21Ob3RoaW5nKFRvcG1vc3RIVE1MTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbUNoaWxkSFRNTE5vZGVzKGNoaWxkSFRNTE5vZGVzKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tQ2hpbGRIVE1MTm9kZXMoVG9wbW9zdEhUTUxOb2RlLCBjaGlsZEhUTUxOb2Rlcyk7IH1cbn1cblxuZnVuY3Rpb24gZGl2aXNpb25IVE1MVHJhbnNmb3Jtc0Zyb21EaXZpc2lvbkhUTUxOb2RlcyhkaXZpc2lvbkhUTUxOb2Rlcykge1xuICBjb25zdCBkaXZpc2lvbkhUTUxUcmFuc2Zvcm1zID0gZGl2aXNpb25IVE1MTm9kZXMubWFwKChkaXZpc2lvbkhUTUxOb2RlKSA9PiB7XG4gICAgY29uc3QgZGl2aXNpb25IVE1MVHJhbnNmb3JtID0gRGl2aXNpb25IVE1MVHJhbnNmb3JtLmZyb21EaXZpc2lvbkhUTUxOb2RlKGRpdmlzaW9uSFRNTE5vZGUpO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uSFRNTFRyYW5zZm9ybTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRpdmlzaW9uSFRNTFRyYW5zZm9ybXM7XG59XG4iXSwibmFtZXMiOlsiVG9wbW9zdEhUTUxOb2RlIiwibW91bnQiLCJwYXJlbnRET01FbGVtZW50Iiwic2libGluZ0RPTUVsZW1lbnQiLCJjb250ZXh0IiwiY2hpbGROb2RlcyIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJ1bm1vdW50IiwicmVzb2x2ZSIsInBhZ2luYXRlIiwiYWRkQ29udGVudHMiLCJhZGRJbmRleCIsImRpdmlzaW9uSFRNTE5vZGVzIiwiZGl2aXNpb25IVE1MVHJhbnNmb3JtcyIsImdldERpdmlzaW9uSFRNTE5vZGVzIiwiZGl2aXNpb25IVE1MVHJhbnNmb3Jtc0Zyb21EaXZpc2lvbkhUTUxOb2RlcyIsInBhZ2VOdW1iZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJkaXZpc2lvbkhUTUxUcmFuc2Zvcm0iLCJyZW1vdmUiLCJ0b3Btb3N0SFRNTE5vZGUiLCJhcHBlbmRUb1RvcG1vc3RIVE1MTm9kZSIsIm5vZGUiLCJpbmRleERpcmVjdGl2ZUhUTUxOb2RlIiwiaW5kZXhEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlIiwiaW5kZXhEaXJlY3RpdmVIVE1MVHJhbnNmb3JtIiwiSW5kZXhEaXJlY3RpdmVIVE1MVHJhbnNmb3JtIiwiZnJvbUluZGV4RGlyZWN0aXZlSFRNTE5vZGUiLCJpbmRleEhUTUxUcmFuc2Zvcm0iLCJJbmRleEhUTUxUcmFuc2Zvcm0iLCJmcm9tSW5kZXhEaXJlY3RpdmVIVE1MVHJhbnNmb3JtQW5kRGl2aXNpb25IVE1MTm9kZXMiLCJyZXBsYWNlSW5kZXhEaXJlY3RpdmVIVE1MVHJhbnNmb3JtIiwiY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZSIsImNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZSIsImNvbnRlbnRzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybSIsIkNvbnRlbnRzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybSIsImZyb21Db250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlIiwiY29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSIsIkNvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0iLCJmcm9tQ29udGVudHNEaXJlY3RpdmVIVE1MVHJhbnNmb3JtQW5kVG9wbW9zdEhUTUxOb2RlIiwicmVwbGFjZUNvbnRlbnRzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybSIsImFkanVzdEluZGVudCIsImluZGVudCIsImdldFJ1bGVOYW1lIiwicnVsZU5hbWUiLCJIVE1MX01BUktET1dOX1JVTEVfTkFNRSIsImdldERpdmlzaW9uSFRNTE5vZGUiLCJpbmRleCIsImRpdmlzaW9uSFRNTE5vZGUiLCJnZXREaXZpc2lvbkhUTUxOb2RlQXQiLCJkaXZpc2lvbkhUTUxOb2Rlc0Zyb21Ob2RlIiwiZnJvbU5vdGhpbmciLCJIVE1MTm9kZSIsImZyb21DaGlsZEhUTUxOb2RlcyIsImNoaWxkSFRNTE5vZGVzIiwidGFnTmFtZSIsImNsYXNzTmFtZSIsIm1hcCIsIkRpdmlzaW9uSFRNTFRyYW5zZm9ybSIsImZyb21EaXZpc2lvbkhUTUxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVlxQkE7OzsyREFWQTs0REFDVTsrREFDRzsrREFDSTs2REFDRTtn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