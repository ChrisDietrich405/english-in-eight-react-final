import { Link } from "react-router-dom"



export default function Home() {
	return (
		<div className="home">
			<div className="container">
				
				<h1>
					Welcome to{" "}
					<span className="title-span">English in Eight Minutes</span>
				</h1>
				<p className="title-content">
					{" "}
					This website offers English lessons you can complete in less
					than 8 minutes. Pick a topic, study a few minutes, and then
					do the corresponding exercise. The focus is on English
					phrasal verbs, grammar, and idiomatic expressions specific
					to <b> the United States. </b>
				</p>
			</div>
			
			<div className="container card-container">
				
					<div className="row">
						<div className="col-12 col-xl-6 col-lg-7 col-md-12">
							<Link to="/phrasal-verbs-categories/phrasal-verbs-definition">
								<div className="card phrasal-verb-card">
									<div className="card-body">
										<div className="bs-phrasal-verbs-icon">
											<i className="far fa-comments fa-4x" aria-hidden="true"></i>
										</div>
										<div className="content phrasal-verb-card">
											<p className="content-title">Phrasal Verbs</p>
											<p className="content-definition">Definition: Verb/Preposition combinations
												<br/>with a specific meaning</p>
											<p className="card-example">Examples: Get up, Break down, Speak out</p>
										</div>									
									</div>
								</div>
							</Link>
						</div>
					
						{/* Second Card */}
						<div className="col-12 col-xl-6 col-lg-5 ">
							<Link to="expressions-categories/expressions-definition">
								<div className="card">
									<div className="card-body">
										<div>
                            		    	<i className="far fa-comments fa-4x" aria-hidden="true"></i>
                            		    </div>
                            			<div className="content">
                            		    	<p className="content-title">Idiomatic Expressions</p>
                            		    	<p className="content-definition">Definition: Informal Expressions</p>
                            		    	<p className="card-example">Examples: To wing it, Foolproof, Second wind</p>
                            			</div>

									</div>
								</div>
							</Link>
						</div>
						
					</div>
					
					{/* Second Row */}
					<div className="row second-row">
						<div className="col-12 col-md-4 col-sm-12 ">
							<Link to="/noun-categories/noun-definition">
                        		<div className="noun-examples" >
                        			<i className="fas fa-tree" aria-hidden="true"></i>
                        			<p className="content-title-second-row">Nouns</p>
                        			<p className="content-definition">people, places and things</p>
                        			<p>woman, tree, car</p>
                        		</div>
                        	</Link>

						</div>
						<div className="col-12 col-md-4 col-sm-6 ">
						<Link to="/present-verb-tenses/verb-definition">
                			<div className="verb-examples">
                    			<i className="fas fa-running" aria-hidden="true"></i>
                    			<p className="content-title-second-row">Verbs</p>
                    			<p>action words</p>
                    			<p>run, fight, sing</p>
              		  		</div>
                		</Link>

						</div>
						<div className="col-12 col-md-4 col-sm-6 ">
						<Link to="/adjective-categories/adjective-definition">
							<div className="adjective-examples">
                    			<img src="/images/strong.png" className="strong-img" aria-hidden="true"/>
                    			<p className="content-title-second-row">Adjectives</p>
                    			<p>describe nouns</p>
                    			<p>smart, strong, funny</p>
                			</div>
						</Link>

						</div>

					</div>
				
			</div>

			

		
		</div>
	);
}
