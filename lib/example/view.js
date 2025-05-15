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
var _easylayout = require("easy-layout");
var _index = require("../index");
var _indexOptions = /*#__PURE__*/ _interop_require_default(require("./indexOptions"));
var _pageButtons = /*#__PURE__*/ _interop_require_default(require("./view/div/pageButtons"));
var _left = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/left"));
var _css = /*#__PURE__*/ _interop_require_default(require("./view/div/container/css"));
var _html = /*#__PURE__*/ _interop_require_default(require("./view/div/container/html"));
var _left1 = /*#__PURE__*/ _interop_require_default(require("./view/div/tabButtons/left"));
var _right = /*#__PURE__*/ _interop_require_default(require("./view/div/tabButtons/right"));
var _preview = /*#__PURE__*/ _interop_require_default(require("./view/div/container/preview"));
var _markdown = /*#__PURE__*/ _interop_require_default(require("./view/div/container/markdown"));
var _css1 = /*#__PURE__*/ _interop_require_default(require("./view/textarea/parseTree/css"));
var _html1 = /*#__PURE__*/ _interop_require_default(require("./view/textarea/parseTree/html"));
var _plainText = /*#__PURE__*/ _interop_require_default(require("./view/div/container/plainText"));
var _markdownStyle = /*#__PURE__*/ _interop_require_default(require("./view/div/container/markdownStyle"));
var _importer = require("./importer");
var _constants = require("./constants");
var _dom = require("../utilities/dom");
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
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
var markdownLexer = _index.MarkdownLexer.fromNothing(), markdownParser = _index.MarkdownParser.fromNothing(), markdownStyleLexer = _index.MarkdownStyleLexer.fromNothing(), markdownStyleParser = _index.MarkdownStyleParser.fromNothing();
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _call_super(this, View, arguments), _define_property(_this, "pageUpdateCustomHandler", function(event, element, index) {
            _this.updateHTML(index);
        }), _define_property(_this, "markdownStyleCustomHandler", function(event, element) {
            _this.markdownStyle();
        }), _define_property(_this, "markdownCustomHandler", function(event, element) {
            _this.markdown();
        }), _define_property(_this, "plainTextCustomHandler", function(event, element) {
            _this.plainText();
        }), _define_property(_this, "previewCustomHandler", function(event, element) {
            _this.preview();
        }), _define_property(_this, "keyUpCustomHandler", function(event, element) {
            _this.update();
        }), _define_property(_this, "htmlCustomHandler", function(event, element) {
            _this.html();
        }), _define_property(_this, "cssCustomHandler", function(event, element) {
            _this.css();
        });
        return _this;
    }
    _create_class(View, [
        {
            key: "update",
            value: function update() {
                this.updateMarkdownStyle();
                this.updateMarkdown();
                this.updateHTML();
                this.updateCSS();
            }
        },
        {
            key: "updateMarkdownStyle",
            value: function updateMarkdownStyle() {
                var markdownStyle = this.getMarkdownStyle(), lexer = markdownStyleLexer, parser = markdownStyleParser, content = markdownStyle, tokens = lexer.tokenise(content), startRule = parser.getStartRule(), node = parser.parse(tokens, startRule);
                if (node === null) {
                    this.resetMarkdownStyleTokens();
                    this.resetTopmostMarkdownStyleNode();
                    this.clearMarkdownStyleParseTreeTextarea();
                    return;
                }
                var parseTree = node.asParseTree(tokens), markdownStyleTokens = tokens, topmostMarkdownStyleNode = node; ///
                this.setMarkdownStyleTokens(markdownStyleTokens);
                this.setTopmostMarkdownStyleNode(topmostMarkdownStyleNode);
                this.updateMarkdownStyleParseTreeTextarea(parseTree);
            }
        },
        {
            key: "updateMarkdown",
            value: function updateMarkdown() {
                var markdown = this.getMarkdown(), lexer = markdownLexer, parser = markdownParser, content = markdown, tokens = lexer.tokenise(content), node = parser.parse(tokens);
                if (node === null) {
                    this.resetMarkdownTokens();
                    this.resetTopmostMarkdownNode();
                    this.clearMarkdownParseTreeTextarea();
                    return;
                }
                var context;
                var topmostMarkdownNode = node; ///
                context = {
                    tokens: tokens,
                    importer: _importer.importer
                };
                topmostMarkdownNode.resolve(context);
                var topmostMarkdownNodeParseTree = topmostMarkdownNode.asParseTree(tokens), markdownParseTree = topmostMarkdownNodeParseTree, markdownTokens = tokens; ///
                this.setMarkdownTokens(markdownTokens);
                this.setTopmostMarkdownNode(topmostMarkdownNode);
                this.updateMarkdownParseTreeTextarea(markdownParseTree);
            }
        },
        {
            key: "updateHTML",
            value: function updateHTML() {
                var index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
                this.clearXMP();
                this.clearPreviewDiv();
                this.clearPlainTextTextarea();
                this.clearHTMLParseTreeTextarea();
                this.clearPageButtonsDiv();
                var topmostMarkdownNode = this.getTopmostMarkdownNode(), topmostHTMLNode = (0, _dom.topmostHTMLNodeFromMarkdownNode)(topmostMarkdownNode);
                if (topmostHTMLNode === null) {
                    return;
                }
                var context;
                var markdownTokens = this.getMarkdownTokens(), tokens = markdownTokens; ///
                context = {
                    indexOptions: _indexOptions.default,
                    tokens: tokens
                };
                topmostHTMLNode.resolve(context);
                var divisionHTMLNOde = topmostHTMLNode.getDivisionHTMLNodeAt(index);
                if (divisionHTMLNOde === null) {
                    return;
                }
                var divisionHTMLNOdeParseTree = divisionHTMLNOde.asParseTree(), htmlParseTree = divisionHTMLNOdeParseTree, multiplicity = topmostHTMLNode.getMultiplicity(), length = multiplicity;
                context = {
                    tokens: tokens,
                    pathToURL: pathToURL
                };
                this.updateXMP(divisionHTMLNOde, context);
                this.updatePreviewDiv(divisionHTMLNOde, context);
                this.updatePlainTextTextarea(divisionHTMLNOde, context);
                this.updateHTMLParseTreeTextarea(htmlParseTree);
                this.updatePageButtonsDiv(length, index);
            }
        },
        {
            key: "updateCSS",
            value: function updateCSS() {
                var markdownStyleElement = this.properties.markdownStyleElement, markdownStyle = this.getMarkdownStyle(), markdownStyleElementCSS = markdownStyleElement.update(markdownStyle);
                var topmostMarkdownStyleNode = this.getTopmostMarkdownStyleNode(), topmostCSSNode = (0, _dom.topmostCSSNodeFromMarkdownStyleNode)(topmostMarkdownStyleNode);
                if (topmostCSSNode === null) {
                    return;
                }
                var context;
                var markdownStyleTokens = this.getMarkdownStyleTokens(), tokens = markdownStyleTokens; ///
                context = {
                    tokens: tokens
                };
                topmostCSSNode.resolve(context);
                var selectorsString = _constants.PREVIEWED_DIV_SELECTORS_STRING;
                context = {
                    selectorsString: selectorsString
                };
                var topmostCSSNodeParseTree = topmostCSSNode.asParseTree(tokens), topmostCSSNodeCSS = topmostCSSNode.asCSS(context), cssParseTree = topmostCSSNodeParseTree;
                this.updateCSSParseTreeTextarea(cssParseTree);
                var css = "\n\n".concat(markdownStyleElementCSS, "    \n\n").concat(topmostCSSNodeCSS, "\n\n");
                this.setCSS(css);
            }
        },
        {
            key: "markdownStyle",
            value: function markdownStyle() {
                this.hideMarkdownContainerDiv();
                this.showMarkdownStyleContainerDiv();
            }
        },
        {
            key: "markdown",
            value: function markdown() {
                this.showMarkdownContainerDiv();
                this.hideMarkdownStyleContainerDiv();
            }
        },
        {
            key: "plainText",
            value: function plainText() {
                this.hideCSSContainerDiv();
                this.hideHTMLContainerDiv();
                this.hidePreviewContainerDiv();
                this.showPlainTextContainerDiv();
                this.hideCSSParseTreeTextarea();
                this.showHTMLParseTreeTextarea();
            }
        },
        {
            key: "preview",
            value: function preview() {
                this.hideCSSContainerDiv();
                this.hideHTMLContainerDiv();
                this.showPreviewContainerDiv();
                this.hidePlainTextContainerDiv();
                this.hideCSSParseTreeTextarea();
                this.showHTMLParseTreeTextarea();
            }
        },
        {
            key: "html",
            value: function html() {
                this.hideCSSContainerDiv();
                this.showHTMLContainerDiv();
                this.hidePreviewContainerDiv();
                this.hidePlainTextContainerDiv();
                this.hideCSSParseTreeTextarea();
                this.showHTMLParseTreeTextarea();
            }
        },
        {
            key: "css",
            value: function css() {
                this.showCSSContainerDiv();
                this.hideHTMLContainerDiv();
                this.hidePreviewContainerDiv();
                this.hidePlainTextContainerDiv();
                this.showCSSParseTreeTextarea();
                this.hideHTMLParseTreeTextarea();
            }
        },
        {
            key: "resetMarkdownTokens",
            value: function resetMarkdownTokens() {
                var markdownTokens = null;
                this.setMarkdownTokens(markdownTokens);
            }
        },
        {
            key: "resetMarkdownStyleTokens",
            value: function resetMarkdownStyleTokens() {
                var markdownStyleTokens = null;
                this.setMarkdownStyleTokens(markdownStyleTokens);
            }
        },
        {
            key: "resetTopmostMarkdownNode",
            value: function resetTopmostMarkdownNode() {
                var topmostMarkdownNode = null;
                this.setTopmostMarkdownNode(topmostMarkdownNode);
            }
        },
        {
            key: "resetTopmostMarkdownStyleNode",
            value: function resetTopmostMarkdownStyleNode() {
                var topmostMarkdownStyleNode = null;
                this.setTopmostMarkdownStyleNode(topmostMarkdownStyleNode);
            }
        },
        {
            key: "getMarkdownTokens",
            value: function getMarkdownTokens() {
                var markdownTokens = this.getState().markdownTokens;
                return markdownTokens;
            }
        },
        {
            key: "getMarkdownStyleTokens",
            value: function getMarkdownStyleTokens() {
                var markdownStyleTokens = this.getState().markdownStyleTokens;
                return markdownStyleTokens;
            }
        },
        {
            key: "getTopmostMarkdownNode",
            value: function getTopmostMarkdownNode() {
                var topmostMMarkdownNode = this.getState().topmostMMarkdownNode;
                return topmostMMarkdownNode;
            }
        },
        {
            key: "getTopmostMarkdownStyleNode",
            value: function getTopmostMarkdownStyleNode() {
                var topmostMMarkdownStyleNode = this.getState().topmostMMarkdownStyleNode;
                return topmostMMarkdownStyleNode;
            }
        },
        {
            key: "setMarkdownTokens",
            value: function setMarkdownTokens(markdownTokens) {
                this.updateState({
                    markdownTokens: markdownTokens
                });
            }
        },
        {
            key: "setMarkdownStyleTokens",
            value: function setMarkdownStyleTokens(markdownStyleTokens) {
                this.updateState({
                    markdownStyleTokens: markdownStyleTokens
                });
            }
        },
        {
            key: "setTopmostMarkdownNode",
            value: function setTopmostMarkdownNode(topmostMMarkdownNode) {
                this.updateState({
                    topmostMMarkdownNode: topmostMMarkdownNode
                });
            }
        },
        {
            key: "setTopmostMarkdownStyleNode",
            value: function setTopmostMarkdownStyleNode(topmostMMarkdownStyleNode) {
                this.updateState({
                    topmostMMarkdownStyleNode: topmostMMarkdownStyleNode
                });
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var markdownTokens = null, markdownStyleTokens = null, topmostMarkdownNode = null, topmostMarkdownStyleNode = null;
                this.setState({
                    markdownTokens: markdownTokens,
                    markdownStyleTokens: markdownStyleTokens,
                    topmostMarkdownNode: topmostMarkdownNode,
                    topmostMarkdownStyleNode: topmostMarkdownStyleNode
                });
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                this.markdownStyle();
                this.css();
                this.update();
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
            ///
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement(_easylayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_left.default, null, /*#__PURE__*/ React.createElement(_left1.default, {
                    onCustomMarkdown: this.markdownCustomHandler,
                    onCustomMarkdownStyle: this.markdownStyleCustomHandler
                }), /*#__PURE__*/ React.createElement(_markdown.default, {
                    onCustomKeyUp: this.keyUpCustomHandler
                }), /*#__PURE__*/ React.createElement(_markdownStyle.default, {
                    onCustomKeyUp: this.keyUpCustomHandler
                })), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_right.default, {
                    onCustomCSS: this.cssCustomHandler,
                    onCustomHTML: this.htmlCustomHandler,
                    onCustomPreview: this.previewCustomHandler,
                    onCustomPlainText: this.plainTextCustomHandler
                }), /*#__PURE__*/ React.createElement(_pageButtons.default, {
                    onCustomPageUpdate: this.pageUpdateCustomHandler
                }), /*#__PURE__*/ React.createElement(_css.default, null), /*#__PURE__*/ React.createElement(_html.default, null), /*#__PURE__*/ React.createElement(_preview.default, null), /*#__PURE__*/ React.createElement(_plainText.default, null), /*#__PURE__*/ React.createElement(_html1.default, null), /*#__PURE__*/ React.createElement(_css1.default, null))));
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                this.setInitialState();
                var _this_constructor = this.constructor, _$initialMarkdown = _this_constructor.initialMarkdown, initialMarkdownStyle = _this_constructor.initialMarkdownStyle, markdownStyle = initialMarkdownStyle, markdown = _$initialMarkdown; ///
                this.setMarkdownStyle(markdownStyle);
                this.setMarkdown(markdown);
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "initialMarkdown", _importer.initialMarkdown);
_define_property(View, "initialMarkdownStyle", "primaryHeading {\n   color: red;\n     \n   line {\n     color: blue;\n   }\n}");
_define_property(View, "tagName", "div");
_define_property(View, "ignoredProperties", [
    "markdownStyleElement"
]);
_define_property(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easywithstyle.default)(View)(_templateObject());
function pathToURL(path) {
    var url = "https://static.djalbat.com/".concat(path);
    return url;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgUm93c0RpdiwgQ29sdW1uRGl2LCBDb2x1bW5zRGl2LCBWZXJ0aWNhbFNwbGl0dGVyRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5pbXBvcnQgeyBNYXJrZG93bkxleGVyLCBNYXJrZG93blBhcnNlciwgTWFya2Rvd25TdHlsZUxleGVyLCBNYXJrZG93blN0eWxlUGFyc2VyIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5cbmltcG9ydCBpbmRleE9wdGlvbnMgZnJvbSBcIi4vaW5kZXhPcHRpb25zXCI7XG5pbXBvcnQgUGFnZUJ1dHRvbnNEaXYgZnJvbSBcIi4vdmlldy9kaXYvcGFnZUJ1dHRvbnNcIjtcbmltcG9ydCBMZWZ0U2l6ZWFibGVEaXYgZnJvbSBcIi4vdmlldy9kaXYvc2l6ZWFibGUvbGVmdFwiO1xuaW1wb3J0IENTU0NvbnRhaW5lckRpdiBmcm9tIFwiLi92aWV3L2Rpdi9jb250YWluZXIvY3NzXCI7XG5pbXBvcnQgSFRNTENvbnRhaW5lckRpdiBmcm9tIFwiLi92aWV3L2Rpdi9jb250YWluZXIvaHRtbFwiO1xuaW1wb3J0IExlZnRUYWJCdXR0b25zRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3RhYkJ1dHRvbnMvbGVmdFwiO1xuaW1wb3J0IFJpZ2h0VGFiQnV0dG9uc0RpdiBmcm9tIFwiLi92aWV3L2Rpdi90YWJCdXR0b25zL3JpZ2h0XCI7XG5pbXBvcnQgUHJldmlld0NvbnRhaW5lckRpdiBmcm9tIFwiLi92aWV3L2Rpdi9jb250YWluZXIvcHJldmlld1wiO1xuaW1wb3J0IE1hcmtkb3duQ29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9tYXJrZG93blwiO1xuaW1wb3J0IENTU1BhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlL2Nzc1wiO1xuaW1wb3J0IEhUTUxQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL3BhcnNlVHJlZS9odG1sXCI7XG5pbXBvcnQgUGxhaW5UZXh0Q29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9wbGFpblRleHRcIjtcbmltcG9ydCBNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9tYXJrZG93blN0eWxlXCI7XG5cbmltcG9ydCB7IGltcG9ydGVyLCBpbml0aWFsTWFya2Rvd24gfSBmcm9tIFwiLi9pbXBvcnRlclwiO1xuaW1wb3J0IHsgUFJFVklFV0VEX0RJVl9TRUxFQ1RPUlNfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyB0b3Btb3N0SFRNTE5vZGVGcm9tTWFya2Rvd25Ob2RlLCB0b3Btb3N0Q1NTTm9kZUZyb21NYXJrZG93blN0eWxlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZG9tXCI7XG5cbmNvbnN0IG1hcmtkb3duTGV4ZXIgPSBNYXJrZG93bkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBtYXJrZG93blBhcnNlciA9IE1hcmtkb3duUGFyc2VyLmZyb21Ob3RoaW5nKCksXG4gICAgICBtYXJrZG93blN0eWxlTGV4ZXIgPSBNYXJrZG93blN0eWxlTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIG1hcmtkb3duU3R5bGVQYXJzZXIgPSBNYXJrZG93blN0eWxlUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgcGFnZVVwZGF0ZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgdGhpcy51cGRhdGVIVE1MKGluZGV4KTtcbiAgfVxuXG4gIG1hcmtkb3duU3R5bGVDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5tYXJrZG93blN0eWxlKCk7XG4gIH1cblxuICBtYXJrZG93bkN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLm1hcmtkb3duKCk7XG4gIH1cblxuICBwbGFpblRleHRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5wbGFpblRleHQoKTtcbiAgfVxuXG4gIHByZXZpZXdDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5wcmV2aWV3KCk7XG4gIH1cblxuICBrZXlVcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgaHRtbEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLmh0bWwoKTtcbiAgfVxuXG4gIGNzc0N1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLmNzcygpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMudXBkYXRlTWFya2Rvd25TdHlsZSgpO1xuXG4gICAgdGhpcy51cGRhdGVNYXJrZG93bigpO1xuXG4gICAgdGhpcy51cGRhdGVIVE1MKCk7XG5cbiAgICB0aGlzLnVwZGF0ZUNTUygpO1xuICB9XG5cbiAgdXBkYXRlTWFya2Rvd25TdHlsZSgpIHtcbiAgICBjb25zdCBtYXJrZG93blN0eWxlID0gdGhpcy5nZXRNYXJrZG93blN0eWxlKCksXG4gICAgICAgICAgbGV4ZXIgPSBtYXJrZG93blN0eWxlTGV4ZXIsIC8vL1xuICAgICAgICAgIHBhcnNlciA9IG1hcmtkb3duU3R5bGVQYXJzZXIsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBtYXJrZG93blN0eWxlLCAgLy8vXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgc3RhcnRSdWxlID0gcGFyc2VyLmdldFN0YXJ0UnVsZSgpLFxuICAgICAgICAgIG5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zLCBzdGFydFJ1bGUpO1xuXG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMucmVzZXRNYXJrZG93blN0eWxlVG9rZW5zKCk7XG5cbiAgICAgIHRoaXMucmVzZXRUb3Btb3N0TWFya2Rvd25TdHlsZU5vZGUoKTtcblxuICAgICAgdGhpcy5jbGVhck1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGVUb2tlbnMgPSB0b2tlbnMsIC8vL1xuICAgICAgICAgIHRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgdGhpcy5zZXRNYXJrZG93blN0eWxlVG9rZW5zKG1hcmtkb3duU3R5bGVUb2tlbnMpO1xuXG4gICAgdGhpcy5zZXRUb3Btb3N0TWFya2Rvd25TdHlsZU5vZGUodG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlKTtcblxuICAgIHRoaXMudXBkYXRlTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhKHBhcnNlVHJlZSk7XG4gIH1cblxuICB1cGRhdGVNYXJrZG93bigpIHtcbiAgICBjb25zdCBtYXJrZG93biA9IHRoaXMuZ2V0TWFya2Rvd24oKSxcbiAgICAgICAgICBsZXhlciA9IG1hcmtkb3duTGV4ZXIsICAvLy9cbiAgICAgICAgICBwYXJzZXIgPSAgbWFya2Rvd25QYXJzZXIsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBtYXJrZG93biwgLy8vXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMucmVzZXRNYXJrZG93blRva2VucygpO1xuXG4gICAgICB0aGlzLnJlc2V0VG9wbW9zdE1hcmtkb3duTm9kZSgpO1xuXG4gICAgICB0aGlzLmNsZWFyTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGNvbnRleHQ7XG5cbiAgICBjb25zdCB0b3Btb3N0TWFya2Rvd25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICBjb250ZXh0ID0ge1xuICAgICAgdG9rZW5zLFxuICAgICAgaW1wb3J0ZXJcbiAgICB9O1xuXG4gICAgdG9wbW9zdE1hcmtkb3duTm9kZS5yZXNvbHZlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgdG9wbW9zdE1hcmtkb3duTm9kZVBhcnNlVHJlZSA9IHRvcG1vc3RNYXJrZG93bk5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKSxcbiAgICAgICAgICBtYXJrZG93blBhcnNlVHJlZSA9IHRvcG1vc3RNYXJrZG93bk5vZGVQYXJzZVRyZWUsIC8vL1xuICAgICAgICAgIG1hcmtkb3duVG9rZW5zID0gdG9rZW5zOyAgLy8vXG5cbiAgICB0aGlzLnNldE1hcmtkb3duVG9rZW5zKG1hcmtkb3duVG9rZW5zKTtcblxuICAgIHRoaXMuc2V0VG9wbW9zdE1hcmtkb3duTm9kZSh0b3Btb3N0TWFya2Rvd25Ob2RlKTtcblxuICAgIHRoaXMudXBkYXRlTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYShtYXJrZG93blBhcnNlVHJlZSk7XG4gIH1cblxuICB1cGRhdGVIVE1MKGluZGV4ID0gMCkge1xuICAgIHRoaXMuY2xlYXJYTVAoKTtcblxuICAgIHRoaXMuY2xlYXJQcmV2aWV3RGl2KCk7XG5cbiAgICB0aGlzLmNsZWFyUGxhaW5UZXh0VGV4dGFyZWEoKTtcblxuICAgIHRoaXMuY2xlYXJIVE1MUGFyc2VUcmVlVGV4dGFyZWEoKTtcblxuICAgIHRoaXMuY2xlYXJQYWdlQnV0dG9uc0RpdigpO1xuXG4gICAgY29uc3QgdG9wbW9zdE1hcmtkb3duTm9kZSA9IHRoaXMuZ2V0VG9wbW9zdE1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgIHRvcG1vc3RIVE1MTm9kZSA9IHRvcG1vc3RIVE1MTm9kZUZyb21NYXJrZG93bk5vZGUodG9wbW9zdE1hcmtkb3duTm9kZSk7XG5cbiAgICBpZiAodG9wbW9zdEhUTUxOb2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGNvbnRleHQ7XG5cbiAgICBjb25zdCBtYXJrZG93blRva2VucyA9IHRoaXMuZ2V0TWFya2Rvd25Ub2tlbnMoKSxcbiAgICAgICAgICB0b2tlbnMgPSBtYXJrZG93blRva2VuczsgIC8vL1xuXG4gICAgY29udGV4dCA9IHtcbiAgICAgIGluZGV4T3B0aW9ucyxcbiAgICAgIHRva2Vuc1xuICAgIH07XG5cbiAgICB0b3Btb3N0SFRNTE5vZGUucmVzb2x2ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IGRpdmlzaW9uSFRNTE5PZGUgPSB0b3Btb3N0SFRNTE5vZGUuZ2V0RGl2aXNpb25IVE1MTm9kZUF0KGluZGV4KTtcblxuICAgIGlmIChkaXZpc2lvbkhUTUxOT2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGl2aXNpb25IVE1MTk9kZVBhcnNlVHJlZSA9IGRpdmlzaW9uSFRNTE5PZGUuYXNQYXJzZVRyZWUoKSxcbiAgICAgICAgICBodG1sUGFyc2VUcmVlID0gZGl2aXNpb25IVE1MTk9kZVBhcnNlVHJlZSwgIC8vL1xuICAgICAgICAgIG11bHRpcGxpY2l0eSA9IHRvcG1vc3RIVE1MTm9kZS5nZXRNdWx0aXBsaWNpdHkoKSxcbiAgICAgICAgICBsZW5ndGggPSBtdWx0aXBsaWNpdHk7XG5cbiAgICBjb250ZXh0ID0ge1xuICAgICAgdG9rZW5zLFxuICAgICAgcGF0aFRvVVJMXG4gICAgfTtcblxuICAgIHRoaXMudXBkYXRlWE1QKGRpdmlzaW9uSFRNTE5PZGUsIGNvbnRleHQpO1xuXG4gICAgdGhpcy51cGRhdGVQcmV2aWV3RGl2KGRpdmlzaW9uSFRNTE5PZGUsIGNvbnRleHQpO1xuXG4gICAgdGhpcy51cGRhdGVQbGFpblRleHRUZXh0YXJlYShkaXZpc2lvbkhUTUxOT2RlLCBjb250ZXh0KTtcblxuICAgIHRoaXMudXBkYXRlSFRNTFBhcnNlVHJlZVRleHRhcmVhKGh0bWxQYXJzZVRyZWUpO1xuXG4gICAgdGhpcy51cGRhdGVQYWdlQnV0dG9uc0RpdihsZW5ndGgsIGluZGV4KTtcbiAgfVxuXG4gIHVwZGF0ZUNTUygpIHtcbiAgICBjb25zdCB7IG1hcmtkb3duU3R5bGVFbGVtZW50IH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgbWFya2Rvd25TdHlsZSA9IHRoaXMuZ2V0TWFya2Rvd25TdHlsZSgpLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGVFbGVtZW50Q1NTID0gbWFya2Rvd25TdHlsZUVsZW1lbnQudXBkYXRlKG1hcmtkb3duU3R5bGUpO1xuXG4gICAgY29uc3QgdG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlID0gdGhpcy5nZXRUb3Btb3N0TWFya2Rvd25TdHlsZU5vZGUoKSxcbiAgICAgICAgICB0b3Btb3N0Q1NTTm9kZSA9IHRvcG1vc3RDU1NOb2RlRnJvbU1hcmtkb3duU3R5bGVOb2RlKHRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSk7XG5cbiAgICBpZiAodG9wbW9zdENTU05vZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgY29udGV4dDtcblxuICAgIGNvbnN0IG1hcmtkb3duU3R5bGVUb2tlbnMgPSB0aGlzLmdldE1hcmtkb3duU3R5bGVUb2tlbnMoKSxcbiAgICAgICAgICB0b2tlbnMgPSBtYXJrZG93blN0eWxlVG9rZW5zOyAgLy8vXG5cbiAgICBjb250ZXh0ID0ge1xuICAgICAgdG9rZW5zXG4gICAgfTtcblxuICAgIHRvcG1vc3RDU1NOb2RlLnJlc29sdmUoY29udGV4dCk7XG5cbiAgICBjb25zdCBzZWxlY3RvcnNTdHJpbmcgPSBQUkVWSUVXRURfRElWX1NFTEVDVE9SU19TVFJJTkc7XG5cbiAgICBjb250ZXh0ID0ge1xuICAgICAgc2VsZWN0b3JzU3RyaW5nXG4gICAgfTtcblxuICAgIGNvbnN0IHRvcG1vc3RDU1NOb2RlUGFyc2VUcmVlID0gdG9wbW9zdENTU05vZGUuYXNQYXJzZVRyZWUodG9rZW5zKSxcbiAgICAgICAgICB0b3Btb3N0Q1NTTm9kZUNTUyA9IHRvcG1vc3RDU1NOb2RlLmFzQ1NTKGNvbnRleHQpLFxuICAgICAgICAgIGNzc1BhcnNlVHJlZSA9IHRvcG1vc3RDU1NOb2RlUGFyc2VUcmVlO1xuXG4gICAgdGhpcy51cGRhdGVDU1NQYXJzZVRyZWVUZXh0YXJlYShjc3NQYXJzZVRyZWUpO1xuXG4gICAgY29uc3QgY3NzID0gYFxuXG4ke21hcmtkb3duU3R5bGVFbGVtZW50Q1NTfSAgICBcblxuJHt0b3Btb3N0Q1NTTm9kZUNTU31cblxuYDtcblxuICAgIHRoaXMuc2V0Q1NTKGNzcyk7XG4gIH1cblxuICBtYXJrZG93blN0eWxlKCkge1xuICAgIHRoaXMuaGlkZU1hcmtkb3duQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5zaG93TWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdigpO1xuICB9XG5cbiAgbWFya2Rvd24oKSB7XG4gICAgdGhpcy5zaG93TWFya2Rvd25Db250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2KCk7XG4gIH1cblxuICBwbGFpblRleHQoKSB7XG4gICAgdGhpcy5oaWRlQ1NTQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlSFRNTENvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVByZXZpZXdDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLnNob3dQbGFpblRleHRDb250YWluZXJEaXYoKTtcblxuICAgIHRoaXMuaGlkZUNTU1BhcnNlVHJlZVRleHRhcmVhKCk7XG4gICAgdGhpcy5zaG93SFRNTFBhcnNlVHJlZVRleHRhcmVhKCk7XG4gIH1cblxuICBwcmV2aWV3KCkge1xuICAgIHRoaXMuaGlkZUNTU0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZUhUTUxDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLnNob3dQcmV2aWV3Q29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlUGxhaW5UZXh0Q29udGFpbmVyRGl2KCk7XG5cbiAgICB0aGlzLmhpZGVDU1NQYXJzZVRyZWVUZXh0YXJlYSgpO1xuICAgIHRoaXMuc2hvd0hUTUxQYXJzZVRyZWVUZXh0YXJlYSgpO1xuICB9XG5cbiAgaHRtbCgpIHtcbiAgICB0aGlzLmhpZGVDU1NDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLnNob3dIVE1MQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlUHJldmlld0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVBsYWluVGV4dENvbnRhaW5lckRpdigpO1xuXG4gICAgdGhpcy5oaWRlQ1NTUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgICB0aGlzLnNob3dIVE1MUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgfVxuXG4gIGNzcygpIHtcbiAgICB0aGlzLnNob3dDU1NDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVIVE1MQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlUHJldmlld0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVBsYWluVGV4dENvbnRhaW5lckRpdigpO1xuXG4gICAgdGhpcy5zaG93Q1NTUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgICB0aGlzLmhpZGVIVE1MUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgfVxuXG4gIHJlc2V0TWFya2Rvd25Ub2tlbnMoKSB7XG4gICAgY29uc3QgbWFya2Rvd25Ub2tlbnMgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRNYXJrZG93blRva2VucyhtYXJrZG93blRva2Vucyk7XG4gIH1cblxuICByZXNldE1hcmtkb3duU3R5bGVUb2tlbnMoKSB7XG4gICAgY29uc3QgbWFya2Rvd25TdHlsZVRva2VucyA9IG51bGw7XG5cbiAgICB0aGlzLnNldE1hcmtkb3duU3R5bGVUb2tlbnMobWFya2Rvd25TdHlsZVRva2Vucyk7XG4gIH1cblxuICByZXNldFRvcG1vc3RNYXJrZG93bk5vZGUoKSB7XG4gICAgY29uc3QgdG9wbW9zdE1hcmtkb3duTm9kZSA9IG51bGw7XG5cbiAgICB0aGlzLnNldFRvcG1vc3RNYXJrZG93bk5vZGUodG9wbW9zdE1hcmtkb3duTm9kZSk7XG4gIH1cblxuICByZXNldFRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSgpIHtcbiAgICBjb25zdCB0b3Btb3N0TWFya2Rvd25TdHlsZU5vZGUgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRUb3Btb3N0TWFya2Rvd25TdHlsZU5vZGUodG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlKTtcbiAgfVxuXG4gIGdldE1hcmtkb3duVG9rZW5zKCkge1xuICAgIGNvbnN0IHsgbWFya2Rvd25Ub2tlbnMgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBtYXJrZG93blRva2VucztcbiAgfVxuXG4gIGdldE1hcmtkb3duU3R5bGVUb2tlbnMoKSB7XG4gICAgY29uc3QgeyBtYXJrZG93blN0eWxlVG9rZW5zIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gbWFya2Rvd25TdHlsZVRva2VucztcbiAgfVxuXG4gIGdldFRvcG1vc3RNYXJrZG93bk5vZGUoKSB7XG4gICAgY29uc3QgeyB0b3Btb3N0TU1hcmtkb3duTm9kZSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHRvcG1vc3RNTWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgZ2V0VG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlKCkge1xuICAgIGNvbnN0IHsgdG9wbW9zdE1NYXJrZG93blN0eWxlTm9kZSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHRvcG1vc3RNTWFya2Rvd25TdHlsZU5vZGU7XG4gIH1cblxuICBzZXRNYXJrZG93blRva2VucyhtYXJrZG93blRva2Vucykge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgbWFya2Rvd25Ub2tlbnNcbiAgICB9KTtcbiAgfVxuXG4gIHNldE1hcmtkb3duU3R5bGVUb2tlbnMobWFya2Rvd25TdHlsZVRva2Vucykge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgbWFya2Rvd25TdHlsZVRva2Vuc1xuICAgIH0pO1xuICB9XG5cbiAgc2V0VG9wbW9zdE1hcmtkb3duTm9kZSh0b3Btb3N0TU1hcmtkb3duTm9kZSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgdG9wbW9zdE1NYXJrZG93bk5vZGVcbiAgICB9KTtcbiAgfVxuXG4gIHNldFRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSh0b3Btb3N0TU1hcmtkb3duU3R5bGVOb2RlKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICB0b3Btb3N0TU1hcmtkb3duU3R5bGVOb2RlXG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgbWFya2Rvd25Ub2tlbnMgPSBudWxsLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGVUb2tlbnMgPSBudWxsLFxuICAgICAgICAgIHRvcG1vc3RNYXJrZG93bk5vZGUgPSBudWxsLFxuICAgICAgICAgIHRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1hcmtkb3duVG9rZW5zLFxuICAgICAgbWFya2Rvd25TdHlsZVRva2VucyxcbiAgICAgIHRvcG1vc3RNYXJrZG93bk5vZGUsXG4gICAgICB0b3Btb3N0TWFya2Rvd25TdHlsZU5vZGVcbiAgICB9KTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMubWFya2Rvd25TdHlsZSgpO1xuXG4gICAgdGhpcy5jc3MoKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxMZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPExlZnRUYWJCdXR0b25zRGl2IG9uQ3VzdG9tTWFya2Rvd249e3RoaXMubWFya2Rvd25DdXN0b21IYW5kbGVyfSBvbkN1c3RvbU1hcmtkb3duU3R5bGU9e3RoaXMubWFya2Rvd25TdHlsZUN1c3RvbUhhbmRsZXJ9IC8+XG4gICAgICAgICAgPE1hcmtkb3duQ29udGFpbmVyRGl2IG9uQ3VzdG9tS2V5VXA9e3RoaXMua2V5VXBDdXN0b21IYW5kbGVyfSAvPlxuICAgICAgICAgIDxNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2IG9uQ3VzdG9tS2V5VXA9e3RoaXMua2V5VXBDdXN0b21IYW5kbGVyfSAvPlxuICAgICAgICA8L0xlZnRTaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFJpZ2h0VGFiQnV0dG9uc0RpdiBvbkN1c3RvbUNTUz17dGhpcy5jc3NDdXN0b21IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkN1c3RvbUhUTUw9e3RoaXMuaHRtbEN1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tUHJldmlldz17dGhpcy5wcmV2aWV3Q3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DdXN0b21QbGFpblRleHQ9e3RoaXMucGxhaW5UZXh0Q3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UGFnZUJ1dHRvbnNEaXYgb25DdXN0b21QYWdlVXBkYXRlPXt0aGlzLnBhZ2VVcGRhdGVDdXN0b21IYW5kbGVyfSAvPlxuICAgICAgICAgICAgPENTU0NvbnRhaW5lckRpdi8+XG4gICAgICAgICAgICA8SFRNTENvbnRhaW5lckRpdi8+XG4gICAgICAgICAgICA8UHJldmlld0NvbnRhaW5lckRpdi8+XG4gICAgICAgICAgICA8UGxhaW5UZXh0Q29udGFpbmVyRGl2Lz5cbiAgICAgICAgICAgIDxIVE1MUGFyc2VUcmVlVGV4dGFyZWEvPlxuICAgICAgICAgICAgPENTU1BhcnNlVHJlZVRleHRhcmVhLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsTWFya2Rvd24sIGluaXRpYWxNYXJrZG93blN0eWxlIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGUgPSBpbml0aWFsTWFya2Rvd25TdHlsZSwgLy8vXG4gICAgICAgICAgbWFya2Rvd24gPSBpbml0aWFsTWFya2Rvd247IC8vL1xuXG4gICAgdGhpcy5zZXRNYXJrZG93blN0eWxlKG1hcmtkb3duU3R5bGUpO1xuXG4gICAgdGhpcy5zZXRNYXJrZG93bihtYXJrZG93bik7XG4gIH1cblxuICBzdGF0aWMgaW5pdGlhbE1hcmtkb3duID0gaW5pdGlhbE1hcmtkb3duO1xuXG4gIHN0YXRpYyBpbml0aWFsTWFya2Rvd25TdHlsZSA9IGBwcmltYXJ5SGVhZGluZyB7XG4gICBjb2xvcjogcmVkO1xuICAgICBcbiAgIGxpbmUge1xuICAgICBjb2xvcjogYmx1ZTtcbiAgIH1cbn1gO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJtYXJrZG93blN0eWxlRWxlbWVudFwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDFyZW07XG4gIFxuYDtcblxuZnVuY3Rpb24gcGF0aFRvVVJMKHBhdGgpIHtcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vc3RhdGljLmRqYWxiYXQuY29tLyR7cGF0aH1gO1xuXG4gIHJldHVybiB1cmw7XG59XG4iXSwibmFtZXMiOlsibWFya2Rvd25MZXhlciIsIk1hcmtkb3duTGV4ZXIiLCJmcm9tTm90aGluZyIsIm1hcmtkb3duUGFyc2VyIiwiTWFya2Rvd25QYXJzZXIiLCJtYXJrZG93blN0eWxlTGV4ZXIiLCJNYXJrZG93blN0eWxlTGV4ZXIiLCJtYXJrZG93blN0eWxlUGFyc2VyIiwiTWFya2Rvd25TdHlsZVBhcnNlciIsIlZpZXciLCJwYWdlVXBkYXRlQ3VzdG9tSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImluZGV4IiwidXBkYXRlSFRNTCIsIm1hcmtkb3duU3R5bGVDdXN0b21IYW5kbGVyIiwibWFya2Rvd25TdHlsZSIsIm1hcmtkb3duQ3VzdG9tSGFuZGxlciIsIm1hcmtkb3duIiwicGxhaW5UZXh0Q3VzdG9tSGFuZGxlciIsInBsYWluVGV4dCIsInByZXZpZXdDdXN0b21IYW5kbGVyIiwicHJldmlldyIsImtleVVwQ3VzdG9tSGFuZGxlciIsInVwZGF0ZSIsImh0bWxDdXN0b21IYW5kbGVyIiwiaHRtbCIsImNzc0N1c3RvbUhhbmRsZXIiLCJjc3MiLCJ1cGRhdGVNYXJrZG93blN0eWxlIiwidXBkYXRlTWFya2Rvd24iLCJ1cGRhdGVDU1MiLCJnZXRNYXJrZG93blN0eWxlIiwibGV4ZXIiLCJwYXJzZXIiLCJjb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJzdGFydFJ1bGUiLCJnZXRTdGFydFJ1bGUiLCJub2RlIiwicGFyc2UiLCJyZXNldE1hcmtkb3duU3R5bGVUb2tlbnMiLCJyZXNldFRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSIsImNsZWFyTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhIiwicGFyc2VUcmVlIiwiYXNQYXJzZVRyZWUiLCJtYXJrZG93blN0eWxlVG9rZW5zIiwidG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlIiwic2V0TWFya2Rvd25TdHlsZVRva2VucyIsInNldFRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSIsInVwZGF0ZU1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYSIsImdldE1hcmtkb3duIiwicmVzZXRNYXJrZG93blRva2VucyIsInJlc2V0VG9wbW9zdE1hcmtkb3duTm9kZSIsImNsZWFyTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSIsImNvbnRleHQiLCJ0b3Btb3N0TWFya2Rvd25Ob2RlIiwiaW1wb3J0ZXIiLCJyZXNvbHZlIiwidG9wbW9zdE1hcmtkb3duTm9kZVBhcnNlVHJlZSIsIm1hcmtkb3duUGFyc2VUcmVlIiwibWFya2Rvd25Ub2tlbnMiLCJzZXRNYXJrZG93blRva2VucyIsInNldFRvcG1vc3RNYXJrZG93bk5vZGUiLCJ1cGRhdGVNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhIiwiY2xlYXJYTVAiLCJjbGVhclByZXZpZXdEaXYiLCJjbGVhclBsYWluVGV4dFRleHRhcmVhIiwiY2xlYXJIVE1MUGFyc2VUcmVlVGV4dGFyZWEiLCJjbGVhclBhZ2VCdXR0b25zRGl2IiwiZ2V0VG9wbW9zdE1hcmtkb3duTm9kZSIsInRvcG1vc3RIVE1MTm9kZSIsInRvcG1vc3RIVE1MTm9kZUZyb21NYXJrZG93bk5vZGUiLCJnZXRNYXJrZG93blRva2VucyIsImluZGV4T3B0aW9ucyIsImRpdmlzaW9uSFRNTE5PZGUiLCJnZXREaXZpc2lvbkhUTUxOb2RlQXQiLCJkaXZpc2lvbkhUTUxOT2RlUGFyc2VUcmVlIiwiaHRtbFBhcnNlVHJlZSIsIm11bHRpcGxpY2l0eSIsImdldE11bHRpcGxpY2l0eSIsImxlbmd0aCIsInBhdGhUb1VSTCIsInVwZGF0ZVhNUCIsInVwZGF0ZVByZXZpZXdEaXYiLCJ1cGRhdGVQbGFpblRleHRUZXh0YXJlYSIsInVwZGF0ZUhUTUxQYXJzZVRyZWVUZXh0YXJlYSIsInVwZGF0ZVBhZ2VCdXR0b25zRGl2IiwibWFya2Rvd25TdHlsZUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwibWFya2Rvd25TdHlsZUVsZW1lbnRDU1MiLCJnZXRUb3Btb3N0TWFya2Rvd25TdHlsZU5vZGUiLCJ0b3Btb3N0Q1NTTm9kZSIsInRvcG1vc3RDU1NOb2RlRnJvbU1hcmtkb3duU3R5bGVOb2RlIiwiZ2V0TWFya2Rvd25TdHlsZVRva2VucyIsInNlbGVjdG9yc1N0cmluZyIsIlBSRVZJRVdFRF9ESVZfU0VMRUNUT1JTX1NUUklORyIsInRvcG1vc3RDU1NOb2RlUGFyc2VUcmVlIiwidG9wbW9zdENTU05vZGVDU1MiLCJhc0NTUyIsImNzc1BhcnNlVHJlZSIsInVwZGF0ZUNTU1BhcnNlVHJlZVRleHRhcmVhIiwic2V0Q1NTIiwiaGlkZU1hcmtkb3duQ29udGFpbmVyRGl2Iiwic2hvd01hcmtkb3duU3R5bGVDb250YWluZXJEaXYiLCJzaG93TWFya2Rvd25Db250YWluZXJEaXYiLCJoaWRlTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiIsImhpZGVDU1NDb250YWluZXJEaXYiLCJoaWRlSFRNTENvbnRhaW5lckRpdiIsImhpZGVQcmV2aWV3Q29udGFpbmVyRGl2Iiwic2hvd1BsYWluVGV4dENvbnRhaW5lckRpdiIsImhpZGVDU1NQYXJzZVRyZWVUZXh0YXJlYSIsInNob3dIVE1MUGFyc2VUcmVlVGV4dGFyZWEiLCJzaG93UHJldmlld0NvbnRhaW5lckRpdiIsImhpZGVQbGFpblRleHRDb250YWluZXJEaXYiLCJzaG93SFRNTENvbnRhaW5lckRpdiIsInNob3dDU1NDb250YWluZXJEaXYiLCJzaG93Q1NTUGFyc2VUcmVlVGV4dGFyZWEiLCJoaWRlSFRNTFBhcnNlVHJlZVRleHRhcmVhIiwiZ2V0U3RhdGUiLCJ0b3Btb3N0TU1hcmtkb3duTm9kZSIsInRvcG1vc3RNTWFya2Rvd25TdHlsZU5vZGUiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiZGlkTW91bnQiLCJ3aWxsVW5tb3VudCIsImNoaWxkRWxlbWVudHMiLCJDb2x1bW5zRGl2IiwiTGVmdFNpemVhYmxlRGl2IiwiTGVmdFRhYkJ1dHRvbnNEaXYiLCJvbkN1c3RvbU1hcmtkb3duIiwib25DdXN0b21NYXJrZG93blN0eWxlIiwiTWFya2Rvd25Db250YWluZXJEaXYiLCJvbkN1c3RvbUtleVVwIiwiTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJDb2x1bW5EaXYiLCJSb3dzRGl2IiwiUmlnaHRUYWJCdXR0b25zRGl2Iiwib25DdXN0b21DU1MiLCJvbkN1c3RvbUhUTUwiLCJvbkN1c3RvbVByZXZpZXciLCJvbkN1c3RvbVBsYWluVGV4dCIsIlBhZ2VCdXR0b25zRGl2Iiwib25DdXN0b21QYWdlVXBkYXRlIiwiQ1NTQ29udGFpbmVyRGl2IiwiSFRNTENvbnRhaW5lckRpdiIsIlByZXZpZXdDb250YWluZXJEaXYiLCJQbGFpblRleHRDb250YWluZXJEaXYiLCJIVE1MUGFyc2VUcmVlVGV4dGFyZWEiLCJDU1NQYXJzZVRyZWVUZXh0YXJlYSIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiY29uc3RydWN0b3IiLCJpbml0aWFsTWFya2Rvd24iLCJpbml0aWFsTWFya2Rvd25TdHlsZSIsInNldE1hcmtkb3duU3R5bGUiLCJzZXRNYXJrZG93biIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsInBhdGgiLCJ1cmwiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTZjQTs7O2VBQUE7OztvRUEzY3NCO29CQUVFOzBCQUM0QztxQkFDbUI7bUVBRTlEO2tFQUNFOzJEQUNDOzBEQUNBOzJEQUNDOzREQUNDOzREQUNDOzhEQUNDOytEQUNDOzJEQUNBOzRE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