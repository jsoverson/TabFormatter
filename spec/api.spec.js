describe("Tab Visualizer", function() {
  var api;

  beforeEach(function() {
    api = TabFormatter;
  });

  it("Should format 4-character width tabs properly", function() {
    expect(api.format("1234123\t",4)).toEqual('1234123 ');
    expect(api.format("123412\t",4)).toEqual('123412  ');
    expect(api.format("12341\t",4)).toEqual('12341   ');
    expect(api.format("1234\t",4)).toEqual('1234    ');
  });

  it("Should format multiple tabs properly", function() {
    expect(api.format("\t1234123\t",4)).toEqual('    1234123 ');
    expect(api.format("\t123412\t",4)).toEqual('    123412  ');
    expect(api.format("\t12341\t",4)).toEqual('    12341   ');
    expect(api.format("\t1234\t",4)).toEqual('    1234    ');
    expect(api.format("\t12\t12341\t",4,'.')).toEqual('....12..12341...');
  });

  it("Should format 2-character width tabs properly",function(){
    expect(api.format("\t12\t12341\t",2,'.')).toEqual('..12..12341.');
  });

  it("Should format multiple lines properly",function(){
    expect(api.format("\t12\t\n\t\t12\t",4,'.')).toEqual("....12..\n........12..");
  });

  it("Should accept a multiple char replacement of width 1, a prefix and a suffix",function(){
    expect(api.format("12\t\t12",4,'&nbsp;',1,'<span>','</span>')).toEqual("12<span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>12");
  });

  it("Should accept a single char replacement, a prefix, and a suffix",function(){
    var string = "12\t\t12";
    var expected = '12[..][....]12';
    expect(api.format(string,4,'.',1,'[',']')).toEqual(expected);
  });

});
