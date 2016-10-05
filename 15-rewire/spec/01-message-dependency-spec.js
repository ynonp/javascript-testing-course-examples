import { writeRandomValueToDom } from '01-message-dependency';

describe('#writeRandomValueToDom', function() {
    it('should call random(100) to get a random number in range', function() {
        const r = { random: jasmine.createSpy('randomizer') };
        const d = { textContent: "" };
        
        writeRandomValueToDom(d, r);
        
        expect(r.random).toHaveBeenCalledWith(100);
    });
    
    it('should write the random number it got from random to the element', function() {
        const r = { random: function() { return 50; } };
        const d = { textContent: "" };
        
        writeRandomValueToDom(d, r);
        
        expect(d.textContent).toEqual(50);
    });
});

