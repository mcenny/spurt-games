const paystack_key = process.env.NEXT_PUBLIC_PAYSTACK_SECRET_KEY;


export const payWithPaystack = async (data) => {
  console.log({ paystack_key });
  const PaystackPop = (await import('@paystack/inline-js')).default;

  const paystack = new PaystackPop();

  return new Promise((resolve, reject) => {
    try {
      paystack.checkout({
        key: 'pk_test_bd45fb7e5dce9bc60d93a3f623fe4c1b59de19eb',
        email: data.email,
        amount: data.amount,
        onSuccess: (transaction) => {
          if (transaction) {
            resolve(transaction);
          }
        },
        onCancel: () => {
          console.log('Payment cancelled');
          resolve({ canceled: true });
        },
        onError: () => {
          console.log('Payment error');
          reject({ paymentError: true });
        },
      });
    } catch (error) {
      console.log(error);
      reject({ paymentError: true });
    }
  });
};
