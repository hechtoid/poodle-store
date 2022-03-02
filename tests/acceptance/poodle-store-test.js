import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | poodle store', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /poodle-store', async function (assert) {
    await visit('/poodle-store');

    assert.strictEqual(currentURL(), '/poodle-store');
  });
});
