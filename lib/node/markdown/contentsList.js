"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContentsListMarkdownNode;
    }
});
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _ruleNames = require("../../ruleNames");
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
var ContentsListMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(ContentsListMarkdownNode, MarkdownNode);
    var _super = _create_super(ContentsListMarkdownNode);
    function ContentsListMarkdownNode() {
        _class_call_check(this, ContentsListMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(ContentsListMarkdownNode, null, [
        {
            key: "fromContentsItemReplacements",
            value: function fromContentsItemReplacements(contentsItemReplacements) {
                var ruleName = _ruleNames.CONTENTS_LIST_RULE_NAME, childNodes = contentsItemReplacements.map(function(contentsItemReplacement) {
                    var contentsItemReplacementNode = contentsItemReplacement.getNode(), childNode = contentsItemReplacementNode; ///
                    return childNode;
                }), opacity = null, contentsListMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(ContentsListMarkdownNode, ruleName, childNodes, opacity);
                return contentsListMarkdownNode;
            }
        }
    ]);
    return ContentsListMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2NvbnRlbnRzTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuXG5pbXBvcnQgeyBDT05URU5UU19MSVNUX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgc3RhdGljIGZyb21Db250ZW50c0l0ZW1SZXBsYWNlbWVudHMoY29udGVudHNJdGVtUmVwbGFjZW1lbnRzKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBDT05URU5UU19MSVNUX1JVTEVfTkFNRSxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gY29udGVudHNJdGVtUmVwbGFjZW1lbnRzLm1hcCgoY29udGVudHNJdGVtUmVwbGFjZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRzSXRlbVJlcGxhY2VtZW50Tm9kZSA9IGNvbnRlbnRzSXRlbVJlcGxhY2VtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICAgICAgICAgIGNoaWxkTm9kZSA9IGNvbnRlbnRzSXRlbVJlcGxhY2VtZW50Tm9kZTsgIC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gY2hpbGROb2RlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShDb250ZW50c0xpc3RNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTtcblxuICAgIHJldHVybiBjb250ZW50c0xpc3RNYXJrZG93bk5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb250ZW50c0xpc3RNYXJrZG93bk5vZGUiLCJmcm9tQ29udGVudHNJdGVtUmVwbGFjZW1lbnRzIiwiY29udGVudHNJdGVtUmVwbGFjZW1lbnRzIiwicnVsZU5hbWUiLCJDT05URU5UU19MSVNUX1JVTEVfTkFNRSIsImNoaWxkTm9kZXMiLCJtYXAiLCJjb250ZW50c0l0ZW1SZXBsYWNlbWVudCIsImNvbnRlbnRzSXRlbVJlcGxhY2VtZW50Tm9kZSIsImdldE5vZGUiLCJjaGlsZE5vZGUiLCJvcGFjaXR5IiwiY29udGVudHNMaXN0TWFya2Rvd25Ob2RlIiwiTWFya2Rvd25Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OytEQUpJO3lCQUVlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLElBQUEsQUFBTUEseUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQSw2QkFBNkJDLHdCQUF3QjtnQkFDMUQsSUFBTUMsV0FBV0Msa0NBQXVCLEVBQ2xDQyxhQUFhSCx5QkFBeUJJLEdBQUcsQ0FBQyxTQUFDQztvQkFDekMsSUFBTUMsOEJBQThCRCx3QkFBd0JFLE9BQU8sSUFDN0RDLFlBQVlGLDZCQUE4QixHQUFHO29CQUVuRCxPQUFPRTtnQkFDVCxJQUNBQyxVQUFVLE1BQ1ZDLDJCQUEyQkMsaUJBQVksQ0FBQ0MsZ0NBQWdDLENBVjdEZCwwQkFVd0ZHLFVBQVVFLFlBQVlNO2dCQUUvSCxPQUFPQztZQUNUOzs7V0FibUJaO0VBQWlDYSxpQkFBWSJ9