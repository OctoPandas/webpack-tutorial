import(/* webpackChunkName: 'jquery' */ 'jquery').then(({ default: $ }) => {
  $('body').text('lazy load library')
})
