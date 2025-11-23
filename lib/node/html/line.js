"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return LineHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../node/html"));
var _dom = require("../../utilities/dom");
var _constants = require("../../constants");
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
var LineHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(LineHTMLNode, HTMLNode);
    function LineHTMLNode() {
        _class_call_check(this, LineHTMLNode);
        return _call_super(this, LineHTMLNode, arguments);
    }
    _create_class(LineHTMLNode, [
        {
            key: "lines",
            value: function lines(context) {
                var _context_maximumLineCharacters = context.maximumLineCharacters, maximumLineCharacters = _context_maximumLineCharacters === void 0 ? _constants.DEFAULT_MAXIMUM_LINE_CHARACTERS : _context_maximumLineCharacters, plainText = this.asPlainText(context), plainTextLength = plainText.length, characters = plainTextLength, lines = characters / maximumLineCharacters + 1;
                return lines;
            }
        },
        {
            key: "content",
            value: function content(context) {
                var plainText = this.asPlainText(context), content = plainText; ///
                return content;
            }
        },
        {
            key: "prepare",
            value: function prepare(context) {
                var markdownNode = this.getMarkdownNode(), firstTokenIndex = markdownNode.getFirstTokenIndex(context), tokenIndex = firstTokenIndex; ///
                Object.assign(context, {
                    tokenIndex: tokenIndex
                });
            }
        },
        {
            key: "dispose",
            value: function dispose(context) {
                delete context.tokenIndex;
            }
        },
        {
            key: "remount",
            value: function remount(context) {
                var domElement = this.getDOMElement(), parentDOMElement = domElement.parentElement, siblingDOMElement = domElement.previousSibling;
                this.prepare(context);
                this.unmount(parentDOMElement);
                this.mount(parentDOMElement, siblingDOMElement, context);
                this.dispose(context);
            }
        },
        {
            key: "mount",
            value: function mount(parentDOMElement, siblingDOMElement, context) {
                var domElement;
                this.prepare(context);
                _get(_get_prototype_of(LineHTMLNode.prototype), "mount", this).call(this, parentDOMElement, siblingDOMElement, context);
                domElement = this.getDOMElement();
                parentDOMElement = domElement; ///
                var content = _constants.CARRIAGE_RETURN, textNode = document.createTextNode(content);
                domElement = textNode; ///
                (0, _dom.insertAfterwards)(domElement, parentDOMElement);
                domElement = this.getDOMElement();
                siblingDOMElement = domElement; ///
                this.dispose(context);
                return siblingDOMElement;
            }
        },
        {
            key: "unmount",
            value: function unmount(parentDOMElement) {
                {
                    var domElement;
                    domElement = this.getDOMElement();
                    var _$parentDOMElement = domElement, lastChild = domElement.lastChild;
                    domElement = lastChild; ///
                    (0, _dom.remove)(domElement, _$parentDOMElement);
                }
                _get(_get_prototype_of(LineHTMLNode.prototype), "unmount", this).call(this, parentDOMElement);
            }
        },
        {
            key: "asHTML",
            value: function asHTML(indent, context) {
                var html;
                this.prepare(context);
                indent = this.adjustIndent(indent);
                var childNodesHTML = this.childNodesAsHTML(indent, context);
                var startingTag = this.startingTag(context), closingTag = this.closingTag(context);
                html = "".concat(indent).concat(startingTag).concat(childNodesHTML).concat(closingTag, "\n");
                this.dispose(context);
                return html;
            }
        },
        {
            key: "asPlainText",
            value: function asPlainText(context) {
                var plainText;
                this.prepare(context);
                plainText = _get(_get_prototype_of(LineHTMLNode.prototype), "asPlainText", this).call(this, context);
                this.dispose(context);
                return plainText;
            }
        },
        {
            key: "childNodesAsPlainText",
            value: function childNodesAsPlainText(context) {
                var childNodesPlainText = this.reduceChildNode(function(childNodesPlainText, childNode) {
                    var childNodePlainText = childNode.asPlainText(context);
                    childNodesPlainText = "".concat(childNodesPlainText).concat(childNodePlainText);
                    return childNodesPlainText;
                }, _constants.EMPTY_STRING);
                return childNodesPlainText;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(Class) {
                if (Class === undefined) {
                    Class = LineHTMLNode; ///
                }
                var lineHTMLNode = _html.default.fromNothing(Class);
                return lineHTMLNode;
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(Class, outerNode) {
                if (outerNode === undefined) {
                    outerNode = Class; ///
                    Class = LineHTMLNode; ///
                }
                var lineHTMLNode = _html.default.fromOuterNode(Class, outerNode);
                return lineHTMLNode;
            }
        }
    ]);
    return LineHTMLNode;
}(_html.default);
_define_property(LineHTMLNode, "tagName", "span");
_define_property(LineHTMLNode, "className", "line");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgcmVtb3ZlLCBpbnNlcnRBZnRlcndhcmRzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9kb21cIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORywgQ0FSUklBR0VfUkVUVVJOLCBERUZBVUxUX01BWElNVU1fTElORV9DSEFSQUNURVJTIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lSFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIGxpbmVzKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IG1heGltdW1MaW5lQ2hhcmFjdGVycyA9IERFRkFVTFRfTUFYSU1VTV9MSU5FX0NIQVJBQ1RFUlMgfSA9IGNvbnRleHQsXG4gICAgICAgICAgcGxhaW5UZXh0ID0gdGhpcy5hc1BsYWluVGV4dChjb250ZXh0KSxcbiAgICAgICAgICBwbGFpblRleHRMZW5ndGggPSBwbGFpblRleHQubGVuZ3RoLFxuICAgICAgICAgIGNoYXJhY3RlcnMgPSBwbGFpblRleHRMZW5ndGgsIC8vL1xuICAgICAgICAgIGxpbmVzID0gKGNoYXJhY3RlcnMgLyBtYXhpbXVtTGluZUNoYXJhY3RlcnMpICsgMTtcblxuICAgIHJldHVybiBsaW5lcztcbiAgfVxuXG4gIGNvbnRlbnQoY29udGV4dCkge1xuICAgIGNvbnN0IHBsYWluVGV4dCA9IHRoaXMuYXNQbGFpblRleHQoY29udGV4dCksXG4gICAgICAgICAgY29udGVudCA9IHBsYWluVGV4dDsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBwcmVwYXJlKGNvbnRleHQpIHtcbiAgICBjb25zdCBtYXJrZG93bk5vZGUgPSB0aGlzLmdldE1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgIGZpcnN0VG9rZW5JbmRleCA9IG1hcmtkb3duTm9kZS5nZXRGaXJzdFRva2VuSW5kZXgoY29udGV4dCksXG4gICAgICAgICAgdG9rZW5JbmRleCA9IGZpcnN0VG9rZW5JbmRleDsgLy8vXG5cbiAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgIHRva2VuSW5kZXhcbiAgICB9KTtcbiAgfVxuXG4gIGRpc3Bvc2UoY29udGV4dCkge1xuICAgIGRlbGV0ZSBjb250ZXh0LnRva2VuSW5kZXg7XG4gIH1cblxuICByZW1vdW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQucGFyZW50RWxlbWVudCxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IGRvbUVsZW1lbnQucHJldmlvdXNTaWJsaW5nO1xuXG4gICAgdGhpcy5wcmVwYXJlKGNvbnRleHQpO1xuXG4gICAgdGhpcy51bm1vdW50KHBhcmVudERPTUVsZW1lbnQpO1xuXG4gICAgdGhpcy5tb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCk7XG5cbiAgICB0aGlzLmRpc3Bvc2UoY29udGV4dCk7XG4gIH1cblxuICBtb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgdGhpcy5wcmVwYXJlKGNvbnRleHQpO1xuXG4gICAgc3VwZXIubW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7ICAvLy9cblxuICAgIGNvbnN0IGNvbnRlbnQgPSBDQVJSSUFHRV9SRVRVUk4sXG4gICAgICAgICAgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KTtcblxuICAgIGRvbUVsZW1lbnQgPSB0ZXh0Tm9kZTsgIC8vL1xuXG4gICAgaW5zZXJ0QWZ0ZXJ3YXJkcyhkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50KTtcblxuICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgIHNpYmxpbmdET01FbGVtZW50ID0gZG9tRWxlbWVudDsgLy8vXG5cbiAgICB0aGlzLmRpc3Bvc2UoY29udGV4dCk7XG5cbiAgICByZXR1cm4gc2libGluZ0RPTUVsZW1lbnQ7XG4gIH1cblxuICB1bm1vdW50KHBhcmVudERPTUVsZW1lbnQpIHtcbiAgICB7XG4gICAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICAgICAgbGFzdENoaWxkID0gZG9tRWxlbWVudC5sYXN0Q2hpbGRcblxuICAgICAgZG9tRWxlbWVudCA9IGxhc3RDaGlsZDsgIC8vL1xuXG4gICAgICByZW1vdmUoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCk7XG4gICAgfVxuXG4gICAgc3VwZXIudW5tb3VudChwYXJlbnRET01FbGVtZW50KTtcbiAgfVxuXG4gIGFzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgaHRtbDtcblxuICAgIHRoaXMucHJlcGFyZShjb250ZXh0KTtcblxuICAgIGluZGVudCA9IHRoaXMuYWRqdXN0SW5kZW50KGluZGVudCk7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzSFRNTCA9IHRoaXMuY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgY29uc3Qgc3RhcnRpbmdUYWcgPSB0aGlzLnN0YXJ0aW5nVGFnKGNvbnRleHQpLFxuICAgICAgICAgIGNsb3NpbmdUYWcgPSB0aGlzLmNsb3NpbmdUYWcoY29udGV4dCk7XG5cbiAgICBodG1sID0gYCR7aW5kZW50fSR7c3RhcnRpbmdUYWd9JHtjaGlsZE5vZGVzSFRNTH0ke2Nsb3NpbmdUYWd9XG5gO1xuXG4gICAgdGhpcy5kaXNwb3NlKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBhc1BsYWluVGV4dChjb250ZXh0KSB7XG4gICAgbGV0IHBsYWluVGV4dDtcblxuICAgIHRoaXMucHJlcGFyZShjb250ZXh0KTtcblxuICAgIHBsYWluVGV4dCA9IHN1cGVyLmFzUGxhaW5UZXh0KGNvbnRleHQpO1xuXG4gICAgdGhpcy5kaXNwb3NlKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHBsYWluVGV4dDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc1BsYWluVGV4dChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2Rlc1BsYWluVGV4dCA9IHRoaXMucmVkdWNlQ2hpbGROb2RlKChjaGlsZE5vZGVzUGxhaW5UZXh0LCBjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVBsYWluVGV4dCA9IGNoaWxkTm9kZS5hc1BsYWluVGV4dChjb250ZXh0KTtcblxuICAgICAgY2hpbGROb2Rlc1BsYWluVGV4dCA9IGAke2NoaWxkTm9kZXNQbGFpblRleHR9JHtjaGlsZE5vZGVQbGFpblRleHR9YDtcblxuICAgICAgcmV0dXJuIGNoaWxkTm9kZXNQbGFpblRleHQ7XG4gICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICAgIHJldHVybiBjaGlsZE5vZGVzUGxhaW5UZXh0O1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInNwYW5cIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gXCJsaW5lXCI7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7XG4gICAgaWYgKENsYXNzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIENsYXNzID0gTGluZUhUTUxOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBsaW5lSFRNTE5vZGUgPSBIVE1MTm9kZS5mcm9tTm90aGluZyhDbGFzcyk7XG5cbiAgICByZXR1cm4gbGluZUhUTUxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUoQ2xhc3MsIG91dGVyTm9kZSkge1xuICAgIGlmIChvdXRlck5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgb3V0ZXJOb2RlID0gQ2xhc3M7ICAvLy9cblxuICAgICAgQ2xhc3MgPSBMaW5lSFRNTE5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGxpbmVIVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21PdXRlck5vZGUoQ2xhc3MsIG91dGVyTm9kZSk7XG5cbiAgICByZXR1cm4gbGluZUhUTUxOb2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTGluZUhUTUxOb2RlIiwibGluZXMiLCJjb250ZXh0IiwibWF4aW11bUxpbmVDaGFyYWN0ZXJzIiwiREVGQVVMVF9NQVhJTVVNX0xJTkVfQ0hBUkFDVEVSUyIsInBsYWluVGV4dCIsImFzUGxhaW5UZXh0IiwicGxhaW5UZXh0TGVuZ3RoIiwibGVuZ3RoIiwiY2hhcmFjdGVycyIsImNvbnRlbnQiLCJwcmVwYXJlIiwibWFya2Rvd25Ob2RlIiwiZ2V0TWFya2Rvd25Ob2RlIiwiZmlyc3RUb2tlbkluZGV4IiwiZ2V0Rmlyc3RUb2tlbkluZGV4IiwidG9rZW5JbmRleCIsIk9iamVjdCIsImFzc2lnbiIsImRpc3Bvc2UiLCJyZW1vdW50IiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJwYXJlbnRET01FbGVtZW50IiwicGFyZW50RWxlbWVudCIsInNpYmxpbmdET01FbGVtZW50IiwicHJldmlvdXNTaWJsaW5nIiwidW5tb3VudCIsIm1vdW50IiwiQ0FSUklBR0VfUkVUVVJOIiwidGV4dE5vZGUiLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwiaW5zZXJ0QWZ0ZXJ3YXJkcyIsImxhc3RDaGlsZCIsInJlbW92ZSIsImFzSFRNTCIsImluZGVudCIsImh0bWwiLCJhZGp1c3RJbmRlbnQiLCJjaGlsZE5vZGVzSFRNTCIsImNoaWxkTm9kZXNBc0hUTUwiLCJzdGFydGluZ1RhZyIsImNsb3NpbmdUYWciLCJjaGlsZE5vZGVzQXNQbGFpblRleHQiLCJjaGlsZE5vZGVzUGxhaW5UZXh0IiwicmVkdWNlQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlUGxhaW5UZXh0IiwiRU1QVFlfU1RSSU5HIiwiZnJvbU5vdGhpbmciLCJDbGFzcyIsInVuZGVmaW5lZCIsImxpbmVIVE1MTm9kZSIsIkhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSIsIm91dGVyTm9kZSIsInRhZ05hbWUiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7OzJEQUxBO21CQUVvQjt5QkFDc0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEUsSUFBQSxBQUFNQSw2QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLE9BQU87Z0JBQ1gscUNBQW9FQSxRQUE1REMsdUJBQUFBLG9FQUF3QkMsMENBQStCLG1DQUN6REMsWUFBWSxJQUFJLENBQUNDLFdBQVcsQ0FBQ0osVUFDN0JLLGtCQUFrQkYsVUFBVUcsTUFBTSxFQUNsQ0MsYUFBYUYsaUJBQ2JOLFFBQVEsQUFBQ1EsYUFBYU4sd0JBQXlCO2dCQUVyRCxPQUFPRjtZQUNUOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFSLE9BQU87Z0JBQ2IsSUFBTUcsWUFBWSxJQUFJLENBQUNDLFdBQVcsQ0FBQ0osVUFDN0JRLFVBQVVMLFdBQVksR0FBRztnQkFFL0IsT0FBT0s7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRVCxPQUFPO2dCQUNi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