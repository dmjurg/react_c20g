var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <div>
        <section id="help-info" class="visible-lg">
          <div class="row">
            <div class="col-md-12">
              <ul class="pull-right">
                <li><a href="contact.html">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </section>
    
        <nav id="nav-menu" class="navbar navbar-inverse">
          <div class="navbar-header">
            {/*<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span> 
            </button>*/}
            <div id="navbar-logo"><a href="index.html">
              {/*<img src="./assets/c20g_logo_BlkBluWht.png" />*/}
              <h1>Counterpoint</h1></a>
            </div>
          </div>
          <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav navbar-right">
              <li role="presentation"><a href="expertise.html">Expertise</a></li>
              <li role="presentation"><a href="solutions.html">Solutions</a></li>
              <li role="presentation"><a href="customer_success.html">Customer Sucess</a></li>
              <li role="presentation"><a href="about.html">About</a></li>
              <li role="presentation"><a href="careers.html">Careers</a></li>
              <li role="presentation" class="hidden-lg"><a href="contact.html">Contact Us</a></li>
            </ul>
          </div>  
        </nav>   
      </div>
    );
  }
  
});
  
module.exports = Header;