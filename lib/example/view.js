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
var _occamdom = require("occam-dom");
var _easylayout = require("easy-layout");
var _index = require("../index");
var _pageButtons = /*#__PURE__*/ _interop_require_default(require("./view/div/pageButtons"));
var _left = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/left"));
var _css = /*#__PURE__*/ _interop_require_default(require("./view/div/container/css"));
var _topmost = /*#__PURE__*/ _interop_require_default(require("../node/html/topmost"));
var _html = /*#__PURE__*/ _interop_require_default(require("./view/div/container/html"));
var _left1 = /*#__PURE__*/ _interop_require_default(require("./view/div/tabButtons/left"));
var _right = /*#__PURE__*/ _interop_require_default(require("./view/div/tabButtons/right"));
var _preview = /*#__PURE__*/ _interop_require_default(require("./view/div/container/preview"));
var _markdown = /*#__PURE__*/ _interop_require_default(require("./view/div/container/markdown"));
var _plainText = /*#__PURE__*/ _interop_require_default(require("./view/div/container/plainText"));
var _html1 = /*#__PURE__*/ _interop_require_default(require("./view/textarea/parseTree/html"));
var _markdownStyle = /*#__PURE__*/ _interop_require_default(require("./view/div/container/markdownStyle"));
var _query = require("../utilities/query");
var _importer = require("./importer");
var _queries = /*#__PURE__*/ _interop_require_default(require("../queries"));
var _html2 = /*#__PURE__*/ _interop_require_default(require("../node/html"));
var _html3 = /*#__PURE__*/ _interop_require_default(require("../map/node/html"));
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
var topmostNodeFromOuterNodes = _occamdom.nodeUtilities.topmostNodeFromOuterNodes;
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _call_super(this, View, arguments), _define_property(_this, "markdownStyleCustomHandler", function(event, element) {
            _this.markdownStyle();
        }), _define_property(_this, "pageUpdateCustomHandler", function(event, element, index) {
            _this.clearPage();
            _this.updatePage(index);
        }), _define_property(_this, "plainTextCustomHandler", function(event, element) {
            _this.plainText();
        }), _define_property(_this, "markdownCustomHandler", function(event, element) {
            _this.markdown();
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
                this.updatePage();
            }
        },
        {
            key: "clearPage",
            value: function clearPage() {
                this.clearXMP();
                this.clearPreviewDiv();
                this.clearHTMLParseTreeTextarea();
            }
        },
        {
            key: "updatePage",
            value: function updatePage() {
                var index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
                var tokens = this.getTokens(), topmostMarkdownNode = this.getTopmostMarkdownNode(), topmostHTMLNode = topmostHTMLNodeFromTopmostMarkdownNode(topmostMarkdownNode), divisionHTMLNOde = topmostHTMLNode.getDivisionHTMLNodeAt(index), context = {
                    tokens: tokens,
                    pathToURL: pathToURL
                };
                this.updateXMP(divisionHTMLNOde, context);
                this.updatePreviewDiv(divisionHTMLNOde, context);
                this.updatePlainTextTextarea(divisionHTMLNOde, context);
                var multiplicity = topmostHTMLNode.getMultiplicity(), length = multiplicity, parseTree = divisionHTMLNOde.asParseTree(), htmlParseTree = parseTree; ///
                this.updatePageButtonsDiv(length, index);
                this.updateHTMLParseTreeTextarea(htmlParseTree);
            }
        },
        {
            key: "updateMarkdown",
            value: function updateMarkdown() {
                var markdown = this.getMarkdown(), lexer = markdownLexer, parser = markdownParser, content = markdown, tokens = lexer.tokenise(content), node = parser.parse(tokens);
                if (node === null) {
                    this.resetTokens();
                    this.resetTopmostMarkdownNode();
                    this.clearMarkdownParseTreeTextarea();
                    this.clearPageButtonsDiv();
                    this.clearPage();
                    return;
                }
                var topmostMarkdownNode = node, context = {
                    tokens: tokens,
                    importer: _importer.importer,
                    nodeFromTokens: nodeFromTokens,
                    tokensFromContent: tokensFromContent
                };
                topmostMarkdownNode.resolve(context);
                var parseTree = topmostMarkdownNode.asParseTree(tokens), markdownParseTree = parseTree; ///
                this.setTokens(tokens);
                this.setTopmostMarkdownNode(topmostMarkdownNode);
                this.updateMarkdownParseTreeTextarea(markdownParseTree);
            }
        },
        {
            key: "updateMarkdownStyle",
            value: function updateMarkdownStyle() {
                var markdownStyleElement = this.properties.markdownStyleElement, markdownStyle = this.getMarkdownStyle(), css = markdownStyleElement.update(markdownStyle);
                this.setCSS(css);
                var lexer = markdownStyleLexer, parser = markdownStyleParser, content = markdownStyle, tokens = lexer.tokenise(content), startRule = parser.getStartRule(), node = parser.parse(tokens, startRule);
                if (node !== null) {
                    var parseTree = node.asParseTree(tokens);
                    this.updateMarkdownStyleParseTreeTextarea(parseTree);
                } else {
                    this.clearMarkdownStyleParseTreeTextarea();
                }
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
            key: "plainText",
            value: function plainText() {
                this.hideCSSContainerDiv();
                this.hideHTMLContainerDiv();
                this.hidePreviewContainerDiv();
                this.showPlainTextContainerDiv();
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
            key: "preview",
            value: function preview() {
                this.hideCSSContainerDiv();
                this.hideHTMLContainerDiv();
                this.showPreviewContainerDiv();
                this.hidePlainTextContainerDiv();
            }
        },
        {
            key: "html",
            value: function html() {
                this.hideCSSContainerDiv();
                this.showHTMLContainerDiv();
                this.hidePreviewContainerDiv();
                this.hidePlainTextContainerDiv();
            }
        },
        {
            key: "css",
            value: function css() {
                this.showCSSContainerDiv();
                this.hideHTMLContainerDiv();
                this.hidePreviewContainerDiv();
                this.hidePlainTextContainerDiv();
            }
        },
        {
            key: "resetTokens",
            value: function resetTokens() {
                var tokens = null;
                this.setTokens(tokens);
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
            key: "getTokens",
            value: function getTokens() {
                var tokens = this.getState().tokens;
                return tokens;
            }
        },
        {
            key: "getTopmostMarkdownNode",
            value: function getTopmostMarkdownNode() {
                var topmostMarkdownNode = this.getState().topmostMarkdownNode;
                return topmostMarkdownNode;
            }
        },
        {
            key: "setTokens",
            value: function setTokens(tokens) {
                this.updateState({
                    tokens: tokens
                });
            }
        },
        {
            key: "setTopmostMarkdownNode",
            value: function setTopmostMarkdownNode(topmostMarkdownNode) {
                this.updateState({
                    topmostMarkdownNode: topmostMarkdownNode
                });
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var tokens = null, topmostMarkdownNode = null;
                this.setState({
                    tokens: tokens,
                    topmostMarkdownNode: topmostMarkdownNode
                });
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
                }), /*#__PURE__*/ React.createElement(_css.default, null), /*#__PURE__*/ React.createElement(_html.default, null), /*#__PURE__*/ React.createElement(_preview.default, null), /*#__PURE__*/ React.createElement(_plainText.default, null), /*#__PURE__*/ React.createElement(_html1.default, null))));
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                this.setInitialState();
                var _this_constructor = this.constructor, _$initialMarkdown = _this_constructor.initialMarkdown, initialMarkdownStyle = _this_constructor.initialMarkdownStyle, markdownStyle = initialMarkdownStyle, markdown = _$initialMarkdown; ///
                this.setMarkdown(markdown);
                this.setMarkdownStyle(markdownStyle);
                this.update();
                this.css();
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "initialMarkdown", _importer.initialMarkdown);
_define_property(View, "initialMarkdownStyle", "width: 100%;\nheight: 100%;\nfont-size: 2rem;  \n\nblockListing {\n  colour: white;\n  text-align: left;\n  font-family: monospace;\n  background-colour: black;\n}\n");
_define_property(View, "tagName", "div");
_define_property(View, "ignoredProperties", [
    "markdownStyleElement"
]);
_define_property(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easywithstyle.default)(View)(_templateObject());
function tokensFromContent(content) {
    var tokens = markdownLexer.tokenise(content);
    return tokens;
}
function nodeFromTokens(tokens) {
    var startRuleName = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    var ruleMap = markdownParser.getRuleMap(), startRule = startRuleName !== null ? ruleMap[startRuleName] : markdownParser.getStartRule(), node = markdownParser.parse(tokens, startRule);
    return node;
}
function pathToURL(path) {
    var url = "https://static.djalbat.com/".concat(path);
    return url;
}
function ClassFromOuterNode(outerNode) {
    var Class;
    if (outerNode === null) {
        Class = _topmost.default; ///
    } else {
        var nonTerminalNode = outerNode, ruleName = nonTerminalNode.getRuleName();
        Class = _html3.default[ruleName] || _html2.default;
    }
    return Class;
}
function topmostHTMLNodeFromTopmostMarkdownNode(topmostMarkdownNode) {
    var node = topmostMarkdownNode, nodes = (0, _query.nodesFromNodeAndQueries)(node, _queries.default), topmostHTMLNode = topmostNodeFromOuterNodes(ClassFromOuterNode, nodes);
    return topmostHTMLNode;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgbm9kZVV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1kb21cIjtcbmltcG9ydCB7IFJvd3NEaXYsIENvbHVtbkRpdiwgQ29sdW1uc0RpdiwgVmVydGljYWxTcGxpdHRlckRpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuaW1wb3J0IHsgTWFya2Rvd25MZXhlciwgTWFya2Rvd25QYXJzZXIsIE1hcmtkb3duU3R5bGVMZXhlciwgTWFya2Rvd25TdHlsZVBhcnNlciB9IGZyb20gXCIuLi9pbmRleFwiO1xuXG5pbXBvcnQgUGFnZUJ1dHRvbnNEaXYgZnJvbSBcIi4vdmlldy9kaXYvcGFnZUJ1dHRvbnNcIjtcbmltcG9ydCBMZWZ0U2l6ZWFibGVEaXYgZnJvbSBcIi4vdmlldy9kaXYvc2l6ZWFibGUvbGVmdFwiO1xuaW1wb3J0IENTU0NvbnRhaW5lckRpdiBmcm9tIFwiLi92aWV3L2Rpdi9jb250YWluZXIvY3NzXCI7XG5pbXBvcnQgVG9wbW9zdEhUTUxOb2RlIGZyb20gXCIuLi9ub2RlL2h0bWwvdG9wbW9zdFwiO1xuaW1wb3J0IEhUTUxDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL2h0bWxcIjtcbmltcG9ydCBMZWZ0VGFiQnV0dG9uc0RpdiBmcm9tIFwiLi92aWV3L2Rpdi90YWJCdXR0b25zL2xlZnRcIjtcbmltcG9ydCBSaWdodFRhYkJ1dHRvbnNEaXYgZnJvbSBcIi4vdmlldy9kaXYvdGFiQnV0dG9ucy9yaWdodFwiO1xuaW1wb3J0IFByZXZpZXdDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL3ByZXZpZXdcIjtcbmltcG9ydCBNYXJrZG93bkNvbnRhaW5lckRpdiBmcm9tIFwiLi92aWV3L2Rpdi9jb250YWluZXIvbWFya2Rvd25cIjtcbmltcG9ydCBQbGFpblRleHRDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL3BsYWluVGV4dFwiO1xuaW1wb3J0IEhUTUxQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL3BhcnNlVHJlZS9odG1sXCI7XG5pbXBvcnQgTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiBmcm9tIFwiLi92aWV3L2Rpdi9jb250YWluZXIvbWFya2Rvd25TdHlsZVwiO1xuXG5pbXBvcnQgeyBub2Rlc0Zyb21Ob2RlQW5kUXVlcmllcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGltcG9ydGVyLCBpbml0aWFsTWFya2Rvd24gfSBmcm9tIFwiLi9pbXBvcnRlclwiO1xuXG5pbXBvcnQgcXVlcmllcyBmcm9tIFwiLi4vcXVlcmllc1wiO1xuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi9ub2RlL2h0bWxcIjtcbmltcG9ydCBodG1sTm9kZU1hcCBmcm9tIFwiLi4vbWFwL25vZGUvaHRtbFwiO1xuXG5jb25zdCBtYXJrZG93bkxleGVyID0gTWFya2Rvd25MZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgbWFya2Rvd25QYXJzZXIgPSBNYXJrZG93blBhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgbWFya2Rvd25TdHlsZUxleGVyID0gTWFya2Rvd25TdHlsZUxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBtYXJrZG93blN0eWxlUGFyc2VyID0gTWFya2Rvd25TdHlsZVBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jb25zdCB7IHRvcG1vc3ROb2RlRnJvbU91dGVyTm9kZXMgfSA9IG5vZGVVdGlsaXRpZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgbWFya2Rvd25TdHlsZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLm1hcmtkb3duU3R5bGUoKTtcbiAgfVxuXG4gIHBhZ2VVcGRhdGVDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIHRoaXMuY2xlYXJQYWdlKCk7XG5cbiAgICB0aGlzLnVwZGF0ZVBhZ2UoaW5kZXgpO1xuICB9XG5cbiAgcGxhaW5UZXh0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMucGxhaW5UZXh0KCk7XG4gIH1cblxuICBtYXJrZG93bkN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLm1hcmtkb3duKCk7XG4gIH1cblxuICBwcmV2aWV3Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMucHJldmlldygpO1xuICB9XG5cbiAga2V5VXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIGh0bWxDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5odG1sKCk7XG4gIH1cblxuICBjc3NDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5jc3MoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnVwZGF0ZU1hcmtkb3duU3R5bGUoKTtcbiAgICB0aGlzLnVwZGF0ZU1hcmtkb3duKCk7XG4gICAgdGhpcy51cGRhdGVQYWdlKCk7XG4gIH1cblxuICBjbGVhclBhZ2UoKSB7XG4gICAgdGhpcy5jbGVhclhNUCgpO1xuICAgIHRoaXMuY2xlYXJQcmV2aWV3RGl2KCk7XG4gICAgdGhpcy5jbGVhckhUTUxQYXJzZVRyZWVUZXh0YXJlYSgpO1xuICB9XG5cbiAgdXBkYXRlUGFnZShpbmRleCA9IDApIHtcbiAgICBjb25zdCB0b2tlbnMgPSB0aGlzLmdldFRva2VucygpLFxuICAgICAgICAgIHRvcG1vc3RNYXJrZG93bk5vZGUgPSB0aGlzLmdldFRvcG1vc3RNYXJrZG93bk5vZGUoKSxcbiAgICAgICAgICB0b3Btb3N0SFRNTE5vZGUgPSB0b3Btb3N0SFRNTE5vZGVGcm9tVG9wbW9zdE1hcmtkb3duTm9kZSh0b3Btb3N0TWFya2Rvd25Ob2RlKSxcbiAgICAgICAgICBkaXZpc2lvbkhUTUxOT2RlID0gdG9wbW9zdEhUTUxOb2RlLmdldERpdmlzaW9uSFRNTE5vZGVBdChpbmRleCksXG4gICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgIHRva2VucyxcbiAgICAgICAgICAgIHBhdGhUb1VSTFxuICAgICAgICAgIH07XG5cbiAgICB0aGlzLnVwZGF0ZVhNUChkaXZpc2lvbkhUTUxOT2RlLCBjb250ZXh0KTtcblxuICAgIHRoaXMudXBkYXRlUHJldmlld0RpdihkaXZpc2lvbkhUTUxOT2RlLCBjb250ZXh0KTtcblxuICAgIHRoaXMudXBkYXRlUGxhaW5UZXh0VGV4dGFyZWEoZGl2aXNpb25IVE1MTk9kZSwgY29udGV4dCk7XG5cbiAgICBjb25zdCBtdWx0aXBsaWNpdHkgPSB0b3Btb3N0SFRNTE5vZGUuZ2V0TXVsdGlwbGljaXR5KCksXG4gICAgICAgICAgbGVuZ3RoID0gbXVsdGlwbGljaXR5LCAgLy8vXG4gICAgICAgICAgcGFyc2VUcmVlID0gZGl2aXNpb25IVE1MTk9kZS5hc1BhcnNlVHJlZSgpLFxuICAgICAgICAgIGh0bWxQYXJzZVRyZWUgPSBwYXJzZVRyZWU7IC8vL1xuXG4gICAgdGhpcy51cGRhdGVQYWdlQnV0dG9uc0RpdihsZW5ndGgsIGluZGV4KTtcblxuICAgIHRoaXMudXBkYXRlSFRNTFBhcnNlVHJlZVRleHRhcmVhKGh0bWxQYXJzZVRyZWUpO1xuICB9XG5cbiAgdXBkYXRlTWFya2Rvd24oKSB7XG4gICAgY29uc3QgbWFya2Rvd24gPSB0aGlzLmdldE1hcmtkb3duKCksXG4gICAgICAgICAgbGV4ZXIgPSBtYXJrZG93bkxleGVyLCAgLy8vXG4gICAgICAgICAgcGFyc2VyID0gIG1hcmtkb3duUGFyc2VyLCAvLy9cbiAgICAgICAgICBjb250ZW50ID0gbWFya2Rvd24sIC8vL1xuICAgICAgICAgIHRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICB0aGlzLnJlc2V0VG9rZW5zKCk7XG5cbiAgICAgIHRoaXMucmVzZXRUb3Btb3N0TWFya2Rvd25Ob2RlKCk7XG5cbiAgICAgIHRoaXMuY2xlYXJNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhKCk7XG5cbiAgICAgIHRoaXMuY2xlYXJQYWdlQnV0dG9uc0RpdigpO1xuXG4gICAgICB0aGlzLmNsZWFyUGFnZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdG9wbW9zdE1hcmtkb3duTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICB0b2tlbnMsXG4gICAgICAgICAgICBpbXBvcnRlcixcbiAgICAgICAgICAgIG5vZGVGcm9tVG9rZW5zLFxuICAgICAgICAgICAgdG9rZW5zRnJvbUNvbnRlbnRcbiAgICAgICAgICB9O1xuXG4gICAgdG9wbW9zdE1hcmtkb3duTm9kZS5yZXNvbHZlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgcGFyc2VUcmVlID0gdG9wbW9zdE1hcmtkb3duTm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpLFxuICAgICAgICAgIG1hcmtkb3duUGFyc2VUcmVlID0gcGFyc2VUcmVlOyAvLy9cblxuICAgIHRoaXMuc2V0VG9rZW5zKHRva2Vucyk7XG5cbiAgICB0aGlzLnNldFRvcG1vc3RNYXJrZG93bk5vZGUodG9wbW9zdE1hcmtkb3duTm9kZSk7XG5cbiAgICB0aGlzLnVwZGF0ZU1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEobWFya2Rvd25QYXJzZVRyZWUpO1xuICB9XG5cbiAgdXBkYXRlTWFya2Rvd25TdHlsZSgpIHtcbiAgICBjb25zdCB7IG1hcmtkb3duU3R5bGVFbGVtZW50IH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgbWFya2Rvd25TdHlsZSA9IHRoaXMuZ2V0TWFya2Rvd25TdHlsZSgpLFxuICAgICAgICAgIGNzcyA9IG1hcmtkb3duU3R5bGVFbGVtZW50LnVwZGF0ZShtYXJrZG93blN0eWxlKTtcblxuICAgIHRoaXMuc2V0Q1NTKGNzcyk7XG5cbiAgICBjb25zdCBsZXhlciA9IG1hcmtkb3duU3R5bGVMZXhlciwgLy8vXG4gICAgICAgICAgcGFyc2VyID0gbWFya2Rvd25TdHlsZVBhcnNlciwgLy8vXG4gICAgICAgICAgY29udGVudCA9IG1hcmtkb3duU3R5bGUsICAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBzdGFydFJ1bGUgPSBwYXJzZXIuZ2V0U3RhcnRSdWxlKCksXG4gICAgICAgICAgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMsIHN0YXJ0UnVsZSk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuXG4gICAgICB0aGlzLnVwZGF0ZU1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYShwYXJzZVRyZWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsZWFyTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhKCk7XG4gICAgfVxuICB9XG5cbiAgbWFya2Rvd25TdHlsZSgpIHtcbiAgICB0aGlzLmhpZGVNYXJrZG93bkNvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuc2hvd01hcmtkb3duU3R5bGVDb250YWluZXJEaXYoKTtcbiAgfVxuXG4gIHBsYWluVGV4dCgpIHtcbiAgICB0aGlzLmhpZGVDU1NDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVIVE1MQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlUHJldmlld0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuc2hvd1BsYWluVGV4dENvbnRhaW5lckRpdigpO1xuICB9XG5cbiAgbWFya2Rvd24oKSB7XG4gICAgdGhpcy5zaG93TWFya2Rvd25Db250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2KCk7XG4gIH1cblxuICBwcmV2aWV3KCkge1xuICAgIHRoaXMuaGlkZUNTU0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZUhUTUxDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLnNob3dQcmV2aWV3Q29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlUGxhaW5UZXh0Q29udGFpbmVyRGl2KCk7XG4gIH1cblxuICBodG1sKCkge1xuICAgIHRoaXMuaGlkZUNTU0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuc2hvd0hUTUxDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQcmV2aWV3Q29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlUGxhaW5UZXh0Q29udGFpbmVyRGl2KCk7XG4gIH1cblxuICBjc3MoKSB7XG4gICAgdGhpcy5zaG93Q1NTQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlSFRNTENvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVByZXZpZXdDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQbGFpblRleHRDb250YWluZXJEaXYoKTtcbiAgfVxuXG4gIHJlc2V0VG9rZW5zKCkge1xuICAgIGNvbnN0IHRva2VucyA9IG51bGw7XG5cbiAgICB0aGlzLnNldFRva2Vucyh0b2tlbnMpO1xuICB9XG5cbiAgcmVzZXRUb3Btb3N0TWFya2Rvd25Ob2RlKCkge1xuICAgIGNvbnN0IHRvcG1vc3RNYXJrZG93bk5vZGUgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRUb3Btb3N0TWFya2Rvd25Ob2RlKHRvcG1vc3RNYXJrZG93bk5vZGUpO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIGNvbnN0IHsgdG9rZW5zIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgZ2V0VG9wbW9zdE1hcmtkb3duTm9kZSgpIHtcbiAgICBjb25zdCB7IHRvcG1vc3RNYXJrZG93bk5vZGUgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiB0b3Btb3N0TWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgc2V0VG9rZW5zKHRva2Vucykge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgdG9rZW5zXG4gICAgfSk7XG4gIH1cblxuICBzZXRUb3Btb3N0TWFya2Rvd25Ob2RlKHRvcG1vc3RNYXJrZG93bk5vZGUpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHRvcG1vc3RNYXJrZG93bk5vZGVcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIHRvcG1vc3RNYXJrZG93bk5vZGUgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0b2tlbnMsXG4gICAgICB0b3Btb3N0TWFya2Rvd25Ob2RlXG4gICAgfSk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8TGVmdFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxMZWZ0VGFiQnV0dG9uc0RpdiBvbkN1c3RvbU1hcmtkb3duPXt0aGlzLm1hcmtkb3duQ3VzdG9tSGFuZGxlcn0gb25DdXN0b21NYXJrZG93blN0eWxlPXt0aGlzLm1hcmtkb3duU3R5bGVDdXN0b21IYW5kbGVyfSAvPlxuICAgICAgICAgIDxNYXJrZG93bkNvbnRhaW5lckRpdiBvbkN1c3RvbUtleVVwPXt0aGlzLmtleVVwQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgICA8TWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiBvbkN1c3RvbUtleVVwPXt0aGlzLmtleVVwQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgPC9MZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2Lz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxSaWdodFRhYkJ1dHRvbnNEaXYgb25DdXN0b21DU1M9e3RoaXMuY3NzQ3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DdXN0b21IVE1MPXt0aGlzLmh0bWxDdXN0b21IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkN1c3RvbVByZXZpZXc9e3RoaXMucHJldmlld0N1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tUGxhaW5UZXh0PXt0aGlzLnBsYWluVGV4dEN1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFBhZ2VCdXR0b25zRGl2IG9uQ3VzdG9tUGFnZVVwZGF0ZT17dGhpcy5wYWdlVXBkYXRlQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxDU1NDb250YWluZXJEaXYvPlxuICAgICAgICAgICAgPEhUTUxDb250YWluZXJEaXYvPlxuICAgICAgICAgICAgPFByZXZpZXdDb250YWluZXJEaXYvPlxuICAgICAgICAgICAgPFBsYWluVGV4dENvbnRhaW5lckRpdi8+XG4gICAgICAgICAgICA8SFRNTFBhcnNlVHJlZVRleHRhcmVhLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsTWFya2Rvd24sIGluaXRpYWxNYXJrZG93blN0eWxlIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGUgPSBpbml0aWFsTWFya2Rvd25TdHlsZSwgLy8vXG4gICAgICAgICAgbWFya2Rvd24gPSBpbml0aWFsTWFya2Rvd247IC8vL1xuXG4gICAgdGhpcy5zZXRNYXJrZG93bihtYXJrZG93bik7XG5cbiAgICB0aGlzLnNldE1hcmtkb3duU3R5bGUobWFya2Rvd25TdHlsZSk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgdGhpcy5jc3MoKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0aWFsTWFya2Rvd24gPSBpbml0aWFsTWFya2Rvd247XG5cbiAgc3RhdGljIGluaXRpYWxNYXJrZG93blN0eWxlID0gYHdpZHRoOiAxMDAlO1xuaGVpZ2h0OiAxMDAlO1xuZm9udC1zaXplOiAycmVtOyAgXG5cbmJsb2NrTGlzdGluZyB7XG4gIGNvbG91cjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIGJhY2tncm91bmQtY29sb3VyOiBibGFjaztcbn1cbmA7XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm1hcmtkb3duU3R5bGVFbGVtZW50XCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgcGFkZGluZzogMXJlbTtcbiAgXG5gO1xuXG5mdW5jdGlvbiB0b2tlbnNGcm9tQ29udGVudChjb250ZW50KSB7XG4gIGNvbnN0IHRva2VucyA9IG1hcmtkb3duTGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgcmV0dXJuIHRva2Vucztcbn1cblxuZnVuY3Rpb24gbm9kZUZyb21Ub2tlbnModG9rZW5zLCBzdGFydFJ1bGVOYW1lID0gbnVsbCkge1xuICBjb25zdCBydWxlTWFwID0gbWFya2Rvd25QYXJzZXIuZ2V0UnVsZU1hcCgpLFxuICAgICAgICBzdGFydFJ1bGUgPSAoc3RhcnRSdWxlTmFtZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgIHJ1bGVNYXBbc3RhcnRSdWxlTmFtZV0gOlxuICAgICAgICAgICAgICAgICAgICAgICAgbWFya2Rvd25QYXJzZXIuZ2V0U3RhcnRSdWxlKCksXG4gICAgICAgIG5vZGUgPSBtYXJrZG93blBhcnNlci5wYXJzZSh0b2tlbnMsIHN0YXJ0UnVsZSk7XG5cbiAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIHBhdGhUb1VSTChwYXRoKSB7XG4gIGNvbnN0IHVybCA9IGBodHRwczovL3N0YXRpYy5kamFsYmF0LmNvbS8ke3BhdGh9YDtcblxuICByZXR1cm4gdXJsO1xufVxuXG5mdW5jdGlvbiBDbGFzc0Zyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7XG4gIGxldCBDbGFzcztcblxuICBpZiAob3V0ZXJOb2RlID09PSBudWxsKSB7XG4gICAgQ2xhc3MgPSBUb3Btb3N0SFRNTE5vZGU7ICAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBvdXRlck5vZGUsICAvLy9cbiAgICAgICAgICBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gICAgQ2xhc3MgPSBodG1sTm9kZU1hcFtydWxlTmFtZV0gfHwgSFRNTE5vZGU7XG4gIH1cblxuICByZXR1cm4gQ2xhc3M7XG59XG5cbmZ1bmN0aW9uIHRvcG1vc3RIVE1MTm9kZUZyb21Ub3Btb3N0TWFya2Rvd25Ob2RlKHRvcG1vc3RNYXJrZG93bk5vZGUpIHtcbiAgY29uc3Qgbm9kZSA9IHRvcG1vc3RNYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgbm9kZXMgPSBub2Rlc0Zyb21Ob2RlQW5kUXVlcmllcyhub2RlLCBxdWVyaWVzKSxcbiAgICAgICAgdG9wbW9zdEhUTUxOb2RlID0gdG9wbW9zdE5vZGVGcm9tT3V0ZXJOb2RlcyhDbGFzc0Zyb21PdXRlck5vZGUsIG5vZGVzKTtcblxuICByZXR1cm4gdG9wbW9zdEhUTUxOb2RlO1xufVxuIl0sIm5hbWVzIjpbIm1hcmtkb3duTGV4ZXIiLCJNYXJrZG93bkxleGVyIiwiZnJvbU5vdGhpbmciLCJtYXJrZG93blBhcnNlciIsIk1hcmtkb3duUGFyc2VyIiwibWFya2Rvd25TdHlsZUxleGVyIiwiTWFya2Rvd25TdHlsZUxleGVyIiwibWFya2Rvd25TdHlsZVBhcnNlciIsIk1hcmtkb3duU3R5bGVQYXJzZXIiLCJ0b3Btb3N0Tm9kZUZyb21PdXRlck5vZGVzIiwibm9kZVV0aWxpdGllcyIsIlZpZXciLCJtYXJrZG93blN0eWxlQ3VzdG9tSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsIm1hcmtkb3duU3R5bGUiLCJwYWdlVXBkYXRlQ3VzdG9tSGFuZGxlciIsImluZGV4IiwiY2xlYXJQYWdlIiwidXBkYXRlUGFnZSIsInBsYWluVGV4dEN1c3RvbUhhbmRsZXIiLCJwbGFpblRleHQiLCJtYXJrZG93bkN1c3RvbUhhbmRsZXIiLCJtYXJrZG93biIsInByZXZpZXdDdXN0b21IYW5kbGVyIiwicHJldmlldyIsImtleVVwQ3VzdG9tSGFuZGxlciIsInVwZGF0ZSIsImh0bWxDdXN0b21IYW5kbGVyIiwiaHRtbCIsImNzc0N1c3RvbUhhbmRsZXIiLCJjc3MiLCJ1cGRhdGVNYXJrZG93blN0eWxlIiwidXBkYXRlTWFya2Rvd24iLCJjbGVhclhNUCIsImNsZWFyUHJldmlld0RpdiIsImNsZWFySFRNTFBhcnNlVHJlZVRleHRhcmVhIiwidG9rZW5zIiwiZ2V0VG9rZW5zIiwidG9wbW9zdE1hcmtkb3duTm9kZSIsImdldFRvcG1vc3RNYXJrZG93bk5vZGUiLCJ0b3Btb3N0SFRNTE5vZGUiLCJ0b3Btb3N0SFRNTE5vZGVGcm9tVG9wbW9zdE1hcmtkb3duTm9kZSIsImRpdmlzaW9uSFRNTE5PZGUiLCJnZXREaXZpc2lvbkhUTUxOb2RlQXQiLCJjb250ZXh0IiwicGF0aFRvVVJMIiwidXBkYXRlWE1QIiwidXBkYXRlUHJldmlld0RpdiIsInVwZGF0ZVBsYWluVGV4dFRleHRhcmVhIiwibXVsdGlwbGljaXR5IiwiZ2V0TXVsdGlwbGljaXR5IiwibGVuZ3RoIiwicGFyc2VUcmVlIiwiYXNQYXJzZVRyZWUiLCJodG1sUGFyc2VUcmVlIiwidXBkYXRlUGFnZUJ1dHRvbnNEaXYiLCJ1cGRhdGVIVE1MUGFyc2VUcmVlVGV4dGFyZWEiLCJnZXRNYXJrZG93biIsImxleGVyIiwicGFyc2VyIiwiY29udGVudCIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwicmVzZXRUb2tlbnMiLCJyZXNldFRvcG1vc3RNYXJrZG93bk5vZGUiLCJjbGVhck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEiLCJjbGVhclBhZ2VCdXR0b25zRGl2IiwiaW1wb3J0ZXIiLCJub2RlRnJvbVRva2VucyIsInRva2Vuc0Zyb21Db250ZW50IiwicmVzb2x2ZSIsIm1hcmtkb3duUGFyc2VUcmVlIiwic2V0VG9rZW5zIiwic2V0VG9wbW9zdE1hcmtkb3duTm9kZSIsInVwZGF0ZU1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEiLCJtYXJrZG93blN0eWxlRWxlbWVudCIsInByb3BlcnRpZXMiLCJnZXRNYXJrZG93blN0eWxlIiwic2V0Q1NTIiwic3RhcnRSdWxlIiwiZ2V0U3RhcnRSdWxlIiwidXBkYXRlTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhIiwiY2xlYXJNYXJrZG93blN0eWxlUGFyc2VUcmVlVGV4dGFyZWEiLCJoaWRlTWFya2Rvd25Db250YWluZXJEaXYiLCJzaG93TWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiIsImhpZGVDU1NDb250YWluZXJEaXYiLCJoaWRlSFRNTENvbnRhaW5lckRpdiIsImhpZGVQcmV2aWV3Q29udGFpbmVyRGl2Iiwic2hvd1BsYWluVGV4dENvbnRhaW5lckRpdiIsInNob3dNYXJrZG93bkNvbnRhaW5lckRpdiIsImhpZGVNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2Iiwic2hvd1ByZXZpZXdDb250YWluZXJEaXYiLCJoaWRlUGxhaW5UZXh0Q29udGFpbmVyRGl2Iiwic2hvd0hUTUxDb250YWluZXJEaXYiLCJzaG93Q1NTQ29udGFpbmVyRGl2IiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiY2hpbGRFbGVtZW50cyIsIkNvbHVtbnNEaXYiLCJMZWZ0U2l6ZWFibGVEaXYiLCJMZWZ0VGFiQnV0dG9uc0RpdiIsIm9uQ3VzdG9tTWFya2Rvd24iLCJvbkN1c3RvbU1hcmtkb3duU3R5bGUiLCJNYXJrZG93bkNvbnRhaW5lckRpdiIsIm9uQ3VzdG9tS2V5VXAiLCJNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2IiwiVmVydGljYWxTcGxpdHRlckRpdiIsIkNvbHVtbkRpdiIsIlJvd3NEaXYiLCJSaWdodFRhYkJ1dHRvbnNEaXYiLCJvbkN1c3RvbUNTUyIsIm9uQ3VzdG9tSFRNTCIsIm9uQ3VzdG9tUHJldmlldyIsIm9uQ3VzdG9tUGxhaW5UZXh0IiwiUGFnZUJ1dHRvbnNEaXYiLCJvbkN1c3RvbVBhZ2VVcGRhdGUiLCJDU1NDb250YWluZXJEaXYiLCJIVE1MQ29udGFpbmVyRGl2IiwiUHJldmlld0NvbnRhaW5lckRpdiIsIlBsYWluVGV4dENvbnRhaW5lckRpdiIsIkhUTUxQYXJzZVRyZWVUZXh0YXJlYSIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiY29uc3RydWN0b3IiLCJpbml0aWFsTWFya2Rvd24iLCJpbml0aWFsTWFya2Rvd25TdHlsZSIsInNldE1hcmtkb3duIiwic2V0TWFya2Rvd25TdHlsZSIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsInN0YXJ0UnVsZU5hbWUiLCJydWxlTWFwIiwiZ2V0UnVsZU1hcCIsInBhdGgiLCJ1cmwiLCJDbGFzc0Zyb21PdXRlck5vZGUiLCJvdXRlck5vZGUiLCJDbGFzcyIsIlRvcG1vc3RIVE1MTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJodG1sTm9kZU1hcCIsIkhUTUxOb2RlIiwibm9kZXMiLCJub2Rlc0Zyb21Ob2RlQW5kUXVlcmllcyIsInF1ZXJpZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTJVQTs7O2VBQUE7OztvRUF6VXNCO29CQUVFO3dCQUNNOzBCQUNzQztxQkFDbUI7a0VBRTVEOzJEQUNDOzBEQUNBOzhEQUNBOzJEQUNDOzREQUNDOzREQUNDOzhEQUNDOytEQUNDO2dFQUNDOzREQUNBO29FQUNJO3FCQUVFO3dCQUNFOzhEQUV0Qjs0REFDQzs0REFDRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QixJQUFNQSxnQkFBZ0JDLG9CQUFhLENBQUNDLFdBQVcsSUFDekNDLGlCQUFpQkMscUJBQWMsQ0FBQ0YsV0FBVyxJQUMzQ0cscUJBQXFCQyx5QkFBa0IsQ0FBQ0osV0FBVyxJQUNuREssc0JBQXNCQywwQkFBbUIsQ0FBQ04sV0FBVztBQUUzRCxJQUFNLEFBQUVPLDRCQUE4QkMsdUJBQWEsQ0FBM0NEO0FBRVIsSUFBQSxBQUFNRSxxQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7O2dCQUFOLGtCQUFNQSxrQkFDSkMsd0JBQUFBLDhCQUE2QixTQUFDQyxPQUFPQztZQUNuQyxNQUFLQyxhQUFhO1FBQ3BCLElBRUFDLHdCQUFBQSwyQkFBMEIsU0FBQ0gsT0FBT0MsU0FBU0c7WUFDekMsTUFBS0MsU0FBUztZQUVkLE1BQUtDLFVBQVUsQ0FBQ0Y7UUFDbEIsSUFFQUcsd0JBQUFBLDBCQUF5QixTQUFDUCxPQUFPQztZQUMvQixNQUFLTyxT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