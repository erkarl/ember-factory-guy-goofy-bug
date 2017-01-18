import { test } from 'qunit';
import moduleForAcceptance from 'factory-guy-test/tests/helpers/module-for-acceptance';
import FactoryGuy from 'ember-data-factory-guy';

moduleForAcceptance('Acceptance | random test');

test('visiting /', function(assert) {
  visit('/');
  console.log(FactoryGuy.store);
});
