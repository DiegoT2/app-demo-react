import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <>
<footer style={{marginTop:"5em"}} id="fh5co-footer" class="fh5co-bg" role="contentinfo">
		<div class="overlay"></div>
		<div class="container">
			<div class="row row-pb-md">
				<div class="col-md-4 fh5co-widget">
					<h3>Sobre nosotros.</h3>
					<p>Nos encontramos debajo del segundo arbol de Kokiri's Village</p>
				</div>
				<div class="col-md-8">
					<h3>Categorias</h3>
					<div class="col-md-4 col-sm-4 col-xs-6">
						<ul class="fh5co-footer-links">
							<li><a><Link className="nav-link active" to="/category/Swords"></Link> Swords</a></li>
							<li><a><Link className="nav-link active" to="/category/Shields"></Link> Shields</a></li>
							<li><a><Link className="nav-link active" to="/category/Consummable Items"></Link> Consummable Items</a></li>
							<li><a><Link className="nav-link active" to="/category/Clothes"></Link> Clothes</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="row copyright">
				<div class="col-md-12 text-center">
					<p>
						<small class="block">&copy; 2021 | All Rights Reserved.</small> 
						<small class="block">Powered by  kokiris-shop.com</small>
					</p>
				</div>
			</div>

		</div>
	</footer>
    </>
    )}

export default Footer