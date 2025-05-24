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
        },
        {
            key: "removeChildNodes",
            value: function removeChildNodes() {
                var removedChildNodes = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
                var childNodes;
                childNodes = this.getChildNodes();
                if (removedChildNodes !== null) {
                    childNodes = childNodes.filter(function(childNode) {
                        var index = removedChildNodes.findIndex(function(removedChildNode) {
                            var outerNodeMatches = childNode.matchOuterNode(removedChildNode);
                            if (outerNodeMatches) {
                                return true;
                            }
                        });
                        if (index !== -1) {
                            return true;
                        }
                    });
                }
                removedChildNodes = childNodes; ///
                removedChildNodes = _get(_get_prototype_of(TopmostHTMLNode.prototype), "removeChildNodes", this).call(this, removedChildNodes);
                return removedChildNodes;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvdG9wbW9zdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcbmltcG9ydCBJbmRleEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2luZGV4XCI7XG5pbXBvcnQgRGl2aXNpb25IVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9kaXZpc2lvblwiO1xuaW1wb3J0IENvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2xpc3QvY29udGVudHNcIjtcbmltcG9ydCBJbmRleERpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2RpcmVjdGl2ZS9pbmRleFwiO1xuaW1wb3J0IENvbnRlbnRzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2h0bWwvZGlyZWN0aXZlL2NvbnRlbnRzXCI7XG5cbmltcG9ydCB7IEhUTUxfTUFSS0RPV05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lcy9tYXJrZG93blwiO1xuaW1wb3J0IHsgZGl2aXNpb25IVE1MTm9kZXNGcm9tTm9kZSwgaW5kZXhEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlLCBjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2h0bWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wbW9zdEhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBtb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNoaWxkTm9kZS5tb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCk7XG4gICAgfSk7XG4gIH1cblxuICB1bm1vdW50KHBhcmVudERPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjaGlsZE5vZGUudW5tb3VudChwYXJlbnRET01FbGVtZW50LCBjb250ZXh0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc29sdmUoY29udGV4dCkge1xuICAgIHRoaXMucGFnaW5hdGUoY29udGV4dCk7XG5cbiAgICB0aGlzLmFkZENvbnRlbnRzKGNvbnRleHQpO1xuXG4gICAgdGhpcy5hZGRJbmRleChjb250ZXh0KTtcbiAgfVxuXG4gIHBhZ2luYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgZGl2aXNpb25IVE1MTm9kZXMsXG4gICAgICAgIGRpdmlzaW9uSFRNTFRyYW5zZm9ybXM7XG5cbiAgICBkaXZpc2lvbkhUTUxOb2RlcyA9IHRoaXMuZ2V0RGl2aXNpb25IVE1MTm9kZXMoKTtcblxuICAgIGRpdmlzaW9uSFRNTFRyYW5zZm9ybXMgPSBkaXZpc2lvbkhUTUxUcmFuc2Zvcm1zRnJvbURpdmlzaW9uSFRNTE5vZGVzKGRpdmlzaW9uSFRNTE5vZGVzKTtcblxuICAgIGRpdmlzaW9uSFRNTE5vZGVzID0gW107XG5cbiAgICBsZXQgcGFnZU51bWJlcjtcblxuICAgIHBhZ2VOdW1iZXIgPSAxO1xuXG4gICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICBwYWdlTnVtYmVyXG4gICAgfSk7XG5cbiAgICBkaXZpc2lvbkhUTUxUcmFuc2Zvcm1zLmZvckVhY2goKGRpdmlzaW9uSFRNTFRyYW5zZm9ybSkgPT4ge1xuICAgICAgZGl2aXNpb25IVE1MVHJhbnNmb3JtLnJlbW92ZSgpO1xuXG4gICAgICBkaXZpc2lvbkhUTUxUcmFuc2Zvcm0ucmVzb2x2ZShkaXZpc2lvbkhUTUxOb2RlcywgY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBkZWxldGUgY29udGV4dC5wYWdlTnVtYmVyO1xuXG4gICAgZGl2aXNpb25IVE1MVHJhbnNmb3JtcyA9IGRpdmlzaW9uSFRNTFRyYW5zZm9ybXNGcm9tRGl2aXNpb25IVE1MTm9kZXMoZGl2aXNpb25IVE1MTm9kZXMpO1xuXG4gICAgY29uc3QgdG9wbW9zdEhUTUxOb2RlID0gdGhpczsgLy8vXG5cbiAgICBkaXZpc2lvbkhUTUxUcmFuc2Zvcm1zLmZvckVhY2goKGRpdmlzaW9uSFRNTFRyYW5zZm9ybSkgPT4ge1xuICAgICAgZGl2aXNpb25IVE1MVHJhbnNmb3JtLmFwcGVuZFRvVG9wbW9zdEhUTUxOb2RlKHRvcG1vc3RIVE1MTm9kZSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRJbmRleChjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBpbmRleERpcmVjdGl2ZUhUTUxOb2RlID0gaW5kZXhEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlKG5vZGUpO1xuXG4gICAgaWYgKGluZGV4RGlyZWN0aXZlSFRNTE5vZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkaXZpc2lvbkhUTUxOb2RlcyA9IHRoaXMuZ2V0RGl2aXNpb25IVE1MTm9kZXMoKSxcbiAgICAgICAgICBpbmRleERpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0gPSBJbmRleERpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0uZnJvbUluZGV4RGlyZWN0aXZlSFRNTE5vZGUoaW5kZXhEaXJlY3RpdmVIVE1MTm9kZSksXG4gICAgICAgICAgaW5kZXhIVE1MVHJhbnNmb3JtID0gSW5kZXhIVE1MVHJhbnNmb3JtLmZyb21JbmRleERpcmVjdGl2ZUhUTUxUcmFuc2Zvcm1BbmREaXZpc2lvbkhUTUxOb2RlcyhpbmRleERpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0sIGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KTtcblxuICAgIChpbmRleEhUTUxUcmFuc2Zvcm0gIT09IG51bGwpID9cbiAgICAgIGluZGV4SFRNTFRyYW5zZm9ybS5yZXBsYWNlSW5kZXhEaXJlY3RpdmVIVE1MVHJhbnNmb3JtKGluZGV4RGlyZWN0aXZlSFRNTFRyYW5zZm9ybSkgOlxuICAgICAgICBpbmRleERpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0ucmVtb3ZlKCk7XG4gIH1cblxuICBhZGRDb250ZW50cyhjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlID0gY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlKG5vZGUpO1xuXG4gICAgaWYgKGNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0b3Btb3N0SFRNTE5vZGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICBjb250ZW50c0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0gPSBDb250ZW50c0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0uZnJvbUNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGUoY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZSksXG4gICAgICAgICAgY29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSA9IENvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0uZnJvbUNvbnRlbnRzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybUFuZFRvcG1vc3RIVE1MTm9kZShjb250ZW50c0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0sIHRvcG1vc3RIVE1MTm9kZSwgY29udGV4dCk7XG5cbiAgICAoY29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSAhPT0gbnVsbCkgP1xuICAgICAgY29udGVudHNMaXN0SFRNTFRyYW5zZm9ybS5yZXBsYWNlQ29udGVudHNEaXJlY3RpdmVIVE1MVHJhbnNmb3JtKGNvbnRlbnRzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybSkgOlxuICAgICAgICBjb250ZW50c0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0ucmVtb3ZlKCk7XG4gIH1cblxuICBhZGp1c3RJbmRlbnQoaW5kZW50KSB7XG4gICAgcmV0dXJuIGluZGVudDtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gSFRNTF9NQVJLRE9XTl9SVUxFX05BTUU7XG5cbiAgICByZXR1cm4gcnVsZU5hbWU7XG4gIH1cblxuICBnZXREaXZpc2lvbkhUTUxOb2RlcygpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGRpdmlzaW9uSFRNTE5vZGVzID0gZGl2aXNpb25IVE1MTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICAgIHJldHVybiBkaXZpc2lvbkhUTUxOb2RlcztcbiAgfVxuXG4gIGdldERpdmlzaW9uSFRNTE5vZGVBdChpbmRleCkge1xuICAgIGNvbnN0IGRpdmlzaW9uSFRNTE5vZGVzID0gdGhpcy5nZXREaXZpc2lvbkhUTUxOb2RlcygpLFxuICAgICAgICAgIGRpdmlzaW9uSFRNTE5vZGUgPSBkaXZpc2lvbkhUTUxOb2Rlc1tpbmRleF0gfHwgbnVsbDtcblxuICAgIHJldHVybiBkaXZpc2lvbkhUTUxOb2RlO1xuICB9XG5cbiAgcmVtb3ZlQ2hpbGROb2RlcyhyZW1vdmVkQ2hpbGROb2RlcyA9IG51bGwpIHtcbiAgICBsZXQgY2hpbGROb2RlcztcblxuICAgIGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKTtcblxuICAgIGlmIChyZW1vdmVkQ2hpbGROb2RlcyAhPT0gbnVsbCkge1xuICAgICAgY2hpbGROb2RlcyA9IGNoaWxkTm9kZXMuZmlsdGVyKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSByZW1vdmVkQ2hpbGROb2Rlcy5maW5kSW5kZXgoKHJlbW92ZWRDaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBvdXRlck5vZGVNYXRjaGVzID0gY2hpbGROb2RlLm1hdGNoT3V0ZXJOb2RlKHJlbW92ZWRDaGlsZE5vZGUpO1xuXG4gICAgICAgICAgaWYgKG91dGVyTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZW1vdmVkQ2hpbGROb2RlcyA9IGNoaWxkTm9kZXM7IC8vL1xuXG4gICAgcmVtb3ZlZENoaWxkTm9kZXMgPSBzdXBlci5yZW1vdmVDaGlsZE5vZGVzKHJlbW92ZWRDaGlsZE5vZGVzKTtcblxuICAgIHJldHVybiByZW1vdmVkQ2hpbGROb2RlcztcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJodG1sXCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IG51bGw7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU5vdGhpbmcoVG9wbW9zdEhUTUxOb2RlKTsgfVxufVxuXG5mdW5jdGlvbiBkaXZpc2lvbkhUTUxUcmFuc2Zvcm1zRnJvbURpdmlzaW9uSFRNTE5vZGVzKGRpdmlzaW9uSFRNTE5vZGVzKSB7XG4gIGNvbnN0IGRpdmlzaW9uSFRNTFRyYW5zZm9ybXMgPSBkaXZpc2lvbkhUTUxOb2Rlcy5tYXAoKGRpdmlzaW9uSFRNTE5vZGUpID0+IHtcbiAgICBjb25zdCBkaXZpc2lvbkhUTUxUcmFuc2Zvcm0gPSBEaXZpc2lvbkhUTUxUcmFuc2Zvcm0uZnJvbURpdmlzaW9uSFRNTE5vZGUoZGl2aXNpb25IVE1MTm9kZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25IVE1MVHJhbnNmb3JtO1xuICB9KTtcblxuICByZXR1cm4gZGl2aXNpb25IVE1MVHJhbnNmb3Jtcztcbn1cbiJdLCJuYW1lcyI6WyJUb3Btb3N0SFRNTE5vZGUiLCJtb3VudCIsInBhcmVudERPTUVsZW1lbnQiLCJzaWJsaW5nRE9NRWxlbWVudCIsImNvbnRleHQiLCJjaGlsZE5vZGVzIiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsInVubW91bnQiLCJyZXNvbHZlIiwicGFnaW5hdGUiLCJhZGRDb250ZW50cyIsImFkZEluZGV4IiwiZGl2aXNpb25IVE1MTm9kZXMiLCJkaXZpc2lvbkhUTUxUcmFuc2Zvcm1zIiwiZ2V0RGl2aXNpb25IVE1MTm9kZXMiLCJkaXZpc2lvbkhUTUxUcmFuc2Zvcm1zRnJvbURpdmlzaW9uSFRNTE5vZGVzIiwicGFnZU51bWJlciIsIk9iamVjdCIsImFzc2lnbiIsImRpdmlzaW9uSFRNTFRyYW5zZm9ybSIsInJlbW92ZSIsInRvcG1vc3RIVE1MTm9kZSIsImFwcGVuZFRvVG9wbW9zdEhUTUxOb2RlIiwibm9kZSIsImluZGV4RGlyZWN0aXZlSFRNTE5vZGUiLCJpbmRleERpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUiLCJpbmRleERpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0iLCJJbmRleERpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0iLCJmcm9tSW5kZXhEaXJlY3RpdmVIVE1MTm9kZSIsImluZGV4SFRNTFRyYW5zZm9ybSIsIkluZGV4SFRNTFRyYW5zZm9ybSIsImZyb21JbmRleERpcmVjdGl2ZUhUTUxUcmFuc2Zvcm1BbmREaXZpc2lvbkhUTUxOb2RlcyIsInJlcGxhY2VJbmRleERpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0iLCJjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlIiwiY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlIiwiY29udGVudHNEaXJlY3RpdmVIVE1MVHJhbnNmb3JtIiwiQ29udGVudHNEaXJlY3RpdmVIVE1MVHJhbnNmb3JtIiwiZnJvbUNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGUiLCJjb250ZW50c0xpc3RIVE1MVHJhbnNmb3JtIiwiQ29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSIsImZyb21Db250ZW50c0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm1BbmRUb3Btb3N0SFRNTE5vZGUiLCJyZXBsYWNlQ29udGVudHNEaXJlY3RpdmVIVE1MVHJhbnNmb3JtIiwiYWRqdXN0SW5kZW50IiwiaW5kZW50IiwiZ2V0UnVsZU5hbWUiLCJydWxlTmFtZSIsIkhUTUxfTUFSS0RPV05fUlVMRV9OQU1FIiwiZGl2aXNpb25IVE1MTm9kZXNGcm9tTm9kZSIsImdldERpdmlzaW9uSFRNTE5vZGVBdCIsImluZGV4IiwiZGl2aXNpb25IVE1MTm9kZSIsInJlbW92ZUNoaWxkTm9kZXMiLCJyZW1vdmVkQ2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaWx0ZXIiLCJmaW5kSW5kZXgiLCJyZW1vdmVkQ2hpbGROb2RlIiwib3V0ZXJOb2RlTWF0Y2hlcyIsIm1hdGNoT3V0ZXJOb2RlIiwiZnJvbU5vdGhpbmciLCJIVE1MTm9kZSIsInRhZ05hbWUiLCJjbGFzc05hbWUiLCJtYXAiLCJEaXZpc2lvbkhUTUxUcmFuc2Zvcm0iLCJmcm9tRGl2aXNpb25IVE1MTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFZcUJBOzs7MkRBVkE7NERBQ1U7K0RBQ0c7K0RBQ0k7NkRBQ0U7Z0VBQ0c7d0JBRUg7cUJBQ3FFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlGLElBQUEsQUFBTUEsZ0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsZ0JBQWdCLEVBQUVDLGlCQUFpQixFQUFFQyxPQUFPO2dCQUNoRCxJQUFJLENBQUNDLFVBQVUsQ0FBQ0MsT0FBTyxDQUFDLFNBQUNDO29CQUN2QkEsVUFBVU4sS0FBSyxDQUFDQyxrQkFBa0JDLG1CQUFtQkM7Z0JBQ3ZEO1lBQ0Y7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUU4sZ0JBQWdCLEVBQUVFLE9BQU87Z0JBQy9CLElBQUksQ0FBQ0MsVUFBVSxDQUFDQyxPQUFPLENBQUMsU0FB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