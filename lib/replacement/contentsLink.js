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
                return _get(_get_prototype_of(ContentsLinkReplacement), "fromNodeAndTokens", this).call(this, ContentsLinkReplacement, node, tokens);
            }
        },
        {
            key: "fromNestedHeadingMarkdownNode",
            value: function fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context) {
                var contentsLinkReplacement = null;
                var node = nestedHeadingMarkdownNode.getNode(), headingMarkdownNode = node; ///
                if (headingMarkdownNode !== null) {
                    var identifier = headingMarkdownNode.identifier(context), lineMarkdownNode = headingMarkdownNode.getLineMarkdownNode(), lineReplacement = _line.default.fromLineMarkdownNode(lineMarkdownNode, context), contentsLinkMarkdownNode = _contentsLink.default.fromLineReplacementAndIdentifier(lineReplacement, identifier), node1 = contentsLinkMarkdownNode, tokens = lineReplacement.getTokens();
                    contentsLinkReplacement = ContentsLinkReplacement.fromNodeAndTokens(node1, tokens);
                }
                return contentsLinkReplacement;
            }
        }
    ]);
    return ContentsLinkReplacement;
}(_replacement.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9jb250ZW50c0xpbmsuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZXBsYWNlbWVudCBmcm9tIFwiLi4vcmVwbGFjZW1lbnRcIjtcbmltcG9ydCBMaW5lUmVwbGFjZW1lbnQgZnJvbSBcIi4uL3JlcGxhY2VtZW50L2xpbmVcIjtcbmltcG9ydCBDb250ZW50c0xpbmtNYXJrZG93bk5vZGUgZnJvbSBcIi4uL25vZGUvbWFya2Rvd24vY29udGVudHNMaW5rXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRzTGlua1JlcGxhY2VtZW50IGV4dGVuZHMgUmVwbGFjZW1lbnQge1xuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7IHJldHVybiBzdXBlci5mcm9tTm9kZUFuZFRva2VucyhDb250ZW50c0xpbmtSZXBsYWNlbWVudCwgbm9kZSwgdG9rZW5zKTsgfVxuXG4gIHN0YXRpYyBmcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZShuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbnRlbnRzTGlua1JlcGxhY2VtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IG5vZGUgPSBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlLmdldE5vZGUoKSxcbiAgICAgICAgICBoZWFkaW5nTWFya2Rvd25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgaWYgKGhlYWRpbmdNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSBoZWFkaW5nTWFya2Rvd25Ob2RlLmlkZW50aWZpZXIoY29udGV4dCksXG4gICAgICAgICAgICBsaW5lTWFya2Rvd25Ob2RlID0gaGVhZGluZ01hcmtkb3duTm9kZS5nZXRMaW5lTWFya2Rvd25Ob2RlKCksXG4gICAgICAgICAgICBsaW5lUmVwbGFjZW1lbnQgPSBMaW5lUmVwbGFjZW1lbnQuZnJvbUxpbmVNYXJrZG93bk5vZGUobGluZU1hcmtkb3duTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBjb250ZW50c0xpbmtNYXJrZG93bk5vZGUgPSBDb250ZW50c0xpbmtNYXJrZG93bk5vZGUuZnJvbUxpbmVSZXBsYWNlbWVudEFuZElkZW50aWZpZXIobGluZVJlcGxhY2VtZW50LCBpZGVudGlmaWVyKSxcbiAgICAgICAgICAgIG5vZGUgPSBjb250ZW50c0xpbmtNYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICAgIHRva2VucyA9IGxpbmVSZXBsYWNlbWVudC5nZXRUb2tlbnMoKTtcblxuICAgICAgY29udGVudHNMaW5rUmVwbGFjZW1lbnQgPSBDb250ZW50c0xpbmtSZXBsYWNlbWVudC5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50c0xpbmtSZXBsYWNlbWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbnRlbnRzTGlua1JlcGxhY2VtZW50IiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwiZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUiLCJuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlIiwiY29udGV4dCIsImNvbnRlbnRzTGlua1JlcGxhY2VtZW50IiwiZ2V0Tm9kZSIsImhlYWRpbmdNYXJrZG93bk5vZGUiLCJpZGVudGlmaWVyIiwibGluZU1hcmtkb3duTm9kZSIsImdldExpbmVNYXJrZG93bk5vZGUiLCJsaW5lUmVwbGFjZW1lbnQiLCJMaW5lUmVwbGFjZW1lbnQiLCJmcm9tTGluZU1hcmtkb3duTm9kZSIsImNvbnRlbnRzTGlua01hcmtkb3duTm9kZSIsIkNvbnRlbnRzTGlua01hcmtkb3duTm9kZSIsImZyb21MaW5lUmVwbGFjZW1lbnRBbmRJZGVudGlmaWVyIiwiZ2V0VG9rZW5zIiwiUmVwbGFjZW1lbnQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7a0VBSkc7MkRBQ0k7bUVBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QixJQUFBLEFBQU1BLHdDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxJQUFJLEVBQUVDLE1BQU07Z0JBQUksT0FBTyx1QkFEN0JILDBCQUNtQ0MscUJBQU4sSUFBSyxhQURsQ0QseUJBQzhFRSxNQUFNQztZQUFTOzs7WUFFekdDLEtBQUFBO21CQUFQLFNBQU9BLDhCQUE4QkMseUJBQXlCLEVBQUVDLE9BQU87Z0JBQ3JFLElBQUlDLDBCQUEwQjtnQkFFOUIsSUFBTUwsT0FBT0csMEJBQTBCRyxPQUFPLElBQ3hDQyxzQkFBc0JQLE1BQU8sR0FBRztnQkFFdEMsSUFBSU8sd0JBQXdCLE1BQU07b0JBQ2hDLElBQU1DLGFBQWFELG9CQUFvQkMsVUFBVSxDQUFDSixVQUM1Q0ssbUJBQW1CRixvQkFBb0JHLG1CQUFtQixJQUMxREMsa0JBQWtCQyxhQUFlLENBQUNDLG9CQUFvQixDQUFDSixrQkFBa0JMLFVBQ3pFVSwyQkFBMkJDLHFCQUF3QixDQUFDQyxnQ0FBZ0MsQ0FBQ0wsaUJBQWlCSCxhQUN0R1IsUUFBT2MsMEJBQ1BiLFNBQVNVLGdCQUFnQk0sU0FBUztvQkFFeENaLDBCQUEwQlAsQUFqQlhBLHdCQWlCbUNDLGlCQUFpQixDQUFDQyxPQUFNQztnQkFDNUU7Z0JBRUEsT0FBT0k7WUFDVDs7O1dBckJtQlA7RUFBZ0NvQixvQkFBVyJ9