// Show/Hide 
const main = document.querySelector('main')
const buttonRounds = Array.from(document.querySelectorAll('.-button'))
const listContents = Array.from(document.querySelectorAll('.list-group'))

// loop through all buttons
buttonRounds.forEach(button => {
    // add click event listener to each button
    button.addEventListener('click', function() {
        // When we designate a target element, we set an attribute (like data-target) of the button to the same value as the id of the list-group. This works because id is unique. There should not be two elements with the same id.
        const target = button.dataset.target
        console.log(target)

        // find the correct listContent with target, querySelector, and id(#target)
        const listContent = main.querySelector('#' + target)
        console.log(listContent)

        // remove -selected classname for all buttons
        buttonRounds.forEach(btn => btn.classList.remove('-selected'))
        // add -selected button on the clicked button
        button.classList.add('-selected')

        //
        listContents.forEach(players => players.classList.remove('-selected'))
        listContent.classList.add('-selected')
    })
})

    
