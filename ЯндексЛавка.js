describe ('Тестирование поиска', function () {
   it('Поиск товара', function () {
      cy.visit('https://lavka.yandex.ru/');
      cy.get('#search-input-id').type('Milky Way').type('{enter}');
      cy.get(':nth-child(4) > .p10zc8qs > .cnopttn > .cemlhxk > .cbd5l0r > .b4t8cc8 > .blqzucu > .s11ek26s > .bzscopr').click();
      cy.get('.i164506l').click(cy.get('.aw6oc3a > .bzscopr'));

         })
})