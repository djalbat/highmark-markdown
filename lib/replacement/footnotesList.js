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
var _footnoteItem = /*#__PURE__*/ _interop_require_default(require("../replacement/footnoteItem"));
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
                var node = divisionMarkdownNode, footnoteNumbers = Object.values(footnoteNumberMap), linkMarkdownNodes = (0, _query.linkMarkdownNodesFromNode)(node), footnoteNumbersLength = footnoteNumbers.length, footnoteItemReplacements = [];
                var count = 0;
                linkMarkdownNodes.forEach(function(linkMarkdownNode) {
                    var identifier = linkMarkdownNode.identifier(context);
                    var footnoteNumber = footnoteNumberMap[identifier] || null;
                    if (footnoteNumber === null) {
                        var footnoteItemReplacement = _footnoteItem.default.fromFootnoteReplacementsAndIdentifier(footnoteReplacements, identifier, context);
                        if (footnoteItemReplacement !== null) {
                            footnoteItemReplacements.push(footnoteItemReplacement);
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
                var footnoteItemReplacementsLength = footnoteItemReplacements.length;
                if (footnoteItemReplacementsLength > 0) {
                    var start = footnoteNumbersLength + 1, footnotesListMarkdownNode = _footnotesList.default.fromStart(start), node1 = footnotesListMarkdownNode, tokens = [];
                    footnoteItemReplacements.forEach(function(footnotesItemReplacement) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9mb290bm90ZXNMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVwbGFjZW1lbnQgZnJvbSBcIi4uL3JlcGxhY2VtZW50XCI7XG5pbXBvcnQgRm9vdG5vdGVJdGVtUmVwbGFjZW1lbnQgZnJvbSBcIi4uL3JlcGxhY2VtZW50L2Zvb3Rub3RlSXRlbVwiO1xuaW1wb3J0IEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgZnJvbSBcIi4uL25vZGUvbWFya2Rvd24vZm9vdG5vdGVzTGlzdFwiO1xuXG5pbXBvcnQgeyBsaW5rTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290bm90ZXNMaXN0UmVwbGFjZW1lbnQgZXh0ZW5kcyBSZXBsYWNlbWVudCB7XG4gIGFwcGVuZFRvRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGU7IC8vL1xuXG4gICAgc3VwZXIuYXBwZW5kVG8ocGFyZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7IHJldHVybiBSZXBsYWNlbWVudC5mcm9tTm9kZUFuZFRva2VucyhGb290bm90ZXNMaXN0UmVwbGFjZW1lbnQsIG5vZGUsIHRva2Vucyk7IH1cblxuICBzdGF0aWMgZnJvbUZvb3Rub3RlUmVwbGFjZW1lbnRzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUoZm9vdG5vdGVSZXBsYWNlbWVudHMsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCB7IGZvb3Rub3RlTnVtYmVyTWFwIH0gPSBjb250ZXh0O1xuXG4gICAgY29uc3Qgbm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgICAgZm9vdG5vdGVOdW1iZXJzID0gT2JqZWN0LnZhbHVlcyhmb290bm90ZU51bWJlck1hcCksXG4gICAgICAgICAgbGlua01hcmtkb3duTm9kZXMgPSBsaW5rTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUpLFxuICAgICAgICAgIGZvb3Rub3RlTnVtYmVyc0xlbmd0aCA9IGZvb3Rub3RlTnVtYmVycy5sZW5ndGgsXG4gICAgICAgICAgZm9vdG5vdGVJdGVtUmVwbGFjZW1lbnRzID0gW107XG5cbiAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgbGlua01hcmtkb3duTm9kZXMuZm9yRWFjaCgobGlua01hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgY29uc3QgaWRlbnRpZmllciA9IGxpbmtNYXJrZG93bk5vZGUuaWRlbnRpZmllcihjb250ZXh0KTtcblxuICAgICAgbGV0IGZvb3Rub3RlTnVtYmVyID0gZm9vdG5vdGVOdW1iZXJNYXBbaWRlbnRpZmllcl0gfHwgbnVsbDtcblxuICAgICAgaWYgKGZvb3Rub3RlTnVtYmVyID09PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGZvb3Rub3RlSXRlbVJlcGxhY2VtZW50ID0gRm9vdG5vdGVJdGVtUmVwbGFjZW1lbnQuZnJvbUZvb3Rub3RlUmVwbGFjZW1lbnRzQW5kSWRlbnRpZmllcihmb290bm90ZVJlcGxhY2VtZW50cywgaWRlbnRpZmllciwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGZvb3Rub3RlSXRlbVJlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgZm9vdG5vdGVJdGVtUmVwbGFjZW1lbnRzLnB1c2goZm9vdG5vdGVJdGVtUmVwbGFjZW1lbnQpO1xuXG4gICAgICAgICAgY291bnQrKztcblxuICAgICAgICAgIGZvb3Rub3RlTnVtYmVyID0gZm9vdG5vdGVOdW1iZXJzTGVuZ3RoICsgY291bnQ7XG5cbiAgICAgICAgICBmb290bm90ZU51bWJlck1hcFtpZGVudGlmaWVyXSA9IGZvb3Rub3RlTnVtYmVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmb290bm90ZU51bWJlciAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBudW1iZXIgPSBmb290bm90ZU51bWJlcjsgIC8vL1xuXG4gICAgICAgIGxpbmtNYXJrZG93bk5vZGUuc2V0TnVtYmVyKG51bWJlcik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBmb290bm90ZUl0ZW1SZXBsYWNlbWVudHNMZW5ndGggPSBmb290bm90ZUl0ZW1SZXBsYWNlbWVudHMubGVuZ3RoO1xuXG4gICAgaWYgKGZvb3Rub3RlSXRlbVJlcGxhY2VtZW50c0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gZm9vdG5vdGVOdW1iZXJzTGVuZ3RoICsgMSxcbiAgICAgICAgICAgIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgPSBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLmZyb21TdGFydChzdGFydCksXG4gICAgICAgICAgICBub2RlID0gZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgICB0b2tlbnMgPSBbXTtcblxuICAgICAgZm9vdG5vdGVJdGVtUmVwbGFjZW1lbnRzLmZvckVhY2goKGZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudCkgPT4ge1xuICAgICAgICBmb290bm90ZXNJdGVtUmVwbGFjZW1lbnQuZ2V0VG9rZW5zKHRva2Vucyk7XG5cbiAgICAgICAgZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50LmFwcGVuZFRvRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZShmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICAgIH0pO1xuXG4gICAgICBmb290bm90ZXNMaXN0UmVwbGFjZW1lbnQgPSBGb290bm90ZXNMaXN0UmVwbGFjZW1lbnQuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50IiwiYXBwZW5kVG9EaXZpc2lvbk1hcmtkb3duTm9kZSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY29udGV4dCIsInBhcmVudE5vZGUiLCJhcHBlbmRUbyIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsIlJlcGxhY2VtZW50IiwiZnJvbUZvb3Rub3RlUmVwbGFjZW1lbnRzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUiLCJmb290bm90ZVJlcGxhY2VtZW50cyIsImZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudCIsImZvb3Rub3RlTnVtYmVyTWFwIiwiZm9vdG5vdGVOdW1iZXJzIiwiT2JqZWN0IiwidmFsdWVzIiwibGlua01hcmtkb3duTm9kZXMiLCJsaW5rTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwiZm9vdG5vdGVOdW1iZXJzTGVuZ3RoIiwibGVuZ3RoIiwiZm9vdG5vdGVJdGVtUmVwbGFjZW1lbnRzIiwiY291bnQiLCJmb3JFYWNoIiwibGlua01hcmtkb3duTm9kZSIsImlkZW50aWZpZXIiLCJmb290bm90ZU51bWJlciIsImZvb3Rub3RlSXRlbVJlcGxhY2VtZW50IiwiRm9vdG5vdGVJdGVtUmVwbGFjZW1lbnQiLCJmcm9tRm9vdG5vdGVSZXBsYWNlbWVudHNBbmRJZGVudGlmaWVyIiwicHVzaCIsIm51bWJlciIsInNldE51bWJlciIsImZvb3Rub3RlSXRlbVJlcGxhY2VtZW50c0xlbmd0aCIsInN0YXJ0IiwiZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSIsIkZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJmcm9tU3RhcnQiLCJmb290bm90ZXNJdGVtUmVwbGFjZW1lbnQiLCJnZXRUb2tlbnMiLCJhcHBlbmRUb0Zvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7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