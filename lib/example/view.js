"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
var _occamparsers = require("occam-parsers");
var _easylayout = require("easy-layout");
var _subHeading = /*#__PURE__*/ _interop_require_default(require("./view/subHeading"));
var _bnf = /*#__PURE__*/ _interop_require_default(require("./view/textarea/bnf"));
var _previewPane = /*#__PURE__*/ _interop_require_default(require("./view/div/previewPane"));
var _left = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/left"));
var _right = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/right"));
var _markdown = /*#__PURE__*/ _interop_require_default(require("./view/textarea/markdown"));
var _parseTree = /*#__PURE__*/ _interop_require_default(require("./view/textarea/parseTree"));
var _lexicalEntries = /*#__PURE__*/ _interop_require_default(require("./view/textarea/lexicalEntries"));
var _index = require("../index");
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
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
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  padding: 1rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var bnf = _index.MarkdownParser.bnf, entries = _index.MarkdownLexer.entries, rulesFromBNF = _occamparsers.parserUtilities.rulesFromBNF, setNonTerminalNodes = _index.nodeUtilities.setNonTerminalNodes;
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    var _super = _create_super(View);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "keyUpHandler", function(event, element) {
            _this.update();
        });
        return _this;
    }
    _create_class(View, [
        {
            key: "update",
            value: function update() {
                var bnf = this.getBNF(), markdown = this.getMarkdown(), lexicalEntries = this.getLexicalEntries();
                var rules = rulesFromBNF(bnf), lexer = lexerFromLexicalEntries(lexicalEntries), parser = parserFromRules(rules), content = markdown; ///
                var tokens = lexer.tokenise(content), node = parser.parse(tokens);
                this.updatePreviewPaneDiv(node, tokens);
                var parseTree = null;
                if (node !== null) {
                    parseTree = node.asParseTree(tokens);
                }
                this.setParseTree(parseTree);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement(_easylayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_left.default, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Lexical entries"), ",", /*#__PURE__*/ React.createElement(_lexicalEntries.default, {
                    onKeyUp: this.keyUpHandler
                }), ",", /*#__PURE__*/ React.createElement(_subHeading.default, null, "BNF"), ",", /*#__PURE__*/ React.createElement(_bnf.default, {
                    onKeyUp: this.keyUpHandler
                }), ",", /*#__PURE__*/ React.createElement(_subHeading.default, null, "Parse tree"), ",", /*#__PURE__*/ React.createElement(_parseTree.default, null)), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_right.default, null, /*#__PURE__*/ React.createElement(_previewPane.default, null)), /*#__PURE__*/ React.createElement(_easylayout.HorizontalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.RowDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Markdown"), ",", /*#__PURE__*/ React.createElement(_markdown.default, {
                    onKeyUp: this.keyUpHandler
                }), ",")))));
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                var initialMarkdown = this.constructor.initialMarkdown, markdown = initialMarkdown, lexicalEntries = entries; ///
                this.setBNF(bnf);
                this.setMarkdown(markdown);
                this.setLexicalEntries(lexicalEntries);
                this.update();
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "initialMarkdown", "This is a paragraph.\n");
_define_property(View, "tagName", "div");
_define_property(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easywithstyle.default)(View)(_templateObject());
function lexerFromLexicalEntries(lexicalEntries) {
    var entries = lexicalEntries, lexer = _index.MarkdownLexer.fromEntries(entries);
    return lexer;
}
function parserFromRules(rules) {
    var parser = _index.MarkdownParser.fromRules(rules);
    setNonTerminalNodes(parser, _index.nodeMap);
    return parser;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcGFyc2VyVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IFJvd0RpdiwgUm93c0RpdiwgQ29sdW1uRGl2LCBDb2x1bW5zRGl2LCBWZXJ0aWNhbFNwbGl0dGVyRGl2LCBIb3Jpem9udGFsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vdmlldy9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgQk5GVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9ibmZcIjtcbmltcG9ydCBQcmV2aWV3UGFuZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9wcmV2aWV3UGFuZVwiO1xuaW1wb3J0IExlZnRTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZS9sZWZ0XCI7XG5pbXBvcnQgUmlnaHRTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZS9yaWdodFwiO1xuaW1wb3J0IE1hcmtkb3duVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9tYXJrZG93blwiO1xuaW1wb3J0IFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5pbXBvcnQgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL2xleGljYWxFbnRyaWVzXCI7XG5cbmltcG9ydCB7IG5vZGVNYXAsIE1hcmtkb3duTGV4ZXIsIE1hcmtkb3duUGFyc2VyLCBub2RlVXRpbGl0aWVzIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5cbmNvbnN0IHsgYm5mIH0gPSBNYXJrZG93blBhcnNlcixcbiAgICAgIHsgZW50cmllcyB9ID0gTWFya2Rvd25MZXhlcixcbiAgICAgIHsgcnVsZXNGcm9tQk5GIH0gPSBwYXJzZXJVdGlsaXRpZXMsXG4gICAgICB7IHNldE5vblRlcm1pbmFsTm9kZXMgfSA9IG5vZGVVdGlsaXRpZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAga2V5VXBIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgICAgIG1hcmtkb3duID0gdGhpcy5nZXRNYXJrZG93bigpLFxuICAgICAgICAgIGxleGljYWxFbnRyaWVzID0gdGhpcy5nZXRMZXhpY2FsRW50cmllcygpO1xuXG4gICAgY29uc3QgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBsZXhlciA9IGxleGVyRnJvbUxleGljYWxFbnRyaWVzKGxleGljYWxFbnRyaWVzKSxcbiAgICAgICAgICBwYXJzZXIgPSAgcGFyc2VyRnJvbVJ1bGVzKHJ1bGVzKSxcbiAgICAgICAgICBjb250ZW50ID0gbWFya2Rvd247IC8vL1xuXG4gICAgY29uc3QgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgdGhpcy51cGRhdGVQcmV2aWV3UGFuZURpdihub2RlLCB0b2tlbnMpO1xuXG4gICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8TGVmdFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgTGV4aWNhbCBlbnRyaWVzXG4gICAgICAgICAgPC9TdWJIZWFkaW5nPixcbiAgICAgICAgICA8TGV4aWNhbEVudHJpZXNUZXh0YXJlYSBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz4sXG4gICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICBCTkZcbiAgICAgICAgICA8L1N1YkhlYWRpbmc+LFxuICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz4sXG4gICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICBQYXJzZSB0cmVlXG4gICAgICAgICAgPC9TdWJIZWFkaW5nPixcbiAgICAgICAgICA8UGFyc2VUcmVlVGV4dGFyZWEvPlxuICAgICAgICA8L0xlZnRTaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFJpZ2h0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgICAgIDxQcmV2aWV3UGFuZURpdi8+XG4gICAgICAgICAgICA8L1JpZ2h0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgICA8SG9yaXpvbnRhbFNwbGl0dGVyRGl2Lz5cbiAgICAgICAgICAgIDxSb3dEaXY+XG4gICAgICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgTWFya2Rvd25cbiAgICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+LFxuICAgICAgICAgICAgICAgIDxNYXJrZG93blRleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPixcbiAgICAgICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICAgICAgPC9Sb3dEaXY+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgICk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsTWFya2Rvd24gfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgbWFya2Rvd24gPSBpbml0aWFsTWFya2Rvd24sIC8vL1xuICAgICAgICAgIGxleGljYWxFbnRyaWVzID0gZW50cmllczsgLy8vXG5cbiAgICB0aGlzLnNldEJORihibmYpO1xuXG4gICAgdGhpcy5zZXRNYXJrZG93bihtYXJrZG93bik7XG5cbiAgICB0aGlzLnNldExleGljYWxFbnRyaWVzKGxleGljYWxFbnRyaWVzKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBzdGF0aWMgaW5pdGlhbE1hcmtkb3duID0gYFRoaXMgaXMgYSBwYXJhZ3JhcGguXG5gO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgcGFkZGluZzogMXJlbTtcbiAgXG5gO1xuXG5mdW5jdGlvbiBsZXhlckZyb21MZXhpY2FsRW50cmllcyhsZXhpY2FsRW50cmllcykge1xuICBjb25zdCBlbnRyaWVzID0gbGV4aWNhbEVudHJpZXMsIC8vL1xuICAgICAgICBsZXhlciA9IE1hcmtkb3duTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyk7XG5cbiAgcmV0dXJuIGxleGVyO1xufVxuXG5mdW5jdGlvbiBwYXJzZXJGcm9tUnVsZXMocnVsZXMpIHtcbiAgY29uc3QgcGFyc2VyID0gTWFya2Rvd25QYXJzZXIuZnJvbVJ1bGVzKHJ1bGVzKTtcblxuICBzZXROb25UZXJtaW5hbE5vZGVzKHBhcnNlciwgbm9kZU1hcCk7XG5cbiAgcmV0dXJuIHBhcnNlcjtcbn1cbiJdLCJuYW1lcyI6WyJibmYiLCJNYXJrZG93blBhcnNlciIsImVudHJpZXMiLCJNYXJrZG93bkxleGVyIiwicnVsZXNGcm9tQk5GIiwicGFyc2VyVXRpbGl0aWVzIiwic2V0Tm9uVGVybWluYWxOb2RlcyIsIm5vZGVVdGlsaXRpZXMiLCJWaWV3Iiwia2V5VXBIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwidXBkYXRlIiwiZ2V0Qk5GIiwibWFya2Rvd24iLCJnZXRNYXJrZG93biIsImxleGljYWxFbnRyaWVzIiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJydWxlcyIsImxleGVyIiwibGV4ZXJGcm9tTGV4aWNhbEVudHJpZXMiLCJwYXJzZXIiLCJwYXJzZXJGcm9tUnVsZXMiLCJjb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJ1cGRhdGVQcmV2aWV3UGFuZURpdiIsInBhcnNlVHJlZSIsImFzUGFyc2VUcmVlIiwic2V0UGFyc2VUcmVlIiwiY2hpbGRFbGVtZW50cyIsIkNvbHVtbnNEaXYiLCJMZWZ0U2l6ZWFibGVEaXYiLCJTdWJIZWFkaW5nIiwiTGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsIm9uS2V5VXAiLCJCTkZUZXh0YXJlYSIsIlBhcnNlVHJlZVRleHRhcmVhIiwiVmVydGljYWxTcGxpdHRlckRpdiIsIkNvbHVtbkRpdiIsIlJvd3NEaXYiLCJSaWdodFNpemVhYmxlRGl2IiwiUHJldmlld1BhbmVEaXYiLCJIb3Jpem9udGFsU3BsaXR0ZXJEaXYiLCJSb3dEaXYiLCJNYXJrZG93blRleHRhcmVhIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJpbml0aWFsTWFya2Rvd24iLCJjb25zdHJ1Y3RvciIsInNldEJORiIsInNldE1hcmtkb3duIiwic2V0TGV4aWNhbEVudHJpZXMiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwiZnJvbUVudHJpZXMiLCJmcm9tUnVsZXMiLCJub2RlTWFwIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF1SEE7OztlQUFBOzs7b0VBckhzQjtvQkFFRTs0QkFDUTswQkFDbUU7aUVBRTVFOzBEQUNDO2tFQUNHOzJEQUNDOzREQUNDOytEQUNBO2dFQUNDO3FFQUNLO3FCQUVtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RSxJQUFNLEFBQUVBLE1BQVFDLHFCQUFjLENBQXRCRCxLQUNGLEFBQUVFLFVBQVlDLG9CQUFhLENBQXpCRCxTQUNGLEFBQUVFLGVBQWlCQyw2QkFBZSxDQUFoQ0QsY0FDRixBQUFFRSxzQkFBd0JDLG9CQUFhLENBQXJDRDtBQUVSLElBQUEsQUFBTUUscUJBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7UUFDSkMsa0RBQUFBLGdCQUFlLFNBQUNDLE9BQU9DO1lBQ3JCLE1BQUtDLE1BQU07UUFDYjs7O2tCQUhJSjs7WUFLSkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1aLE1BQU0sSUFBSSxDQUFDYSxNQUFNLElBQ2pCQyxXQUFXLElBQUksQ0FBQ0MsV0FBVyxJQUMzQkMsaUJBQWlCLElBQUksQ0FBQ0MsaUJBQWlCO2dCQUU3QyxJQUFNQyxRQUFRZCxhQUFhSixNQUNyQm1CLFFBQVFDLHdCQUF3QkosaUJBQ2hDSyxTQUFVQyxnQkFBZ0JKLFFBQzFCSyxVQUFVVCxVQUFVLEdBQUc7Z0JBRTdCLElBQU1VLFNBQVNMLE1BQU1NLFFBQVEsQ0FBQ0YsVUFDeEJHLE9BQU9MLE9BQU9NLEtBQUssQ0FBQ0g7Z0JBRTFCLElBQUksQ0FBQ0ksb0JBQW9CLENBQUNGLE1BQU1GO2dCQUVoQyxJQUFJSyxZQUFZO2dCQUVoQixJQUFJSCxTQUFTLE1BQU07b0JBQ2pCRyxZQUFZSCxLQUFLSSxXQUFXLENBQUNOO2dCQUMvQjtnQkFFQSxJQUFJLENBQUNPLFlBQVksQ0FBQ0Y7WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UscUJBRUUsb0JBQUNDLHNCQUFVLHNCQUNULG9CQUFDQyxhQUFlLHNCQUNkLG9CQUFDQyxtQkFBVSxRQUFDLG9CQUVDLG1CQUNiLG9CQUFDQyx1QkFBc0I7b0JBQUNDLFNBQVMsSUFBSSxDQUFDNUIsWUFBWTtvQkFBSSxtQkFDdEQsb0JBQUMwQixtQkFBVSxRQUFDLFFBRUMsbUJBQ2Isb0JBQUNHLFlBQVc7b0JBQUNELFNBQVMsSUFBSSxDQUFDNUIsWUFBWTtvQkFBSSxtQkFDM0Msb0JBQUMwQixtQkFBVSxRQUFDLGVBRUMsbUJBQ2Isb0JBQUNJLGtCQUFpQix3QkFFcEIsb0JBQUNDLCtCQUFtQix1QkFDcEIsb0JBQUNDLHFCQUFTLHNCQUNSLG9CQUFDQyxtQkFBTyxzQkFDTixvQkFBQ0MsY0FBZ0Isc0JBQ2Ysb0JBQUNDLG9CQUFjLHdCQUVqQixvQkFBQ0MsaUNBQXFCLHVCQUN0QixvQkFBQ0Msa0JBQU0sc0JBQ0wsb0JBQUNKLG1CQUFPLHNCQUNOLG9CQUFDUCxtQkFBVSxRQUFDLGFBRUMsbUJBQ2Isb0JBQUNZLGlCQUFnQjtvQkFBQ1YsU0FBUyxJQUFJLENBQUM1QixZQUFZO29CQUFJO1lBUTlEOzs7WUFFQXVDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNDLGFBQWE7Z0JBRWxCLElBQU0sQUFBRUMsa0JBQW9CLElBQUksQ0FBQ0MsV0FBVyxDQUFwQ0QsaUJBQ0ZwQyxXQUFXb0MsaUJBQ1hsQyxpQkFBaUJkLFNBQVMsR0FBRztnQkFFbkMsSUFBSSxDQUFDa0QsTUFBTSxDQUFDcEQ7Z0JBRVosSUFBSSxDQUFDcUQsV0FBVyxDQUFDdkM7Z0JBRWpCLElBQUksQ0FBQ3dDLGlCQUFpQixDQUFDdEM7Z0JBRXZCLElBQUksQ0FBQ0osTUFBTTtZQUNiOzs7V0FuRklKO3FCQUFhK0MsYUFBTztBQXFGeEIsaUJBckZJL0MsTUFxRkcwQyxtQkFBbUI7QUFHMUIsaUJBeEZJMUMsTUF3RkdnRCxXQUFVO0FBRWpCLGlCQTFGSWhELE1BMEZHaUQscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDbkQ7QUFNekIsU0FBU1ksd0JBQXdCSixjQUFjO0lBQzdDLElBQU1kLFVBQVVjLGdCQUNWRyxRQUFRaEIsb0JBQWEsQ0FBQ3lELFdBQVcsQ0FBQzFEO0lBRXhDLE9BQU9pQjtBQUNUO0FBRUEsU0FBU0csZ0JBQWdCSixLQUFLO0lBQzVCLElBQU1HLFNBQVNwQixxQkFBYyxDQUFDNEQsU0FBUyxDQUFDM0M7SUFFeENaLG9CQUFvQmUsUUFBUXlDLGNBQU87SUFFbkMsT0FBT3pDO0FBQ1QifQ==