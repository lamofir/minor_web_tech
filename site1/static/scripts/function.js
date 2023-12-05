const node_for_click = document.getElementById('for_click')
function find_edit() {
console.log(node_for_click.innerText)
document.getElementsByClassName('gumvd')[0].innerText='GU MVD PO GORODU MOSKVE'
document.getElementsByClassName('sur')[0].innerText='BHALLA'
document.getElementsByClassName('sur')[0].innerText='BHALLA'
document.getElementsByClassName('name')[0].innerText='ARJUN MOHAN'
document.getElementsByClassName('sex')[0].innerText='male'
document.getElementsByClassName('city')[0].innerText='MOSCOW'

}
node_for_click.addEventListener("click",find_edit)