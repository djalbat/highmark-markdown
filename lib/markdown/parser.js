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
var _markdown1 = /*#__PURE__*/ _interop_require_default(require("../map/nonTerminalNode/markdown"));
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
var NonTerminalNodeMap = _markdown1.default, defaultNonTerminalNode = _markdown.default; ///
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
                return _occamparsers.CommonParser.fromBNF(MarkdownParser, bnf);
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _occamparsers.CommonParser.fromRules(MarkdownParser, rules);
            }
        },
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _occamparsers.CommonParser.fromNothing(MarkdownParser);
            }
        }
    ]);
    return MarkdownParser;
}(_occamparsers.CommonParser);
_define_property(MarkdownParser, "bnf", _bnf.default);
_define_property(MarkdownParser, "NonTerminalNodeMap", NonTerminalNodeMap);
_define_property(MarkdownParser, "defaultNonTerminalNode", defaultNonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93bi9wYXJzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENvbW1vblBhcnNlciB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBibmYgZnJvbSBcIi4vYm5mXCI7XG5pbXBvcnQgTWFya2Rvd25OT2RlIGZyb20gXCIuLi9ub2RlL21hcmtkb3duXCI7XG5pbXBvcnQgbWFya2Rvd25Ob25UZXJtaW5hbE5vZGVNYXAgZnJvbSBcIi4uL21hcC9ub25UZXJtaW5hbE5vZGUvbWFya2Rvd25cIjtcblxuY29uc3QgTm9uVGVybWluYWxOb2RlTWFwID0gbWFya2Rvd25Ob25UZXJtaW5hbE5vZGVNYXAsICAvLy9cbiAgICAgIGRlZmF1bHROb25UZXJtaW5hbE5vZGUgPSBNYXJrZG93bk5PZGU7ICAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFya2Rvd25QYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgYm5mID0gYm5mO1xuXG4gIHN0YXRpYyBOb25UZXJtaW5hbE5vZGVNYXAgPSBOb25UZXJtaW5hbE5vZGVNYXA7XG5cbiAgc3RhdGljIGRlZmF1bHROb25UZXJtaW5hbE5vZGUgPSBkZWZhdWx0Tm9uVGVybWluYWxOb2RlO1xuXG4gIHN0YXRpYyBmcm9tQk5GKGJuZikgeyByZXR1cm4gQ29tbW9uUGFyc2VyLmZyb21CTkYoTWFya2Rvd25QYXJzZXIsIGJuZik7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVzKHJ1bGVzKSB7IHJldHVybiBDb21tb25QYXJzZXIuZnJvbVJ1bGVzKE1hcmtkb3duUGFyc2VyLCBydWxlcyk7IH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb21tb25QYXJzZXIuZnJvbU5vdGhpbmcoTWFya2Rvd25QYXJzZXIpOyB9XG59XG4iXSwibmFtZXMiOlsiTWFya2Rvd25QYXJzZXIiLCJOb25UZXJtaW5hbE5vZGVNYXAiLCJtYXJrZG93bk5vblRlcm1pbmFsTm9kZU1hcCIsImRlZmF1bHROb25UZXJtaW5hbE5vZGUiLCJNYXJrZG93bk5PZGUiLCJmcm9tQk5GIiwiYm5mIiwiQ29tbW9uUGFyc2VyIiwiZnJvbVJ1bGVzIiwicnVsZXMiLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7NEJBVFE7MERBRWI7K0RBQ1M7Z0VBQ2M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZDLElBQU1DLHFCQUFxQkMsa0JBQTBCLEVBQy9DQyx5QkFBeUJDLGlCQUFZLEVBQUcsR0FBRztBQUVsQyxJQUFBLEFBQU1KLCtCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBT1pLLEtBQUFBO21CQUFQLFNBQU9BLFFBQVFDLEdBQUc7Z0JBQUksT0FBT0MsMEJBQVksQ0FBQ0YsT0FBTyxDQVA5QkwsZ0JBTytDTTtZQUFNOzs7WUFFakVFLEtBQUFBO21CQUFQLFNBQU9BLFVBQVVDLEtBQUs7Z0JBQUksT0FBT0YsMEJBQVksQ0FBQ0MsU0FBUyxDQVRwQ1IsZ0JBU3FEUztZQUFROzs7WUFFekVDLEtBQUFBO21CQUFQLFNBQU9BO2dCQUFnQixPQUFPSCwwQkFBWSxDQUFDRyxXQUFXLENBWG5DVjtZQVdxRDs7O1dBWHJEQTtFQUF1Qk8sMEJBQVk7QUFDdEQsaUJBRG1CUCxnQkFDWk0sT0FBTUEsWUFBRztBQUVoQixpQkFIbUJOLGdCQUdaQyxzQkFBcUJBO0FBRTVCLGlCQUxtQkQsZ0JBS1pHLDBCQUF5QkEifQ==