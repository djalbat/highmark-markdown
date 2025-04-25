"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TopmostMarkdownNode;
    }
});
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
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
var TOPMOST_RULE_NAME = "topmost";
var TopmostMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(TopmostMarkdownNode, MarkdownNode);
    function TopmostMarkdownNode() {
        _class_call_check(this, TopmostMarkdownNode);
        return _call_super(this, TopmostMarkdownNode, arguments);
    }
    _create_class(TopmostMarkdownNode, [
        {
            key: "getDivisionMarkdownNodeAt",
            value: function getDivisionMarkdownNodeAt(index) {
                var divisionNodeIndex = index, childNOde = this.findChildNode(function(childNode, index) {
                    var childNodeIndex = index; ///
                    if (childNodeIndex === divisionNodeIndex) {
                        return true;
                    }
                }), divisionMarkdownNode = childNOde; ///
                return divisionMarkdownNode;
            }
        }
    ], [
        {
            key: "fromDivisionMarkdownNodes",
            value: function fromDivisionMarkdownNodes(divisionMarkdownNodes) {
                var topmostMarkdownNode = null;
                var divisionMarkdownNodesLength = divisionMarkdownNodes.length;
                if (divisionMarkdownNodesLength > 0) {
                    var ruleName = TOPMOST_RULE_NAME, childNodes = divisionMarkdownNodes, opacity = null;
                    topmostMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(TopmostMarkdownNode, ruleName, childNodes, opacity);
                }
                return topmostMarkdownNode;
            }
        }
    ]);
    return TopmostMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL3RvcG1vc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuY29uc3QgVE9QTU9TVF9SVUxFX05BTUUgPSBcInRvcG1vc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wbW9zdE1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGdldERpdmlzaW9uTWFya2Rvd25Ob2RlQXQoaW5kZXgpIHtcbiAgICBjb25zdCBkaXZpc2lvbk5vZGVJbmRleCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgY2hpbGROT2RlID0gdGhpcy5maW5kQ2hpbGROb2RlKChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZE5vZGVJbmRleCA9IGluZGV4OyAvLy9cblxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZUluZGV4ID09PSBkaXZpc2lvbk5vZGVJbmRleCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IGNoaWxkTk9kZTsgLy8vXG5cbiAgICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlcyhkaXZpc2lvbk1hcmtkb3duTm9kZXMpIHtcbiAgICBsZXQgdG9wbW9zdE1hcmtkb3duTm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZXNMZW5ndGggPSBkaXZpc2lvbk1hcmtkb3duTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKGRpdmlzaW9uTWFya2Rvd25Ob2Rlc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gVE9QTU9TVF9SVUxFX05BTUUsXG4gICAgICAgICAgICBjaGlsZE5vZGVzID0gZGl2aXNpb25NYXJrZG93bk5vZGVzLCAvLy9cbiAgICAgICAgICAgIG9wYWNpdHkgPSBudWxsO1xuXG4gICAgICB0b3Btb3N0TWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KFRvcG1vc3RNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9wbW9zdE1hcmtkb3duTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlRvcG1vc3RNYXJrZG93bk5vZGUiLCJUT1BNT1NUX1JVTEVfTkFNRSIsImdldERpdmlzaW9uTWFya2Rvd25Ob2RlQXQiLCJpbmRleCIsImRpdmlzaW9uTm9kZUluZGV4IiwiY2hpbGROT2RlIiwiZmluZENoaWxkTm9kZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZUluZGV4IiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzIiwiZGl2aXNpb25NYXJrZG93bk5vZGVzIiwidG9wbW9zdE1hcmtkb3duTm9kZSIsImRpdmlzaW9uTWFya2Rvd25Ob2Rlc0xlbmd0aCIsImxlbmd0aCIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJNYXJrZG93bk5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7K0RBSkk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekIsSUFBTUMsb0JBQW9CO0FBRVgsSUFBQSxBQUFNRCxvQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJFLEtBQUFBO21CQUFBQSxTQUFBQSwwQkFBMEJDLEtBQUs7Z0JBQzdCLElBQU1DLG9CQUFvQkQsT0FDcEJFLFlBQVksSUFBSSxDQUFDQyxhQUFhLENBQUMsU0FBQ0MsV0FBV0o7b0JBQ3pDLElBQU1LLGlCQUFpQkwsT0FBTyxHQUFHO29CQUVqQyxJQUFJSyxtQkFBbUJKLG1CQUFtQjt3QkFDeEMsT0FBTztvQkFDVDtnQkFDRixJQUNBSyx1QkFBdUJKLFdBQVcsR0FBRztnQkFFM0MsT0FBT0k7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSwwQkFBMEJDLHFCQUFxQjtnQkFDcEQsSUFBSUMsc0JBQXNCO2dCQUUxQixJQUFNQyw4QkFBOEJGLHNCQUFzQkcsTUFBTTtnQkFFaEUsSUFBSUQsOEJBQThCLEdBQUc7b0JBQ25DLElBQU1FLFdBQVdkLG1CQUNYZSxhQUFhTCx1QkFDYk0sVUFBVTtvQkFFaEJMLHNCQUFzQk0saUJBQVksQ0FBQ0MsZ0NBQWdDLENBekJwRG5CLHFCQXlCMEVlLFVBQVVDLFlBQVlDO2dCQUNqSDtnQkFFQSxPQUFPTDtZQUNUOzs7V0E3Qm1CWjtFQUE0QmtCLGlCQUFZIn0=