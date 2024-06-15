"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContentsItemReplacement;
    }
});
var _replacement = /*#__PURE__*/ _interop_require_default(require("../replacement"));
var _contentsLink = /*#__PURE__*/ _interop_require_default(require("../replacement/contentsLink"));
var _contentsItem = /*#__PURE__*/ _interop_require_default(require("../node/markdown/contentsItem"));
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
var ContentsItemReplacement = /*#__PURE__*/ function(Replacement) {
    _inherits(ContentsItemReplacement, Replacement);
    var _super = _create_super(ContentsItemReplacement);
    function ContentsItemReplacement() {
        _class_call_check(this, ContentsItemReplacement);
        return _super.apply(this, arguments);
    }
    _create_class(ContentsItemReplacement, [
        {
            key: "appendToContentsListMarkdownNode",
            value: function appendToContentsListMarkdownNode(contentsListMarkdownNode, context) {
                var parentNode = contentsListMarkdownNode; ///
                _get(_get_prototype_of(ContentsItemReplacement.prototype), "appendTo", this).call(this, parentNode, context);
            }
        }
    ], [
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                return _replacement.default.fromNodeAndTokens(ContentsItemReplacement, node, tokens);
            }
        },
        {
            key: "fromNestedHeadingMarkdownNode",
            value: function fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context) {
                var replacements = [], contentsLinkReplacement = _contentsLink.default.fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context);
                if (contentsLinkReplacement !== null) {
                    var node = nestedHeadingMarkdownNode.getNode(), headingMarkdownNode = node; ///
                    headingMarkdownNode.addAnchor(context);
                    var replacement = contentsLinkReplacement;
                    replacements.push(replacement);
                }
                var childNestedNodes = nestedHeadingMarkdownNode.getChildNestedNodes(), nestedHeadingMarkdownNodes = childNestedNodes, nestedHeadingMarkdownNodesLength = nestedHeadingMarkdownNodes.length;
                if (nestedHeadingMarkdownNodesLength > 0) {
                    var ContentsListReplacement = ContentsItemReplacement.ContentsListReplacement, contentsListReplacement = ContentsListReplacement.fromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context), replacement1 = contentsListReplacement; ///
                    replacements.push(replacement1);
                }
                var contentsItemMarkdownNode = _contentsItem.default.fromReplacements(replacements), node1 = contentsItemMarkdownNode, tokens = [];
                replacements.forEach(function(replacement) {
                    replacement.getTokens(tokens);
                });
                var contentsItemReplacement = ContentsItemReplacement.fromNodeAndTokens(node1, tokens);
                return contentsItemReplacement;
            }
        }
    ]);
    return ContentsItemReplacement;
}(_replacement.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9jb250ZW50c0l0ZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZXBsYWNlbWVudCBmcm9tIFwiLi4vcmVwbGFjZW1lbnRcIjtcbmltcG9ydCBDb250ZW50c0xpbmtSZXBsYWNlbWVudCBmcm9tIFwiLi4vcmVwbGFjZW1lbnQvY29udGVudHNMaW5rXCI7XG5pbXBvcnQgQ29udGVudHNJdGVtTWFya2Rvd25Ob2RlIGZyb20gXCIuLi9ub2RlL21hcmtkb3duL2NvbnRlbnRzSXRlbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50c0l0ZW1SZXBsYWNlbWVudCBleHRlbmRzIFJlcGxhY2VtZW50IHtcbiAgYXBwZW5kVG9Db250ZW50c0xpc3RNYXJrZG93bk5vZGUoY29udGVudHNMaXN0TWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZTsgLy8vXG5cbiAgICBzdXBlci5hcHBlbmRUbyhwYXJlbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHsgcmV0dXJuIFJlcGxhY2VtZW50LmZyb21Ob2RlQW5kVG9rZW5zKENvbnRlbnRzSXRlbVJlcGxhY2VtZW50LCBub2RlLCB0b2tlbnMpOyB9XG5cbiAgc3RhdGljIGZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlKG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudHMgPSBbXSxcbiAgICAgICAgICBjb250ZW50c0xpbmtSZXBsYWNlbWVudCA9IENvbnRlbnRzTGlua1JlcGxhY2VtZW50LmZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlKG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgaWYgKGNvbnRlbnRzTGlua1JlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlID0gbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZS5nZXROb2RlKCksXG4gICAgICAgICAgICBoZWFkaW5nTWFya2Rvd25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgICBoZWFkaW5nTWFya2Rvd25Ob2RlLmFkZEFuY2hvcihjb250ZXh0KTtcblxuICAgICAgY29uc3QgcmVwbGFjZW1lbnQgPSBjb250ZW50c0xpbmtSZXBsYWNlbWVudDtcblxuICAgICAgcmVwbGFjZW1lbnRzLnB1c2gocmVwbGFjZW1lbnQpO1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkTmVzdGVkTm9kZXMgPSBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlLmdldENoaWxkTmVzdGVkTm9kZXMoKSxcbiAgICAgICAgICBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyA9IGNoaWxkTmVzdGVkTm9kZXMsICAvLy9cbiAgICAgICAgICBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2Rlc0xlbmd0aCA9IG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2Rlc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHsgQ29udGVudHNMaXN0UmVwbGFjZW1lbnQgfSA9IENvbnRlbnRzSXRlbVJlcGxhY2VtZW50LFxuICAgICAgICAgICAgY29udGVudHNMaXN0UmVwbGFjZW1lbnQgPSBDb250ZW50c0xpc3RSZXBsYWNlbWVudC5mcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMobmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgICAgcmVwbGFjZW1lbnQgPSBjb250ZW50c0xpc3RSZXBsYWNlbWVudDsgLy8vXG5cbiAgICAgIHJlcGxhY2VtZW50cy5wdXNoKHJlcGxhY2VtZW50KTtcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZW50c0l0ZW1NYXJrZG93bk5vZGUgPSBDb250ZW50c0l0ZW1NYXJrZG93bk5vZGUuZnJvbVJlcGxhY2VtZW50cyhyZXBsYWNlbWVudHMpLFxuICAgICAgICAgIG5vZGUgPSBjb250ZW50c0l0ZW1NYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBbXTtcblxuICAgIHJlcGxhY2VtZW50cy5mb3JFYWNoKChyZXBsYWNlbWVudCkgPT4ge1xuICAgICAgcmVwbGFjZW1lbnQuZ2V0VG9rZW5zKHRva2Vucyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjb250ZW50c0l0ZW1SZXBsYWNlbWVudCA9IENvbnRlbnRzSXRlbVJlcGxhY2VtZW50LmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gY29udGVudHNJdGVtUmVwbGFjZW1lbnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb250ZW50c0l0ZW1SZXBsYWNlbWVudCIsImFwcGVuZFRvQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlIiwiY29udGVudHNMaXN0TWFya2Rvd25Ob2RlIiwiY29udGV4dCIsInBhcmVudE5vZGUiLCJhcHBlbmRUbyIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsIlJlcGxhY2VtZW50IiwiZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUiLCJuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlIiwicmVwbGFjZW1lbnRzIiwiY29udGVudHNMaW5rUmVwbGFjZW1lbnQiLCJDb250ZW50c0xpbmtSZXBsYWNlbWVudCIsImdldE5vZGUiLCJoZWFkaW5nTWFya2Rvd25Ob2RlIiwiYWRkQW5jaG9yIiwicmVwbGFjZW1lbnQiLCJwdXNoIiwiY2hpbGROZXN0ZWROb2RlcyIsImdldENoaWxkTmVzdGVkTm9kZXMiLCJuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyIsIm5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiQ29udGVudHNMaXN0UmVwbGFjZW1lbnQiLCJjb250ZW50c0xpc3RSZXBsYWNlbWVudCIsImZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyIsImNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSIsIkNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSIsImZyb21SZXBsYWNlbWVudHMiLCJmb3JFYWNoIiwiZ2V0VG9rZW5zIiwiY29udGVudHNJdGVtUmVwbGFjZW1lbnQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O2tFQUpHO21FQUNZO21FQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEIsSUFBQSxBQUFNQSx3Q0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsaUNBQWlDQyx3QkFBd0IsRUFBRUMsT0FBTztnQkFDaEUsSUFBTUMsYUFBYUYsMEJBQTBCLEdBQUc7Z0JBRWhELHVCQUppQkYsb0NBSVhLLFlBQU4sSUFBSyxhQUFVRCxZQUFZRDtZQUM3Qjs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLElBQUksRUFBRUMsTUFBTTtnQkFBSSxPQUFPQyxvQkFBVyxDQUFDSCxpQkFBaUIsQ0FQMUROLHlCQU9vRk8sTUFBTUM7WUFBUzs7O1lBRS9HRSxLQUFBQTttQkFBUCxTQUFPQSw4QkFBOEJDLHlCQUF5QixFQUFFUixPQUFPO2dCQUNyRSxJQUFNUyxlQUFlLEVBQUUsRUFDakJDLDBCQUEwQkMscUJBQXVCLENBQUNKLDZCQUE2QixDQUFDQywyQkFBMkJSO2dCQUVqSCxJQUFJVSw0QkFBNEIsTUFBTTtvQkFDcEMsSUFBTU4sT0FBT0ksMEJBQTBCSSxPQUFPLElBQ3hDQyxzQkFBc0JULE1BQU8sR0FBRztvQkFFdENTLG9CQUFvQkMsU0FBUyxDQUFDZDtvQkFFOUIsSUFBTWUsY0FBY0w7b0JBRXBCRCxhQUFhTyxJQUFJLENBQUNEO2dCQUNwQjtnQkFFQSxJQUFNRSxtQkFBbUJULDBCQUEwQlUsbUJBQW1CLElBQ2hFQyw2QkFBNkJGLGtCQUM3QkcsbUNBQW1DRCwyQkFBMkJFLE1BQU07Z0JBRTFFLElBQUlELG1DQUFtQyxHQUFHO29CQUN4QyxJQUFNLEFBQUVFLDBCQTdCT3pCLHdCQTZCUHlCLHlCQUNGQywwQkFBMEJELHdCQUF3QkUsOEJBQThCLENBQUNMLDRCQUE0Qm5CLFVBQzdHZSxlQUFjUSx5QkFBeUIsR0FBRztvQkFFaERkLGFBQWFPLElBQUksQ0FBQ0Q7Z0JBQ3BCO2dCQUVBLElBQU1VLDJCQUEyQkMscUJBQXdCLENBQUNDLGdCQUFnQixDQUFDbEIsZUFDckVMLFFBQU9xQiwwQkFDUHBCLFNBQVMsRUFBRTtnQkFFakJJLGFBQWFtQixPQUFPLENBQUMsU0FBQ2I7b0JBQ3BCQSxZQUFZYyxTQUFTLENBQUN4QjtnQkFDeEI7Z0JBRUEsSUFBTXlCLDBCQUEwQmpDLEFBNUNmQSx3QkE0Q3VDTSxpQkFBaUIsQ0FBQ0MsT0FBTUM7Z0JBRWhGLE9BQU95QjtZQUNUOzs7V0EvQ21CakM7RUFBZ0NTLG9CQUFXIn0=