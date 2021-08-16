import { GraphQLEnumType } from 'graphql';

import { PAYMENT_METHOD_TYPE } from '../../../constants/paymentMethods';

export const PaymentMethodType = new GraphQLEnumType({
  name: 'PaymentMethodType',
  values: Object.keys(PAYMENT_METHOD_TYPE).reduce((values, key) => {
    return { ...values, [key]: { value: PAYMENT_METHOD_TYPE[key] } };
  }, {}),
});
