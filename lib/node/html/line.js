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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgcmVtb3ZlLCBpbnNlcnRBZnRlcndhcmRzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9kb21cIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORywgQ0FSUklBR0VfUkVUVVJOLCBERUZBVUxUX01BWElNVU1fTElORV9DSEFSQUNURVJTIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lSFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIGxpbmVzKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IG1heGltdW1MaW5lQ2hhcmFjdGVycyA9IERFRkFVTFRfTUFYSU1VTV9MSU5FX0NIQVJBQ1RFUlMgfSA9IGNvbnRleHQsXG4gICAgICAgICAgcGxhaW5UZXh0ID0gdGhpcy5hc1BsYWluVGV4dChjb250ZXh0KSxcbiAgICAgICAgICBwbGFpblRleHRMZW5ndGggPSBwbGFpblRleHQubGVuZ3RoLFxuICAgICAgICAgIGNoYXJhY3RlcnMgPSBwbGFpblRleHRMZW5ndGgsIC8vL1xuICAgICAgICAgIGxpbmVzID0gKGNoYXJhY3RlcnMgLyBtYXhpbXVtTGluZUNoYXJhY3RlcnMpICsgMTtcblxuICAgIHJldHVybiBsaW5lcztcbiAgfVxuXG4gIHByZXBhcmUoY29udGV4dCkge1xuICAgIGNvbnN0IG1hcmtkb3duTm9kZSA9IHRoaXMuZ2V0TWFya2Rvd25Ob2RlKCksXG4gICAgICAgICAgZmlyc3RUb2tlbkluZGV4ID0gbWFya2Rvd25Ob2RlLmdldEZpcnN0VG9rZW5JbmRleChjb250ZXh0KSxcbiAgICAgICAgICB0b2tlbkluZGV4ID0gZmlyc3RUb2tlbkluZGV4OyAvLy9cblxuICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgdG9rZW5JbmRleFxuICAgIH0pO1xuICB9XG5cbiAgZGlzcG9zZShjb250ZXh0KSB7XG4gICAgZGVsZXRlIGNvbnRleHQudG9rZW5JbmRleDtcbiAgfVxuXG4gIHJlbW91bnQoY29udGV4dCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgICBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50LFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gZG9tRWxlbWVudC5wcmV2aW91c1NpYmxpbmc7XG5cbiAgICB0aGlzLnByZXBhcmUoY29udGV4dCk7XG5cbiAgICB0aGlzLnVubW91bnQocGFyZW50RE9NRWxlbWVudCk7XG5cbiAgICB0aGlzLm1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KTtcblxuICAgIHRoaXMuZGlzcG9zZShjb250ZXh0KTtcbiAgfVxuXG4gIG1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IGRvbUVsZW1lbnQ7XG5cbiAgICB0aGlzLnByZXBhcmUoY29udGV4dCk7XG5cbiAgICBzdXBlci5tb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCk7XG5cbiAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudDsgIC8vL1xuXG4gICAgY29uc3QgY29udGVudCA9IENBUlJJQUdFX1JFVFVSTixcbiAgICAgICAgICB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHRleHROb2RlOyAgLy8vXG5cbiAgICBpbnNlcnRBZnRlcndhcmRzKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgc2libGluZ0RPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAvLy9cblxuICAgIHRoaXMuZGlzcG9zZShjb250ZXh0KTtcblxuICAgIHJldHVybiBzaWJsaW5nRE9NRWxlbWVudDtcbiAgfVxuXG4gIHVubW91bnQocGFyZW50RE9NRWxlbWVudCkge1xuICAgIHtcbiAgICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50LCAgLy8vXG4gICAgICAgICAgICBsYXN0Q2hpbGQgPSBkb21FbGVtZW50Lmxhc3RDaGlsZFxuXG4gICAgICBkb21FbGVtZW50ID0gbGFzdENoaWxkOyAgLy8vXG5cbiAgICAgIHJlbW92ZShkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50KTtcbiAgICB9XG5cbiAgICBzdXBlci51bm1vdW50KHBhcmVudERPTUVsZW1lbnQpO1xuICB9XG5cbiAgYXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGxldCBodG1sO1xuXG4gICAgdGhpcy5wcmVwYXJlKGNvbnRleHQpO1xuXG4gICAgaW5kZW50ID0gdGhpcy5hZGp1c3RJbmRlbnQoaW5kZW50KTtcblxuICAgIGNvbnN0IGNoaWxkTm9kZXNIVE1MID0gdGhpcy5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICBjb25zdCBzdGFydGluZ1RhZyA9IHRoaXMuc3RhcnRpbmdUYWcoY29udGV4dCksXG4gICAgICAgICAgY2xvc2luZ1RhZyA9IHRoaXMuY2xvc2luZ1RhZyhjb250ZXh0KTtcblxuICAgIGh0bWwgPSBgJHtpbmRlbnR9JHtzdGFydGluZ1RhZ30ke2NoaWxkTm9kZXNIVE1MfSR7Y2xvc2luZ1RhZ31cbmA7XG5cbiAgICB0aGlzLmRpc3Bvc2UoY29udGV4dCk7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGFzUGxhaW5UZXh0KGNvbnRleHQpIHtcbiAgICBsZXQgcGxhaW5UZXh0O1xuXG4gICAgdGhpcy5wcmVwYXJlKGNvbnRleHQpO1xuXG4gICAgcGxhaW5UZXh0ID0gc3VwZXIuYXNQbGFpblRleHQoY29udGV4dCk7XG5cbiAgICB0aGlzLmRpc3Bvc2UoY29udGV4dCk7XG5cbiAgICByZXR1cm4gcGxhaW5UZXh0O1xuICB9XG5cbiAgY2hpbGROb2Rlc0FzUGxhaW5UZXh0KGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzUGxhaW5UZXh0ID0gdGhpcy5yZWR1Y2VDaGlsZE5vZGUoKGNoaWxkTm9kZXNQbGFpblRleHQsIGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlUGxhaW5UZXh0ID0gY2hpbGROb2RlLmFzUGxhaW5UZXh0KGNvbnRleHQpO1xuXG4gICAgICBjaGlsZE5vZGVzUGxhaW5UZXh0ID0gYCR7Y2hpbGROb2Rlc1BsYWluVGV4dH0ke2NoaWxkTm9kZVBsYWluVGV4dH1gO1xuXG4gICAgICByZXR1cm4gY2hpbGROb2Rlc1BsYWluVGV4dDtcbiAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNQbGFpblRleHQ7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwic3BhblwiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBcImxpbmVcIjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MpIHtcbiAgICBpZiAoQ2xhc3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgQ2xhc3MgPSBMaW5lSFRNTE5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGxpbmVIVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21Ob3RoaW5nKENsYXNzKTtcblxuICAgIHJldHVybiBsaW5lSFRNTE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShDbGFzcywgb3V0ZXJOb2RlKSB7XG4gICAgaWYgKG91dGVyTm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvdXRlck5vZGUgPSBDbGFzczsgIC8vL1xuXG4gICAgICBDbGFzcyA9IExpbmVIVE1MTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgbGluZUhUTUxOb2RlID0gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShDbGFzcywgb3V0ZXJOb2RlKTtcblxuICAgIHJldHVybiBsaW5lSFRNTE5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJMaW5lSFRNTE5vZGUiLCJsaW5lcyIsImNvbnRleHQiLCJtYXhpbXVtTGluZUNoYXJhY3RlcnMiLCJERUZBVUxUX01BWElNVU1fTElORV9DSEFSQUNURVJTIiwicGxhaW5UZXh0IiwiYXNQbGFpblRleHQiLCJwbGFpblRleHRMZW5ndGgiLCJsZW5ndGgiLCJjaGFyYWN0ZXJzIiwicHJlcGFyZSIsIm1hcmtkb3duTm9kZSIsImdldE1hcmtkb3duTm9kZSIsImZpcnN0VG9rZW5JbmRleCIsImdldEZpcnN0VG9rZW5JbmRleCIsInRva2VuSW5kZXgiLCJPYmplY3QiLCJhc3NpZ24iLCJkaXNwb3NlIiwicmVtb3VudCIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwicGFyZW50RE9NRWxlbWVudCIsInBhcmVudEVsZW1lbnQiLCJzaWJsaW5nRE9NRWxlbWVudCIsInByZXZpb3VzU2libGluZyIsInVubW91bnQiLCJtb3VudCIsImNvbnRlbnQiLCJDQVJSSUFHRV9SRVRVUk4iLCJ0ZXh0Tm9kZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJpbnNlcnRBZnRlcndhcmRzIiwibGFzdENoaWxkIiwicmVtb3ZlIiwiYXNIVE1MIiwiaW5kZW50IiwiaHRtbCIsImFkanVzdEluZGVudCIsImNoaWxkTm9kZXNIVE1MIiwiY2hpbGROb2Rlc0FzSFRNTCIsInN0YXJ0aW5nVGFnIiwiY2xvc2luZ1RhZyIsImNoaWxkTm9kZXNBc1BsYWluVGV4dCIsImNoaWxkTm9kZXNQbGFpblRleHQiLCJyZWR1Y2VDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVQbGFpblRleHQiLCJFTVBUWV9TVFJJTkciLCJmcm9tTm90aGluZyIsIkNsYXNzIiwidW5kZWZpbmVkIiwibGluZUhUTUxOb2RlIiwiSFRNTE5vZGUiLCJmcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIiwidGFnTmFtZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7MkRBTEE7bUJBRW9CO3lCQUNzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRSxJQUFBLEFBQU1BLDZCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsT0FBTztnQkFDWCxxQ0FBb0VBLFFBQTVEQyx1QkFBQUEsb0VBQXdCQywwQ0FBK0IsbUNBQ3pEQyxZQUFZLElBQUksQ0FBQ0MsV0FBVyxDQUFDSixVQUM3Qkssa0JBQWtCRixVQUFVRyxNQUFNLEVBQ2xDQyxhQUFhRixpQkFDYk4sUUFBUSxBQUFDUSxhQUFhTix3QkFBeUI7Z0JBRXJELE9BQU9GO1lBQ1Q7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUVIsT0FBTztnQkFDYixJQUFNUyxlQUFlLElBQUksQ0FBQ0MsZUFBZSxJQUNuQ0Msa0JBQWtCRixhQUFhRyxrQkFBa0IsQ0FBQ1osVUFDbERhLGFBQWFGLGlCQUFpQixHQUFHO2dCQUV2Q0csT0FBT0MsTUFBTSxDQUFDZixTQUFTO29CQUNyQmEsWUFBQUE7Z0JBQ0Y7WUFDRjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRaEIsT0FBTztnQkFDYixPQUFPQSxRQUFRYSxVQUFVO1lBQzNCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFqQixPQUFPO2dCQUNiLElB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