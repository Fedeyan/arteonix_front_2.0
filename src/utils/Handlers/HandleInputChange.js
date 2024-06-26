export default function handleInputChange(event, setter, errorSetter, isCheckbox) {
    setter(function (previousState) {
        return {
            ...previousState,
            [event.target.name]: !isCheckbox ? event.target.value : event.target.checked
        }
    })

    errorSetter(function (previousErrorState) {
        return {
            ...previousErrorState,
            [event.target.name]: !isCheckbox ? "" : event.target.checked,
            formError: ""
        }
    })
}