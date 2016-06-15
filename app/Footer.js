var React = require('react');

var Footer = React.createClass({
  render: function() {
    return (
      <div>
        <div class="col-lg-2 col-lg-offset-3 col-sm-4 hidden-xs">
          <ul class="footer-block">
              <h4>Menu</h4>
              <li><a href="index.html">Home</a></li>
              <li><a href="expertise.html">About Us</a></li>
              <li><a href="solutions.html">Solutions</a></li>
              <li><a href="customer_success.html">Our Work</a></li>
              <li><a href="careers.html">Careers</a></li>
          </ul>
        </div>
        <div class="col-lg-2 col-sm-4 hidden-xs">
            <ul class="footer-block">
                <h4>Media</h4>
                <li><a href="https://www.facebook.com/CounterpointConsulting/" target="_blank">Facebook</a></li>
                <li><a href="https://twitter.com/c20g" target="_blank">Twitter</a></li>
                <li><a href="https://www.linkedin.com/company/counterpoint-consulting-inc." target="_blank">LinkedIn</a></li>
                <li><a href="https://www.glassdoor.com/Reviews/Counterpoint-Consulting-Reviews-E285934.htm" target="_blank">Glassdoor</a></li>
            </ul>
        </div>
        <div class="col-lg-3 col-sm-4">
            <ul class="footer-block">
                <h4>Contact</h4>
                <li>8245 Boone Blvd.</li>
                <li>Suite 630</li>
                <li>Vienna, VA 22182</li>
                <li><i class="fa fa-fw fa-phone"></i>&nbsp;<a href="tel:866-809-0394">866.809.0394</a></li>
                <li><i class="fa fa-fw fa-envelope-o"></i>&nbsp;<a href="mailto:info@c20g.com">info@c20g.com</a></li>
            </ul>
        </div>
        <div class="col-lg-offset-3 col-lg-6">
            <p class="small footer-block">&copy; 2016 Counterpoint Consulting, Inc. All Rights Reserved.</p>
        </div>
      </div>
    );
  }
  
});
  
module.exports = Footer;