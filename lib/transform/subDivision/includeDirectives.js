"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IncludeDirectivesDivisionTransform;
    }
});
var _division = /*#__PURE__*/ _interop_require_default(require("../division"));
var _query = require("../../utilities/query");
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
var IncludeDirectivesDivisionTransform = /*#__PURE__*/ function(DivisionTransform) {
    _inherits(IncludeDirectivesDivisionTransform, DivisionTransform);
    function IncludeDirectivesDivisionTransform(node, tokens, divisionMarkdownNode, includeDirectiveMarkdownNodes) {
        _class_call_check(this, IncludeDirectivesDivisionTransform);
        var _this;
        _this = _call_super(this, IncludeDirectivesDivisionTransform, [
            node,
            tokens,
            divisionMarkdownNode
        ]);
        _this.includeDirectiveMarkdownNodes = includeDirectiveMarkdownNodes;
        return _this;
    }
    _create_class(IncludeDirectivesDivisionTransform, [
        {
            key: "getIncludeDirectiveMarkdownNodes",
            value: function getIncludeDirectiveMarkdownNodes() {
                return this.includeDirectiveMarkdownNodes;
            }
        },
        {
            key: "removeDivisionMarkdownNode",
            value: function removeDivisionMarkdownNode(divisionMarkdownNode, context) {
                this.includeDirectiveMarkdownNodes.forEach(function(includeDirectiveMarkdownNode) {
                    var includeDirectiveTransform = includeDirectiveMarkdownNode.resolve(context);
                    if (includeDirectiveTransform !== null) {
                        var _$divisionMarkdownNode = includeDirectiveTransform.getDivisionMarkdownNode(), divisionMarkdownNodes = includeDirectiveTransform.addDivisionMarkdownNode(context);
                        divisionMarkdownNodes.forEach(function(divisionMarkdownNode) {
                            divisionMarkdownNode.resolveIncludes(divisionMarkdownNode, context);
                        });
                    }
                });
                this.removeFromTopmostMarkdownNode(divisionMarkdownNode, context);
            }
        }
    ], [
        {
            key: "fromDivisionMarkdownNode",
            value: function fromDivisionMarkdownNode(divisionMarkdownNode, context) {
                var includeDirectivesDivisionTransform = null;
                var node = divisionMarkdownNode, includeDirectiveMarkdownNodes = (0, _query.includeDirectiveMarkdownNodesFromNode)(node), includeDirectiveMarkdownNodesLength = includeDirectiveMarkdownNodes.length;
                if (includeDirectiveMarkdownNodesLength > 0) {
                    includeDirectivesDivisionTransform = _division.default.fromDivisionMarkdownNode(IncludeDirectivesDivisionTransform, divisionMarkdownNode, includeDirectiveMarkdownNodes, context);
                }
                return includeDirectivesDivisionTransform;
            }
        }
    ]);
    return IncludeDirectivesDivisionTransform;
}(_division.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vc3ViRGl2aXNpb24vaW5jbHVkZURpcmVjdGl2ZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEaXZpc2lvblRyYW5zZm9ybSBmcm9tIFwiLi4vZGl2aXNpb25cIjtcblxuaW1wb3J0IHsgaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZXNGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5jbHVkZURpcmVjdGl2ZXNEaXZpc2lvblRyYW5zZm9ybSBleHRlbmRzIERpdmlzaW9uVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3Iobm9kZSwgdG9rZW5zLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZXMpIHtcbiAgICBzdXBlcihub2RlLCB0b2tlbnMsIGRpdmlzaW9uTWFya2Rvd25Ob2RlKTtcblxuICAgIHRoaXMuaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZXMgPSBpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2RlcztcbiAgfVxuXG4gIGdldEluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLmluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGVzO1xuICB9XG5cbiAgcmVtb3ZlRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICB0aGlzLmluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGVzLmZvckVhY2goKGluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVEaXJlY3RpdmVUcmFuc2Zvcm0gPSBpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2RlLnJlc29sdmUoY29udGV4dCk7XG5cbiAgICAgIGlmIChpbmNsdWRlRGlyZWN0aXZlVHJhbnNmb3JtICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gaW5jbHVkZURpcmVjdGl2ZVRyYW5zZm9ybS5nZXREaXZpc2lvbk1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBpbmNsdWRlRGlyZWN0aXZlVHJhbnNmb3JtLmFkZERpdmlzaW9uTWFya2Rvd25Ob2RlKGNvbnRleHQpO1xuXG4gICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChkaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlLnJlc29sdmVJbmNsdWRlcyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5yZW1vdmVGcm9tVG9wbW9zdE1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGluY2x1ZGVEaXJlY3RpdmVzRGl2aXNpb25UcmFuc2Zvcm0gPSBudWxsO1xuXG4gICAgY29uc3Qgbm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICBpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2RlcyA9IGluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZXNMZW5ndGggPSBpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZXNMZW5ndGggPiAwKSB7XG4gICAgICBpbmNsdWRlRGlyZWN0aXZlc0RpdmlzaW9uVHJhbnNmb3JtID0gRGl2aXNpb25UcmFuc2Zvcm0uZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKEluY2x1ZGVEaXJlY3RpdmVzRGl2aXNpb25UcmFuc2Zvcm0sIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2RlcywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluY2x1ZGVEaXJlY3RpdmVzRGl2aXNpb25UcmFuc2Zvcm07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbmNsdWRlRGlyZWN0aXZlc0RpdmlzaW9uVHJhbnNmb3JtIiwibm9kZSIsInRva2VucyIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZXMiLCJnZXRJbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2RlcyIsInJlbW92ZURpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY29udGV4dCIsImZvckVhY2giLCJpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2RlIiwiaW5jbHVkZURpcmVjdGl2ZVRyYW5zZm9ybSIsInJlc29sdmUiLCJnZXREaXZpc2lvbk1hcmtkb3duTm9kZSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImFkZERpdmlzaW9uTWFya2Rvd25Ob2RlIiwicmVzb2x2ZUluY2x1ZGVzIiwicmVtb3ZlRnJvbVRvcG1vc3RNYXJrZG93bk5vZGUiLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGUiLCJpbmNsdWRlRGlyZWN0aXZlc0RpdmlzaW9uVHJhbnNmb3JtIiwiaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZXNGcm9tTm9kZSIsImluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiRGl2aXNpb25UcmFuc2Zvcm0iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OytEQUpTO3FCQUV3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QyxJQUFBLEFBQU1BLG1EQUFOO2NBQU1BO2FBQUFBLG1DQUNQQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsb0JBQW9CLEVBQUVDLDZCQUE2QjtnQ0FEMURKOztnQkFFakIsa0JBRmlCQTtZQUVYQztZQUFNQztZQUFRQzs7UUFFcEIsTUFBS0MsNkJBQTZCLEdBQUdBOzs7a0JBSnBCSjs7WUFPbkJLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsNkJBQTZCO1lBQzNDOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLDJCQUEyQkgsb0JBQW9CLEVBQUVJLE9BQU87Z0JBQ3RELElBQUksQ0FBQ0gsNkJBQTZCLENBQUNJLE9BQU8sQ0FBQyxTQUFDQztvQkFDMUMsSUFBTUMsNEJBQTRCRCw2QkFBNkJFLE9BQU8sQ0FBQ0o7b0JBRXZFLElBQUlHLDhCQUE4QixNQUFNO3dCQUN0QyxJQUFNUCx5QkFBdUJPLDBCQUEwQkUsdUJBQXVCLElBQ3hFQyx3QkFBd0JILDBCQUEwQkksdUJBQXVCLENBQUNQO3dCQUVoRk0sc0JBQXNCTCxPQUFPLENBQUMsU0FBQ0w7NEJBQzdCQSxxQkFBcUJZLGVBQWUsQ0FBQ1osc0JBQXNCSTt3QkFDN0Q7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsSUFBSSxDQUFDUyw2QkFBNkIsQ0FBQ2Isc0JBQXNCSTtZQUMzRDs7OztZQUVPVSxLQUFBQTttQkFBUCxTQUFPQSx5QkFBeUJkLG9CQUFvQixFQUFFSSxPQUFPO2dCQUMzRCxJQUFJVyxxQ0FBcUM7Z0JBRXpDLElBQU1qQixPQUFPRSxzQkFDUEMsZ0NBQWdDZSxJQUFBQSw0Q0FBcUMsRUFBQ2xCLE9BQ3RFbUIsc0NBQXNDaEIsOEJBQThCaUIsTUFBTTtnQkFFaEYsSUFBSUQsc0NBQXNDLEdBQUc7b0JBQzNDRixxQ0FBcUNJLGlCQUFpQixDQUFDTCx3QkFBd0IsQ0FwQ2hFakIsb0NBb0NxR0csc0JBQXNCQywrQkFBK0JHO2dCQUMzSztnQkFFQSxPQUFPVztZQUNUOzs7V0F4Q21CbEI7RUFBMkNzQixpQkFBaUIifQ==