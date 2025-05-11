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
var _markdownStyle1 = /*#__PURE__*/ _interop_require_default(require("../map/node/markdownStyle"));
var _parser = require("../utilities/parser");
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
var nodeMap = _markdownStyle1.default; ///
var MarkdownStyleParser = /*#__PURE__*/ function(CommonParser) {
    _inherits(MarkdownStyleParser, CommonParser);
    function MarkdownStyleParser() {
        _class_call_check(this, MarkdownStyleParser);
        return _call_super(this, MarkdownStyleParser, arguments);
    }
    _create_class(MarkdownStyleParser, null, [
        {
            key: "fromBNF",
            value: function fromBNF(Class, bnf) {
                if (bnf === undefined) {
                    bnf = Class; ///
                    Class = MarkdownStyleParser; ///
                }
                var nodeMap = Class.nodeMap, markdownStyleParser = _occamparsers.CommonParser.fromBNF(Class, bnf), DefaultNonTerminalNode = _markdownStyle.default; ///
                (0, _parser.setNonTerminalNodes)(markdownStyleParser, nodeMap, DefaultNonTerminalNode);
                return markdownStyleParser;
            }
        },
        {
            key: "fromRules",
            value: function fromRules(Class, rules) {
                if (rules === undefined) {
                    rules = Class; ///
                    Class = MarkdownStyleParser; ///
                }
                var nodeMap = Class.nodeMap, markdownStyleParser = _occamparsers.CommonParser.fromRules(Class, rules), DefaultNonTerminalNode = _markdownStyle.default; ///
                (0, _parser.setNonTerminalNodes)(markdownStyleParser, nodeMap, DefaultNonTerminalNode);
                return markdownStyleParser;
            }
        },
        {
            key: "fromNothing",
            value: function fromNothing(Class) {
                if (Class === undefined) {
                    Class = MarkdownStyleParser; ///
                }
                var nodeMap = Class.nodeMap, markdownStyleParser = _occamparsers.CommonParser.fromNothing(Class), DefaultNonTerminalNode = _markdownStyle.default; ///
                (0, _parser.setNonTerminalNodes)(markdownStyleParser, nodeMap, DefaultNonTerminalNode);
                return markdownStyleParser;
            }
        }
    ]);
    return MarkdownStyleParser;
}(_occamparsers.CommonParser);
_define_property(MarkdownStyleParser, "bnf", _bnf.default);
_define_property(MarkdownStyleParser, "nodeMap", nodeMap);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93blN0eWxlL3BhcnNlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ29tbW9uUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IGJuZiBmcm9tIFwiLi9ibmZcIjtcbmltcG9ydCBNYXJrZG93blN0eWxlTm9kZSBmcm9tIFwiLi4vbm9kZS9tYXJrZG93blN0eWxlXCI7XG5pbXBvcnQgbWFya2Rvd25TdHlsZU5vZGVNYXAgZnJvbSBcIi4uL21hcC9ub2RlL21hcmtkb3duU3R5bGVcIjtcblxuaW1wb3J0IHsgc2V0Tm9uVGVybWluYWxOb2RlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFyc2VyXCI7XG5cbmNvbnN0IG5vZGVNYXAgPSBtYXJrZG93blN0eWxlTm9kZU1hcDsgIC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXJrZG93blN0eWxlUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGJuZiA9IGJuZjtcblxuICBzdGF0aWMgbm9kZU1hcCA9IG5vZGVNYXA7XG5cbiAgc3RhdGljIGZyb21CTkYoQ2xhc3MsIGJuZikge1xuICAgIGlmIChibmYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgYm5mID0gQ2xhc3M7ICAvLy9cblxuICAgICAgQ2xhc3MgPSBNYXJrZG93blN0eWxlUGFyc2VyOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCB7IG5vZGVNYXAgfSA9IENsYXNzLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGVQYXJzZXIgPSBDb21tb25QYXJzZXIuZnJvbUJORihDbGFzcywgYm5mKSxcbiAgICAgICAgICBEZWZhdWx0Tm9uVGVybWluYWxOb2RlID0gTWFya2Rvd25TdHlsZU5vZGU7ICAvLy9cblxuICAgIHNldE5vblRlcm1pbmFsTm9kZXMobWFya2Rvd25TdHlsZVBhcnNlciwgbm9kZU1hcCwgRGVmYXVsdE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gbWFya2Rvd25TdHlsZVBhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZXMoQ2xhc3MsIHJ1bGVzKSB7XG4gICAgaWYgKHJ1bGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJ1bGVzID0gQ2xhc3M7ICAvLy9cblxuICAgICAgQ2xhc3MgPSBNYXJrZG93blN0eWxlUGFyc2VyOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCB7IG5vZGVNYXAgfSA9IENsYXNzLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGVQYXJzZXIgPSBDb21tb25QYXJzZXIuZnJvbVJ1bGVzKENsYXNzLCBydWxlcyksXG4gICAgICAgICAgRGVmYXVsdE5vblRlcm1pbmFsTm9kZSA9IE1hcmtkb3duU3R5bGVOb2RlOyAgLy8vXG5cbiAgICBzZXROb25UZXJtaW5hbE5vZGVzKG1hcmtkb3duU3R5bGVQYXJzZXIsIG5vZGVNYXAsIERlZmF1bHROb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIG1hcmtkb3duU3R5bGVQYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MpIHtcbiAgICBpZiAoQ2xhc3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgQ2xhc3MgPSBNYXJrZG93blN0eWxlUGFyc2VyOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCB7IG5vZGVNYXAgfSA9IENsYXNzLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGVQYXJzZXIgPSBDb21tb25QYXJzZXIuZnJvbU5vdGhpbmcoQ2xhc3MpLFxuICAgICAgICAgIERlZmF1bHROb25UZXJtaW5hbE5vZGUgPSBNYXJrZG93blN0eWxlTm9kZTsgIC8vL1xuXG4gICAgc2V0Tm9uVGVybWluYWxOb2RlcyhtYXJrZG93blN0eWxlUGFyc2VyLCBub2RlTWFwLCBEZWZhdWx0Tm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBtYXJrZG93blN0eWxlUGFyc2VyO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTWFya2Rvd25TdHlsZVBhcnNlciIsIm5vZGVNYXAiLCJtYXJrZG93blN0eWxlTm9kZU1hcCIsImZyb21CTkYiLCJDbGFzcyIsImJuZiIsInVuZGVmaW5lZCIsIm1hcmtkb3duU3R5bGVQYXJzZXIiLCJDb21tb25QYXJzZXIiLCJEZWZhdWx0Tm9uVGVybWluYWxOb2RlIiwiTWFya2Rvd25TdHlsZU5vZGUiLCJzZXROb25UZXJtaW5hbE5vZGVzIiwiZnJvbVJ1bGVzIiwicnVsZXMiLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFZcUJBOzs7NEJBVlE7MERBRWI7b0VBQ2M7cUVBQ0c7c0JBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBDLElBQU1DLFVBQVVDLHVCQUFvQixFQUFHLEdBQUc7QUFFM0IsSUFBQSxBQUFNRixvQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFLWkcsS0FBQUE7bUJBQVAsU0FBT0EsUUFBUUMsS0FBSyxFQUFFQyxHQUFHO2dCQUN2QixJQUFJQSxRQUFRQyxXQUFXO29CQUNyQkQsTUFBTUQsT0FBUSxHQUFHO29CQUVqQkEsUUFUZUoscUJBU2MsR0FBRztnQkFDbEM7Z0JBRUEsSUFBTSxBQUFFQyxVQUFZRyxNQUFaSCxTQUNGTSxzQkFBc0JDLDBCQUFZLENBQUNMLE9BQU8sQ0FBQ0MsT0FBT0MsTUFDbERJLHlCQUF5QkMsc0JBQWlCLEVBQUcsR0FBRztnQkFFdERDLElBQUFBLDJCQUFtQixFQUFDSixxQkFBcUJOLFNBQVNRO2dCQUVsRCxPQUFPRjtZQUNUOzs7WUFFT0ssS0FBQUE7bUJBQVAsU0FBT0EsVUFBVVIsS0FBSyxFQUFFUyxLQUFLO2dCQUMzQixJQUFJQSxVQUFVUCxXQUFXO29CQUN2Qk8sUUFBUVQsT0FBUSxHQUFHO29CQUVuQkEsUUF6QmVKLHFCQXlCYyxHQUFHO2dCQUNsQztnQkFFQSxJQUFNLEFBQUVDLFVBQVlHLE1BQVpILFNBQ0ZNLHNCQUFzQkMsMEJBQVksQ0FBQ0ksU0FBUyxDQUFDUixPQUFPUyxRQUNwREoseUJBQXlCQyxzQkFBaUIsRUFBRyxHQUFHO2dCQUV0REMsSUFBQUEsMkJBQW1CLEVBQUNKLHFCQUFxQk4sU0FBU1E7Z0JBRWxELE9BQU9GO1lBQ1Q7OztZQUVPTyxLQUFBQTttQkFBUCxTQUFPQSxZQUFZVixLQUFLO2dCQUN0QixJQUFJQSxVQUFVRSxXQUFXO29CQUN2QkYsUUF2Q2VKLHFCQXVDYyxHQUFHO2dCQUNsQztnQkFFQSxJQUFNLEFBQUVDLFVBQVlHLE1BQVpILFNBQ0ZNLHNCQUFzQkMsMEJBQVksQ0FBQ00sV0FBVyxDQUFDVixRQUMvQ0sseUJBQXlCQyxzQkFBaUIsRUFBRyxHQUFHO2dCQUV0REMsSUFBQUEsMkJBQW1CLEVBQUNKLHFCQUFxQk4sU0FBU1E7Z0JBRWxELE9BQU9GO1lBQ1Q7OztXQWpEbUJQO0VBQTRCUSwwQkFBWTtBQUMzRCxpQkFEbUJSLHFCQUNaSyxPQUFNQSxZQUFHO0FBRWhCLGlCQUhtQkwscUJBR1pDLFdBQVVBIn0=