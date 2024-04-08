import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Career_machine } from './career_machine/career_machine';
import { Results } from './results/results';

export default function App() {
  return (
    <BrowserRouter>
        <div>
        <header>
            <nav>
                <menu>
                    <ul className="nav-bar">
                        <li>
                        <div className="logo">
                            <NavLink>
                                <embed src="logo_cleaned.svg" width="300" height="180" embedborder="0" typle="img/svg+xml"/>
                            </NavLink>
                        </div>
                        </li>
                        <li><NavLink to=''><span className="underline">Home</span></NavLink></li>
                    <li><NavLink to='career_machine'><span className="underline">Career Machine</span></NavLink></li>
                    <li><NavLink to='results'><span className="underline">Results</span></NavLink></li>
                    </ul>
                </menu>
            </nav>
        </header>

        <main>App components go here</main>
        <Routes>
            <Route path='/' element={<Login />} exact />
            <Route path='/career_machine' element={<Career_machine />} exact />
            <Route path='/results' element={<Results />} exact />
            <Route path='*' element={<NotFound />} exact />
        </Routes>

        <footer>
            <hr />
            <span className="text-reset">Neal Smalley</span>
            <br />
            <a href="https://github.com/NealSmalley/startup">Career Machine on GitHub</a>
        </footer>
        </div>
    </BrowserRouter>
  );
  function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  }
}