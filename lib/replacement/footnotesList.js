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
            key: "appendToDivisionMarkdownNode",
            value: function appendToDivisionMarkdownNode(divisionMarkdownNode, context) {
                var parentNode = divisionMarkdownNode; ///
                _get(_get_prototype_of(FootnotesListReplacement.prototype), "appendTo", this).call(this, parentNode, context);
            }
        }
    ], [
        {
            key: "fromDivisionMarkdownNodeAndFootnoteMap",
            value: function fromDivisionMarkdownNodeAndFootnoteMap(divisionMarkdownNode, footnoteMap, context) {
                var footnotesListReplacement = null;
                var node = divisionMarkdownNode, start = startFromFootnoteMap(footnoteMap), linkMarkdownNodes = (0, _query.linkMarkdownNodesFromNode)(node), footnotesItemReplacements = [];
                var number = start;
                linkMarkdownNodes.forEach(function(linkMarkdownNode) {
                    var identifier = linkMarkdownNode.identifier(context), footnoteReplacement = footnoteMap[identifier] || null;
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
function startFromFootnoteMap(footnoteMap) {
    var footnoteReplacements = Object.values(footnoteMap), numberedFootnoteReplacements = footnoteReplacements.filter(function(footnoteReplacement) {
        var footnoteReplacementNumbered = footnoteReplacement.isNumbered();
        if (footnoteReplacementNumbered) {
            return true;
        }
    }), numberedFootnoteReplacementsLength = numberedFootnoteReplacements.length, start = numberedFootnoteReplacementsLength + 1;
    return start;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9mb290bm90ZXNMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVwbGFjZW1lbnQgZnJvbSBcIi4uL3JlcGxhY2VtZW50XCI7XG5pbXBvcnQgRm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50IGZyb20gXCIuLi9yZXBsYWNlbWVudC9mb290bm90ZXNJdGVtXCI7XG5pbXBvcnQgRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vbm9kZS9tYXJrZG93bi9mb290bm90ZXNMaXN0XCI7XG5cbmltcG9ydCB7IGxpbmtNYXJrZG93bk5vZGVzRnJvbU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudCBleHRlbmRzIFJlcGxhY2VtZW50IHtcbiAgYXBwZW5kVG9EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZTsgLy8vXG5cbiAgICBzdXBlci5hcHBlbmRUbyhwYXJlbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRGb290bm90ZU1hcChkaXZpc2lvbk1hcmtkb3duTm9kZSwgZm9vdG5vdGVNYXAsIGNvbnRleHQpIHtcbiAgICBsZXQgZm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IG5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgIHN0YXJ0ID0gc3RhcnRGcm9tRm9vdG5vdGVNYXAoZm9vdG5vdGVNYXApLFxuICAgICAgICAgIGxpbmtNYXJrZG93bk5vZGVzID0gbGlua01hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBmb290bm90ZXNJdGVtUmVwbGFjZW1lbnRzID0gW107XG5cbiAgICBsZXQgbnVtYmVyID0gc3RhcnQ7XG5cbiAgICBsaW5rTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChsaW5rTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBjb25zdCBpZGVudGlmaWVyID0gbGlua01hcmtkb3duTm9kZS5pZGVudGlmaWVyKGNvbnRleHQpLFxuICAgICAgICAgICAgZm9vdG5vdGVSZXBsYWNlbWVudCA9IGZvb3Rub3RlTWFwW2lkZW50aWZpZXJdIHx8IG51bGw7XG5cbiAgICAgIGlmIChmb290bm90ZVJlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGZvb3Rub3RlUmVwbGFjZW1lbnRVbm51bWJlcmVkID0gZm9vdG5vdGVSZXBsYWNlbWVudC5pc1VubnVtYmVyZWQoKTtcblxuICAgICAgICBpZiAoZm9vdG5vdGVSZXBsYWNlbWVudFVubnVtYmVyZWQpIHtcbiAgICAgICAgICBjb25zdCBmb290bm90ZXNJdGVtUmVwbGFjZW1lbnQgPSBGb290bm90ZXNJdGVtUmVwbGFjZW1lbnQuZnJvbUZvb3Rub3RlUmVwbGFjZW1lbnRBbmRJZGVudGlmaWVyKGZvb3Rub3RlUmVwbGFjZW1lbnQsIGlkZW50aWZpZXIsIGNvbnRleHQpO1xuXG4gICAgICAgICAgZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50cy5wdXNoKGZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudCk7XG5cbiAgICAgICAgICBmb290bm90ZVJlcGxhY2VtZW50LnNldE51bWJlcihudW1iZXIpO1xuXG4gICAgICAgICAgbnVtYmVyKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgPSBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLmZyb21Gb290bm90ZXNJdGVtUmVwbGFjZW1lbnRzQW5kU3RhcnQoZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50cywgc3RhcnQpO1xuXG4gICAgaWYgKGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICAgIHRva2VucyA9IFtdO1xuXG4gICAgICBmb290bm90ZXNJdGVtUmVwbGFjZW1lbnRzLmZvckVhY2goKGZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudCkgPT4ge1xuICAgICAgICBmb290bm90ZXNJdGVtUmVwbGFjZW1lbnQuZ2V0VG9rZW5zKHRva2Vucyk7XG4gICAgICB9KTtcblxuICAgICAgZm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50ID0gUmVwbGFjZW1lbnQuZnJvbU5vZGVBbmRUb2tlbnMoRm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50LCBub2RlLCB0b2tlbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBmb290bm90ZXNMaXN0UmVwbGFjZW1lbnQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RhcnRGcm9tRm9vdG5vdGVNYXAoZm9vdG5vdGVNYXApIHtcbiAgY29uc3QgZm9vdG5vdGVSZXBsYWNlbWVudHMgPSBPYmplY3QudmFsdWVzKGZvb3Rub3RlTWFwKSwgIC8vL1xuICAgICAgICBudW1iZXJlZEZvb3Rub3RlUmVwbGFjZW1lbnRzID0gZm9vdG5vdGVSZXBsYWNlbWVudHMuZmlsdGVyKChmb290bm90ZVJlcGxhY2VtZW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgZm9vdG5vdGVSZXBsYWNlbWVudE51bWJlcmVkID0gZm9vdG5vdGVSZXBsYWNlbWVudC5pc051bWJlcmVkKCk7XG5cbiAgICAgICAgICBpZiAoZm9vdG5vdGVSZXBsYWNlbWVudE51bWJlcmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBudW1iZXJlZEZvb3Rub3RlUmVwbGFjZW1lbnRzTGVuZ3RoID0gbnVtYmVyZWRGb290bm90ZVJlcGxhY2VtZW50cy5sZW5ndGgsXG4gICAgICAgIHN0YXJ0ID0gbnVtYmVyZWRGb290bm90ZVJlcGxhY2VtZW50c0xlbmd0aCArIDE7XG5cbiAgcmV0dXJuIHN0YXJ0O1xufVxuIl0sIm5hbWVzIjpbIkZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudCIsImFwcGVuZFRvRGl2aXNpb25NYXJrZG93bk5vZGUiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImNvbnRleHQiLCJwYXJlbnROb2RlIiwiYXBwZW5kVG8iLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRGb290bm90ZU1hcCIsImZvb3Rub3RlTWFwIiwiZm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50Iiwibm9kZSIsInN0YXJ0Iiwic3RhcnRGcm9tRm9vdG5vdGVNYXAiLCJsaW5rTWFya2Rvd25Ob2RlcyIsImxpbmtNYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJmb290bm90ZXNJdGVtUmVwbGFjZW1lbnRzIiwibnVtYmVyIiwiZm9yRWFjaCIsImxpbmtNYXJrZG93bk5vZGUiLCJpZGVudGlmaWVyIiwiZm9vdG5vdGVSZXBsYWNlbWVudCIsImZvb3Rub3RlUmVwbGFjZW1lbnRVbm51bWJlcmVkIiwiaXNVbm51bWJlcmVkIiwiZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50IiwiRm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50IiwiZnJvbUZvb3Rub3RlUmVwbGFjZW1lbnRBbmRJZGVudGlmaWVyIiwicHVzaCIsInNldE51bWJlciIsImZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwiZnJvbUZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudHNBbmRTdGFydCIsInRva2VucyIsImdldFRva2VucyIsIlJlcGxhY2VtZW50IiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJmb290bm90ZVJlcGxhY2VtZW50cyIsIk9iamVjdCIsInZhbHVlcyIsIm51bWJlcmVkRm9vdG5vdGVSZXBsYWNlbWVudHMiLCJmaWx0ZXIiLCJmb290bm90ZVJlcGxhY2VtZW50TnVtYmVyZWQiLCJpc051bWJlcmVkIiwibnVtYmVyZWRGb290bm90ZVJlcGxhY2VtZW50c0xlbmd0aCIsImxlbmd0aCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O2tFQU5HO29FQUNhO29FQUNDO3FCQUVJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0IsSUFBQSxBQUFNQSx5Q0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsNkJBQTZCQyxvQkFBb0IsRUFBRUMsT0FBTztnQkFDeEQsSUFBTUMsYUFBYUYsc0JBQXNCLEdBQUc7Z0JBRTVDLHVCQUppQkYscUNBSVhLLFlBQU4sSUFBSyxhQUFVRCxZQUFZRDtZQUM3Qjs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSx1Q0FBdUNKLG9CQUFvQixFQUFFSyxXQUFXLEVBQUVKLE9BQU87Z0JBQ3RGLElBQUlLLDJCQUEyQjtnQkFFL0IsSUFBTUMsT0FBT1Asc0JBQ1BRLFFBQVFDLHFCQUFxQkosY0FDN0JLLG9CQUFvQkMsSUFBQUEsZ0NBQXlCLEVBQUNKLE9BQzlDSyw0QkFBNEIsRUFBRTtnQkFFcEMsSUFBSUMsU0FBU0w7Z0JBRWJFLGtCQUFrQkksT0FBTyxDQUFDLFNBQUNDO29CQUN6QixJQUFNQyxhQUFhRCxpQkFBaUJDLFVBQVUsQ0FBQ2YsVUFDekNnQixzQkFBc0JaLFdBQVcsQ0FBQ1csV0FBVyxJQUFJO29CQUV2RCxJQUFJQyx3QkFBd0IsTUFBTTt3QkFDaEMsSUFBTUMsZ0NBQWdDRCxvQkFBb0JFLFlBQVk7d0JBRXRFLElBQUlELCtCQUErQjs0QkFDakMsSUFBTUUsMkJBQTJCQyxzQkFBd0IsQ0FBQ0Msb0NBQW9DLENBQUNMLHFCQUFxQkQsWUFBWWY7NEJBRWhJVywwQkFBMEJXLElBQUksQ0FBQ0g7NEJBRS9CSCxvQkFBb0JPLFNBQVMsQ0FBQ1g7NEJBRTlCQTt3QkFDRjtvQkFDRjtnQkFDRjtnQkFFQSxJQUFNWSw0QkFBNEJDLHNCQUF5QixDQUFDQyxxQ0FBcUMsQ0FBQ2YsMkJBQTJCSjtnQkFFN0gsSUFBSWlCLDhCQUE4QixNQUFNO29CQUN0QyxJQUFNbEIsUUFBT2tCLDJCQUNQRyxTQUFTLEVBQUU7b0JBRWpCaEIsMEJBQTBCRSxPQUFPLENBQUMsU0FBQ007d0JBQ2pDQSx5QkFBeUJTLFNBQVMsQ0FBQ0Q7b0JBQ3JDO29CQUVBdEIsMkJBQTJCd0Isb0JBQVcsQ0FBQ0MsaUJBQWlCLENBOUN6Q2pDLDBCQThDb0VTLE9BQU1xQjtnQkFDM0Y7Z0JBRUEsT0FBT3RCO1lBQ1Q7OztXQWxEbUJSO0VBQWlDZ0Msb0JBQVc7QUFxRGpFLFNBQVNyQixxQkFBcUJKLFdBQVc7SUFDdkMsSUFBTTJCLHVCQUF1QkMsT0FBT0MsTUFBTSxDQUFDN0IsY0FDckM4QiwrQkFBK0JILHFCQUFxQkksTUFBTSxDQUFDLFNBQUNuQjtRQUMxRCxJQUFNb0IsOEJBQThCcEIsb0JBQW9CcUIsVUFBVTtRQUVsRSxJQUFJRCw2QkFBNkI7WUFDL0IsT0FBTztRQUNUO0lBQ0YsSUFDQUUscUNBQXFDSiw2QkFBNkJLLE1BQU0sRUFDeEVoQyxRQUFRK0IscUNBQXFDO0lBRW5ELE9BQU8vQjtBQUNUIn0=