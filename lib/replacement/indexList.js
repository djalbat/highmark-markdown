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
var _necessary = require("necessary");
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
var strcmp = _necessary.stringUtilities.strcmp;
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
                var indexMap = (0, _index.indexMapFromDivisionMarkdownNodes)(divisionMarkdownNodes, context), entries = Object.keys(indexMap); ///
                entries.sort(function(entryA, entryB) {
                    var lowerCaseEntryA = entryA.toLowerCase(), lowerCaseEntryB = entryB.toLowerCase(), difference = strcmp(lowerCaseEntryB, lowerCaseEntryA);
                    return difference;
                });
                var indexItemReplacements = entries.map(function(entry) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9pbmRleExpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHN0cmluZ1V0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFJlcGxhY2VtZW50IGZyb20gXCIuLi9yZXBsYWNlbWVudFwiO1xuXG5pbXBvcnQgSW5kZXhJdGVtUmVwbGFjZW1lbnQgZnJvbSBcIi4uL3JlcGxhY2VtZW50L2luZGV4SXRlbVwiO1xuaW1wb3J0IEluZGV4TGlzdE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vbm9kZS9tYXJrZG93bi9pbmRleExpc3RcIjtcblxuaW1wb3J0IHsgaW5kZXhNYXBGcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9pbmRleFwiO1xuXG5jb25zdCB7IHN0cmNtcCB9ID0gc3RyaW5nVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleExpc3RSZXBsYWNlbWVudCBleHRlbmRzIFJlcGxhY2VtZW50IHtcbiAgcmVwbGFjZUluZGV4RGlyZWN0aXZlU3ViZGl2aXNpb25SZXBsYWNlbWVudChpbmRleERpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUgPSBpbmRleERpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQuZ2V0U3ViRGl2aXNpb25NYXJrZG93bk5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlZE5vZGUgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgICBzdXBlci5yZXBsYWNlKHJlcGxhY2VkTm9kZSwgcGFyZW50Tm9kZSwgY29udGV4dClcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBpbmRleExpc3RSZXBsYWNlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBpbmRleE1hcCA9IGluZGV4TWFwRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlcyhkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgIGVudHJpZXMgPSBPYmplY3Qua2V5cyhpbmRleE1hcCk7IC8vL1xuXG4gICAgZW50cmllcy5zb3J0KChlbnRyeUEsIGVudHJ5QikgPT4ge1xuICAgICAgY29uc3QgbG93ZXJDYXNlRW50cnlBID0gZW50cnlBLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICBsb3dlckNhc2VFbnRyeUIgPSBlbnRyeUIudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgIGRpZmZlcmVuY2UgPSBzdHJjbXAobG93ZXJDYXNlRW50cnlCLCBsb3dlckNhc2VFbnRyeUEpO1xuXG4gICAgICByZXR1cm4gZGlmZmVyZW5jZTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGluZGV4SXRlbVJlcGxhY2VtZW50cyA9IGVudHJpZXMubWFwKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFnZU51bWJlcnMgPSBpbmRleE1hcFtlbnRyeV0sXG4gICAgICAgICAgICAgICAgICBpbmRleEl0ZW1SZXBsYWNlbWVudCA9IEluZGV4SXRlbVJlcGxhY2VtZW50LmZyb21FbnRyeUFuZFBhZ2VOdW1iZXJzKGVudHJ5LCBwYWdlTnVtYmVycywgY29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBpbmRleEl0ZW1SZXBsYWNlbWVudDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBpbmRleExpc3RNYXJrZG93bk5vZGUgPSBJbmRleExpc3RNYXJrZG93bk5vZGUuZnJvbUluZGV4SXRlbVJlcGxhY2VtZW50cyhpbmRleEl0ZW1SZXBsYWNlbWVudHMpO1xuXG4gICAgaWYgKGluZGV4TGlzdE1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZSA9IGluZGV4TGlzdE1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgICB0b2tlbnMgPSBbXTtcblxuICAgICAgaW5kZXhJdGVtUmVwbGFjZW1lbnRzLmZvckVhY2goKGluZGV4SXRlbVJlcGxhY2VtZW50KSA9PiB7XG4gICAgICAgIGluZGV4SXRlbVJlcGxhY2VtZW50LmdldFRva2Vucyh0b2tlbnMpO1xuICAgICAgfSk7XG5cbiAgICAgIGluZGV4TGlzdFJlcGxhY2VtZW50ID0gUmVwbGFjZW1lbnQuZnJvbU5vZGVBbmRUb2tlbnMoSW5kZXhMaXN0UmVwbGFjZW1lbnQsIG5vZGUsIHRva2Vucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGV4TGlzdFJlcGxhY2VtZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiSW5kZXhMaXN0UmVwbGFjZW1lbnQiLCJzdHJjbXAiLCJzdHJpbmdVdGlsaXRpZXMiLCJyZXBsYWNlSW5kZXhEaXJlY3RpdmVTdWJkaXZpc2lvblJlcGxhY2VtZW50IiwiaW5kZXhEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJjb250ZXh0Iiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJnZXRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsInJlcGxhY2VkTm9kZSIsInBhcmVudE5vZGUiLCJyZXBsYWNlIiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2Rlc0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZGl2aXNpb25NYXJrZG93bk5vZGVzIiwiaW5kZXhMaXN0UmVwbGFjZW1lbnQiLCJpbmRleE1hcCIsImluZGV4TWFwRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImVudHJpZXMiLCJPYmplY3QiLCJrZXlzIiwic29ydCIsImVudHJ5QSIsImVudHJ5QiIsImxvd2VyQ2FzZUVudHJ5QSIsInRvTG93ZXJDYXNlIiwibG93ZXJDYXNlRW50cnlCIiwiZGlmZmVyZW5jZSIsImluZGV4SXRlbVJlcGxhY2VtZW50cyIsIm1hcCIsImVudHJ5IiwicGFnZU51bWJlcnMiLCJpbmRleEl0ZW1SZXBsYWNlbWVudCIsIkluZGV4SXRlbVJlcGxhY2VtZW50IiwiZnJvbUVudHJ5QW5kUGFnZU51bWJlcnMiLCJpbmRleExpc3RNYXJrZG93bk5vZGUiLCJJbmRleExpc3RNYXJrZG93bk5vZGUiLCJmcm9tSW5kZXhJdGVtUmVwbGFjZW1lbnRzIiwibm9kZSIsInRva2VucyIsImZvckVhY2giLCJnZXRUb2tlbnMiLCJSZXBsYWNlbWVudCIsImZyb21Ob2RlQW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWFxQkE7Ozt5QkFYVztrRUFFUjtnRUFFUztnRUFDQztxQkFFZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRCxJQUFNLEFBQUVDLFNBQVdDLDBCQUFlLENBQTFCRDtBQUVPLElBQUEsQUFBTUQscUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkcsS0FBQUE7bUJBQUFBLFNBQUFBLDRDQUE0Q0Msb0NBQW9DLEVBQUVDLG9CQUFvQixFQUFFQyxPQUFPO2dCQUM3RyxJQUFNQywwQkFBMEJILHFDQUFxQ0ksMEJBQTBCLElBQ3pGQyxlQUFlRix5QkFDZkcsYUFBYUwsc0JBQXVCLEdBQUc7Z0JBRTdDLHVCQU5pQkwsaUNBTVhXLFdBQU4sSUFBSyxhQUFTRixjQUFjQyxZQUFZSjtZQUMxQzs7OztZQUVPTSxLQUFBQTttQkFBUCxTQUFPQSxpREFBaURDLHFCQUFxQixFQUFFUixvQkFBb0IsRUFBRUMsT0FBTztnQkFDMUcsSUFBSVEsdUJBQXVCO2dCQUUzQixJQUFNQyxXQUFXQyxJQUFBQSx3Q0FBaUMsRUFBQ0gsdUJBQXVCUCxVQUNwRVcsVUFBVUMsT0FBT0MsSUFBSSxDQUFDSixXQUFXLEdBQUc7Z0JBRTFDRSxRQUFRRyxJQUFJLENBQUMsU0FBQ0MsUUFBUUM7b0JBQ3BCLElBQU1DLGtCQUFrQkYsT0FBT0csV0FBVyxJQUNwQ0Msa0JBQWtCSCxPQUFPRSxXQUFXLElBQ3BDRSxhQUFhekIsT0FBT3dCLGlCQUFpQkY7b0JBRTNDLE9BQU9HO2dCQUNUO2dCQUVBLElBQU1DLHdCQUF3QlYsUUFBUVcsR0FBRyxDQUFDLFNBQUNDO29CQUNuQyxJQUFNQyxjQUFjZixRQUFRLENBQUNjLE1BQU0sRUFDN0JFLHVCQUF1QkMsa0JBQW9CLENBQUNDLHVCQUF1QixDQUFDSixPQUFPQyxhQUFheEI7b0JBRTlGLE9BQU95QjtnQkFDVCxJQUNBRyx3QkFBd0JDLGtCQUFxQixDQUFDQyx5QkFBeUIsQ0FBQ1Q7Z0JBRTlFLElBQUlPLDBCQUEwQixNQUFNO29CQUNsQyxJQUFNRyxPQUFPSCx1QkFDUEksU0FBUyxFQUFFO29CQUVqQlgsc0JBQXNCWSxPQUFPLENBQUMsU0FBQ1I7d0JBQzdCQSxxQkFBcUJTLFNBQVMsQ0FBQ0Y7b0JBQ2pDO29CQUVBeEIsdUJBQXVCMkIsb0JBQVcsQ0FBQ0MsaUJBQWlCLENBdkNyQzFDLHNCQXVDNERxQyxNQUFNQztnQkFDbkY7Z0JBRUEsT0FBT3hCO1lBQ1Q7OztXQTNDbUJkO0VBQTZCeUMsb0JBQVcifQ==