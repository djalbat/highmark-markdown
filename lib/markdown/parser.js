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
var _markdown = /*#__PURE__*/ _interop_require_default(require("../nodeMap/markdown"));
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
var nodeMap = _markdown.default; ///
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
                var nodeMap = Class.nodeMap, markdownParser = _occamparsers.CommonParser.fromBNF(Class, bnf);
                (0, _parser.setNonTerminalNodes)(markdownParser, nodeMap);
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
                var nodeMap = Class.nodeMap, markdownParser = _occamparsers.CommonParser.fromRules(Class, rules);
                (0, _parser.setNonTerminalNodes)(markdownParser, nodeMap);
                return markdownParser;
            }
        },
        {
            key: "fromNothing",
            value: function fromNothing(Class) {
                if (Class === undefined) {
                    Class = MarkdownParser; ///
                }
                var nodeMap = Class.nodeMap, markdownParser = _occamparsers.CommonParser.fromNothing(Class);
                (0, _parser.setNonTerminalNodes)(markdownParser, nodeMap);
                return markdownParser;
            }
        }
    ]);
    return MarkdownParser;
}(_occamparsers.CommonParser);
_define_property(MarkdownParser, "bnf", _bnf.default);
_define_property(MarkdownParser, "nodeMap", nodeMap);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93bi9wYXJzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENvbW1vblBhcnNlciB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBibmYgZnJvbSBcIi4vYm5mXCI7XG5pbXBvcnQgbWFya2Rvd25Ob2RlTWFwIGZyb20gXCIuLi9ub2RlTWFwL21hcmtkb3duXCI7XG5cbmltcG9ydCB7IHNldE5vblRlcm1pbmFsTm9kZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnNlclwiO1xuXG5jb25zdCBub2RlTWFwID0gbWFya2Rvd25Ob2RlTWFwOyAgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmtkb3duUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGJuZiA9IGJuZjtcblxuICBzdGF0aWMgbm9kZU1hcCA9IG5vZGVNYXA7XG5cbiAgc3RhdGljIGZyb21CTkYoQ2xhc3MsIGJuZikge1xuICAgIGlmIChibmYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgYm5mID0gQ2xhc3M7ICAvLy9cblxuICAgICAgQ2xhc3MgPSBNYXJrZG93blBhcnNlcjsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgeyBub2RlTWFwIH0gPSBDbGFzcyxcbiAgICAgICAgICBtYXJrZG93blBhcnNlciA9IENvbW1vblBhcnNlci5mcm9tQk5GKENsYXNzLCBibmYpO1xuXG4gICAgc2V0Tm9uVGVybWluYWxOb2RlcyhtYXJrZG93blBhcnNlciwgbm9kZU1hcCk7XG5cbiAgICByZXR1cm4gbWFya2Rvd25QYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVzKENsYXNzLCBydWxlcykge1xuICAgIGlmIChydWxlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBydWxlcyA9IENsYXNzOyAgLy8vXG5cbiAgICAgIENsYXNzID0gTWFya2Rvd25QYXJzZXI7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHsgbm9kZU1hcCB9ID0gQ2xhc3MsXG4gICAgICAgICAgbWFya2Rvd25QYXJzZXIgPSBDb21tb25QYXJzZXIuZnJvbVJ1bGVzKENsYXNzLCBydWxlcyk7XG5cbiAgICBzZXROb25UZXJtaW5hbE5vZGVzKG1hcmtkb3duUGFyc2VyLCBub2RlTWFwKTtcblxuICAgIHJldHVybiBtYXJrZG93blBhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcykge1xuICAgIGlmIChDbGFzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBDbGFzcyA9IE1hcmtkb3duUGFyc2VyOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCB7IG5vZGVNYXAgfSA9IENsYXNzLFxuICAgICAgICAgIG1hcmtkb3duUGFyc2VyID0gQ29tbW9uUGFyc2VyLmZyb21Ob3RoaW5nKENsYXNzKTtcblxuICAgIHNldE5vblRlcm1pbmFsTm9kZXMobWFya2Rvd25QYXJzZXIsIG5vZGVNYXApO1xuXG4gICAgcmV0dXJuIG1hcmtkb3duUGFyc2VyO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTWFya2Rvd25QYXJzZXIiLCJub2RlTWFwIiwibWFya2Rvd25Ob2RlTWFwIiwiZnJvbUJORiIsIkNsYXNzIiwiYm5mIiwidW5kZWZpbmVkIiwibWFya2Rvd25QYXJzZXIiLCJDb21tb25QYXJzZXIiLCJzZXROb25UZXJtaW5hbE5vZGVzIiwiZnJvbVJ1bGVzIiwicnVsZXMiLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7NEJBVFE7MERBRWI7K0RBQ1k7c0JBRVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBDLElBQU1DLFVBQVVDLGlCQUFlLEVBQUcsR0FBRztBQUV0QixJQUFBLEFBQU1GLCtCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUtaRyxLQUFBQTttQkFBUCxTQUFPQSxRQUFRQyxLQUFLLEVBQUVDLEdBQUc7Z0JBQ3ZCLElBQUlBLFFBQVFDLFdBQVc7b0JBQ3JCRCxNQUFNRCxPQUFRLEdBQUc7b0JBRWpCQSxRQVRlSixnQkFTUyxHQUFHO2dCQUM3QjtnQkFFQSxJQUFNLEFBQUVDLFVBQVlHLE1BQVpILFNBQ0ZNLGlCQUFpQkMsMEJBQVksQ0FBQ0wsT0FBTyxDQUFDQyxPQUFPQztnQkFFbkRJLElBQUFBLDJCQUFtQixFQUFDRixnQkFBZ0JOO2dCQUVwQyxPQUFPTTtZQUNUOzs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0EsVUFBVU4sS0FBSyxFQUFFTyxLQUFLO2dCQUMzQixJQUFJQSxVQUFVTCxXQUFXO29CQUN2QkssUUFBUVAsT0FBUSxHQUFHO29CQUVuQkEsUUF4QmVKLGdCQXdCUyxHQUFHO2dCQUM3QjtnQkFFQSxJQUFNLEFBQUVDLFVBQVlHLE1BQVpILFNBQ0ZNLGlCQUFpQkMsMEJBQVksQ0FBQ0UsU0FBUyxDQUFDTixPQUFPTztnQkFFckRGLElBQUFBLDJCQUFtQixFQUFDRixnQkFBZ0JOO2dCQUVwQyxPQUFPTTtZQUNUOzs7WUFFT0ssS0FBQUE7bUJBQVAsU0FBT0EsWUFBWVIsS0FBSztnQkFDdEIsSUFBSUEsVUFBVUUsV0FBVztvQkFDdkJGLFFBckNlSixnQkFxQ1MsR0FBRztnQkFDN0I7Z0JBRUEsSUFBTSxBQUFFQyxVQUFZRyxNQUFaSCxTQUNGTSxpQkFBaUJDLDBCQUFZLENBQUNJLFdBQVcsQ0FBQ1I7Z0JBRWhESyxJQUFBQSwyQkFBbUIsRUFBQ0YsZ0JBQWdCTjtnQkFFcEMsT0FBT007WUFDVDs7O1dBOUNtQlA7RUFBdUJRLDBCQUFZO0FBQ3RELGlCQURtQlIsZ0JBQ1pLLE9BQU1BLFlBQUc7QUFFaEIsaUJBSG1CTCxnQkFHWkMsV0FBVUEifQ==