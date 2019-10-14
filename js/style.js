(function() {
  var stripe = Stripe('pk_live_DKxmRp3iMVOQ8JcCCujgltje');

  var checkoutButton = document.getElementById('checkout-button-sku_Fz8vn3xtdpZ8nW');
  checkoutButton.addEventListener('click', function () {
    // When the customer clicks on the button, redirect
    // them to Checkout.
    stripe.redirectToCheckout({
      items: [{sku: 'sku_Fz8vn3xtdpZ8nW', quantity: 1}],

      // Do not rely on the redirect to the successUrl for fulfilling
      // purchases, customers may not always reach the success_url after
      // a successful payment.
      // Instead use one of the strategies described in
      // https://stripe.com/docs/payments/checkout/fulfillment
      successUrl: 'https://modalert.site/payment-success.html',
      cancelUrl: 'https://modalert.site/payment-failed.html',
      billingAddressCollection: 'required',

    }),
stripe.paymentRequest({

requestShipping: true,
  ShippingAddress: [
    
    {
      phone: 'required',
    },
  ],

})


    .then(function (result) {
      if (result.error) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer.
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
      }
    });
  });
})();
