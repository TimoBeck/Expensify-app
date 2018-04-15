import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test  (' should set up removeExpense action object', () => {
const action = removeExpense({id:'123abc'});
expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id:'123abc'
    });
});

test  (' should set up editExpense action object', () => {
    const action = editExpense('123abc', {note:'124xyz'});
    expect(action).toEqual(
        {type: 'EDIT_EXPENSE',
        id:'123abc',
       updates:{note:'124xyz'}
        });
    });
    
    test  (' should set up addExpense action object with values', () => {
        const expenseData = {
            description: 'rent',
            amount:160000,
            createdAt:1000,
            note: 'This is a test last month',
        };
        const action = addExpense(expenseData);
        expect(action).toEqual(
            {type: 'ADD_EXPENSE',
            expense:{ ...expenseData,
            id: expect.any(String)}
        
            });
        });

        test  (' should set up addExpense action object with default values', () => {
            const action = addExpense();
            expect(action).toEqual = {
                id:expect.any(String),
                type:'ADD_EXPENSE',
                expense:{
                description : '',
                note :'',
                amount :0,
                createdAt : 0,
               

                }}});
            