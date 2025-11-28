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
        },
        {
            key: "adjustIndent",
            value: function adjustIndent(indent) {
                return indent;
            }
        },
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
                var pageNumber;
                pageNumber = 1;
                Object.assign(context, {
                    pageNumber: pageNumber
                });
                var htmlTransforms = [], topmostHTMLNode = this, divisionHTMLNodes = this.getDivisionHTMLNodes(), divisionHTMLTransforms = divisionHTMLTransformsFromDivisionHTMLNodes(divisionHTMLNodes);
                divisionHTMLTransforms.forEach(function(divisionHTMLTransform) {
                    divisionHTMLTransform.paginate(htmlTransforms, context);
                });
                delete context.pageNumber;
                divisionHTMLTransforms.forEach(function(divisionHTMLTransform) {
                    divisionHTMLTransform.remove();
                });
                htmlTransforms.forEach(function(htmlTransform) {
                    htmlTransform.appendToTopmostHTMLNode(topmostHTMLNode);
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
                var divisionHTMLNodes = this.getDivisionHTMLNodes(), indexHTMLTransform = _index.default.fromIndexDirectiveHTMLNodeAndDivisionHTMLNodes(indexDirectiveHTMLNode, divisionHTMLNodes, context);
                if (indexHTMLTransform !== null) {
                    indexHTMLTransform.addAfterIndexDirectiveHTMLNode(indexDirectiveHTMLNode);
                }
            }
        },
        {
            key: "addContents",
            value: function addContents(context) {
                var node = this, contentsDirectiveHTMLNode = (0, _html1.contentsDirectiveHTMLNodeFromNode)(node);
                if (contentsDirectiveHTMLNode === null) {
                    return;
                }
                var topmostHTMLNode = this, contentsListHTMLTransform = _contents.default.fromContentsDirectiveHTMLNodeAndTopmostHTMLNode(contentsDirectiveHTMLNode, topmostHTMLNode, context);
                if (contentsListHTMLTransform !== null) {
                    contentsListHTMLTransform.addAfterContentsDirectiveHTMLNode(contentsDirectiveHTMLNode);
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvdG9wbW9zdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcbmltcG9ydCBJbmRleEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2luZGV4XCI7XG5pbXBvcnQgRGl2aXNpb25IVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9kaXZpc2lvblwiO1xuaW1wb3J0IENvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2xpc3QvY29udGVudHNcIjtcblxuaW1wb3J0IHsgSFRNTF9NQVJLRE9XTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzL21hcmtkb3duXCI7XG5pbXBvcnQgeyBkaXZpc2lvbkhUTUxOb2Rlc0Zyb21Ob2RlLCBpbmRleERpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUsIGNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvaHRtbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3Btb3N0SFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gSFRNTF9NQVJLRE9XTl9SVUxFX05BTUU7XG5cbiAgICByZXR1cm4gcnVsZU5hbWU7XG4gIH1cblxuICBnZXREaXZpc2lvbkhUTUxOb2RlKCkge1xuICAgIGNvbnN0IGluZGV4ID0gMCxcbiAgICAgICAgICBkaXZpc2lvbkhUTUxOb2RlID0gdGhpcy5nZXREaXZpc2lvbkhUTUxOb2RlQXQoaW5kZXgpO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uSFRNTE5vZGU7XG4gIH1cblxuICBnZXREaXZpc2lvbkhUTUxOb2RlcygpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGRpdmlzaW9uSFRNTE5vZGVzID0gZGl2aXNpb25IVE1MTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICAgIHJldHVybiBkaXZpc2lvbkhUTUxOb2RlcztcbiAgfVxuXG4gIGdldERpdmlzaW9uSFRNTE5vZGVBdChpbmRleCkge1xuICAgIGNvbnN0IGRpdmlzaW9uSFRNTE5vZGVzID0gdGhpcy5nZXREaXZpc2lvbkhUTUxOb2RlcygpLFxuICAgICAgICAgIGRpdmlzaW9uSFRNTE5vZGUgPSBkaXZpc2lvbkhUTUxOb2Rlc1tpbmRleF0gfHwgbnVsbDtcblxuICAgIHJldHVybiBkaXZpc2lvbkhUTUxOb2RlO1xuICB9XG5cbiAgYWRqdXN0SW5kZW50KGluZGVudCkge1xuICAgIHJldHVybiBpbmRlbnQ7XG4gIH1cblxuICBtb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gY2hpbGROb2RlLm1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzaWJsaW5nRE9NRWxlbWVudDtcbiAgfVxuXG4gIHVubW91bnQocGFyZW50RE9NRWxlbWVudCkge1xuICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNoaWxkTm9kZS51bm1vdW50KHBhcmVudERPTUVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVzb2x2ZShjb250ZXh0KSB7XG4gICAgdGhpcy5wYWdpbmF0ZShjb250ZXh0KTtcblxuICAgIHRoaXMuYWRkQ29udGVudHMoY29udGV4dCk7XG5cbiAgICB0aGlzLmFkZEluZGV4KGNvbnRleHQpO1xuICB9XG5cbiAgcGFnaW5hdGUoY29udGV4dCkge1xuICAgIGxldCBwYWdlTnVtYmVyO1xuXG4gICAgcGFnZU51bWJlciA9IDE7XG5cbiAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgIHBhZ2VOdW1iZXJcbiAgICB9KTtcblxuICAgIGNvbnN0IGh0bWxUcmFuc2Zvcm1zID0gW10sXG4gICAgICAgICAgdG9wbW9zdEhUTUxOb2RlID0gdGhpcywgIC8vXG4gICAgICAgICAgZGl2aXNpb25IVE1MTm9kZXMgPSB0aGlzLmdldERpdmlzaW9uSFRNTE5vZGVzKCksXG4gICAgICAgICAgZGl2aXNpb25IVE1MVHJhbnNmb3JtcyA9IGRpdmlzaW9uSFRNTFRyYW5zZm9ybXNGcm9tRGl2aXNpb25IVE1MTm9kZXMoZGl2aXNpb25IVE1MTm9kZXMpO1xuXG4gICAgZGl2aXNpb25IVE1MVHJhbnNmb3Jtcy5mb3JFYWNoKChkaXZpc2lvbkhUTUxUcmFuc2Zvcm0pID0+IHtcbiAgICAgIGRpdmlzaW9uSFRNTFRyYW5zZm9ybS5wYWdpbmF0ZShodG1sVHJhbnNmb3JtcywgY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBkZWxldGUgY29udGV4dC5wYWdlTnVtYmVyO1xuXG4gICAgZGl2aXNpb25IVE1MVHJhbnNmb3Jtcy5mb3JFYWNoKChkaXZpc2lvbkhUTUxUcmFuc2Zvcm0pID0+IHtcbiAgICAgIGRpdmlzaW9uSFRNTFRyYW5zZm9ybS5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgIGh0bWxUcmFuc2Zvcm1zLmZvckVhY2goKGh0bWxUcmFuc2Zvcm0pID0+IHtcbiAgICAgIGh0bWxUcmFuc2Zvcm0uYXBwZW5kVG9Ub3Btb3N0SFRNTE5vZGUodG9wbW9zdEhUTUxOb2RlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEluZGV4KGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGluZGV4RGlyZWN0aXZlSFRNTE5vZGUgPSBpbmRleERpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUobm9kZSk7XG5cbiAgICBpZiAoaW5kZXhEaXJlY3RpdmVIVE1MTm9kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRpdmlzaW9uSFRNTE5vZGVzID0gdGhpcy5nZXREaXZpc2lvbkhUTUxOb2RlcygpLFxuICAgICAgICAgIGluZGV4SFRNTFRyYW5zZm9ybSA9IEluZGV4SFRNTFRyYW5zZm9ybS5mcm9tSW5kZXhEaXJlY3RpdmVIVE1MTm9kZUFuZERpdmlzaW9uSFRNTE5vZGVzKGluZGV4RGlyZWN0aXZlSFRNTE5vZGUsIGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KTtcblxuICAgIGlmIChpbmRleEhUTUxUcmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgICAgIGluZGV4SFRNTFRyYW5zZm9ybS5hZGRBZnRlckluZGV4RGlyZWN0aXZlSFRNTE5vZGUoaW5kZXhEaXJlY3RpdmVIVE1MTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgYWRkQ29udGVudHMoY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZSA9IGNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZShub2RlKTtcblxuICAgIGlmIChjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdG9wbW9zdEhUTUxOb2RlID0gdGhpcywgLy8vXG4gICAgICAgICAgY29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSA9IENvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0uZnJvbUNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGVBbmRUb3Btb3N0SFRNTE5vZGUoY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZSwgdG9wbW9zdEhUTUxOb2RlLCBjb250ZXh0KTtcblxuICAgIGlmIChjb250ZW50c0xpc3RIVE1MVHJhbnNmb3JtICE9PSBudWxsKSB7XG4gICAgICBjb250ZW50c0xpc3RIVE1MVHJhbnNmb3JtLmFkZEFmdGVyQ29udGVudHNEaXJlY3RpdmVIVE1MTm9kZShjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiaHRtbFwiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBudWxsO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21Ob3RoaW5nKFRvcG1vc3RIVE1MTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbUNoaWxkSFRNTE5vZGVzKGNoaWxkSFRNTE5vZGVzKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tQ2hpbGRIVE1MTm9kZXMoVG9wbW9zdEhUTUxOb2RlLCBjaGlsZEhUTUxOb2Rlcyk7IH1cbn1cblxuZnVuY3Rpb24gZGl2aXNpb25IVE1MVHJhbnNmb3Jtc0Zyb21EaXZpc2lvbkhUTUxOb2RlcyhkaXZpc2lvbkhUTUxOb2Rlcykge1xuICBjb25zdCBkaXZpc2lvbkhUTUxUcmFuc2Zvcm1zID0gZGl2aXNpb25IVE1MTm9kZXMubWFwKChkaXZpc2lvbkhUTUxOb2RlKSA9PiB7XG4gICAgY29uc3QgZGl2aXNpb25IVE1MVHJhbnNmb3JtID0gRGl2aXNpb25IVE1MVHJhbnNmb3JtLmZyb21EaXZpc2lvbkhUTUxOb2RlKGRpdmlzaW9uSFRNTE5vZGUpO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uSFRNTFRyYW5zZm9ybTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRpdmlzaW9uSFRNTFRyYW5zZm9ybXM7XG59XG4iXSwibmFtZXMiOlsiVG9wbW9zdEhUTUxOb2RlIiwiZ2V0UnVsZU5hbWUiLCJydWxlTmFtZSIsIkhUTUxfTUFSS0RPV05fUlVMRV9OQU1FIiwiZ2V0RGl2aXNpb25IVE1MTm9kZSIsImluZGV4IiwiZGl2aXNpb25IVE1MTm9kZSIsImdldERpdmlzaW9uSFRNTE5vZGVBdCIsImdldERpdmlzaW9uSFRNTE5vZGVzIiwibm9kZSIsImRpdmlzaW9uSFRNTE5vZGVzIiwiZGl2aXNpb25IVE1MTm9kZXNGcm9tTm9kZSIsImFkanVzdEluZGVudCIsImluZGVudCIsIm1vdW50IiwicGFyZW50RE9NRWxlbWVudCIsInNpYmxpbmdET01FbGVtZW50IiwiY29udGV4dCIsImNoaWxkTm9kZXMiLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwidW5tb3VudCIsInJlc29sdmUiLCJwYWdpbmF0ZSIsImFkZENvbnRlbnRzIiwiYWRkSW5kZXgiLCJwYWdlTnVtYmVyIiwiT2JqZWN0IiwiYXNzaWduIiwiaHRtbFRyYW5zZm9ybXMiLCJ0b3Btb3N0SFRNTE5vZGUiLCJkaXZpc2lvbkhUTUxUcmFuc2Zvcm1zIiwiZGl2aXNpb25IVE1MVHJhbnNmb3Jtc0Zyb21EaXZpc2lvbkhUTUxOb2RlcyIsImRpdmlzaW9uSFRNTFRyYW5zZm9ybSIsInJlbW92ZSIsImh0bWxUcmFuc2Zvcm0iLCJhcHBlbmRUb1RvcG1vc3RIVE1MTm9kZSIsImluZGV4RGlyZWN0aXZlSFRNTE5vZGUiLCJpbmRleERpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUiLCJpbmRleEhUTUxUcmFuc2Zvcm0iLCJJbmRleEhUTUxUcmFuc2Zvcm0iLCJmcm9tSW5kZXhEaXJlY3RpdmVIVE1MTm9kZUFuZERpdmlzaW9uSFRNTE5vZGVzIiwiYWRkQWZ0ZXJJbmRleERpcmVjdGl2ZUhUTUxOb2RlIiwiY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZSIsImNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZSIsImNvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0iLCJDb250ZW50c0xpc3RIVE1MVHJhbnNmb3JtIiwiZnJvbUNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGVBbmRUb3Btb3N0SFRNTE5vZGUiLCJhZGRBZnRlckNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGUiLCJmcm9tTm90aGluZyIsIkhUTUxOb2RlIiwiZnJvbUNoaWxkSFRNTE5vZGVzIiwiY2hpbGRIVE1MTm9kZXMiLCJ0YWdOYW1lIiwiY2xhc3NOYW1lIiwibWFwIiwiRGl2aXNpb25IVE1MVHJhbnNmb3JtIiwiZnJv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