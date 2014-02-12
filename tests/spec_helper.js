chai = require('chai');
sinon = require('sinon');
sinonChai = require('sinon-chai');

expect = chai.expect;
chai.use(sinonChai);

require('../source/app');

