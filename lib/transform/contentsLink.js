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
var _ = /*#__PURE__*/ _interop_require_default(require("./"));
var _line = /*#__PURE__*/ _interop_require_default(require(".//line"));
var _contentsLink = /*#__PURE__*/ _interop_require_default(require("../node/markdown/contentsLink"));
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
var ContentsLinkReplacement = /*#__PURE__*/ function(Replacement) {
    _inherits(ContentsLinkReplacement, Replacement);
    function ContentsLinkReplacement() {
        _class_call_check(this, ContentsLinkReplacement);
        return _call_super(this, ContentsLinkReplacement, arguments);
    }
    _create_class(ContentsLinkReplacement, null, [
        {
            key: "fromNestedHeadingMarkdownNode",
            value: function fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context) {
                var contentsLinkReplacement = null;
                var node = nestedHeadingMarkdownNode.getNode(), headingMarkdownNode = node; ///
                if (headingMarkdownNode !== null) {
                    var identifier = headingMarkdownNode.identifier(context), lineMarkdownNode = headingMarkdownNode.getLineMarkdownNode(), lineReplacement = _line.default.fromLineMarkdownNode(lineMarkdownNode, context), contentsLinkMarkdownNode = _contentsLink.default.fromLineReplacementAndIdentifier(lineReplacement, identifier), node1 = contentsLinkMarkdownNode, tokens = lineReplacement.getTokens();
                    contentsLinkReplacement = _.default.fromNodeAndTokens(ContentsLinkReplacement, node1, tokens);
                }
                return contentsLinkReplacement;
            }
        }
    ]);
    return ContentsLinkReplacement;
}(_.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vY29udGVudHNMaW5rLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVwbGFjZW1lbnQgZnJvbSBcIi4vXCI7XG5pbXBvcnQgTGluZVJlcGxhY2VtZW50IGZyb20gXCIuLy9saW5lXCI7XG5pbXBvcnQgQ29udGVudHNMaW5rTWFya2Rvd25Ob2RlIGZyb20gXCIuLi9ub2RlL21hcmtkb3duL2NvbnRlbnRzTGlua1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50c0xpbmtSZXBsYWNlbWVudCBleHRlbmRzIFJlcGxhY2VtZW50IHtcbiAgc3RhdGljIGZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlKG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgY29udGVudHNMaW5rUmVwbGFjZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3Qgbm9kZSA9IG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGhlYWRpbmdNYXJrZG93bk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICBpZiAoaGVhZGluZ01hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaWRlbnRpZmllciA9IGhlYWRpbmdNYXJrZG93bk5vZGUuaWRlbnRpZmllcihjb250ZXh0KSxcbiAgICAgICAgICAgIGxpbmVNYXJrZG93bk5vZGUgPSBoZWFkaW5nTWFya2Rvd25Ob2RlLmdldExpbmVNYXJrZG93bk5vZGUoKSxcbiAgICAgICAgICAgIGxpbmVSZXBsYWNlbWVudCA9IExpbmVSZXBsYWNlbWVudC5mcm9tTGluZU1hcmtkb3duTm9kZShsaW5lTWFya2Rvd25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGNvbnRlbnRzTGlua01hcmtkb3duTm9kZSA9IENvbnRlbnRzTGlua01hcmtkb3duTm9kZS5mcm9tTGluZVJlcGxhY2VtZW50QW5kSWRlbnRpZmllcihsaW5lUmVwbGFjZW1lbnQsIGlkZW50aWZpZXIpLFxuICAgICAgICAgICAgbm9kZSA9IGNvbnRlbnRzTGlua01hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgICAgdG9rZW5zID0gbGluZVJlcGxhY2VtZW50LmdldFRva2VucygpO1xuXG4gICAgICBjb250ZW50c0xpbmtSZXBsYWNlbWVudCA9IFJlcGxhY2VtZW50LmZyb21Ob2RlQW5kVG9rZW5zKENvbnRlbnRzTGlua1JlcGxhY2VtZW50LCBub2RlLCB0b2tlbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50c0xpbmtSZXBsYWNlbWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbnRlbnRzTGlua1JlcGxhY2VtZW50IiwiZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUiLCJuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlIiwiY29udGV4dCIsImNvbnRlbnRzTGlua1JlcGxhY2VtZW50Iiwibm9kZSIsImdldE5vZGUiLCJoZWFkaW5nTWFya2Rvd25Ob2RlIiwiaWRlbnRpZmllciIsImxpbmVNYXJrZG93bk5vZGUiLCJnZXRMaW5lTWFya2Rvd25Ob2RlIiwibGluZVJlcGxhY2VtZW50IiwiTGluZVJlcGxhY2VtZW50IiwiZnJvbUxpbmVNYXJrZG93bk5vZGUiLCJjb250ZW50c0xpbmtNYXJrZG93bk5vZGUiLCJDb250ZW50c0xpbmtNYXJrZG93bk5vZGUiLCJmcm9tTGluZVJlcGxhY2VtZW50QW5kSWRlbnRpZmllciIsInRva2VucyIsImdldFRva2VucyIsIlJlcGxhY2VtZW50IiwiZnJvbU5vZGVBbmRUb2tlbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3VEQUpHOzJEQUNJO21FQUNTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRCLElBQUEsQUFBTUEsd0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BLDhCQUE4QkMseUJBQXlCLEVBQUVDLE9BQU87Z0JBQ3JFLElBQUlDLDBCQUEwQjtnQkFFOUIsSUFBTUMsT0FBT0gsMEJBQTBCSSxPQUFPLElBQ3hDQyxzQkFBc0JGLE1BQU8sR0FBRztnQkFFdEMsSUFBSUUsd0JBQXdCLE1BQU07b0JBQ2hDLElBQU1DLGFBQWFELG9CQUFvQkMsVUFBVSxDQUFDTCxVQUM1Q00sbUJBQW1CRixvQkFBb0JHLG1CQUFtQixJQUMxREMsa0JBQWtCQyxhQUFlLENBQUNDLG9CQUFvQixDQUFDSixrQkFBa0JOLFVBQ3pFVywyQkFBMkJDLHFCQUF3QixDQUFDQyxnQ0FBZ0MsQ0FBQ0wsaUJBQWlCSCxhQUN0R0gsUUFBT1MsMEJBQ1BHLFNBQVNOLGdCQUFnQk8sU0FBUztvQkFFeENkLDBCQUEwQmUsU0FBVyxDQUFDQyxpQkFBaUIsQ0FmeENwQix5QkFla0VLLE9BQU1ZO2dCQUN6RjtnQkFFQSxPQUFPYjtZQUNUOzs7V0FuQm1CSjtFQUFnQ21CLFNBQVcifQ==