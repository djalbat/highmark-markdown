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
                    childNode.mount(parentDOMElement, siblingDOMElement, context);
                });
            }
        },
        {
            key: "unmount",
            value: function unmount(parentDOMElement, context) {
                this.childNodes.forEach(function(childNode) {
                    childNode.unmount(parentDOMElement, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvdG9wbW9zdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcbmltcG9ydCBJbmRleEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2luZGV4XCI7XG5pbXBvcnQgRGl2aXNpb25IVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9kaXZpc2lvblwiO1xuaW1wb3J0IENvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2xpc3QvY29udGVudHNcIjtcbmltcG9ydCBJbmRleERpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2RpcmVjdGl2ZS9pbmRleFwiO1xuaW1wb3J0IENvbnRlbnRzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2h0bWwvZGlyZWN0aXZlL2NvbnRlbnRzXCI7XG5cbmltcG9ydCB7IEhUTUxfTUFSS0RPV05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lcy9tYXJrZG93blwiO1xuaW1wb3J0IHsgZGl2aXNpb25IVE1MTm9kZXNGcm9tTm9kZSwgaW5kZXhEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlLCBjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2h0bWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wbW9zdEhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBtb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNoaWxkTm9kZS5tb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCk7XG4gICAgfSk7XG4gIH1cblxuICB1bm1vdW50KHBhcmVudERPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjaGlsZE5vZGUudW5tb3VudChwYXJlbnRET01FbGVtZW50LCBjb250ZXh0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc29sdmUoY29udGV4dCkge1xuICAgIHRoaXMucGFnaW5hdGUoY29udGV4dCk7XG5cbiAgICB0aGlzLmFkZENvbnRlbnRzKGNvbnRleHQpO1xuXG4gICAgdGhpcy5hZGRJbmRleChjb250ZXh0KTtcbiAgfVxuXG4gIHBhZ2luYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgZGl2aXNpb25IVE1MTm9kZXMsXG4gICAgICAgIGRpdmlzaW9uSFRNTFRyYW5zZm9ybXM7XG5cbiAgICBkaXZpc2lvbkhUTUxOb2RlcyA9IHRoaXMuZ2V0RGl2aXNpb25IVE1MTm9kZXMoKTtcblxuICAgIGRpdmlzaW9uSFRNTFRyYW5zZm9ybXMgPSBkaXZpc2lvbkhUTUxUcmFuc2Zvcm1zRnJvbURpdmlzaW9uSFRNTE5vZGVzKGRpdmlzaW9uSFRNTE5vZGVzKTtcblxuICAgIGRpdmlzaW9uSFRNTE5vZGVzID0gW107XG5cbiAgICBsZXQgcGFnZU51bWJlcjtcblxuICAgIHBhZ2VOdW1iZXIgPSAxO1xuXG4gICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICBwYWdlTnVtYmVyXG4gICAgfSk7XG5cbiAgICBkaXZpc2lvbkhUTUxUcmFuc2Zvcm1zLmZvckVhY2goKGRpdmlzaW9uSFRNTFRyYW5zZm9ybSkgPT4ge1xuICAgICAgZGl2aXNpb25IVE1MVHJhbnNmb3JtLnJlbW92ZSgpO1xuXG4gICAgICBkaXZpc2lvbkhUTUxUcmFuc2Zvcm0ucmVzb2x2ZShkaXZpc2lvbkhUTUxOb2RlcywgY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBkZWxldGUgY29udGV4dC5wYWdlTnVtYmVyO1xuXG4gICAgZGl2aXNpb25IVE1MVHJhbnNmb3JtcyA9IGRpdmlzaW9uSFRNTFRyYW5zZm9ybXNGcm9tRGl2aXNpb25IVE1MTm9kZXMoZGl2aXNpb25IVE1MTm9kZXMpO1xuXG4gICAgY29uc3QgdG9wbW9zdEhUTUxOb2RlID0gdGhpczsgLy8vXG5cbiAgICBkaXZpc2lvbkhUTUxUcmFuc2Zvcm1zLmZvckVhY2goKGRpdmlzaW9uSFRNTFRyYW5zZm9ybSkgPT4ge1xuICAgICAgZGl2aXNpb25IVE1MVHJhbnNmb3JtLmFwcGVuZFRvVG9wbW9zdEhUTUxOb2RlKHRvcG1vc3RIVE1MTm9kZSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRJbmRleChjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBpbmRleERpcmVjdGl2ZUhUTUxOb2RlID0gaW5kZXhEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlKG5vZGUpO1xuXG4gICAgaWYgKGluZGV4RGlyZWN0aXZlSFRNTE5vZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkaXZpc2lvbkhUTUxOb2RlcyA9IHRoaXMuZ2V0RGl2aXNpb25IVE1MTm9kZXMoKSxcbiAgICAgICAgICBpbmRleERpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0gPSBJbmRleERpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0uZnJvbUluZGV4RGlyZWN0aXZlSFRNTE5vZGUoaW5kZXhEaXJlY3RpdmVIVE1MTm9kZSksXG4gICAgICAgICAgaW5kZXhIVE1MVHJhbnNmb3JtID0gSW5kZXhIVE1MVHJhbnNmb3JtLmZyb21JbmRleERpcmVjdGl2ZUhUTUxUcmFuc2Zvcm1BbmREaXZpc2lvbkhUTUxOb2RlcyhpbmRleERpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0sIGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KTtcblxuICAgIChpbmRleEhUTUxUcmFuc2Zvcm0gIT09IG51bGwpID9cbiAgICAgIGluZGV4SFRNTFRyYW5zZm9ybS5yZXBsYWNlSW5kZXhEaXJlY3RpdmVIVE1MVHJhbnNmb3JtKGluZGV4RGlyZWN0aXZlSFRNTFRyYW5zZm9ybSkgOlxuICAgICAgICBpbmRleERpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0ucmVtb3ZlKCk7XG4gIH1cblxuICBhZGRDb250ZW50cyhjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlID0gY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlKG5vZGUpO1xuXG4gICAgaWYgKGNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0b3Btb3N0SFRNTE5vZGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICBjb250ZW50c0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0gPSBDb250ZW50c0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0uZnJvbUNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGUoY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZSksXG4gICAgICAgICAgY29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSA9IENvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0uZnJvbUNvbnRlbnRzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybUFuZFRvcG1vc3RIVE1MTm9kZShjb250ZW50c0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0sIHRvcG1vc3RIVE1MTm9kZSwgY29udGV4dCk7XG5cbiAgICAoY29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSAhPT0gbnVsbCkgP1xuICAgICAgY29udGVudHNMaXN0SFRNTFRyYW5zZm9ybS5yZXBsYWNlQ29udGVudHNEaXJlY3RpdmVIVE1MVHJhbnNmb3JtKGNvbnRlbnRzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybSkgOlxuICAgICAgICBjb250ZW50c0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0ucmVtb3ZlKCk7XG4gIH1cblxuICBhZGp1c3RJbmRlbnQoaW5kZW50KSB7XG4gICAgcmV0dXJuIGluZGVudDtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gSFRNTF9NQVJLRE9XTl9SVUxFX05BTUU7XG5cbiAgICByZXR1cm4gcnVsZU5hbWU7XG4gIH1cblxuICBnZXREaXZpc2lvbkhUTUxOb2RlcygpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGRpdmlzaW9uSFRNTE5vZGVzID0gZGl2aXNpb25IVE1MTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICAgIHJldHVybiBkaXZpc2lvbkhUTUxOb2RlcztcbiAgfVxuXG4gIGdldERpdmlzaW9uSFRNTE5vZGVBdChpbmRleCkge1xuICAgIGNvbnN0IGRpdmlzaW9uSFRNTE5vZGVzID0gdGhpcy5nZXREaXZpc2lvbkhUTUxOb2RlcygpLFxuICAgICAgICAgIGRpdmlzaW9uSFRNTE5vZGUgPSBkaXZpc2lvbkhUTUxOb2Rlc1tpbmRleF0gfHwgbnVsbDtcblxuICAgIHJldHVybiBkaXZpc2lvbkhUTUxOb2RlO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImh0bWxcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gbnVsbDtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tTm90aGluZyhUb3Btb3N0SFRNTE5vZGUpOyB9XG59XG5cbmZ1bmN0aW9uIGRpdmlzaW9uSFRNTFRyYW5zZm9ybXNGcm9tRGl2aXNpb25IVE1MTm9kZXMoZGl2aXNpb25IVE1MTm9kZXMpIHtcbiAgY29uc3QgZGl2aXNpb25IVE1MVHJhbnNmb3JtcyA9IGRpdmlzaW9uSFRNTE5vZGVzLm1hcCgoZGl2aXNpb25IVE1MTm9kZSkgPT4ge1xuICAgIGNvbnN0IGRpdmlzaW9uSFRNTFRyYW5zZm9ybSA9IERpdmlzaW9uSFRNTFRyYW5zZm9ybS5mcm9tRGl2aXNpb25IVE1MTm9kZShkaXZpc2lvbkhUTUxOb2RlKTtcblxuICAgIHJldHVybiBkaXZpc2lvbkhUTUxUcmFuc2Zvcm07XG4gIH0pO1xuXG4gIHJldHVybiBkaXZpc2lvbkhUTUxUcmFuc2Zvcm1zO1xufVxuIl0sIm5hbWVzIjpbIlRvcG1vc3RIVE1MTm9kZSIsIm1vdW50IiwicGFyZW50RE9NRWxlbWVudCIsInNpYmxpbmdET01FbGVtZW50IiwiY29udGV4dCIsImNoaWxkTm9kZXMiLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwidW5tb3VudCIsInJlc29sdmUiLCJwYWdpbmF0ZSIsImFkZENvbnRlbnRzIiwiYWRkSW5kZXgiLCJkaXZpc2lvbkhUTUxOb2RlcyIsImRpdmlzaW9uSFRNTFRyYW5zZm9ybXMiLCJnZXREaXZpc2lvbkhUTUxOb2RlcyIsImRpdmlzaW9uSFRNTFRyYW5zZm9ybXNGcm9tRGl2aXNpb25IVE1MTm9kZXMiLCJwYWdlTnVtYmVyIiwiT2JqZWN0IiwiYXNzaWduIiwiZGl2aXNpb25IVE1MVHJhbnNmb3JtIiwicmVtb3ZlIiwidG9wbW9zdEhUTUxOb2RlIiwiYXBwZW5kVG9Ub3Btb3N0SFRNTE5vZGUiLCJub2RlIiwiaW5kZXhEaXJlY3RpdmVIVE1MTm9kZSIsImluZGV4RGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZSIsImluZGV4RGlyZWN0aXZlSFRNTFRyYW5zZm9ybSIsIkluZGV4RGlyZWN0aXZlSFRNTFRyYW5zZm9ybSIsImZyb21JbmRleERpcmVjdGl2ZUhUTUxOb2RlIiwiaW5kZXhIVE1MVHJhbnNmb3JtIiwiSW5kZXhIVE1MVHJhbnNmb3JtIiwiZnJvbUluZGV4RGlyZWN0aXZlSFRNTFRyYW5zZm9ybUFuZERpdmlzaW9uSFRNTE5vZGVzIiwicmVwbGFjZUluZGV4RGlyZWN0aXZlSFRNTFRyYW5zZm9ybSIsImNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGUiLCJjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUiLCJjb250ZW50c0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0iLCJDb250ZW50c0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0iLCJmcm9tQ29udGVudHNEaXJlY3RpdmVIVE1MTm9kZSIsImNvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0iLCJDb250ZW50c0xpc3RIVE1MVHJhbnNmb3JtIiwiZnJvbUNvbnRlbnRzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybUFuZFRvcG1vc3RIVE1MTm9kZSIsInJlcGxhY2VDb250ZW50c0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0iLCJhZGp1c3RJbmRlbnQiLCJpbmRlbnQiLCJnZXRSdWxlTmFtZSIsInJ1bGVOYW1lIiwiSFRNTF9NQVJLRE9XTl9SVUxFX05BTUUiLCJkaXZpc2lvbkhUTUxOb2Rlc0Zyb21Ob2RlIiwiZ2V0RGl2aXNpb25IVE1MTm9kZUF0IiwiaW5kZXgiLCJkaXZpc2lvbkhUTUxOb2RlIiwiZnJvbU5vdGhpbmciLCJIVE1MTm9kZSIsInRhZ05hbWUiLCJjbGFzc05hbWUiLCJtYXAiLCJEaXZpc2lvbkhUTUxUcmFuc2Zvcm0iLCJmcm9tRGl2aXNpb25IVE1MTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFZcUJBOzs7MkRBVkE7NERBQ1U7K0RBQ0c7K0RBQ0k7NkRBQ0U7Z0VBQ0c7d0JBRUg7cUJBQ3FFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5RixJQUFBLEFBQU1BLGdDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLGdCQUFnQixFQUFFQyxpQkFBaUIsRUFBRUMsT0FBTztnQkFDaEQsSUFBSSxDQUFDQyxVQUFVLENBQUNDLE9BQU8sQ0FBQyxTQUFDQztvQkFDdkJBLFVBQVVOLEtBQUssQ0FBQ0Msa0JBQWtCQyxtQkFBbUJDO2dCQUN2RDtZQUNGOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFOLGdCQUFnQixFQUFFRSxPQUFPO2dCQUMvQixJQUFJLENBQUNDLFVBQVUsQ0FBQ0MsT0FBTyxDQUFDLFNBQUNDO29CQUN2QkEsVUFBVUMsT0FBTyxDQUFDTixrQkFBa0JFO2dCQUN0QztZQUNGOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFMLE9BQU87Z0JBQ2IsSUFBSSxDQUFDTSxRQUFRLENBQUNOO2dCQUVkLElBQUksQ0FBQ08sV0FBVyxDQUFDUDtnQkFFakIsSUFBSSxDQUFDUSxRQUFRLENBQUNSO1lBQ2hCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNOLE9BQU87Z0JBQ2QsSUFBSVMsbUJBQ0FDO2dCQUVKRCxvQkFBb0IsSUFBSSxDQUFDRSxvQkFBb0I7Z0JBRTdDRCx5QkFBeUJFLDRDQUE0Q0g7Z0JBRXJFQSxvQkFBb0IsRUFBRTtnQkFFdEIsSUFBSUk7Z0JBRUpBLGFBQWE7Z0JBRWJDLE9BQU9DLE1BQU0sQ0FBQ2YsU0FBUztvQkFDckJhLFlBQUFBO2dCQUNGO2dCQUVBSCx1QkFBdUJSLE9BQU8sQ0FBQyxTQUFDYztvQkFDOUJBLHNCQUFzQkMsTUFBTTtvQkFFNUJELHNCQUFzQlgsT0FBTyxDQUFDSSxtQkFBbUJUO2dCQUNuRDtnQkFFQSxPQUFPQSxRQUFRYSxVQUFVO2dCQUV6QkgseUJBQXlCRSw0Q0FBNENIO2dCQUVyRSxJQUFNUyxrQkFBa0IsSUFBSSxFQUFFLEdBQUc7Z0JBRWpDUix1QkFBdUJSLE9BQU8sQ0FBQyxTQUFDYztvQkFDOUJBLHNCQUFzQkcsdUJBQXVCLENBQUNEO2dCQUNoRDtZQUNGOzs7WUFFQVYsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNSLE9BQU87Z0JBQ2QsSUFBTW9CLE9BQU8sSUFBSSxFQUNYQyx5QkFBeUJDLElBQUFBLHFDQUE4QixFQUFDRjtnQkFFOUQsSUFBSUMsMkJBQTJCLE1BQU07b0JBQ25DO2dCQUNGO2dCQUVBLElBQU1aLG9CQUFvQixJQUFJLENBQUNFLG9CQUFvQixJQUM3Q1ksOEJBQThCQyxlQUEyQixDQUFDQywwQkFBMEIsQ0FBQ0oseUJBQ3JGSyxxQkFBcUJDLGNBQWtCLENBQUNDLG1EQUFtRCxDQUFDTCw2QkFBNkJkLG1CQUFtQlQ7Z0JBRWpKMEIsdUJBQXVCLE9BQ3RCQSxtQkFBbUJHLGtDQUFrQyxDQUFDTiwrQkFDcERBLDRCQUE0Qk4sTUFBTTtZQUN4Qzs7O1lBRUFWLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZUCxPQUFPO2dCQUNqQixJQUFNb0IsT0FBTyxJQUFJLEVBQ1hVLDRCQUE0QkMsSUFBQUEsd0NBQWlDLEVBQUNYO2dCQUVwRSxJQUFJVSw4QkFBOEIsTUFBTTtvQkFDdEM7Z0JBQ0Y7Z0JBRUEsSUFBTVosa0JBQWtCLElBQUksRUFDdEJjLGlDQUFpQ0Msa0JBQThCLENBQUNDLDZCQUE2QixDQUFDSiw0QkFDOUZLLDRCQUE0QkMsaUJBQXlCLENBQUNDLG9EQUFvRCxDQUFDTCxnQ0FBZ0NkLGlCQUFpQmxCO2dCQUVqS21DLDhCQUE4QixPQUM3QkEsMEJBQTBCRyxxQ0FBcUMsQ0FBQ04sa0NBQzlEQSwrQkFBK0JmLE1BQU07WUFDM0M7OztZQUVBc0IsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFDLE1BQU07Z0JBQ2pCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBV0MsaUNBQXVCO2dCQUV4QyxPQUFPRDtZQUNUOzs7WUFFQS9CLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNUyxPQUFPLElBQUksRUFDWFgsb0JBQW9CbUMsSUFBQUEsZ0NBQXlCLEVBQUN4QjtnQkFFcEQsT0FBT1g7WUFDVDs7O1lBRUFvQyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxLQUFLO2dCQUN6QixJQUFNckMsb0JBQW9CLElBQUksQ0FBQ0Usb0JBQW9CLElBQzdDb0MsbUJBQW1CdEMsaUJBQWlCLENBQUNxQyxNQUFNLElBQUk7Z0JBRXJELE9BQU9DO1lBQ1Q7Ozs7WUFNT0MsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9DLGFBQVEsQ0FBQ0QsV0FBVyxDQXRIL0JwRDtZQXNIa0Q7OztXQXRIbERBO0VBQXdCcUQsYUFBUTtBQWtIbkQsaUJBbEhtQnJELGlCQWtIWnNELFdBQVU7QUFFakIsaUJBcEhtQnRELGlCQW9IWnVELGFBQVk7QUFLckIsU0FBU3ZDLDRDQUE0Q0gsaUJBQWlCO0lBQ3BFLElBQU1DLHlCQUF5QkQsa0JBQWtCMkMsR0FBRyxDQUFDLFNBQUNMO1FBQ3BELElBQU0vQix3QkFBd0JxQyxpQkFBcUIsQ0FBQ0Msb0JBQW9CLENBQUNQO1FBRXpFLE9BQU8vQjtJQUNUO0lBRUEsT0FBT047QUFDVCJ9