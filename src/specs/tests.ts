/// <reference path="../../node_modules/@greyepoxy/common-gulp-tasks/supportFiles/typings/jasmine/jasmine.d.ts" />

import {GetBFor} from '../foo/b';

describe('FakeTests', () => {
	it('works', () => {
		let b = GetBFor(5);
		expect(b.getNum()).toEqual(5);
	});
});
