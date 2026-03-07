import { test, expect } from '@playwright/test';

test('formulario de login: validación de campos requeridos', async ({ page }) => {
  await page.goto('./67001167/index.html');

  await page.click('button[type="submit"]');

  await expect(page.getByText('El correo es obligatorio')).toBeVisible();
  await expect(page.getByText('La contraseña es obligatoria')).toBeVisible();
});

test('formulario de login: credenciales válidas', async ({ page }) => {
  await page.goto('./67001167/index.html');

  await page.fill('#email', 'usuario@test.com');
  await page.fill('#password', '123456');

  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(/.*dashboard/);
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});