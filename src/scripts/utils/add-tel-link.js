import $ from 'jquery'

const $elem = $('._js-tel')
const cond = /-/

$elem.each(function (index, elem) {
  const $this = $(elem)
  const rawTelNum = $this.text().split(cond).join('')

  // 指定以下のサイズ時に a:tel のリンクで電話番号を包含する
  if (window.matchMedia(`(max-width: 768px)`).matches) {
    const $a = $('<a class="_js-tel-link"></a>').attr(
      'href',
      `tel:${rawTelNum}`
    )
    $this.wrapInner($a)
  }
})
