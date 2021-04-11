import { Link } from "react-router-dom";

export default function Navbar() {
    return (
    <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><img src="/images/logo.png" alt=""/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="nounsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Verbs
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="nounsDropdown">
                            <li><Link to="/nouns" className="dropdown-item">Past Tense Verbs</Link></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><Link to="/present-tense-verbs" className="dropdown-item">Present Tense Verbs</Link></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Futures Verbs</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Adverbs</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="verbsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Versus
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="verbsDropdown">
                            <li><a className="dropdown-item" href="#">Remember versus Remind</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Bring versus Take</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Say versus Tell</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Speak versus Talk</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="phrasal-verbsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Phrasal Verbs
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="phrasal-verbsDropdown">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="expressionsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Expressions
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="expressionsDropdown">
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>

                          
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-primary navbar-search-btn" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
    )}