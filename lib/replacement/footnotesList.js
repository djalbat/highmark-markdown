"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnotesListReplacement;
    }
});
var _replacement = /*#__PURE__*/ _interop_require_default(require("../replacement"));
var _footnotesItem = /*#__PURE__*/ _interop_require_default(require("../replacement/footnotesItem"));
var _footnotesList = /*#__PURE__*/ _interop_require_default(require("../node/markdown/footnotesList"));
var _query = require("../utilities/query");
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
var FootnotesListReplacement = /*#__PURE__*/ function(Replacement) {
    _inherits(FootnotesListReplacement, Replacement);
    var _super = _create_super(FootnotesListReplacement);
    function FootnotesListReplacement() {
        _class_call_check(this, FootnotesListReplacement);
        return _super.apply(this, arguments);
    }
    _create_class(FootnotesListReplacement, [
        {
            key: "replaceFootnotesDirectiveSubDivisionReplacement",
            value: function replaceFootnotesDirectiveSubDivisionReplacement(footnotesDirectiveSubDivisionReplacement, divisionMarkdownNode, context) {
                var subDivisionMarkdownNode = footnotesDirectiveSubDivisionReplacement.getSubDivisionMarkdownNode(), replacedNode = subDivisionMarkdownNode, parentNode = divisionMarkdownNode; ///
                _get(_get_prototype_of(FootnotesListReplacement.prototype), "replace", this).call(this, replacedNode, parentNode, context);
            }
        }
    ], [
        {
            key: "fromDivisionMarkdownNodeAndFootnoteReplacementMap",
            value: function fromDivisionMarkdownNodeAndFootnoteReplacementMap(divisionMarkdownNode, footnoteReplacementMap, context) {
                var footnotesListReplacement = null;
                var node = divisionMarkdownNode, start = startFromFootnoteReplacementMap(footnoteReplacementMap), footnoteLinkMarkdownNodes = (0, _query.footnoteLinkMarkdownNodesFromNode)(node), footnotesItemReplacements = [];
                var number = start;
                footnoteLinkMarkdownNodes.forEach(function(footnoteLinkMarkdownNode) {
                    var identifier = footnoteLinkMarkdownNode.identifier(context), footnoteReplacement = footnoteReplacementMap[identifier] || null;
                    if (footnoteReplacement !== null) {
                        var footnoteReplacementUnnumbered = footnoteReplacement.isUnnumbered();
                        if (footnoteReplacementUnnumbered) {
                            var footnotesItemReplacement = _footnotesItem.default.fromFootnoteReplacementAndIdentifier(footnoteReplacement, identifier, context);
                            footnotesItemReplacements.push(footnotesItemReplacement);
                            footnoteReplacement.setNumber(number);
                            number++;
                        }
                    }
                });
                var footnotesListMarkdownNode = _footnotesList.default.fromFootnotesItemReplacementsAndStart(footnotesItemReplacements, start);
                if (footnotesListMarkdownNode !== null) {
                    var node1 = footnotesListMarkdownNode, tokens = [];
                    footnotesItemReplacements.forEach(function(footnotesItemReplacement) {
                        footnotesItemReplacement.getTokens(tokens);
                    });
                    footnotesListReplacement = _replacement.default.fromNodeAndTokens(FootnotesListReplacement, node1, tokens);
                }
                return footnotesListReplacement;
            }
        }
    ]);
    return FootnotesListReplacement;
}(_replacement.default);
function startFromFootnoteReplacementMap(footnoteReplacementMap) {
    var footnoteReplacements = Object.values(footnoteReplacementMap), numberedFootnoteReplacements = footnoteReplacements.filter(function(footnoteReplacement) {
        var footnoteReplacementNumbered = footnoteReplacement.isNumbered();
        if (footnoteReplacementNumbered) {
            return true;
        }
    }), numberedFootnoteReplacementsLength = numberedFootnoteReplacements.length, start = numberedFootnoteReplacementsLength + 1;
    return start;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9mb290bm90ZXNMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVwbGFjZW1lbnQgZnJvbSBcIi4uL3JlcGxhY2VtZW50XCI7XG5pbXBvcnQgRm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50IGZyb20gXCIuLi9yZXBsYWNlbWVudC9mb290bm90ZXNJdGVtXCI7XG5pbXBvcnQgRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vbm9kZS9tYXJrZG93bi9mb290bm90ZXNMaXN0XCI7XG5cbmltcG9ydCB7IGZvb3Rub3RlTGlua01hcmtkb3duTm9kZXNGcm9tTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50IGV4dGVuZHMgUmVwbGFjZW1lbnQge1xuICByZXBsYWNlRm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudChmb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlID0gZm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudC5nZXRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgIHJlcGxhY2VkTm9kZSA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICBwYXJlbnROb2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGU7ICAvLy9cblxuICAgIHN1cGVyLnJlcGxhY2UocmVwbGFjZWROb2RlLCBwYXJlbnROb2RlLCBjb250ZXh0KVxuICB9XG5cbiAgc3RhdGljIGZyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZEZvb3Rub3RlUmVwbGFjZW1lbnRNYXAoZGl2aXNpb25NYXJrZG93bk5vZGUsIGZvb3Rub3RlUmVwbGFjZW1lbnRNYXAsIGNvbnRleHQpIHtcbiAgICBsZXQgZm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IG5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgIHN0YXJ0ID0gc3RhcnRGcm9tRm9vdG5vdGVSZXBsYWNlbWVudE1hcChmb290bm90ZVJlcGxhY2VtZW50TWFwKSxcbiAgICAgICAgICBmb290bm90ZUxpbmtNYXJrZG93bk5vZGVzID0gZm9vdG5vdGVMaW5rTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUpLFxuICAgICAgICAgIGZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudHMgPSBbXTtcblxuICAgIGxldCBudW1iZXIgPSBzdGFydDtcblxuICAgIGZvb3Rub3RlTGlua01hcmtkb3duTm9kZXMuZm9yRWFjaCgoZm9vdG5vdGVMaW5rTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBjb25zdCBpZGVudGlmaWVyID0gZm9vdG5vdGVMaW5rTWFya2Rvd25Ob2RlLmlkZW50aWZpZXIoY29udGV4dCksXG4gICAgICAgICAgICBmb290bm90ZVJlcGxhY2VtZW50ID0gZm9vdG5vdGVSZXBsYWNlbWVudE1hcFtpZGVudGlmaWVyXSB8fCBudWxsO1xuXG4gICAgICBpZiAoZm9vdG5vdGVSZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBmb290bm90ZVJlcGxhY2VtZW50VW5udW1iZXJlZCA9IGZvb3Rub3RlUmVwbGFjZW1lbnQuaXNVbm51bWJlcmVkKCk7XG5cbiAgICAgICAgaWYgKGZvb3Rub3RlUmVwbGFjZW1lbnRVbm51bWJlcmVkKSB7XG4gICAgICAgICAgY29uc3QgZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50ID0gRm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50LmZyb21Gb290bm90ZVJlcGxhY2VtZW50QW5kSWRlbnRpZmllcihmb290bm90ZVJlcGxhY2VtZW50LCBpZGVudGlmaWVyLCBjb250ZXh0KTtcblxuICAgICAgICAgIGZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudHMucHVzaChmb290bm90ZXNJdGVtUmVwbGFjZW1lbnQpO1xuXG4gICAgICAgICAgZm9vdG5vdGVSZXBsYWNlbWVudC5zZXROdW1iZXIobnVtYmVyKTtcblxuICAgICAgICAgIG51bWJlcisrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlID0gRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZS5mcm9tRm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50c0FuZFN0YXJ0KGZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudHMsIHN0YXJ0KTtcblxuICAgIGlmIChmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlID0gZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgICB0b2tlbnMgPSBbXTtcblxuICAgICAgZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50cy5mb3JFYWNoKChmb290bm90ZXNJdGVtUmVwbGFjZW1lbnQpID0+IHtcbiAgICAgICAgZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50LmdldFRva2Vucyh0b2tlbnMpO1xuICAgICAgfSk7XG5cbiAgICAgIGZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudCA9IFJlcGxhY2VtZW50LmZyb21Ob2RlQW5kVG9rZW5zKEZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudCwgbm9kZSwgdG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50O1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0YXJ0RnJvbUZvb3Rub3RlUmVwbGFjZW1lbnRNYXAoZm9vdG5vdGVSZXBsYWNlbWVudE1hcCkge1xuICBjb25zdCBmb290bm90ZVJlcGxhY2VtZW50cyA9IE9iamVjdC52YWx1ZXMoZm9vdG5vdGVSZXBsYWNlbWVudE1hcCksICAvLy9cbiAgICAgICAgbnVtYmVyZWRGb290bm90ZVJlcGxhY2VtZW50cyA9IGZvb3Rub3RlUmVwbGFjZW1lbnRzLmZpbHRlcigoZm9vdG5vdGVSZXBsYWNlbWVudCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGZvb3Rub3RlUmVwbGFjZW1lbnROdW1iZXJlZCA9IGZvb3Rub3RlUmVwbGFjZW1lbnQuaXNOdW1iZXJlZCgpO1xuXG4gICAgICAgICAgaWYgKGZvb3Rub3RlUmVwbGFjZW1lbnROdW1iZXJlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgbnVtYmVyZWRGb290bm90ZVJlcGxhY2VtZW50c0xlbmd0aCA9IG51bWJlcmVkRm9vdG5vdGVSZXBsYWNlbWVudHMubGVuZ3RoLFxuICAgICAgICBzdGFydCA9IG51bWJlcmVkRm9vdG5vdGVSZXBsYWNlbWVudHNMZW5ndGggKyAxO1xuXG4gIHJldHVybiBzdGFydDtcbn1cbiJdLCJuYW1lcyI6WyJGb290bm90ZXNMaXN0UmVwbGFjZW1lbnQiLCJyZXBsYWNlRm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsImZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImNvbnRleHQiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImdldFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwicmVwbGFjZWROb2RlIiwicGFyZW50Tm9kZSIsInJlcGxhY2UiLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRGb290bm90ZVJlcGxhY2VtZW50TWFwIiwiZm9vdG5vdGVSZXBsYWNlbWVudE1hcCIsImZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudCIsIm5vZGUiLCJzdGFydCIsInN0YXJ0RnJvbUZvb3Rub3RlUmVwbGFjZW1lbnRNYXAiLCJmb290bm90ZUxpbmtNYXJrZG93bk5vZGVzIiwiZm9vdG5vdGVMaW5rTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwiZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50cyIsIm51bWJlciIsImZvckVhY2giLCJmb290bm90ZUxpbmtNYXJrZG93bk5vZGUiLCJpZGVudGlmaWVyIiwiZm9vdG5vdGVSZXBsYWNlbWVudCIsImZvb3Rub3RlUmVwbGFjZW1lbnRVbm51bWJlcmVkIiwiaXNVbm51bWJlcmVkIiwiZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50IiwiRm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50IiwiZnJvbUZvb3Rub3RlUmVwbGFjZW1lbnRBbmRJZGVudGlmaWVyIiwicHVzaCIsInNldE51bWJlciIsImZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwiZnJvbUZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudHNBbmRTdGFydCIsInRva2VucyIsImdldFRva2VucyIsIlJlcGxhY2VtZW50IiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJmb290bm90ZVJlcGxhY2VtZW50cyIsIk9iamVjdCIsInZhbHVlcyIsIm51bWJlcmVkRm9vdG5vdGVSZXBsYWNlbWVudHMiLCJmaWx0ZXIiLCJmb290bm90ZVJlcGxhY2VtZW50TnVtYmVyZWQiLCJpc051bWJlcmVkIiwibnVtYmVyZWRGb290bm90ZVJlcGxhY2VtZW50c0xlbmd0aCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7a0VBTkc7b0VBQ2E7b0VBQ0M7cUJBRVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQyxJQUFBLEFBQU1BLHlDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxnREFBZ0RDLHdDQUF3QyxFQUFFQyxvQkFBb0IsRUFBRUMsT0FBTztnQkFDckgsSUFBTUMsMEJBQTBCSCx5Q0FBeUNJLDBCQUEwQixJQUM3RkMsZUFBZUYseUJBQ2ZHLGFBQWFMLHNCQUF1QixHQUFHO2dCQUU3Qyx1QkFOaUJILHFDQU1YUyxXQUFOLElBQUssYUFBU0YsY0FBY0MsWUFBWUo7WUFDMUM7Ozs7WUFFT00sS0FBQUE7bUJBQVAsU0FBT0Esa0RBQWtEUCxvQkFBb0IsRUFBRVEsc0JBQXNCLEVBQUVQLE9BQU87Z0JBQzVHLElBQUlRLDJCQUEyQjtnQkFFL0IsSUFBTUMsT0FBT1Ysc0JBQ1BXLFFBQVFDLGdDQUFnQ0oseUJBQ3hDSyw0QkFBNEJDLElBQUFBLHdDQUFpQyxFQUFDSixPQUM5REssNEJBQTRCLEVBQUU7Z0JBRXBDLElBQUlDLFNBQVNMO2dCQUViRSwwQkFBMEJJLE9BQU8sQ0FBQyxTQUFDQztvQkFDakMsSUFBTUMsYUFBYUQseUJBQXlCQyxVQUFVLENBQUNsQixVQUNqRG1CLHNCQUFzQlosc0JBQXNCLENBQUNXLFdBQVcsSUFBSTtvQkFFbEUsSUFBSUMsd0JBQXdCLE1BQU07d0JBQ2hDLElBQU1DLGdDQUFnQ0Qsb0JBQW9CRSxZQUFZO3dCQUV0RSxJQUFJRCwrQkFBK0I7NEJBQ2pDLElBQU1FLDJCQUEyQkMsc0JBQXdCLENBQUNDLG9DQUFvQyxDQUFDTCxxQkFBcUJELFlBQVlsQjs0QkFFaEljLDBCQUEwQlcsSUFBSSxDQUFDSDs0QkFFL0JILG9CQUFvQk8sU0FBUyxDQUFDWDs0QkFFOUJBO3dCQUNGO29CQUNGO2dCQUNGO2dCQUVBLElBQU1ZLDRCQUE0QkMsc0JBQXlCLENBQUNDLHFDQUFxQyxDQUFDZiwyQkFBMkJKO2dCQUU3SCxJQUFJaUIsOEJBQThCLE1BQU07b0JBQ3RDLElBQU1sQixRQUFPa0IsMkJBQ1BHLFNBQVMsRUFBRTtvQkFFakJoQiwwQkFBMEJFLE9BQU8sQ0FBQyxTQUFDTTt3QkFDakNBLHlCQUF5QlMsU0FBUyxDQUFDRDtvQkFDckM7b0JBRUF0QiwyQkFBMkJ3QixvQkFBVyxDQUFDQyxpQkFBaUIsQ0FoRHpDckMsMEJBZ0RvRWEsT0FBTXFCO2dCQUMzRjtnQkFFQSxPQUFPdEI7WUFDVDs7O1dBcERtQlo7RUFBaUNvQyxvQkFBVztBQXVEakUsU0FBU3JCLGdDQUFnQ0osc0JBQXNCO0lBQzdELElBQU0yQix1QkFBdUJDLE9BQU9DLE1BQU0sQ0FBQzdCLHlCQUNyQzhCLCtCQUErQkgscUJBQXFCSSxNQUFNLENBQUMsU0FBQ25CO1FBQzFELElBQU1vQiw4QkFBOEJwQixvQkFBb0JxQixVQUFVO1FBRWxFLElBQUlELDZCQUE2QjtZQUMvQixPQUFPO1FBQ1Q7SUFDRixJQUNBRSxxQ0FBcUNKLDZCQUE2QkssTUFBTSxFQUN4RWhDLFFBQVErQixxQ0FBcUM7SUFFbkQsT0FBTy9CO0FBQ1QifQ==