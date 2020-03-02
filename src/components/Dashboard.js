import React, { Component } from 'react';

class Dashboard extends Component {
	constructor(props){
  		super(props);
  		this.state={
  			username:'',
  			password:''
  		}
		console.log(this.state.username)
 	}

	render() {
	  return (
		  <div class="content-wrapper">
			  <section class="content-header">
				  <h1>Blank page<small>it all starts here</small></h1>
			  </section>

			  <section class="content">
		  		<div class="box">
		  			<div class="box-header with-border">
		  				<h3 class="box-title">Title</h3>

		  				<div class="box-tools pull-right"></div>
		  			</div>
		  			<div class="box-body">
		  			this is dashboard page
		  			</div>

		  			<div class="box-footer">Footer</div>
		  		</div>
		  	</section>
		</div>
	  );
  }
}

export default Dashboard;
