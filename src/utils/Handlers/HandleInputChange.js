export default function handleInputChange(event, setter, isCheckbox) {
    setter(function (previousState) {
        return {
            ...previousState,
            [event.target.name]: !isCheckbox ? event.target.value : event.target.checked
        }
    })
}