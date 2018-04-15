import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import React from 'react';
import ExpenseDashboardPage from'../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

// const ExpenseDashboardPage = () => (
//     <div>
//         This is from my dahsboard component 
//     </div>
//     );
    
//     const AddExpensePage = () => (
//         <div>
//         This is from my Add Expense Page component 
//         </div>
//         );
    
//     const EditExpensePage = () => (
//         <div>
//             This is where you edit 
//         </div>
//     );
    
//     const HelpPage = () => (
//         <div>
//                 This is where you get help 
//         </div>
//     );
    
//     const NotFoundPage = () => (
//                     <div>
//                         404 - <Link to="/">Go Home</Link>
//                     </div>
//                 );
    
//     const Header = () =>(
//             <header>
//                 <h1>
//                     Expensify
//                 </h1>
//                 <div>
//                     <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
//                 </div>
//                 <div>
//                     <NavLink to="/create" activeClassName="is-active">Create</NavLink>
//                 </div>
//                 <div>
//                     <NavLink to="/edit" activeClassName="is-active">Edit</NavLink>
//                 </div>
//                 <div>
//                     <NavLink to="/help" activeClassName="is-active">Get Help</NavLink>
//                 </div>
//             </header>
    
// );
            
    const AppRouter = ()=>(
        <BrowserRouter>
        <div>
            <Header />
                <Switch>
                    <Route path="/"component={ExpenseDashboardPage} exact={true} />
                    <Route path="/create" component={AddExpensePage}/>
                    <Route path="/edit/:id" component={EditExpensePage}/>
                    <Route path="/help" component={HelpPage}/>
                    <Route component={NotFoundPage}/>
                </Switch>  
        </div>
        </BrowserRouter>   
    );

    export default AppRouter;
    