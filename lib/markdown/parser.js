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
            value: function fromBNF(bnf) {
                var markdownParser = _occamparsers.CommonParser.fromBNF(MarkdownParser, bnf), DefaultNonTerminalNode = _markdown.default; ///
                (0, _parser.setNonTerminalNodes)(markdownParser, nodeMap, DefaultNonTerminalNode);
                return markdownParser;
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                var markdownParser = _occamparsers.CommonParser.fromRules(MarkdownParser, rules), DefaultNonTerminalNode = _markdown.default; ///
                (0, _parser.setNonTerminalNodes)(markdownParser, nodeMap, DefaultNonTerminalNode);
                return markdownParser;
            }
        },
        {
            key: "fromNothing",
            value: function fromNothing() {
                var markdownParser = _occamparsers.CommonParser.fromNothing(MarkdownParser), DefaultNonTerminalNode = _markdown.default; ///
                (0, _parser.setNonTerminalNodes)(markdownParser, nodeMap, DefaultNonTerminalNode);
                return markdownParser;
            }
        }
    ]);
    return MarkdownParser;
}(_occamparsers.CommonParser);
_define_property(MarkdownParser, "bnf", _bnf.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93bi9wYXJzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENvbW1vblBhcnNlciB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBibmYgZnJvbSBcIi4vYm5mXCI7XG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi9ub2RlL21hcmtkb3duXCI7XG5pbXBvcnQgbWFya2Rvd25Ob2RlTWFwIGZyb20gXCIuLi9tYXAvbm9kZS9tYXJrZG93blwiO1xuXG5pbXBvcnQgeyBzZXROb25UZXJtaW5hbE5vZGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJzZXJcIjtcblxuY29uc3Qgbm9kZU1hcCA9IG1hcmtkb3duTm9kZU1hcDsgIC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXJrZG93blBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBibmYgPSBibmY7XG5cbiAgc3RhdGljIGZyb21CTkYoYm5mKSB7XG4gICAgY29uc3QgbWFya2Rvd25QYXJzZXIgPSBDb21tb25QYXJzZXIuZnJvbUJORihNYXJrZG93blBhcnNlciwgYm5mKSxcbiAgICAgICAgICBEZWZhdWx0Tm9uVGVybWluYWxOb2RlID0gTWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgICBzZXROb25UZXJtaW5hbE5vZGVzKG1hcmtkb3duUGFyc2VyLCBub2RlTWFwLCBEZWZhdWx0Tm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBtYXJrZG93blBhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZXMocnVsZXMpIHtcbiAgICBjb25zdCBtYXJrZG93blBhcnNlciA9IENvbW1vblBhcnNlci5mcm9tUnVsZXMoTWFya2Rvd25QYXJzZXIsIHJ1bGVzKSxcbiAgICAgICAgICBEZWZhdWx0Tm9uVGVybWluYWxOb2RlID0gTWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgICBzZXROb25UZXJtaW5hbE5vZGVzKG1hcmtkb3duUGFyc2VyLCBub2RlTWFwLCBEZWZhdWx0Tm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBtYXJrZG93blBhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBtYXJrZG93blBhcnNlciA9IENvbW1vblBhcnNlci5mcm9tTm90aGluZyhNYXJrZG93blBhcnNlciksXG4gICAgICAgICAgRGVmYXVsdE5vblRlcm1pbmFsTm9kZSA9IE1hcmtkb3duTm9kZTsgIC8vL1xuXG4gICAgc2V0Tm9uVGVybWluYWxOb2RlcyhtYXJrZG93blBhcnNlciwgbm9kZU1hcCwgRGVmYXVsdE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gbWFya2Rvd25QYXJzZXI7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJNYXJrZG93blBhcnNlciIsIm5vZGVNYXAiLCJtYXJrZG93bk5vZGVNYXAiLCJmcm9tQk5GIiwiYm5mIiwibWFya2Rvd25QYXJzZXIiLCJDb21tb25QYXJzZXIiLCJEZWZhdWx0Tm9uVGVybWluYWxOb2RlIiwiTWFya2Rvd25Ob2RlIiwic2V0Tm9uVGVybWluYWxOb2RlcyIsImZyb21SdWxlcyIsInJ1bGVzIiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7OzRCQVZROzBEQUViOytEQUNTO2dFQUNHO3NCQUVROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwQyxJQUFNQyxVQUFVQyxrQkFBZSxFQUFHLEdBQUc7QUFFdEIsSUFBQSxBQUFNRiwrQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFHWkcsS0FBQUE7bUJBQVAsU0FBT0EsUUFBUUMsR0FBRztnQkFDaEIsSUFBTUMsaUJBQWlCQywwQkFBWSxDQUFDSCxPQUFPLENBSjFCSCxnQkFJMkNJLE1BQ3RERyx5QkFBeUJDLGlCQUFZLEVBQUcsR0FBRztnQkFFakRDLElBQUFBLDJCQUFtQixFQUFDSixnQkFBZ0JKLFNBQVNNO2dCQUU3QyxPQUFPRjtZQUNUOzs7WUFFT0ssS0FBQUE7bUJBQVAsU0FBT0EsVUFBVUMsS0FBSztnQkFDcEIsSUFBTU4saUJBQWlCQywwQkFBWSxDQUFDSSxTQUFTLENBYjVCVixnQkFhNkNXLFFBQ3hESix5QkFBeUJDLGlCQUFZLEVBQUcsR0FBRztnQkFFakRDLElBQUFBLDJCQUFtQixFQUFDSixnQkFBZ0JKLFNBQVNNO2dCQUU3QyxPQUFPRjtZQUNUOzs7WUFFT08sS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTVAsaUJBQWlCQywwQkFBWSxDQUFDTSxXQUFXLENBdEI5QlosaUJBdUJYTyx5QkFBeUJDLGlCQUFZLEVBQUcsR0FBRztnQkFFakRDLElBQUFBLDJCQUFtQixFQUFDSixnQkFBZ0JKLFNBQVNNO2dCQUU3QyxPQUFPRjtZQUNUOzs7V0E1Qm1CTDtFQUF1Qk0sMEJBQVk7QUFDdEQsaUJBRG1CTixnQkFDWkksT0FBTUEsWUFBRyJ9