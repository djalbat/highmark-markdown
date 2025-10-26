"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MarkdownStyleParser;
    }
});
var _occamparsers = require("occam-parsers");
var _bnf = /*#__PURE__*/ _interop_require_default(require("./bnf"));
var _markdownStyle = /*#__PURE__*/ _interop_require_default(require("../node/markdownStyle"));
var _markdownStyle1 = /*#__PURE__*/ _interop_require_default(require("../map/nonTerminalNode/markdownStyle"));
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
var NonTerminalNodeMap = _markdownStyle1.default, defaultNonTerminalNode = _markdownStyle.default; ///
var MarkdownStyleParser = /*#__PURE__*/ function(CommonParser) {
    _inherits(MarkdownStyleParser, CommonParser);
    function MarkdownStyleParser() {
        _class_call_check(this, MarkdownStyleParser);
        return _call_super(this, MarkdownStyleParser, arguments);
    }
    _create_class(MarkdownStyleParser, null, [
        {
            key: "fromBNF",
            value: function fromBNF(bnf) {
                return _occamparsers.CommonParser.fromBNF(MarkdownStyleParser, bnf);
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _occamparsers.CommonParser.fromRules(MarkdownStyleParser, rules);
            }
        },
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _occamparsers.CommonParser.fromNothing(MarkdownStyleParser);
            }
        }
    ]);
    return MarkdownStyleParser;
}(_occamparsers.CommonParser);
_define_property(MarkdownStyleParser, "bnf", _bnf.default);
_define_property(MarkdownStyleParser, "NonTerminalNodeMap", NonTerminalNodeMap);
_define_property(MarkdownStyleParser, "defaultNonTerminalNode", defaultNonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93blN0eWxlL3BhcnNlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ29tbW9uUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IGJuZiBmcm9tIFwiLi9ibmZcIjtcbmltcG9ydCBNYXJrZG93blN0eWxlTk9kZSBmcm9tIFwiLi4vbm9kZS9tYXJrZG93blN0eWxlXCI7XG5pbXBvcnQgbWFya2Rvd25TdHlsZU5vblRlcm1pbmFsTm9kZU1hcCBmcm9tIFwiLi4vbWFwL25vblRlcm1pbmFsTm9kZS9tYXJrZG93blN0eWxlXCI7XG5cbmNvbnN0IE5vblRlcm1pbmFsTm9kZU1hcCA9IG1hcmtkb3duU3R5bGVOb25UZXJtaW5hbE5vZGVNYXAsICAvLy9cbiAgICAgIGRlZmF1bHROb25UZXJtaW5hbE5vZGUgPSBNYXJrZG93blN0eWxlTk9kZTsgIC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXJrZG93blN0eWxlUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGJuZiA9IGJuZjtcblxuICBzdGF0aWMgTm9uVGVybWluYWxOb2RlTWFwID0gTm9uVGVybWluYWxOb2RlTWFwO1xuXG4gIHN0YXRpYyBkZWZhdWx0Tm9uVGVybWluYWxOb2RlID0gZGVmYXVsdE5vblRlcm1pbmFsTm9kZTtcblxuICBzdGF0aWMgZnJvbUJORihibmYpIHsgcmV0dXJuIENvbW1vblBhcnNlci5mcm9tQk5GKE1hcmtkb3duU3R5bGVQYXJzZXIsIGJuZik7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVzKHJ1bGVzKSB7IHJldHVybiBDb21tb25QYXJzZXIuZnJvbVJ1bGVzKE1hcmtkb3duU3R5bGVQYXJzZXIsIHJ1bGVzKTsgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIENvbW1vblBhcnNlci5mcm9tTm90aGluZyhNYXJrZG93blN0eWxlUGFyc2VyKTsgfVxufVxuIl0sIm5hbWVzIjpbIk1hcmtkb3duU3R5bGVQYXJzZXIiLCJOb25UZXJtaW5hbE5vZGVNYXAiLCJtYXJrZG93blN0eWxlTm9uVGVybWluYWxOb2RlTWFwIiwiZGVmYXVsdE5vblRlcm1pbmFsTm9kZSIsIk1hcmtkb3duU3R5bGVOT2RlIiwiZnJvbUJORiIsImJuZiIsIkNvbW1vblBhcnNlciIsImZyb21SdWxlcyIsInJ1bGVzIiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBV3FCQTs7OzRCQVRROzBEQUViO29FQUNjO3FFQUNjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1QyxJQUFNQyxxQkFBcUJDLHVCQUErQixFQUNwREMseUJBQXlCQyxzQkFBaUIsRUFBRyxHQUFHO0FBRXZDLElBQUEsQUFBTUosb0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFPWkssS0FBQUE7bUJBQVAsU0FBT0EsUUFBUUMsR0FBRztnQkFBSSxPQUFPQywwQkFBWSxDQUFDRixPQUFPLENBUDlCTCxxQkFPb0RNO1lBQU07OztZQUV0RUUsS0FBQUE7bUJBQVAsU0FBT0EsVUFBVUMsS0FBSztnQkFBSSxPQUFPRiwwQkFBWSxDQUFDQyxTQUFTLENBVHBDUixxQkFTMERTO1lBQVE7OztZQUU5RUMsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9ILDBCQUFZLENBQUNHLFdBQVcsQ0FYbkNWO1lBVzBEOzs7V0FYMURBO0VBQTRCTywwQkFBWTtBQUMzRCxpQkFEbUJQLHFCQUNaTSxPQUFNQSxZQUFHO0FBRWhCLGlCQUhtQk4scUJBR1pDLHNCQUFxQkE7QUFFNUIsaUJBTG1CRCxxQkFLWkcsMEJBQXlCQSJ9