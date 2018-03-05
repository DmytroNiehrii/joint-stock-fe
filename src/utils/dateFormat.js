import moment from 'moment'

export const timestampToDate = (timestamp) => {
    return moment(timestamp).format("DD/MM/YYYY H:mm:ss")
}