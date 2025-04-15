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
var _ = /*#__PURE__*/ _interop_require_default(require("./"));
var _footnotesItem = /*#__PURE__*/ _interop_require_default(require(".//footnotesItem"));
var _footnotesList = /*#__PURE__*/ _interop_require_default(require("../node/markdown/footnotesList"));
var _query = require("../utilities/query");
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var FootnotesListReplacement = /*#__PURE__*/ function(Replacement) {
    _inherits(FootnotesListReplacement, Replacement);
    function FootnotesListReplacement() {
        _class_call_check(this, FootnotesListReplacement);
        return _call_super(this, FootnotesListReplacement, arguments);
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
                var footnotesItemReplacementsLength = footnotesItemReplacements.length;
                if (footnotesItemReplacementsLength > 0) {
                    var footnotesListMarkdownNode = _footnotesList.default.fromFootnotesItemReplacementsAndStart(footnotesItemReplacements, start), node1 = footnotesListMarkdownNode, tokens = [];
                    footnotesItemReplacements.forEach(function(footnotesItemReplacement) {
                        footnotesItemReplacement.getTokens(tokens);
                    });
                    footnotesListReplacement = _.default.fromNodeAndTokens(FootnotesListReplacement, node1, tokens);
                }
                return footnotesListReplacement;
            }
        }
    ]);
    return FootnotesListReplacement;
}(_.default);
function startFromFootnoteReplacementMap(footnoteReplacementMap) {
    var footnoteReplacements = Object.values(footnoteReplacementMap), numberedFootnoteReplacements = footnoteReplacements.filter(function(footnoteReplacement) {
        var footnoteReplacementNumbered = footnoteReplacement.isNumbered();
        if (footnoteReplacementNumbered) {
            return true;
        }
    }), numberedFootnoteReplacementsLength = numberedFootnoteReplacements.length, start = numberedFootnoteReplacementsLength + 1;
    return start;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vZm9vdG5vdGVzTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlcGxhY2VtZW50IGZyb20gXCIuL1wiO1xuaW1wb3J0IEZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudCBmcm9tIFwiLi8vZm9vdG5vdGVzSXRlbVwiO1xuaW1wb3J0IEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgZnJvbSBcIi4uL25vZGUvbWFya2Rvd24vZm9vdG5vdGVzTGlzdFwiO1xuXG5pbXBvcnQgeyBmb290bm90ZUxpbmtNYXJrZG93bk5vZGVzRnJvbU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudCBleHRlbmRzIFJlcGxhY2VtZW50IHtcbiAgcmVwbGFjZUZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQoZm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSA9IGZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQuZ2V0U3ViRGl2aXNpb25NYXJrZG93bk5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlZE5vZGUgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgICBzdXBlci5yZXBsYWNlKHJlcGxhY2VkTm9kZSwgcGFyZW50Tm9kZSwgY29udGV4dClcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRGb290bm90ZVJlcGxhY2VtZW50TWFwKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBmb290bm90ZVJlcGxhY2VtZW50TWFwLCBjb250ZXh0KSB7XG4gICAgbGV0IGZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBub2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICBzdGFydCA9IHN0YXJ0RnJvbUZvb3Rub3RlUmVwbGFjZW1lbnRNYXAoZm9vdG5vdGVSZXBsYWNlbWVudE1hcCksXG4gICAgICAgICAgZm9vdG5vdGVMaW5rTWFya2Rvd25Ob2RlcyA9IGZvb3Rub3RlTGlua01hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBmb290bm90ZXNJdGVtUmVwbGFjZW1lbnRzID0gW107XG5cbiAgICBsZXQgbnVtYmVyID0gc3RhcnQ7XG5cbiAgICBmb290bm90ZUxpbmtNYXJrZG93bk5vZGVzLmZvckVhY2goKGZvb3Rub3RlTGlua01hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgY29uc3QgaWRlbnRpZmllciA9IGZvb3Rub3RlTGlua01hcmtkb3duTm9kZS5pZGVudGlmaWVyKGNvbnRleHQpLFxuICAgICAgICAgICAgZm9vdG5vdGVSZXBsYWNlbWVudCA9IGZvb3Rub3RlUmVwbGFjZW1lbnRNYXBbaWRlbnRpZmllcl0gfHwgbnVsbDtcblxuICAgICAgaWYgKGZvb3Rub3RlUmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZm9vdG5vdGVSZXBsYWNlbWVudFVubnVtYmVyZWQgPSBmb290bm90ZVJlcGxhY2VtZW50LmlzVW5udW1iZXJlZCgpO1xuXG4gICAgICAgIGlmIChmb290bm90ZVJlcGxhY2VtZW50VW5udW1iZXJlZCkge1xuICAgICAgICAgIGNvbnN0IGZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudCA9IEZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudC5mcm9tRm9vdG5vdGVSZXBsYWNlbWVudEFuZElkZW50aWZpZXIoZm9vdG5vdGVSZXBsYWNlbWVudCwgaWRlbnRpZmllciwgY29udGV4dCk7XG5cbiAgICAgICAgICBmb290bm90ZXNJdGVtUmVwbGFjZW1lbnRzLnB1c2goZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50KTtcblxuICAgICAgICAgIGZvb3Rub3RlUmVwbGFjZW1lbnQuc2V0TnVtYmVyKG51bWJlcik7XG5cbiAgICAgICAgICBudW1iZXIrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50c0xlbmd0aCA9IGZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudHMubGVuZ3RoO1xuXG4gICAgaWYgKGZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudHNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlID0gRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZS5mcm9tRm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50c0FuZFN0YXJ0KGZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudHMsIHN0YXJ0KSxcbiAgICAgICAgICAgIG5vZGUgPSBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICAgIHRva2VucyA9IFtdO1xuXG4gICAgICBmb290bm90ZXNJdGVtUmVwbGFjZW1lbnRzLmZvckVhY2goKGZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudCkgPT4ge1xuICAgICAgICBmb290bm90ZXNJdGVtUmVwbGFjZW1lbnQuZ2V0VG9rZW5zKHRva2Vucyk7XG4gICAgICB9KTtcblxuICAgICAgZm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50ID0gUmVwbGFjZW1lbnQuZnJvbU5vZGVBbmRUb2tlbnMoRm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50LCBub2RlLCB0b2tlbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBmb290bm90ZXNMaXN0UmVwbGFjZW1lbnQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RhcnRGcm9tRm9vdG5vdGVSZXBsYWNlbWVudE1hcChmb290bm90ZVJlcGxhY2VtZW50TWFwKSB7XG4gIGNvbnN0IGZvb3Rub3RlUmVwbGFjZW1lbnRzID0gT2JqZWN0LnZhbHVlcyhmb290bm90ZVJlcGxhY2VtZW50TWFwKSwgIC8vL1xuICAgICAgICBudW1iZXJlZEZvb3Rub3RlUmVwbGFjZW1lbnRzID0gZm9vdG5vdGVSZXBsYWNlbWVudHMuZmlsdGVyKChmb290bm90ZVJlcGxhY2VtZW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgZm9vdG5vdGVSZXBsYWNlbWVudE51bWJlcmVkID0gZm9vdG5vdGVSZXBsYWNlbWVudC5pc051bWJlcmVkKCk7XG5cbiAgICAgICAgICBpZiAoZm9vdG5vdGVSZXBsYWNlbWVudE51bWJlcmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBudW1iZXJlZEZvb3Rub3RlUmVwbGFjZW1lbnRzTGVuZ3RoID0gbnVtYmVyZWRGb290bm90ZVJlcGxhY2VtZW50cy5sZW5ndGgsXG4gICAgICAgIHN0YXJ0ID0gbnVtYmVyZWRGb290bm90ZVJlcGxhY2VtZW50c0xlbmd0aCArIDE7XG5cbiAgcmV0dXJuIHN0YXJ0O1xufVxuIl0sIm5hbWVzIjpbIkZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudCIsInJlcGxhY2VGb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiZm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY29udGV4dCIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZ2V0U3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJyZXBsYWNlZE5vZGUiLCJwYXJlbnROb2RlIiwicmVwbGFjZSIsImZyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZEZvb3Rub3RlUmVwbGFjZW1lbnRNYXAiLCJmb290bm90ZVJlcGxhY2VtZW50TWFwIiwiZm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50Iiwibm9kZSIsInN0YXJ0Iiwic3RhcnRGcm9tRm9vdG5vdGVSZXBsYWNlbWVudE1hcCIsImZvb3Rub3RlTGlua01hcmtkb3duTm9kZXMiLCJmb290bm90ZUxpbmtNYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJmb290bm90ZXNJdGVtUmVwbGFjZW1lbnRzIiwibnVtYmVyIiwiZm9yRWFjaCIsImZvb3Rub3RlTGlua01hcmtkb3duTm9kZSIsImlkZW50aWZpZXIiLCJmb290bm90ZVJlcGxhY2VtZW50IiwiZm9vdG5vdGVSZXBsYWNlbWVudFVubnVtYmVyZWQiLCJpc1VubnVtYmVyZWQiLCJmb290bm90ZXNJdGVtUmVwbGFjZW1lbnQiLCJGb290bm90ZXNJdGVtUmVwbGFjZW1lbnQiLCJmcm9tRm9vdG5vdGVSZXBsYWNlbWVudEFuZElkZW50aWZpZXIiLCJwdXNoIiwic2V0TnVtYmVyIiwiZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50c0xlbmd0aCIsImxlbmd0aCIsImZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwiZnJvbUZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudHNBbmRTdGFydCIsInRva2VucyIsImdldFRva2VucyIsIlJlcGxhY2VtZW50IiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJmb290bm90ZVJlcGxhY2VtZW50cyIsIk9iamVjdCIsInZhbHVlcyIsIm51bWJlcmVkRm9vdG5vdGVSZXBsYWNlbWVudHMiLCJmaWx0ZXIiLCJmb290bm90ZVJlcGxhY2VtZW50TnVtYmVyZWQiLCJpc051bWJlcmVkIiwibnVtYmVyZWRGb290bm90ZVJlcGxhY2VtZW50c0xlbmd0aCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7dURBTkc7b0VBQ2E7b0VBQ0M7cUJBRVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQyxJQUFBLEFBQU1BLHlDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLGdEQUFnREMsd0NBQXdDLEVBQUVDLG9CQUFvQixFQUFFQyxPQUFPO2dCQUNySCxJQUFNQywwQkFBMEJILHlDQUF5Q0ksMEJBQTBCLElBQzdGQyxlQUFlRix5QkFDZkcsYUFBYUwsc0JBQXVCLEdBQUc7Z0JBRTdDLHVCQU5pQkgscUNBTVhTLFdBQU4sSUFBSyxhQUFTRixjQUFjQyxZQUFZSjtZQUMxQzs7OztZQUVPTSxLQUFBQTttQkFBUCxTQUFPQSxrREFBa0RQLG9CQUFvQixFQUFFUSxzQkFBc0IsRUFBRVAsT0FBTztnQkFDNUcsSUFBSVEsMkJBQTJCO2dCQUUvQixJQUFNQyxPQUFPVixzQkFDUFcsUUFBUUMsZ0NBQWdDSix5QkFDeENLLDRCQUE0QkMsSUFBQUEsd0NBQWlDLEVBQUNKLE9BQzlESyw0QkFBNEIsRUFBRTtnQkFFcEMsSUFBSUMsU0FBU0w7Z0JBRWJFLDBCQUEwQkksT0FBTyxDQUFDLFNBQUNDO29CQUNqQyxJQUFNQyxhQUFhRCx5QkFBeUJDLFVBQVUsQ0FBQ2xCLFVBQ2pEbUIsc0JBQXNCWixzQkFBc0IsQ0FBQ1csV0FBVyxJQUFJO29CQUVsRSxJQUFJQyx3QkFBd0IsTUFBTTt3QkFDaEMsSUFBTUMsZ0NBQWdDRCxvQkFBb0JFLFlBQVk7d0JBRXRFLElBQUlELCtCQUErQjs0QkFDakMsSUFBTUUsMkJBQTJCQyxzQkFBd0IsQ0FBQ0Msb0NBQW9DLENBQUNMLHFCQUFxQkQsWUFBWWxCOzRCQUVoSWMsMEJBQTBCVyxJQUFJLENBQUNIOzRCQUUvQkgsb0JBQW9CTyxTQUFTLENBQUNYOzRCQUU5QkE7d0JBQ0Y7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsSUFBTVksa0NBQWtDYiwwQkFBMEJjLE1BQU07Z0JBRXhFLElBQUlELGtDQUFrQyxHQUFHO29CQUN2QyxJQUFNRSw0QkFBNEJDLHNCQUF5QixDQUFDQyxxQ0FBcUMsQ0FBQ2pCLDJCQUEyQkosUUFDdkhELFFBQU9vQiwyQkFDUEcsU0FBUyxFQUFFO29CQUVqQmxCLDBCQUEwQkUsT0FBTyxDQUFDLFNBQUNNO3dCQUNqQ0EseUJBQXlCVyxTQUFTLENBQUNEO29CQUNyQztvQkFFQXhCLDJCQUEyQjBCLFNBQVcsQ0FBQ0MsaUJBQWlCLENBakR6Q3ZDLDBCQWlEb0VhLE9BQU11QjtnQkFDM0Y7Z0JBRUEsT0FBT3hCO1lBQ1Q7OztXQXJEbUJaO0VBQWlDc0MsU0FBVztBQXdEakUsU0FBU3ZCLGdDQUFnQ0osc0JBQXNCO0lBQzdELElBQU02Qix1QkFBdUJDLE9BQU9DLE1BQU0sQ0FBQy9CLHlCQUNyQ2dDLCtCQUErQkgscUJBQXFCSSxNQUFNLENBQUMsU0FBQ3JCO1FBQzFELElBQU1zQiw4QkFBOEJ0QixvQkFBb0J1QixVQUFVO1FBRWxFLElBQUlELDZCQUE2QjtZQUMvQixPQUFPO1FBQ1Q7SUFDRixJQUNBRSxxQ0FBcUNKLDZCQUE2QlgsTUFBTSxFQUN4RWxCLFFBQVFpQyxxQ0FBcUM7SUFFbkQsT0FBT2pDO0FBQ1QifQ==