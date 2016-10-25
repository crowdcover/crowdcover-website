module.exports = function(app) {

  app.get('/', function(req, res) {

    res.render('home', {
      title: 'CrowdCover LLC',
      description: 'CrowdCover LLC is a Washington D.C. based tech company providing consulting services and support for the open-source MapHubs software',
      props: {}, req
    });

  });

  app.post('/api/user/setlocale', function(req, res) {
    var data = req.body;
    if(data.locale){
      req.session.locale = data.locale;
      req.setLocale(data.locale);
    }
    res.status(200).send({success: true});

  });
};
