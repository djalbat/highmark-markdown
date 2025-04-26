"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EmbedDirectivesSubDivisionTransform;
    }
});
var _necessary = require("necessary");
var _subDivision = /*#__PURE__*/ _interop_require_default(require("../subDivision"));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var backwardsForEach = _necessary.arrayUtilities.backwardsForEach;
var EmbedDirectivesSubDivisionTransform = /*#__PURE__*/ function(SubDivisionTransform) {
    _inherits(EmbedDirectivesSubDivisionTransform, SubDivisionTransform);
    function EmbedDirectivesSubDivisionTransform(node, tokens, divisionMarkdownNode, embedDirectiveMarkdownNodes) {
        _class_call_check(this, EmbedDirectivesSubDivisionTransform);
        var _this;
        _this = _call_super(this, EmbedDirectivesSubDivisionTransform, [
            node,
            tokens,
            divisionMarkdownNode
        ]);
        _this.embedDirectiveMarkdownNodes = embedDirectiveMarkdownNodes;
        return _this;
    }
    _create_class(EmbedDirectivesSubDivisionTransform, [
        {
            key: "getEmbedDirectiveMarkdownNodes",
            value: function getEmbedDirectiveMarkdownNodes() {
                return this.embedDirectiveMarkdownNodes;
            }
        },
        {
            key: "replaceSubDivisionMarkdownNode",
            value: function replaceSubDivisionMarkdownNode(divisionMarkdownNode, context) {
                // const subDivisionMarkdownNodes = [],
                //       divisionMarkdownNode = this.getDivisionMarkdownNode();
                //
                // backwardsForEach(this.embedDirectiveMarkdownNodes, (embedDirectiveMarkdownNode) => {
                //   const embedDirectiveTransform = embedDirectiveMarkdownNode.resolve(context);
                //
                //   if (embedDirectiveTransform !== null) {
                //     embedDirectiveTransform.addAfterSubDivisionMarkdownNode(divisionMarkdownNode, divisionMarkdownNode, subDivisionMarkdownNodes, context);
                //   }
                // });
                //
                // this.removeFromDivisionMarkdownNode(divisionMarkdownNode, context);
                return subDivisionMarkdownNodes;
            }
        }
    ], [
        {
            key: "fromSubDivisionMarkdownNode",
            value: function fromSubDivisionMarkdownNode(divisionMarkdownNode, context) {
                var embedDirectivesSubDivisionTransform = null;
                var node = divisionMarkdownNode, embedDirectiveMarkdownNodes = (0, _query.embedDirectiveMarkdownNodesFromNode)(node), embedDirectiveMarkdownNodesLength = embedDirectiveMarkdownNodes.length;
                if (embedDirectiveMarkdownNodesLength > 0) {
                    embedDirectivesSubDivisionTransform = _subDivision.default.fromSubDivisionMarkdownNode(EmbedDirectivesSubDivisionTransform, divisionMarkdownNode, embedDirectiveMarkdownNodes, context);
                }
                return embedDirectivesSubDivisionTransform;
            }
        }
    ]);
    return EmbedDirectivesSubDivisionTransform;
}(_subDivision.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vc3ViRGl2aXNpb24vZW1iZWREaXJlY3RpdmVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFN1YkRpdmlzaW9uVHJhbnNmb3JtIGZyb20gXCIuLi9zdWJEaXZpc2lvblwiO1xuXG5pbXBvcnQgeyBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXNGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgeyBiYWNrd2FyZHNGb3JFYWNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1iZWREaXJlY3RpdmVzU3ViRGl2aXNpb25UcmFuc2Zvcm0gZXh0ZW5kcyBTdWJEaXZpc2lvblRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIHRva2VucywgZGl2aXNpb25NYXJrZG93bk5vZGUsIGVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2Rlcykge1xuICAgIHN1cGVyKG5vZGUsIHRva2VucywgZGl2aXNpb25NYXJrZG93bk5vZGUpO1xuXG4gICAgdGhpcy5lbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXMgPSBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXM7XG4gIH1cblxuICBnZXRFbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzO1xuICB9XG5cbiAgcmVwbGFjZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgLy8gY29uc3Qgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzID0gW10sXG4gICAgLy8gICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLmdldERpdmlzaW9uTWFya2Rvd25Ob2RlKCk7XG4gICAgLy9cbiAgICAvLyBiYWNrd2FyZHNGb3JFYWNoKHRoaXMuZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzLCAoZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGUpID0+IHtcbiAgICAvLyAgIGNvbnN0IGVtYmVkRGlyZWN0aXZlVHJhbnNmb3JtID0gZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGUucmVzb2x2ZShjb250ZXh0KTtcbiAgICAvL1xuICAgIC8vICAgaWYgKGVtYmVkRGlyZWN0aXZlVHJhbnNmb3JtICE9PSBudWxsKSB7XG4gICAgLy8gICAgIGVtYmVkRGlyZWN0aXZlVHJhbnNmb3JtLmFkZEFmdGVyU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMsIGNvbnRleHQpO1xuICAgIC8vICAgfVxuICAgIC8vIH0pO1xuICAgIC8vXG4gICAgLy8gdGhpcy5yZW1vdmVGcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgZW1iZWREaXJlY3RpdmVzU3ViRGl2aXNpb25UcmFuc2Zvcm0gPSBudWxsO1xuXG4gICAgY29uc3Qgbm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXMgPSBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXNMZW5ndGggPSBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKGVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2Rlc0xlbmd0aCA+IDApIHtcbiAgICAgIGVtYmVkRGlyZWN0aXZlc1N1YkRpdmlzaW9uVHJhbnNmb3JtID0gU3ViRGl2aXNpb25UcmFuc2Zvcm0uZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKEVtYmVkRGlyZWN0aXZlc1N1YkRpdmlzaW9uVHJhbnNmb3JtLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW1iZWREaXJlY3RpdmVzU3ViRGl2aXNpb25UcmFuc2Zvcm07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJFbWJlZERpcmVjdGl2ZXNTdWJEaXZpc2lvblRyYW5zZm9ybSIsImJhY2t3YXJkc0ZvckVhY2giLCJhcnJheVV0aWxpdGllcyIsIm5vZGUiLCJ0b2tlbnMiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlcyIsImdldEVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlcyIsInJlcGxhY2VTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImNvbnRleHQiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJmcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJlbWJlZERpcmVjdGl2ZXNTdWJEaXZpc2lvblRyYW5zZm9ybSIsImVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwiZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiU3ViRGl2aXNpb25UcmFuc2Zvcm0iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O3lCQVJVO2tFQUVFO3FCQUVtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRCxJQUFNLEFBQUVDLG1CQUFxQkMseUJBQWMsQ0FBbkNEO0FBRU8sSUFBQSxBQUFNRCxvREFBTjtjQUFNQTthQUFBQSxvQ0FDUEcsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLG9CQUFvQixFQUFFQywyQkFBMkI7Z0NBRHhETjs7Z0JBRWpCLGtCQUZpQkE7WUFFWEc7WUFBTUM7WUFBUUM7O1FBRXBCLE1BQUtDLDJCQUEyQixHQUFHQTs7O2tCQUpsQk47O1lBT25CTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELDJCQUEyQjtZQUN6Qzs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSwrQkFBK0JILG9CQUFvQixFQUFFSSxPQUFPO2dCQUMxRCx1Q0FBdUM7Z0JBQ3ZDLCtEQUErRDtnQkFDL0QsRUFBRTtnQkFDRix1RkFBdUY7Z0JBQ3ZGLGlGQUFpRjtnQkFDakYsRUFBRTtnQkFDRiw0Q0FBNEM7Z0JBQzVDLDhJQUE4STtnQkFDOUksTUFBTTtnQkFDTixNQUFNO2dCQUNOLEVBQUU7Z0JBQ0Ysc0VBQXNFO2dCQUV0RSxPQUFPQztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDRCQUE0Qk4sb0JBQW9CLEVBQUVJLE9BQU87Z0JBQzlELElBQUlHLHNDQUFzQztnQkFFMUMsSUFBTVQsT0FBT0Usc0JBQ1BDLDhCQUE4Qk8sSUFBQUEsMENBQW1DLEVBQUNWLE9BQ2xFVyxvQ0FBb0NSLDRCQUE0QlMsTUFBTTtnQkFFNUUsSUFBSUQsb0NBQW9DLEdBQUc7b0JBQ3pDRixzQ0FBc0NJLG9CQUFvQixDQUFDTCwyQkFBMkIsQ0FwQ3ZFWCxxQ0FvQzZHSyxzQkFBc0JDLDZCQUE2Qkc7Z0JBQ2pMO2dCQUVBLE9BQU9HO1lBQ1Q7OztXQXhDbUJaO0VBQTRDZ0Isb0JBQW9CIn0=