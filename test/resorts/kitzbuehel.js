var should = require('should');
var fs = require('fs');
var parser = require('../../lib/lifts/parser');
var parse = require('../../lib/lifts/parse')('kitzbuehel');

/*global describe, it */
describe('parse kitzbuehel', function() {

  it('should return lift status', function(done) {
    var stream = fs.createReadStream(__dirname + '/example/kitzbuehel.html');
    stream.on('error', done);
    stream.pipe(parser(parse, function(err, status) {
      var expected = {
        'A1 Hahnenkammbahn': 'closed',
        'A2 Ganslern': 'closed',
        'A3 Walde': 'closed',
        'A4 Fleckalmbahn': 'closed',
        'A5 Rasmusleiten': 'closed',
        'A6 Märchenwald': 'closed',
        'A8 Ministreif': 'closed',
        'A9 Mocking': 'closed',
        'B1 Hornbahn I': 'closed',
        'B2 Hornbahn II': 'closed',
        'B3 Horngipfelbahn': 'closed',
        'B4 Raintal': 'closed',
        'B5 Brunellenfeld': 'closed',
        'B6 Alpenhaus': 'closed',
        'B7 Hornköpfl': 'closed',
        'B8 Sun Kid': 'closed',
        'B9 Eggl': 'closed',
        'B10 Trattalmmulde': 'closed',
        'C1 Steinbergkogel': 'closed',
        'C2 Ehrenbachhöhe': 'closed',
        'C4 Sonnenrast': 'closed',
        'C7 Jufenalm': 'closed',
        'D1 Silberstube': 'closed',
        'D2 Hieslegg': 'closed',
        'D3 Pengelstein II': 'closed',
        'D4 Usterkar': 'closed',
        'D5 Pengelstein I': 'closed',
        'D6 Übungslift Aschau': 'closed',
        'D7 Kasereck': 'closed',
        'D8 Hochsaukaser': 'closed',
        'D9 3S-Bahn': 'closed',
        'D10 Sun Kid Aschau': 'closed',
        'E1 Maierlbahn': 'closed',
        'E2 Ochsalm': 'closed',
        'E5 Übungslift Reith': 'closed',
        'E6 Übungslift Reith': 'closed',
        'E7 Übungslift Kirchberg': 'closed',
        'E8 Gaisberg': 'closed',
        'F1 Wagstättbahn': 'closed',
        'F3 Hausleiten': 'closed',
        'F5 Talsen': 'closed',
        'F6 Bärenbadkogel I': 'closed',
        'F7 Bärenbadkogel II': 'closed',
        'F8 Gauxjoch': 'closed',
        'F9 Trattenbach': 'closed',
        'G1 Resterhöhe': 'closed',
        'G2 Pass Thurn': 'closed',
        'G4 Resterkogel': 'open',
        'G5 Hanglalm': 'closed',
        'G7 Hartkaser': 'closed',
        'G8 Zweitausender': 'closed',
        'G9 Panoramab. Kitzb. Alpen I': 'closed',
        'G10 Panoramab. Kitzb. Alpen II': 'open'
      };
      should.exist(status);
      status.should.eql(expected);
      done(err);
    }));
  });
});
