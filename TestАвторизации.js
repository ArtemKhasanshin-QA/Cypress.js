describe ('Тестирование авторизации на staya', function () {
   it('Проверка сайта на авторизацию', function () {
      cy.visit('https://staya.dog/');
      cy.get('.header-bottom__right--link').click();
      cy.get('.auth-form > form > [type="email"]').type('dscksj@bk.com');
      cy.get('.auth-form > form > [type="password"]').type('esfjslef.eslfj');
      cy.get('.auth-form__submit').click();
      cy.contains('Мои заказы');
   })
})