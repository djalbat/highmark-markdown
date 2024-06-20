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
            key: "fromDivisionMarkdownNodeAndFootnoteReplacementMap",
            value: function fromDivisionMarkdownNodeAndFootnoteReplacementMap(divisionMarkdownNode, footnoteReplacementMap, context) {
                var footnotesListReplacement = null;
                var node = divisionMarkdownNode, start = startFromFootnoteReplacementMap(footnoteReplacementMap), linkMarkdownNodes = (0, _query.linkMarkdownNodesFromNode)(node), footnotesItemReplacements = [];
                var number = start;
                linkMarkdownNodes.forEach(function(linkMarkdownNode) {
                    var identifier = linkMarkdownNode.identifier(context), footnoteReplacement = footnoteReplacementMap[identifier] || null;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9mb290bm90ZXNMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVwbGFjZW1lbnQgZnJvbSBcIi4uL3JlcGxhY2VtZW50XCI7XG5pbXBvcnQgRm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50IGZyb20gXCIuLi9yZXBsYWNlbWVudC9mb290bm90ZXNJdGVtXCI7XG5pbXBvcnQgRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vbm9kZS9tYXJrZG93bi9mb290bm90ZXNMaXN0XCI7XG5cbmltcG9ydCB7IGxpbmtNYXJrZG93bk5vZGVzRnJvbU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudCBleHRlbmRzIFJlcGxhY2VtZW50IHtcbiAgYXBwZW5kVG9EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZTsgLy8vXG5cbiAgICBzdXBlci5hcHBlbmRUbyhwYXJlbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRGb290bm90ZVJlcGxhY2VtZW50TWFwKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBmb290bm90ZVJlcGxhY2VtZW50TWFwLCBjb250ZXh0KSB7XG4gICAgbGV0IGZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBub2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICBzdGFydCA9IHN0YXJ0RnJvbUZvb3Rub3RlUmVwbGFjZW1lbnRNYXAoZm9vdG5vdGVSZXBsYWNlbWVudE1hcCksXG4gICAgICAgICAgbGlua01hcmtkb3duTm9kZXMgPSBsaW5rTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUpLFxuICAgICAgICAgIGZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudHMgPSBbXTtcblxuICAgIGxldCBudW1iZXIgPSBzdGFydDtcblxuICAgIGxpbmtNYXJrZG93bk5vZGVzLmZvckVhY2goKGxpbmtNYXJrZG93bk5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSBsaW5rTWFya2Rvd25Ob2RlLmlkZW50aWZpZXIoY29udGV4dCksXG4gICAgICAgICAgICBmb290bm90ZVJlcGxhY2VtZW50ID0gZm9vdG5vdGVSZXBsYWNlbWVudE1hcFtpZGVudGlmaWVyXSB8fCBudWxsO1xuXG4gICAgICBpZiAoZm9vdG5vdGVSZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBmb290bm90ZVJlcGxhY2VtZW50VW5udW1iZXJlZCA9IGZvb3Rub3RlUmVwbGFjZW1lbnQuaXNVbm51bWJlcmVkKCk7XG5cbiAgICAgICAgaWYgKGZvb3Rub3RlUmVwbGFjZW1lbnRVbm51bWJlcmVkKSB7XG4gICAgICAgICAgY29uc3QgZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50ID0gRm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50LmZyb21Gb290bm90ZVJlcGxhY2VtZW50QW5kSWRlbnRpZmllcihmb290bm90ZVJlcGxhY2VtZW50LCBpZGVudGlmaWVyLCBjb250ZXh0KTtcblxuICAgICAgICAgIGZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudHMucHVzaChmb290bm90ZXNJdGVtUmVwbGFjZW1lbnQpO1xuXG4gICAgICAgICAgZm9vdG5vdGVSZXBsYWNlbWVudC5zZXROdW1iZXIobnVtYmVyKTtcblxuICAgICAgICAgIG51bWJlcisrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlID0gRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZS5mcm9tRm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50c0FuZFN0YXJ0KGZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudHMsIHN0YXJ0KTtcblxuICAgIGlmIChmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlID0gZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgICB0b2tlbnMgPSBbXTtcblxuICAgICAgZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50cy5mb3JFYWNoKChmb290bm90ZXNJdGVtUmVwbGFjZW1lbnQpID0+IHtcbiAgICAgICAgZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50LmdldFRva2Vucyh0b2tlbnMpO1xuICAgICAgfSk7XG5cbiAgICAgIGZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudCA9IFJlcGxhY2VtZW50LmZyb21Ob2RlQW5kVG9rZW5zKEZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudCwgbm9kZSwgdG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50O1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0YXJ0RnJvbUZvb3Rub3RlUmVwbGFjZW1lbnRNYXAoZm9vdG5vdGVSZXBsYWNlbWVudE1hcCkge1xuICBjb25zdCBmb290bm90ZVJlcGxhY2VtZW50cyA9IE9iamVjdC52YWx1ZXMoZm9vdG5vdGVSZXBsYWNlbWVudE1hcCksICAvLy9cbiAgICAgICAgbnVtYmVyZWRGb290bm90ZVJlcGxhY2VtZW50cyA9IGZvb3Rub3RlUmVwbGFjZW1lbnRzLmZpbHRlcigoZm9vdG5vdGVSZXBsYWNlbWVudCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGZvb3Rub3RlUmVwbGFjZW1lbnROdW1iZXJlZCA9IGZvb3Rub3RlUmVwbGFjZW1lbnQuaXNOdW1iZXJlZCgpO1xuXG4gICAgICAgICAgaWYgKGZvb3Rub3RlUmVwbGFjZW1lbnROdW1iZXJlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgbnVtYmVyZWRGb290bm90ZVJlcGxhY2VtZW50c0xlbmd0aCA9IG51bWJlcmVkRm9vdG5vdGVSZXBsYWNlbWVudHMubGVuZ3RoLFxuICAgICAgICBzdGFydCA9IG51bWJlcmVkRm9vdG5vdGVSZXBsYWNlbWVudHNMZW5ndGggKyAxO1xuXG4gIHJldHVybiBzdGFydDtcbn1cbiJdLCJuYW1lcyI6WyJGb290bm90ZXNMaXN0UmVwbGFjZW1lbnQiLCJhcHBlbmRUb0RpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJjb250ZXh0IiwicGFyZW50Tm9kZSIsImFwcGVuZFRvIiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kRm9vdG5vdGVSZXBsYWNlbWVudE1hcCIsImZvb3Rub3RlUmVwbGFjZW1lbnRNYXAiLCJmb290bm90ZXNMaXN0UmVwbGFjZW1lbnQiLCJub2RlIiwic3RhcnQiLCJzdGFydEZyb21Gb290bm90ZVJlcGxhY2VtZW50TWFwIiwibGlua01hcmtkb3duTm9kZXMiLCJsaW5rTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwiZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50cyIsIm51bWJlciIsImZvckVhY2giLCJsaW5rTWFya2Rvd25Ob2RlIiwiaWRlbnRpZmllciIsImZvb3Rub3RlUmVwbGFjZW1lbnQiLCJmb290bm90ZVJlcGxhY2VtZW50VW5udW1iZXJlZCIsImlzVW5udW1iZXJlZCIsImZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudCIsIkZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudCIsImZyb21Gb290bm90ZVJlcGxhY2VtZW50QW5kSWRlbnRpZmllciIsInB1c2giLCJzZXROdW1iZXIiLCJmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwiRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSIsImZyb21Gb290bm90ZXNJdGVtUmVwbGFjZW1lbnRzQW5kU3RhcnQiLCJ0b2tlbnMiLCJnZXRUb2tlbnMiLCJSZXBsYWNlbWVudCIsImZyb21Ob2RlQW5kVG9rZW5zIiwiZm9vdG5vdGVSZXBsYWNlbWVudHMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJudW1iZXJlZEZvb3Rub3RlUmVwbGFjZW1lbnRzIiwiZmlsdGVyIiwiZm9vdG5vdGVSZXBsYWNlbWVudE51bWJlcmVkIiwiaXNOdW1iZXJlZCIsIm51bWJlcmVkRm9vdG5vdGVSZXBsYWNlbWVudHNMZW5ndGgiLCJsZW5ndGgiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OztrRUFORztvRUFDYTtvRUFDQztxQkFFSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNCLElBQUEsQUFBTUEseUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLDZCQUE2QkMsb0JBQW9CLEVBQUVDLE9BQU87Z0JBQ3hELElBQU1DLGFBQWFGLHNCQUFzQixHQUFHO2dCQUU1Qyx1QkFKaUJGLHFDQUlYSyxZQUFOLElBQUssYUFBVUQsWUFBWUQ7WUFDN0I7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0Esa0RBQWtESixvQkFBb0IsRUFBRUssc0JBQXNCLEVBQUVKLE9BQU87Z0JBQzVHLElBQUlLLDJCQUEyQjtnQkFFL0IsSUFBTUMsT0FBT1Asc0JBQ1BRLFFBQVFDLGdDQUFnQ0oseUJBQ3hDSyxvQkFBb0JDLElBQUFBLGdDQUF5QixFQUFDSixPQUM5Q0ssNEJBQTRCLEVBQUU7Z0JBRXBDLElBQUlDLFNBQVNMO2dCQUViRSxrQkFBa0JJLE9BQU8sQ0FBQyxTQUFDQztvQkFDekIsSUFBTUMsYUFBYUQsaUJBQWlCQyxVQUFVLENBQUNmLFVBQ3pDZ0Isc0JBQXNCWixzQkFBc0IsQ0FBQ1csV0FBVyxJQUFJO29CQUVsRSxJQUFJQyx3QkFBd0IsTUFBTTt3QkFDaEMsSUFBTUMsZ0NBQWdDRCxvQkFBb0JFLFlBQVk7d0JBRXRFLElBQUlELCtCQUErQjs0QkFDakMsSUFBTUUsMkJBQTJCQyxzQkFBd0IsQ0FBQ0Msb0NBQW9DLENBQUNMLHFCQUFxQkQsWUFBWWY7NEJBRWhJVywwQkFBMEJXLElBQUksQ0FBQ0g7NEJBRS9CSCxvQkFBb0JPLFNBQVMsQ0FBQ1g7NEJBRTlCQTt3QkFDRjtvQkFDRjtnQkFDRjtnQkFFQSxJQUFNWSw0QkFBNEJDLHNCQUF5QixDQUFDQyxxQ0FBcUMsQ0FBQ2YsMkJBQTJCSjtnQkFFN0gsSUFBSWlCLDhCQUE4QixNQUFNO29CQUN0QyxJQUFNbEIsUUFBT2tCLDJCQUNQRyxTQUFTLEVBQUU7b0JBRWpCaEIsMEJBQTBCRSxPQUFPLENBQUMsU0FBQ007d0JBQ2pDQSx5QkFBeUJTLFNBQVMsQ0FBQ0Q7b0JBQ3JDO29CQUVBdEIsMkJBQTJCd0Isb0JBQVcsQ0FBQ0MsaUJBQWlCLENBOUN6Q2pDLDBCQThDb0VTLE9BQU1xQjtnQkFDM0Y7Z0JBRUEsT0FBT3RCO1lBQ1Q7OztXQWxEbUJSO0VBQWlDZ0Msb0JBQVc7QUFxRGpFLFNBQVNyQixnQ0FBZ0NKLHNCQUFzQjtJQUM3RCxJQUFNMkIsdUJBQXVCQyxPQUFPQyxNQUFNLENBQUM3Qix5QkFDckM4QiwrQkFBK0JILHFCQUFxQkksTUFBTSxDQUFDLFNBQUNuQjtRQUMxRCxJQUFNb0IsOEJBQThCcEIsb0JBQW9CcUIsVUFBVTtRQUVsRSxJQUFJRCw2QkFBNkI7WUFDL0IsT0FBTztRQUNUO0lBQ0YsSUFDQUUscUNBQXFDSiw2QkFBNkJLLE1BQU0sRUFDeEVoQyxRQUFRK0IscUNBQXFDO0lBRW5ELE9BQU8vQjtBQUNUIn0=