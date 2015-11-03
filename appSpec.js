describe('optIn', function() {

    var scope,
        element,
        compiled,
        html,
        someone;

    beforeEach(module("myApp"));
    beforeEach(module('signupform.html'));
    beforeEach(inject(function($rootScope, $compile) {
        scope = $rootScope.$new();
        someone = 'Acme, Inc.';
        html = "<opt-in> </opt-in>";
        compiled = $compile(html);
        element = compiled(scope);
        scope.$digest();
    }));
    it('should render out a sign up box', function(){
        expect(element.text()).toContain('Acme, Inc.');
        expect(element.text()).toContain(someone);
    })
});
