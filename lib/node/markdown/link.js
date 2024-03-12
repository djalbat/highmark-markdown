"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return LinkMarkdownNode;
    }
});
var _necessary = require("necessary");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _constants = require("../../constants");
var _attributeNames = require("../../attributeNames");
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
var second = _necessary.arrayUtilities.second;
var LinkMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(LinkMarkdownNode, MarkdownNode);
    var _super = _create_super(LinkMarkdownNode);
    function LinkMarkdownNode() {
        _class_call_check(this, LinkMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(LinkMarkdownNode, [
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var domElement = _get(_get_prototype_of(LinkMarkdownNode.prototype), "createDOMElement", this).call(this, context), href = this.getHRef(), name = _attributeNames.HREF_ATTRIBUTE_NAME, value = href; ///
                this.setAttribute(name, value);
                return domElement;
            }
        },
        {
            key: "getIdentifier",
            value: function getIdentifier() {
                var childNodes = this.getChildNodes(), secondChildNode = second(childNodes), textMarkdownNode = secondChildNode, textMarkdownNodeContent = textMarkdownNode.getContent(), identifier = textMarkdownNodeContent; ///
                return identifier;
            }
        },
        {
            key: "getHRef",
            value: function getHRef() {
                var identifier = this.getIdentifier(), href = "#".concat(identifier);
                return href;
            }
        },
        {
            key: "clear",
            value: function clear() {
                var innerHTML = _constants.EMPTY_STRING;
                this.setInnerHTML(innerHTML);
            }
        },
        {
            key: "setNumber",
            value: function setNumber(number) {
                var innerHTML = "".concat(number);
                this.setInnerHTML(innerHTML);
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndAmbiguous",
            value: function fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) {
                return _markdown.default.fromRuleNameChildNodesAndAmbiguous(LinkMarkdownNode, ruleName, childNodes, ambiguous);
            }
        }
    ]);
    return LinkMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2xpbmsuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEhSRUZfQVRUUklCVVRFX05BTUUgfSBmcm9tIFwiLi4vLi4vYXR0cmlidXRlTmFtZXNcIjtcblxuY29uc3QgeyBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5rTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHN1cGVyLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCksXG4gICAgICAgICAgaHJlZiA9IHRoaXMuZ2V0SFJlZigpLFxuICAgICAgICAgIG5hbWUgPSBIUkVGX0FUVFJJQlVURV9OQU1FLFxuICAgICAgICAgIHZhbHVlID0gaHJlZjsgLy8vXG5cbiAgICB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldElkZW50aWZpZXIoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHNlY29uZENoaWxkTm9kZSA9IHNlY29uZChjaGlsZE5vZGVzKSxcbiAgICAgICAgICB0ZXh0TWFya2Rvd25Ob2RlID0gc2Vjb25kQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgdGV4dE1hcmtkb3duTm9kZUNvbnRlbnQgPSB0ZXh0TWFya2Rvd25Ob2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBpZGVudGlmaWVyID0gdGV4dE1hcmtkb3duTm9kZUNvbnRlbnQ7IC8vL1xuXG4gICAgcmV0dXJuIGlkZW50aWZpZXI7XG4gIH1cblxuICBnZXRIUmVmKCkge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSB0aGlzLmdldElkZW50aWZpZXIoKSxcbiAgICAgICAgICBocmVmID0gYCMke2lkZW50aWZpZXJ9YDtcblxuICAgIHJldHVybiBocmVmO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgY29uc3QgaW5uZXJIVE1MID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgdGhpcy5zZXRJbm5lckhUTUwoaW5uZXJIVE1MKTtcbiAgfVxuXG4gIHNldE51bWJlcihudW1iZXIpIHtcbiAgICBjb25zdCBpbm5lckhUTUwgPSBgJHtudW1iZXJ9YDtcblxuICAgIHRoaXMuc2V0SW5uZXJIVE1MKGlubmVySFRNTCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZEFtYmlndW91cyhydWxlTmFtZSwgY2hpbGROb2RlcywgYW1iaWd1b3VzKSB7IHJldHVybiBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZEFtYmlndW91cyhMaW5rTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2RlcywgYW1iaWd1b3VzKTsgfVxufVxuIl0sIm5hbWVzIjpbIkxpbmtNYXJrZG93bk5vZGUiLCJzZWNvbmQiLCJhcnJheVV0aWxpdGllcyIsImNyZWF0ZURPTUVsZW1lbnQiLCJjb250ZXh0IiwiZG9tRWxlbWVudCIsImhyZWYiLCJnZXRIUmVmIiwibmFtZSIsIkhSRUZfQVRUUklCVVRFX05BTUUiLCJ2YWx1ZSIsInNldEF0dHJpYnV0ZSIsImdldElkZW50aWZpZXIiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInNlY29uZENoaWxkTm9kZSIsInRleHRNYXJrZG93bk5vZGUiLCJ0ZXh0TWFya2Rvd25Ob2RlQ29udGVudCIsImdldENvbnRlbnQiLCJpZGVudGlmaWVyIiwiY2xlYXIiLCJpbm5lckhUTUwiLCJFTVBUWV9TVFJJTkciLCJzZXRJbm5lckhUTUwiLCJzZXROdW1iZXIiLCJudW1iZXIiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzIiwicnVsZU5hbWUiLCJhbWJpZ3VvdXMiLCJNYXJrZG93bk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBV3FCQTs7O3lCQVRVOytEQUVOO3lCQUVJOzhCQUNPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEMsSUFBTSxBQUFFQyxTQUFXQyx5QkFBYyxDQUF6QkQ7QUFFTyxJQUFBLEFBQU1ELGlDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJHLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJDLE9BQU87Z0JBQ3RCLElBQU1DLGFBQWEsdUJBRkZMLDZCQUVRRyxvQkFBTixJQUFLLGFBQWtCQyxVQUNwQ0UsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJDLE9BQU9DLG1DQUFtQixFQUMxQkMsUUFBUUosTUFBTSxHQUFHO2dCQUV2QixJQUFJLENBQUNLLFlBQVksQ0FBQ0gsTUFBTUU7Z0JBRXhCLE9BQU9MO1lBQ1Q7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLGtCQUFrQmQsT0FBT1ksYUFDekJHLG1CQUFtQkQsaUJBQ25CRSwwQkFBMEJELGlCQUFpQkUsVUFBVSxJQUNyREMsYUFBYUYseUJBQXlCLEdBQUc7Z0JBRS9DLE9BQU9FO1lBQ1Q7OztZQUVBWixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVksYUFBYSxJQUFJLENBQUNQLGFBQWEsSUFDL0JOLE9BQU8sQUFBQyxJQUFjLE9BQVhhO2dCQUVqQixPQUFPYjtZQUNUOzs7WUFFQWMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFlBQVlDLHVCQUFZO2dCQUU5QixJQUFJLENBQUNDLFlBQVksQ0FBQ0Y7WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsTUFBTTtnQkFDZCxJQUFNSixZQUFZLEFBQUMsR0FBUyxPQUFQSTtnQkFFckIsSUFBSSxDQUFDRixZQUFZLENBQUNGO1lBQ3BCOzs7O1lBRU9LLEtBQUFBO21CQUFQLFNBQU9BLG1DQUFtQ0MsUUFBUSxFQUFFZCxVQUFVLEVBQUVlLFNBQVM7Z0JBQUksT0FBT0MsaUJBQVksQ0FBQ0gsa0NBQWtDLENBekNoSDFCLGtCQXlDbUkyQixVQUFVZCxZQUFZZTtZQUFZOzs7V0F6Q3JLNUI7RUFBeUI2QixpQkFBWSJ9