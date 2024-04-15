// const form = document.getElementsByTagName('form');
const input = document.getElementById('link-input');
const form = document.getElementById('link-form');
const msg = document.getElementById('error-msg');


form.addEventListener('submit', formSubmit)

// Validate a URL
function validURL(str) {
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$',
      'i'
    )
    return !!pattern.test(str)
  }
  

function formSubmit(e){

    e.preventDefault()
    if(input.value === ''){
        msg.innerHTML = 'Please Use valid Link'
        input.classList.add('border-red')
    }else if (!validURL(input.value)){
        msg.innerHTML = 'Please Use valid Link'
        input.classList.add('border-red')

    }else{
        msg.innerHTML = ''
        input.classList.remove('border-red')
        alert('Success')
    }

}