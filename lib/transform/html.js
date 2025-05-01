"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return HTMLTransform;
    }
});
var _occamdom = require("occam-dom");
var _markdown = /*#__PURE__*/ _interop_require_default(require("./markdown"));
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
var tokensFromNodeAndTokens = _occamdom.transformUtilities.tokensFromNodeAndTokens;
var HTMLTransform = /*#__PURE__*/ function(Transform) {
    _inherits(HTMLTransform, Transform);
    function HTMLTransform(node, tokens, markdownTransform) {
        _class_call_check(this, HTMLTransform);
        var _this;
        _this = _call_super(this, HTMLTransform, [
            node,
            tokens
        ]);
        _this.markdownTransform = markdownTransform;
        return _this;
    }
    _create_class(HTMLTransform, [
        {
            key: "getMarkdownTransform",
            value: function getMarkdownTransform() {
                return this.markdownTransform;
            }
        },
        {
            key: "remove",
            value: function remove(context) {
                var node = this.getNode(), childNode = node, parentNode = node.getParentNode();
                parentNode.removeChildNode(childNode);
                this.markdownTransform.remove(context);
            }
        }
    ], [
        {
            key: "fromHTNLNOde",
            value: function fromHTNLNOde(Class, htmlNode, context) {
                var node, tokens;
                var outerNode = htmlNode.getOuterNode(), markdownNode = outerNode; ///
                node = markdownNode; ///
                tokens = context.tokens;
                tokens = tokensFromNodeAndTokens(node, tokens);
                var markdownTransform = _markdown.default.fromNodeAndTokens(node, tokens);
                node = htmlNode; ///
                tokens = null;
                var htmlTransform = _occamdom.Transform.fromNodeAndTokens(Class, node, tokens, markdownTransform);
                return htmlTransform;
            }
        }
    ]);
    return HTMLTransform;
}(_occamdom.Transform);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVHJhbnNmb3JtLCB0cmFuc2Zvcm1VdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBNYXJrZG93blRyYW5zZm9ybSBmcm9tIFwiLi9tYXJrZG93blwiO1xuXG5jb25zdCB7IHRva2Vuc0Zyb21Ob2RlQW5kVG9rZW5zIH0gPSB0cmFuc2Zvcm1VdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhUTUxUcmFuc2Zvcm0gZXh0ZW5kcyBUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihub2RlLCB0b2tlbnMsIG1hcmtkb3duVHJhbnNmb3JtKSB7XG4gICAgc3VwZXIobm9kZSwgdG9rZW5zKTtcblxuICAgIHRoaXMubWFya2Rvd25UcmFuc2Zvcm0gPSBtYXJrZG93blRyYW5zZm9ybTtcbiAgfVxuXG4gIGdldE1hcmtkb3duVHJhbnNmb3JtKCkge1xuICAgIHJldHVybiB0aGlzLm1hcmtkb3duVHJhbnNmb3JtO1xuICB9XG5cbiAgcmVtb3ZlKGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY2hpbGROb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IG5vZGUuZ2V0UGFyZW50Tm9kZSgpO1xuXG4gICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZE5vZGUoY2hpbGROb2RlKTtcblxuICAgIHRoaXMubWFya2Rvd25UcmFuc2Zvcm0ucmVtb3ZlKGNvbnRleHQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE5MTk9kZShDbGFzcywgaHRtbE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgbm9kZSxcbiAgICAgICAgdG9rZW5zO1xuXG4gICAgY29uc3Qgb3V0ZXJOb2RlID0gaHRtbE5vZGUuZ2V0T3V0ZXJOb2RlKCksXG4gICAgICAgICAgbWFya2Rvd25Ob2RlID0gb3V0ZXJOb2RlOyAvLy9cblxuICAgIG5vZGUgPSBtYXJrZG93bk5vZGU7ICAvLy9cblxuICAgICh7IHRva2VucyB9ID0gY29udGV4dCk7XG5cbiAgICB0b2tlbnMgPSB0b2tlbnNGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpO1xuXG4gICAgY29uc3QgbWFya2Rvd25UcmFuc2Zvcm0gPSBNYXJrZG93blRyYW5zZm9ybS5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpO1xuXG4gICAgbm9kZSA9IGh0bWxOb2RlOyAgLy8vXG5cbiAgICB0b2tlbnMgPSBudWxsO1xuXG4gICAgY29uc3QgaHRtbFRyYW5zZm9ybSA9IFRyYW5zZm9ybS5mcm9tTm9kZUFuZFRva2VucyhDbGFzcywgbm9kZSwgdG9rZW5zLCBtYXJrZG93blRyYW5zZm9ybSk7XG5cbiAgICByZXR1cm4gaHRtbFRyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkhUTUxUcmFuc2Zvcm0iLCJ0b2tlbnNGcm9tTm9kZUFuZFRva2VucyIsInRyYW5zZm9ybVV0aWxpdGllcyIsIm5vZGUiLCJ0b2tlbnMiLCJtYXJrZG93blRyYW5zZm9ybSIsImdldE1hcmtkb3duVHJhbnNmb3JtIiwicmVtb3ZlIiwiY29udGV4dCIsImdldE5vZGUiLCJjaGlsZE5vZGUiLCJwYXJlbnROb2RlIiwiZ2V0UGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkTm9kZSIsImZyb21IVE5MTk9kZSIsIkNsYXNzIiwiaHRtbE5vZGUiLCJvdXRlck5vZGUiLCJnZXRPdXRlck5vZGUiLCJtYXJrZG93bk5vZGUiLCJNYXJrZG93blRyYW5zZm9ybSIsImZyb21Ob2RlQW5kVG9rZW5zIiwiaHRtbFRyYW5zZm9ybSIsIlRyYW5zZm9ybSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7d0JBTnlCOytEQUVoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QixJQUFNLEFBQUVDLDBCQUE0QkMsNEJBQWtCLENBQTlDRDtBQUVPLElBQUEsQUFBTUQsOEJBQU47Y0FBTUE7YUFBQUEsY0FDUEcsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLGlCQUFpQjtnQ0FEeEJMOztnQkFFakIsa0JBRmlCQTtZQUVYRztZQUFNQzs7UUFFWixNQUFLQyxpQkFBaUIsR0FBR0E7OztrQkFKUkw7O1lBT25CTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELGlCQUFpQjtZQUMvQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxPQUFPO2dCQUNaLElBQU1MLE9BQU8sSUFBSSxDQUFDTSxPQUFPLElBQ25CQyxZQUFZUCxNQUNaUSxhQUFhUixLQUFLUyxhQUFhO2dCQUVyQ0QsV0FBV0UsZUFBZSxDQUFDSDtnQkFFM0IsSUFBSSxDQUFDTCxpQkFBaUIsQ0FBQ0UsTUFBTSxDQUFDQztZQUNoQzs7OztZQUVPTSxLQUFBQTttQkFBUCxTQUFPQSxhQUFhQyxLQUFLLEVBQUVDLFFBQVEsRUFBRVIsT0FBTztnQkFDMUMsSUFBSUwsTUFDQUM7Z0JBRUosSUFBTWEsWUFBWUQsU0FBU0UsWUFBWSxJQUNqQ0MsZUFBZUYsV0FBVyxHQUFHO2dCQUVuQ2QsT0FBT2dCLGNBQWUsR0FBRztnQkFFdEJmLFNBQVdJLFFBQVhKO2dCQUVIQSxTQUFTSCx3QkFBd0JFLE1BQU1DO2dCQUV2QyxJQUFNQyxvQkFBb0JlLGlCQUFpQixDQUFDQyxpQkFBaUIsQ0FBQ2xCLE1BQU1DO2dCQUVwRUQsT0FBT2EsVUFBVyxHQUFHO2dCQUVyQlosU0FBUztnQkFFVCxJQUFNa0IsZ0JBQWdCQyxtQkFBUyxDQUFDRixpQkFBaUIsQ0FBQ04sT0FBT1osTUFBTUMsUUFBUUM7Z0JBRXZFLE9BQU9pQjtZQUNUOzs7V0EzQ21CdEI7RUFBc0J1QixtQkFBUyJ9