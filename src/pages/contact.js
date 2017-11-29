import React from 'react'
import Link from 'gatsby-link'

const aboutPage = () => (

  <div className="page">

    <article className="article">

    	<header>

		    <h1>Contact</h1>

    	</header>

    	<main>

    		<p>You can find me on the following: -</p>

    		<ul>

				<li><a href="https://twitter.com/twilowen">Twitter: @twilowen</a></li>
				<li><a href="https://github.com/William-Owen">GitHub: William-Owen</a></li>
				<li><a href="www.linkedin.com/in/williamowenuk">LinkedIn</a></li>

			</ul>

	    	<Link to="/">Go back to the homepage</Link>

    	</main>

    </article>

  </div>

)

export default aboutPage
