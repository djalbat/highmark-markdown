"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EndOfLineMarkdownNode;
    }
});
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
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
var EndOfLineMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(EndOfLineMarkdownNode, MarkdownNode);
    var _super = _create_super(EndOfLineMarkdownNode);
    function EndOfLineMarkdownNode() {
        _class_call_check(this, EndOfLineMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(EndOfLineMarkdownNode, [
        {
            key: "asHTML",
            value: function asHTML(indent, context) {
                var content = this.getContent(context), html = content; ///
                return html;
            }
        },
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var content = this.getContent(context), domElement = document.createTextNode(content);
                this.setDOMElement(domElement);
                return domElement;
            }
        },
        {
            key: "getContent",
            value: function getContent(context) {
                var firstSignificantToken = this.getFirstSignificantToken(), endOfLineToken = firstSignificantToken, content = endOfLineToken.getContent();
                return content;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndAmbiguous",
            value: function fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) {
                return _markdown.default.fromRuleNameChildNodesAndAmbiguous(EndOfLineMarkdownNode, ruleName, childNodes, ambiguous);
            }
        }
    ]);
    return EndOfLineMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2VuZE9mTGluZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmRPZkxpbmVNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBhc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudChjb250ZXh0KSxcbiAgICAgICAgICBodG1sID0gY29udGVudDsgLy8vXG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoY29udGV4dCksXG4gICAgICAgICAgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpO1xuXG4gICAgdGhpcy5zZXRET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRDb250ZW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBmaXJzdFNpZ25pZmljYW50VG9rZW4gPSB0aGlzLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgIGVuZE9mTGluZVRva2VuID0gZmlyc3RTaWduaWZpY2FudFRva2VuLCAvLy9cbiAgICAgICAgICBjb250ZW50ID0gZW5kT2ZMaW5lVG9rZW4uZ2V0Q29udGVudCgpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZEFtYmlndW91cyhydWxlTmFtZSwgY2hpbGROb2RlcywgYW1iaWd1b3VzKSB7IHJldHVybiBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZEFtYmlndW91cyhFbmRPZkxpbmVNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBhbWJpZ3VvdXMpOyB9XG59XG4iXSwibmFtZXMiOlsiRW5kT2ZMaW5lTWFya2Rvd25Ob2RlIiwiYXNIVE1MIiwiaW5kZW50IiwiY29udGV4dCIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiaHRtbCIsImNyZWF0ZURPTUVsZW1lbnQiLCJkb21FbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsInNldERPTUVsZW1lbnQiLCJmaXJzdFNpZ25pZmljYW50VG9rZW4iLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4iLCJlbmRPZkxpbmVUb2tlbiIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRBbWJpZ3VvdXMiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJhbWJpZ3VvdXMiLCJNYXJrZG93bk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OytEQUZJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVYsSUFBQSxBQUFNQSxzQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsTUFBTSxFQUFFQyxPQUFPO2dCQUNwQixJQUFNQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxDQUFDRixVQUMxQkcsT0FBT0YsU0FBUyxHQUFHO2dCQUV6QixPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkosT0FBTztnQkFDdEIsSUFBTUMsVUFBVSxJQUFJLENBQUNDLFVBQVUsQ0FBQ0YsVUFDMUJLLGFBQWFDLFNBQVNDLGNBQWMsQ0FBQ047Z0JBRTNDLElBQUksQ0FBQ08sYUFBYSxDQUFDSDtnQkFFbkIsT0FBT0E7WUFDVDs7O1lBRUFILEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXRixPQUFPO2dCQUNoQixJQUFNUyx3QkFBd0IsSUFBSSxDQUFDQyx3QkFBd0IsSUFDckRDLGlCQUFpQkYsdUJBQ2pCUixVQUFVVSxlQUFlVCxVQUFVO2dCQUV6QyxPQUFPRDtZQUNUOzs7O1lBRU9XLEtBQUFBO21CQUFQLFNBQU9BLG1DQUFtQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLFNBQVM7Z0JBQUksT0FBT0MsaUJBQVksQ0FBQ0osa0NBQWtDLENBekJoSGYsdUJBeUJ3SWdCLFVBQVVDLFlBQVlDO1lBQVk7OztXQXpCMUtsQjtFQUE4Qm1CLGlCQUFZIn0=