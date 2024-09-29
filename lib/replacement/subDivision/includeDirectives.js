"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IncludeDirectivesSubDivisionReplacement;
    }
});
var _subDivision = /*#__PURE__*/ _interop_require_default(require("../../replacement/subDivision"));
var _query = require("../../utilities/query");
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
var IncludeDirectivesSubDivisionReplacement = /*#__PURE__*/ function(SubDivisionReplacement) {
    _inherits(IncludeDirectivesSubDivisionReplacement, SubDivisionReplacement);
    function IncludeDirectivesSubDivisionReplacement(node, tokens, subDivisionMarkdownNode, includeDirectiveMarkdownNodes) {
        _class_call_check(this, IncludeDirectivesSubDivisionReplacement);
        var _this;
        _this = _call_super(this, IncludeDirectivesSubDivisionReplacement, [
            node,
            tokens,
            subDivisionMarkdownNode
        ]);
        _this.includeDirectiveMarkdownNodes = includeDirectiveMarkdownNodes;
        return _this;
    }
    _create_class(IncludeDirectivesSubDivisionReplacement, [
        {
            key: "getIncludeDirectiveMarkdownNodes",
            value: function getIncludeDirectiveMarkdownNodes() {
                return this.includeDirectiveMarkdownNodes;
            }
        },
        {
            key: "removeFromDivisionMarkdownNode",
            value: function removeFromDivisionMarkdownNode(divisionMarkdownNode, context) {
                var ignored = divisionMarkdownNode.isIgnored();
                if (ignored) {
                    return;
                }
                _get(_get_prototype_of(IncludeDirectivesSubDivisionReplacement.prototype), "removeFromDivisionMarkdownNode", this).call(this, divisionMarkdownNode, context);
            }
        },
        {
            key: "removeSubDivisionMarkdownNode",
            value: function removeSubDivisionMarkdownNode(divisionMarkdownNode, context) {
                this.includeDirectiveMarkdownNodes.forEach(function(includeDirectiveMarkdownNode) {
                    var includeDirectiveReplacement = includeDirectiveMarkdownNode.resolve(context);
                    if (includeDirectiveReplacement !== null) {
                        var _$divisionMarkdownNode = includeDirectiveReplacement.getDivisionMarkdownNode(), subDivisionMarkdownNodes = includeDirectiveReplacement.addDivisionMarkdownNode(context);
                        subDivisionMarkdownNodes.forEach(function(subDivisionMarkdownNode) {
                            subDivisionMarkdownNode.resolveIncludes(_$divisionMarkdownNode, context);
                        });
                    }
                });
                this.removeFromDivisionMarkdownNode(divisionMarkdownNode, context);
            }
        }
    ], [
        {
            key: "fromSubDivisionMarkdownNode",
            value: function fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context) {
                var includeDirectivesSubDivisionReplacement = null;
                var node = subDivisionMarkdownNode, includeDirectiveMarkdownNodes = (0, _query.includeDirectiveMarkdownNodesFromNode)(node), includeDirectiveMarkdownNodesLength = includeDirectiveMarkdownNodes.length;
                if (includeDirectiveMarkdownNodesLength > 0) {
                    includeDirectivesSubDivisionReplacement = _subDivision.default.fromSubDivisionMarkdownNode(IncludeDirectivesSubDivisionReplacement, subDivisionMarkdownNode, includeDirectiveMarkdownNodes, context);
                }
                return includeDirectivesSubDivisionReplacement;
            }
        }
    ]);
    return IncludeDirectivesSubDivisionReplacement;
}(_subDivision.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZXBsYWNlbWVudC9zdWJEaXZpc2lvbi9pbmNsdWRlRGlyZWN0aXZlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgZnJvbSBcIi4uLy4uL3JlcGxhY2VtZW50L3N1YkRpdmlzaW9uXCI7XG5cbmltcG9ydCB7IGluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGVzRnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluY2x1ZGVEaXJlY3RpdmVzU3ViRGl2aXNpb25SZXBsYWNlbWVudCBleHRlbmRzIFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihub2RlLCB0b2tlbnMsIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCBpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2Rlcykge1xuICAgIHN1cGVyKG5vZGUsIHRva2Vucywgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUpO1xuXG4gICAgdGhpcy5pbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2RlcyA9IGluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGVzO1xuICB9XG5cbiAgZ2V0SW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZXM7XG4gIH1cblxuICByZW1vdmVGcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBpZ25vcmVkID0gZGl2aXNpb25NYXJrZG93bk5vZGUuaXNJZ25vcmVkKCk7XG5cbiAgICBpZiAoaWdub3JlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN1cGVyLnJlbW92ZUZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZW1vdmVTdWJEaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIHRoaXMuaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZXMuZm9yRWFjaCgoaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZURpcmVjdGl2ZVJlcGxhY2VtZW50ID0gaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZS5yZXNvbHZlKGNvbnRleHQpO1xuXG4gICAgICBpZiAoaW5jbHVkZURpcmVjdGl2ZVJlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gaW5jbHVkZURpcmVjdGl2ZVJlcGxhY2VtZW50LmdldERpdmlzaW9uTWFya2Rvd25Ob2RlKCksXG4gICAgICAgICAgICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IGluY2x1ZGVEaXJlY3RpdmVSZXBsYWNlbWVudC5hZGREaXZpc2lvbk1hcmtkb3duTm9kZShjb250ZXh0KTtcblxuICAgICAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMuZm9yRWFjaCgoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICAgICAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZS5yZXNvbHZlSW5jbHVkZXMoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMucmVtb3ZlRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgaW5jbHVkZURpcmVjdGl2ZXNTdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IG5vZGUgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZXMgPSBpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUpLFxuICAgICAgICAgIGluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGVzTGVuZ3RoID0gaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKGluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGVzTGVuZ3RoID4gMCkge1xuICAgICAgaW5jbHVkZURpcmVjdGl2ZXNTdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gU3ViRGl2aXNpb25SZXBsYWNlbWVudC5mcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoSW5jbHVkZURpcmVjdGl2ZXNTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZXMsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBpbmNsdWRlRGlyZWN0aXZlc1N1YkRpdmlzaW9uUmVwbGFjZW1lbnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbmNsdWRlRGlyZWN0aXZlc1N1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJub2RlIiwidG9rZW5zIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2RlcyIsImdldEluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGVzIiwicmVtb3ZlRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJjb250ZXh0IiwiaWdub3JlZCIsImlzSWdub3JlZCIsInJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZm9yRWFjaCIsImluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJpbmNsdWRlRGlyZWN0aXZlUmVwbGFjZW1lbnQiLCJyZXNvbHZlIiwiZ2V0RGl2aXNpb25NYXJrZG93bk5vZGUiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJhZGREaXZpc2lvbk1hcmtkb3duTm9kZSIsInJlc29sdmVJbmNsdWRlcyIsImZyb21TdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImluY2x1ZGVEaXJlY3RpdmVzU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsImluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2Rlc0xlbmd0aCIsImxlbmd0aCIsIlN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O2tFQUpjO3FCQUVtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZDLElBQUEsQUFBTUEsd0RBQU47Y0FBTUE7YUFBQUEsd0NBQ1BDLElBQUksRUFBRUMsTUFBTSxFQUFFQyx1QkFBdUIsRUFBRUMsNkJBQTZCO2dDQUQ3REo7O2dCQUVqQixrQkFGaUJBO1lBRVhDO1lBQU1DO1lBQVFDOztRQUVwQixNQUFLQyw2QkFBNkIsR0FBR0E7OztrQkFKcEJKOztZQU9uQkssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCw2QkFBNkI7WUFDM0M7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsK0JBQStCQyxvQkFBb0IsRUFBRUMsT0FBTztnQkFDMUQsSUFBTUMsVUFBVUYscUJBQXFCRyxTQUFTO2dCQUU5QyxJQUFJRCxTQUFTO29CQUNYO2dCQUNGO2dCQUVBLHVCQWxCaUJULG9EQWtCWE0sa0NBQU4sSUFBSyxhQUFnQ0Msc0JBQXNCQztZQUM3RDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSw4QkFBOEJKLG9CQUFvQixFQUFFQyxPQUFPO2dCQUN6RCxJQUFJLENBQUNKLDZCQUE2QixDQUFDUSxPQUFPLENBQUMsU0FBQ0M7b0JBQzFDLElBQU1DLDhCQUE4QkQsNkJBQTZCRSxPQUFPLENBQUNQO29CQUV6RSxJQUFJTSxnQ0FBZ0MsTUFBTTt3QkFDeEMsSUFBTVAseUJBQXVCTyw0QkFBNEJFLHVCQUF1QixJQUMxRUMsMkJBQTJCSCw0QkFBNEJJLHVCQUF1QixDQUFDVjt3QkFFckZTLHlCQUF5QkwsT0FBTyxDQUFDLFNBQUNUOzRCQUNoQ0Esd0JBQXdCZ0IsZUFBZSxDQUFDWix3QkFBc0JDO3dCQUNoRTtvQkFDRjtnQkFDRjtnQkFFQSxJQUFJLENBQUNGLDhCQUE4QixDQUFDQyxzQkFBc0JDO1lBQzVEOzs7O1lBRU9ZLEtBQUFBO21CQUFQLFNBQU9BLDRCQUE0QmpCLHVCQUF1QixFQUFFSyxPQUFPO2dCQUNqRSxJQUFJYSwwQ0FBMEM7Z0JBRTlDLElBQU1wQixPQUFPRSx5QkFDUEMsZ0NBQWdDa0IsSUFBQUEsNENBQXFDLEVBQUNyQixPQUN0RXNCLHNDQUFzQ25CLDhCQUE4Qm9CLE1BQU07Z0JBRWhGLElBQUlELHNDQUFzQyxHQUFHO29CQUMzQ0YsMENBQTBDSSxvQkFBc0IsQ0FBQ0wsMkJBQTJCLENBOUM3RXBCLHlDQThDdUhHLHlCQUF5QkMsK0JBQStCSTtnQkFDaE07Z0JBRUEsT0FBT2E7WUFDVDs7O1dBbERtQnJCO0VBQWdEeUIsb0JBQXNCIn0=