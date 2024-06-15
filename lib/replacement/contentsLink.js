"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContentsLinkReplacement;
    }
});
var _replacement = /*#__PURE__*/ _interop_require_default(require("../replacement"));
var _line = /*#__PURE__*/ _interop_require_default(require("../replacement/line"));
var _contentsLink = /*#__PURE__*/ _interop_require_default(require("../node/markdown/contentsLink"));
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
var ContentsLinkReplacement = /*#__PURE__*/ function(Replacement) {
    _inherits(ContentsLinkReplacement, Replacement);
    var _super = _create_super(ContentsLinkReplacement);
    function ContentsLinkReplacement() {
        _class_call_check(this, ContentsLinkReplacement);
        return _super.apply(this, arguments);
    }
    _create_class(ContentsLinkReplacement, null, [
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                return _get(_get_prototype_of(ContentsLinkReplacement), "fromNodeAndTokens", this).call(this, _contentsLink.default, node, tokens);
            }
        },
        {
            key: "fromNestedHeadingMarkdownNode",
            value: function fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context) {
                var contentsLinkReplacement = null;
                var node = nestedHeadingMarkdownNode.getNode(), headingMarkdownNode = node; ///
                if (headingMarkdownNode !== null) {
                    var identifier = headingMarkdownNode.identifier(context), lineMarkdownNode = headingMarkdownNode.getLineMarkdownNode(), lineReplacement = _line.default.fromLineMarkdownNode(lineMarkdownNode, context), contentsLinkMarkdownNode = _contentsLink.default.fromIdentifier(identifier), node1 = contentsLinkMarkdownNode, tokens = lineReplacement.getTokens();
                    contentsLinkReplacement = ContentsLinkReplacement.fromNodeAndTokens(node1, tokens);
                }
                return contentsLinkReplacement;
            }
        }
    ]);
    return ContentsLinkReplacement;
}(_replacement.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9jb250ZW50c0xpbmsuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZXBsYWNlbWVudCBmcm9tIFwiLi4vcmVwbGFjZW1lbnRcIjtcbmltcG9ydCBMaW5lUmVwbGFjZW1lbnQgZnJvbSBcIi4uL3JlcGxhY2VtZW50L2xpbmVcIjtcbmltcG9ydCBDb250ZW50c0xpbmtNYXJrZG93bk5vZGUgZnJvbSBcIi4uL25vZGUvbWFya2Rvd24vY29udGVudHNMaW5rXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRzTGlua1JlcGxhY2VtZW50IGV4dGVuZHMgUmVwbGFjZW1lbnQge1xuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7IHJldHVybiBzdXBlci5mcm9tTm9kZUFuZFRva2VucyhDb250ZW50c0xpbmtNYXJrZG93bk5vZGUsIG5vZGUsIHRva2Vucyk7IH1cblxuICBzdGF0aWMgZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUobmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBjb250ZW50c0xpbmtSZXBsYWNlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBub2RlID0gbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZS5nZXROb2RlKCksXG4gICAgICAgICAgaGVhZGluZ01hcmtkb3duTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIGlmIChoZWFkaW5nTWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpZGVudGlmaWVyID0gaGVhZGluZ01hcmtkb3duTm9kZS5pZGVudGlmaWVyKGNvbnRleHQpLFxuICAgICAgICAgICAgbGluZU1hcmtkb3duTm9kZSA9IGhlYWRpbmdNYXJrZG93bk5vZGUuZ2V0TGluZU1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgICAgbGluZVJlcGxhY2VtZW50ID0gTGluZVJlcGxhY2VtZW50LmZyb21MaW5lTWFya2Rvd25Ob2RlKGxpbmVNYXJrZG93bk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgY29udGVudHNMaW5rTWFya2Rvd25Ob2RlID0gQ29udGVudHNMaW5rTWFya2Rvd25Ob2RlLmZyb21JZGVudGlmaWVyKGlkZW50aWZpZXIpLFxuICAgICAgICAgICAgbm9kZSA9IGNvbnRlbnRzTGlua01hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgICAgdG9rZW5zID0gbGluZVJlcGxhY2VtZW50LmdldFRva2VucygpO1xuXG4gICAgICBjb250ZW50c0xpbmtSZXBsYWNlbWVudCA9IENvbnRlbnRzTGlua1JlcGxhY2VtZW50LmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnRzTGlua1JlcGxhY2VtZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ29udGVudHNMaW5rUmVwbGFjZW1lbnQiLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJDb250ZW50c0xpbmtNYXJrZG93bk5vZGUiLCJmcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSIsIm5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUiLCJjb250ZXh0IiwiY29udGVudHNMaW5rUmVwbGFjZW1lbnQiLCJnZXROb2RlIiwiaGVhZGluZ01hcmtkb3duTm9kZSIsImlkZW50aWZpZXIiLCJsaW5lTWFya2Rvd25Ob2RlIiwiZ2V0TGluZU1hcmtkb3duTm9kZSIsImxpbmVSZXBsYWNlbWVudCIsIkxpbmVSZXBsYWNlbWVudCIsImZyb21MaW5lTWFya2Rvd25Ob2RlIiwiY29udGVudHNMaW5rTWFya2Rvd25Ob2RlIiwiZnJvbUlkZW50aWZpZXIiLCJnZXRUb2tlbnMiLCJSZXBsYWNlbWVudCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztrRUFKRzsyREFDSTttRUFDUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRCLElBQUEsQUFBTUEsd0NBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLElBQUksRUFBRUMsTUFBTTtnQkFBSSxPQUFPLHVCQUQ3QkgsMEJBQ21DQyxxQkFBTixJQUFLLGFBQW1CRyxxQkFBd0IsRUFBRUYsTUFBTUM7WUFBUzs7O1lBRTFHRSxLQUFBQTttQkFBUCxTQUFPQSw4QkFBOEJDLHlCQUF5QixFQUFFQyxPQUFPO2dCQUNyRSxJQUFJQywwQkFBMEI7Z0JBRTlCLElBQU1OLE9BQU9JLDBCQUEwQkcsT0FBTyxJQUN4Q0Msc0JBQXNCUixNQUFPLEdBQUc7Z0JBRXRDLElBQUlRLHdCQUF3QixNQUFNO29CQUNoQyxJQUFNQyxhQUFhRCxvQkFBb0JDLFVBQVUsQ0FBQ0osVUFDNUNLLG1CQUFtQkYsb0JBQW9CRyxtQkFBbUIsSUFDMURDLGtCQUFrQkMsYUFBZSxDQUFDQyxvQkFBb0IsQ0FBQ0osa0JBQWtCTCxVQUN6RVUsMkJBQTJCYixxQkFBd0IsQ0FBQ2MsY0FBYyxDQUFDUCxhQUNuRVQsUUFBT2UsMEJBQ1BkLFNBQVNXLGdCQUFnQkssU0FBUztvQkFFeENYLDBCQUEwQlIsQUFqQlhBLHdCQWlCbUNDLGlCQUFpQixDQUFDQyxPQUFNQztnQkFDNUU7Z0JBRUEsT0FBT0s7WUFDVDs7O1dBckJtQlI7RUFBZ0NvQixvQkFBVyJ9