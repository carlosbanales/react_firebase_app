import { add } from './index';

console.log(add(1,2));

test('add', () => {
	const value = add(1,2);
	expect(value).toBe(3);
});
