"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return HeadingMarkdownNode;
    }
});
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _anchor = /*#__PURE__*/ _interop_require_default(require("../../node/markdown/anchor"));
var _constants = require("../../constants");
var _childNodes = require("../../utilities/childNodes");
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
var HeadingMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(HeadingMarkdownNode, MarkdownNode);
    var _super = _create_super(HeadingMarkdownNode);
    function HeadingMarkdownNode() {
        _class_call_check(this, HeadingMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(HeadingMarkdownNode, [
        {
            key: "getLevel",
            value: function getLevel() {
                var level = this.constructor.level;
                return level;
            }
        },
        {
            key: "addAnchor",
            value: function addAnchor(context) {
                var identifier = this.identifier(context), anchorMarkdownNode = _anchor.default.fromIdentifier(identifier), childNode = anchorMarkdownNode; ///
                this.addChildNode(childNode);
            }
        },
        {
            key: "identifier",
            value: function identifier(context) {
                var childNodes = this.getChildNodes(), leftTrimmed = true, plainText = (0, _childNodes.plainTextFromChildNodes)(childNodes, context, leftTrimmed), identifier = identifierFromPlainText(plainText);
                return identifier;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity);
            }
        }
    ]);
    return HeadingMarkdownNode;
}(_markdown.default);
function identifierFromPlainText(plainText) {
    plainText = plainText.toLowerCase(); ///
    plainText = plainText.replace(/[^a-z ]/g, _constants.EMPTY_STRING);
    plainText = plainText.replace(/ +/, _constants.HYPHEN);
    var identifier = plainText; ///
    return identifier;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2hlYWRpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcbmltcG9ydCBBbmNob3JNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd24vYW5jaG9yXCI7XG5cbmltcG9ydCB7IEhZUEhFTiwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcGxhaW5UZXh0RnJvbUNoaWxkTm9kZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NoaWxkTm9kZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGluZ01hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGdldExldmVsKCkge1xuICAgIGNvbnN0IHsgbGV2ZWwgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gbGV2ZWw7XG4gIH1cblxuICBhZGRBbmNob3IoY29udGV4dCkge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSB0aGlzLmlkZW50aWZpZXIoY29udGV4dCksXG4gICAgICAgICAgYW5jaG9yTWFya2Rvd25Ob2RlID0gQW5jaG9yTWFya2Rvd25Ob2RlLmZyb21JZGVudGlmaWVyKGlkZW50aWZpZXIpLFxuICAgICAgICAgIGNoaWxkTm9kZSA9IGFuY2hvck1hcmtkb3duTm9kZTsgLy8vXG5cbiAgICB0aGlzLmFkZENoaWxkTm9kZShjaGlsZE5vZGUpO1xuICB9XG5cbiAgaWRlbnRpZmllcihjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGxlZnRUcmltbWVkID0gdHJ1ZSxcbiAgICAgICAgICBwbGFpblRleHQgPSBwbGFpblRleHRGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCBjb250ZXh0LCBsZWZ0VHJpbW1lZCksXG4gICAgICAgICAgaWRlbnRpZmllciA9IGlkZW50aWZpZXJGcm9tUGxhaW5UZXh0KHBsYWluVGV4dCk7XG5cbiAgICByZXR1cm4gaWRlbnRpZmllcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpOyB9XG59XG5cbmZ1bmN0aW9uIGlkZW50aWZpZXJGcm9tUGxhaW5UZXh0KHBsYWluVGV4dCkge1xuICBwbGFpblRleHQgPSBwbGFpblRleHQudG9Mb3dlckNhc2UoKTsgIC8vL1xuXG4gIHBsYWluVGV4dCA9IHBsYWluVGV4dC5yZXBsYWNlKC9bXmEteiBdL2csIEVNUFRZX1NUUklORyk7XG5cbiAgcGxhaW5UZXh0ID0gcGxhaW5UZXh0LnJlcGxhY2UoLyArLywgSFlQSEVOKTtcblxuICBjb25zdCBpZGVudGlmaWVyID0gcGxhaW5UZXh0OyAvLy9cblxuICByZXR1cm4gaWRlbnRpZmllcjtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkaW5nTWFya2Rvd25Ob2RlIiwiZ2V0TGV2ZWwiLCJsZXZlbCIsImNvbnN0cnVjdG9yIiwiYWRkQW5jaG9yIiwiY29udGV4dCIsImlkZW50aWZpZXIiLCJhbmNob3JNYXJrZG93bk5vZGUiLCJBbmNob3JNYXJrZG93bk5vZGUiLCJmcm9tSWRlbnRpZmllciIsImNoaWxkTm9kZSIsImFkZENoaWxkTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibGVmdFRyaW1tZWQiLCJwbGFpblRleHQiLCJwbGFpblRleHRGcm9tQ2hpbGROb2RlcyIsImlkZW50aWZpZXJGcm9tUGxhaW5UZXh0IiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJDbGFzcyIsInJ1bGVOYW1lIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsIkVNUFRZX1NUUklORyIsIkhZUEhFTiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7K0RBTkk7NkRBQ007eUJBRU07MEJBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekIsSUFBQSxBQUFNQSxvQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTSxBQUFFQyxRQUFVLElBQUksQ0FBQ0MsV0FBVyxDQUExQkQ7Z0JBRVIsT0FBT0E7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxPQUFPO2dCQUNmLElBQU1DLGFBQWEsSUFBSSxDQUFDQSxVQUFVLENBQUNELFVBQzdCRSxxQkFBcUJDLGVBQWtCLENBQUNDLGNBQWMsQ0FBQ0gsYUFDdkRJLFlBQVlILG9CQUFvQixHQUFHO2dCQUV6QyxJQUFJLENBQUNJLFlBQVksQ0FBQ0Q7WUFDcEI7OztZQUVBSixLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0QsT0FBTztnQkFDaEIsSUFBTU8sYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLGNBQWMsTUFDZEMsWUFBWUMsSUFBQUEsbUNBQXVCLEVBQUNKLFlBQVlQLFNBQVNTLGNBQ3pEUixhQUFhVyx3QkFBd0JGO2dCQUUzQyxPQUFPVDtZQUNUOzs7O1lBRU9ZLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQ0MsS0FBSyxFQUFFQyxRQUFRLEVBQUVSLFVBQVUsRUFBRVMsT0FBTztnQkFBSSxPQUFPQyxpQkFBWSxDQUFDSixnQ0FBZ0MsQ0FBQ0MsT0FBT0MsVUFBVVIsWUFBWVM7WUFBVTs7O1dBeEJ6SnJCO0VBQTRCc0IsaUJBQVk7QUEyQjdELFNBQVNMLHdCQUF3QkYsU0FBUztJQUN4Q0EsWUFBWUEsVUFBVVEsV0FBVyxJQUFLLEdBQUc7SUFFekNSLFlBQVlBLFVBQVVTLE9BQU8sQ0FBQyxZQUFZQyx1QkFBWTtJQUV0RFYsWUFBWUEsVUFBVVMsT0FBTyxDQUFDLE1BQU1FLGlCQUFNO0lBRTFDLElBQU1wQixhQUFhUyxXQUFXLEdBQUc7SUFFakMsT0FBT1Q7QUFDVCJ9