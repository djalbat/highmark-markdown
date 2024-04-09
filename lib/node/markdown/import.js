"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ImportMarkdownNode;
    }
});
var _necessary = require("necessary");
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
var fourth = _necessary.arrayUtilities.fourth;
var ImportMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(ImportMarkdownNode, MarkdownNode);
    var _super = _create_super(ImportMarkdownNode);
    function ImportMarkdownNode() {
        _class_call_check(this, ImportMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(ImportMarkdownNode, [
        {
            key: "asHTML",
            value: function asHTML(indent, context) {
                var html = null;
                var _context_importer = context.importer, importer = _context_importer === void 0 ? null : _context_importer;
                if (importer !== null) {
                    var filePath = this.filePath(context);
                    indent = this.adjustIndent(indent);
                    var tokens = context.tokens;
                    html = importer(filePath, indent, context);
                    Object.assign(context, {
                        tokens: tokens
                    });
                }
                return html;
            }
        },
        {
            key: "filePath",
            value: function filePath(context) {
                var childNodes = this.getChildNodes(), fourthChildNode = fourth(childNodes), pathTerminalNode = fourthChildNode, pathTerminalNodeContent = pathTerminalNode.getContent(), filePath = pathTerminalNodeContent; ///
                return filePath;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(ImportMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return ImportMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2ltcG9ydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuY29uc3QgeyBmb3VydGggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbXBvcnRNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBhc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IGh0bWwgPSBudWxsO1xuXG4gICAgY29uc3QgeyBpbXBvcnRlciA9IG51bGwgfSA9IGNvbnRleHQ7XG5cbiAgICBpZiAoaW1wb3J0ZXIgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5maWxlUGF0aChjb250ZXh0KTtcblxuICAgICAgaW5kZW50ID0gdGhpcy5hZGp1c3RJbmRlbnQoaW5kZW50KTtcblxuICAgICAgY29uc3QgeyB0b2tlbnMgfSA9IGNvbnRleHQ7XG5cbiAgICAgIGh0bWwgPSBpbXBvcnRlcihmaWxlUGF0aCwgaW5kZW50LCBjb250ZXh0KTtcblxuICAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICAgIHRva2Vuc1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBmaWxlUGF0aChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZvdXJ0aENoaWxkTm9kZSA9IGZvdXJ0aChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBwYXRoVGVybWluYWxOb2RlICA9IGZvdXJ0aENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgcGF0aFRlcm1pbmFsTm9kZUNvbnRlbnQgPSBwYXRoVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBmaWxlUGF0aCA9IHBhdGhUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICAgIHJldHVybiBmaWxlUGF0aDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KEltcG9ydE1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpOyB9XG59XG4iXSwibmFtZXMiOlsiSW1wb3J0TWFya2Rvd25Ob2RlIiwiZm91cnRoIiwiYXJyYXlVdGlsaXRpZXMiLCJhc0hUTUwiLCJpbmRlbnQiLCJjb250ZXh0IiwiaHRtbCIsImltcG9ydGVyIiwiZmlsZVBhdGgiLCJhZGp1c3RJbmRlbnQiLCJ0b2tlbnMiLCJPYmplY3QiLCJhc3NpZ24iLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZvdXJ0aENoaWxkTm9kZSIsInBhdGhUZXJtaW5hbE5vZGUiLCJwYXRoVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O3lCQU5VOytEQUVOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLElBQU0sQUFBRUMsU0FBV0MseUJBQWMsQ0FBekJEO0FBRU8sSUFBQSxBQUFNRCxtQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CRyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsTUFBTSxFQUFFQyxPQUFPO2dCQUNwQixJQUFJQyxPQUFPO2dCQUVYLHdCQUE0QkQsUUFBcEJFLFVBQUFBLDBDQUFXO2dCQUVuQixJQUFJQSxhQUFhLE1BQU07b0JBQ3JCLElBQU1DLFdBQVcsSUFBSSxDQUFDQSxRQUFRLENBQUNIO29CQUUvQkQsU0FBUyxJQUFJLENBQUNLLFlBQVksQ0FBQ0w7b0JBRTNCLElBQU0sQUFBRU0sU0FBV0wsUUFBWEs7b0JBRVJKLE9BQU9DLFNBQVNDLFVBQVVKLFFBQVFDO29CQUVsQ00sT0FBT0MsTUFBTSxDQUFDUCxTQUFTO3dCQUNyQkssUUFBQUE7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsT0FBT0o7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTSCxPQUFPO2dCQUNkLElBQU1RLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxrQkFBa0JkLE9BQU9ZLGFBQ3pCRyxtQkFBb0JELGlCQUNwQkUsMEJBQTBCRCxpQkFBaUJFLFVBQVUsSUFDckRWLFdBQVdTLHlCQUF5QixHQUFHO2dCQUU3QyxPQUFPVDtZQUNUOzs7O1lBRU9XLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQ0MsUUFBUSxFQUFFUCxVQUFVLEVBQUVRLE9BQU87Z0JBQUksT0FBT0MsaUJBQVksQ0FBQ0gsZ0NBQWdDLENBakMxR25CLG9CQWlDK0hvQixVQUFVUCxZQUFZUTtZQUFVOzs7V0FqQy9KckI7RUFBMkJzQixpQkFBWSJ9