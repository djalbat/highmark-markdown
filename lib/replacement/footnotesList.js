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
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                return _replacement.default.fromNodeAndTokens(FootnotesListReplacement, node, tokens);
            }
        },
        {
            key: "fromFootnoteReplacementsAndDivisionMarkdownNode",
            value: function fromFootnoteReplacementsAndDivisionMarkdownNode(footnoteReplacements, divisionMarkdownNode, context) {
                var footnotesListReplacement = null;
                var footnoteNumberMap = context.footnoteNumberMap;
                var node = divisionMarkdownNode, footnoteNumbers = Object.values(footnoteNumberMap), linkMarkdownNodes = (0, _query.linkMarkdownNodesFromNode)(node), footnoteNumbersLength = footnoteNumbers.length, footnotesItemReplacements = [];
                var count = 0;
                linkMarkdownNodes.forEach(function(linkMarkdownNode) {
                    var identifier = linkMarkdownNode.identifier(context);
                    var footnoteNumber = footnoteNumberMap[identifier] || null;
                    if (footnoteNumber === null) {
                        var footnotesItemReplacement = _footnotesItem.default.fromFootnoteReplacementsAndIdentifier(footnoteReplacements, identifier, context);
                        if (footnotesItemReplacement !== null) {
                            footnotesItemReplacements.push(footnotesItemReplacement);
                            count++;
                            footnoteNumber = footnoteNumbersLength + count;
                            footnoteNumberMap[identifier] = footnoteNumber;
                        }
                    }
                    if (footnoteNumber !== null) {
                        var number = footnoteNumber; ///
                        linkMarkdownNode.setNumber(number);
                    }
                });
                var footnotesItemReplacementsLength = footnotesItemReplacements.length;
                if (footnotesItemReplacementsLength > 0) {
                    var start = footnoteNumbersLength + 1, footnotesListMarkdownNode = _footnotesList.default.fromStart(start), node1 = footnotesListMarkdownNode, tokens = [];
                    footnotesItemReplacements.forEach(function(footnotesItemReplacement) {
                        footnotesItemReplacement.getTokens(tokens);
                        footnotesItemReplacement.appendToFootnotesListMarkdownNode(footnotesListMarkdownNode, context);
                    });
                    footnotesListReplacement = FootnotesListReplacement.fromNodeAndTokens(node1, tokens);
                }
                return footnotesListReplacement;
            }
        }
    ]);
    return FootnotesListReplacement;
}(_replacement.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9mb290bm90ZXNMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVwbGFjZW1lbnQgZnJvbSBcIi4uL3JlcGxhY2VtZW50XCI7XG5pbXBvcnQgRm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50IGZyb20gXCIuLi9yZXBsYWNlbWVudC9mb290bm90ZXNJdGVtXCI7XG5pbXBvcnQgRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vbm9kZS9tYXJrZG93bi9mb290bm90ZXNMaXN0XCI7XG5cbmltcG9ydCB7IGxpbmtNYXJrZG93bk5vZGVzRnJvbU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudCBleHRlbmRzIFJlcGxhY2VtZW50IHtcbiAgYXBwZW5kVG9EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZTsgLy8vXG5cbiAgICBzdXBlci5hcHBlbmRUbyhwYXJlbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHsgcmV0dXJuIFJlcGxhY2VtZW50LmZyb21Ob2RlQW5kVG9rZW5zKEZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudCwgbm9kZSwgdG9rZW5zKTsgfVxuXG4gIHN0YXRpYyBmcm9tRm9vdG5vdGVSZXBsYWNlbWVudHNBbmREaXZpc2lvbk1hcmtkb3duTm9kZShmb290bm90ZVJlcGxhY2VtZW50cywgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgZm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHsgZm9vdG5vdGVOdW1iZXJNYXAgfSA9IGNvbnRleHQ7XG5cbiAgICBjb25zdCBub2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICBmb290bm90ZU51bWJlcnMgPSBPYmplY3QudmFsdWVzKGZvb3Rub3RlTnVtYmVyTWFwKSxcbiAgICAgICAgICBsaW5rTWFya2Rvd25Ob2RlcyA9IGxpbmtNYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgZm9vdG5vdGVOdW1iZXJzTGVuZ3RoID0gZm9vdG5vdGVOdW1iZXJzLmxlbmd0aCxcbiAgICAgICAgICBmb290bm90ZXNJdGVtUmVwbGFjZW1lbnRzID0gW107XG5cbiAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgbGlua01hcmtkb3duTm9kZXMuZm9yRWFjaCgobGlua01hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgY29uc3QgaWRlbnRpZmllciA9IGxpbmtNYXJrZG93bk5vZGUuaWRlbnRpZmllcihjb250ZXh0KTtcblxuICAgICAgbGV0IGZvb3Rub3RlTnVtYmVyID0gZm9vdG5vdGVOdW1iZXJNYXBbaWRlbnRpZmllcl0gfHwgbnVsbDtcblxuICAgICAgaWYgKGZvb3Rub3RlTnVtYmVyID09PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudCA9IEZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudC5mcm9tRm9vdG5vdGVSZXBsYWNlbWVudHNBbmRJZGVudGlmaWVyKGZvb3Rub3RlUmVwbGFjZW1lbnRzLCBpZGVudGlmaWVyLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50cy5wdXNoKGZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudCk7XG5cbiAgICAgICAgICBjb3VudCsrO1xuXG4gICAgICAgICAgZm9vdG5vdGVOdW1iZXIgPSBmb290bm90ZU51bWJlcnNMZW5ndGggKyBjb3VudDtcblxuICAgICAgICAgIGZvb3Rub3RlTnVtYmVyTWFwW2lkZW50aWZpZXJdID0gZm9vdG5vdGVOdW1iZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZvb3Rub3RlTnVtYmVyICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG51bWJlciA9IGZvb3Rub3RlTnVtYmVyOyAgLy8vXG5cbiAgICAgICAgbGlua01hcmtkb3duTm9kZS5zZXROdW1iZXIobnVtYmVyKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudHNMZW5ndGggPSBmb290bm90ZXNJdGVtUmVwbGFjZW1lbnRzLmxlbmd0aDtcblxuICAgIGlmIChmb290bm90ZXNJdGVtUmVwbGFjZW1lbnRzTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBmb290bm90ZU51bWJlcnNMZW5ndGggKyAxLFxuICAgICAgICAgICAgZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSA9IEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUuZnJvbVN0YXJ0KHN0YXJ0KSxcbiAgICAgICAgICAgIG5vZGUgPSBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICAgIHRva2VucyA9IFtdO1xuXG4gICAgICBmb290bm90ZXNJdGVtUmVwbGFjZW1lbnRzLmZvckVhY2goKGZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudCkgPT4ge1xuICAgICAgICBmb290bm90ZXNJdGVtUmVwbGFjZW1lbnQuZ2V0VG9rZW5zKHRva2Vucyk7XG5cbiAgICAgICAgZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50LmFwcGVuZFRvRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZShmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICAgIH0pO1xuXG4gICAgICBmb290bm90ZXNMaXN0UmVwbGFjZW1lbnQgPSBGb290bm90ZXNMaXN0UmVwbGFjZW1lbnQuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50IiwiYXBwZW5kVG9EaXZpc2lvbk1hcmtkb3duTm9kZSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY29udGV4dCIsInBhcmVudE5vZGUiLCJhcHBlbmRUbyIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsIlJlcGxhY2VtZW50IiwiZnJvbUZvb3Rub3RlUmVwbGFjZW1lbnRzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUiLCJmb290bm90ZVJlcGxhY2VtZW50cyIsImZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudCIsImZvb3Rub3RlTnVtYmVyTWFwIiwiZm9vdG5vdGVOdW1iZXJzIiwiT2JqZWN0IiwidmFsdWVzIiwibGlua01hcmtkb3duTm9kZXMiLCJsaW5rTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwiZm9vdG5vdGVOdW1iZXJzTGVuZ3RoIiwibGVuZ3RoIiwiZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50cyIsImNvdW50IiwiZm9yRWFjaCIsImxpbmtNYXJrZG93bk5vZGUiLCJpZGVudGlmaWVyIiwiZm9vdG5vdGVOdW1iZXIiLCJmb290bm90ZXNJdGVtUmVwbGFjZW1lbnQiLCJGb290bm90ZXNJdGVtUmVwbGFjZW1lbnQiLCJmcm9tRm9vdG5vdGVSZXBsYWNlbWVudHNBbmRJZGVudGlmaWVyIiwicHVzaCIsIm51bWJlciIsInNldE51bWJlciIsImZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudHNMZW5ndGgiLCJzdGFydCIsImZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwiZnJvbVN0YXJ0IiwiZ2V0VG9rZW5zIiwiYXBwZW5kVG9Gb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7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