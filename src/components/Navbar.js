import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
				{/* <h1 style={{color: "red"}}>Hello Style!</h1> */}
					<img style={{width: "130px"}} src="/images/logo.svg" alt="English in Eight Minutes Logo" />
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link
								to="/"
								className="nav-link"
								aria-current="page"
							>
								Home
							</Link>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="nounsDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Nouns
							</a>
							<ul
								className="dropdown-menu"
								aria-labelledby="nounsDropdown"
							>
								<li>
									<Link
										to="/noun-categories/noun-definition"
										className="dropdown-item"
									>
										Noun Definition
									</Link>
								</li>
								<li>
									<hr className="dropdown-divider" />
								</li>
								<li>
									<Link
										to="/noun-categories/uncountable-and-countable"
										className="dropdown-item"
									>
										Uncountable & Countable 
									</Link>
								</li>
								<li>
									<hr className="dropdown-divider" />
								</li>
								<li>
									<Link
										to="/noun-categories/collective"
										className="dropdown-item"
									>
										Collective
									</Link>
								</li>
								<li>
									<hr className="dropdown-divider" />
								</li>
								<li>
									<Link
										to="/noun-categories/possessive-pronouns"
										className="dropdown-item"
									>
										Possessive
									</Link>
								</li>
							</ul>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="verbsDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Verbs
							</a>
							<ul
								className="dropdown-menu"
								aria-labelledby="verbsDropdown"
									>	
								<li>
									<Link
									to="/verbs-definition/verbs-def"
									className="dropdown-item"
									>
								    Verbs Definition
									</Link>
								</li>
								<li>
									<hr className="dropdown-divider" />
								</li>
								<li>
									<Link
										to="/present-verb-tenses/present-tense"
										className="dropdown-item"
									>
										Present Tense Verbs
									</Link>
								</li>
								<li>
									<hr className="dropdown-divider" />
								</li>
								<li>
									<Link
										to="/past-verb-tenses/past-tense"
										className="dropdown-item"
									>
										Past Tense Verbs
									</Link>
								</li>
								<li>
									<hr className="dropdown-divider" />
								</li>
								<li>
									<Link
										to="/future-verb-tenses/future-tense"
										className="dropdown-item"
									>
										Future Tense Verbs
									</Link>
								</li>
							</ul>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="phrasal-verbsDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Adjectives
							</a>
							<ul
								className="dropdown-menu"
								aria-labelledby="phrasal-verbsDropdown"
							>
								<li>
									<Link
										to="/adjective-categories/adjective-definition"
										className="dropdown-item"
									>
										Adjectives Definition
									</Link>
								</li>
								<li>
									<hr className="dropdown-divider" />
								</li>
								<li>
									<Link
										to="/adjective-categories/possessive-adjectives"
										className="dropdown-item"
									>
										Possessive Adjectives
									</Link>
								</li>
								<li>
									<hr className="dropdown-divider" />
								</li>
								<li>
									<Link
										to="/adjective-categories/comparative-adjectives"
										className="dropdown-item"
									>
										Comparative Adjectives
									</Link>
								</li>
								<li>
									<hr className="dropdown-divider" />
								</li>
								<li>
									<Link
										to="/adjective-categories/superlative-adjectives"
										className="dropdown-item"
									>
										Superlatives Adjectives
									</Link>
								</li>
							</ul>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="expressionsDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Other Topics
							</a>
							<ul
								className="dropdown-menu"
								aria-labelledby="expressionsDropdown"
							>
								<li>

								<Link 
										to="/expressions-categories/expressions-definition"
										className="dropdown-item"
										>
								        Idiomatic Expressions
								</Link>

								</li>
								<li>
									<hr className="dropdown-divider" />
								</li>
								
								<Link 
										to="/phrasal-verbs-categories/phrasal-verbs-definition"
										className="dropdown-item"
										>
								        Phrasal Verbs
							    </Link>
								<li>
									<hr className="dropdown-divider" />
								</li>
								<li>
								<Link
									to="/versus-categories/versus-definition"
								    className="dropdown-item"
									>
										Versus
								</Link>
								</li>
							</ul>
						</li>
					</ul>
					<form className="d-flex">
						<input
							className="form-control me-2"
							type="search"
							placeholder="e.g., phrasal verbs..."
							aria-label="Search"
						/>
						<button
							className="btn btn-primary"
							type="submit"
						>
							Search
						</button>
					</form>
				
				</div>
				
			</div>
			<hr />
		</nav>
		
	);
}
