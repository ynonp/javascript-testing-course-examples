describe('Array', function() {
    describe('#indexOf', function() {
        it('should return -1 if element not found', function() {
            const haystack = [10, 20, 30, 40];
            const needle   = 50;

            const index = haystack.indexOf(needle);

            expect(index).toEqual(-1);
        });
        
        it('should return the index if element is found', function() {
            const haystack = [10, 20, 30, 40];
            const needle   = 20;

            const index = haystack.indexOf(needle);

            expect(index).toEqual(1);
        });
    });
});

