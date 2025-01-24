import { Trans } from '../trans/trans';

export class ResponseClient {
  static base = (
    method: 'GET' | 'POST' | 'PATCH' | 'DELETE',
    data: object | object[] | null = null,
    flag: boolean = false,
  ) => {
    return {
      status: {
        code: method != 'POST' ? 200 : 201,
        success: true,
      },
      message: {
        success: Trans.RA_RESPONSE_SUCCESS,
      },
      data: data,
      ui: {
        flag: flag,
      },
    };
  };
}
