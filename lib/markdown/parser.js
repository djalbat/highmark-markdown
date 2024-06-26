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
var _bnf = /*#__PURE__*/ _interop_require_default(require("./bnf"));
var _nodeMap = /*#__PURE__*/ _interop_require_default(require("../nodeMap"));
var _parser = /*#__PURE__*/ _interop_require_default(require("../common/parser"));
var _parser1 = require("../utilities/parser");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var MarkdownParser = /*#__PURE__*/ function(CommonParser) {
    _inherits(MarkdownParser, CommonParser);
    var _super = _create_super(MarkdownParser);
    function MarkdownParser() {
        _class_call_check(this, MarkdownParser);
        return _super.apply(this, arguments);
    }
    _create_class(MarkdownParser, null, [
        {
            key: "fromBNF",
            value: function fromBNF(Class, bnf) {
                if (bnf === undefined) {
                    bnf = Class; ///
                    Class = MarkdownParser; ///
                }
                var _$nodeMap = Class.nodeMap, markdownParser = _parser.default.fromBNF(Class, bnf);
                (0, _parser1.setNonTerminalNodes)(markdownParser, _$nodeMap);
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
                var _$nodeMap = Class.nodeMap, markdownParser = _parser.default.fromRules(Class, rules);
                (0, _parser1.setNonTerminalNodes)(markdownParser, _$nodeMap);
                return markdownParser;
            }
        },
        {
            key: "fromNothing",
            value: function fromNothing(Class) {
                if (Class === undefined) {
                    Class = MarkdownParser; ///
                }
                var _$nodeMap = Class.nodeMap, markdownParser = _parser.default.fromNothing(Class);
                (0, _parser1.setNonTerminalNodes)(markdownParser, _$nodeMap);
                return markdownParser;
            }
        }
    ]);
    return MarkdownParser;
}(_parser.default);
_define_property(MarkdownParser, "bnf", _bnf.default);
_define_property(MarkdownParser, "nodeMap", _nodeMap.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93bi9wYXJzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBibmYgZnJvbSBcIi4vYm5mXCI7XG5pbXBvcnQgbm9kZU1hcCBmcm9tIFwiLi4vbm9kZU1hcFwiO1xuaW1wb3J0IENvbW1vblBhcnNlciBmcm9tIFwiLi4vY29tbW9uL3BhcnNlclwiO1xuXG5pbXBvcnQgeyBzZXROb25UZXJtaW5hbE5vZGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJzZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFya2Rvd25QYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgYm5mID0gYm5mO1xuXG4gIHN0YXRpYyBub2RlTWFwID0gbm9kZU1hcDtcblxuICBzdGF0aWMgZnJvbUJORihDbGFzcywgYm5mKSB7XG4gICAgaWYgKGJuZiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBibmYgPSBDbGFzczsgIC8vL1xuXG4gICAgICBDbGFzcyA9IE1hcmtkb3duUGFyc2VyOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCB7IG5vZGVNYXAgfSA9IENsYXNzLFxuICAgICAgICAgIG1hcmtkb3duUGFyc2VyID0gQ29tbW9uUGFyc2VyLmZyb21CTkYoQ2xhc3MsIGJuZik7XG5cbiAgICBzZXROb25UZXJtaW5hbE5vZGVzKG1hcmtkb3duUGFyc2VyLCBub2RlTWFwKTtcblxuICAgIHJldHVybiBtYXJrZG93blBhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZXMoQ2xhc3MsIHJ1bGVzKSB7XG4gICAgaWYgKHJ1bGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJ1bGVzID0gQ2xhc3M7ICAvLy9cblxuICAgICAgQ2xhc3MgPSBNYXJrZG93blBhcnNlcjsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgeyBub2RlTWFwIH0gPSBDbGFzcyxcbiAgICAgICAgICBtYXJrZG93blBhcnNlciA9IENvbW1vblBhcnNlci5mcm9tUnVsZXMoQ2xhc3MsIHJ1bGVzKTtcblxuICAgIHNldE5vblRlcm1pbmFsTm9kZXMobWFya2Rvd25QYXJzZXIsIG5vZGVNYXApO1xuXG4gICAgcmV0dXJuIG1hcmtkb3duUGFyc2VyO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7XG4gICAgaWYgKENsYXNzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIENsYXNzID0gTWFya2Rvd25QYXJzZXI7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHsgbm9kZU1hcCB9ID0gQ2xhc3MsXG4gICAgICAgICAgbWFya2Rvd25QYXJzZXIgPSBDb21tb25QYXJzZXIuZnJvbU5vdGhpbmcoQ2xhc3MpO1xuXG4gICAgc2V0Tm9uVGVybWluYWxOb2RlcyhtYXJrZG93blBhcnNlciwgbm9kZU1hcCk7XG5cbiAgICByZXR1cm4gbWFya2Rvd25QYXJzZXI7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJNYXJrZG93blBhcnNlciIsImZyb21CTkYiLCJDbGFzcyIsImJuZiIsInVuZGVmaW5lZCIsIm5vZGVNYXAiLCJtYXJrZG93blBhcnNlciIsIkNvbW1vblBhcnNlciIsInNldE5vblRlcm1pbmFsTm9kZXMiLCJmcm9tUnVsZXMiLCJydWxlcyIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OzswREFOTDs4REFDSTs2REFDSzt1QkFFVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckIsSUFBQSxBQUFNQSwrQkFBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBS1pDLEtBQUFBO21CQUFQLFNBQU9BLFFBQVFDLEtBQUssRUFBRUMsR0FBRztnQkFDdkIsSUFBSUEsUUFBUUMsV0FBVztvQkFDckJELE1BQU1ELE9BQVEsR0FBRztvQkFFakJBLFFBVGVGLGdCQVNTLEdBQUc7Z0JBQzdCO2dCQUVBLElBQU0sQUFBRUssWUFBWUgsTUFBWkcsU0FDRkMsaUJBQWlCQyxlQUFZLENBQUNOLE9BQU8sQ0FBQ0MsT0FBT0M7Z0JBRW5ESyxJQUFBQSw0QkFBbUIsRUFBQ0YsZ0JBQWdCRDtnQkFFcEMsT0FBT0M7WUFDVDs7O1lBRU9HLEtBQUFBO21CQUFQLFNBQU9BLFVBQVVQLEtBQUssRUFBRVEsS0FBSztnQkFDM0IsSUFBSUEsVUFBVU4sV0FBVztvQkFDdkJNLFFBQVFSLE9BQVEsR0FBRztvQkFFbkJBLFFBeEJlRixnQkF3QlMsR0FBRztnQkFDN0I7Z0JBRUEsSUFBTSxBQUFFSyxZQUFZSCxNQUFaRyxTQUNGQyxpQkFBaUJDLGVBQVksQ0FBQ0UsU0FBUyxDQUFDUCxPQUFPUTtnQkFFckRGLElBQUFBLDRCQUFtQixFQUFDRixnQkFBZ0JEO2dCQUVwQyxPQUFPQztZQUNUOzs7WUFFT0ssS0FBQUE7bUJBQVAsU0FBT0EsWUFBWVQsS0FBSztnQkFDdEIsSUFBSUEsVUFBVUUsV0FBVztvQkFDdkJGLFFBckNlRixnQkFxQ1MsR0FBRztnQkFDN0I7Z0JBRUEsSUFBTSxBQUFFSyxZQUFZSCxNQUFaRyxTQUNGQyxpQkFBaUJDLGVBQVksQ0FBQ0ksV0FBVyxDQUFDVDtnQkFFaERNLElBQUFBLDRCQUFtQixFQUFDRixnQkFBZ0JEO2dCQUVwQyxPQUFPQztZQUNUOzs7V0E5Q21CTjtFQUF1Qk8sZUFBWTtBQUN0RCxpQkFEbUJQLGdCQUNaRyxPQUFNQSxZQUFHO0FBRWhCLGlCQUhtQkgsZ0JBR1pLLFdBQVVBLGdCQUFPIn0=