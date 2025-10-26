"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexTextHTMLNode;
    }
});
var _text = /*#__PURE__*/ _interop_require_default(require("../../../node/html/text"));
var _markdown = require("../../../ruleNames/markdown");
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
var IndexTextHTMLNode = /*#__PURE__*/ function(TextHTMLNode) {
    _inherits(IndexTextHTMLNode, TextHTMLNode);
    function IndexTextHTMLNode(outerNode, parentNode, childNodes, domElement, wordOrPhrase) {
        _class_call_check(this, IndexTextHTMLNode);
        var _this;
        _this = _call_super(this, IndexTextHTMLNode, [
            outerNode,
            parentNode,
            childNodes,
            domElement,
            wordOrPhrase
        ]);
        _this.wordOrPhrase = wordOrPhrase;
        return _this;
    }
    _create_class(IndexTextHTMLNode, [
        {
            key: "getWordOrPhrase",
            value: function getWordOrPhrase() {
                return this.wordOrPhrase;
            }
        },
        {
            key: "getRuleName",
            value: function getRuleName() {
                var ruleName = _markdown.INDEX_TEXT_MARKDOWN_RULE_NAME;
                return ruleName;
            }
        },
        {
            key: "text",
            value: function text(context) {
                var text = "".concat(this.wordOrPhrase, "\n");
                return text;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var ruleName = this.getRuleName(), string = ruleName; //.
                return string;
            }
        }
    ], [
        {
            key: "fromWordOrPhrase",
            value: function fromWordOrPhrase(wordOrPhrase) {
                var indexTextHTMLNode = _text.default.fromNothing(IndexTextHTMLNode, wordOrPhrase);
                return indexTextHTMLNode;
            }
        }
    ]);
    return IndexTextHTMLNode;
}(_text.default);
_define_property(IndexTextHTMLNode, "tagName", null);
_define_property(IndexTextHTMLNode, "className", null);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvdGV4dC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHRIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL3RleHRcIjtcblxuaW1wb3J0IHsgSU5ERVhfVEVYVF9NQVJLRE9XTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vLi4vcnVsZU5hbWVzL21hcmtkb3duXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4VGV4dEhUTUxOb2RlIGV4dGVuZHMgVGV4dEhUTUxOb2RlIHtcbiAgY29uc3RydWN0b3Iob3V0ZXJOb2RlLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBkb21FbGVtZW50LCB3b3JkT3JQaHJhc2UpIHtcbiAgICBzdXBlcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIGRvbUVsZW1lbnQsIHdvcmRPclBocmFzZSk7XG5cbiAgICB0aGlzLndvcmRPclBocmFzZSA9IHdvcmRPclBocmFzZTtcbiAgfVxuXG4gIGdldFdvcmRPclBocmFzZSgpIHtcbiAgICByZXR1cm4gdGhpcy53b3JkT3JQaHJhc2U7XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IElOREVYX1RFWFRfTUFSS0RPV05fUlVMRV9OQU1FO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lO1xuICB9XG5cbiAgdGV4dChjb250ZXh0KSB7XG4gICAgY29uc3QgdGV4dCA9IGAke3RoaXMud29yZE9yUGhyYXNlfVxuYDtcblxuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgc3RyaW5nID0gcnVsZU5hbWU7ICAvLy5cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IG51bGw7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IG51bGw7XG5cbiAgc3RhdGljIGZyb21Xb3JkT3JQaHJhc2Uod29yZE9yUGhyYXNlKSB7XG4gICAgY29uc3QgaW5kZXhUZXh0SFRNTE5vZGUgPSBUZXh0SFRNTE5vZGUuZnJvbU5vdGhpbmcoSW5kZXhUZXh0SFRNTE5vZGUsIHdvcmRPclBocmFzZSk7XG5cbiAgICByZXR1cm4gaW5kZXhUZXh0SFRNTE5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbmRleFRleHRIVE1MTm9kZSIsIm91dGVyTm9kZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGVzIiwiZG9tRWxlbWVudCIsIndvcmRPclBocmFzZSIsImdldFdvcmRPclBocmFzZSIsImdldFJ1bGVOYW1lIiwicnVsZU5hbWUiLCJJTkRFWF9URVhUX01BUktET1dOX1JVTEVfTkFNRSIsInRleHQiLCJjb250ZXh0IiwiYXNTdHJpbmciLCJzdHJpbmciLCJmcm9tV29yZE9yUGhyYXNlIiwiaW5kZXhUZXh0SFRNTE5vZGUiLCJUZXh0SFRNTE5vZGUiLCJmcm9tTm90aGluZyIsInRhZ05hbWUiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OzJEQUpJO3dCQUVxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0IsSUFBQSxBQUFNQSxrQ0FBTjtjQUFNQTthQUFBQSxrQkFDUEMsU0FBUyxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxZQUFZO2dDQURwREw7O2dCQUVqQixrQkFGaUJBO1lBRVhDO1lBQVdDO1lBQVlDO1lBQVlDO1lBQVlDOztRQUVyRCxNQUFLQSxZQUFZLEdBQUdBOzs7a0JBSkhMOztZQU9uQk0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxZQUFZO1lBQzFCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLHVDQUE2QjtnQkFFOUMsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxLQUFLQyxPQUFPO2dCQUNWLElBQU1ELE9BQU8sQUFBQyxHQUFvQixPQUFsQixJQUFJLENBQUNMLFlBQVksRUFBQztnQkFHbEMsT0FBT0s7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSixXQUFXLElBQUksQ0FBQ0QsV0FBVyxJQUMzQk0sU0FBU0wsVUFBVyxHQUFHO2dCQUU3QixPQUFPSztZQUNUOzs7O1lBTU9DLEtBQUFBO21CQUFQLFNBQU9BLGlCQUFpQlQsWUFBWTtnQkFDbEMsSUFBTVUsb0JBQW9CQyxhQUFZLENBQUNDLFdBQVcsQ0FwQ2pDakIsbUJBb0NxREs7Z0JBRXRFLE9BQU9VO1lBQ1Q7OztXQXZDbUJmO0VBQTBCZ0IsYUFBWTtBQStCekQsaUJBL0JtQmhCLG1CQStCWmtCLFdBQVU7QUFFakIsaUJBakNtQmxCLG1CQWlDWm1CLGFBQVkifQ==