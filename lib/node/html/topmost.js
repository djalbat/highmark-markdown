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
var _constants = require("../../constants");
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
            key: "forEachChildHTMLNOde",
            value: function forEachChildHTMLNOde(callback) {
                this.forEachChildNode(callback);
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
        },
        {
            key: "asHTML",
            value: function asHTML(context) {
                var html = _constants.EMPTY_STRING;
                this.forEachChildHTMLNOde(function(childHTMLNode) {
                    var childHTNMLNodeHTML = childHTMLNode.asHTML(context);
                    html = "".concat(html).concat(childHTNMLNodeHTML);
                });
                return html;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvdG9wbW9zdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcbmltcG9ydCBJbmRleEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2luZGV4XCI7XG5pbXBvcnQgRGl2aXNpb25IVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9kaXZpc2lvblwiO1xuaW1wb3J0IENvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2xpc3QvY29udGVudHNcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgSFRNTF9NQVJLRE9XTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzL21hcmtkb3duXCI7XG5pbXBvcnQgeyBkaXZpc2lvbkhUTUxOb2Rlc0Zyb21Ob2RlLCBpbmRleERpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUsIGNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvaHRtbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3Btb3N0SFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIGZvckVhY2hDaGlsZEhUTUxOT2RlKGNhbGxiYWNrKSB7IHRoaXMuZm9yRWFjaENoaWxkTm9kZShjYWxsYmFjayk7IH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IEhUTUxfTUFSS0RPV05fUlVMRV9OQU1FO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lO1xuICB9XG5cbiAgZ2V0RGl2aXNpb25IVE1MTm9kZSgpIHtcbiAgICBjb25zdCBpbmRleCA9IDAsXG4gICAgICAgICAgZGl2aXNpb25IVE1MTm9kZSA9IHRoaXMuZ2V0RGl2aXNpb25IVE1MTm9kZUF0KGluZGV4KTtcblxuICAgIHJldHVybiBkaXZpc2lvbkhUTUxOb2RlO1xuICB9XG5cbiAgZ2V0RGl2aXNpb25IVE1MTm9kZXMoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBkaXZpc2lvbkhUTUxOb2RlcyA9IGRpdmlzaW9uSFRNTE5vZGVzRnJvbU5vZGUobm9kZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25IVE1MTm9kZXM7XG4gIH1cblxuICBnZXREaXZpc2lvbkhUTUxOb2RlQXQoaW5kZXgpIHtcbiAgICBjb25zdCBkaXZpc2lvbkhUTUxOb2RlcyA9IHRoaXMuZ2V0RGl2aXNpb25IVE1MTm9kZXMoKSxcbiAgICAgICAgICBkaXZpc2lvbkhUTUxOb2RlID0gZGl2aXNpb25IVE1MTm9kZXNbaW5kZXhdIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZGl2aXNpb25IVE1MTm9kZTtcbiAgfVxuXG4gIGFkanVzdEluZGVudChpbmRlbnQpIHtcbiAgICByZXR1cm4gaW5kZW50O1xuICB9XG5cbiAgbW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IGNoaWxkTm9kZS5tb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2libGluZ0RPTUVsZW1lbnQ7XG4gIH1cblxuICB1bm1vdW50KHBhcmVudERPTUVsZW1lbnQpIHtcbiAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjaGlsZE5vZGUudW5tb3VudChwYXJlbnRET01FbGVtZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc29sdmUoY29udGV4dCkge1xuICAgIHRoaXMucGFnaW5hdGUoY29udGV4dCk7XG5cbiAgICB0aGlzLmFkZENvbnRlbnRzKGNvbnRleHQpO1xuXG4gICAgdGhpcy5hZGRJbmRleChjb250ZXh0KTtcbiAgfVxuXG4gIHBhZ2luYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgcGFnZU51bWJlcjtcblxuICAgIHBhZ2VOdW1iZXIgPSAxO1xuXG4gICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICBwYWdlTnVtYmVyXG4gICAgfSk7XG5cbiAgICBjb25zdCBodG1sVHJhbnNmb3JtcyA9IFtdLFxuICAgICAgICAgIHRvcG1vc3RIVE1MTm9kZSA9IHRoaXMsICAvL1xuICAgICAgICAgIGRpdmlzaW9uSFRNTE5vZGVzID0gdGhpcy5nZXREaXZpc2lvbkhUTUxOb2RlcygpLFxuICAgICAgICAgIGRpdmlzaW9uSFRNTFRyYW5zZm9ybXMgPSBkaXZpc2lvbkhUTUxUcmFuc2Zvcm1zRnJvbURpdmlzaW9uSFRNTE5vZGVzKGRpdmlzaW9uSFRNTE5vZGVzKTtcblxuICAgIGRpdmlzaW9uSFRNTFRyYW5zZm9ybXMuZm9yRWFjaCgoZGl2aXNpb25IVE1MVHJhbnNmb3JtKSA9PiB7XG4gICAgICBkaXZpc2lvbkhUTUxUcmFuc2Zvcm0ucGFnaW5hdGUoaHRtbFRyYW5zZm9ybXMsIGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgZGVsZXRlIGNvbnRleHQucGFnZU51bWJlcjtcblxuICAgIGRpdmlzaW9uSFRNTFRyYW5zZm9ybXMuZm9yRWFjaCgoZGl2aXNpb25IVE1MVHJhbnNmb3JtKSA9PiB7XG4gICAgICBkaXZpc2lvbkhUTUxUcmFuc2Zvcm0ucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICBodG1sVHJhbnNmb3Jtcy5mb3JFYWNoKChodG1sVHJhbnNmb3JtKSA9PiB7XG4gICAgICBodG1sVHJhbnNmb3JtLmFwcGVuZFRvVG9wbW9zdEhUTUxOb2RlKHRvcG1vc3RIVE1MTm9kZSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRJbmRleChjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBpbmRleERpcmVjdGl2ZUhUTUxOb2RlID0gaW5kZXhEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlKG5vZGUpO1xuXG4gICAgaWYgKGluZGV4RGlyZWN0aXZlSFRNTE5vZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkaXZpc2lvbkhUTUxOb2RlcyA9IHRoaXMuZ2V0RGl2aXNpb25IVE1MTm9kZXMoKSxcbiAgICAgICAgICBpbmRleEhUTUxUcmFuc2Zvcm0gPSBJbmRleEhUTUxUcmFuc2Zvcm0uZnJvbUluZGV4RGlyZWN0aXZlSFRNTE5vZGVBbmREaXZpc2lvbkhUTUxOb2RlcyhpbmRleERpcmVjdGl2ZUhUTUxOb2RlLCBkaXZpc2lvbkhUTUxOb2RlcywgY29udGV4dCk7XG5cbiAgICBpZiAoaW5kZXhIVE1MVHJhbnNmb3JtICE9PSBudWxsKSB7XG4gICAgICBpbmRleEhUTUxUcmFuc2Zvcm0uYWRkQWZ0ZXJJbmRleERpcmVjdGl2ZUhUTUxOb2RlKGluZGV4RGlyZWN0aXZlSFRNTE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIGFkZENvbnRlbnRzKGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGUgPSBjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUobm9kZSk7XG5cbiAgICBpZiAoY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHRvcG1vc3RIVE1MTm9kZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIGNvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0gPSBDb250ZW50c0xpc3RIVE1MVHJhbnNmb3JtLmZyb21Db250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlQW5kVG9wbW9zdEhUTUxOb2RlKGNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGUsIHRvcG1vc3RIVE1MTm9kZSwgY29udGV4dCk7XG5cbiAgICBpZiAoY29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAgICAgY29udGVudHNMaXN0SFRNTFRyYW5zZm9ybS5hZGRBZnRlckNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGUoY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgYXNIVE1MKGNvbnRleHQpIHtcbiAgICBsZXQgaHRtbCA9IEVNUFRZX1NUUklORztcblxuICAgIHRoaXMuZm9yRWFjaENoaWxkSFRNTE5PZGUoKGNoaWxkSFRNTE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkSFROTUxOb2RlSFRNTCA9IGNoaWxkSFRNTE5vZGUuYXNIVE1MKGNvbnRleHQpO1xuXG4gICAgICBodG1sID0gYCR7aHRtbH0ke2NoaWxkSFROTUxOb2RlSFRNTH1gO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiaHRtbFwiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBudWxsO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21Ob3RoaW5nKFRvcG1vc3RIVE1MTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbUNoaWxkSFRNTE5vZGVzKGNoaWxkSFRNTE5vZGVzKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tQ2hpbGRIVE1MTm9kZXMoVG9wbW9zdEhUTUxOb2RlLCBjaGlsZEhUTUxOb2Rlcyk7IH1cbn1cblxuZnVuY3Rpb24gZGl2aXNpb25IVE1MVHJhbnNmb3Jtc0Zyb21EaXZpc2lvbkhUTUxOb2RlcyhkaXZpc2lvbkhUTUxOb2Rlcykge1xuICBjb25zdCBkaXZpc2lvbkhUTUxUcmFuc2Zvcm1zID0gZGl2aXNpb25IVE1MTm9kZXMubWFwKChkaXZpc2lvbkhUTUxOb2RlKSA9PiB7XG4gICAgY29uc3QgZGl2aXNpb25IVE1MVHJhbnNmb3JtID0gRGl2aXNpb25IVE1MVHJhbnNmb3JtLmZyb21EaXZpc2lvbkhUTUxOb2RlKGRpdmlzaW9uSFRNTE5vZGUpO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uSFRNTFRyYW5zZm9ybTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRpdmlzaW9uSFRNTFRyYW5zZm9ybXM7XG59XG4iXSwibmFtZXMiOlsiVG9wbW9zdEhUTUxOb2RlIiwiZm9yRWFjaENoaWxkSFRNTE5PZGUiLCJjYWxsYmFjayIsImZvckVhY2hDaGlsZE5vZGUiLCJnZXRSdWxlTmFtZSIsInJ1bGVOYW1lIiwiSFRNTF9NQVJLRE9XTl9SVUxFX05BTUUiLCJnZXREaXZpc2lvbkhUTUxOb2RlIiwiaW5kZXgiLCJkaXZpc2lvbkhUTUxOb2RlIiwiZ2V0RGl2aXNpb25IVE1MTm9kZUF0IiwiZ2V0RGl2aXNpb25IVE1MTm9kZXMiLCJub2RlIiwiZGl2aXNpb25IVE1MTm9kZXMiLCJkaXZpc2lvbkhUTUxOb2Rlc0Zyb21Ob2RlIiwiYWRqdXN0SW5kZW50IiwiaW5kZW50IiwibW91bnQiLCJwYXJlbnRET01FbGVtZW50Iiwic2libGluZ0RPTUVsZW1lbnQiLCJjb250ZXh0IiwiY2hpbGROb2RlcyIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJ1bm1vdW50IiwicmVzb2x2ZSIsInBhZ2luYXRlIiwiYWRkQ29udGVudHMiLCJhZGRJbmRleCIsInBhZ2VOdW1iZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJodG1sVHJhbnNmb3JtcyIsInRvcG1vc3RIVE1MTm9kZSIsImRpdmlzaW9uSFRNTFRyYW5zZm9ybXMiLCJkaXZpc2lvbkhUTUxUcmFuc2Zvcm1zRnJvbURpdmlzaW9uSFRNTE5vZGVzIiwiZGl2aXNpb25IVE1MVHJhbnNmb3JtIiwicmVtb3ZlIiwiaHRtbFRyYW5zZm9ybSIsImFwcGVuZFRvVG9wbW9zdEhUTUxOb2RlIiwiaW5kZXhEaXJlY3RpdmVIVE1MTm9kZSIsImluZGV4RGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZSIsImluZGV4SFRNTFRyYW5zZm9ybSIsIkluZGV4SFRNTFRyYW5zZm9ybSIsImZyb21JbmRleERpcmVjdGl2ZUhUTUxOb2RlQW5kRGl2aXNpb25IVE1MTm9kZXMiLCJhZGRBZnRlckluZGV4RGlyZWN0aXZlSFRNTE5vZGUiLCJjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlIiwiY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlIiwiY29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSIsIkNvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0iLCJmcm9tQ29udGVudHNEaXJlY3RpdmVIVE1MTm9kZUFuZFRvcG1vc3RIVE1MTm9kZSIsImFkZEFmdGVyQ29udGVudHNEaXJlY3RpdmVIVE1MTm9kZSIsImFzSFRNTCIsImh0bWwiLCJFTVBUWV9TVFJJTkciLCJjaGlsZEhUTUxOb2RlIiwiY2hpbGRIVE5NTE5vZGVIVE1MIiwiZnJvbU5vdGhpbmciLCJIVE1MTm9kZSIsImZyb21DaGlsZEhUTUxOb2RlcyIsImNoaWxkSFRNTE5vZGVzIiwidGFnTmFtZSIsImNsYXNzTmFtZSIsIm1hcCIsIkRpdmlzaW9uSFRNTFRyYW5zZm9ybSIsImZyb21EaXZpc2lvbkhUTUxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVdxQkE7OzsyREFUQTs0REFDVTsrREFDRzsrREFDSTt5QkFFVDt3QkFDVztxQkFDcUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlGLElBQUEsQUFBTUEsZ0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxxQkFBcUJDLFFBQVE7Z0JBQUksSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ0Q7WUFBVzs7O1lBRWxFRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBV0MsaUNBQXVCO2dCQUV4QyxPQUFPRDtZQUNUOzs7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