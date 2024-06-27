"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexListReplacement;
    }
});
var _replacement = /*#__PURE__*/ _interop_require_default(require("../replacement"));
var _indexItem = /*#__PURE__*/ _interop_require_default(require("../replacement/indexItem"));
var _indexList = /*#__PURE__*/ _interop_require_default(require("../node/markdown/indexList"));
var _list = /*#__PURE__*/ _interop_require_default(require("../index/list"));
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
var IndexListReplacement = /*#__PURE__*/ function(Replacement) {
    _inherits(IndexListReplacement, Replacement);
    var _super = _create_super(IndexListReplacement);
    function IndexListReplacement() {
        _class_call_check(this, IndexListReplacement);
        return _super.apply(this, arguments);
    }
    _create_class(IndexListReplacement, [
        {
            key: "replaceIndexDirectiveSubdivisionReplacement",
            value: function replaceIndexDirectiveSubdivisionReplacement(indexDirectiveSubDivisionReplacement, divisionMarkdownNode, context) {
                var subDivisionMarkdownNode = indexDirectiveSubDivisionReplacement.getSubDivisionMarkdownNode(), replacedNode = subDivisionMarkdownNode, parentNode = divisionMarkdownNode; ///
                _get(_get_prototype_of(IndexListReplacement.prototype), "replace", this).call(this, replacedNode, parentNode, context);
            }
        }
    ], [
        {
            key: "fromDivisionMarkdownNodesAndDivisionMarkdownNode",
            value: function fromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context) {
                var indexListReplacement = null;
                var indexList = _list.default.fromDivisionMarkdownNodes(divisionMarkdownNodes, context), indexItemReplacements = indexList.mapEntries(function(entry, pageNumbers) {
                    var indexItemReplacement = _indexItem.default.fromEntryAndPageNumbers(entry, pageNumbers, context);
                    return indexItemReplacement;
                }), indexListMarkdownNode = _indexList.default.fromIndexItemReplacements(indexItemReplacements);
                if (indexListMarkdownNode !== null) {
                    var node = indexListMarkdownNode, tokens = [];
                    indexItemReplacements.forEach(function(indexItemReplacement) {
                        indexItemReplacement.getTokens(tokens);
                    });
                    indexListReplacement = _replacement.default.fromNodeAndTokens(IndexListReplacement, node, tokens);
                }
                return indexListReplacement;
            }
        }
    ]);
    return IndexListReplacement;
}(_replacement.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9pbmRleExpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZXBsYWNlbWVudCBmcm9tIFwiLi4vcmVwbGFjZW1lbnRcIjtcblxuaW1wb3J0IEluZGV4SXRlbVJlcGxhY2VtZW50IGZyb20gXCIuLi9yZXBsYWNlbWVudC9pbmRleEl0ZW1cIjtcbmltcG9ydCBJbmRleExpc3RNYXJrZG93bk5vZGUgZnJvbSBcIi4uL25vZGUvbWFya2Rvd24vaW5kZXhMaXN0XCI7XG5cbmltcG9ydCBJbmRleExpc3QgZnJvbSBcIi4uL2luZGV4L2xpc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXhMaXN0UmVwbGFjZW1lbnQgZXh0ZW5kcyBSZXBsYWNlbWVudCB7XG4gIHJlcGxhY2VJbmRleERpcmVjdGl2ZVN1YmRpdmlzaW9uUmVwbGFjZW1lbnQoaW5kZXhEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlID0gaW5kZXhEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LmdldFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKCksXG4gICAgICAgICAgcmVwbGFjZWROb2RlID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgIHBhcmVudE5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZTsgIC8vL1xuXG4gICAgc3VwZXIucmVwbGFjZShyZXBsYWNlZE5vZGUsIHBhcmVudE5vZGUsIGNvbnRleHQpXG4gIH1cblxuICBzdGF0aWMgZnJvbURpdmlzaW9uTWFya2Rvd25Ob2Rlc0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgaW5kZXhMaXN0UmVwbGFjZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgaW5kZXhMaXN0ID0gSW5kZXhMaXN0LmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZXMoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBpbmRleEl0ZW1SZXBsYWNlbWVudHMgPSBpbmRleExpc3QubWFwRW50cmllcygoZW50cnksIHBhZ2VOdW1iZXJzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleEl0ZW1SZXBsYWNlbWVudCA9IEluZGV4SXRlbVJlcGxhY2VtZW50LmZyb21FbnRyeUFuZFBhZ2VOdW1iZXJzKGVudHJ5LCBwYWdlTnVtYmVycywgY29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBpbmRleEl0ZW1SZXBsYWNlbWVudDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBpbmRleExpc3RNYXJrZG93bk5vZGUgPSBJbmRleExpc3RNYXJrZG93bk5vZGUuZnJvbUluZGV4SXRlbVJlcGxhY2VtZW50cyhpbmRleEl0ZW1SZXBsYWNlbWVudHMpO1xuXG4gICAgaWYgKGluZGV4TGlzdE1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZSA9IGluZGV4TGlzdE1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgICB0b2tlbnMgPSBbXTtcblxuICAgICAgaW5kZXhJdGVtUmVwbGFjZW1lbnRzLmZvckVhY2goKGluZGV4SXRlbVJlcGxhY2VtZW50KSA9PiB7XG4gICAgICAgIGluZGV4SXRlbVJlcGxhY2VtZW50LmdldFRva2Vucyh0b2tlbnMpO1xuICAgICAgfSk7XG5cbiAgICAgIGluZGV4TGlzdFJlcGxhY2VtZW50ID0gUmVwbGFjZW1lbnQuZnJvbU5vZGVBbmRUb2tlbnMoSW5kZXhMaXN0UmVwbGFjZW1lbnQsIG5vZGUsIHRva2Vucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGV4TGlzdFJlcGxhY2VtZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiSW5kZXhMaXN0UmVwbGFjZW1lbnQiLCJyZXBsYWNlSW5kZXhEaXJlY3RpdmVTdWJkaXZpc2lvblJlcGxhY2VtZW50IiwiaW5kZXhEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJjb250ZXh0Iiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJnZXRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsInJlcGxhY2VkTm9kZSIsInBhcmVudE5vZGUiLCJyZXBsYWNlIiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2Rlc0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZGl2aXNpb25NYXJrZG93bk5vZGVzIiwiaW5kZXhMaXN0UmVwbGFjZW1lbnQiLCJpbmRleExpc3QiLCJJbmRleExpc3QiLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzIiwiaW5kZXhJdGVtUmVwbGFjZW1lbnRzIiwibWFwRW50cmllcyIsImVudHJ5IiwicGFnZU51bWJlcnMiLCJpbmRleEl0ZW1SZXBsYWNlbWVudCIsIkluZGV4SXRlbVJlcGxhY2VtZW50IiwiZnJvbUVudHJ5QW5kUGFnZU51bWJlcnMiLCJpbmRleExpc3RNYXJrZG93bk5vZGUiLCJJbmRleExpc3RNYXJrZG93bk5vZGUiLCJmcm9tSW5kZXhJdGVtUmVwbGFjZW1lbnRzIiwibm9kZSIsInRva2VucyIsImZvckVhY2giLCJnZXRUb2tlbnMiLCJSZXBsYWNlbWVudCIsImZyb21Ob2RlQW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OztrRUFQRztnRUFFUztnRUFDQzsyREFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsSUFBQSxBQUFNQSxxQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsNENBQTRDQyxvQ0FBb0MsRUFBRUMsb0JBQW9CLEVBQUVDLE9BQU87Z0JBQzdHLElBQU1DLDBCQUEwQkgscUNBQXFDSSwwQkFBMEIsSUFDekZDLGVBQWVGLHlCQUNmRyxhQUFhTCxzQkFBdUIsR0FBRztnQkFFN0MsdUJBTmlCSCxpQ0FNWFMsV0FBTixJQUFLLGFBQVNGLGNBQWNDLFlBQVlKO1lBQzFDOzs7O1lBRU9NLEtBQUFBO21CQUFQLFNBQU9BLGlEQUFpREMscUJBQXFCLEVBQUVSLG9CQUFvQixFQUFFQyxPQUFPO2dCQUMxRyxJQUFJUSx1QkFBdUI7Z0JBRTNCLElBQU1DLFlBQVlDLGFBQVMsQ0FBQ0MseUJBQXlCLENBQUNKLHVCQUF1QlAsVUFDdkVZLHdCQUF3QkgsVUFBVUksVUFBVSxDQUFDLFNBQUNDLE9BQU9DO29CQUNuRCxJQUFNQyx1QkFBdUJDLGtCQUFvQixDQUFDQyx1QkFBdUIsQ0FBQ0osT0FBT0MsYUFBYWY7b0JBRTlGLE9BQU9nQjtnQkFDVCxJQUNBRyx3QkFBd0JDLGtCQUFxQixDQUFDQyx5QkFBeUIsQ0FBQ1Q7Z0JBRTlFLElBQUlPLDBCQUEwQixNQUFNO29CQUNsQyxJQUFNRyxPQUFPSCx1QkFDUEksU0FBUyxFQUFFO29CQUVqQlgsc0JBQXNCWSxPQUFPLENBQUMsU0FBQ1I7d0JBQzdCQSxxQkFBcUJTLFNBQVMsQ0FBQ0Y7b0JBQ2pDO29CQUVBZix1QkFBdUJrQixvQkFBVyxDQUFDQyxpQkFBaUIsQ0E1QnJDL0Isc0JBNEI0RDBCLE1BQU1DO2dCQUNuRjtnQkFFQSxPQUFPZjtZQUNUOzs7V0FoQ21CWjtFQUE2QjhCLG9CQUFXIn0=