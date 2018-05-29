var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

describe('Test get single song with /randomsong', function () {

	var requestResult;
	var response;
		 
    before(function (done) {
        chai.request("http://localhost:8080")
			.get("/users")
			.end(function (err, res) {
				requestResult = res.body;
				response = res;
                expect(err).to.be.null;
                expect(res).to.have.status(200);
				done();
			});
    });
    
    it('Should return an array object with more than 1 JSON object', function (){
        expect(response).to.have.status(200);
        expect(response.body).to.have.length(4);
        expect(response).to.have.headers;
    });
 
    it('The elements in the array have the expected properties', function(){
        expect(response.body).to.satisfy(
            function (body) {
                for (var i = 0; i < body.length; i++) {
                    console.log('checking user: ' + i);
                    expect(body[i]).to.have.property('username');
                    expect(body[i]).to.have.property('email');
                    expect(body[i]).to.have.property('password');
                    expect(body[i]).to.have.property('bio');
                    expect(body[i]).to.have.property('facebook');
                    expect(body[i]).to.have.property('twitter');
                    expect(body[i]).to.have.property('first_name').that.is.a('string');
                    expect(body[i]).to.have.property('last_name').that.is.a('string');
                    expect(body[i]).to.have.property('phone').that.is.a('string');
                    expect(body[i]).to.have.property('balance').that.is.a('number');
                    expect(body[i]).to.have.property('reviews').to.be.an('array');
                    expect(body[i]).to.have.property('songs').to.be.an('array');

                    //check known properties of each user
                    //i.e. number of reviews submitted, or songs in the database.
                    if (i == 0 || i == 1) {
                        expect(body[i]).to.have.property('reviews').to.have.length.above(1);
                    } else if (i == 2) {
                        expect(body[i]).to.have.property('reviews').to.be.an('array').that.is.empty;
                        expect(body[i]).to.have.property('songs').to.be.an('array').that.is.empty;
                    } else {
                        expect(body[i]).to.have.property('songs').to.have.length(18);
                    }
                }
                return true;
            });
    });
	
});