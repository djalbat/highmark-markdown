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
var _index = require("../index");
var _easylayout = require("easy-layout");
var _html = /*#__PURE__*/ _interop_require_default(require("./view/div/html"));
var _preview = /*#__PURE__*/ _interop_require_default(require("./view/div/preview"));
var _subHeading = /*#__PURE__*/ _interop_require_default(require("./view/subHeading"));
var _css = /*#__PURE__*/ _interop_require_default(require("./view/textarea/css"));
var _tabButtons = /*#__PURE__*/ _interop_require_default(require("./view/div/tabButtons"));
var _pageButtons = /*#__PURE__*/ _interop_require_default(require("./view/div/pageButtons"));
var _left = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/left"));
var _right = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/right"));
var _markdown = /*#__PURE__*/ _interop_require_default(require("./view/div/container/markdown"));
var _markdownStyle = /*#__PURE__*/ _interop_require_default(require("./view/div/container/markdownStyle"));
var _markdown1 = require("../utilities/markdown");
var _constants = require("./constants");
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
var markdownLexer = _index.MarkdownLexer.fromNothing(), markdownParser = _index.MarkdownParser.fromNothing(), markdownStyleLexer = _index.MarkdownStyleLexer.fromNothing(), markdownStyleParser = _index.MarkdownStyleParser.fromNothing();
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    var _super = _create_super(View);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "markdownStyleCustomHandler", function(event, element) {
            _this.markdownStyle();
        });
        _define_property(_assert_this_initialized(_this), "pageUpdateCustomHandler", function(event, element, index) {
            _this.clearPage();
            _this.updatePage(index);
        });
        _define_property(_assert_this_initialized(_this), "markdownCustomHandler", function(event, element) {
            _this.markdown();
        });
        _define_property(_assert_this_initialized(_this), "keyUpCustomHandler", function(event, element) {
            _this.update();
        });
        return _this;
    }
    _create_class(View, [
        {
            key: "updateMarkdownStyle",
            value: function updateMarkdownStyle() {
                var markdownStyleElement = this.properties.markdownStyleElement, markdownStyle = this.getMarkdownStyle(), css = markdownStyleElement.update(markdownStyle);
                this.setCSS(css);
                var lexer = markdownStyleLexer, parser = markdownStyleParser, content = markdownStyle, tokens = lexer.tokenise(content), startRule = parser.getStartRule(), startOfContent = true, node = parser.parse(tokens, startRule, startOfContent);
                if (node !== null) {
                    var parseTree = node.asParseTree(tokens);
                    this.updateMarkdownStyleParseTreeTextarea(parseTree);
                } else {
                    this.clearMarkdownStyleParseTreeTextarea();
                }
            }
        },
        {
            key: "updateMarkdown",
            value: function updateMarkdown() {
                var markdown = this.getMarkdown(), lexer = markdownLexer, parser = markdownParser, content = markdown, startOfContent = true, startRule = parser.getStartRule(), tokens = lexer.tokenise(content), node = parser.parse(tokens, startRule, startOfContent);
                this.setTokens(tokens);
                if (node !== null) {
                    var linesPerPage = _constants.LINES_PER_PAGE, charactersPerLine = _constants.CHARACTERS_PER_LINE, context = {
                        tokens: tokens,
                        importer: importer,
                        linesPerPage: linesPerPage,
                        charactersPerLine: charactersPerLine
                    }, divisionMarkdownNode = node, divisionMarkdownNodes = (0, _markdown1.postprocess)(divisionMarkdownNode, context);
                    this.setDivisionMarkdownNodes(divisionMarkdownNodes);
                    var index = 0, length = divisionMarkdownNodes.length;
                    this.updatePage(index);
                    this.updatePageButtonsDiv(length);
                } else {
                    var divisionMarkdownNodes1 = null;
                    this.setDivisionMarkdownNodes(divisionMarkdownNodes1);
                    this.clearPage();
                    this.clearPageButtonsDiv();
                }
            }
        },
        {
            key: "updatePage",
            value: function updatePage(index) {
                var divisionMarkdownNodes = this.getDivisionMarkdownNodes(), divisionMarkdownNode = divisionMarkdownNodes[index], pageNumber = index + 1, tokens = this.getTokens(), context = {
                    tokens: tokens
                };
                Object.assign(context, {
                    pageNumber: pageNumber
                });
                var length = null, html = divisionMarkdownNode.asHTML(context), parseTree = divisionMarkdownNode.asParseTree(tokens), domElement = divisionMarkdownNode.createDOMElement(context);
                this.updatePageButtonsDiv(length, index);
                this.updateXMP(html);
                this.updatePreviewDiv(domElement);
                this.updateMarkdownParseTreeTextarea(parseTree);
            }
        },
        {
            key: "clearPage",
            value: function clearPage() {
                this.clearXMP();
                this.clearPreviewDiv();
                this.clearMarkdownParseTreeTextarea();
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
            key: "update",
            value: function update() {
                this.updateMarkdown();
                this.updateMarkdownStyle();
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
            key: "setTokens",
            value: function setTokens(tokens) {
                this.updateState({
                    tokens: tokens
                });
            }
        },
        {
            key: "getDivisionMarkdownNodes",
            value: function getDivisionMarkdownNodes() {
                var divisionMarkdownNodes = this.getState().divisionMarkdownNodes;
                return divisionMarkdownNodes;
            }
        },
        {
            key: "setDivisionMarkdownNodes",
            value: function setDivisionMarkdownNodes(divisionMarkdownNodes) {
                this.updateState({
                    divisionMarkdownNodes: divisionMarkdownNodes
                });
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var tokens = null, divisionMarkdownNodes = null;
                this.setState({
                    tokens: tokens,
                    divisionMarkdownNodes: divisionMarkdownNodes
                });
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement(_easylayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_left.default, null, /*#__PURE__*/ React.createElement(_pageButtons.default, {
                    onCustomPageUpdate: this.pageUpdateCustomHandler
                }), /*#__PURE__*/ React.createElement(_tabButtons.default, {
                    onCustomMarkdown: this.markdownCustomHandler,
                    onCustomMarkdownStyle: this.markdownStyleCustomHandler
                }), /*#__PURE__*/ React.createElement(_markdown.default, {
                    onCustomKeyUp: this.keyUpCustomHandler
                }), /*#__PURE__*/ React.createElement(_markdownStyle.default, {
                    onCustomKeyUp: this.keyUpCustomHandler
                })), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_right.default, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "HTML"), /*#__PURE__*/ React.createElement(_html.default, null)), /*#__PURE__*/ React.createElement(_easylayout.HorizontalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.RowDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "CSS"), /*#__PURE__*/ React.createElement(_css.default, null), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Preview"), /*#__PURE__*/ React.createElement(_preview.default, null))))));
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                this.setInitialState();
                var _this_constructor = this.constructor, initialMarkdown = _this_constructor.initialMarkdown, initialMarkdownStyle = _this_constructor.initialMarkdownStyle, markdownStyle = initialMarkdownStyle, markdown = initialMarkdown; ///
                this.setMarkdown(markdown);
                this.setMarkdownStyle(markdownStyle);
                this.update();
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "tagName", "div");
_define_property(View, "ignoredProperties", [
    "markdownStyleElement"
]);
_define_property(View, "defaultProperties", {
    className: "view"
});
_define_property(View, "initialMarkdown", "# Introduction\n  \n@embed paragraph.md  \n\nThis book also goes into considerable detail on the subject of Occam's approach to language, which largely boils down to its use of grammars.\nOccam has its own language, called Florence,[^florence] but it will also support controlled natural languages in the near future.\nIndeed, the verifier cannot distinguish between these languages at all.\nThis book explains how this is possible.\n\nAfter explaining Occam's approach to language this book gives a very detailed explanation of how the verifier works.\nSome may find this nauseating but I maintain that it is essential.\nThe whole idea behind Occam is to facilitate human reasoning and not to supplant it, and it is the verifier that reasons on your behalf.\nSo you must understand how it works.\nIn fact I recommend that you read the introduction together with the first four chapters of the Foundations book before going much further with this one.\nThey are neither very long nor very deep and will provide the necessary background for understanding the verifier in particular.\n\nI hope that the verifier's implenentation is both transparent and readable, and therefore understandable, especially augmented as it is with the explanation here.\nApart from anything else even a partial understanding will likely save a good deal of frustration when you begin to work seriously with Occam.\nThe other reason for understanding the verifier is that it has not been verified itself.\nSo you cannot simply press a button and have confidence in it, that is not the idea at all.\n\nIn fact, at the risk of courting controversy, I would argue that it should not be the idea with any verifier.\nAll are failible regardless of what their proponents may claim and therefore I do not believe that their results should ever be trusted without some level of human oversight.\nIndeed in my opinion verification should be an aid to clarity and rigour and never a substitute for it.\nThe idea of a proof as a black box in particular is anathema to me.\n\nMoving on, the standpoint that software should be an aid to human reasonibg and not a substitute for it must these days be tempered by a consideration of artificial intelligence as a tool for reasoning.\nWhat inspired me over the near decade of work that it took to get Occam to its first viable release was a firm belief in what I call the four elephants, expounded in the four chapters of the aforementioned Foundations book.\nI had not heard of large language models when I started out and they were never a motivating factor, but as I came to my first milestone after those many years, they began to loom large.\n\nThe resurgence of artificial intelligence in recent years has hardly changed my views on automated reasoning, however.\nAdmittedly of late there has been some progress in the direction of coupling artificial intelligence with formal reasoning systems.\nBut for its part Occam only has a bearing on the right hand side of this coupling.\nHowever on the left hand side, it is importtant to note that the output of potentially any large language model or such like can serve as input for Occam.\n\nThus the panacea of using computers as tools for symbolic reasoning, be that devising algorithms or protocols; discovering new mathematics or logic; or whatever, is almost upon us.\nAnd it is worth pointing out that this panacea has been eagerly anticipated for around seventy five years now.\nThere is no doubt that artificial intelligence is on the verge of bringing all of this about, but without tools such as Occam the output of artificial intelligence models will always be clouded in doubt.\n\nFinally I should mention Highmark, wihch is a new document preparation system developed in tandem with Occam.\nIt is a necessary intermediate step in working towards Occam's support for controlled natural languages but I hope that in the long run it will succeed in its own right.\nBoth this book and the Foundations book were written using Highmark and it may well turn out that more people use Occam for working with it than for reasoning.\nThere is therefore a chapter dedicated to it immediately after the chapter on getting to grips with the IDE.\nAnd if you are using Occam to work exclusively with Highmark then please do not be daunted by the formal reasoning side of things, you can safely ignore it, and rest assured that support for Highmark will always be included.\n\nTo conclude, I hope that in the coming years at least some people will come to see Occam as an indespensible tool for symbolic reasoning.\nAmongst other things it will enable them to leverage artificial intelligence to aid their own intellectual enquiries.\nHowever artificial intelligence will not, at least not in the foreseeable future, supplant them.\n\n[^occam]: The word Occam is used somewhat nebulously here.\nIt is most often associated with Occam's IDE but in fact it encompasses a range of software and services.\nThis book explains these divers parts and there is a companion book, called The Foundations of Symbolic Reasoning, that covers the underlying theory.\n\n[^florence]: Occam was originally called Florence but the former seemed more apt.\n\n@footnotes\n\n@pageNumber\n");
_define_property(View, "initialMarkdownStyle", "position: absolute;\n");
var _default = (0, _easywithstyle.default)(View)(_templateObject());
function importer(filePath, context) {
    var content = "\n\nI have tried to make Occam[^occam] as useable as possible but there are limits.\nAt the end of the day it is an expert system and some of its parts, not least the verifier, need detailed explanation.\nIt is the purpose of this book is to provide these explanations.\n  \n", startOfContent = true, startRule = markdownParser.getStartRule(), tokens = markdownLexer.tokenise(content), node = markdownParser.parse(tokens, startRule, startOfContent), importedNode = node, importedTokens = tokens, importedClassName = "introduction";
    Object.assign(context, {
        importedNode: importedNode,
        importedTokens: importedTokens,
        importedClassName: importedClassName
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgTWFya2Rvd25MZXhlciwgTWFya2Rvd25QYXJzZXIsIE1hcmtkb3duU3R5bGVMZXhlciwgTWFya2Rvd25TdHlsZVBhcnNlciB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgUm93RGl2LCBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYsIEhvcml6b250YWxTcGxpdHRlckRpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuXG5pbXBvcnQgSFRNTERpdiBmcm9tIFwiLi92aWV3L2Rpdi9odG1sXCI7XG5pbXBvcnQgUHJldmlld0RpdiBmcm9tIFwiLi92aWV3L2Rpdi9wcmV2aWV3XCI7XG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi92aWV3L3N1YkhlYWRpbmdcIjtcbmltcG9ydCBDU1NUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL2Nzc1wiO1xuaW1wb3J0IFRhYkJ1dHRvbnNEaXYgZnJvbSBcIi4vdmlldy9kaXYvdGFiQnV0dG9uc1wiO1xuaW1wb3J0IFBhZ2VCdXR0b25zRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3BhZ2VCdXR0b25zXCI7XG5pbXBvcnQgTGVmdFNpemVhYmxlRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3NpemVhYmxlL2xlZnRcIjtcbmltcG9ydCBSaWdodFNpemVhYmxlRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3NpemVhYmxlL3JpZ2h0XCI7XG5pbXBvcnQgTWFya2Rvd25Db250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL21hcmtkb3duXCI7XG5pbXBvcnQgTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiBmcm9tIFwiLi92aWV3L2Rpdi9jb250YWluZXIvbWFya2Rvd25TdHlsZVwiO1xuXG5pbXBvcnQgeyBwb3N0cHJvY2VzcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbWFya2Rvd25cIjtcbmltcG9ydCB7IExJTkVTX1BFUl9QQUdFLCBDSEFSQUNURVJTX1BFUl9MSU5FIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IG1hcmtkb3duTGV4ZXIgPSBNYXJrZG93bkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBtYXJrZG93blBhcnNlciA9IE1hcmtkb3duUGFyc2VyLmZyb21Ob3RoaW5nKCksXG4gICAgICBtYXJrZG93blN0eWxlTGV4ZXIgPSBNYXJrZG93blN0eWxlTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIG1hcmtkb3duU3R5bGVQYXJzZXIgPSBNYXJrZG93blN0eWxlUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgbWFya2Rvd25TdHlsZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLm1hcmtkb3duU3R5bGUoKTtcbiAgfVxuXG4gIHBhZ2VVcGRhdGVDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIHRoaXMuY2xlYXJQYWdlKCk7XG5cbiAgICB0aGlzLnVwZGF0ZVBhZ2UoaW5kZXgpO1xuICB9XG5cbiAgbWFya2Rvd25DdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5tYXJrZG93bigpO1xuICB9XG5cbiAga2V5VXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHVwZGF0ZU1hcmtkb3duU3R5bGUoKSB7XG4gICAgY29uc3QgeyBtYXJrZG93blN0eWxlRWxlbWVudCB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGUgPSB0aGlzLmdldE1hcmtkb3duU3R5bGUoKSxcbiAgICAgICAgICBjc3MgPSBtYXJrZG93blN0eWxlRWxlbWVudC51cGRhdGUobWFya2Rvd25TdHlsZSk7XG5cbiAgICB0aGlzLnNldENTUyhjc3MpO1xuXG4gICAgY29uc3QgbGV4ZXIgPSBtYXJrZG93blN0eWxlTGV4ZXIsIC8vL1xuICAgICAgICAgIHBhcnNlciA9IG1hcmtkb3duU3R5bGVQYXJzZXIsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBtYXJrZG93blN0eWxlLCAgLy8vXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgc3RhcnRSdWxlID0gcGFyc2VyLmdldFN0YXJ0UnVsZSgpLFxuICAgICAgICAgIHN0YXJ0T2ZDb250ZW50ID0gdHJ1ZSxcbiAgICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucywgc3RhcnRSdWxlLCBzdGFydE9mQ29udGVudCk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuXG4gICAgICB0aGlzLnVwZGF0ZU1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYShwYXJzZVRyZWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsZWFyTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhKCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlTWFya2Rvd24oKSB7XG4gICAgY29uc3QgbWFya2Rvd24gPSB0aGlzLmdldE1hcmtkb3duKCksXG4gICAgICAgICAgbGV4ZXIgPSBtYXJrZG93bkxleGVyLCAgLy8vXG4gICAgICAgICAgcGFyc2VyID0gIG1hcmtkb3duUGFyc2VyLCAvLy9cbiAgICAgICAgICBjb250ZW50ID0gbWFya2Rvd24sIC8vL1xuICAgICAgICAgIHN0YXJ0T2ZDb250ZW50ID0gdHJ1ZSxcbiAgICAgICAgICBzdGFydFJ1bGUgPSBwYXJzZXIuZ2V0U3RhcnRSdWxlKCksXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMsIHN0YXJ0UnVsZSwgc3RhcnRPZkNvbnRlbnQpO1xuXG4gICAgdGhpcy5zZXRUb2tlbnModG9rZW5zKTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBsaW5lc1BlclBhZ2UgPSBMSU5FU19QRVJfUEFHRSxcbiAgICAgICAgICAgIGNoYXJhY3RlcnNQZXJMaW5lID0gQ0hBUkFDVEVSU19QRVJfTElORSxcbiAgICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICAgIHRva2VucyxcbiAgICAgICAgICAgICAgaW1wb3J0ZXIsXG4gICAgICAgICAgICAgIGxpbmVzUGVyUGFnZSxcbiAgICAgICAgICAgICAgY2hhcmFjdGVyc1BlckxpbmVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHBvc3Rwcm9jZXNzKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgdGhpcy5zZXREaXZpc2lvbk1hcmtkb3duTm9kZXMoZGl2aXNpb25NYXJrZG93bk5vZGVzKTtcblxuICAgICAgY29uc3QgaW5kZXggPSAwLFxuICAgICAgICAgICAgbGVuZ3RoID0gZGl2aXNpb25NYXJrZG93bk5vZGVzLmxlbmd0aDtcblxuICAgICAgdGhpcy51cGRhdGVQYWdlKGluZGV4KTtcblxuICAgICAgdGhpcy51cGRhdGVQYWdlQnV0dG9uc0RpdihsZW5ndGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBudWxsO1xuXG4gICAgICB0aGlzLnNldERpdmlzaW9uTWFya2Rvd25Ob2RlcyhkaXZpc2lvbk1hcmtkb3duTm9kZXMpO1xuXG4gICAgICB0aGlzLmNsZWFyUGFnZSgpO1xuXG4gICAgICB0aGlzLmNsZWFyUGFnZUJ1dHRvbnNEaXYoKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVQYWdlKGluZGV4KSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGVzID0gdGhpcy5nZXREaXZpc2lvbk1hcmtkb3duTm9kZXMoKSxcbiAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2Rlc1tpbmRleF0sXG4gICAgICAgICAgcGFnZU51bWJlciA9IGluZGV4ICsgMSxcbiAgICAgICAgICB0b2tlbnMgPSB0aGlzLmdldFRva2VucygpLFxuICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICB0b2tlbnNcbiAgICAgICAgICB9O1xuXG4gICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICBwYWdlTnVtYmVyXG4gICAgfSk7XG5cbiAgICBjb25zdCBsZW5ndGggPSBudWxsLFxuICAgICAgICAgIGh0bWwgPSBkaXZpc2lvbk1hcmtkb3duTm9kZS5hc0hUTUwoY29udGV4dCksXG4gICAgICAgICAgcGFyc2VUcmVlID0gZGl2aXNpb25NYXJrZG93bk5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gZGl2aXNpb25NYXJrZG93bk5vZGUuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KTtcblxuICAgIHRoaXMudXBkYXRlUGFnZUJ1dHRvbnNEaXYobGVuZ3RoLCBpbmRleCk7XG5cbiAgICB0aGlzLnVwZGF0ZVhNUChodG1sKTtcblxuICAgIHRoaXMudXBkYXRlUHJldmlld0Rpdihkb21FbGVtZW50KTtcblxuICAgIHRoaXMudXBkYXRlTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYShwYXJzZVRyZWUpO1xuICB9XG5cbiAgY2xlYXJQYWdlKCkge1xuICAgIHRoaXMuY2xlYXJYTVAoKTtcblxuICAgIHRoaXMuY2xlYXJQcmV2aWV3RGl2KCk7XG5cbiAgICB0aGlzLmNsZWFyTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSgpO1xuICB9XG5cbiAgbWFya2Rvd25TdHlsZSgpIHtcbiAgICB0aGlzLmhpZGVNYXJrZG93bkNvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuc2hvd01hcmtkb3duU3R5bGVDb250YWluZXJEaXYoKTtcbiAgfVxuXG4gIG1hcmtkb3duKCkge1xuICAgIHRoaXMuc2hvd01hcmtkb3duQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdigpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMudXBkYXRlTWFya2Rvd24oKTtcbiAgICB0aGlzLnVwZGF0ZU1hcmtkb3duU3R5bGUoKTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICBjb25zdCB7IHRva2VucyB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIHNldFRva2Vucyh0b2tlbnMpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHRva2Vuc1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0RGl2aXNpb25NYXJrZG93bk5vZGVzKCkge1xuICAgIGNvbnN0IHsgZGl2aXNpb25NYXJrZG93bk5vZGVzIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGVzO1xuICB9XG5cbiAgc2V0RGl2aXNpb25NYXJrZG93bk5vZGVzKGRpdmlzaW9uTWFya2Rvd25Ob2Rlcykge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGVzXG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0b2tlbnMsXG4gICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXNcbiAgICB9KTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxMZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFBhZ2VCdXR0b25zRGl2IG9uQ3VzdG9tUGFnZVVwZGF0ZT17dGhpcy5wYWdlVXBkYXRlQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgICA8VGFiQnV0dG9uc0RpdiBvbkN1c3RvbU1hcmtkb3duPXt0aGlzLm1hcmtkb3duQ3VzdG9tSGFuZGxlcn0gb25DdXN0b21NYXJrZG93blN0eWxlPXt0aGlzLm1hcmtkb3duU3R5bGVDdXN0b21IYW5kbGVyfSAvPlxuICAgICAgICAgIDxNYXJrZG93bkNvbnRhaW5lckRpdiBvbkN1c3RvbUtleVVwPXt0aGlzLmtleVVwQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgICA8TWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiBvbkN1c3RvbUtleVVwPXt0aGlzLmtleVVwQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgPC9MZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2Lz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxSaWdodFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICBIVE1MXG4gICAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgPEhUTUxEaXYvPlxuICAgICAgICAgICAgPC9SaWdodFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgPEhvcml6b250YWxTcGxpdHRlckRpdi8+XG4gICAgICAgICAgICA8Um93RGl2PlxuICAgICAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgIENTU1xuICAgICAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICA8Q1NTVGV4dGFyZWEvPlxuICAgICAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgUHJldmlld1xuICAgICAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICA8UHJldmlld0Rpdi8+XG4gICAgICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgICAgIDwvUm93RGl2PlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L0NvbHVtbnNEaXY+XG5cbiAgICApO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG5cbiAgICBjb25zdCB7IGluaXRpYWxNYXJrZG93biwgaW5pdGlhbE1hcmtkb3duU3R5bGUgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgbWFya2Rvd25TdHlsZSA9IGluaXRpYWxNYXJrZG93blN0eWxlLCAvLy9cbiAgICAgICAgICBtYXJrZG93biA9IGluaXRpYWxNYXJrZG93bjsgLy8vXG5cbiAgICB0aGlzLnNldE1hcmtkb3duKG1hcmtkb3duKTtcblxuICAgIHRoaXMuc2V0TWFya2Rvd25TdHlsZShtYXJrZG93blN0eWxlKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwibWFya2Rvd25TdHlsZUVsZW1lbnRcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG5cbiAgc3RhdGljIGluaXRpYWxNYXJrZG93biA9IGAjIEludHJvZHVjdGlvblxuICBcbkBlbWJlZCBwYXJhZ3JhcGgubWQgIFxuXG5UaGlzIGJvb2sgYWxzbyBnb2VzIGludG8gY29uc2lkZXJhYmxlIGRldGFpbCBvbiB0aGUgc3ViamVjdCBvZiBPY2NhbSdzIGFwcHJvYWNoIHRvIGxhbmd1YWdlLCB3aGljaCBsYXJnZWx5IGJvaWxzIGRvd24gdG8gaXRzIHVzZSBvZiBncmFtbWFycy5cbk9jY2FtIGhhcyBpdHMgb3duIGxhbmd1YWdlLCBjYWxsZWQgRmxvcmVuY2UsW15mbG9yZW5jZV0gYnV0IGl0IHdpbGwgYWxzbyBzdXBwb3J0IGNvbnRyb2xsZWQgbmF0dXJhbCBsYW5ndWFnZXMgaW4gdGhlIG5lYXIgZnV0dXJlLlxuSW5kZWVkLCB0aGUgdmVyaWZpZXIgY2Fubm90IGRpc3Rpbmd1aXNoIGJldHdlZW4gdGhlc2UgbGFuZ3VhZ2VzIGF0IGFsbC5cblRoaXMgYm9vayBleHBsYWlucyBob3cgdGhpcyBpcyBwb3NzaWJsZS5cblxuQWZ0ZXIgZXhwbGFpbmluZyBPY2NhbSdzIGFwcHJvYWNoIHRvIGxhbmd1YWdlIHRoaXMgYm9vayBnaXZlcyBhIHZlcnkgZGV0YWlsZWQgZXhwbGFuYXRpb24gb2YgaG93IHRoZSB2ZXJpZmllciB3b3Jrcy5cblNvbWUgbWF5IGZpbmQgdGhpcyBuYXVzZWF0aW5nIGJ1dCBJIG1haW50YWluIHRoYXQgaXQgaXMgZXNzZW50aWFsLlxuVGhlIHdob2xlIGlkZWEgYmVoaW5kIE9jY2FtIGlzIHRvIGZhY2lsaXRhdGUgaHVtYW4gcmVhc29uaW5nIGFuZCBub3QgdG8gc3VwcGxhbnQgaXQsIGFuZCBpdCBpcyB0aGUgdmVyaWZpZXIgdGhhdCByZWFzb25zIG9uIHlvdXIgYmVoYWxmLlxuU28geW91IG11c3QgdW5kZXJzdGFuZCBob3cgaXQgd29ya3MuXG5JbiBmYWN0IEkgcmVjb21tZW5kIHRoYXQgeW91IHJlYWQgdGhlIGludHJvZHVjdGlvbiB0b2dldGhlciB3aXRoIHRoZSBmaXJzdCBmb3VyIGNoYXB0ZXJzIG9mIHRoZSBGb3VuZGF0aW9ucyBib29rIGJlZm9yZSBnb2luZyBtdWNoIGZ1cnRoZXIgd2l0aCB0aGlzIG9uZS5cblRoZXkgYXJlIG5laXRoZXIgdmVyeSBsb25nIG5vciB2ZXJ5IGRlZXAgYW5kIHdpbGwgcHJvdmlkZSB0aGUgbmVjZXNzYXJ5IGJhY2tncm91bmQgZm9yIHVuZGVyc3RhbmRpbmcgdGhlIHZlcmlmaWVyIGluIHBhcnRpY3VsYXIuXG5cbkkgaG9wZSB0aGF0IHRoZSB2ZXJpZmllcidzIGltcGxlbmVudGF0aW9uIGlzIGJvdGggdHJhbnNwYXJlbnQgYW5kIHJlYWRhYmxlLCBhbmQgdGhlcmVmb3JlIHVuZGVyc3RhbmRhYmxlLCBlc3BlY2lhbGx5IGF1Z21lbnRlZCBhcyBpdCBpcyB3aXRoIHRoZSBleHBsYW5hdGlvbiBoZXJlLlxuQXBhcnQgZnJvbSBhbnl0aGluZyBlbHNlIGV2ZW4gYSBwYXJ0aWFsIHVuZGVyc3RhbmRpbmcgd2lsbCBsaWtlbHkgc2F2ZSBhIGdvb2QgZGVhbCBvZiBmcnVzdHJhdGlvbiB3aGVuIHlvdSBiZWdpbiB0byB3b3JrIHNlcmlvdXNseSB3aXRoIE9jY2FtLlxuVGhlIG90aGVyIHJlYXNvbiBmb3IgdW5kZXJzdGFuZGluZyB0aGUgdmVyaWZpZXIgaXMgdGhhdCBpdCBoYXMgbm90IGJlZW4gdmVyaWZpZWQgaXRzZWxmLlxuU28geW91IGNhbm5vdCBzaW1wbHkgcHJlc3MgYSBidXR0b24gYW5kIGhhdmUgY29uZmlkZW5jZSBpbiBpdCwgdGhhdCBpcyBub3QgdGhlIGlkZWEgYXQgYWxsLlxuXG5JbiBmYWN0LCBhdCB0aGUgcmlzayBvZiBjb3VydGluZyBjb250cm92ZXJzeSwgSSB3b3VsZCBhcmd1ZSB0aGF0IGl0IHNob3VsZCBub3QgYmUgdGhlIGlkZWEgd2l0aCBhbnkgdmVyaWZpZXIuXG5BbGwgYXJlIGZhaWxpYmxlIHJlZ2FyZGxlc3Mgb2Ygd2hhdCB0aGVpciBwcm9wb25lbnRzIG1heSBjbGFpbSBhbmQgdGhlcmVmb3JlIEkgZG8gbm90IGJlbGlldmUgdGhhdCB0aGVpciByZXN1bHRzIHNob3VsZCBldmVyIGJlIHRydXN0ZWQgd2l0aG91dCBzb21lIGxldmVsIG9mIGh1bWFuIG92ZXJzaWdodC5cbkluZGVlZCBpbiBteSBvcGluaW9uIHZlcmlmaWNhdGlvbiBzaG91bGQgYmUgYW4gYWlkIHRvIGNsYXJpdHkgYW5kIHJpZ291ciBhbmQgbmV2ZXIgYSBzdWJzdGl0dXRlIGZvciBpdC5cblRoZSBpZGVhIG9mIGEgcHJvb2YgYXMgYSBibGFjayBib3ggaW4gcGFydGljdWxhciBpcyBhbmF0aGVtYSB0byBtZS5cblxuTW92aW5nIG9uLCB0aGUgc3RhbmRwb2ludCB0aGF0IHNvZnR3YXJlIHNob3VsZCBiZSBhbiBhaWQgdG8gaHVtYW4gcmVhc29uaWJnIGFuZCBub3QgYSBzdWJzdGl0dXRlIGZvciBpdCBtdXN0IHRoZXNlIGRheXMgYmUgdGVtcGVyZWQgYnkgYSBjb25zaWRlcmF0aW9uIG9mIGFydGlmaWNpYWwgaW50ZWxsaWdlbmNlIGFzIGEgdG9vbCBmb3IgcmVhc29uaW5nLlxuV2hhdCBpbnNwaXJlZCBtZSBvdmVyIHRoZSBuZWFyIGRlY2FkZSBvZiB3b3JrIHRoYXQgaXQgdG9vayB0byBnZXQgT2NjYW0gdG8gaXRzIGZpcnN0IHZpYWJsZSByZWxlYXNlIHdhcyBhIGZpcm0gYmVsaWVmIGluIHdoYXQgSSBjYWxsIHRoZSBmb3VyIGVsZXBoYW50cywgZXhwb3VuZGVkIGluIHRoZSBmb3VyIGNoYXB0ZXJzIG9mIHRoZSBhZm9yZW1lbnRpb25lZCBGb3VuZGF0aW9ucyBib29rLlxuSSBoYWQgbm90IGhlYXJkIG9mIGxhcmdlIGxhbmd1YWdlIG1vZGVscyB3aGVuIEkgc3RhcnRlZCBvdXQgYW5kIHRoZXkgd2VyZSBuZXZlciBhIG1vdGl2YXRpbmcgZmFjdG9yLCBidXQgYXMgSSBjYW1lIHRvIG15IGZpcnN0IG1pbGVzdG9uZSBhZnRlciB0aG9zZSBtYW55IHllYXJzLCB0aGV5IGJlZ2FuIHRvIGxvb20gbGFyZ2UuXG5cblRoZSByZXN1cmdlbmNlIG9mIGFydGlmaWNpYWwgaW50ZWxsaWdlbmNlIGluIHJlY2VudCB5ZWFycyBoYXMgaGFyZGx5IGNoYW5nZWQgbXkgdmlld3Mgb24gYXV0b21hdGVkIHJlYXNvbmluZywgaG93ZXZlci5cbkFkbWl0dGVkbHkgb2YgbGF0ZSB0aGVyZSBoYXMgYmVlbiBzb21lIHByb2dyZXNzIGluIHRoZSBkaXJlY3Rpb24gb2YgY291cGxpbmcgYXJ0aWZpY2lhbCBpbnRlbGxpZ2VuY2Ugd2l0aCBmb3JtYWwgcmVhc29uaW5nIHN5c3RlbXMuXG5CdXQgZm9yIGl0cyBwYXJ0IE9jY2FtIG9ubHkgaGFzIGEgYmVhcmluZyBvbiB0aGUgcmlnaHQgaGFuZCBzaWRlIG9mIHRoaXMgY291cGxpbmcuXG5Ib3dldmVyIG9uIHRoZSBsZWZ0IGhhbmQgc2lkZSwgaXQgaXMgaW1wb3J0dGFudCB0byBub3RlIHRoYXQgdGhlIG91dHB1dCBvZiBwb3RlbnRpYWxseSBhbnkgbGFyZ2UgbGFuZ3VhZ2UgbW9kZWwgb3Igc3VjaCBsaWtlIGNhbiBzZXJ2ZSBhcyBpbnB1dCBmb3IgT2NjYW0uXG5cblRodXMgdGhlIHBhbmFjZWEgb2YgdXNpbmcgY29tcHV0ZXJzIGFzIHRvb2xzIGZvciBzeW1ib2xpYyByZWFzb25pbmcsIGJlIHRoYXQgZGV2aXNpbmcgYWxnb3JpdGhtcyBvciBwcm90b2NvbHM7IGRpc2NvdmVyaW5nIG5ldyBtYXRoZW1hdGljcyBvciBsb2dpYzsgb3Igd2hhdGV2ZXIsIGlzIGFsbW9zdCB1cG9uIHVzLlxuQW5kIGl0IGlzIHdvcnRoIHBvaW50aW5nIG91dCB0aGF0IHRoaXMgcGFuYWNlYSBoYXMgYmVlbiBlYWdlcmx5IGFudGljaXBhdGVkIGZvciBhcm91bmQgc2V2ZW50eSBmaXZlIHllYXJzIG5vdy5cblRoZXJlIGlzIG5vIGRvdWJ0IHRoYXQgYXJ0aWZpY2lhbCBpbnRlbGxpZ2VuY2UgaXMgb24gdGhlIHZlcmdlIG9mIGJyaW5naW5nIGFsbCBvZiB0aGlzIGFib3V0LCBidXQgd2l0aG91dCB0b29scyBzdWNoIGFzIE9jY2FtIHRoZSBvdXRwdXQgb2YgYXJ0aWZpY2lhbCBpbnRlbGxpZ2VuY2UgbW9kZWxzIHdpbGwgYWx3YXlzIGJlIGNsb3VkZWQgaW4gZG91YnQuXG5cbkZpbmFsbHkgSSBzaG91bGQgbWVudGlvbiBIaWdobWFyaywgd2loY2ggaXMgYSBuZXcgZG9jdW1lbnQgcHJlcGFyYXRpb24gc3lzdGVtIGRldmVsb3BlZCBpbiB0YW5kZW0gd2l0aCBPY2NhbS5cbkl0IGlzIGEgbmVjZXNzYXJ5IGludGVybWVkaWF0ZSBzdGVwIGluIHdvcmtpbmcgdG93YXJkcyBPY2NhbSdzIHN1cHBvcnQgZm9yIGNvbnRyb2xsZWQgbmF0dXJhbCBsYW5ndWFnZXMgYnV0IEkgaG9wZSB0aGF0IGluIHRoZSBsb25nIHJ1biBpdCB3aWxsIHN1Y2NlZWQgaW4gaXRzIG93biByaWdodC5cbkJvdGggdGhpcyBib29rIGFuZCB0aGUgRm91bmRhdGlvbnMgYm9vayB3ZXJlIHdyaXR0ZW4gdXNpbmcgSGlnaG1hcmsgYW5kIGl0IG1heSB3ZWxsIHR1cm4gb3V0IHRoYXQgbW9yZSBwZW9wbGUgdXNlIE9jY2FtIGZvciB3b3JraW5nIHdpdGggaXQgdGhhbiBmb3IgcmVhc29uaW5nLlxuVGhlcmUgaXMgdGhlcmVmb3JlIGEgY2hhcHRlciBkZWRpY2F0ZWQgdG8gaXQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlIGNoYXB0ZXIgb24gZ2V0dGluZyB0byBncmlwcyB3aXRoIHRoZSBJREUuXG5BbmQgaWYgeW91IGFyZSB1c2luZyBPY2NhbSB0byB3b3JrIGV4Y2x1c2l2ZWx5IHdpdGggSGlnaG1hcmsgdGhlbiBwbGVhc2UgZG8gbm90IGJlIGRhdW50ZWQgYnkgdGhlIGZvcm1hbCByZWFzb25pbmcgc2lkZSBvZiB0aGluZ3MsIHlvdSBjYW4gc2FmZWx5IGlnbm9yZSBpdCwgYW5kIHJlc3QgYXNzdXJlZCB0aGF0IHN1cHBvcnQgZm9yIEhpZ2htYXJrIHdpbGwgYWx3YXlzIGJlIGluY2x1ZGVkLlxuXG5UbyBjb25jbHVkZSwgSSBob3BlIHRoYXQgaW4gdGhlIGNvbWluZyB5ZWFycyBhdCBsZWFzdCBzb21lIHBlb3BsZSB3aWxsIGNvbWUgdG8gc2VlIE9jY2FtIGFzIGFuIGluZGVzcGVuc2libGUgdG9vbCBmb3Igc3ltYm9saWMgcmVhc29uaW5nLlxuQW1vbmdzdCBvdGhlciB0aGluZ3MgaXQgd2lsbCBlbmFibGUgdGhlbSB0byBsZXZlcmFnZSBhcnRpZmljaWFsIGludGVsbGlnZW5jZSB0byBhaWQgdGhlaXIgb3duIGludGVsbGVjdHVhbCBlbnF1aXJpZXMuXG5Ib3dldmVyIGFydGlmaWNpYWwgaW50ZWxsaWdlbmNlIHdpbGwgbm90LCBhdCBsZWFzdCBub3QgaW4gdGhlIGZvcmVzZWVhYmxlIGZ1dHVyZSwgc3VwcGxhbnQgdGhlbS5cblxuW15vY2NhbV06IFRoZSB3b3JkIE9jY2FtIGlzIHVzZWQgc29tZXdoYXQgbmVidWxvdXNseSBoZXJlLlxuSXQgaXMgbW9zdCBvZnRlbiBhc3NvY2lhdGVkIHdpdGggT2NjYW0ncyBJREUgYnV0IGluIGZhY3QgaXQgZW5jb21wYXNzZXMgYSByYW5nZSBvZiBzb2Z0d2FyZSBhbmQgc2VydmljZXMuXG5UaGlzIGJvb2sgZXhwbGFpbnMgdGhlc2UgZGl2ZXJzIHBhcnRzIGFuZCB0aGVyZSBpcyBhIGNvbXBhbmlvbiBib29rLCBjYWxsZWQgVGhlIEZvdW5kYXRpb25zIG9mIFN5bWJvbGljIFJlYXNvbmluZywgdGhhdCBjb3ZlcnMgdGhlIHVuZGVybHlpbmcgdGhlb3J5LlxuXG5bXmZsb3JlbmNlXTogT2NjYW0gd2FzIG9yaWdpbmFsbHkgY2FsbGVkIEZsb3JlbmNlIGJ1dCB0aGUgZm9ybWVyIHNlZW1lZCBtb3JlIGFwdC5cblxuQGZvb3Rub3Rlc1xuXG5AcGFnZU51bWJlclxuYDtcblxuICBzdGF0aWMgaW5pdGlhbE1hcmtkb3duU3R5bGUgPSBgcG9zaXRpb246IGFic29sdXRlO1xuYDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDFyZW07XG4gIFxuYDtcblxuZnVuY3Rpb24gaW1wb3J0ZXIoZmlsZVBhdGgsIGNvbnRleHQpIHtcbiAgY29uc3QgY29udGVudCA9IGBcblxuSSBoYXZlIHRyaWVkIHRvIG1ha2UgT2NjYW1bXm9jY2FtXSBhcyB1c2VhYmxlIGFzIHBvc3NpYmxlIGJ1dCB0aGVyZSBhcmUgbGltaXRzLlxuQXQgdGhlIGVuZCBvZiB0aGUgZGF5IGl0IGlzIGFuIGV4cGVydCBzeXN0ZW0gYW5kIHNvbWUgb2YgaXRzIHBhcnRzLCBub3QgbGVhc3QgdGhlIHZlcmlmaWVyLCBuZWVkIGRldGFpbGVkIGV4cGxhbmF0aW9uLlxuSXQgaXMgdGhlIHB1cnBvc2Ugb2YgdGhpcyBib29rIGlzIHRvIHByb3ZpZGUgdGhlc2UgZXhwbGFuYXRpb25zLlxuICBcbmAsXG4gICAgICAgIHN0YXJ0T2ZDb250ZW50ID0gdHJ1ZSxcbiAgICAgICAgc3RhcnRSdWxlID0gbWFya2Rvd25QYXJzZXIuZ2V0U3RhcnRSdWxlKCksXG4gICAgICAgIHRva2VucyA9IG1hcmtkb3duTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgIG5vZGUgPSBtYXJrZG93blBhcnNlci5wYXJzZSh0b2tlbnMsIHN0YXJ0UnVsZSwgc3RhcnRPZkNvbnRlbnQpLFxuICAgICAgICBpbXBvcnRlZE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgIGltcG9ydGVkVG9rZW5zID0gdG9rZW5zLFxuICAgICAgICBpbXBvcnRlZENsYXNzTmFtZSA9IFwiaW50cm9kdWN0aW9uXCI7XG5cbiAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgaW1wb3J0ZWROb2RlLFxuICAgIGltcG9ydGVkVG9rZW5zLFxuICAgIGltcG9ydGVkQ2xhc3NOYW1lXG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbIm1hcmtkb3duTGV4ZXIiLCJNYXJrZG93bkxleGVyIiwiZnJvbU5vdGhpbmciLCJtYXJrZG93blBhcnNlciIsIk1hcmtkb3duUGFyc2VyIiwibWFya2Rvd25TdHlsZUxleGVyIiwiTWFya2Rvd25TdHlsZUxleGVyIiwibWFya2Rvd25TdHlsZVBhcnNlciIsIk1hcmtkb3duU3R5bGVQYXJzZXIiLCJWaWV3IiwibWFya2Rvd25TdHlsZUN1c3RvbUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJtYXJrZG93blN0eWxlIiwicGFnZVVwZGF0ZUN1c3RvbUhhbmRsZXIiLCJpbmRleCIsImNsZWFyUGFnZSIsInVwZGF0ZVBhZ2UiLCJtYXJrZG93bkN1c3RvbUhhbmRsZXIiLCJtYXJrZG93biIsImtleVVwQ3VzdG9tSGFuZGxlciIsInVwZGF0ZSIsInVwZGF0ZU1hcmtkb3duU3R5bGUiLCJtYXJrZG93blN0eWxlRWxlbWVudCIsInByb3BlcnRpZXMiLCJnZXRNYXJrZG93blN0eWxlIiwiY3NzIiwic2V0Q1NTIiwibGV4ZXIiLCJwYXJzZXIiLCJjb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJzdGFydFJ1bGUiLCJnZXRTdGFydFJ1bGUiLCJzdGFydE9mQ29udGVudCIsIm5vZGUiLCJwYXJzZSIsInBhcnNlVHJlZSIsImFzUGFyc2VUcmVlIiwidXBkYXRlTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhIiwiY2xlYXJNYXJrZG93blN0eWxlUGFyc2VUcmVlVGV4dGFyZWEiLCJ1cGRhdGVNYXJrZG93biIsImdldE1hcmtkb3duIiwic2V0VG9rZW5zIiwibGluZXNQZXJQYWdlIiwiTElORVNfUEVSX1BBR0UiLCJjaGFyYWN0ZXJzUGVyTGluZSIsIkNIQVJBQ1RFUlNfUEVSX0xJTkUiLCJjb250ZXh0IiwiaW1wb3J0ZXIiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsInBvc3Rwcm9jZXNzIiwic2V0RGl2aXNpb25NYXJrZG93bk5vZGVzIiwibGVuZ3RoIiwidXBkYXRlUGFnZUJ1dHRvbnNEaXYiLCJjbGVhclBhZ2VCdXR0b25zRGl2IiwiZ2V0RGl2aXNpb25NYXJrZG93bk5vZGVzIiwicGFnZU51bWJlciIsImdldFRva2VucyIsIk9iamVjdCIsImFzc2lnbiIsImh0bWwiLCJhc0hUTUwiLCJkb21FbGVtZW50IiwiY3JlYXRlRE9NRWxlbWVudCIsInVwZGF0ZVhNUCIsInVwZGF0ZVByZXZpZXdEaXYiLCJ1cGRhdGVNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhIiwiY2xlYXJYTVAiLCJjbGVhclByZXZpZXdEaXYiLCJjbGVhck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEiLCJoaWRlTWFya2Rvd25Db250YWluZXJEaXYiLCJzaG93TWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiIsInNob3dNYXJrZG93bkNvbnRhaW5lckRpdiIsImhpZGVNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2IiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiY2hpbGRFbGVtZW50cyIsIkNvbHVtbnNEaXYiLCJMZWZ0U2l6ZWFibGVEaXYiLCJQYWdlQnV0dG9uc0RpdiIsIm9uQ3VzdG9tUGFnZVVwZGF0ZSIsIlRhYkJ1dHRvbnNEaXYiLCJvbkN1c3RvbU1hcmtkb3duIiwib25DdXN0b21NYXJrZG93blN0eWxlIiwiTWFya2Rvd25Db250YWluZXJEaXYiLCJvbkN1c3RvbUtleVVwIiwiTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJDb2x1bW5EaXYiLCJSb3dzRGl2IiwiUmlnaHRTaXplYWJsZURpdiIsIlN1YkhlYWRpbmciLCJIVE1MRGl2IiwiSG9yaXpvbnRhbFNwbGl0dGVyRGl2IiwiUm93RGl2IiwiQ1NTVGV4dGFyZWEiLCJQcmV2aWV3RGl2IiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxNYXJrZG93biIsImluaXRpYWxNYXJrZG93blN0eWxlIiwic2V0TWFya2Rvd24iLCJzZXRNYXJrZG93blN0eWxlIiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwiZmlsZVBhdGgiLCJpbXBvcnRlZE5vZGUiLCJpbXBvcnRlZFRva2VucyIsImltcG9ydGVkQ2xhc3NOYW1lIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBc1VBOzs7ZUFBQTs7O29FQXBVc0I7b0JBRUU7cUJBQytEOzBCQUNZOzJEQUUvRTs4REFDRztpRUFDQTswREFDQztpRUFDRTtrRUFDQzsyREFDQzs0REFDQzsrREFDSTtvRUFDSzt5QkFFVjt5QkFDd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEQsSUFBTUEsZ0JBQWdCQyxvQkFBYSxDQUFDQyxXQUFXLElBQ3pDQyxpQkFBaUJDLHFCQUFjLENBQUNGLFdBQVcsSUFDM0NHLHFCQUFxQkMseUJBQWtCLENBQUNKLFdBQVcsSUFDbkRLLHNCQUFzQkMsMEJBQW1CLENBQUNOLFdBQVc7QUFFM0QsSUFBQSxBQUFNTyxxQkFBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7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