import { instanceKeepAlive } from '../src/util';

test('unauthenticated calls fail', () => {
    return expect(
        instanceKeepAlive('1926b858-0d00-4b84-b7ca-5c56be880525', ''),
    ).rejects.toThrow();
});
