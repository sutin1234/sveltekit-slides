import dayjs from 'dayjs'
import 'dayjs/locale/th.js'
dayjs.locale('th')

export const dateThai = (datetime: string, format = 'MMMM D, YYYY'): string => {
    const cDate = new Date(datetime)
    return dayjs(cDate).format(format)
}