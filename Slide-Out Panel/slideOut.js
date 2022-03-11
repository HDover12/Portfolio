let wrapper = document.getElementById('wrapper')

function myfunc(e) {
let event = e.target

if (event.id !== 'wrapper' && event.id !== 'tooltip' && event.id !== 'panel' && event.id !== 'panelWrap' && event.id !== 'btn') {
    function popUp() {
        let tooltip = document.createElement('div')
        tooltip.setAttribute('id', 'tooltip')
        event.appendChild(tooltip)
        event.style.color = 'lightblue'
        event.style.backgroundColor = 'gray'
        tooltip.innerHTML = '?'
        tooltip.onclick = slideOut

        function slideOut() {
            tooltip.style.display = 'none'
            let panel = document.createElement('div')
            panel.id = 'panel'
            panel.style.left = '105%'
            panel.style.zIndex = '2'
            event.appendChild(panel)
            let panelContent = event.textContent.substring(0, 60)
            panel.innerHTML = `<div id = 'panelWrap'><button id='btn'>X              </button><br>${panelContent}</div>`
            panel.className = event.id
            document.getElementById('btn').addEventListener('click', () => {
                document.getElementById('panel').remove()
                document.getElementById('tooltip').remove()
            })
        }
        if (event.id !== 'panelWrap') { 
        event.addEventListener('mouseout', () => {
            event.style.color = 'black'
            event.style.backgroundColor = 'white'
        })}
    }

    if (document.getElementById('panel') && event.id !== panel.className && event.id !== 'btn' && event.id !== 'panelWrap') {
           document.getElementById("panel").remove();
           document.getElementById("tooltip").remove();
           popUp()
    } else if (document.getElementById('panel') && event.id === panel.className) {
        event.style.color = 'lightblue'
        event.style.backgroundColor = 'gray'
    } else if (document.getElementById('tooltip')) {
        document.getElementById("tooltip").remove();
        popUp()
    } else {
        popUp()
    }
}
}

wrapper.addEventListener('mouseover', myfunc)