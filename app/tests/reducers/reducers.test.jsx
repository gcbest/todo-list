var expect = require('expect');
var reducers = require('../../reducers/reducers');
var moment = require('moment');
var df = require('deep-freeze-strict');

describe('Reducers', () => {
   describe('searchTextReducer', () => {
      it('should set searchText', () => {
         var action = {
             type: 'SET_SEARCH_TEXT',
             searchText: 'dog'
         };

         var res = reducers.searchTextReducer(df(""), df(action));

         expect(res).toEqual(action.searchText);
      });
   });

   describe('showCompletedReducer', () => {
       it('should toggle showCompleted status', () => {
          var action = {
              type: "TOGGLE_SHOW_COMPLETED"
          };

          var res = reducers.showCompletedReducer(df(false), df(action));

          expect(res).toEqual(true);
       });
   });

   describe('todosReducer', () => {
      it('should add new todo', () => {
         var action = {
             type: 'ADD_TODO',
             text: 'walk the dog'
         };

         var res = reducers.todosReducer(df([]), action);

         expect(res.length).toEqual(1);
         expect(res[0].text).toEqual(action.text);
      });

      it('should toggle selected todo completed status', () => {
          var todosArray = [
              {
                  id: 11,
                  text: 'hey',
                  completed: false,
                  createdAt: moment().unix(),
                  completedAt: undefined
              },
              {
                  id: 22,
                  text: 'hi',
                  completed: true,
                  createdAt: moment().unix(),
                  completedAt: 125
              }
          ];


          var action = {
              type: 'TOGGLE_TODO',
              id: 22
          };

          var res = reducers.todosReducer(df(todosArray), df(action));

          expect(res[1].completed).toEqual(true);
          expect(res[1].completedAt).toEqual(undefined);
      });
   });
});