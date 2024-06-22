"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EmbedDirectivesSubDivisionReplacement;
    }
});
var _necessary = require("necessary");
var _subDivision = /*#__PURE__*/ _interop_require_default(require("../../replacement/subDivision"));
var _query = require("../../utilities/query");
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
var backwardsForEach = _necessary.arrayUtilities.backwardsForEach;
var EmbedDirectivesSubDivisionReplacement = /*#__PURE__*/ function(SubDivisionReplacement) {
    _inherits(EmbedDirectivesSubDivisionReplacement, SubDivisionReplacement);
    var _super = _create_super(EmbedDirectivesSubDivisionReplacement);
    function EmbedDirectivesSubDivisionReplacement(node, tokens, subDivisionMarkdownNode, embedDirectiveMarkdownNodes) {
        _class_call_check(this, EmbedDirectivesSubDivisionReplacement);
        var _this;
        _this = _super.call(this, node, tokens, subDivisionMarkdownNode);
        _this.embedDirectiveMarkdownNodes = embedDirectiveMarkdownNodes;
        return _this;
    }
    _create_class(EmbedDirectivesSubDivisionReplacement, [
        {
            key: "getEmbedDirectiveMarkdownNodes",
            value: function getEmbedDirectiveMarkdownNodes() {
                return this.embedDirectiveMarkdownNodes;
            }
        },
        {
            key: "replaceSubDivisionMarkdownNode",
            value: function replaceSubDivisionMarkdownNode(divisionMarkdownNode, context) {
                var subDivisionMarkdownNodes = [], subDivisionMarkdownNode = this.getSubDivisionMarkdownNode();
                backwardsForEach(this.embedDirectiveMarkdownNodes, function(embedDirectiveMarkdownNode) {
                    var embedDirectiveReplacement = embedDirectiveMarkdownNode.resolve(context);
                    if (embedDirectiveReplacement !== null) {
                        embedDirectiveReplacement.addAfterSubDivisionMarkdownNode(subDivisionMarkdownNode, divisionMarkdownNode, subDivisionMarkdownNodes, context);
                    }
                });
                this.removeFromDivisionMarkdownNode(divisionMarkdownNode, context);
                return subDivisionMarkdownNodes;
            }
        }
    ], [
        {
            key: "fromSubDivisionMarkdownNode",
            value: function fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context) {
                var embedDirectivesSubDivisionReplacement = null;
                var node = subDivisionMarkdownNode, embedDirectiveMarkdownNodes = (0, _query.embedDirectiveMarkdownNodesFromNode)(node), embedDirectiveMarkdownNodesLength = embedDirectiveMarkdownNodes.length;
                if (embedDirectiveMarkdownNodesLength > 0) {
                    embedDirectivesSubDivisionReplacement = _subDivision.default.fromSubDivisionMarkdownNode(EmbedDirectivesSubDivisionReplacement, subDivisionMarkdownNode, embedDirectiveMarkdownNodes, context);
                }
                return embedDirectivesSubDivisionReplacement;
            }
        }
    ]);
    return EmbedDirectivesSubDivisionReplacement;
}(_subDivision.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZXBsYWNlbWVudC9zdWJEaXZpc2lvbi9lbWJlZERpcmVjdGl2ZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgU3ViRGl2aXNpb25SZXBsYWNlbWVudCBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnQvc3ViRGl2aXNpb25cIjtcblxuaW1wb3J0IHsgZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzRnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHsgYmFja3dhcmRzRm9yRWFjaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtYmVkRGlyZWN0aXZlc1N1YkRpdmlzaW9uUmVwbGFjZW1lbnQgZXh0ZW5kcyBTdWJEaXZpc2lvblJlcGxhY2VtZW50IHtcbiAgY29uc3RydWN0b3Iobm9kZSwgdG9rZW5zLCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzKSB7XG4gICAgc3VwZXIobm9kZSwgdG9rZW5zLCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSk7XG5cbiAgICB0aGlzLmVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlcyA9IGVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlcztcbiAgfVxuXG4gIGdldEVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlcygpIHtcbiAgICByZXR1cm4gdGhpcy5lbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXM7XG4gIH1cblxuICByZXBsYWNlU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBbXSxcbiAgICAgICAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMuZ2V0U3ViRGl2aXNpb25NYXJrZG93bk5vZGUoKTtcblxuICAgIGJhY2t3YXJkc0ZvckVhY2godGhpcy5lbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXMsIChlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgY29uc3QgZW1iZWREaXJlY3RpdmVSZXBsYWNlbWVudCA9IGVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlLnJlc29sdmUoY29udGV4dCk7XG5cbiAgICAgIGlmIChlbWJlZERpcmVjdGl2ZVJlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGVtYmVkRGlyZWN0aXZlUmVwbGFjZW1lbnQuYWRkQWZ0ZXJTdWJEaXZpc2lvbk1hcmtkb3duTm9kZShzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgZGl2aXNpb25NYXJrZG93bk5vZGUsIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlbW92ZUZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdWJEaXZpc2lvbk1hcmtkb3duTm9kZShzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBlbWJlZERpcmVjdGl2ZXNTdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IG5vZGUgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzID0gZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzTGVuZ3RoID0gZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXNMZW5ndGggPiAwKSB7XG4gICAgICBlbWJlZERpcmVjdGl2ZXNTdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gU3ViRGl2aXNpb25SZXBsYWNlbWVudC5mcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoRW1iZWREaXJlY3RpdmVzU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIGVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlcywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVtYmVkRGlyZWN0aXZlc1N1YkRpdmlzaW9uUmVwbGFjZW1lbnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJFbWJlZERpcmVjdGl2ZXNTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiYmFja3dhcmRzRm9yRWFjaCIsImFycmF5VXRpbGl0aWVzIiwibm9kZSIsInRva2VucyIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzIiwiZ2V0RW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzIiwicmVwbGFjZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJjb250ZXh0Iiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGVzIiwiZ2V0U3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZSIsImVtYmVkRGlyZWN0aXZlUmVwbGFjZW1lbnQiLCJyZXNvbHZlIiwiYWRkQWZ0ZXJTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsInJlbW92ZUZyb21EaXZpc2lvbk1hcmtkb3duTm9kZSIsImZyb21TdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImVtYmVkRGlyZWN0aXZlc1N1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXNGcm9tTm9kZSIsImVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2Rlc0xlbmd0aCIsImxlbmd0aCIsIlN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O3lCQVJVO2tFQUVJO3FCQUVpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRCxJQUFNLEFBQUVDLG1CQUFxQkMseUJBQWMsQ0FBbkNEO0FBRU8sSUFBQSxBQUFNRCxzREFBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQSxzQ0FDUEcsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLHVCQUF1QixFQUFFQywyQkFBMkI7Z0NBRDNETjs7a0NBRVhHLE1BQU1DLFFBQVFDO1FBRXBCLE1BQUtDLDJCQUEyQixHQUFHQTs7O2tCQUpsQk47O1lBT25CTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELDJCQUEyQjtZQUN6Qzs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSwrQkFBK0JDLG9CQUFvQixFQUFFQyxPQUFPO2dCQUMxRCxJQUFNQywyQkFBMkIsRUFBRSxFQUM3Qk4sMEJBQTBCLElBQUksQ0FBQ08sMEJBQTBCO2dCQUUvRFgsaUJBQWlCLElBQUksQ0FBQ0ssMkJBQTJCLEVBQUUsU0FBQ087b0JBQ2xELElBQU1DLDRCQUE0QkQsMkJBQTJCRSxPQUFPLENBQUNMO29CQUVyRSxJQUFJSSw4QkFBOEIsTUFBTTt3QkFDdENBLDBCQUEwQkUsK0JBQStCLENBQUNYLHlCQUF5Qkksc0JBQXNCRSwwQkFBMEJEO29CQUNySTtnQkFDRjtnQkFFQSxJQUFJLENBQUNPLDhCQUE4QixDQUFDUixzQkFBc0JDO2dCQUUxRCxPQUFPQztZQUNUOzs7O1lBRU9PLEtBQUFBO21CQUFQLFNBQU9BLDRCQUE0QmIsdUJBQXVCLEVBQUVLLE9BQU87Z0JBQ2pFLElBQUlTLHdDQUF3QztnQkFFNUMsSUFBTWhCLE9BQU9FLHlCQUNQQyw4QkFBOEJjLElBQUFBLDBDQUFtQyxFQUFDakIsT0FDbEVrQixvQ0FBb0NmLDRCQUE0QmdCLE1BQU07Z0JBRTVFLElBQUlELG9DQUFvQyxHQUFHO29CQUN6Q0Ysd0NBQXdDSSxvQkFBc0IsQ0FBQ0wsMkJBQTJCLENBcEMzRWxCLHVDQW9DbUhLLHlCQUF5QkMsNkJBQTZCSTtnQkFDMUw7Z0JBRUEsT0FBT1M7WUFDVDs7O1dBeENtQm5CO0VBQThDdUIsb0JBQXNCIn0=