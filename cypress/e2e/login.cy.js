/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display alert when email and password are wrong
 *   - should display homepage when email and password are correct
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('should display login page correctly', () => {
    // memverifikasi elemen yang harus tampak pada halaman login
    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button')
      .contains(/^Login$/)
      .should('be.visible');
  });

  it('should display alert when userna is empty', () => {
    // klik tombol login tanpa mengisi email
    cy.get('button')
      .contains(/^Login$/)
      .click();

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"id" is not allowed to be empty');
    });
  });

  it('should display alert when password is empty', () => {
    // mengisi username
    cy.get('input[placeholder="Email"]').type('mayangpuspitas@gmail.com', {
      force: true,
    });

    // klik tombol login tanpa mengisi password
    cy.get('button')
      .contains(/^Login$/)
      .click();

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display alert when Email and password are wrong', () => {
    // mengisi username
    cy.get('input[placeholder="Email"]').type('mayangpuspitas@gmail.com', {
      force: true,
    });

    // mengisi password yang salah
    cy.get('input[placeholder="Password"]').type('wrong_password', {
      force: true,
    });

    // menekan tombol Login
    cy.get('button')
      .contains(/^Login$/)
      .click();

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('User ID or password is wrong');
    });
  });

  it('should display homepage thread when Email and password are correct', () => {
    // mengisi email
    cy.get('input[placeholder="Email"]').type('mayangpuspitas@gmail.com');

    // mengisi password
    cy.get('input[placeholder="Password"]').type('123456');

    // menekan tombol Login
    cy.get('button')
      .contains(/^Login$/)
      .click();

    // memverifikasi bahwa elemen yang berada di homepage thread ditampilkan
    cy.get('nav')
      .contains(/^Threads$/)
      .should('be.visible');
    cy.get('button').contains('SignOut').should('be.visible');
  });
});
