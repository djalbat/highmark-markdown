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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvdG9wbW9zdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcbmltcG9ydCBJbmRleEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2luZGV4XCI7XG5pbXBvcnQgRGl2aXNpb25IVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9kaXZpc2lvblwiO1xuaW1wb3J0IENvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2xpc3QvY29udGVudHNcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgSFRNTF9NQVJLRE9XTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzL21hcmtkb3duXCI7XG5pbXBvcnQgeyBkaXZpc2lvbkhUTUxOb2Rlc0Zyb21Ob2RlLCBpbmRleERpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUsIGNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvaHRtbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3Btb3N0SFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIGZvckVhY2hDaGlsZEhUTUxOT2RlKGNhbGxiYWNrKSB7IHRoaXMuZm9yRWFjaENoaWxkTm9kZShjYWxsYmFjayk7IH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IEhUTUxfTUFSS0RPV05fUlVMRV9OQU1FO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lO1xuICB9XG5cbiAgZ2V0RGl2aXNpb25IVE1MTm9kZSgpIHtcbiAgICBjb25zdCBpbmRleCA9IDAsXG4gICAgICAgICAgZGl2aXNpb25IVE1MTm9kZSA9IHRoaXMuZ2V0RGl2aXNpb25IVE1MTm9kZUF0KGluZGV4KTtcblxuICAgIHJldHVybiBkaXZpc2lvbkhUTUxOb2RlO1xuICB9XG5cbiAgZ2V0RGl2aXNpb25IVE1MTm9kZXMoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBkaXZpc2lvbkhUTUxOb2RlcyA9IGRpdmlzaW9uSFRNTE5vZGVzRnJvbU5vZGUobm9kZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25IVE1MTm9kZXM7XG4gIH1cblxuICBnZXREaXZpc2lvbkhUTUxOb2RlQXQoaW5kZXgpIHtcbiAgICBjb25zdCBkaXZpc2lvbkhUTUxOb2RlcyA9IHRoaXMuZ2V0RGl2aXNpb25IVE1MTm9kZXMoKSxcbiAgICAgICAgICBkaXZpc2lvbkhUTUxOb2RlID0gZGl2aXNpb25IVE1MTm9kZXNbaW5kZXhdIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZGl2aXNpb25IVE1MTm9kZTtcbiAgfVxuXG4gIGFkanVzdEluZGVudChpbmRlbnQpIHtcbiAgICByZXR1cm4gaW5kZW50O1xuICB9XG5cbiAgcmVzb2x2ZShjb250ZXh0KSB7XG4gICAgdGhpcy5wYWdpbmF0ZShjb250ZXh0KTtcblxuICAgIHRoaXMuYWRkQ29udGVudHMoY29udGV4dCk7XG5cbiAgICB0aGlzLmFkZEluZGV4KGNvbnRleHQpO1xuICB9XG5cbiAgcGFnaW5hdGUoY29udGV4dCkge1xuICAgIGxldCBwYWdlTnVtYmVyO1xuXG4gICAgcGFnZU51bWJlciA9IDE7XG5cbiAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgIHBhZ2VOdW1iZXJcbiAgICB9KTtcblxuICAgIGNvbnN0IGh0bWxUcmFuc2Zvcm1zID0gW10sXG4gICAgICAgICAgdG9wbW9zdEhUTUxOb2RlID0gdGhpcywgIC8vXG4gICAgICAgICAgZGl2aXNpb25IVE1MTm9kZXMgPSB0aGlzLmdldERpdmlzaW9uSFRNTE5vZGVzKCksXG4gICAgICAgICAgZGl2aXNpb25IVE1MVHJhbnNmb3JtcyA9IGRpdmlzaW9uSFRNTFRyYW5zZm9ybXNGcm9tRGl2aXNpb25IVE1MTm9kZXMoZGl2aXNpb25IVE1MTm9kZXMpO1xuXG4gICAgZGl2aXNpb25IVE1MVHJhbnNmb3Jtcy5mb3JFYWNoKChkaXZpc2lvbkhUTUxUcmFuc2Zvcm0pID0+IHtcbiAgICAgIGRpdmlzaW9uSFRNTFRyYW5zZm9ybS5wYWdpbmF0ZShodG1sVHJhbnNmb3JtcywgY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBkZWxldGUgY29udGV4dC5wYWdlTnVtYmVyO1xuXG4gICAgZGl2aXNpb25IVE1MVHJhbnNmb3Jtcy5mb3JFYWNoKChkaXZpc2lvbkhUTUxUcmFuc2Zvcm0pID0+IHtcbiAgICAgIGRpdmlzaW9uSFRNTFRyYW5zZm9ybS5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgIGh0bWxUcmFuc2Zvcm1zLmZvckVhY2goKGh0bWxUcmFuc2Zvcm0pID0+IHtcbiAgICAgIGh0bWxUcmFuc2Zvcm0uYXBwZW5kVG9Ub3Btb3N0SFRNTE5vZGUodG9wbW9zdEhUTUxOb2RlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEluZGV4KGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGluZGV4RGlyZWN0aXZlSFRNTE5vZGUgPSBpbmRleERpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUobm9kZSk7XG5cbiAgICBpZiAoaW5kZXhEaXJlY3RpdmVIVE1MTm9kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRpdmlzaW9uSFRNTE5vZGVzID0gdGhpcy5nZXREaXZpc2lvbkhUTUxOb2RlcygpLFxuICAgICAgICAgIGluZGV4SFRNTFRyYW5zZm9ybSA9IEluZGV4SFRNTFRyYW5zZm9ybS5mcm9tSW5kZXhEaXJlY3RpdmVIVE1MTm9kZUFuZERpdmlzaW9uSFRNTE5vZGVzKGluZGV4RGlyZWN0aXZlSFRNTE5vZGUsIGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KTtcblxuICAgIGlmIChpbmRleEhUTUxUcmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgICAgIGluZGV4SFRNTFRyYW5zZm9ybS5hZGRBZnRlckluZGV4RGlyZWN0aXZlSFRNTE5vZGUoaW5kZXhEaXJlY3RpdmVIVE1MTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgYWRkQ29udGVudHMoY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZSA9IGNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZShub2RlKTtcblxuICAgIGlmIChjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdG9wbW9zdEhUTUxOb2RlID0gdGhpcywgLy8vXG4gICAgICAgICAgY29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSA9IENvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0uZnJvbUNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGVBbmRUb3Btb3N0SFRNTE5vZGUoY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZSwgdG9wbW9zdEhUTUxOb2RlLCBjb250ZXh0KTtcblxuICAgIGlmIChjb250ZW50c0xpc3RIVE1MVHJhbnNmb3JtICE9PSBudWxsKSB7XG4gICAgICBjb250ZW50c0xpc3RIVE1MVHJhbnNmb3JtLmFkZEFmdGVyQ29udGVudHNEaXJlY3RpdmVIVE1MTm9kZShjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlKTtcbiAgICB9XG4gIH1cblxuICBtb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gY2hpbGROb2RlLm1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzaWJsaW5nRE9NRWxlbWVudDtcbiAgfVxuXG4gIHVubW91bnQocGFyZW50RE9NRWxlbWVudCkge1xuICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNoaWxkTm9kZS51bm1vdW50KHBhcmVudERPTUVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgYXNIVE1MKGNvbnRleHQpIHtcbiAgICBsZXQgaHRtbCA9IEVNUFRZX1NUUklORztcblxuICAgIHRoaXMuZm9yRWFjaENoaWxkSFRNTE5PZGUoKGNoaWxkSFRNTE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkSFROTUxOb2RlSFRNTCA9IGNoaWxkSFRNTE5vZGUuYXNIVE1MKGNvbnRleHQpO1xuXG4gICAgICBodG1sID0gYCR7aHRtbH0ke2NoaWxkSFROTUxOb2RlSFRNTH1gO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiaHRtbFwiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBudWxsO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21Ob3RoaW5nKFRvcG1vc3RIVE1MTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbUNoaWxkSFRNTE5vZGVzKGNoaWxkSFRNTE5vZGVzKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tQ2hpbGRIVE1MTm9kZXMoVG9wbW9zdEhUTUxOb2RlLCBjaGlsZEhUTUxOb2Rlcyk7IH1cbn1cblxuZnVuY3Rpb24gZGl2aXNpb25IVE1MVHJhbnNmb3Jtc0Zyb21EaXZpc2lvbkhUTUxOb2RlcyhkaXZpc2lvbkhUTUxOb2Rlcykge1xuICBjb25zdCBkaXZpc2lvbkhUTUxUcmFuc2Zvcm1zID0gZGl2aXNpb25IVE1MTm9kZXMubWFwKChkaXZpc2lvbkhUTUxOb2RlKSA9PiB7XG4gICAgY29uc3QgZGl2aXNpb25IVE1MVHJhbnNmb3JtID0gRGl2aXNpb25IVE1MVHJhbnNmb3JtLmZyb21EaXZpc2lvbkhUTUxOb2RlKGRpdmlzaW9uSFRNTE5vZGUpO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uSFRNTFRyYW5zZm9ybTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRpdmlzaW9uSFRNTFRyYW5zZm9ybXM7XG59XG4iXSwibmFtZXMiOlsiVG9wbW9zdEhUTUxOb2RlIiwiZm9yRWFjaENoaWxkSFRNTE5PZGUiLCJjYWxsYmFjayIsImZvckVhY2hDaGlsZE5vZGUiLCJnZXRSdWxlTmFtZSIsInJ1bGVOYW1lIiwiSFRNTF9NQVJLRE9XTl9SVUxFX05BTUUiLCJnZXREaXZpc2lvbkhUTUxOb2RlIiwiaW5kZXgiLCJkaXZpc2lvbkhUTUxOb2RlIiwiZ2V0RGl2aXNpb25IVE1MTm9kZUF0IiwiZ2V0RGl2aXNpb25IVE1MTm9kZXMiLCJub2RlIiwiZGl2aXNpb25IVE1MTm9kZXMiLCJkaXZpc2lvbkhUTUxOb2Rlc0Zyb21Ob2RlIiwiYWRqdXN0SW5kZW50IiwiaW5kZW50IiwicmVzb2x2ZSIsImNvbnRleHQiLCJwYWdpbmF0ZSIsImFkZENvbnRlbnRzIiwiYWRkSW5kZXgiLCJwYWdlTnVtYmVyIiwiT2JqZWN0IiwiYXNzaWduIiwiaHRtbFRyYW5zZm9ybXMiLCJ0b3Btb3N0SFRNTE5vZGUiLCJkaXZpc2lvbkhUTUxUcmFuc2Zvcm1zIiwiZGl2aXNpb25IVE1MVHJhbnNmb3Jtc0Zyb21EaXZpc2lvbkhUTUxOb2RlcyIsImZvckVhY2giLCJkaXZpc2lvbkhUTUxUcmFuc2Zvcm0iLCJyZW1vdmUiLCJodG1sVHJhbnNmb3JtIiwiYXBwZW5kVG9Ub3Btb3N0SFRNTE5vZGUiLCJpbmRleERpcmVjdGl2ZUhUTUxOb2RlIiwiaW5kZXhEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlIiwiaW5kZXhIVE1MVHJhbnNmb3JtIiwiSW5kZXhIVE1MVHJhbnNmb3JtIiwiZnJvbUluZGV4RGlyZWN0aXZlSFRNTE5vZGVBbmREaXZpc2lvbkhUTUxOb2RlcyIsImFkZEFmdGVySW5kZXhEaXJlY3RpdmVIVE1MTm9kZSIsImNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGUiLCJjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUiLCJjb250ZW50c0xpc3RIVE1MVHJhbnNmb3JtIiwiQ29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSIsImZyb21Db250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlQW5kVG9wbW9zdEhUTUxOb2RlIiwiYWRkQWZ0ZXJDb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlIiwibW91bnQiLCJwYXJlbnRET01FbGVtZW50Iiwic2libGluZ0RPTUVsZW1lbnQiLCJjaGlsZE5vZGVzIiwiY2hpbGROb2RlIiwidW5tb3VudCIsImFzSFRNTCIsImh0bWwiLCJFTVBUWV9TVFJJTkciLCJjaGlsZEhUTUxOb2RlIiwiY2hpbGRIVE5NTE5vZGVIVE1MIiwiZnJvbU5vdGhpbmciLCJIVE1MTm9kZSIsImZyb21DaGlsZEhUTUxOb2RlcyIsImNoaWxkSFRNTE5vZGVzIiwidGFnTmFtZSIsImNsYXNzTmFtZSIsIm1hcCIsIkRpdmlzaW9uSFRNTFRyYW5zZm9ybSIsImZyb21EaXZpc2lvbkhUTUxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVdxQkE7OzsyREFUQTs0REFDVTsrREFDRzsrREFDSTt5QkFFVDt3QkFDVztxQkFDcUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlGLElBQUEsQUFBTUEsZ0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxxQkFBcUJDLFFBQVE7Z0JBQUksSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ0Q7WUFBVzs7O1lBRWxFRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBV0MsaUNBQXVCO2dCQUV4QyxPQUFPRDtZQUNUOzs7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