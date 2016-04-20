var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

describe('the todo.App', function() {
  describe('the todo object', function(){


    it('should have all the necessary methods', function(){
      expect(todo.util.trimTodoName).to.be.a('function');
      expect(todo.util.isValidTodoName).to.be.a('function');
      expect(todo.util.getUniqueId).to.be.a('function');
    });
  });
});

describe('the todo.util methods', function() {
  
  it('should trim the whitespace from the TodoName', function() {
    var name = "Richard     ";
    var answer = todo.util.trimTodoName(name);
    expect(answer).to.equal("Richard");
  });

  it('should validate the name', function() {
    var wrongName = 'R';
    var answer = todo.util.isValidTodoName(wrongName);
    expect(answer).to.equal(false);
  });

  it('should get a unique ID', function() {
    var lastId = 1;
    console.log('lastId',lastId);
    todo.util.getUniqueId();
    console.log('lastId after answer',lastId);
    expect(lastId).to.not.equal(1);
  });

});
