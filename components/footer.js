var React = require('react');
var Reflux = require('reflux');
var StateMixin = require('reflux-state-mixin')(Reflux);
var LocaleStore = require('../stores/LocaleStore');
var Locales = require('../services/locales');
var config = require('../clientconfig');

var Footer = React.createClass({

  mixins:[StateMixin.connect(LocaleStore)],

  __(text){
    return Locales.getLocaleString(this.state.locale, text);
  },

  render() {

    return (
        <footer className="page-footer white">
          <div className="divider"></div>
          <div className="container">

            <div className="row">
              <div className="col l6 s12" style={{marginTop: '15px'}}>

              </div>
              <div className="col l4 offset-l2 s12">
                <ul>
                  <li>{this.__('Contact Us:')} <a className="text-darken-3 center" href="#" onClick={function(){HS.beacon.open();}}>{config.contactEmail}</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright white">
            <div className="grey-text container center">
              <small>&copy; 2016 CrowdCover LLC</small>
            </div>
          </div>

      </footer>
    );
  }
});

module.exports = Footer;
