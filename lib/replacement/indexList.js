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
var _index = require("../utilities/index");
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
                var indexMap = (0, _index.indexMapFromDivisionMarkdownNodes)(divisionMarkdownNodes, context), entries = Object.keys(indexMap), indexItemReplacements = entries.map(function(entry) {
                    var pageNumbers = indexMap[entry], indexItemReplacement = _indexItem.default.fromEntryAndPageNumbers(entry, pageNumbers, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9pbmRleExpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZXBsYWNlbWVudCBmcm9tIFwiLi4vcmVwbGFjZW1lbnRcIjtcblxuaW1wb3J0IEluZGV4SXRlbVJlcGxhY2VtZW50IGZyb20gXCIuLi9yZXBsYWNlbWVudC9pbmRleEl0ZW1cIjtcbmltcG9ydCBJbmRleExpc3RNYXJrZG93bk5vZGUgZnJvbSBcIi4uL25vZGUvbWFya2Rvd24vaW5kZXhMaXN0XCI7XG5cbmltcG9ydCB7IGluZGV4TWFwRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvaW5kZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXhMaXN0UmVwbGFjZW1lbnQgZXh0ZW5kcyBSZXBsYWNlbWVudCB7XG4gIHJlcGxhY2VJbmRleERpcmVjdGl2ZVN1YmRpdmlzaW9uUmVwbGFjZW1lbnQoaW5kZXhEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlID0gaW5kZXhEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LmdldFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKCksXG4gICAgICAgICAgcmVwbGFjZWROb2RlID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgIHBhcmVudE5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZTsgIC8vL1xuXG4gICAgc3VwZXIucmVwbGFjZShyZXBsYWNlZE5vZGUsIHBhcmVudE5vZGUsIGNvbnRleHQpXG4gIH1cblxuICBzdGF0aWMgZnJvbURpdmlzaW9uTWFya2Rvd25Ob2Rlc0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgaW5kZXhMaXN0UmVwbGFjZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgaW5kZXhNYXAgPSBpbmRleE1hcEZyb21EaXZpc2lvbk1hcmtkb3duTm9kZXMoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBlbnRyaWVzID0gT2JqZWN0LmtleXMoaW5kZXhNYXApLCAvLy9cbiAgICAgICAgICBpbmRleEl0ZW1SZXBsYWNlbWVudHMgPSBlbnRyaWVzLm1hcCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VOdW1iZXJzID0gaW5kZXhNYXBbZW50cnldLFxuICAgICAgICAgICAgICAgICAgaW5kZXhJdGVtUmVwbGFjZW1lbnQgPSBJbmRleEl0ZW1SZXBsYWNlbWVudC5mcm9tRW50cnlBbmRQYWdlTnVtYmVycyhlbnRyeSwgcGFnZU51bWJlcnMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gaW5kZXhJdGVtUmVwbGFjZW1lbnQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgaW5kZXhMaXN0TWFya2Rvd25Ob2RlID0gSW5kZXhMaXN0TWFya2Rvd25Ob2RlLmZyb21JbmRleEl0ZW1SZXBsYWNlbWVudHMoaW5kZXhJdGVtUmVwbGFjZW1lbnRzKTtcblxuICAgIGlmIChpbmRleExpc3RNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBpbmRleExpc3RNYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgICAgdG9rZW5zID0gW107XG5cbiAgICAgIGluZGV4SXRlbVJlcGxhY2VtZW50cy5mb3JFYWNoKChpbmRleEl0ZW1SZXBsYWNlbWVudCkgPT4ge1xuICAgICAgICBpbmRleEl0ZW1SZXBsYWNlbWVudC5nZXRUb2tlbnModG9rZW5zKTtcbiAgICAgIH0pO1xuXG4gICAgICBpbmRleExpc3RSZXBsYWNlbWVudCA9IFJlcGxhY2VtZW50LmZyb21Ob2RlQW5kVG9rZW5zKEluZGV4TGlzdFJlcGxhY2VtZW50LCBub2RlLCB0b2tlbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBpbmRleExpc3RSZXBsYWNlbWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkluZGV4TGlzdFJlcGxhY2VtZW50IiwicmVwbGFjZUluZGV4RGlyZWN0aXZlU3ViZGl2aXNpb25SZXBsYWNlbWVudCIsImluZGV4RGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY29udGV4dCIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZ2V0U3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJyZXBsYWNlZE5vZGUiLCJwYXJlbnROb2RlIiwicmVwbGFjZSIsImZyb21EaXZpc2lvbk1hcmtkb3duTm9kZXNBbmREaXZpc2lvbk1hcmtkb3duTm9kZSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImluZGV4TGlzdFJlcGxhY2VtZW50IiwiaW5kZXhNYXAiLCJpbmRleE1hcEZyb21EaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJlbnRyaWVzIiwiT2JqZWN0Iiwia2V5cyIsImluZGV4SXRlbVJlcGxhY2VtZW50cyIsIm1hcCIsImVudHJ5IiwicGFnZU51bWJlcnMiLCJpbmRleEl0ZW1SZXBsYWNlbWVudCIsIkluZGV4SXRlbVJlcGxhY2VtZW50IiwiZnJvbUVudHJ5QW5kUGFnZU51bWJlcnMiLCJpbmRleExpc3RNYXJrZG93bk5vZGUiLCJJbmRleExpc3RNYXJrZG93bk5vZGUiLCJmcm9tSW5kZXhJdGVtUmVwbGFjZW1lbnRzIiwibm9kZSIsInRva2VucyIsImZvckVhY2giLCJnZXRUb2tlbnMiLCJSZXBsYWNlbWVudCIsImZyb21Ob2RlQW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OztrRUFQRztnRUFFUztnRUFDQztxQkFFZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQyxJQUFBLEFBQU1BLHFDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSw0Q0FBNENDLG9DQUFvQyxFQUFFQyxvQkFBb0IsRUFBRUMsT0FBTztnQkFDN0csSUFBTUMsMEJBQTBCSCxxQ0FBcUNJLDBCQUEwQixJQUN6RkMsZUFBZUYseUJBQ2ZHLGFBQWFMLHNCQUF1QixHQUFHO2dCQUU3Qyx1QkFOaUJILGlDQU1YUyxXQUFOLElBQUssYUFBU0YsY0FBY0MsWUFBWUo7WUFDMUM7Ozs7WUFFT00sS0FBQUE7bUJBQVAsU0FBT0EsaURBQWlEQyxxQkFBcUIsRUFBRVIsb0JBQW9CLEVBQUVDLE9BQU87Z0JBQzFHLElBQUlRLHVCQUF1QjtnQkFFM0IsSUFBTUMsV0FBV0MsSUFBQUEsd0NBQWlDLEVBQUNILHVCQUF1QlAsVUFDcEVXLFVBQVVDLE9BQU9DLElBQUksQ0FBQ0osV0FDdEJLLHdCQUF3QkgsUUFBUUksR0FBRyxDQUFDLFNBQUNDO29CQUNuQyxJQUFNQyxjQUFjUixRQUFRLENBQUNPLE1BQU0sRUFDN0JFLHVCQUF1QkMsa0JBQW9CLENBQUNDLHVCQUF1QixDQUFDSixPQUFPQyxhQUFhakI7b0JBRTlGLE9BQU9rQjtnQkFDVCxJQUNBRyx3QkFBd0JDLGtCQUFxQixDQUFDQyx5QkFBeUIsQ0FBQ1Q7Z0JBRTlFLElBQUlPLDBCQUEwQixNQUFNO29CQUNsQyxJQUFNRyxPQUFPSCx1QkFDUEksU0FBUyxFQUFFO29CQUVqQlgsc0JBQXNCWSxPQUFPLENBQUMsU0FBQ1I7d0JBQzdCQSxxQkFBcUJTLFNBQVMsQ0FBQ0Y7b0JBQ2pDO29CQUVBakIsdUJBQXVCb0Isb0JBQVcsQ0FBQ0MsaUJBQWlCLENBOUJyQ2pDLHNCQThCNEQ0QixNQUFNQztnQkFDbkY7Z0JBRUEsT0FBT2pCO1lBQ1Q7OztXQWxDbUJaO0VBQTZCZ0Msb0JBQVcifQ==