import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Sidebar() {
  return (
	<aside class="main-sidebar">
		<section class="sidebar">
			<ul class="sidebar-menu" data-widget="tree">
  		  		<li class="header">MAIN NAVIGATION</li>
				<li><Link to="dashboard"><i class="fa fa-circle-o"></i> Dashboard</Link></li>
				<li><Link to="kavling"><i class="fa fa-circle-o"></i> Kavling</Link></li>
				<li><Link to="konsumen"><i class="fa fa-circle-o"></i> Konsumen</Link></li>
				<li><Link to="pegawai"><i class="fa fa-circle-o"></i> Pegawai</Link></li>

				<li><Link to="transaksi"><i class="fa fa-circle-o"></i> Transaksi</Link></li>
  		  		<li class="header">LABELS</li>
  		  		<li><a href="#"><i class="fa fa-circle-o text-red"></i> <span>Important</span></a></li>
  		  		<li><a href="#"><i class="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>
  		  		<li><a href="#"><i class="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>
  			</ul>
  	  	</section>
  	</aside>
  );
}

export default Sidebar;
