import React from 'react';

function Header() {
  return (
    <div class="wrapper">
		<header class="main-header">
		  	<a href="../../index2.html" class="logo">
		  		<span class="logo-lg"><b>Dashboard</b>BDPI</span>
		  	</a>
		  	<nav class="navbar navbar-static-top">
			  	<a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
			  	</a>

			  	<div class="navbar-custom-menu">
					<ul class="nav navbar-nav">
				  		<li class="dropdown user user-menu">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown">
					  			<span class="hidden-xs"><i class="fa fa-sign-out"></i></span>
							</a>
					  	</li>
					</ul>
			  	</div>
		  	</nav>
		</header>
    </div>
  );
}

export default Header;
