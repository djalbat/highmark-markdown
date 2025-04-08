"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexListMarkdownNode;
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
var IndexListMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(IndexListMarkdownNode, MarkdownNode);
    function IndexListMarkdownNode() {
        _class_call_check(this, IndexListMarkdownNode);
        return _call_super(this, IndexListMarkdownNode, arguments);
    }
    _create_class(IndexListMarkdownNode, null, [
        {
            key: "fromIndexItemReplacements",
            value: function fromIndexItemReplacements(indexItemReplacements) {
                var ruleName = _ruleNames.INDEX_LIST_RULE_NAME, childNodes = indexItemReplacements.map(function(indexItemReplacement) {
                    var indexItemReplacementNode = indexItemReplacement.getIndexItemMarkdownNode(), childNode = indexItemReplacementNode; ///
                    return childNode;
                }), opacity = null, indexListMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(IndexListMarkdownNode, ruleName, childNodes, opacity);
                return indexListMarkdownNode;
            }
        }
    ]);
    return IndexListMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2luZGV4TGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuXG5pbXBvcnQgeyBJTkRFWF9MSVNUX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXhMaXN0TWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgc3RhdGljIGZyb21JbmRleEl0ZW1SZXBsYWNlbWVudHMoaW5kZXhJdGVtUmVwbGFjZW1lbnRzKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBJTkRFWF9MSVNUX1JVTEVfTkFNRSxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gaW5kZXhJdGVtUmVwbGFjZW1lbnRzLm1hcCgoaW5kZXhJdGVtUmVwbGFjZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4SXRlbVJlcGxhY2VtZW50Tm9kZSA9IGluZGV4SXRlbVJlcGxhY2VtZW50LmdldEluZGV4SXRlbU1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgICAgICAgICAgY2hpbGROb2RlID0gaW5kZXhJdGVtUmVwbGFjZW1lbnROb2RlOyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgaW5kZXhMaXN0TWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KEluZGV4TGlzdE1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpO1xuXG4gICAgcmV0dXJuIGluZGV4TGlzdE1hcmtkb3duTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkluZGV4TGlzdE1hcmtkb3duTm9kZSIsImZyb21JbmRleEl0ZW1SZXBsYWNlbWVudHMiLCJpbmRleEl0ZW1SZXBsYWNlbWVudHMiLCJydWxlTmFtZSIsIklOREVYX0xJU1RfUlVMRV9OQU1FIiwiY2hpbGROb2RlcyIsIm1hcCIsImluZGV4SXRlbVJlcGxhY2VtZW50IiwiaW5kZXhJdGVtUmVwbGFjZW1lbnROb2RlIiwiZ2V0SW5kZXhJdGVtTWFya2Rvd25Ob2RlIiwiY2hpbGROb2RlIiwib3BhY2l0eSIsImluZGV4TGlzdE1hcmtkb3duTm9kZSIsIk1hcmtkb3duTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsrREFKSTt5QkFFWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QixJQUFBLEFBQU1BLHNDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQSwwQkFBMEJDLHFCQUFxQjtnQkFDcEQsSUFBTUMsV0FBV0MsK0JBQW9CLEVBQy9CQyxhQUFhSCxzQkFBc0JJLEdBQUcsQ0FBQyxTQUFDQztvQkFDdEMsSUFBTUMsMkJBQTJCRCxxQkFBcUJFLHdCQUF3QixJQUN4RUMsWUFBWUYsMEJBQTJCLEdBQUc7b0JBRWhELE9BQU9FO2dCQUNULElBQ0FDLFVBQVUsTUFDVkMsd0JBQXdCQyxpQkFBWSxDQUFDQyxnQ0FBZ0MsQ0FWMURkLHVCQVVrRkcsVUFBVUUsWUFBWU07Z0JBRXpILE9BQU9DO1lBQ1Q7OztXQWJtQlo7RUFBOEJhLGlCQUFZIn0=