"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IncludeDirectivesSubDivisionReplacement;
    }
});
var _subDivision = /*#__PURE__*/ _interop_require_default(require("../../replacement/subDivision"));
var _query = require("../../utilities/query");
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
var IncludeDirectivesSubDivisionReplacement = /*#__PURE__*/ function(SubDivisionReplacement) {
    _inherits(IncludeDirectivesSubDivisionReplacement, SubDivisionReplacement);
    var _super = _create_super(IncludeDirectivesSubDivisionReplacement);
    function IncludeDirectivesSubDivisionReplacement(node, tokens, subDivisionMarkdownNode, includeDirectiveMarkdownNodes) {
        _class_call_check(this, IncludeDirectivesSubDivisionReplacement);
        var _this;
        _this = _super.call(this, node, tokens, subDivisionMarkdownNode);
        _this.includeDirectiveMarkdownNodes = includeDirectiveMarkdownNodes;
        return _this;
    }
    _create_class(IncludeDirectivesSubDivisionReplacement, [
        {
            key: "getIncludeDirectiveMarkdownNodes",
            value: function getIncludeDirectiveMarkdownNodes() {
                return this.includeDirectiveMarkdownNodes;
            }
        },
        {
            key: "removeSubDivisionMarkdownNode",
            value: function removeSubDivisionMarkdownNode(divisionMarkdownNode, context) {
                this.includeDirectiveMarkdownNodes.forEach(function(includeDirectiveMarkdownNode) {
                    var includeDirectiveReplacement = includeDirectiveMarkdownNode.resolve(context);
                    if (includeDirectiveReplacement !== null) {
                        var subDivisionMarkdownNodes = includeDirectiveReplacement.addDivisionMarkdownNode(context);
                        subDivisionMarkdownNodes.forEach(function(subDivisionMarkdownNode) {
                            var _$divisionMarkdownNode = includeDirectiveReplacement.getDivisionMarkdownNode();
                            subDivisionMarkdownNode.resolveIncludes(_$divisionMarkdownNode, context);
                        });
                    }
                });
                this.removeFromDivisionMarkdownNode(divisionMarkdownNode, context);
            }
        }
    ], [
        {
            key: "fromSubDivisionMarkdownNode",
            value: function fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context) {
                var includeDirectivesSubDivisionReplacement = null;
                var node = subDivisionMarkdownNode, includeDirectiveMarkdownNodes = (0, _query.includeDirectiveMarkdownNodesFromNode)(node), includeDirectiveMarkdownNodesLength = includeDirectiveMarkdownNodes.length;
                if (includeDirectiveMarkdownNodesLength > 0) {
                    includeDirectivesSubDivisionReplacement = _subDivision.default.fromSubDivisionMarkdownNode(IncludeDirectivesSubDivisionReplacement, subDivisionMarkdownNode, context, includeDirectiveMarkdownNodes);
                }
                return includeDirectivesSubDivisionReplacement;
            }
        }
    ]);
    return IncludeDirectivesSubDivisionReplacement;
}(_subDivision.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZXBsYWNlbWVudC9zdWJEaXZpc2lvbi9pbmNsdWRlRGlyZWN0aXZlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgZnJvbSBcIi4uLy4uL3JlcGxhY2VtZW50L3N1YkRpdmlzaW9uXCI7XG5cbmltcG9ydCB7IGluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGVzRnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluY2x1ZGVEaXJlY3RpdmVzU3ViRGl2aXNpb25SZXBsYWNlbWVudCBleHRlbmRzIFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihub2RlLCB0b2tlbnMsIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCBpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2Rlcykge1xuICAgIHN1cGVyKG5vZGUsIHRva2Vucywgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUpO1xuXG4gICAgdGhpcy5pbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2RlcyA9IGluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGVzO1xuICB9XG5cbiAgZ2V0SW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZXM7XG4gIH1cblxuICByZW1vdmVTdWJEaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIHRoaXMuaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZXMuZm9yRWFjaCgoaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZURpcmVjdGl2ZVJlcGxhY2VtZW50ID0gaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZS5yZXNvbHZlKGNvbnRleHQpO1xuXG4gICAgICBpZiAoaW5jbHVkZURpcmVjdGl2ZVJlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IGluY2x1ZGVEaXJlY3RpdmVSZXBsYWNlbWVudC5hZGREaXZpc2lvbk1hcmtkb3duTm9kZShjb250ZXh0KTtcblxuICAgICAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMuZm9yRWFjaCgoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IGluY2x1ZGVEaXJlY3RpdmVSZXBsYWNlbWVudC5nZXREaXZpc2lvbk1hcmtkb3duTm9kZSgpO1xuXG4gICAgICAgICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUucmVzb2x2ZUluY2x1ZGVzKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlbW92ZUZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGluY2x1ZGVEaXJlY3RpdmVzU3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBub2RlID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgIGluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGVzID0gaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2Rlc0xlbmd0aCA9IGluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2Rlc0xlbmd0aCA+IDApIHtcbiAgICAgIGluY2x1ZGVEaXJlY3RpdmVzU3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQuZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKEluY2x1ZGVEaXJlY3RpdmVzU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQsIGluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5jbHVkZURpcmVjdGl2ZXNTdWJEaXZpc2lvblJlcGxhY2VtZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiSW5jbHVkZURpcmVjdGl2ZXNTdWJEaXZpc2lvblJlcGxhY2VtZW50Iiwibm9kZSIsInRva2VucyIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZXMiLCJnZXRJbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2RlcyIsInJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJjb250ZXh0IiwiZm9yRWFjaCIsImluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJpbmNsdWRlRGlyZWN0aXZlUmVwbGFjZW1lbnQiLCJyZXNvbHZlIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGVzIiwiYWRkRGl2aXNpb25NYXJrZG93bk5vZGUiLCJnZXREaXZpc2lvbk1hcmtkb3duTm9kZSIsInJlc29sdmVJbmNsdWRlcyIsInJlbW92ZUZyb21EaXZpc2lvbk1hcmtkb3duTm9kZSIsImZyb21TdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImluY2x1ZGVEaXJlY3RpdmVzU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsImluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2Rlc0xlbmd0aCIsImxlbmd0aCIsIlN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O2tFQUpjO3FCQUVtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QyxJQUFBLEFBQU1BLHdEQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBLHdDQUNQQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsdUJBQXVCLEVBQUVDLDZCQUE2QjtnQ0FEN0RKOztrQ0FFWEMsTUFBTUMsUUFBUUM7UUFFcEIsTUFBS0MsNkJBQTZCLEdBQUdBOzs7a0JBSnBCSjs7WUFPbkJLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsNkJBQTZCO1lBQzNDOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLDhCQUE4QkMsb0JBQW9CLEVBQUVDLE9BQU87Z0JBQ3pELElBQUksQ0FBQ0osNkJBQTZCLENBQUNLLE9BQU8sQ0FBQyxTQUFDQztvQkFDMUMsSUFBTUMsOEJBQThCRCw2QkFBNkJFLE9BQU8sQ0FBQ0o7b0JBRXpFLElBQUlHLGdDQUFnQyxNQUFNO3dCQUN4QyxJQUFNRSwyQkFBMkJGLDRCQUE0QkcsdUJBQXVCLENBQUNOO3dCQUVyRksseUJBQXlCSixPQUFPLENBQUMsU0FBQ047NEJBQ2hDLElBQU1JLHlCQUF1QkksNEJBQTRCSSx1QkFBdUI7NEJBRWhGWix3QkFBd0JhLGVBQWUsQ0FBQ1Qsd0JBQXNCQzt3QkFDaEU7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsSUFBSSxDQUFDUyw4QkFBOEIsQ0FBQ1Ysc0JBQXNCQztZQUM1RDs7OztZQUVPVSxLQUFBQTttQkFBUCxTQUFPQSw0QkFBNEJmLHVCQUF1QixFQUFFSyxPQUFPO2dCQUNqRSxJQUFJVywwQ0FBMEM7Z0JBRTlDLElBQU1sQixPQUFPRSx5QkFDUEMsZ0NBQWdDZ0IsSUFBQUEsNENBQXFDLEVBQUNuQixPQUN0RW9CLHNDQUFzQ2pCLDhCQUE4QmtCLE1BQU07Z0JBRWhGLElBQUlELHNDQUFzQyxHQUFHO29CQUMzQ0YsMENBQTBDSSxvQkFBc0IsQ0FBQ0wsMkJBQTJCLENBckM3RWxCLHlDQXFDdUhHLHlCQUF5QkssU0FBU0o7Z0JBQzFLO2dCQUVBLE9BQU9lO1lBQ1Q7OztXQXpDbUJuQjtFQUFnRHVCLG9CQUFzQiJ9