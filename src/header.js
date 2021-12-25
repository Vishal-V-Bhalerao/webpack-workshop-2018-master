/* 
* ESM default module export
*/
export const makeButton = buttonName => {
    const label = `${buttonName} button`
    const button = document.createElement('button')
    button.innerHTML = label
    return button
}