export class SuccessResponse{
    static base = () => {
        return {
            message: "Thao tác thành công",
            statusCode: 200,
            flag: true
        }
    }

    static response = (data: Object[] | Object | null) => {
        return {
            message: "Thao tác thành công",
            statusCode: 200,
            data: data,
            flag: false
        }
    }
}