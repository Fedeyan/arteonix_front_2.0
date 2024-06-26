export default function getStorage(name) {
    try {

        let item = localStorage.getItem(name) || sessionStorage.getItem(name)
        return item

    } catch (error) {
        console.log(error)
    }
}