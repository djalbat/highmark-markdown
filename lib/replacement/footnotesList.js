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
    function FootnotesListReplacement(node, tokens, start, identifiers) {
        _class_call_check(this, FootnotesListReplacement);
        var _this;
        _this = _super.call(this, node, tokens, start, identifiers);
        _this.start = start;
        _this.identifiers = identifiers;
        return _this;
    }
    _create_class(FootnotesListReplacement, [
        {
            key: "getStart",
            value: function getStart() {
                return this.start;
            }
        },
        {
            key: "getIdentifiers",
            value: function getIdentifiers() {
                return this.identifiers;
            }
        },
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
                var node = divisionMarkdownNode, start = startFromFootnoteMap(footnoteMap), identifiers = [], linkMarkdownNodes = (0, _query.linkMarkdownNodesFromNode)(node), footnotesItemReplacements = [];
                linkMarkdownNodes.forEach(function(linkMarkdownNode) {
                    var identifier = linkMarkdownNode.identifier(context), footnoteReplacement = footnoteMap[identifier] || null;
                    if (footnoteReplacement !== null) {
                        var footnotesItemReplacement = _footnotesItem.default.fromFootnoteReplacementAndIdentifier(footnoteReplacement, identifier, context);
                        footnotesItemReplacements.push(footnotesItemReplacement);
                        identifiers.push(identifier);
                        footnoteMap[identifier] = null;
                    }
                });
                var footnotesListMarkdownNode = _footnotesList.default.fromFootnotesItemReplacementsAndStart(footnotesItemReplacements, start);
                if (footnotesListMarkdownNode !== null) {
                    var node1 = footnotesListMarkdownNode, tokens = [];
                    footnotesItemReplacements.forEach(function(footnotesItemReplacement) {
                        footnotesItemReplacement.getTokens(tokens);
                    });
                    footnotesListReplacement = _replacement.default.fromNodeAndTokens(FootnotesListReplacement, node1, tokens, start, identifiers);
                }
                return footnotesListReplacement;
            }
        }
    ]);
    return FootnotesListReplacement;
}(_replacement.default);
function startFromFootnoteMap(footnoteMap) {
    var footnoteReplacements = Object.values(footnoteMap), start = footnoteReplacements.reduce(function(start, footnoteReplacement) {
        if (footnoteReplacement === null) {
            start++;
        }
        return start;
    }, 1);
    return start;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9mb290bm90ZXNMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVwbGFjZW1lbnQgZnJvbSBcIi4uL3JlcGxhY2VtZW50XCI7XG5pbXBvcnQgRm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50IGZyb20gXCIuLi9yZXBsYWNlbWVudC9mb290bm90ZXNJdGVtXCI7XG5pbXBvcnQgRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vbm9kZS9tYXJrZG93bi9mb290bm90ZXNMaXN0XCI7XG5cbmltcG9ydCB7IGxpbmtNYXJrZG93bk5vZGVzRnJvbU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudCBleHRlbmRzIFJlcGxhY2VtZW50IHtcbiAgY29uc3RydWN0b3Iobm9kZSwgdG9rZW5zLCBzdGFydCwgaWRlbnRpZmllcnMpIHtcbiAgICBzdXBlcihub2RlLCB0b2tlbnMsIHN0YXJ0LCBpZGVudGlmaWVycyk7XG5cbiAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XG4gICAgdGhpcy5pZGVudGlmaWVycyA9IGlkZW50aWZpZXJzO1xuICB9XG5cbiAgZ2V0U3RhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhcnQ7XG4gIH1cblxuICBnZXRJZGVudGlmaWVycygpIHtcbiAgICByZXR1cm4gdGhpcy5pZGVudGlmaWVycztcbiAgfVxuXG4gIGFwcGVuZFRvRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGU7IC8vL1xuXG4gICAgc3VwZXIuYXBwZW5kVG8ocGFyZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kRm9vdG5vdGVNYXAoZGl2aXNpb25NYXJrZG93bk5vZGUsIGZvb3Rub3RlTWFwLCBjb250ZXh0KSB7XG4gICAgbGV0IGZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBub2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICBzdGFydCA9IHN0YXJ0RnJvbUZvb3Rub3RlTWFwKGZvb3Rub3RlTWFwKSxcbiAgICAgICAgICBpZGVudGlmaWVycyA9IFtdLFxuICAgICAgICAgIGxpbmtNYXJrZG93bk5vZGVzID0gbGlua01hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBmb290bm90ZXNJdGVtUmVwbGFjZW1lbnRzID0gW107XG5cbiAgICBsaW5rTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChsaW5rTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBjb25zdCBpZGVudGlmaWVyID0gbGlua01hcmtkb3duTm9kZS5pZGVudGlmaWVyKGNvbnRleHQpLFxuICAgICAgICAgICAgZm9vdG5vdGVSZXBsYWNlbWVudCA9IGZvb3Rub3RlTWFwW2lkZW50aWZpZXJdIHx8IG51bGw7XG5cbiAgICAgIGlmIChmb290bm90ZVJlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudCA9IEZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudC5mcm9tRm9vdG5vdGVSZXBsYWNlbWVudEFuZElkZW50aWZpZXIoZm9vdG5vdGVSZXBsYWNlbWVudCwgaWRlbnRpZmllciwgY29udGV4dCk7XG5cbiAgICAgICAgZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50cy5wdXNoKGZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudCk7XG5cbiAgICAgICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcblxuICAgICAgICBmb290bm90ZU1hcFtpZGVudGlmaWVyXSA9IG51bGw7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlID0gRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZS5mcm9tRm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50c0FuZFN0YXJ0KGZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudHMsIHN0YXJ0KTtcblxuICAgIGlmIChmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlID0gZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgICB0b2tlbnMgPSBbXTtcblxuICAgICAgZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50cy5mb3JFYWNoKChmb290bm90ZXNJdGVtUmVwbGFjZW1lbnQpID0+IHtcbiAgICAgICAgZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50LmdldFRva2Vucyh0b2tlbnMpO1xuICAgICAgfSk7XG5cbiAgICAgIGZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudCA9IFJlcGxhY2VtZW50LmZyb21Ob2RlQW5kVG9rZW5zKEZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudCwgbm9kZSwgdG9rZW5zLCBzdGFydCwgaWRlbnRpZmllcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBmb290bm90ZXNMaXN0UmVwbGFjZW1lbnQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RhcnRGcm9tRm9vdG5vdGVNYXAoZm9vdG5vdGVNYXApIHtcbiAgY29uc3QgZm9vdG5vdGVSZXBsYWNlbWVudHMgPSBPYmplY3QudmFsdWVzKGZvb3Rub3RlTWFwKSxcbiAgICAgICAgc3RhcnQgPSBmb290bm90ZVJlcGxhY2VtZW50cy5yZWR1Y2UoKHN0YXJ0LCBmb290bm90ZVJlcGxhY2VtZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGZvb3Rub3RlUmVwbGFjZW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHN0YXJ0Kys7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHN0YXJ0O1xuICAgICAgICB9LCAxKTtcblxuICByZXR1cm4gc3RhcnQ7XG59XG4iXSwibmFtZXMiOlsiRm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50Iiwibm9kZSIsInRva2VucyIsInN0YXJ0IiwiaWRlbnRpZmllcnMiLCJnZXRTdGFydCIsImdldElkZW50aWZpZXJzIiwiYXBwZW5kVG9EaXZpc2lvbk1hcmtkb3duTm9kZSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY29udGV4dCIsInBhcmVudE5vZGUiLCJhcHBlbmRUbyIsImZyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZEZvb3Rub3RlTWFwIiwiZm9vdG5vdGVNYXAiLCJmb290bm90ZXNMaXN0UmVwbGFjZW1lbnQiLCJzdGFydEZyb21Gb290bm90ZU1hcCIsImxpbmtNYXJrZG93bk5vZGVzIiwibGlua01hcmtkb3duTm9kZXNGcm9tTm9kZSIsImZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudHMiLCJmb3JFYWNoIiwibGlua01hcmtkb3duTm9kZSIsImlkZW50aWZpZXIiLCJmb290bm90ZVJlcGxhY2VtZW50IiwiZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50IiwiRm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50IiwiZnJvbUZvb3Rub3RlUmVwbGFjZW1lbnRBbmRJZGVudGlmaWVyIiwicHVzaCIsImZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwiZnJvbUZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudHNBbmRTdGFydCIsImdldFRva2VucyIsIlJlcGxhY2VtZW50IiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJmb290bm90ZVJlcGxhY2VtZW50cyIsIk9iamVjdCIsInZhbHVlcyIsInJlZHVjZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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