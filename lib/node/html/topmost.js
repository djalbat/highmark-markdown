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
                    divisionHTMLTransform.paginate(divisionHTMLNodes, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvdG9wbW9zdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcbmltcG9ydCBJbmRleEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2luZGV4XCI7XG5pbXBvcnQgRGl2aXNpb25IVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9kaXZpc2lvblwiO1xuaW1wb3J0IENvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2xpc3QvY29udGVudHNcIjtcblxuaW1wb3J0IHsgSFRNTF9NQVJLRE9XTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzL21hcmtkb3duXCI7XG5pbXBvcnQgeyBkaXZpc2lvbkhUTUxOb2Rlc0Zyb21Ob2RlLCBpbmRleERpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUsIGNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvaHRtbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3Btb3N0SFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIG1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KSB7XG4gICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBjaGlsZE5vZGUubW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNpYmxpbmdET01FbGVtZW50O1xuICB9XG5cbiAgdW5tb3VudChwYXJlbnRET01FbGVtZW50KSB7XG4gICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY2hpbGROb2RlLnVubW91bnQocGFyZW50RE9NRWxlbWVudCk7XG4gICAgfSk7XG4gIH1cblxuICByZXNvbHZlKGNvbnRleHQpIHtcbiAgICB0aGlzLnBhZ2luYXRlKGNvbnRleHQpO1xuXG4gICAgdGhpcy5hZGRDb250ZW50cyhjb250ZXh0KTtcblxuICAgIHRoaXMuYWRkSW5kZXgoY29udGV4dCk7XG4gIH1cblxuICBwYWdpbmF0ZShjb250ZXh0KSB7XG4gICAgbGV0IGRpdmlzaW9uSFRNTE5vZGVzLFxuICAgICAgICBkaXZpc2lvbkhUTUxUcmFuc2Zvcm1zO1xuXG4gICAgZGl2aXNpb25IVE1MTm9kZXMgPSB0aGlzLmdldERpdmlzaW9uSFRNTE5vZGVzKCk7XG5cbiAgICBkaXZpc2lvbkhUTUxUcmFuc2Zvcm1zID0gZGl2aXNpb25IVE1MVHJhbnNmb3Jtc0Zyb21EaXZpc2lvbkhUTUxOb2RlcyhkaXZpc2lvbkhUTUxOb2Rlcyk7XG5cbiAgICBkaXZpc2lvbkhUTUxOb2RlcyA9IFtdO1xuXG4gICAgbGV0IHBhZ2VOdW1iZXI7XG5cbiAgICBwYWdlTnVtYmVyID0gMTtcblxuICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgcGFnZU51bWJlclxuICAgIH0pO1xuXG4gICAgZGl2aXNpb25IVE1MVHJhbnNmb3Jtcy5mb3JFYWNoKChkaXZpc2lvbkhUTUxUcmFuc2Zvcm0pID0+IHtcbiAgICAgIGRpdmlzaW9uSFRNTFRyYW5zZm9ybS5yZW1vdmUoKTtcblxuICAgICAgZGl2aXNpb25IVE1MVHJhbnNmb3JtLnBhZ2luYXRlKGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIGRlbGV0ZSBjb250ZXh0LnBhZ2VOdW1iZXI7XG5cbiAgICBkaXZpc2lvbkhUTUxUcmFuc2Zvcm1zID0gZGl2aXNpb25IVE1MVHJhbnNmb3Jtc0Zyb21EaXZpc2lvbkhUTUxOb2RlcyhkaXZpc2lvbkhUTUxOb2Rlcyk7XG5cbiAgICBjb25zdCB0b3Btb3N0SFRNTE5vZGUgPSB0aGlzOyAvLy9cblxuICAgIGRpdmlzaW9uSFRNTFRyYW5zZm9ybXMuZm9yRWFjaCgoZGl2aXNpb25IVE1MVHJhbnNmb3JtKSA9PiB7XG4gICAgICBkaXZpc2lvbkhUTUxUcmFuc2Zvcm0uYXBwZW5kVG9Ub3Btb3N0SFRNTE5vZGUodG9wbW9zdEhUTUxOb2RlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEluZGV4KGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGluZGV4RGlyZWN0aXZlSFRNTE5vZGUgPSBpbmRleERpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUobm9kZSk7XG5cbiAgICBpZiAoaW5kZXhEaXJlY3RpdmVIVE1MTm9kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRpdmlzaW9uSFRNTE5vZGVzID0gdGhpcy5nZXREaXZpc2lvbkhUTUxOb2RlcygpLFxuICAgICAgICAgIGluZGV4SFRNTFRyYW5zZm9ybSA9IEluZGV4SFRNTFRyYW5zZm9ybS5mcm9tSW5kZXhEaXJlY3RpdmVIVE1MTm9kZUFuZERpdmlzaW9uSFRNTE5vZGVzKGluZGV4RGlyZWN0aXZlSFRNTE5vZGUsIGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KTtcblxuICAgIGlmIChpbmRleEhUTUxUcmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgICAgIGluZGV4SFRNTFRyYW5zZm9ybS5hZGRBZnRlckluZGV4RGlyZWN0aXZlSFRNTE5vZGUoaW5kZXhEaXJlY3RpdmVIVE1MTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgYWRkQ29udGVudHMoY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZSA9IGNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZShub2RlKTtcblxuICAgIGlmIChjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdG9wbW9zdEhUTUxOb2RlID0gdGhpcywgLy8vXG4gICAgICAgICAgY29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSA9IENvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0uZnJvbUNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGVBbmRUb3Btb3N0SFRNTE5vZGUoY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZSwgdG9wbW9zdEhUTUxOb2RlLCBjb250ZXh0KTtcblxuICAgIGlmIChjb250ZW50c0xpc3RIVE1MVHJhbnNmb3JtICE9PSBudWxsKSB7XG4gICAgICBjb250ZW50c0xpc3RIVE1MVHJhbnNmb3JtLmFkZEFmdGVyQ29udGVudHNEaXJlY3RpdmVIVE1MTm9kZShjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlKTtcbiAgICB9XG4gIH1cblxuICBhZGp1c3RJbmRlbnQoaW5kZW50KSB7XG4gICAgcmV0dXJuIGluZGVudDtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gSFRNTF9NQVJLRE9XTl9SVUxFX05BTUU7XG5cbiAgICByZXR1cm4gcnVsZU5hbWU7XG4gIH1cblxuICBnZXREaXZpc2lvbkhUTUxOb2RlKCkge1xuICAgIGNvbnN0IGluZGV4ID0gMCxcbiAgICAgICAgICBkaXZpc2lvbkhUTUxOb2RlID0gdGhpcy5nZXREaXZpc2lvbkhUTUxOb2RlQXQoaW5kZXgpO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uSFRNTE5vZGU7XG4gIH1cblxuICBnZXREaXZpc2lvbkhUTUxOb2RlcygpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGRpdmlzaW9uSFRNTE5vZGVzID0gZGl2aXNpb25IVE1MTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICAgIHJldHVybiBkaXZpc2lvbkhUTUxOb2RlcztcbiAgfVxuXG4gIGdldERpdmlzaW9uSFRNTE5vZGVBdChpbmRleCkge1xuICAgIGNvbnN0IGRpdmlzaW9uSFRNTE5vZGVzID0gdGhpcy5nZXREaXZpc2lvbkhUTUxOb2RlcygpLFxuICAgICAgICAgIGRpdmlzaW9uSFRNTE5vZGUgPSBkaXZpc2lvbkhUTUxOb2Rlc1tpbmRleF0gfHwgbnVsbDtcblxuICAgIHJldHVybiBkaXZpc2lvbkhUTUxOb2RlO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImh0bWxcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gbnVsbDtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tTm90aGluZyhUb3Btb3N0SFRNTE5vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21DaGlsZEhUTUxOb2RlcyhjaGlsZEhUTUxOb2RlcykgeyByZXR1cm4gSFRNTE5vZGUuZnJvbUNoaWxkSFRNTE5vZGVzKFRvcG1vc3RIVE1MTm9kZSwgY2hpbGRIVE1MTm9kZXMpOyB9XG59XG5cbmZ1bmN0aW9uIGRpdmlzaW9uSFRNTFRyYW5zZm9ybXNGcm9tRGl2aXNpb25IVE1MTm9kZXMoZGl2aXNpb25IVE1MTm9kZXMpIHtcbiAgY29uc3QgZGl2aXNpb25IVE1MVHJhbnNmb3JtcyA9IGRpdmlzaW9uSFRNTE5vZGVzLm1hcCgoZGl2aXNpb25IVE1MTm9kZSkgPT4ge1xuICAgIGNvbnN0IGRpdmlzaW9uSFRNTFRyYW5zZm9ybSA9IERpdmlzaW9uSFRNTFRyYW5zZm9ybS5mcm9tRGl2aXNpb25IVE1MTm9kZShkaXZpc2lvbkhUTUxOb2RlKTtcblxuICAgIHJldHVybiBkaXZpc2lvbkhUTUxUcmFuc2Zvcm07XG4gIH0pO1xuXG4gIHJldHVybiBkaXZpc2lvbkhUTUxUcmFuc2Zvcm1zO1xufVxuIl0sIm5hbWVzIjpbIlRvcG1vc3RIVE1MTm9kZSIsIm1vdW50IiwicGFyZW50RE9NRWxlbWVudCIsInNpYmxpbmdET01FbGVtZW50IiwiY29udGV4dCIsImNoaWxkTm9kZXMiLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwidW5tb3VudCIsInJlc29sdmUiLCJwYWdpbmF0ZSIsImFkZENvbnRlbnRzIiwiYWRkSW5kZXgiLCJkaXZpc2lvbkhUTUxOb2RlcyIsImRpdmlzaW9uSFRNTFRyYW5zZm9ybXMiLCJnZXREaXZpc2lvbkhUTUxOb2RlcyIsImRpdmlzaW9uSFRNTFRyYW5zZm9ybXNGcm9tRGl2aXNpb25IVE1MTm9kZXMiLCJwYWdlTnVtYmVyIiwiT2JqZWN0IiwiYXNzaWduIiwiZGl2aXNpb25IVE1MVHJhbnNmb3JtIiwicmVtb3ZlIiwidG9wbW9zdEhUTUxOb2RlIiwiYXBwZW5kVG9Ub3Btb3N0SFRNTE5vZGUiLCJub2RlIiwiaW5kZXhEaXJlY3RpdmVIVE1MTm9kZSIsImluZGV4RGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZSIsImluZGV4SFRNTFRyYW5zZm9ybSIsIkluZGV4SFRNTFRyYW5zZm9ybSIsImZyb21JbmRleERpcmVjdGl2ZUhUTUxOb2RlQW5kRGl2aXNpb25IVE1MTm9kZXMiLCJhZGRBZnRlckluZGV4RGlyZWN0aXZlSFRNTE5vZGUiLCJjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlIiwiY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlIiwiY29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSIsIkNvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0iLCJmcm9tQ29udGVudHNEaXJlY3RpdmVIVE1MTm9kZUFuZFRvcG1vc3RIVE1MTm9kZSIsImFkZEFmdGVyQ29udGVudHNEaXJlY3RpdmVIVE1MTm9kZSIsImFkanVzdEluZGVudCIsImluZGVudCIsImdldFJ1bGVOYW1lIiwicnVsZU5hbWUiLCJIVE1MX01BUktET1dOX1JVTEVfTkFNRSIsImdldERpdmlzaW9uSFRNTE5vZGUiLCJpbmRleCIsImRpdmlzaW9uSFRNTE5vZGUiLCJnZXREaXZpc2lvbkhUTUxOb2RlQXQiLCJkaXZpc2lvbkhUTUxOb2Rlc0Zyb21Ob2RlIiwiZnJvbU5vdGhpbmciLCJIVE1MTm9kZSIsImZyb21DaGlsZEhUTUxOb2RlcyIsImNoaWxkSFRNTE5vZGVzIiwidGFnTmFtZSIsImNsYXNzTmFtZSIsIm1hcCIsIkRpdmlzaW9uSFRNTFRyYW5zZm9ybSIsImZyb21EaXZpc2lvbkhUTUxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7OzsyREFSQTs0REFDVTsrREFDRzsrREFDSTt3QkFFRTtxQkFDcUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlGLElBQUEsQUFBTUEsZ0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxnQkFBZ0IsRUFBRUMsaUJBQWlCLEVBQUVDLE9BQU87Z0JBQ2hELElBQUksQ0FBQ0MsVUFBVSxDQUFDQyxPQUFPLENBQUMsU0FBQ0M7b0JBQ3ZCSixvQkFBb0JJLFVBQVVOLEtBQUssQ0FBQ0Msa0JBQWtCQyxtQkFBbUJDO2dCQUMzRTtnQkFFQSxPQUFPRDtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFOLGdCQUFnQjtnQkFDdEIsSUFBSSxDQUFDRyxVQUFVLENBQUNDLE9BQU8sQ0FBQyxTQUFDQztvQkFDdkJBLFVBQVVDLE9BQU8sQ0FBQ047Z0JBQ3BCO1lBQ0Y7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUwsT0FBTztnQkFDYixJQUFJLENBQUNNLFFBQVEsQ0FBQ047Z0JBRWQsSUFBSSxDQUFDTyxXQUFXLENBQUNQO2dCQUVqQixJQUFJLENBQUNRLFFBQVEsQ0FBQ1I7WUFDaEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU04sT0FBTztnQkFDZCxJQUFJUyxtQkFDQUM7Z0JBRUpELG9CQUFvQixJQUFJLENBQUNFLG9CQUFvQjtnQkFFN0NELHlCQUF5QkUsNENBQTRDSDtnQkFFckVBLG9CQUFvQixFQUFFO2dCQUV0QixJQUFJSTtnQkFFSkEsYUFBYTtnQkFFYkMsT0FBT0MsTUFBTSxDQUFDZixTQUFTO29CQUNyQmEsWUFBQUE7Z0JBQ0Y7Z0JBRUFILHVCQUF1QlIsT0FBTyxDQUFDLFNBQUNjO29CQUM5QkEsc0JBQXNCQyxNQUFNO29CQUU1QkQsc0JBQXNCVixRQUFRLENBQUNHLG1CQUFtQlQ7Z0JBQ3BEO2dCQUVBLE9BQU9BLFFBQVFhLFVBQVU7Z0JBRXpCSCx5QkFBeUJFLDRDQUE0Q0g7Z0JBRXJFLElBQU1TLGtCQUFrQixJQUFJLEVBQUUsR0FBRztnQkFFakNSLHVCQUF1QlIsT0FBTyxDQUFDLFNBQUNjO29CQUM5QkEsc0JBQXNCRyx1QkFBdUIsQ0FBQ0Q7Z0JBQ2hEO1lBQ0Y7OztZQUVBVixLQUFBQTttQkFBQUEsU0FBQUEsU0FBU1IsT0FBTztnQkFDZCxJQUFNb0IsT0FBTyxJQUFJLEVBQ1hDLHlCQUF5QkMsSUFBQUEscUNBQThCLEVBQUNGO2dCQUU5RCxJQUFJQywyQkFBMkIsTUFBTTtvQkFDbkM7Z0JBQ0Y7Z0JBRUEsSUFBTVosb0JBQW9CLElBQUksQ0FBQ0Usb0JBQW9CLElBQzdDWSxxQkFBcUJDLGNBQWtCLENBQUNDLDhDQUE4QyxDQUFDSix3QkFBd0JaLG1CQUFtQlQ7Z0JBRXhJLElBQUl1Qix1QkFBdUIsTUFBTTtvQkFDL0JBLG1CQUFtQkcsOEJBQThCLENBQUNMO2dCQUNwRDtZQUNGOzs7WUFFQWQsS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVlQLE9BQU87Z0JBQ2pCLElBQU1vQixPQUFPLElBQUksRUFDWE8sNEJBQTRCQyxJQUFBQSx3Q0FBaUMsRUFBQ1I7Z0JBRXBFLElBQUlPLDhCQUE4QixNQUFNO29CQUN0QztnQkFDRjtnQkFFQSxJQUFNVCxrQkFBa0IsSUFBSSxFQUN0QlcsNEJBQTRCQyxpQkFBeUIsQ0FBQ0MsK0NBQStDLENBQUNKLDJCQUEyQlQsaUJBQWlCbEI7Z0JBRXhKLElBQUk2Qiw4QkFBOEIsTUFBTTtvQkFDdENBLDBCQUEwQkcsaUNBQWlDLENBQUNMO2dCQUM5RDtZQUNGOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFDLE1BQU07Z0JBQ2pCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBV0MsaUNBQXVCO2dCQUV4QyxPQUFPRDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFFBQVEsR0FDUkMsbUJBQW1CLElBQUksQ0FBQ0MscUJBQXFCLENBQUNGO2dCQUVwRCxPQUFPQztZQUNUOzs7WUFFQTdCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNUyxPQUFPLElBQUksRUFDWFgsb0JBQW9CaUMsSUFBQUEsZ0NBQXlCLEVBQUN0QjtnQkFFcEQsT0FBT1g7WUFDVDs7O1lBRUFnQyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCRixLQUFLO2dCQUN6QixJQUFNOUIsb0JBQW9CLElBQUksQ0FBQ0Usb0JBQW9CLElBQzdDNkIsbUJBQW1CL0IsaUJBQWlCLENBQUM4QixNQUFNLElBQUk7Z0JBRXJELE9BQU9DO1lBQ1Q7Ozs7WUFNT0csS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9DLGFBQVEsQ0FBQ0QsV0FBVyxDQTdIL0IvQztZQTZIa0Q7OztZQUU5RGlELEtBQUFBO21CQUFQLFNBQU9BLG1CQUFtQkMsY0FBYztnQkFBSSxPQUFPRixhQUFRLENBQUNDLGtCQUFrQixDQS9IM0RqRCxpQkErSDZFa0Q7WUFBaUI7OztXQS9IOUZsRDtFQUF3QmdELGFBQVE7QUF5SG5ELGlCQXpIbUJoRCxpQkF5SFptRCxXQUFVO0FBRWpCLGlCQTNIbUJuRCxpQkEySFpvRCxhQUFZO0FBT3JCLFNBQVNwQyw0Q0FBNENILGlCQUFpQjtJQUNwRSxJQUFNQyx5QkFBeUJELGtCQUFrQndDLEdBQUcsQ0FBQyxTQUFDVDtRQUNwRCxJQUFNeEIsd0JBQXdCa0MsaUJBQXFCLENBQUNDLG9CQUFvQixDQUFDWDtRQUV6RSxPQUFPeEI7SUFDVDtJQUVBLE9BQU9OO0FBQ1QifQ==