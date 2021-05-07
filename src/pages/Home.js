import { Link } from "react-router-dom"

export default function Home() {
	return (
		<div className="home">
			<div className="container">
				<h1>
					Welcome to{" "}
					<span className="title-span">English in Eight Minutes</span>
				</h1>
				<p>
					{" "}
					This website offers English lessons you can complete in less
					than 8 minutes. Pick a topic, study a few minutes, and then
					do the corresponding exercise. The focus is on English
					phrasal verbs, grammar, and idiomatic expressions specific
					to <b> the United States. </b>
				</p>
			</div>
			
			<div class="container">
				
					<div class="row">
						<div class="col-12 col-md-6">
							<Link to="/phrasal-verbs-categories/phrasal-verbs-definition">
								<div className="card">
									<div className="card-body">
										<div className="bs-phrasal-verbs-icon">
											<i className="far fa-comments fa-6x"></i>
										</div>
										<div className="content">
											<p className="content-title">Phrasal Verbs</p>
											<p className="content-definition">Verb/Preposition combinations
												<br/>with a specific meaning</p>
											<p className="card-example">Get up, Break down, Speak out</p>
										</div>									
									</div>
								</div>
							</Link>
						</div>
					
						{/* Second Card */}
						<div class="col-12 col-md-6">
							<Link to="expressions-categories/expressions-definition">
								<div className="card">
									<div className="card-body">
										<div>
                            		    	<i className="far fa-comments fa-6x"></i>
                            		    </div>
                            			<div className="content">
                            		    	<p className="content-title">Idiomatic Expressions</p>
                            		    	<p className="content-definition">Informal Expressions</p>
                            		    	<p className="card-example">To wing it, Foolproof, Second wind</p>
                            			</div>

									</div>
								</div>
							</Link>
						</div>
						
					</div>
					
					{/* Second Row */}
					<div class="row">
						<div class="col-12 col-sm-6 col-md-4">
							<Link to="/noun-categories/noun-definition">
                        		<div className="noun-examples" >
                        			<i className="fas fa-tree"></i>
                        			<p>Nouns</p>
                        			<p><span className="noun-span">people, places and things</span></p>
                        			<p>woman, tree, car</p>
                        		</div>
                        	</Link>

						</div>
						<div class="col-12 col-sm-6 col-md-4">
						<Link to="/present-verb-tenses/verb-definition">
                			<div className="verb-examples">
                    			<i className="fas fa-running"></i>
                    			<p>Verbs</p>
                    			<p><span className="verb-span">action words</span></p>
                    			<p>run, fight, sing</p>
              		  		</div>
                		</Link>

						</div>
						<div class="col-12 col-sm-6 col-md-4">
						<Link to="/adjective-categories/adjective-definition">
							<div className="adjective-examples">
                    			<img src="/images/strong.png" className="strong-img" alt=""/>
                    			<p>Adjectives</p>
                    			<p><span className="adjective-span">describe nouns</span></p>
                    			<p>smart, strong, funny</p>
                			</div>
						</Link>

						</div>

					</div>
				
			</div>

			

		
		</div>
	);
}
