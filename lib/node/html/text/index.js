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
var _ruleNames = require("../../../ruleNames");
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
                var ruleName = _ruleNames.INDEX_TEXT_RULE_NAME;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvdGV4dC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHRIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL3RleHRcIjtcblxuaW1wb3J0IHsgSU5ERVhfVEVYVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4VGV4dEhUTUxOb2RlIGV4dGVuZHMgVGV4dEhUTUxOb2RlIHtcbiAgY29uc3RydWN0b3Iob3V0ZXJOb2RlLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBkb21FbGVtZW50LCB3b3JkT3JQaHJhc2UpIHtcbiAgICBzdXBlcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIGRvbUVsZW1lbnQsIHdvcmRPclBocmFzZSk7XG5cbiAgICB0aGlzLndvcmRPclBocmFzZSA9IHdvcmRPclBocmFzZTtcbiAgfVxuXG4gIGdldFdvcmRPclBocmFzZSgpIHtcbiAgICByZXR1cm4gdGhpcy53b3JkT3JQaHJhc2U7XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IElOREVYX1RFWFRfUlVMRV9OQU1FO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lO1xuICB9XG5cbiAgdGV4dChjb250ZXh0KSB7XG4gICAgY29uc3QgdGV4dCA9IGAke3RoaXMud29yZE9yUGhyYXNlfVxuYDtcblxuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgc3RyaW5nID0gcnVsZU5hbWU7ICAvLy5cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbVdvcmRPclBocmFzZSh3b3JkT3JQaHJhc2UpIHtcbiAgICBjb25zdCBpbmRleFRleHRIVE1MTm9kZSA9IFRleHRIVE1MTm9kZS5mcm9tTm90aGluZyhJbmRleFRleHRIVE1MTm9kZSwgd29yZE9yUGhyYXNlKTtcblxuICAgIHJldHVybiBpbmRleFRleHRIVE1MTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkluZGV4VGV4dEhUTUxOb2RlIiwib3V0ZXJOb2RlIiwicGFyZW50Tm9kZSIsImNoaWxkTm9kZXMiLCJkb21FbGVtZW50Iiwid29yZE9yUGhyYXNlIiwiZ2V0V29yZE9yUGhyYXNlIiwiZ2V0UnVsZU5hbWUiLCJydWxlTmFtZSIsIklOREVYX1RFWFRfUlVMRV9OQU1FIiwidGV4dCIsImNvbnRleHQiLCJhc1N0cmluZyIsInN0cmluZyIsImZyb21Xb3JkT3JQaHJhc2UiLCJpbmRleFRleHRIVE1MTm9kZSIsIlRleHRIVE1MTm9kZSIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsyREFKSTt5QkFFWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QixJQUFBLEFBQU1BLGtDQUFOO2NBQU1BO2FBQUFBLGtCQUNQQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFlBQVk7Z0NBRHBETDs7Z0JBRWpCLGtCQUZpQkE7WUFFWEM7WUFBV0M7WUFBWUM7WUFBWUM7WUFBWUM7O1FBRXJELE1BQUtBLFlBQVksR0FBR0E7OztrQkFKSEw7O1lBT25CTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFlBQVk7WUFDMUI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBV0MsK0JBQW9CO2dCQUVyQyxPQUFPRDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLEtBQUtDLE9BQU87Z0JBQ1YsSUFBTUQsT0FBTyxBQUFDLEdBQW9CLE9BQWxCLElBQUksQ0FBQ0wsWUFBWSxFQUFDO2dCQUdsQyxPQUFPSztZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1KLFdBQVcsSUFBSSxDQUFDRCxXQUFXLElBQzNCTSxTQUFTTCxVQUFXLEdBQUc7Z0JBRTdCLE9BQU9LO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsaUJBQWlCVCxZQUFZO2dCQUNsQyxJQUFNVSxvQkFBb0JDLGFBQVksQ0FBQ0MsV0FBVyxDQWhDakNqQixtQkFnQ3FESztnQkFFdEUsT0FBT1U7WUFDVDs7O1dBbkNtQmY7RUFBMEJnQixhQUFZIn0=