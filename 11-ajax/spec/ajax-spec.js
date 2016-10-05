import { searchFilm } from 'omdbfuncs';
import {} from 'jasmine-ajax';

describe('#searchFilm', function() {
  beforeEach(function() {
    jasmine.Ajax.install();
  });

  afterEach(function() {
    jasmine.Ajax.uninstall();
  });

  it('should call cb after receiving server response', function() {
    const cb = jasmine.createSpy();

    searchFilm('fargo', cb);

    jasmine.Ajax.requests.mostRecent().respondWith({
      "status": 200,
      "contentType": 'application/json',
      "responseText": JSON.stringify({ Search: [ { Title: "Fargo", Year: "1996" } ] }),
    });

    expect(cb).toHaveBeenCalled();
  });

  it('should call cb with provided JSON object', function() {
    const cb = jasmine.createSpy();
    const result = {Search: [{Title: "Fargo", Year: "1996" }]};

    searchFilm('fargo', cb);

    jasmine.Ajax.requests.mostRecent().respondWith({
      "status": 200,
      "contentType": 'application/json',
      "responseText": JSON.stringify(result),
    });

    // both work:
    expect(cb).toHaveBeenCalledWith(result, jasmine.any(String), jasmine.any(Object));
    expect(cb.calls.mostRecent().args[0]).toEqual(result);
  });

  it('should not call callback if server had an error', function() {
    const cb = jasmine.createSpy();
    const result = {Search: [{Title: "Fargo", Year: "1996" }]};

    searchFilm('fargo', cb);

    jasmine.Ajax.requests.mostRecent().respondWith({
      "status": 500,
      "contentType": 'application/json',
      "responseText": JSON.stringify(result),
    });

    expect(cb).not.toHaveBeenCalled();
  });
});
