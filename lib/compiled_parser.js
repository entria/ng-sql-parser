/* parser generated by jison 0.4.15 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,8],$V1=[5,29],$V2=[1,14],$V3=[1,13],$V4=[5,29,34,44],$V5=[1,17],$V6=[5,29,34,44,47,64],$V7=[1,25],$V8=[1,30],$V9=[1,29],$Va=[1,32],$Vb=[1,42],$Vc=[1,46],$Vd=[1,47],$Ve=[1,43],$Vf=[1,44],$Vg=[1,41],$Vh=[1,45],$Vi=[1,27],$Vj=[5,29,34],$Vk=[5,29,34,44,47],$Vl=[1,62],$Vm=[19,45],$Vn=[1,66],$Vo=[1,67],$Vp=[1,68],$Vq=[1,69],$Vr=[1,70],$Vs=[5,19,26,27,29,34,37,38,40,41,43,44,45,47,64,66,67,69,70,71,72,73,74,76,79,81,82,88,89,90,91,92,93,95,98],$Vt=[1,78],$Vu=[1,77],$Vv=[5,19,26,27,29,34,37,38,40,41,43,44,45,46,47,53,64,66,67,69,70,71,72,73,74,76,77,79,81,82,88,89,90,91,92,93,95,98],$Vw=[5,19,26,27,29,30,34,37,38,39,40,41,43,44,45,46,47,53,64,66,67,69,70,71,72,73,74,76,77,79,81,82,88,89,90,91,92,93,94,95,98],$Vx=[1,95],$Vy=[1,106],$Vz=[1,107],$VA=[1,115],$VB=[5,29,34,44,45,46],$VC=[1,123],$VD=[5,29,34,44,45,47,66],$VE=[2,105],$VF=[5,29,34,43,44,47,64],$VG=[1,131],$VH=[1,132],$VI=[1,133],$VJ=[1,134],$VK=[2,26],$VL=[1,137],$VM=[1,138],$VN=[5,19,26,27,29,34,37,38,40,41,43,44,45,47,64,66,67,69,70,76,79,81,82,88,89,90,91,92,93,95,98],$VO=[69,70,81],$VP=[5,29,34,37,38,40,41,43,44,47,64],$VQ=[1,165],$VR=[5,29,34,37,38,39,40,41,43,44,47,64],$VS=[2,30],$VT=[5,29,34,44,58,60];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"Root":3,"Query":4,"EOF":5,"SelectQuery":6,"Unions":7,"SelectWithLimitQuery":8,"BasicSelectQuery":9,"Select":10,"OrderClause":11,"GroupClause":12,"LimitClause":13,"SelectClause":14,"WhereClause":15,"SELECT":16,"Top":17,"Fields":18,"FROM":19,"Table":20,"Joins":21,"Expression":22,"DISTINCT":23,"TOP":24,"Literal":25,"AS":26,"LEFT_PAREN":27,"List":28,"RIGHT_PAREN":29,"WINDOW":30,"WINDOW_FUNCTION":31,"Number":32,"Union":33,"UNION":34,"ALL":35,"Join":36,"INNER":37,"JOIN":38,"ON":39,"LEFT":40,"RIGHT":41,"OUTER":42,"WHERE":43,"LIMIT":44,"SEPARATOR":45,"OFFSET":46,"ORDER":47,"BY":48,"OrderArgs":49,"OffsetClause":50,"OrderArg":51,"Value":52,"DIRECTION":53,"OffsetRows":54,"FetchClause":55,"ROW":56,"ROWS":57,"FETCH":58,"FIRST":59,"ONLY":60,"NEXT":61,"GroupBasicClause":62,"HavingClause":63,"GROUP":64,"ArgumentList":65,"HAVING":66,"CASE":67,"CaseBodies":68,"END":69,"ELSE":70,"MATH":71,"MATH_MULTI":72,"OPERATOR":73,"BETWEEN":74,"BetweenExpression":75,"CONDITIONAL":76,"SUB_SELECT_OP":77,"SubSelectExpression":78,"SUB_SELECT_UNARY_OP":79,"CaseBody":80,"WHEN":81,"THEN":82,"String":83,"Function":84,"UserFunction":85,"Boolean":86,"Parameter":87,"NUMBER":88,"BOOLEAN":89,"PARAMETER":90,"STRING":91,"DBLSTRING":92,"LITERAL":93,"DOT":94,"FUNCTION":95,"AggregateArgumentList":96,"Field":97,"STAR":98,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",16:"SELECT",19:"FROM",23:"DISTINCT",24:"TOP",26:"AS",27:"LEFT_PAREN",29:"RIGHT_PAREN",30:"WINDOW",31:"WINDOW_FUNCTION",34:"UNION",35:"ALL",37:"INNER",38:"JOIN",39:"ON",40:"LEFT",41:"RIGHT",42:"OUTER",43:"WHERE",44:"LIMIT",45:"SEPARATOR",46:"OFFSET",47:"ORDER",48:"BY",53:"DIRECTION",56:"ROW",57:"ROWS",58:"FETCH",59:"FIRST",60:"ONLY",61:"NEXT",64:"GROUP",66:"HAVING",67:"CASE",69:"END",70:"ELSE",71:"MATH",72:"MATH_MULTI",73:"OPERATOR",74:"BETWEEN",76:"CONDITIONAL",77:"SUB_SELECT_OP",79:"SUB_SELECT_UNARY_OP",81:"WHEN",82:"THEN",88:"NUMBER",89:"BOOLEAN",90:"PARAMETER",91:"STRING",92:"DBLSTRING",93:"LITERAL",94:"DOT",95:"FUNCTION",98:"STAR"},
productions_: [0,[3,2],[4,1],[4,2],[6,1],[6,1],[9,1],[9,2],[9,2],[9,3],[8,2],[10,1],[10,2],[14,6],[14,5],[14,5],[14,6],[14,6],[14,4],[14,4],[14,5],[14,5],[14,5],[14,6],[14,6],[17,2],[20,1],[20,2],[20,3],[20,3],[20,3],[20,4],[20,6],[7,1],[7,2],[33,2],[33,3],[21,1],[21,2],[36,5],[36,4],[36,5],[36,5],[36,6],[36,6],[36,6],[36,6],[15,2],[13,2],[13,4],[13,4],[11,3],[11,4],[49,1],[49,3],[51,1],[51,2],[50,2],[50,3],[54,2],[54,2],[55,4],[55,4],[12,1],[12,2],[62,3],[63,2],[22,4],[22,6],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,5],[22,3],[22,2],[22,1],[22,1],[68,1],[68,2],[80,4],[75,3],[78,3],[52,1],[52,1],[52,1],[52,1],[52,1],[52,1],[52,1],[28,1],[32,1],[86,1],[87,1],[83,1],[83,1],[25,1],[25,3],[84,4],[85,3],[85,4],[96,1],[96,2],[65,1],[65,3],[18,1],[18,3],[97,1],[97,1],[97,3],[97,2]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return this.$ = $$[$0-1];
break;
case 2: case 4: case 5: case 6: case 11: case 25: case 63: case 78: case 79: case 80: case 85: case 86: case 87: case 88: case 89: case 90: case 91:
this.$ = $$[$0];
break;
case 3:
this.$ = (function () {
        $$[$0-1].unions = $$[$0];
        return $$[$0-1];
      }());
break;
case 7:
this.$ = (function () {
        $$[$0-1].order = $$[$0];
        return $$[$0-1];
      }());
break;
case 8:
this.$ = (function () {
        $$[$0-1].group = $$[$0];
        return $$[$0-1];
      }());
break;
case 9:
this.$ = (function () {
        $$[$0-2].group = $$[$0-1];
        $$[$0-2].order = $$[$0];
        return $$[$0-2];
      }());
break;
case 10:
this.$ = (function () {
        $$[$0-1].limit = $$[$0];
        return $$[$0-1];
      }());
break;
case 12:
this.$ = (function () {
        $$[$0-1].where = $$[$0];
        return $$[$0-1];
      }());
break;
case 13:
this.$ = new yy.Select($$[$0-3], $$[$0-1], false, $$[$0], [], $$[$0-4]);
break;
case 14: case 15:
this.$ = new yy.Select($$[$0-2], $$[$0], false, [], [], $$[$0-3]);
break;
case 16: case 17:
this.$ = new yy.Select($$[$0-2], $$[$0], true, [], [], $$[$0-3]);
break;
case 18: case 19:
this.$ = new yy.Select($$[$0-2], $$[$0], false);
break;
case 20:
this.$ = new yy.Select($$[$0-2], $$[$0], true);
break;
case 21: case 22:
this.$ = new yy.Select($$[$0-3], $$[$0-1], false, $$[$0]);
break;
case 23: case 24:
this.$ = new yy.Select($$[$0-3], $$[$0-1], true, $$[$0]);
break;
case 26:
this.$ = new yy.Table($$[$0]);
break;
case 27:
this.$ = new yy.Table($$[$0-1], $$[$0]);
break;
case 28:
this.$ = new yy.Table($$[$0-2], $$[$0]);
break;
case 29: case 59: case 60: case 61: case 62: case 69:
this.$ = $$[$0-1];
break;
case 30: case 84:
this.$ = new yy.SubSelect($$[$0-1]);
break;
case 31:
this.$ = new yy.SubSelect($$[$0-2], $$[$0]);
break;
case 32:
this.$ = new yy.Table($$[$0-5], null, $$[$0-4], $$[$0-3], $$[$0-1]);
break;
case 33: case 37: case 53: case 105: case 107:
this.$ = [$$[$0]];
break;
case 34:
this.$ = $$[$0-1].concat($$[$01]);
break;
case 35:
this.$ = new yy.Union($$[$0]);
break;
case 36:
this.$ = new yy.Union($$[$0], true);
break;
case 38: case 81:
this.$ = $$[$0-1].concat($$[$0]);
break;
case 39:
this.$ = new yy.Join($$[$0-2], $$[$0], '', 'INNER');
break;
case 40:
this.$ = new yy.Join($$[$0-2], $$[$0]);
break;
case 41:
this.$ = new yy.Join($$[$0-2], $$[$0], 'LEFT');
break;
case 42:
this.$ = new yy.Join($$[$0-2], $$[$0], 'RIGHT');
break;
case 43:
this.$ = new yy.Join($$[$0-2], $$[$0], 'LEFT', 'INNER');
break;
case 44:
this.$ = new yy.Join($$[$0-2], $$[$0], 'RIGHT', 'INNER');
break;
case 45:
this.$ = new yy.Join($$[$0-2], $$[$0], 'LEFT', 'OUTER');
break;
case 46:
this.$ = new yy.Join($$[$0-2], $$[$0], 'RIGHT', 'OUTER');
break;
case 47:
this.$ = new yy.Where($$[$0]);
break;
case 48:
this.$ = new yy.Limit($$[$0]);
break;
case 49:
this.$ = new yy.Limit($$[$0], $$[$0-2]);
break;
case 50:
this.$ = new yy.Limit($$[$0-2], $$[$0]);
break;
case 51:
this.$ = new yy.Order($$[$0]);
break;
case 52:
this.$ = new yy.Order($$[$0-1], $$[$0]);
break;
case 54: case 106: case 108:
this.$ = $$[$0-2].concat($$[$0]);
break;
case 55:
this.$ = new yy.OrderArgument($$[$0], 'ASC');
break;
case 56:
this.$ = new yy.OrderArgument($$[$0-1], $$[$0]);
break;
case 57:
this.$ = new yy.Offset($$[$0]);
break;
case 58:
this.$ = new yy.Offset($$[$0-1], $$[$0]);
break;
case 64:
this.$ = (function () {
        $$[$0-1].having = $$[$0];
        return $$[$0-1];
      }());
break;
case 65:
this.$ = new yy.Group($$[$0]);
break;
case 66:
this.$ = new yy.Having($$[$0]);
break;
case 67:
this.$ = new yy.Case($$[$0-2], $$[$0-1]);
break;
case 68:
this.$ = new yy.Case($$[$0-4], $$[$0-3], $$[$0-1]);
break;
case 70: case 71: case 72: case 73: case 74: case 76:
this.$ = new yy.Op($$[$0-1], $$[$0-2], $$[$0]);
break;
case 75:
this.$ = new yy.Op($$[$0-3], $$[$0-4], $$[$0-1]);
break;
case 77:
this.$ = new yy.UnaryOp($$[$0-1], $$[$0]);
break;
case 82:
this.$ = [new yy.CaseBody($$[$0-2], $$[$0])];
break;
case 83:
this.$ = new yy.BetweenOp([$$[$0-2], $$[$0]]);
break;
case 92:
this.$ = new yy.ListValue($$[$0]);
break;
case 93:
this.$ = new yy.NumberValue($$[$0]);
break;
case 94:
this.$ = new yy.BooleanValue($$[$0]);
break;
case 95:
this.$ = new yy.ParameterValue($$[$0]);
break;
case 96:
this.$ = new yy.StringValue($$[$0], "'");
break;
case 97:
this.$ = new yy.StringValue($$[$0], '"');
break;
case 98:
this.$ = new yy.LiteralValue($$[$0]);
break;
case 99:
this.$ = new yy.LiteralValue($$[$0-2], $$[$0]);
break;
case 100:
this.$ = new yy.FunctionValue($$[$0-3], $$[$0-1]);
break;
case 101:
this.$ = new yy.FunctionValue($$[$0-2], null, true);
break;
case 102:
this.$ = new yy.FunctionValue($$[$0-3], $$[$0-1], true);
break;
case 103:
this.$ = new yy.ArgumentListValue($$[$0]);
break;
case 104:
this.$ = new yy.ArgumentListValue($$[$0], true);
break;
case 109:
this.$ = new yy.Star();
break;
case 110:
this.$ = new yy.Field($$[$0]);
break;
case 111:
this.$ = new yy.Field($$[$0-2], $$[$0]);
break;
case 112:
this.$ = new yy.Field($$[$0-1], $$[$0]);
break;
}
},
table: [{3:1,4:2,6:3,8:4,9:5,10:6,14:7,16:$V0},{1:[3]},{5:[1,9]},o($V1,[2,2],{7:10,13:11,33:12,34:$V2,44:$V3}),o($V4,[2,4]),o($V4,[2,5]),o($V4,[2,6],{11:15,12:16,62:18,47:$V5,64:[1,19]}),o($V6,[2,11],{15:20,43:[1,21]}),{17:22,18:24,22:28,23:[1,23],24:$V7,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh,97:26,98:$Vi},{1:[2,1]},o($V1,[2,3],{33:48,34:$V2}),o($V4,[2,10]),o($Vj,[2,33]),{32:49,88:$Vb},{6:50,8:4,9:5,10:6,14:7,16:$V0,35:[1,51]},o($V4,[2,7]),o($V4,[2,8],{11:52,47:$V5}),{48:[1,53]},o($Vk,[2,63],{63:54,66:[1,55]}),{48:[1,56]},o($V6,[2,12]),{22:57,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},{18:58,22:28,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh,97:26,98:$Vi},{17:59,18:60,22:28,24:$V7,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh,97:26,98:$Vi},{19:[1,61],45:$Vl},{22:63,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},o($Vm,[2,107]),o($Vm,[2,109]),o($Vm,[2,110],{25:65,26:[1,64],71:$Vn,72:$Vo,73:$Vp,74:$Vq,76:$Vr,93:$Vg}),{22:71,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},{4:73,6:3,8:4,9:5,10:6,14:7,16:$V0,22:72,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},o($Vs,[2,79],{77:[1,74]}),{27:[1,76],78:75},o($Vs,[2,78]),o([5,19,26,29,34,37,38,40,41,43,44,45,46,47,53,64,66,67,69,70,71,72,73,74,76,77,79,81,82,88,89,90,91,92,93,95,98],[2,85],{27:$Vt,94:$Vu}),o($Vv,[2,86]),o($Vv,[2,87]),o($Vv,[2,88]),o($Vv,[2,89]),o($Vv,[2,90]),o($Vv,[2,91]),o($Vw,[2,98]),o([5,19,26,27,29,34,37,38,40,41,43,44,45,46,47,53,56,57,64,66,67,69,70,71,72,73,74,76,77,79,81,82,88,89,90,91,92,93,95,98],[2,93]),o($Vv,[2,96]),o($Vv,[2,97]),{27:[1,79]},o($Vv,[2,94]),o($Vv,[2,95]),o($Vj,[2,34]),o($V4,[2,48],{45:[1,80],46:[1,81]}),o($Vj,[2,35],{13:11,44:$V3}),{6:82,8:4,9:5,10:6,14:7,16:$V0},o($V4,[2,9]),{25:34,32:35,49:83,51:84,52:85,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},o($Vk,[2,64]),{22:86,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},{22:88,25:34,27:$V8,32:35,52:31,65:87,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},o($V6,[2,47],{71:$Vn,72:$Vo,73:$Vp,74:$Vq,76:$Vr}),{19:[1,89],45:$Vl},{18:90,22:28,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh,97:26,98:$Vi},{19:[1,91],45:$Vl},{20:92,22:93,25:94,27:$Vx,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},{22:28,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh,97:96,98:$Vi},o([27,67,79,88,89,90,91,92,93,95,98],[2,25],{71:$Vn,72:$Vo,73:$Vp,74:$Vq,76:$Vr}),{25:97,93:$Vg},o($Vm,[2,112],{94:$Vu}),{22:98,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},{22:99,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},{22:100,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},{22:102,25:34,27:$V8,32:35,52:31,67:$V9,75:101,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},{22:103,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},{68:104,71:$Vn,72:$Vo,73:$Vp,74:$Vq,76:$Vr,80:105,81:$Vy},{29:$Vz,71:$Vn,72:$Vo,73:$Vp,74:$Vq,76:$Vr},{29:[1,108]},{27:[1,109],78:110},o($Vs,[2,77]),{4:73,6:3,8:4,9:5,10:6,14:7,16:$V0},{93:[1,111]},{22:88,23:$VA,25:34,27:$V8,29:[1,112],32:35,52:31,65:114,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh,96:113},{22:88,23:$VA,25:34,27:$V8,32:35,52:31,65:114,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh,96:116},{32:117,88:$Vb},{32:118,88:$Vb},o($Vj,[2,36],{13:11,44:$V3}),o($V4,[2,51],{50:119,45:[1,120],46:[1,121]}),o($VB,[2,53]),o($VB,[2,55],{53:[1,122]}),o($Vk,[2,66],{71:$Vn,72:$Vo,73:$Vp,74:$Vq,76:$Vr}),o([5,29,34,44,47,66],[2,65],{45:$VC}),o($VD,$VE,{71:$Vn,72:$Vo,73:$Vp,74:$Vq,76:$Vr}),{20:124,22:125,25:94,27:$Vx,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},{19:[1,126],45:$Vl},{20:127,22:128,25:94,27:$Vx,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},o($VF,[2,18],{21:129,36:130,37:$VG,38:$VH,40:$VI,41:$VJ}),o($VF,[2,19],{36:130,21:135,37:$VG,38:$VH,40:$VI,41:$VJ,71:$Vn,72:$Vo,73:$Vp,74:$Vq,76:$Vr}),o([5,29,34,37,38,40,41,43,44,47,64,71,72,73,74,76,77],$VK,{25:136,26:$VL,27:$Vt,30:$VM,93:$Vg,94:$Vu}),{4:140,6:3,8:4,9:5,10:6,14:7,16:$V0,22:141,25:34,27:$V8,28:139,32:35,52:31,65:142,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},o($Vm,[2,108]),o($Vm,[2,111],{94:$Vu}),o([5,19,26,27,29,34,37,38,40,41,43,44,45,47,64,66,67,69,70,71,73,76,79,81,82,88,89,90,91,92,93,95,98],[2,70],{72:$Vo,74:$Vq}),o([5,19,26,27,29,34,37,38,40,41,43,44,45,47,64,66,67,69,70,71,72,73,76,79,81,82,88,89,90,91,92,93,95,98],[2,71],{74:$Vq}),o([5,19,26,27,29,34,37,38,40,41,43,44,45,47,64,66,67,69,70,73,76,79,81,82,88,89,90,91,92,93,95,98],[2,72],{71:$Vn,72:$Vo,74:$Vq}),o($Vs,[2,73]),{71:$Vn,72:$Vo,73:$Vp,74:$Vq,76:[1,143]},o($VN,[2,74],{71:$Vn,72:$Vo,73:$Vp,74:$Vq}),{69:[1,144],70:[1,145],80:146,81:$Vy},o($VO,[2,80]),{22:147,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},o($Vs,[2,69]),o($Vs,[2,84]),{4:73,6:3,8:4,9:5,10:6,14:7,16:$V0,22:88,25:34,27:$V8,28:148,32:35,52:31,65:142,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},o($Vs,[2,76]),o($Vw,[2,99]),o($Vv,[2,101]),{29:[1,149]},{29:[2,103],45:$VC},{22:88,25:34,27:$V8,32:35,52:31,65:150,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},{29:[1,151]},o($V4,[2,49]),o($V4,[2,50]),o($V4,[2,52]),{25:34,32:35,51:152,52:85,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},{32:154,54:153,88:$Vb},o($VB,[2,56]),{22:155,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},o($VF,[2,14],{36:130,21:156,37:$VG,38:$VH,40:$VI,41:$VJ}),o($VF,[2,15],{71:$Vn,72:$Vo,73:$Vp,74:$Vq,76:$Vr}),{20:157,22:158,25:94,27:$Vx,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},o($VF,[2,20],{36:130,21:159,37:$VG,38:$VH,40:$VI,41:$VJ}),{21:160,36:130,37:$VG,38:$VH,40:$VI,41:$VJ,71:$Vn,72:$Vo,73:$Vp,74:$Vq,76:$Vr},o($VF,[2,21],{36:161,37:$VG,38:$VH,40:$VI,41:$VJ}),o($VP,[2,37]),{38:[1,162]},{20:163,25:164,27:$VQ,93:$Vg},{37:[1,167],38:[1,166],42:[1,168]},{37:[1,170],38:[1,169],42:[1,171]},o($VF,[2,22],{36:161,37:$VG,38:$VH,40:$VI,41:$VJ}),o($VR,[2,27],{94:$Vu}),{25:172,93:$Vg},{31:[1,173]},{29:[1,174]},{29:[1,175]},{29:$Vz,45:$VE,71:$Vn,72:$Vo,73:$Vp,74:$Vq,76:$Vr},{29:[2,92],45:$VC},{22:176,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},o($Vs,[2,67]),{22:177,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},o($VO,[2,81]),{71:$Vn,72:$Vo,73:$Vp,74:$Vq,76:$Vr,82:[1,178]},{29:[1,179]},o($Vv,[2,102]),{29:[2,104],45:$VC},o($Vv,[2,100]),o($VB,[2,54]),o($V4,[2,57],{55:180,58:[1,181]}),{56:[1,182],57:[1,183]},o($VD,[2,106],{71:$Vn,72:$Vo,73:$Vp,74:$Vq,76:$Vr}),o($VF,[2,13],{36:161,37:$VG,38:$VH,40:$VI,41:$VJ}),o($VF,[2,16]),o($VF,[2,17],{71:$Vn,72:$Vo,73:$Vp,74:$Vq,76:$Vr}),o($VF,[2,23],{36:161,37:$VG,38:$VH,40:$VI,41:$VJ}),o($VF,[2,24],{36:161,37:$VG,38:$VH,40:$VI,41:$VJ}),o($VP,[2,38]),{20:184,25:164,27:$VQ,93:$Vg},{39:[1,185]},{25:136,26:$VL,30:$VM,39:$VK,93:$Vg,94:$Vu},{4:186,6:3,8:4,9:5,10:6,14:7,16:$V0,22:88,25:34,27:$V8,28:139,32:35,52:31,65:142,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},{20:187,25:164,27:$VQ,93:$Vg},{38:[1,188]},{38:[1,189]},{20:190,25:164,27:$VQ,93:$Vg},{38:[1,191]},{38:[1,192]},o($VR,[2,28],{94:$Vu}),{27:[1,193]},o($VR,[2,29]),o([5,29,34,37,38,40,41,43,44,47,64,71,72,73,74,76],$VS,{25:194,93:$Vg}),o($VN,[2,83],{71:$Vn,72:$Vo,73:$Vp,74:$Vq}),{69:[1,195],71:$Vn,72:$Vo,73:$Vp,74:$Vq,76:$Vr},{22:196,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},o($Vs,[2,75]),o($V4,[2,58]),{59:[1,197],61:[1,198]},o($VT,[2,59]),o($VT,[2,60]),{39:[1,199]},{22:200,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},{29:[1,201]},{39:[1,202]},{20:203,25:164,27:$VQ,93:$Vg},{20:204,25:164,27:$VQ,93:$Vg},{39:[1,205]},{20:206,25:164,27:$VQ,93:$Vg},{20:207,25:164,27:$VQ,93:$Vg},{32:208,88:$Vb},o($VR,[2,31],{94:$Vu}),o($Vs,[2,68]),o($VO,[2,82],{71:$Vn,72:$Vo,73:$Vp,74:$Vq,76:$Vr}),{32:154,54:209,88:$Vb},{32:154,54:210,88:$Vb},{22:211,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},o($VP,[2,40],{71:$Vn,72:$Vo,73:$Vp,74:$Vq,76:$Vr}),{25:194,39:$VS,93:$Vg},{22:212,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},{39:[1,213]},{39:[1,214]},{22:215,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},{39:[1,216]},{39:[1,217]},{29:[1,218]},{60:[1,219]},{60:[1,220]},o($VP,[2,39],{71:$Vn,72:$Vo,73:$Vp,74:$Vq,76:$Vr}),o($VP,[2,41],{71:$Vn,72:$Vo,73:$Vp,74:$Vq,76:$Vr}),{22:221,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},{22:222,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},o($VP,[2,42],{71:$Vn,72:$Vo,73:$Vp,74:$Vq,76:$Vr}),{22:223,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},{22:224,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},o($VR,[2,32]),o($V4,[2,61]),o($V4,[2,62]),o($VP,[2,43],{71:$Vn,72:$Vo,73:$Vp,74:$Vq,76:$Vr}),o($VP,[2,45],{71:$Vn,72:$Vo,73:$Vp,74:$Vq,76:$Vr}),o($VP,[2,44],{71:$Vn,72:$Vo,73:$Vp,74:$Vq,76:$Vr}),o($VP,[2,46],{71:$Vn,72:$Vo,73:$Vp,74:$Vq,76:$Vr})],
defaultActions: {9:[2,1]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        function lex() {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}