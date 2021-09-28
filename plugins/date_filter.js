import Vue from 'vue'

Vue.filter('longMonth_numericYear', (date) => {
    const options = {year: 'numeric', month: 'long'}
    let f_date = new Date(date)
    return f_date.toLocaleDateString('en-US', options)
})
