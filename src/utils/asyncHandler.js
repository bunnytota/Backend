
export const asycHandler = (HandleRequest) => {
    (req, res, next) => {
        Promise.resolve(HandleRequest(req, res, next)).catch((error) => {
            next(error)
        })
    }
}