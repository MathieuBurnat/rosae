import moment from 'moment'

function datePretty(date) {
    return moment(date).format("ddd MMM DD, YYYY [at] HH:mm a")
}

export default datePretty;