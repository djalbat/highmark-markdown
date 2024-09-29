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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9mb290bm90ZXNMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVwbGFjZW1lbnQgZnJvbSBcIi4uL3JlcGxhY2VtZW50XCI7XG5pbXBvcnQgRm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50IGZyb20gXCIuLi9yZXBsYWNlbWVudC9mb290bm90ZXNJdGVtXCI7XG5pbXBvcnQgRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vbm9kZS9tYXJrZG93bi9mb290bm90ZXNMaXN0XCI7XG5cbmltcG9ydCB7IGZvb3Rub3RlTGlua01hcmtkb3duTm9kZXNGcm9tTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50IGV4dGVuZHMgUmVwbGFjZW1lbnQge1xuICByZXBsYWNlRm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudChmb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlID0gZm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudC5nZXRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgIHJlcGxhY2VkTm9kZSA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICBwYXJlbnROb2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGU7ICAvLy9cblxuICAgIHN1cGVyLnJlcGxhY2UocmVwbGFjZWROb2RlLCBwYXJlbnROb2RlLCBjb250ZXh0KVxuICB9XG5cbiAgc3RhdGljIGZyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZEZvb3Rub3RlUmVwbGFjZW1lbnRNYXAoZGl2aXNpb25NYXJrZG93bk5vZGUsIGZvb3Rub3RlUmVwbGFjZW1lbnRNYXAsIGNvbnRleHQpIHtcbiAgICBsZXQgZm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IG5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgIHN0YXJ0ID0gc3RhcnRGcm9tRm9vdG5vdGVSZXBsYWNlbWVudE1hcChmb290bm90ZVJlcGxhY2VtZW50TWFwKSxcbiAgICAgICAgICBmb290bm90ZUxpbmtNYXJrZG93bk5vZGVzID0gZm9vdG5vdGVMaW5rTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUpLFxuICAgICAgICAgIGZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudHMgPSBbXTtcblxuICAgIGxldCBudW1iZXIgPSBzdGFydDtcblxuICAgIGZvb3Rub3RlTGlua01hcmtkb3duTm9kZXMuZm9yRWFjaCgoZm9vdG5vdGVMaW5rTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBjb25zdCBpZGVudGlmaWVyID0gZm9vdG5vdGVMaW5rTWFya2Rvd25Ob2RlLmlkZW50aWZpZXIoY29udGV4dCksXG4gICAgICAgICAgICBmb290bm90ZVJlcGxhY2VtZW50ID0gZm9vdG5vdGVSZXBsYWNlbWVudE1hcFtpZGVudGlmaWVyXSB8fCBudWxsO1xuXG4gICAgICBpZiAoZm9vdG5vdGVSZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBmb290bm90ZVJlcGxhY2VtZW50VW5udW1iZXJlZCA9IGZvb3Rub3RlUmVwbGFjZW1lbnQuaXNVbm51bWJlcmVkKCk7XG5cbiAgICAgICAgaWYgKGZvb3Rub3RlUmVwbGFjZW1lbnRVbm51bWJlcmVkKSB7XG4gICAgICAgICAgY29uc3QgZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50ID0gRm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50LmZyb21Gb290bm90ZVJlcGxhY2VtZW50QW5kSWRlbnRpZmllcihmb290bm90ZVJlcGxhY2VtZW50LCBpZGVudGlmaWVyLCBjb250ZXh0KTtcblxuICAgICAgICAgIGZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudHMucHVzaChmb290bm90ZXNJdGVtUmVwbGFjZW1lbnQpO1xuXG4gICAgICAgICAgZm9vdG5vdGVSZXBsYWNlbWVudC5zZXROdW1iZXIobnVtYmVyKTtcblxuICAgICAgICAgIG51bWJlcisrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBmb290bm90ZXNJdGVtUmVwbGFjZW1lbnRzTGVuZ3RoID0gZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50cy5sZW5ndGg7XG5cbiAgICBpZiAoZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50c0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgPSBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLmZyb21Gb290bm90ZXNJdGVtUmVwbGFjZW1lbnRzQW5kU3RhcnQoZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50cywgc3RhcnQpLFxuICAgICAgICAgICAgbm9kZSA9IGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgICAgdG9rZW5zID0gW107XG5cbiAgICAgIGZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudHMuZm9yRWFjaCgoZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50KSA9PiB7XG4gICAgICAgIGZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudC5nZXRUb2tlbnModG9rZW5zKTtcbiAgICAgIH0pO1xuXG4gICAgICBmb290bm90ZXNMaXN0UmVwbGFjZW1lbnQgPSBSZXBsYWNlbWVudC5mcm9tTm9kZUFuZFRva2VucyhGb290bm90ZXNMaXN0UmVwbGFjZW1lbnQsIG5vZGUsIHRva2Vucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudDtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdGFydEZyb21Gb290bm90ZVJlcGxhY2VtZW50TWFwKGZvb3Rub3RlUmVwbGFjZW1lbnRNYXApIHtcbiAgY29uc3QgZm9vdG5vdGVSZXBsYWNlbWVudHMgPSBPYmplY3QudmFsdWVzKGZvb3Rub3RlUmVwbGFjZW1lbnRNYXApLCAgLy8vXG4gICAgICAgIG51bWJlcmVkRm9vdG5vdGVSZXBsYWNlbWVudHMgPSBmb290bm90ZVJlcGxhY2VtZW50cy5maWx0ZXIoKGZvb3Rub3RlUmVwbGFjZW1lbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBmb290bm90ZVJlcGxhY2VtZW50TnVtYmVyZWQgPSBmb290bm90ZVJlcGxhY2VtZW50LmlzTnVtYmVyZWQoKTtcblxuICAgICAgICAgIGlmIChmb290bm90ZVJlcGxhY2VtZW50TnVtYmVyZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIG51bWJlcmVkRm9vdG5vdGVSZXBsYWNlbWVudHNMZW5ndGggPSBudW1iZXJlZEZvb3Rub3RlUmVwbGFjZW1lbnRzLmxlbmd0aCxcbiAgICAgICAgc3RhcnQgPSBudW1iZXJlZEZvb3Rub3RlUmVwbGFjZW1lbnRzTGVuZ3RoICsgMTtcblxuICByZXR1cm4gc3RhcnQ7XG59XG4iXSwibmFtZXMiOlsiRm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50IiwicmVwbGFjZUZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJmb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJjb250ZXh0Iiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJnZXRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsInJlcGxhY2VkTm9kZSIsInBhcmVudE5vZGUiLCJyZXBsYWNlIiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kRm9vdG5vdGVSZXBsYWNlbWVudE1hcCIsImZvb3Rub3RlUmVwbGFjZW1lbnRNYXAiLCJmb290bm90ZXNMaXN0UmVwbGFjZW1lbnQiLCJub2RlIiwic3RhcnQiLCJzdGFydEZyb21Gb290bm90ZVJlcGxhY2VtZW50TWFwIiwiZm9vdG5vdGVMaW5rTWFya2Rvd25Ob2RlcyIsImZvb3Rub3RlTGlua01hcmtkb3duTm9kZXNGcm9tTm9kZSIsImZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudHMiLCJudW1iZXIiLCJmb3JFYWNoIiwiZm9vdG5vdGVMaW5rTWFya2Rvd25Ob2RlIiwiaWRlbnRpZmllciIsImZvb3Rub3RlUmVwbGFjZW1lbnQiLCJmb290bm90ZVJlcGxhY2VtZW50VW5udW1iZXJlZCIsImlzVW5udW1iZXJlZCIsImZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudCIsIkZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudCIsImZyb21Gb290bm90ZVJlcGxhY2VtZW50QW5kSWRlbnRpZmllciIsInB1c2giLCJzZXROdW1iZXIiLCJmb290bm90ZXNJdGVtUmVwbGFjZW1lbnRzTGVuZ3RoIiwibGVuZ3RoIiwiZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSIsIkZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJmcm9tRm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50c0FuZFN0YXJ0IiwidG9rZW5zIiwiZ2V0VG9rZW5zIiwiUmVwbGFjZW1lbnQiLCJmcm9tTm9kZUFuZFRva2VucyIsImZvb3Rub3RlUmVwbGFjZW1lbnRzIiwiT2JqZWN0IiwidmFsdWVzIiwibnVtYmVyZWRGb290bm90ZVJlcGxhY2VtZW50cyIsImZpbHRlciIsImZvb3Rub3RlUmVwbGFjZW1lbnROdW1iZXJlZCIsImlzTnVtYmVyZWQiLCJudW1iZXJlZEZvb3Rub3RlUmVwbGFjZW1lbnRzTGVuZ3RoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OztrRUFORztvRUFDYTtvRUFDQztxQkFFWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5DLElBQUEsQUFBTUEseUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLGdEQUFnREMsd0NBQXdDLEVBQUVDLG9CQUFvQixFQUFFQyxPQUFPO2dCQUNySCxJQUFNQywwQkFBMEJILHlDQUF5Q0ksMEJBQTBCLElBQzdGQyxlQUFlRix5QkFDZkcsYUFBYUwsc0JBQXVCLEdBQUc7Z0JBRTdDLHVCQU5pQkgscUNBTVhTLFdBQU4sSUFBSyxhQUFTRixjQUFjQyxZQUFZSjtZQUMxQzs7OztZQUVPTSxLQUFBQTttQkFBUCxTQUFPQSxrREFBa0RQLG9CQUFvQixFQUFFUSxzQkFBc0IsRUFBRVAsT0FBTztnQkFDNUcsSUFBSVEsMkJBQTJCO2dCQUUvQixJQUFNQyxPQUFPVixzQkFDUFcsUUFBUUMsZ0NBQWdDSix5QkFDeENLLDRCQUE0QkMsSUFBQUEsd0NBQWlDLEVBQUNKLE9BQzlESyw0QkFBNEIsRUFBRTtnQkFFcEMsSUFBSUMsU0FBU0w7Z0JBRWJFLDBCQUEwQkksT0FBTyxDQUFDLFNBQUNDO29CQUNqQyxJQUFNQyxhQUFhRCx5QkFBeUJDLFVBQVUsQ0FBQ2xCLFVBQ2pEbUIsc0JBQXNCWixzQkFBc0IsQ0FBQ1csV0FBVyxJQUFJO29CQUVsRSxJQUFJQyx3QkFBd0IsTUFBTTt3QkFDaEMsSUFBTUMsZ0NBQWdDRCxvQkFBb0JFLFlBQVk7d0JBRXRFLElBQUlELCtCQUErQjs0QkFDakMsSUFBTUUsMkJBQTJCQyxzQkFBd0IsQ0FBQ0Msb0NBQW9DLENBQUNMLHFCQUFxQkQsWUFBWWxCOzRCQUVoSWMsMEJBQTBCVyxJQUFJLENBQUNIOzRCQUUvQkgsb0JBQW9CTyxTQUFTLENBQUNYOzRCQUU5QkE7d0JBQ0Y7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsSUFBTVksa0NBQWtDYiwwQkFBMEJjLE1BQU07Z0JBRXhFLElBQUlELGtDQUFrQyxHQUFHO29CQUN2QyxJQUFNRSw0QkFBNEJDLHNCQUF5QixDQUFDQyxxQ0FBcUMsQ0FBQ2pCLDJCQUEyQkosUUFDdkhELFFBQU9vQiwyQkFDUEcsU0FBUyxFQUFFO29CQUVqQmxCLDBCQUEwQkUsT0FBTyxDQUFDLFNBQUNNO3dCQUNqQ0EseUJBQXlCVyxTQUFTLENBQUNEO29CQUNyQztvQkFFQXhCLDJCQUEyQjBCLG9CQUFXLENBQUNDLGlCQUFpQixDQWpEekN2QywwQkFpRG9FYSxPQUFNdUI7Z0JBQzNGO2dCQUVBLE9BQU94QjtZQUNUOzs7V0FyRG1CWjtFQUFpQ3NDLG9CQUFXO0FBd0RqRSxTQUFTdkIsZ0NBQWdDSixzQkFBc0I7SUFDN0QsSUFBTTZCLHVCQUF1QkMsT0FBT0MsTUFBTSxDQUFDL0IseUJBQ3JDZ0MsK0JBQStCSCxxQkFBcUJJLE1BQU0sQ0FBQyxTQUFDckI7UUFDMUQsSUFBTXNCLDhCQUE4QnRCLG9CQUFvQnVCLFVBQVU7UUFFbEUsSUFBSUQsNkJBQTZCO1lBQy9CLE9BQU87UUFDVDtJQUNGLElBQ0FFLHFDQUFxQ0osNkJBQTZCWCxNQUFNLEVBQ3hFbEIsUUFBUWlDLHFDQUFxQztJQUVuRCxPQUFPakM7QUFDVCJ9