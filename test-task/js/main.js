const form = document.querySelector('form')
const tariffOne = document.getElementById('tariff-one')
const tariffTwo = document.getElementById('tariff-two')
const tariffThree = document.getElementById('tariff-three')
const $period = document.getElementById('period')

const total = document.querySelector('.total')
const tariffPlan = document.querySelector('.tariff_plan')

let plan = 13
let period = 1

form.addEventListener('click', clickHandler)
$period.addEventListener('change', selectkHandler)

function clickHandler(e) {
  if (e.target.type === 'submit') {
    e.preventDefault()

    const request = new XMLHttpRequest()
    const url = 'ajax.php'
    const params = 'plan=' + plan + '&period=' + period
    request.open('POST', url, true)
    request.setRequestHeader(
      'Content-type',
      'application/x-www-form-urlencoded'
    )

    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        let obj = request.response

        alert(obj)
      }
    })

    request.send(params)
  } else if (
    e.target == tariffOne ||
    e.target == tariffTwo ||
    (e.target == tariffThree &&
      !e.target.parentElement.classList.contains('active'))
  ) {
    tariffOne.parentElement.classList.remove('active')
    tariffTwo.parentElement.classList.remove('active')
    tariffThree.parentElement.classList.remove('active')
    e.target.parentElement.classList.add('active')

    plan = e.target.value
    calc()

    tariffPlan.innerHTML = `Selected plan: #${e.target.getAttribute(
      'data-tariff'
    )}`
  }
}

function selectkHandler(e) {
  period = e.target.value
  calc()
}

function calc() {
  const price = period * plan
  total.innerHTML = price
}
