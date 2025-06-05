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
            value: function fromBNF(bnf) {
                var markdownStyleParser = _occamparsers.CommonParser.fromBNF(MarkdownStyleParser, bnf), DefaultNonTerminalNode = _markdownStyle.default; ///
                (0, _parser.setNonTerminalNodes)(markdownStyleParser, nodeMap, DefaultNonTerminalNode);
                return markdownStyleParser;
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                var markdownStyleParser = _occamparsers.CommonParser.fromRules(MarkdownStyleParser, rules), DefaultNonTerminalNode = _markdownStyle.default; ///
                (0, _parser.setNonTerminalNodes)(markdownStyleParser, nodeMap, DefaultNonTerminalNode);
                return markdownStyleParser;
            }
        },
        {
            key: "fromNothing",
            value: function fromNothing() {
                var markdownStyleParser = _occamparsers.CommonParser.fromNothing(MarkdownStyleParser), DefaultNonTerminalNode = _markdownStyle.default; ///
                (0, _parser.setNonTerminalNodes)(markdownStyleParser, nodeMap, DefaultNonTerminalNode);
                return markdownStyleParser;
            }
        }
    ]);
    return MarkdownStyleParser;
}(_occamparsers.CommonParser);
_define_property(MarkdownStyleParser, "bnf", _bnf.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93blN0eWxlL3BhcnNlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ29tbW9uUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IGJuZiBmcm9tIFwiLi9ibmZcIjtcbmltcG9ydCBNYXJrZG93blN0eWxlTm9kZSBmcm9tIFwiLi4vbm9kZS9tYXJrZG93blN0eWxlXCI7XG5pbXBvcnQgbWFya2Rvd25TdHlsZU5vZGVNYXAgZnJvbSBcIi4uL21hcC9ub2RlL21hcmtkb3duU3R5bGVcIjtcblxuaW1wb3J0IHsgc2V0Tm9uVGVybWluYWxOb2RlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFyc2VyXCI7XG5cbmNvbnN0IG5vZGVNYXAgPSBtYXJrZG93blN0eWxlTm9kZU1hcDsgIC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXJrZG93blN0eWxlUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGJuZiA9IGJuZjtcblxuICBzdGF0aWMgZnJvbUJORihibmYpIHtcbiAgICBjb25zdCBtYXJrZG93blN0eWxlUGFyc2VyID0gQ29tbW9uUGFyc2VyLmZyb21CTkYoTWFya2Rvd25TdHlsZVBhcnNlciwgYm5mKSxcbiAgICAgICAgICBEZWZhdWx0Tm9uVGVybWluYWxOb2RlID0gTWFya2Rvd25TdHlsZU5vZGU7ICAvLy9cblxuICAgIHNldE5vblRlcm1pbmFsTm9kZXMobWFya2Rvd25TdHlsZVBhcnNlciwgbm9kZU1hcCwgRGVmYXVsdE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gbWFya2Rvd25TdHlsZVBhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZXMocnVsZXMpIHtcbiAgICBjb25zdCBtYXJrZG93blN0eWxlUGFyc2VyID0gQ29tbW9uUGFyc2VyLmZyb21SdWxlcyhNYXJrZG93blN0eWxlUGFyc2VyLCBydWxlcyksXG4gICAgICAgICAgRGVmYXVsdE5vblRlcm1pbmFsTm9kZSA9IE1hcmtkb3duU3R5bGVOb2RlOyAgLy8vXG5cbiAgICBzZXROb25UZXJtaW5hbE5vZGVzKG1hcmtkb3duU3R5bGVQYXJzZXIsIG5vZGVNYXAsIERlZmF1bHROb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIG1hcmtkb3duU3R5bGVQYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbWFya2Rvd25TdHlsZVBhcnNlciA9IENvbW1vblBhcnNlci5mcm9tTm90aGluZyhNYXJrZG93blN0eWxlUGFyc2VyKSxcbiAgICAgICAgICBEZWZhdWx0Tm9uVGVybWluYWxOb2RlID0gTWFya2Rvd25TdHlsZU5vZGU7ICAvLy9cblxuICAgIHNldE5vblRlcm1pbmFsTm9kZXMobWFya2Rvd25TdHlsZVBhcnNlciwgbm9kZU1hcCwgRGVmYXVsdE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gbWFya2Rvd25TdHlsZVBhcnNlcjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk1hcmtkb3duU3R5bGVQYXJzZXIiLCJub2RlTWFwIiwibWFya2Rvd25TdHlsZU5vZGVNYXAiLCJmcm9tQk5GIiwiYm5mIiwibWFya2Rvd25TdHlsZVBhcnNlciIsIkNvbW1vblBhcnNlciIsIkRlZmF1bHROb25UZXJtaW5hbE5vZGUiLCJNYXJrZG93blN0eWxlTm9kZSIsInNldE5vblRlcm1pbmFsTm9kZXMiLCJmcm9tUnVsZXMiLCJydWxlcyIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVlxQkE7Ozs0QkFWUTswREFFYjtvRUFDYztxRUFDRztzQkFFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEMsSUFBTUMsVUFBVUMsdUJBQW9CLEVBQUcsR0FBRztBQUUzQixJQUFBLEFBQU1GLG9DQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBR1pHLEtBQUFBO21CQUFQLFNBQU9BLFFBQVFDLEdBQUc7Z0JBQ2hCLElBQU1DLHNCQUFzQkMsMEJBQVksQ0FBQ0gsT0FBTyxDQUovQkgscUJBSXFESSxNQUNoRUcseUJBQXlCQyxzQkFBaUIsRUFBRyxHQUFHO2dCQUV0REMsSUFBQUEsMkJBQW1CLEVBQUNKLHFCQUFxQkosU0FBU007Z0JBRWxELE9BQU9GO1lBQ1Q7OztZQUVPSyxLQUFBQTttQkFBUCxTQUFPQSxVQUFVQyxLQUFLO2dCQUNwQixJQUFNTixzQkFBc0JDLDBCQUFZLENBQUNJLFNBQVMsQ0FiakNWLHFCQWF1RFcsUUFDbEVKLHlCQUF5QkMsc0JBQWlCLEVBQUcsR0FBRztnQkFFdERDLElBQUFBLDJCQUFtQixFQUFDSixxQkFBcUJKLFNBQVNNO2dCQUVsRCxPQUFPRjtZQUNUOzs7WUFFT08sS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTVAsc0JBQXNCQywwQkFBWSxDQUFDTSxXQUFXLENBdEJuQ1osc0JBdUJYTyx5QkFBeUJDLHNCQUFpQixFQUFHLEdBQUc7Z0JBRXREQyxJQUFBQSwyQkFBbUIsRUFBQ0oscUJBQXFCSixTQUFTTTtnQkFFbEQsT0FBT0Y7WUFDVDs7O1dBNUJtQkw7RUFBNEJNLDBCQUFZO0FBQzNELGlCQURtQk4scUJBQ1pJLE9BQU1BLFlBQUcifQ==