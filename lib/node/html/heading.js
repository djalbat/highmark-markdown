"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return HeadingHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../node/html"));
var _contents = /*#__PURE__*/ _interop_require_default(require("../../node/html/anchor/contents"));
var _string = require("../../utilities/string");
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
var HeadingHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(HeadingHTMLNode, HTMLNode);
    function HeadingHTMLNode() {
        _class_call_check(this, HeadingHTMLNode);
        return _call_super(this, HeadingHTMLNode, arguments);
    }
    _create_class(HeadingHTMLNode, [
        {
            key: "getLineHTMLNode",
            value: function getLineHTMLNode() {
                var lineHTMLNode = this.findChildNode(function(childNode) {
                    var childNodeAnchorHTMLNode = _instanceof(childNode, _contents.default), childNodeLineHTMLNode = !childNodeAnchorHTMLNode;
                    if (childNodeLineHTMLNode) {
                        return true;
                    }
                });
                return lineHTMLNode;
            }
        },
        {
            key: "identifier",
            value: function identifier(context) {
                var plainText = this.childNodesAsPlainText(context), identifier = identifierFromPlainText(plainText);
                return identifier;
            }
        },
        {
            key: "anchor",
            value: function anchor(context) {
                var identifier = this.identifier(context), contentsAnchorHTMLNode = _contents.default.fromIdentifier(identifier), childNode = contentsAnchorHTMLNode; ///
                this.prependChildNode(childNode);
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(Class) {
                return _html.default.fromNothing(Class);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(Class, outerNode) {
                return _html.default.fromOuterNode(Class, outerNode);
            }
        }
    ]);
    return HeadingHTMLNode;
}(_html.default);
_define_property(HeadingHTMLNode, "tagName", "h1");
function identifierFromPlainText(plainText) {
    var string;
    string = plainText; ///
    string = string.toLowerCase();
    string = (0, _string.removeLeadingWhitespace)(string);
    string = (0, _string.replaceSpacesWithHyphens)(string);
    string = (0, _string.removeNonAlphabeticCharacters)(string);
    var identifier = string; ///
    return identifier;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvaGVhZGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcbmltcG9ydCBDb250ZW50c0FuY2hvckhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWwvYW5jaG9yL2NvbnRlbnRzXCI7XG5cbmltcG9ydCB7IHJlbW92ZUxlYWRpbmdXaGl0ZXNwYWNlLCByZXBsYWNlU3BhY2VzV2l0aEh5cGhlbnMsIHJlbW92ZU5vbkFscGhhYmV0aWNDaGFyYWN0ZXJzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGluZ0hUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBnZXRMaW5lSFRNTE5vZGUoKSB7XG4gICAgY29uc3QgbGluZUhUTUxOb2RlID0gdGhpcy5maW5kQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZUFuY2hvckhUTUxOb2RlID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIENvbnRlbnRzQW5jaG9ySFRNTE5vZGUpLFxuICAgICAgICAgICAgY2hpbGROb2RlTGluZUhUTUxOb2RlID0gIWNoaWxkTm9kZUFuY2hvckhUTUxOb2RlO1xuXG4gICAgICBpZiAoY2hpbGROb2RlTGluZUhUTUxOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxpbmVIVE1MTm9kZTtcbiAgfVxuXG4gIGlkZW50aWZpZXIoY29udGV4dCkge1xuICAgIGNvbnN0IHBsYWluVGV4dCA9IHRoaXMuY2hpbGROb2Rlc0FzUGxhaW5UZXh0KGNvbnRleHQpLFxuICAgICAgICAgIGlkZW50aWZpZXIgPSBpZGVudGlmaWVyRnJvbVBsYWluVGV4dChwbGFpblRleHQpO1xuXG4gICAgcmV0dXJuIGlkZW50aWZpZXI7XG4gIH1cblxuICBhbmNob3IoY29udGV4dCkge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSB0aGlzLmlkZW50aWZpZXIoY29udGV4dCksXG4gICAgICAgICAgY29udGVudHNBbmNob3JIVE1MTm9kZSA9IENvbnRlbnRzQW5jaG9ySFRNTE5vZGUuZnJvbUlkZW50aWZpZXIoaWRlbnRpZmllciksXG4gICAgICAgICAgY2hpbGROb2RlID0gY29udGVudHNBbmNob3JIVE1MTm9kZTsgLy8vXG5cbiAgICB0aGlzLnByZXBlbmRDaGlsZE5vZGUoY2hpbGROb2RlKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJoMVwiO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcykgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU5vdGhpbmcoQ2xhc3MpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUoQ2xhc3MsIG91dGVyTm9kZSkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShDbGFzcywgb3V0ZXJOb2RlKTsgfVxufVxuXG5mdW5jdGlvbiBpZGVudGlmaWVyRnJvbVBsYWluVGV4dChwbGFpblRleHQpIHtcbiAgbGV0IHN0cmluZztcblxuICBzdHJpbmcgPSBwbGFpblRleHQ7IC8vL1xuXG4gIHN0cmluZyA9IHN0cmluZy50b0xvd2VyQ2FzZSgpO1xuXG4gIHN0cmluZyA9IHJlbW92ZUxlYWRpbmdXaGl0ZXNwYWNlKHN0cmluZyk7XG5cbiAgc3RyaW5nID0gcmVwbGFjZVNwYWNlc1dpdGhIeXBoZW5zKHN0cmluZyk7XG5cbiAgc3RyaW5nID0gcmVtb3ZlTm9uQWxwaGFiZXRpY0NoYXJhY3RlcnMoc3RyaW5nKTtcblxuICBjb25zdCBpZGVudGlmaWVyID0gc3RyaW5nOyAgLy8vXG5cbiAgcmV0dXJuIGlkZW50aWZpZXI7XG59XG4iXSwibmFtZXMiOlsiSGVhZGluZ0hUTUxOb2RlIiwiZ2V0TGluZUhUTUxOb2RlIiwibGluZUhUTUxOb2RlIiwiZmluZENoaWxkTm9kZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZUFuY2hvckhUTUxOb2RlIiwiQ29udGVudHNBbmNob3JIVE1MTm9kZSIsImNoaWxkTm9kZUxpbmVIVE1MTm9kZSIsImlkZW50aWZpZXIiLCJjb250ZXh0IiwicGxhaW5UZXh0IiwiY2hpbGROb2Rlc0FzUGxhaW5UZXh0IiwiaWRlbnRpZmllckZyb21QbGFpblRleHQiLCJhbmNob3IiLCJjb250ZW50c0FuY2hvckhUTUxOb2RlIiwiZnJvbUlkZW50aWZpZXIiLCJwcmVwZW5kQ2hpbGROb2RlIiwiZnJvbU5vdGhpbmciLCJDbGFzcyIsIkhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSIsIm91dGVyTm9kZSIsInRhZ05hbWUiLCJzdHJpbmciLCJ0b0xvd2VyQ2FzZSIsInJlbW92ZUxlYWRpbmdXaGl0ZXNwYWNlIiwicmVwbGFjZVNwYWNlc1dpdGhIeXBoZW5zIiwicmVtb3ZlTm9uQWxwaGFiZXRpY0NoYXJhY3RlcnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7OzJEQUxBOytEQUNjO3NCQUU4RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLElBQUEsQUFBTUEsZ0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxlQUFlLElBQUksQ0FBQ0MsYUFBYSxDQUFDLFNBQUNDO29CQUN2QyxJQUFNQywwQkFBMkJELEFBQVMsWUFBVEEsV0FBcUJFLGlCQUFzQixHQUN0RUMsd0JBQXdCLENBQUNGO29CQUUvQixJQUFJRSx1QkFBdUI7d0JBQ3pCLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsT0FBT0w7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXQyxPQUFPO2dCQUNoQixJQUFNQyxZQUFZLElBQUksQ0FBQ0MscUJBQXFCLENBQUNGLFVBQ3ZDRCxhQUFhSSx3QkFBd0JGO2dCQUUzQyxPQUFPRjtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9KLE9BQU87Z0JBQ1osSUFBTUQsYUFBYSxJQUFJLENBQUNBLFVBQVUsQ0FBQ0MsVUFDN0JLLHlCQUF5QlIsaUJBQXNCLENBQUNTLGNBQWMsQ0FBQ1AsYUFDL0RKLFlBQVlVLHdCQUF3QixHQUFHO2dCQUU3QyxJQUFJLENBQUNFLGdCQUFnQixDQUFDWjtZQUN4Qjs7OztZQUlPYSxLQUFBQTttQkFBUCxTQUFPQSxZQUFZQyxLQUFLO2dCQUFJLE9BQU9DLGFBQVEsQ0FBQ0YsV0FBVyxDQUFDQztZQUFROzs7WUFFekRFLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNGLEtBQUssRUFBRUcsU0FBUztnQkFBSSxPQUFPRixhQUFRLENBQUNDLGFBQWEsQ0FBQ0YsT0FBT0c7WUFBWTs7O1dBakN2RXJCO0VBQXdCbUIsYUFBUTtBQTZCbkQsaUJBN0JtQm5CLGlCQTZCWnNCLFdBQVU7QUFPbkIsU0FBU1Ysd0JBQXdCRixTQUFTO0lBQ3hDLElBQUlhO0lBRUpBLFNBQVNiLFdBQVcsR0FBRztJQUV2QmEsU0FBU0EsT0FBT0MsV0FBVztJQUUzQkQsU0FBU0UsSUFBQUEsK0JBQXVCLEVBQUNGO0lBRWpDQSxTQUFTRyxJQUFBQSxnQ0FBd0IsRUFBQ0g7SUFFbENBLFNBQVNJLElBQUFBLHFDQUE2QixFQUFDSjtJQUV2QyxJQUFNZixhQUFhZSxRQUFTLEdBQUc7SUFFL0IsT0FBT2Y7QUFDVCJ9