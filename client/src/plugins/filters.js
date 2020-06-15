import Vue from 'vue'
import moment from 'moment'

Vue.filter('date', (data, format, action) => {
	if (action === 'fromNow') return moment.unix(data / 1000).fromNow()
	return moment.unix(data / 1000).format(format)
})

Vue.filter('cut', (data, number = 2) => {
	return (data) ? data.slice(0, number) : ''
})