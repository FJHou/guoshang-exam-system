export function deleteCookie (name) {
  var exp = new Date()
  exp.setTime(exp.getTime() - 1)
  var cval = getCookie(name)
  document.cookie = name + '=' + cval + '; expires=' + exp.toGMTString() + '; path=/'
}

export function getCookie (name) {
  var arg = name + '='
  var alen = arg.length
  var clen = document.cookie.length
  var i = 0
  while (i < clen) {
    var j = i + alen
    if (document.cookie.substring(i, j) === arg) {
      return GetCooki(j)
    }

    i = document.cookie.indexOf(' ', i) + 1
    if (i === 0) break
  }
  return null
}

export function setCookie (name, value) {
  var Days = 30
  var exp = new Date()
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
  document.cookie = name + '=' + value + ';expires=' + exp.toGMTString() + '; path=/'
}

function GetCooki (offset) {
  var endstr = document.cookie.indexOf(';', offset)
  if (endstr === -1) {
    endstr = document.cookie.length
  }

  var val = document.cookie.substring(offset, endstr)
  if (val === '') {
    return ''
  } else {
    try {
      return decodeURIComponent(val)
    } catch (error) {
      return unescape(val)
    }
  }
}
