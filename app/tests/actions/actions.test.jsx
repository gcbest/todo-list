var expect = require('expect');
var actions = require('../../actions/actions');

describe('Actions', () => {
   // testing action generators, you should set up the
    // action you expect to get as an output first
    it('should generate search text action', () => {
       var action = {
           type: "SET_SEARCH_TEXT",
           searchText: "Some search text"
       };

       var res = actions.setSearchText(action.searchText);

       expect(res).toEqual(action);
   });

    it('should generate add to do action', () => {
       var action = {
           type: "ADD_TODO",
           text: "some todo text"
       };

       var res = actions.addTodo(action.text);

       expect(res).toEqual(action);
    });

    it('should generate toggle show completed action', () => {
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        };

        var res = actions.toggleShowCompleted();

        expect(res).toEqual(action);
    });

    it('should generate toggle todo action', () => {
       var action = {
           type: "TOGGLE_TODO",
           id: "123"
       };

       var res = actions.toggleTodo(action.id);

       expect(res).toEqual(action);
    });
});
