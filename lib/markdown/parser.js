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
var _nodeMap = /*#__PURE__*/ _interop_require_default(require("../nodeMap"));
var _parser = require("../utilities/parser");
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
            key: "fromNothing",
            value: function fromNothing(Class) {
                if (Class === undefined) {
                    Class = MarkdownParser; ///
                }
                var _$nodeMap = Class.nodeMap, markdownParser = _occamparsers.CommonParser.fromNothing(Class);
                (0, _parser.setNonTerminalNodes)(markdownParser, _$nodeMap);
                return markdownParser;
            }
        },
        {
            key: "fromBNF",
            value: function fromBNF(Class, bnf) {
                if (bnf === undefined) {
                    bnf = Class; ///
                    Class = MarkdownParser; ///
                }
                var _$nodeMap = Class.nodeMap, markdownParser = _occamparsers.CommonParser.fromBNF(Class, bnf);
                (0, _parser.setNonTerminalNodes)(markdownParser, _$nodeMap);
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
                var _$nodeMap = Class.nodeMap, markdownParser = _occamparsers.CommonParser.fromRules(Class, rules);
                (0, _parser.setNonTerminalNodes)(markdownParser, _$nodeMap);
                return markdownParser;
            }
        }
    ]);
    return MarkdownParser;
}(_occamparsers.CommonParser);
_define_property(MarkdownParser, "bnf", _bnf.default);
_define_property(MarkdownParser, "nodeMap", _nodeMap.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93bi9wYXJzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENvbW1vblBhcnNlciB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBibmYgZnJvbSBcIi4vYm5mXCI7XG5pbXBvcnQgbm9kZU1hcCBmcm9tIFwiLi4vbm9kZU1hcFwiO1xuXG5pbXBvcnQgeyBzZXROb25UZXJtaW5hbE5vZGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJzZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFya2Rvd25QYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgYm5mID0gYm5mO1xuXG4gIHN0YXRpYyBub2RlTWFwID0gbm9kZU1hcDtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MpIHtcbiAgICBpZiAoQ2xhc3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgQ2xhc3MgPSBNYXJrZG93blBhcnNlcjsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgeyBub2RlTWFwIH0gPSBDbGFzcyxcbiAgICAgICAgICBtYXJrZG93blBhcnNlciA9IENvbW1vblBhcnNlci5mcm9tTm90aGluZyhDbGFzcyk7XG5cbiAgICBzZXROb25UZXJtaW5hbE5vZGVzKG1hcmtkb3duUGFyc2VyLCBub2RlTWFwKTtcblxuICAgIHJldHVybiBtYXJrZG93blBhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQk5GKENsYXNzLCBibmYpIHtcbiAgICBpZiAoYm5mID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGJuZiA9IENsYXNzOyAgLy8vXG5cbiAgICAgIENsYXNzID0gTWFya2Rvd25QYXJzZXI7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHsgbm9kZU1hcCB9ID0gQ2xhc3MsXG4gICAgICAgICAgbWFya2Rvd25QYXJzZXIgPSBDb21tb25QYXJzZXIuZnJvbUJORihDbGFzcywgYm5mKTtcblxuICAgIHNldE5vblRlcm1pbmFsTm9kZXMobWFya2Rvd25QYXJzZXIsIG5vZGVNYXApO1xuXG4gICAgcmV0dXJuIG1hcmtkb3duUGFyc2VyO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlcyhDbGFzcywgcnVsZXMpIHtcbiAgICBpZiAocnVsZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcnVsZXMgPSBDbGFzczsgIC8vL1xuXG4gICAgICBDbGFzcyA9IE1hcmtkb3duUGFyc2VyOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCB7IG5vZGVNYXAgfSA9IENsYXNzLFxuICAgICAgICAgIG1hcmtkb3duUGFyc2VyID0gQ29tbW9uUGFyc2VyLmZyb21SdWxlcyhDbGFzcywgcnVsZXMpO1xuXG4gICAgc2V0Tm9uVGVybWluYWxOb2RlcyhtYXJrZG93blBhcnNlciwgbm9kZU1hcCk7XG5cbiAgICByZXR1cm4gbWFya2Rvd25QYXJzZXI7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJNYXJrZG93blBhcnNlciIsImZyb21Ob3RoaW5nIiwiQ2xhc3MiLCJ1bmRlZmluZWQiLCJub2RlTWFwIiwibWFya2Rvd25QYXJzZXIiLCJDb21tb25QYXJzZXIiLCJzZXROb25UZXJtaW5hbE5vZGVzIiwiZnJvbUJORiIsImJuZiIsImZyb21SdWxlcyIsInJ1bGVzIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7Ozs0QkFQUTswREFFYjs4REFDSTtzQkFFZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJCLElBQUEsQUFBTUEsK0JBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUtaQyxLQUFBQTttQkFBUCxTQUFPQSxZQUFZQyxLQUFLO2dCQUN0QixJQUFJQSxVQUFVQyxXQUFXO29CQUN2QkQsUUFQZUYsZ0JBT1MsR0FBRztnQkFDN0I7Z0JBRUEsSUFBTSxBQUFFSSxZQUFZRixNQUFaRSxTQUNGQyxpQkFBaUJDLDBCQUFZLENBQUNMLFdBQVcsQ0FBQ0M7Z0JBRWhESyxJQUFBQSwyQkFBbUIsRUFBQ0YsZ0JBQWdCRDtnQkFFcEMsT0FBT0M7WUFDVDs7O1lBRU9HLEtBQUFBO21CQUFQLFNBQU9BLFFBQVFOLEtBQUssRUFBRU8sR0FBRztnQkFDdkIsSUFBSUEsUUFBUU4sV0FBVztvQkFDckJNLE1BQU1QLE9BQVEsR0FBRztvQkFFakJBLFFBdEJlRixnQkFzQlMsR0FBRztnQkFDN0I7Z0JBRUEsSUFBTSxBQUFFSSxZQUFZRixNQUFaRSxTQUNGQyxpQkFBaUJDLDBCQUFZLENBQUNFLE9BQU8sQ0FBQ04sT0FBT087Z0JBRW5ERixJQUFBQSwyQkFBbUIsRUFBQ0YsZ0JBQWdCRDtnQkFFcEMsT0FBT0M7WUFDVDs7O1lBRU9LLEtBQUFBO21CQUFQLFNBQU9BLFVBQVVSLEtBQUssRUFBRVMsS0FBSztnQkFDM0IsSUFBSUEsVUFBVVIsV0FBVztvQkFDdkJRLFFBQVFULE9BQVEsR0FBRztvQkFFbkJBLFFBckNlRixnQkFxQ1MsR0FBRztnQkFDN0I7Z0JBRUEsSUFBTSxBQUFFSSxZQUFZRixNQUFaRSxTQUNGQyxpQkFBaUJDLDBCQUFZLENBQUNJLFNBQVMsQ0FBQ1IsT0FBT1M7Z0JBRXJESixJQUFBQSwyQkFBbUIsRUFBQ0YsZ0JBQWdCRDtnQkFFcEMsT0FBT0M7WUFDVDs7O1dBOUNtQkw7RUFBdUJNLDBCQUFZO0FBQ3RELGlCQURtQk4sZ0JBQ1pTLE9BQU1BLFlBQUc7QUFFaEIsaUJBSG1CVCxnQkFHWkksV0FBVUEsZ0JBQU8ifQ==