import { Trans } from "../trans/trans"

export class ResponseClient{
    static base = (method: string, data: Object | Object[] | null = null, flag: Boolean = false) => {
        return {
            status: {
                code: method != 'PostMapping' ? 200 : 201,
                success: true
            },
            message: {
                success: Trans.RA_RESPONSE_SUCCESS
            },
            data: data,
            ui: {
                flag: flag
            }
        }
    }
}