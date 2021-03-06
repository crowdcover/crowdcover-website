var React = require('react');

var Footer = require('../components/footer');

var Reflux = require('reflux');
var StateMixin = require('reflux-state-mixin')(Reflux);
var LocaleStore = require('../stores/LocaleStore');
var Locales = require('../services/locales');

var SubPageBanner = require('../components/Home/SubPageBanner');

var config = require('../clientconfig');

var CrowdCover = React.createClass({

  mixins:[StateMixin.connect(LocaleStore, {initWithProps: ['locale']})],

  __(text){
    return Locales.getLocaleString(this.state.locale, text);
  },

  propTypes: {
    locale: React.PropTypes.string.isRequired
  },

  render() {

      return (
        <div>
            <SubPageBanner locale={this.props.locale}
              img="/assets/home/MapHubs-Map.jpg"
               title={this.__('CrowdCover')}
               subTitle={'CrowdCover LLC is a Washington D.C. based tech company providing consulting services and support for the open-source MapHubs software and OpenStreetMap applications'} />
          <main className="container">

            <div className="row" style={{marginTop: '30px'}}>

                <h4 lang="en">Projects</h4>
                <div className="divider" />
                  <div className="row" style={{marginTop: '10px'}}>
                    <div className="col s12 m5 l5">
                      <a href="http://maphubs.com" target="_blank">
                        <img className="responsive-img" src="/assets/home/maphubs.jpg" style={{width: '100%'}}></img>
                      </a>
                    </div>
                    <div className="col s12 m7 l7">
                      <a href="http://maphubs.com" target="_blank"><h5>MapHubs</h5></a>
                      <p lang="en" style={{fontSize: '18px', marginTop: 0}}>
                        MapHubs is software for making beautiful maps for your website and social media. It’s designed to be simple to use and requires no knowledge of GIS or coding to make custom maps using your data or third party data. MapHubs is currently being used by Map for Environment to make the global map of the environment.
                     </p>
                     <p lang="en" style={{fontSize: '18px', marginTop: 0}}>
                       Our role: Conceived, designed, and built software
                     </p>
                     <p lang="en" style={{fontSize: '18px', marginTop: 0}}>
                       Client: <a href="https://mapforenvironment.org">Map for Environment</a>
                    </p>

                    </div>

                  </div>
                  <div className="divider" />
                <div className="row" style={{marginTop: '10px'}}>
                  <div className="col s12 m7 l7">
                    <a href="http://rdc.moabi.org" target="_blank"><h5>Moabi DRC</h5></a>

                    <p lang="en" style={{fontSize: '18px', marginTop: 0}}>
                      Moabi DRC is an independent initiative that collaboratively monitors natural resource use in the Democratic Republic of the Congo.
                      Our community works toward a more transparent, equitable, and sustainable future for the people and environment of DRC.
                    </p>
                    <p lang="en" style={{fontSize: '18px', marginTop: 0}}>
                      Our role: Built the Moabi DRC platform using OpenStreetMap, designed civil society training program, and supervised field operations for the Moabi project
                    </p>
                    <p lang="en" style={{fontSize: '18px', marginTop: 0}}>
                      Client: <a href="http://www.iiasa.ac.at/">International Institute for Applied System Analysis</a>
                    </p>

                  </div>
                  <div className="col s12 m5 l5">
                    <a href="http://rdc.moabi.org" target="_blank">
                      <img className="responsive-img" src="/assets/home/moabi.jpg" style={{width: '100%'}}></img>
                    </a>
                  </div>
                </div>
                <div className="divider" />
                <div className="row" style={{marginTop: '10px'}}>
                  <div className="col s12 m5 l5">
                    <a href="http://loggingroads.org" target="_blank">
                      <img className="responsive-img" src="/assets/home/loggingroads.png" style={{width: '100%'}}></img>
                    </a>
                  </div>
                  <div className="col s12 m7 l7">
                    <a href="http://loggingroads.org" target="_blank"><h5>Logging Roads</h5></a>
                    <p lang="en" style={{fontSize: '18px', marginTop: 0}}>
                      Logging Roads is a collaborative mapping initiative implemented in partnership with <a href="http://www.globalforestwatch.org/">Global Forest Watch</a>, which aims to build a map and date all the logging roads in the Congo Basin.
                      Logging Roads won the <a href="http://www.eoesummit.org/challenges/data-innovation/winners/">2015 Eye on Earth Citizen Science Award</a>.
                      So far the platform has contributed over 30,000 roads to OSM with 12,000+ edits.
                    </p>
                    <p lang="en" style={{fontSize: '18px', marginTop: 0}}>
                      Our role: Designed and built Logging Roads website, coordinate bulk upload of road data to OSM, and organized mapathons in DRC and North America
                    </p>
                    <p lang="en" style={{fontSize: '18px', marginTop: 0}}>
                      Client: <a href="http://www.wri.org/">World Resources Institute</a>
                    </p>
                  </div>

                </div>
                <div className="divider" />
                <div className="row" style={{marginTop: '10px'}}>
                  <div className="col s12 m7 l7">
                    <a href="http://congomines.org" target="_blank"><h5>Congo Mines</h5></a>
                    <p lang="en" style={{fontSize: '18px', marginTop: 0}}>
                      Congo Mines is a documentation center on the mining sector in the Democratic Republic of the Congo . It was developed by the Office of the Carter Center in Katanga as part of its Mining Governance Program.
                      It aims to facilitate access to information that is often scattered and difficult to find.
                    </p>
                    <p lang="en" style={{fontSize: '18px', marginTop: 0}}>
                      Our role: Designed and built the updated Congo Mines website, conducted training in DRC for Carter Center field staff and partners, and provide regular maintenance and updates to the site
                    </p>
                    <p lang="en" style={{fontSize: '18px', marginTop: 0}}>
                      Client: <a href="https://www.cartercenter.org">Carter Center</a>
                    </p>
                  </div>
                  <div className="col s12 m5 l5">
                    <a href="http://congomines.org" target="_blank">
                      <img className="responsive-img" src="/assets/home/congo.jpg" style={{width: '100%'}}></img>
                    </a>
                  </div>
                </div>

                <div className="divider" />

                <h4 lang="en">Who we are</h4>
                <div className="row">
                  <div className="col s12 m12 l6">
                    <div className="circle"
                      style={{width: '250px', height: '250px',   margin: 'auto',
                        backgroundSize: 'cover',
                        backgroundPosition: '30% 50%',
                        backgroundImage: 'url(/assets/about/leo.jpg)'
                      }} />
                    <h5 lang="en">Leo Bottrill – Founder and CEO</h5>
                    <p lang="en" style={{fontSize: '18px', marginTop: 0}}>
                      Leo is the founder and CEO of CrowdCover LLC, a Washington DC-based company, dedicated to making maps more accessible to everyone. Leo has 15 years of experience in the environment and development sector including over 4 years working in field conservation in Vietnam and Indonesia.
                    </p>
                    <p lang="en" style={{fontSize: '18px'}}>
                      Prior to founding CrowdCover, Leo started the awarding winning Moabi DRC initiative (rdc.moabi.org) in the Democratic Republic of the Congo. Moabi DRC is the most comprehensive public database on land use in DRC. It is implemented by Observatoire Satellital des Forêts d'Afrique Centrale, a regional forest monitoring organization, and supported by a consortium of nonprofits, government agencies, research organizations, and companies.
                    </p>
                  </div>
                  <div className="col s12 m12 l6">
                    <div className="circle"
                      style={{width: '250px', height: '250px',   margin: 'auto',
                        backgroundSize: 'cover',
                        backgroundPosition: '30% 50%',
                        backgroundImage: 'url(/assets/about/kris.jpg)'
                      }} />
                    <h5 lang="en">Kristofor Carle – Chief Technology Officer</h5>
                    <p lang="en" style={{fontSize: '18px', marginTop: 0}}>
                      Kris is a geospatial software engineer focusing on spatial databases, web mapping applications, data analytics, and mobile applications. Before joining CrowdCover, Kris led a large geospatial data warehouse project and a mobile mapping application as a contractor for U.S. Army. He is very passionate about open-source technologies and has made over 1 million contributions to OpenStreetMap!
                    </p>
                  </div>
                </div>
            </div>
          </main>
          <Footer />
        </div>
      );


  }
});

module.exports = CrowdCover;
