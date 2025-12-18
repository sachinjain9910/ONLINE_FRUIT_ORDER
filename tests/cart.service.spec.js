describe('Cart Service - Step 1 Basic Pricing', () => {

  const calculateCartTotal = require('../src/cart.service');

  test('should return Rs.10 when 1 apple is added to cart', () => {
    const cartItems = [
      { productId: 'APPLE', quantity: 1 }
    ];

    const total = calculateCartTotal(cartItems);

    expect(total).toBe(10);
  });

  test('should return Rs.20 when 2 apples are added to cart', () => {
    const cartItems = [
      { productId: 'APPLE', quantity: 2 }
    ];

    const total = calculateCartTotal(cartItems);

    expect(total).toBe(20);
  });

  test('should return Rs.20 when 1 orange is added to cart', () => {
    const cartItems = [
      { productId: 'ORANGE', quantity: 1 }
    ];

    const total = calculateCartTotal(cartItems);

    expect(total).toBe(20);
  });

  test('should return Rs.40 when 2 oranges are added to cart', () => {
    const cartItems = [
      { productId: 'ORANGE', quantity: 2 }
    ];

    const total = calculateCartTotal(cartItems);

    expect(total).toBe(40);
  });

  test('should calculate total for mixed fruits correctly', () => {
    const cartItems = [
      { productId: 'APPLE', quantity: 2 },
      { productId: 'ORANGE', quantity: 1 }
    ];

    const total = calculateCartTotal(cartItems);

    expect(total).toBe(40);
  });

});
