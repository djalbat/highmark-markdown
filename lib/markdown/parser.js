"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MarkdownParser;
    }
});
var _occamparsers = require("occam-parsers");
var _bnf = /*#__PURE__*/ _interop_require_default(require("./bnf"));
var _markdown = /*#__PURE__*/ _interop_require_default(require("../node/markdown"));
var _markdown1 = /*#__PURE__*/ _interop_require_default(require("../map/node/markdown"));
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
var nodeMap = _markdown1.default; ///
var MarkdownParser = /*#__PURE__*/ function(CommonParser) {
    _inherits(MarkdownParser, CommonParser);
    function MarkdownParser() {
        _class_call_check(this, MarkdownParser);
        return _call_super(this, MarkdownParser, arguments);
    }
    _create_class(MarkdownParser, null, [
        {
            key: "fromBNF",
            value: function fromBNF(Class, bnf) {
                if (bnf === undefined) {
                    bnf = Class; ///
                    Class = MarkdownParser; ///
                }
                var nodeMap = Class.nodeMap, markdownParser = _occamparsers.CommonParser.fromBNF(Class, bnf), DefaultNonTerminalNode = _markdown.default; ///
                (0, _parser.setNonTerminalNodes)(markdownParser, nodeMap, DefaultNonTerminalNode);
                return markdownParser;
            }
        },
        {
            key: "fromRules",
            value: function fromRules(Class, rules) {
                if (rules === undefined) {
                    rules = Class; ///
                    Class = MarkdownParser; ///
                }
                var nodeMap = Class.nodeMap, markdownParser = _occamparsers.CommonParser.fromRules(Class, rules), DefaultNonTerminalNode = _markdown.default; ///
                (0, _parser.setNonTerminalNodes)(markdownParser, nodeMap, DefaultNonTerminalNode);
                return markdownParser;
            }
        },
        {
            key: "fromNothing",
            value: function fromNothing(Class) {
                if (Class === undefined) {
                    Class = MarkdownParser; ///
                }
                var nodeMap = Class.nodeMap, markdownParser = _occamparsers.CommonParser.fromNothing(Class), DefaultNonTerminalNode = _markdown.default; ///
                (0, _parser.setNonTerminalNodes)(markdownParser, nodeMap, DefaultNonTerminalNode);
                return markdownParser;
            }
        }
    ]);
    return MarkdownParser;
}(_occamparsers.CommonParser);
_define_property(MarkdownParser, "bnf", _bnf.default);
_define_property(MarkdownParser, "nodeMap", nodeMap);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93bi9wYXJzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENvbW1vblBhcnNlciB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBibmYgZnJvbSBcIi4vYm5mXCI7XG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi9ub2RlL21hcmtkb3duXCI7XG5pbXBvcnQgbWFya2Rvd25Ob2RlTWFwIGZyb20gXCIuLi9tYXAvbm9kZS9tYXJrZG93blwiO1xuXG5pbXBvcnQgeyBzZXROb25UZXJtaW5hbE5vZGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJzZXJcIjtcblxuY29uc3Qgbm9kZU1hcCA9IG1hcmtkb3duTm9kZU1hcDsgIC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXJrZG93blBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBibmYgPSBibmY7XG5cbiAgc3RhdGljIG5vZGVNYXAgPSBub2RlTWFwO1xuXG4gIHN0YXRpYyBmcm9tQk5GKENsYXNzLCBibmYpIHtcbiAgICBpZiAoYm5mID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGJuZiA9IENsYXNzOyAgLy8vXG5cbiAgICAgIENsYXNzID0gTWFya2Rvd25QYXJzZXI7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHsgbm9kZU1hcCB9ID0gQ2xhc3MsXG4gICAgICAgICAgbWFya2Rvd25QYXJzZXIgPSBDb21tb25QYXJzZXIuZnJvbUJORihDbGFzcywgYm5mKSxcbiAgICAgICAgICBEZWZhdWx0Tm9uVGVybWluYWxOb2RlID0gTWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgICBzZXROb25UZXJtaW5hbE5vZGVzKG1hcmtkb3duUGFyc2VyLCBub2RlTWFwLCBEZWZhdWx0Tm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBtYXJrZG93blBhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZXMoQ2xhc3MsIHJ1bGVzKSB7XG4gICAgaWYgKHJ1bGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJ1bGVzID0gQ2xhc3M7ICAvLy9cblxuICAgICAgQ2xhc3MgPSBNYXJrZG93blBhcnNlcjsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgeyBub2RlTWFwIH0gPSBDbGFzcyxcbiAgICAgICAgICBtYXJrZG93blBhcnNlciA9IENvbW1vblBhcnNlci5mcm9tUnVsZXMoQ2xhc3MsIHJ1bGVzKSxcbiAgICAgICAgICBEZWZhdWx0Tm9uVGVybWluYWxOb2RlID0gTWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgICBzZXROb25UZXJtaW5hbE5vZGVzKG1hcmtkb3duUGFyc2VyLCBub2RlTWFwLCBEZWZhdWx0Tm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBtYXJrZG93blBhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcykge1xuICAgIGlmIChDbGFzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBDbGFzcyA9IE1hcmtkb3duUGFyc2VyOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCB7IG5vZGVNYXAgfSA9IENsYXNzLFxuICAgICAgICAgIG1hcmtkb3duUGFyc2VyID0gQ29tbW9uUGFyc2VyLmZyb21Ob3RoaW5nKENsYXNzKSxcbiAgICAgICAgICBEZWZhdWx0Tm9uVGVybWluYWxOb2RlID0gTWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgICBzZXROb25UZXJtaW5hbE5vZGVzKG1hcmtkb3duUGFyc2VyLCBub2RlTWFwLCBEZWZhdWx0Tm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBtYXJrZG93blBhcnNlcjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk1hcmtkb3duUGFyc2VyIiwibm9kZU1hcCIsIm1hcmtkb3duTm9kZU1hcCIsImZyb21CTkYiLCJDbGFzcyIsImJuZiIsInVuZGVmaW5lZCIsIm1hcmtkb3duUGFyc2VyIiwiQ29tbW9uUGFyc2VyIiwiRGVmYXVsdE5vblRlcm1pbmFsTm9kZSIsIk1hcmtkb3duTm9kZSIsInNldE5vblRlcm1pbmFsTm9kZXMiLCJmcm9tUnVsZXMiLCJydWxlcyIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVlxQkE7Ozs0QkFWUTswREFFYjsrREFDUztnRUFDRztzQkFFUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEMsSUFBTUMsVUFBVUMsa0JBQWUsRUFBRyxHQUFHO0FBRXRCLElBQUEsQUFBTUYsK0JBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBS1pHLEtBQUFBO21CQUFQLFNBQU9BLFFBQVFDLEtBQUssRUFBRUMsR0FBRztnQkFDdkIsSUFBSUEsUUFBUUMsV0FBVztvQkFDckJELE1BQU1ELE9BQVEsR0FBRztvQkFFakJBLFFBVGVKLGdCQVNTLEdBQUc7Z0JBQzdCO2dCQUVBLElBQU0sQUFBRUMsVUFBWUcsTUFBWkgsU0FDRk0saUJBQWlCQywwQkFBWSxDQUFDTCxPQUFPLENBQUNDLE9BQU9DLE1BQzdDSSx5QkFBeUJDLGlCQUFZLEVBQUcsR0FBRztnQkFFakRDLElBQUFBLDJCQUFtQixFQUFDSixnQkFBZ0JOLFNBQVNRO2dCQUU3QyxPQUFPRjtZQUNUOzs7WUFFT0ssS0FBQUE7bUJBQVAsU0FBT0EsVUFBVVIsS0FBSyxFQUFFUyxLQUFLO2dCQUMzQixJQUFJQSxVQUFVUCxXQUFXO29CQUN2Qk8sUUFBUVQsT0FBUSxHQUFHO29CQUVuQkEsUUF6QmVKLGdCQXlCUyxHQUFHO2dCQUM3QjtnQkFFQSxJQUFNLEFBQUVDLFVBQVlHLE1BQVpILFNBQ0ZNLGlCQUFpQkMsMEJBQVksQ0FBQ0ksU0FBUyxDQUFDUixPQUFPUyxRQUMvQ0oseUJBQXlCQyxpQkFBWSxFQUFHLEdBQUc7Z0JBRWpEQyxJQUFBQSwyQkFBbUIsRUFBQ0osZ0JBQWdCTixTQUFTUTtnQkFFN0MsT0FBT0Y7WUFDVDs7O1lBRU9PLEtBQUFBO21CQUFQLFNBQU9BLFlBQVlWLEtBQUs7Z0JBQ3RCLElBQUlBLFVBQVVFLFdBQVc7b0JBQ3ZCRixRQXZDZUosZ0JBdUNTLEdBQUc7Z0JBQzdCO2dCQUVBLElBQU0sQUFBRUMsVUFBWUcsTUFBWkgsU0FDRk0saUJBQWlCQywwQkFBWSxDQUFDTSxXQUFXLENBQUNWLFFBQzFDSyx5QkFBeUJDLGlCQUFZLEVBQUcsR0FBRztnQkFFakRDLElBQUFBLDJCQUFtQixFQUFDSixnQkFBZ0JOLFNBQVNRO2dCQUU3QyxPQUFPRjtZQUNUOzs7V0FqRG1CUDtFQUF1QlEsMEJBQVk7QUFDdEQsaUJBRG1CUixnQkFDWkssT0FBTUEsWUFBRztBQUVoQixpQkFIbUJMLGdCQUdaQyxXQUFVQSJ9