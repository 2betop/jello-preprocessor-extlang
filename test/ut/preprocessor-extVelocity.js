var expect = require('chai').expect,
    fs = require('fs'),
    ext_v = require('../../index.js');

describe('compile', funcion(){
    
    it('', function(){
        var content = fs.readFileSync(__dirname + '/file/index.vm');
        var target = fs.readFileSync(__dirname + '/file/target.vm');
        expect(content).to.equal(target);

    });
});
