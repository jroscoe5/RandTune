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
			.get("/randomsong")
			.end(function (err, res) {
				requestResult = res.body;
				response = res;
                expect(err).to.be.null;
                expect(res).to.have.status(200);
				done();
			});
        });
    
    it('Should return a JSON object', function (){
		expect(response).to.have.status(200);
        expect(response).to.be.json;
    });
    
	it('The song has known property types', function(){
	    expect(requestResult).to.have.property('title');
		expect(requestResult).to.have.property('musician');
		expect(response.body).to.not.be.a.string;
	});
	
});