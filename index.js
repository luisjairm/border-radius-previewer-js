const canvas = document.querySelector('#canvas')
const result = document.querySelector('#result')

const form = document.querySelector('#form')
const topRight = document.querySelector('#top-right')
const topLeft = document.querySelector('#top-left')

const form2 = document.querySelector('#form2')
const bottomLeft = document.querySelector('#bottom-left')
const bottomRight = document.querySelector('#bottom-right')

const copyBtn = document.querySelector('#copy')

let borders = {
  'border-top-left-radius': '0px;',
  'border-top-right-radius': '0px;',
  'border-bottom-left-radius': '0px;',
  'border-bottom-right-radius': '0px;',
}

let codeCSS = ''

copyBtn.addEventListener('click', async()=>{

  if(codeCSS === ''){
    alert('Aun no hay nada que copiar')
    return
  }

  try {
    await navigator.clipboard.writeText(codeCSS);
    alert('Copiado al portapapeles')
  } catch (err) {
    alert('Algo salio mal')
    console.error('Failed to copy: ', err);
  }
})

const cleanText = () =>{
      result.innerText = ''
      let bordersText = JSON.stringify(borders,null, 2)
      codeCSS =  bordersText.replace(/("|,|{|})/gm, '')
      result.innerText = codeCSS
}

const borderRadius = (direction, value) => { 
  switch (direction) {
    case 'top-left':
      canvas.style.borderTopLeftRadius = `${value}px`
      borders["border-top-left-radius"] = `${value}px;`
      cleanText()
      break;
    case 'top-right':
      canvas.style.borderTopRightRadius = `${value}px`
      borders["border-top-right-radius"] = `${value}px;`
      cleanText()
      break
    case 'bottom-left':
      canvas.style.borderBottomLeftRadius = `${value}px`
      borders["border-bottom-left-radius"] = `${value}px;`
      cleanText()
      break
    case 'bottom-right':
      canvas.style.borderBottomRightRadius = `${value}px`
      borders["border-bottom-right-radius"] = `${value}px;`
      cleanText()
      break
    
    default:
      break;
  }
 }

topLeft.addEventListener('change', (e)=>{
  // e.preventDefault()
  borderRadius('top-left', topLeft.value)
})

topRight.addEventListener('change', (e)=>{
  // e.preventDefault()
  borderRadius('top-right', topRight.value)
})

bottomLeft.addEventListener('change', (e)=>{
  // e.preventDefault()
  borderRadius('bottom-left', bottomLeft.value)
})

bottomRight.addEventListener('change', (e)=>{
  // e.preventDefault()
  borderRadius('bottom-right', bottomRight.value)
})